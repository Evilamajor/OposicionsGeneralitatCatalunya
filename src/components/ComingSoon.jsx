/**
 * ComingSoon — standardized placeholder for sections without content yet.
 *
 * Usage:
 *   <ComingSoon />
 *   <ComingSoon sectionName="PDFs" />
 *   <ComingSoon sectionName="Esquemes" hint="Afegeix fitxers PNG a public/diagrams/" />
 *
 * Props:
 *   @param {string}  [sectionName]  — optional label shown in the heading
 *   @param {string}  [hint]         — optional extra guidance line
 */
import './ComingSoon.css';

export default function ComingSoon({ sectionName, hint }) {
  return (
    <div className="coming-soon" role="status">
      <span className="coming-soon-icon" aria-hidden="true">🚧</span>

      <p className="coming-soon-title">
        Contingut en preparació
        {sectionName && <> — <strong>{sectionName}</strong></>}
      </p>

      <p className="coming-soon-body">
        Aquesta secció del temari encara està en desenvolupament.
        El contingut s'anirà incorporant progressivament.
      </p>

      {hint && (
        <p className="coming-soon-hint">{hint}</p>
      )}
    </div>
  );
}
