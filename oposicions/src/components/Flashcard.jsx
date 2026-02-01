import React, { useState } from 'react';

// A simple flashcard component for studying definitions or key points.
// The card toggles between front and back when clicked.

function Flashcard({ front, back }) {
  const [showBack, setShowBack] = useState(false);
  return (
    <div className="flashcard" onClick={() => setShowBack(!showBack)}>
      {showBack ? back : front}
    </div>
  );
}

export default Flashcard;
