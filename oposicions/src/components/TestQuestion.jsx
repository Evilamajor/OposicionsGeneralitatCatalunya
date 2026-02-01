import React from 'react';

// A reusable multiple‑choice test question component.
// This component accepts a question, options and a callback when the user selects an answer.
// It does not contain any test content by default.

function TestQuestion({ question, options = [], onAnswer }) {
  return (
    <div className="test-question">
      <p>{question}</p>
      <ul>
        {options.map((opt, idx) => (
          <li key={idx}>
            <button onClick={() => onAnswer && onAnswer(opt)}>{opt}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestQuestion;
