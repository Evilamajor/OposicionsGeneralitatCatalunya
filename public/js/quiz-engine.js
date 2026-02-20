class QuizEngine {
  constructor(config) {
    this.containerId = config.containerId;
    this.data = config.data;
    this.shuffleEnabled = Boolean(config.shuffle);
    this.showShuffleButton = config.showShuffleButton !== false;

    this.container = null;
    this.questions = [];
    this.currentIndex = 0;
    this.selectedAnswers = new Map();
    this.revealed = new Set();
    this.boundKeyHandler = this.handleKeydown.bind(this);
  }

  init() {
    this.container = document.getElementById(this.containerId);
    if (!this.container) return;

    this.questions = Array.isArray(this.data?.questions) ? [...this.data.questions] : [];

    if (!this.questions.length) {
      this.container.innerHTML = '<div class="qe-empty">En construcció</div>';
      return;
    }

    if (this.shuffleEnabled) {
      this.shuffleQuestions();
    }

    this.render();
    window.addEventListener('keydown', this.boundKeyHandler);
  }

  render() {
    const question = this.questions[this.currentIndex];
    if (!question || !this.container) return;

    const progress = ((this.currentIndex + 1) / this.questions.length) * 100;
    const score = this.getScore();
    const selected = this.selectedAnswers.get(this.currentIndex);
    const isRevealed = this.revealed.has(this.currentIndex);

    this.container.innerHTML = `
      <section class="qe-card" aria-live="polite">
        <header class="qe-header">
          <h2 class="qe-title">${this.escapeHtml(this.data.title || 'Preguntes')}</h2>
          <p class="qe-meta">Pregunta ${this.currentIndex + 1} de ${this.questions.length} · Encerts: ${score.correct}/${score.totalAnswered}</p>
        </header>

        <div class="qe-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(progress)}">
          <div class="qe-progress-bar" style="width:${progress}%;"></div>
        </div>

        <article class="qe-question-block">
          <h3 class="qe-question">${this.escapeHtml(question.prompt || '')}</h3>
          ${this.renderQuestionBody(question, selected, isRevealed)}
          ${this.renderExplanation(question, selected, isRevealed)}
        </article>

        <footer class="qe-controls">
          <button class="qe-btn qe-btn-secondary" data-action="prev" ${this.currentIndex === 0 ? 'disabled' : ''}>← Anterior</button>
          <button class="qe-btn qe-btn-primary" data-action="next" ${this.currentIndex === this.questions.length - 1 ? 'disabled' : ''}>Següent →</button>
          <button class="qe-btn qe-btn-secondary" data-action="reveal">Mostrar solució</button>
          <button class="qe-btn qe-btn-secondary" data-action="reset">Reiniciar</button>
          ${this.showShuffleButton ? '<button class="qe-btn qe-btn-secondary" data-action="shuffle">Barrejar</button>' : ''}
        </footer>
      </section>
    `;

    this.bindEvents();
  }

  renderQuestionBody(question, selected, isRevealed) {
    if (question.type === 'open') {
      return `
        <div class="qe-open-wrap">
          <textarea class="qe-open-input" rows="6" placeholder="Escriu la teva resposta aquí..."></textarea>
        </div>
      `;
    }

    const choices = this.getChoices(question);
    const answerIndex = this.getAnswerIndex(question);

    return `
      <ul class="qe-options" role="list">
        ${choices.map((choice, index) => {
          const isSelected = selected === index;
          const isCorrect = isRevealed && index === answerIndex;
          const isWrongSelected = isRevealed && isSelected && index !== answerIndex;
          const classes = [
            'qe-option',
            isSelected ? 'is-selected' : '',
            isCorrect ? 'is-correct' : '',
            isWrongSelected ? 'is-wrong' : ''
          ].join(' ').trim();

          return `
            <li>
              <button type="button" class="${classes}" data-choice-index="${index}" aria-pressed="${isSelected ? 'true' : 'false'}">
                <span class="qe-option-index">${index + 1}.</span>
                <span>${this.escapeHtml(choice)}</span>
              </button>
            </li>
          `;
        }).join('')}
      </ul>
    `;
  }

  renderExplanation(question, selected, isRevealed) {
    if (!isRevealed) return '';

    let statusHtml = '';
    if (question.type !== 'open') {
      const answerIndex = this.getAnswerIndex(question);
      const isCorrect = selected === answerIndex;
      statusHtml = `<p class="qe-status ${isCorrect ? 'is-correct' : 'is-wrong'}">${isCorrect ? 'Correcte ✔' : 'Incorrecte ✘'}</p>`;
    }

    const explanation = question.explanation || (question.type === 'open' ? question.sampleAnswer : '');
    if (!explanation) return statusHtml;

    return `
      ${statusHtml}
      <div class="qe-explanation">
        <strong>Explicació:</strong>
        <p>${this.escapeHtml(explanation)}</p>
      </div>
    `;
  }

  bindEvents() {
    this.container.querySelector('[data-action="next"]')?.addEventListener('click', () => this.next());
    this.container.querySelector('[data-action="prev"]')?.addEventListener('click', () => this.prev());
    this.container.querySelector('[data-action="reveal"]')?.addEventListener('click', () => this.reveal());
    this.container.querySelector('[data-action="reset"]')?.addEventListener('click', () => this.reset());
    this.container.querySelector('[data-action="shuffle"]')?.addEventListener('click', () => this.shuffle());

    this.container.querySelectorAll('[data-choice-index]').forEach((button) => {
      button.addEventListener('click', () => {
        this.selectAnswer(Number(button.dataset.choiceIndex));
      });
    });
  }

  next() {
    if (this.currentIndex >= this.questions.length - 1) return;
    this.currentIndex += 1;
    this.render();
  }

  prev() {
    if (this.currentIndex <= 0) return;
    this.currentIndex -= 1;
    this.render();
  }

  reveal() {
    this.revealed.add(this.currentIndex);
    this.render();
  }

  selectAnswer(index) {
    const question = this.questions[this.currentIndex];
    if (!question || question.type === 'open') return;

    const choices = this.getChoices(question);
    if (index < 0 || index >= choices.length) return;

    this.selectedAnswers.set(this.currentIndex, index);
    this.render();
  }

  reset() {
    this.currentIndex = 0;
    this.selectedAnswers.clear();
    this.revealed.clear();
    this.render();
  }

  shuffle() {
    this.shuffleQuestions();
    this.reset();
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
  }

  getChoices(question) {
    if (question.type === 'tf') {
      return ['Verdader', 'Fals'];
    }

    return Array.isArray(question.choices) ? question.choices : [];
  }

  getAnswerIndex(question) {
    if (question.type === 'tf') {
      return question.answer === true ? 0 : 1;
    }

    return Number.isInteger(question.answer) ? question.answer : -1;
  }

  getScore() {
    let correct = 0;
    let totalAnswered = 0;

    this.selectedAnswers.forEach((selected, questionIndex) => {
      const question = this.questions[questionIndex];
      if (!question || question.type === 'open') return;
      totalAnswered += 1;
      if (selected === this.getAnswerIndex(question)) {
        correct += 1;
      }
    });

    return { correct, totalAnswered };
  }

  handleKeydown(event) {
    const activeTag = document.activeElement?.tagName?.toLowerCase();
    if (activeTag === 'input' || activeTag === 'textarea') return;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.prev();
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.next();
      return;
    }

    if (/^[1-9]$/.test(event.key)) {
      event.preventDefault();
      this.selectAnswer(Number(event.key) - 1);
      return;
    }

    const lower = event.key.toLowerCase();
    if (lower === 's') {
      event.preventDefault();
      this.reveal();
      return;
    }

    if (lower === 'r') {
      event.preventDefault();
      this.reset();
    }
  }

  escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }
}

window.QuizEngine = QuizEngine;
