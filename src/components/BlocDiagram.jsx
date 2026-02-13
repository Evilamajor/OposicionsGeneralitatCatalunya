import { useEffect, useState } from 'react';

/**
 * Mapping of bloc IDs to their corresponding diagram files
 */
const DIAGRAM_MAP = {
  'bloc-1': 'esquema-marc-institucional.drawio',
  'bloc-2': 'esquema-dret-administratiu.drawio',
  'bloc-3': 'esquema-regim-juridic-sector-public.drawio',
  'bloc-4': 'esquema-contractacio-publica.drawio',
  'bloc-5': 'esquema-gestio-economica-pressupostaria.drawio',
  'bloc-6': 'esquema-funcio-publica.drawio',
  'bloc-7': 'esquema-transparencia-administracio-digital.drawio',
};

export default function BlocDiagram({ blocId, blocTitle }) {
  const fileName = DIAGRAM_MAP[blocId];
  const [xml, setXml] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fileUrl = `/diagrams/${fileName}`;

  useEffect(() => {
    if (!fileName) return;

    setLoading(true);
    setError(null);

    fetch(fileUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((text) => {
        setXml(text);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [fileName, fileUrl]);

  if (!fileName) {
    return (
      <div className="notes-card">
        <h3>Esquema del bloc – {blocTitle}</h3>
        <p>No diagram available for this bloc.</p>
      </div>
    );
  }

  const viewerUrl = xml
    ? 'https://viewer.diagrams.net/?' +
      'ui=min' +
      '&dark=0' +
      '&grid=1' +
      '&bg=%23ffffff' +
      '#R' + encodeURIComponent(xml)
    : null;

  return (
    <div className="notes-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h3>Esquema del bloc – {blocTitle}</h3>

      {loading && <p>Carregant diagrama...</p>}

      {error && (
        <div>
          <p>Error loading diagram: {error}</p>
          <p>Path: {fileUrl}</p>
        </div>
      )}

      {viewerUrl && (
        <iframe
          title="Bloc diagram"
          src={viewerUrl}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            flex: 1,
          }}
        />
      )}
    </div>
  );
}
