import React from 'react';

// A placeholder for a case study or practical scenario component.
// Users will eventually interact with real case content and questions.

function CasePractice({ title, children }) {
  return (
    <section className="case-practice">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default CasePractice;
