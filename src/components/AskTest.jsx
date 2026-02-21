import { useEffect, useState } from 'react';
import './AskTest.css';

function AskTest({ questionsData }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isFinished, setIsFinished] = useState(false);
  const [finishReason, setFinishReason] = useState('time');
  const [mode, setMode] = useState('training');

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setQuestions(shuffleArray(questionsData || []));
    setScore(0);
    setAnswers({});
    setCurrentIndex(0);
    setTimeLeft(60);
    setIsFinished(false);
    setFinishReason('time');
  }, [questionsData]);

  const calculateFinalScore = () => {
    let final = 0;
    questions.forEach((item) => {
      const answer = answers[item.id];
      if (answer?.correct) final += 1;
    });
    setScore(final);
  };

  useEffect(() => {
    if (mode !== 'exam') return;
    if (isFinished) return;

    if (timeLeft === 0) {
      calculateFinalScore();
      setFinishReason('time');
      setIsFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isFinished, mode, questions, answers]);

  useEffect(() => {
    if (mode === 'training') {
      setTimeLeft(60);
      setIsFinished(false);
      setFinishReason('time');
    }

    if (mode === 'exam') {
      setTimeLeft(60);
      setIsFinished(false);
      setFinishReason('time');
    }
  }, [mode]);

  const handleAnswer = (questionId, option) => {
    if (isFinished) return;
    if (answers[questionId]) return;

    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));

    if (mode === 'training' && option.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setAnswers({});
    setQuestions(shuffleArray(questionsData || []));
    setCurrentIndex(0);
    setTimeLeft(60);
    setIsFinished(false);
    setFinishReason('time');
  };

  const question = questions[currentIndex];
  const displayScore = mode === 'exam' && !isFinished ? '--' : score;
  const progressWidth = questions.length
    ? ((currentIndex + 1) / questions.length) * 100
    : 0;

  return (
    <div className="ask-test">
      <div className="ask-mode-selector">
        <button
          type="button"
          className={mode === 'training' ? 'active' : ''}
          onClick={() => setMode('training')}
        >
          Mode Entrenament
        </button>

        <button
          type="button"
          className={mode === 'exam' ? 'active' : ''}
          onClick={() => setMode('exam')}
        >
          Mode Examen Oficial
        </button>
      </div>

      <div className="ask-header">
        <div className="ask-score">
          Puntuació: {displayScore} / {questions.length}
        </div>

        {mode === 'exam' && (
          <div className={`ask-timer ${timeLeft <= 10 ? 'warning' : ''}`}>
            ⏱ {timeLeft}s
          </div>
        )}
      </div>

      <div className="ask-progress-container">
        <div
          className="ask-progress-bar"
          style={{ width: `${progressWidth}%` }}
        />
      </div>

      {question && (
        <div key={question.id} className="ask-card">
          <h3>Pregunta {currentIndex + 1} / {questions.length}</h3>
          <p className="ask-question">{question.question}</p>

          {(question.options || []).map((option) => {
            const selectedAnswer = answers[question.id];
            const isAnswered = !!selectedAnswer;
            const isSelected = selectedAnswer?.key === option.key;
            const shouldShowCorrection =
              (mode === 'training' && isAnswered) || (mode === 'exam' && isFinished);

            let className = 'ask-option';

            if (shouldShowCorrection) {
              if (option.correct) className += ' correct';
              else if (isSelected && !option.correct) className += ' incorrect';
            }

            return (
              <button
                key={option.key}
                type="button"
                className={className}
                onClick={() => handleAnswer(question.id, option)}
                disabled={isAnswered || isFinished}
              >
                {option.key}) {option.text}
              </button>
            );
          })}

          {((mode === 'training' && answers[question.id]) || (mode === 'exam' && isFinished)) && (
            <div className={`ask-feedback ${answers[question.id]?.correct ? 'correct' : 'incorrect'}`}>
              <p>
                {answers[question.id]?.correct
                  ? '✅ Resposta correcta'
                  : answers[question.id]
                    ? '❌ Resposta incorrecta'
                    : '⚪ Sense resposta'}
              </p>
              <p className="ask-explanation">
                {question.explanation}
              </p>
            </div>
          )}

          <div className="ask-navigation">
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
              disabled={currentIndex === 0}
            >
              ◀
            </button>

            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1))}
              disabled={currentIndex === questions.length - 1}
            >
              ▶
            </button>
          </div>

          <div className="ask-status-grid">
            {questions.map((item, index) => {
              const answered = !!answers[item.id];
              return (
                <span
                  key={item.id}
                  className={`status-dot ${answered ? 'answered' : 'pending'} ${currentIndex === index ? 'current' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      setCurrentIndex(index);
                    }
                  }}
                >
                  {index + 1}
                </span>
              );
            })}
          </div>

          {mode === 'exam' && !isFinished && (
            <button
              type="button"
              className="ask-finish"
              onClick={() => {
                calculateFinalScore();
                setFinishReason('manual');
                setIsFinished(true);
              }}
            >
              Finalitzar examen
            </button>
          )}

          {isFinished && (
            <div className="ask-finished">
              {finishReason === 'manual'
                ? `✅ Examen finalitzat. Puntuació final: ${score} / ${questions.length}`
                : `⏳ Temps esgotat! Puntuació final: ${score} / ${questions.length}`}
            </div>
          )}
        </div>
      )}

      <button type="button" className="ask-restart" onClick={handleRestart}>
        🔄 Tornar a començar
      </button>
    </div>
  );
}

export default AskTest;