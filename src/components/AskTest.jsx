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

  const getQuestionId = (item, index) => item?.id ?? `q-${index}`;

  const getOptionText = (option) => (typeof option === 'string' ? option : option?.text);

  const getOptionKey = (option, index) => {
    if (typeof option === 'object' && option?.key) return option.key;
    return String.fromCharCode(65 + index);
  };

  const isCorrectAnswer = (item, selectedIndex) => {
    if (selectedIndex === undefined || selectedIndex === null) return false;

    const selectedOption = item?.options?.[selectedIndex];
    if (selectedOption && typeof selectedOption === 'object' && 'correct' in selectedOption) {
      return Boolean(selectedOption.correct);
    }

    return Number(item?.correct) === selectedIndex;
  };

  const getAnswerExplanation = (item, selectedIndex) => {
    const explanations = item?.explanations;
    if (Array.isArray(explanations) && selectedIndex !== undefined && selectedIndex !== null) {
      return explanations[selectedIndex] || '';
    }
    return item?.explanation || '';
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
    questions.forEach((item, index) => {
      const questionId = getQuestionId(item, index);
      const selectedIndex = answers[questionId];
      if (isCorrectAnswer(item, selectedIndex)) final += 1;
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

  const handleAnswer = (questionId, item, optionIndex) => {
    if (isFinished) return;
    if (answers[questionId] !== undefined) return;

    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));

    if (mode === 'training' && isCorrectAnswer(item, optionIndex)) {
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
        <div key={getQuestionId(question, currentIndex)} className="ask-card">
          <h3>Pregunta {currentIndex + 1} / {questions.length}</h3>
          <p className="ask-question">{question.question}</p>

          {(question.options || []).map((option, optionIndex) => {
            const questionId = getQuestionId(question, currentIndex);
            const selectedAnswer = answers[questionId];
            const isAnswered = selectedAnswer !== undefined;
            const isSelected = selectedAnswer === optionIndex;
            const shouldShowCorrection =
              (mode === 'training' && isAnswered) || (mode === 'exam' && isFinished);

            const isCorrect = isCorrectAnswer(question, optionIndex);

            let className = 'ask-option';

            if (shouldShowCorrection) {
              if (isCorrect) className += ' correct';
              else if (isSelected && !isCorrect) className += ' incorrect';
            }

            return (
              <button
                key={`${getOptionKey(option, optionIndex)}-${optionIndex}`}
                type="button"
                className={className}
                onClick={() => handleAnswer(questionId, question, optionIndex)}
                disabled={isAnswered || isFinished}
              >
                {getOptionKey(option, optionIndex)}) {getOptionText(option)}
              </button>
            );
          })}

          {((mode === 'training' && answers[getQuestionId(question, currentIndex)] !== undefined) || (mode === 'exam' && isFinished)) && (
            <div className={`ask-feedback ${isCorrectAnswer(question, answers[getQuestionId(question, currentIndex)]) ? 'correct' : 'incorrect'}`}>
              <p>
                {isCorrectAnswer(question, answers[getQuestionId(question, currentIndex)])
                  ? '✅ Resposta correcta'
                  : answers[getQuestionId(question, currentIndex)] !== undefined
                    ? '❌ Resposta incorrecta'
                    : '⚪ Sense resposta'}
              </p>
              <p className="ask-explanation">
                {getAnswerExplanation(question, answers[getQuestionId(question, currentIndex)])}
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
              const answered = answers[getQuestionId(item, index)] !== undefined;
              return (
                <span
                  key={getQuestionId(item, index)}
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