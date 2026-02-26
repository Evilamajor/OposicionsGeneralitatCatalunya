import { useEffect, useState } from 'react';
import {
  getSavedExplanations,
  getSavedExplanation,
  resetExplanation,
  saveExplanation,
} from '../utils/explanationStorage';
import CreateQuestionModal from './CreateQuestionModal';
import {
  addCustomQuestion,
  getCustomQuestions,
  removeCustomQuestion,
} from '../utils/customQuestionsStorage';
import './AskTest.css';

const LETTER_TO_INDEX = { A: 0, B: 1, C: 2, D: 3, E: 4 };

const normalizeOptionText = (option) => {
  if (typeof option === 'string') return option;
  if (typeof option === 'object' && option) return option.text || option.label || option.value || '';
  return '';
};

const toZeroBasedIndex = (value, optionCount) => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    if (value >= 0 && value < optionCount) return value;
    if (value >= 1 && value <= optionCount) return value - 1;
    return null;
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return null;

    const upper = trimmed.toUpperCase();
    if (LETTER_TO_INDEX[upper] !== undefined && LETTER_TO_INDEX[upper] < optionCount) {
      return LETTER_TO_INDEX[upper];
    }

    const asNumber = Number(trimmed);
    if (Number.isFinite(asNumber)) {
      return toZeroBasedIndex(asNumber, optionCount);
    }
  }

  return null;
};

const normalizeQuestion = (item, index) => {
  const optionsRaw = item?.options || item?.opcions || item?.choices || [];
  const options = Array.isArray(optionsRaw) ? optionsRaw.map((option) => normalizeOptionText(option)) : [];

  const optionCorrectIndex = Array.isArray(optionsRaw)
    ? optionsRaw.findIndex((option) => typeof option === 'object' && option?.correct === true)
    : -1;

  const explicitCorrectAnswer =
    item?.correctAnswer ?? item?.correcta ?? item?.correct ?? item?.answer;

  const normalizedByProperty = toZeroBasedIndex(explicitCorrectAnswer, options.length);
  const correctAnswer = optionCorrectIndex >= 0 ? optionCorrectIndex : normalizedByProperty;

  const genericExplanation = item?.explanation || item?.explicacio || '';
  const explanations = Array.isArray(item?.explanations) ? item.explanations : null;

  const explanationCorrect =
    item?.explanationCorrect
    || (correctAnswer !== null && explanations?.[correctAnswer])
    || genericExplanation
    || 'La resposta és correcta segons el contingut del temari.';

  const firstIncorrectExplanation = explanations?.find((_, explanationIndex) => explanationIndex !== correctAnswer && Boolean(explanations[explanationIndex]));

  const explanationIncorrect =
    item?.explanationIncorrect
    || firstIncorrectExplanation
    || genericExplanation
    || 'Revisa el concepte clau d’aquesta pregunta i torna-ho a intentar.';

  return {
    id: item?.id ?? index + 1,
    type: item?.type || item?.category || item?.tipus || 'general',
    question: item?.question || item?.enunciat || item?.prompt || '',
    options,
    correctAnswer,
    explanationCorrect,
    explanationIncorrect,
  };
};

const normalizeQuestionsData = (questionsData) => {
  if (!Array.isArray(questionsData)) return [];
  return questionsData.map((item, index) => normalizeQuestion(item, index));
};

