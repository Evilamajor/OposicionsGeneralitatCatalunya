import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './ReorderExercise.css';

function normalizeText(value) {
  return value.trim().replace(/\s+/g, ' ');
}

function resolveCorrectOrder(sentence, words) {
  const normalizedSentence = normalizeText(sentence);
  const normalizedWords = words.map((word) => normalizeText(word));
  const total = normalizedWords.length;
  const memo = new Map();

  function dfs(position, usedMask) {
    const key = `${position}|${usedMask}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    if (usedMask === (1 << total) - 1) {
      return position === normalizedSentence.length ? [] : null;
    }

    for (let index = 0; index < total; index += 1) {
      const isUsed = (usedMask & (1 << index)) !== 0;
      if (isUsed) {
        continue;
      }

      const token = normalizedWords[index];
      if (!normalizedSentence.startsWith(token, position)) {
        continue;
      }

      let nextPosition = position + token.length;
      if (normalizedSentence.charAt(nextPosition) === ' ') {
        nextPosition += 1;
      }

      const path = dfs(nextPosition, usedMask | (1 << index));
      if (path) {
        const result = [index, ...path];
        memo.set(key, result);
        return result;
      }
    }

    memo.set(key, null);
    return null;
  }

  const resolved = dfs(0, 0);
  if (resolved) {
    return resolved;
  }

  return words.map((_, index) => index);
}

export default function ReorderExercise({ title, instruction, section, sentences, sentenceIndex = 0 }) {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(sentenceIndex);

  const activeSentence = sentences[currentSentenceIndex] || {
    correctSentence: '',
    words: [],
  };

  const { correctSentence, words } = activeSentence;

  const correctOrder = useMemo(
    () => resolveCorrectOrder(correctSentence, words),
    [correctSentence, words]
  );
  const tokens = useMemo(() => words.map((text, index) => ({ id: index, text })), [words]);

  const [availableIds, setAvailableIds] = useState(tokens.map((token) => token.id));
  const [selectedIds, setSelectedIds] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [isCorrectResult, setIsCorrectResult] = useState(false);

  useEffect(() => {
    setAvailableIds(tokens.map((token) => token.id));
    setSelectedIds([]);
    setFeedback(null);
    setIsCorrectResult(false);
  }, [tokens, currentSentenceIndex]);

  const handleNextSentence = () => {
    if (!sentences.length) {
      return;
    }

    setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    setSelectedIds([]);
    setAvailableIds([]);
    setFeedback(null);
    setIsCorrectResult(false);
  };

  const handleWordClick = (tokenId) => {
    if (selectedIds.length >= tokens.length) {
      return;
    }

    setAvailableIds((prev) => prev.filter((id) => id !== tokenId));
    setSelectedIds((prev) => [...prev, tokenId]);
    setFeedback(null);
    setIsCorrectResult(false);
  };

  const handleSlotClick = (slotIndex) => {
    const removedId = selectedIds[slotIndex];
    if (removedId === undefined) {
      return;
    }

    setSelectedIds((prev) => prev.filter((_, index) => index !== slotIndex));
    setAvailableIds((prev) => [...prev, removedId]);
    setFeedback(null);
    setIsCorrectResult(false);
  };

  const handleCheck = () => {
    const isCorrect =
      selectedIds.length === correctOrder.length
      && selectedIds.every((id, index) => id === correctOrder[index]);

    if (isCorrect) {
      setFeedback({ type: 'success', text: 'Correct sentence. Well done!' });
      setIsCorrectResult(true);
      return;
    }

    setFeedback({ type: 'error', text: 'Not quite right. Try again.' });
    setIsCorrectResult(false);
  };

  const handleAnswers = () => {
    setSelectedIds(correctOrder);
    setAvailableIds([]);
    setFeedback({ type: 'success', text: `Correct order: ${correctSentence}` });
    setIsCorrectResult(false);
  };

  const handleRestart = () => {
    setSelectedIds([]);
    setAvailableIds(tokens.map((token) => token.id));
    setFeedback(null);
    setIsCorrectResult(false);
  };

  return (
    <div className="reorder-exercise">
      <div className="reorder-header">
        <div>
          <h3 className="reorder-title">{title}</h3>
          <p className="reorder-instruction">{instruction}</p>
        </div>
        <button
          type="button"
          className="reorder-next"
          onClick={handleNextSentence}
          aria-label="Next sentence"
          title="Next sentence"
        >
          &gt;
        </button>
      </div>

      <div className="reorder-slots" aria-label="Sentence slots">
        {tokens.map((_, slotIndex) => {
          const tokenId = selectedIds[slotIndex];
          const token = tokenId !== undefined ? tokens[tokenId] : null;

          return (
            <button
              key={slotIndex}
              type="button"
              className={`reorder-slot${token ? ' filled' : ''}`}
              onClick={() => handleSlotClick(slotIndex)}
            >
              {token ? token.text : ''}
            </button>
          );
        })}
      </div>

      <div className="reorder-words" aria-label="Word blocks">
        {availableIds.map((tokenId) => (
          <button
            key={tokenId}
            type="button"
            className="reorder-word"
            onClick={() => handleWordClick(tokenId)}
          >
            {tokens[tokenId].text}
          </button>
        ))}
      </div>

      <div className="reorder-actions">
        <button type="button" className="reorder-btn reorder-btn-check" onClick={handleCheck}>
          CHECK
        </button>
        <button type="button" className="reorder-btn reorder-btn-answers" onClick={handleAnswers}>
          ANSWERS
        </button>
        <button type="button" className="reorder-btn reorder-btn-restart" onClick={handleRestart}>
          RESTART
        </button>
      </div>

      {feedback && (
        <p className={`reorder-feedback ${feedback.type}`}>
          {feedback.text}
        </p>
      )}

      {isCorrectResult && (
        <Link
          to={`/business-english/internal-correspondence/context/${section}/${currentSentenceIndex}`}
          className="reorder-context-link"
        >
          &gt; Context
        </Link>
      )}
    </div>
  );
}
