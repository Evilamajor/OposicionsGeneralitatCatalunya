import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { annexos } from '../data';
import './BlocPage.css';

export default function AnnexPage() {
  const { annexId, topicId } = useParams();
  const navigate = useNavigate();
  const [htmlContent, setHtmlContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const annex = annexos.find((a) => a.id === annexId);
  const topic = annex?.topics?.find((t) => t.id === topicId);

  // Redirect to first topic if only annexId is provided
  useEffect(() => {
    if (annex && !topicId && annex.topics.length > 0) {
      navigate(`/annexos/${annexId}/${annex.topics[0].id}`, { replace: true });
    }
  }, [annex, annexId, topicId, navigate]);

  // Load HTML content when annexId or topicId changes
  useEffect(() => {
    if (!topicId) {
      setHtmlContent(null);
      return;
    }

    setLoading(true);
    setError(null);

    const path = `/content/annexos/${annexId}/${topicId}/contingut.html`;

    fetch(path)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((html) => {
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
        const bodyContent = bodyMatch ? bodyMatch[1] : html;
        setHtmlContent(bodyContent);
        setLoading(false);
      })
      .catch(() => {
        setError('No es pot carregar el contingut d\'aquest annex.');
        setHtmlContent(null);
        setLoading(false);
      });
  }, [annexId, topicId]);

  if (!annex) {
    return <p>Annex no trobat.</p>;
  }

  return (
    <section className="bloc-page">
      <div className="bloc-contingut">
        <div className="preview-card">
          <h3>
            {annex.label}{topic ? ` · ${topic.label}` : ''}
          </h3>

          {loading && <p className="loading">Carregant...</p>}
          {error && <p className="error">{error}</p>}

          {htmlContent && (
            <div
              className="html-content"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
