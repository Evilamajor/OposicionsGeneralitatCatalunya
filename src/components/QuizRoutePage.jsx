import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AskPageWrapper from './AskPageWrapper';
import { getAskConfig } from '../data/askRegistry';
import './QuizRoutePage.css';

export default function QuizRoutePage() {
  const { blocId, temaId, punt } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [htmlQuestionPath, setHtmlQuestionPath] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const askConfig = useMemo(
    () => getAskConfig({ blocId, temaId, punt }),
    [blocId, temaId, punt],
  );

  const jsonPath = useMemo(
    () => `/content/${blocId}/${temaId}/preguntes/${punt}.json`,
    [blocId, temaId, punt],
  );

  const htmlPath = useMemo(() => {
    const numeric = Number.parseInt(String(punt || '').trim(), 10);
    const padded = Number.isNaN(numeric)
      ? String(punt || '').trim()
      : String(numeric).padStart(2, '0');

    return `/content/${blocId}/${temaId}/esquemes/preguntes/punt-${padded}.html`;
  }, [blocId, temaId, punt]);

  useEffect(() => {
    if (askConfig) {
      setLoading(false);
      setError(null);
      setQuiz(null);
      setHtmlQuestionPath(null);
      setCurrentIndex(0);
      setSelected(null);
      setScore(0);
      return undefined;
    }

    let isMounted = true;
    setLoading(true);
    setError(null);
    setQuiz(null);
    setHtmlQuestionPath(null);
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);

    fetch(htmlPath)
      .then((res) => {
        if (!res.ok) {
          throw new Error('HTML not found');
        }
        return res.text();
      })
      .then(() => {
        if (!isMounted) return;
        setHtmlQuestionPath(htmlPath);
        setLoading(false);
      })
      .catch(() => {
        fetch(jsonPath)
          .then((res) => {
            if (!res.ok) {
              throw new Error('JSON not found');
            }
            return res.json();
          })
          .then((data) => {
            if (!isMounted) return;
            setQuiz(data);
            setLoading(false);
          })
          .catch(() => {
            if (!isMounted) return;
            setError('No questions available for this punt yet.');
            setLoading(false);
          });
      });

    return () => {
      isMounted = false;
    };
  }, [htmlPath, jsonPath, askConfig]);

  if (loading) {
    return (
      <div className="bloc-page">
        <div className="bloc-contingut">
          <div className="quiz-loading">Loading quiz...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bloc-page">
        <div className="bloc-contingut">
          <div className="quiz-error">{error}</div>
        </div>
      </div>
    );
  }

  if (htmlQuestionPath) {
    return (
      <div className="bloc-page">
        <div className="bloc-contingut">
          <div className="quiz-container quiz-html-container">
            <button type="button" className="quiz-back-button" onClick={handleBack}>
              ← Back
            </button>

            <h2 className="quiz-title">Preguntes · {blocId} · {temaId} · Punt {punt}</h2>

            <iframe
              title={`Preguntes punt ${punt}`}
              src={htmlQuestionPath}
              className="quiz-html-frame"
            />
          </div>
        </div>
      </div>
    );
  }

  if (askConfig) {
    return (
      <div className="bloc-page">
        <div className="bloc-contingut">
          <div className="quiz-container quiz-html-container">
            <button type="button" className="quiz-back-button" onClick={handleBack}>
              ← Back
            </button>

            <AskPageWrapper
              title={askConfig.title}
              questionsData={askConfig.questionsData}
              storageKey={askConfig.storageKey}
            />
          </div>
        </div>
      </div>
    );
  }

  if (!quiz || !Array.isArray(quiz.questions) || quiz.questions.length === 0) {
    return (
      <div className="bloc-page">
        <div className="bloc-contingut">
          <div className="quiz-error">No questions found.</div>
        </div>
      </div>
    );
  }

  const question = quiz.questions[currentIndex];
  const progress = Math.round(((currentIndex + 1) / quiz.questions.length) * 100);

  function handleAnswer(index) {
    if (selected !== null) return;
    setSelected(index);
    if (index === question.answer) {
      setScore((prev) => prev + 1);
    }
  }

  function nextQuestion() {
    if (currentIndex >= quiz.questions.length - 1) return;
    setSelected(null);
    setCurrentIndex((prev) => prev + 1);
  }

  function prevQuestion() {
    if (currentIndex <= 0) return;
    setSelected(null);
    setCurrentIndex((prev) => prev - 1);
  }

  function handleBack() {
    navigate(`/bloc/${blocId}/${temaId}/esquemes`);
  }

  return (
    <div className="bloc-page">
      <div className="bloc-contingut">
        <div className="quiz-container">
          <button type="button" className="quiz-back-button" onClick={handleBack}>
            ← Back
          </button>

          <h2 className="quiz-title">{quiz.title || `Quiz · ${blocId} · ${temaId} · Punt ${punt}`}</h2>

          <div className="quiz-meta">
            <span>Question {currentIndex + 1} / {quiz.questions.length}</span>
            <span>Score: {score}</span>
          </div>

          <div className="quiz-progress">
            <div className="quiz-progress-bar" style={{ width: `${progress}%` }} />
          </div>

          <div className="quiz-question">{question.prompt}</div>

          <div className="quiz-options">
            {(question.choices || []).map((choice, index) => {
              const isSelected = selected === index;
              const isCorrectChoice = index === question.answer;
              const classes = [
                'quiz-option-btn',
                isSelected ? (isCorrectChoice ? 'correct' : 'incorrect') : '',
                selected !== null && isCorrectChoice ? 'correct' : '',
              ].join(' ').trim();

              return (
                <button
                  key={`${index}-${choice}`}
                  type="button"
                  onClick={() => handleAnswer(index)}
                  className={classes}
                >
                  {choice}
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <div className="quiz-feedback">
              {selected === question.answer
                ? 'Correct!'
                : `Incorrect. ${question.explanation || ''}`}
            </div>
          )}

          <div className="quiz-controls">
            <button type="button" onClick={prevQuestion} disabled={currentIndex === 0}>
              Prev
            </button>

            {currentIndex < quiz.questions.length - 1 ? (
              <button type="button" onClick={nextQuestion} disabled={selected === null}>
                Next
              </button>
            ) : (
              <div className="quiz-result">Final Score: {score} / {quiz.questions.length}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
