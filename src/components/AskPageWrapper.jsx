import AskTest from './AskTest';
import AskNotes from './AskNotes';

function AskPageWrapper({ title, questionsData, storageKey }) {
  return (
    <div className="ask-page-wrapper">
      <h2>{title}</h2>

      <AskTest questionsData={questionsData} storageKey={storageKey} />

      <AskNotes storageKey={storageKey} />
    </div>
  );
}

export default AskPageWrapper;