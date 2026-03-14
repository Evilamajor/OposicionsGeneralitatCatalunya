import { useMemo, useState } from 'react';
import './MultipleChoiceTest.css';

function getAnsweredCount(answers, total) {
  let count = 0;
  for (let index = 0; index < total; index += 1) {
    if (answers[index] !== undefined) count += 1;
  }
  return count;
}

function getScore(questions, answers) {
  let score = 0;
  questions.forEach((question, index) => {
    if (answers[index] === question.correctIndex) {
      score += 1;
    }
  });
  return score;
}

export default function MultipleChoiceTest({
  questions,
  title,
  subtitle,
}) {
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];
  const answeredCount = useMemo(
    () => getAnsweredCount(answers, totalQuestions),
    [answers, totalQuestions],
  );
  const score = useMemo(
    () => (finished ? getScore(questions, answers) : 0),
    [answers, finished, questions],
  );

  if (!Array.isArray(questions) || questions.length === 0) {
    return (
      <section className="mc-test-shell">
        <h2>{title}</h2>
        {subtitle ? <p className="mc-test-subtitle">{subtitle}</p> : null}
        <p className="mc-test-empty">Encara no hi ha preguntes disponibles per aquest test.</p>
      </section>
    );
  }

  const selectedAnswer = answers[currentIndex];

  const handleSelectOption = (optionIndex) => {
    if (finished) return;
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));
  };

  const goNext = () => {
    if (currentIndex >= totalQuestions - 1) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const goPrevious = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const finishTest = () => {
    setFinished(true);
  };

  const restartTest = () => {
    setAnswers({});
    setCurrentIndex(0);
    setFinished(false);
  };

  return (
    <section className="mc-test-shell">
      <header className="mc-test-header">
        <div>
          <h2>{title}</h2>
          {subtitle ? <p className="mc-test-subtitle">{subtitle}</p> : null}
        </div>
        <div className="mc-test-meta">
          <span>Preguntes: {totalQuestions}</span>
          <span>Respostes: {answeredCount}/{totalQuestions}</span>
        </div>
      </header>

      {!finished ? (
        <>
          <div className="mc-progress-track" aria-hidden>
            <div
              className="mc-progress-bar"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>

          <article className="mc-question-card">
            <h3>
              Pregunta {currentIndex + 1} de {totalQuestions}
            </h3>
            <p className="mc-question-text">{currentQuestion.question}</p>

            <div className="mc-options">
              {currentQuestion.options.map((option, optionIndex) => {
                const isSelected = selectedAnswer === optionIndex;
                const isCorrect = currentQuestion.correctIndex === optionIndex;
                const showCorrectness = selectedAnswer !== undefined;

                let optionClass = 'mc-option';
                if (showCorrectness && isCorrect) optionClass += ' correct';
                if (showCorrectness && isSelected && !isCorrect) optionClass += ' incorrect';
                if (isSelected) optionClass += ' selected';

                return (
                  <button
                    key={`${currentQuestion.id}-opt-${optionIndex}`}
                    type="button"
                    className={optionClass}
                    onClick={() => handleSelectOption(optionIndex)}
                    aria-pressed={isSelected}
                  >
                    <span className="mc-option-letter">{String.fromCharCode(65 + optionIndex)}</span>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>

            {selectedAnswer !== undefined ? (
              <p className="mc-answer-state">
                {selectedAnswer === currentQuestion.correctIndex
                  ? 'Resposta correcta'
                  : 'Resposta incorrecta'}
              </p>
            ) : null}
          </article>

          <div className="mc-navigation">
            <button type="button" onClick={goPrevious} disabled={currentIndex === 0}>
              Anterior
            </button>
            <button type="button" onClick={goNext} disabled={currentIndex === totalQuestions - 1}>
              Seguent
            </button>
          </div>

          <button
            type="button"
            className="mc-finish-btn"
            onClick={finishTest}
            disabled={answeredCount !== totalQuestions}
            title={answeredCount !== totalQuestions ? 'Respon totes les preguntes abans d\'acabar' : 'Finalitzar test'}
          >
            Finalitzar test
          </button>
        </>
      ) : (
        <section className="mc-result-card">
          <h3>Resultat final</h3>
          <p>
            Has obtingut <strong>{score}</strong> de <strong>{totalQuestions}</strong> preguntes correctes.
          </p>
          <p>
            Percentatge: <strong>{Math.round((score / totalQuestions) * 100)}%</strong>
          </p>
          <button type="button" className="mc-restart-btn" onClick={restartTest}>
            Reiniciar test
          </button>
        </section>
      )}
    </section>
  );
}