function AskTest({ questionsData, storageKey }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isFinished, setIsFinished] = useState(false);
  const [finishReason, setFinishReason] = useState('time');
  const [mode, setMode] = useState('training');
  const [editMode, setEditMode] = useState(false);
  const [editedExplanationCorrect, setEditedExplanationCorrect] = useState('');
  const [editedExplanationIncorrect, setEditedExplanationIncorrect] = useState('');
  const [explanationOverrides, setExplanationOverrides] = useState({});
  const [customQuestions, setCustomQuestions] = useState([]);
  const [isCreateQuestionOpen, setIsCreateQuestionOpen] = useState(false);

  const explanationStorageKey = storageKey || 'default';
  const customQuestionsScope = storageKey || 'default';

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const getQuestionId = (item, index) => item?.id ?? `q-${index}`;

  const getOptionText = (option) => option;

  const getOptionKey = (option, index) => {
    if (typeof option === 'object' && option?.key) return option.key;
    return String.fromCharCode(65 + index);
  };

  const isCorrectAnswer = (item, selectedIndex) => {
    if (selectedIndex === undefined || selectedIndex === null) return false;

    return item?.correctAnswer === selectedIndex;
  };

  const getSavedExplanationPair = (item, index) => {
    const questionId = getQuestionId(item, index);
    const override = explanationOverrides[questionId]
      || getSavedExplanation(explanationStorageKey, questionId);

    return {
      explanationCorrect: override?.explanationCorrect || item?.explanationCorrect || '',
      explanationIncorrect: override?.explanationIncorrect || item?.explanationIncorrect || '',
    };
  };

  const getAnswerExplanation = (item, selectedIndex) => {
    const { explanationCorrect, explanationIncorrect } = getSavedExplanationPair(item, currentIndex);

    if (selectedIndex === undefined || selectedIndex === null) {
      return explanationIncorrect;
    }

    return isCorrectAnswer(item, selectedIndex)
      ? explanationCorrect
      : explanationIncorrect;
  };

  const getMergedQuestions = (sourceQuestions = questionsData, sourceCustomQuestions = customQuestions) => {
    const baseQuestions = normalizeQuestionsData(sourceQuestions);
    const normalizedCustom = normalizeQuestionsData(sourceCustomQuestions);
    return [...baseQuestions, ...normalizedCustom];
  };

  const refreshEditorFields = (nextQuestion = question, nextIndex = currentIndex) => {
    if (!nextQuestion) {
      setEditedExplanationCorrect('');
      setEditedExplanationIncorrect('');
      return;
    }

    const { explanationCorrect, explanationIncorrect } = getSavedExplanationPair(nextQuestion, nextIndex);
    setEditedExplanationCorrect(explanationCorrect);
    setEditedExplanationIncorrect(explanationIncorrect);
  };

  useEffect(() => {
    setExplanationOverrides(getSavedExplanations(explanationStorageKey));
  }, [explanationStorageKey]);

  useEffect(() => {
    setCustomQuestions(getCustomQuestions(customQuestionsScope));
  }, [customQuestionsScope]);

  useEffect(() => {
    const mergedQuestions = getMergedQuestions(questionsData, customQuestions);
    setQuestions(shuffleArray(mergedQuestions));
    setScore(0);
    setAnswers({});
    setCurrentIndex(0);
    setTimeLeft(60);
    setIsFinished(false);
    setFinishReason('time');
    setEditMode(false);
    setIsCreateQuestionOpen(false);
  }, [questionsData, customQuestions]);

  useEffect(() => {
    refreshEditorFields();
  }, [currentIndex, questions, explanationOverrides]);

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
      setEditMode(false);
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
    setQuestions(shuffleArray(getMergedQuestions(questionsData, customQuestions)));
    setCurrentIndex(0);
    setTimeLeft(60);
    setIsFinished(false);
    setFinishReason('time');
    setEditMode(false);
  };

  const toggleCreateQuestion = () => {
    if (mode !== 'training') return;
    setIsCreateQuestionOpen((prev) => !prev);
  };

  const handleCreateQuestion = (payload) => {
    const newQuestion = {
      id: `custom-${Date.now()}`,
      question: payload.question,
      options: payload.options,
      correctAnswer: payload.correctAnswer,
      type: 'custom',
      explanationCorrect: payload.explanationCorrect,
      explanationIncorrect: payload.explanationIncorrect,
    };

    const nextCustomQuestions = addCustomQuestion(customQuestionsScope, newQuestion);
    setCustomQuestions(nextCustomQuestions);
    setIsCreateQuestionOpen(false);
  };

  const handleDeleteCustomQuestion = () => {
    if (!question || question.type !== 'custom') return;

    const questionId = getQuestionId(question, currentIndex);
    const nextCustomQuestions = removeCustomQuestion(customQuestionsScope, questionId);

    setCustomQuestions(nextCustomQuestions);
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
    resetExplanation(explanationStorageKey, questionId);
  };

  const toggleEditMode = () => {
    if (mode !== 'training') return;

    setEditMode((prev) => {
      const next = !prev;
      if (next) {
        refreshEditorFields();
      }
      return next;
    });
  };

  const saveEdits = () => {
    if (!question) return;

    const questionId = getQuestionId(question, currentIndex);
    const saved = saveExplanation(explanationStorageKey, questionId, {
      explanationCorrect: editedExplanationCorrect,
      explanationIncorrect: editedExplanationIncorrect,
    });

    setExplanationOverrides((prev) => ({
      ...prev,
      [questionId]: saved,
    }));
  };

  const resetToOriginal = () => {
    if (!question) return;

    const questionId = getQuestionId(question, currentIndex);
    resetExplanation(explanationStorageKey, questionId);

    setExplanationOverrides((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });

    setEditedExplanationCorrect(question?.explanationCorrect || '');
    setEditedExplanationIncorrect(question?.explanationIncorrect || '');
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

        {mode === 'training' && (
          <button type="button" onClick={toggleCreateQuestion}>
            ➕ Editar pregunta
          </button>
        )}
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

          {mode === 'training' && question.type === 'custom' && (
            <div className="ask-custom-actions">
              <button type="button" onClick={handleDeleteCustomQuestion}>🗑 Eliminar</button>
            </div>
          )}

          {mode === 'training' && (
            <div className="ask-edit-controls">
              <button type="button" onClick={toggleEditMode}>
                ✏️ Editar explicacions
              </button>
            </div>
          )}

          {mode === 'training' && editMode && (
            <div className="ask-edit-panel">
              <label htmlFor="explanation-correct">Explicació resposta correcta</label>
              <textarea
                id="explanation-correct"
                value={editedExplanationCorrect}
                onChange={(event) => setEditedExplanationCorrect(event.target.value)}
              />

              <label htmlFor="explanation-incorrect">Explicació resposta incorrecta</label>
              <textarea
                id="explanation-incorrect"
                value={editedExplanationIncorrect}
                onChange={(event) => setEditedExplanationIncorrect(event.target.value)}
              />

              <div className="ask-edit-actions">
                <button type="button" onClick={saveEdits}>💾 Guardar</button>
                <button type="button" onClick={resetToOriginal}>↩️ Restaurar original</button>
              </div>
            </div>
          )}

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

      <CreateQuestionModal
        isOpen={isCreateQuestionOpen}
        onClose={() => setIsCreateQuestionOpen(false)}
        onSave={handleCreateQuestion}
      />
    </div>
  );
}

export default AskTest;

/*
  SISTEMA D’INDEXACIÓ DEFINITIU (motor ASK)
  - `correctAnswer` estàndard: índex numèric 0-based (A=0, B=1, C=2, D=3).
  - El motor accepta automàticament formats legacy (`correct`, `correcta`, `answer`, lletres A-D)
    i els converteix internament a `correctAnswer` 0-based.
  - Esquema recomanat per nous fitxers *Ask.js:
    {
      id: number,
      type: string,
      question: string,
      options: string[],
      correctAnswer: number,
      explanationCorrect: string,
      explanationIncorrect: string
    }
*/