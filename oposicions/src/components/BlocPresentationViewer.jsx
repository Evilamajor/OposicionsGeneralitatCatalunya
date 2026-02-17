import React, { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "./BlocPresentationViewer.css";

/* WORKER CONFIGURATION FOR VITE */
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function BlocPresentationViewer({
  pdfUrl,
  title = "Presentació",
}) {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1.5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [resolvedUrl, setResolvedUrl] = useState(null);

  const containerRef = useRef(null);

  useEffect(() => {
    if (!pdfUrl) {
      setResolvedUrl(null);
      setError("No s'ha proporcionat cap PDF.");
      setLoading(false);
      return;
    }
    const baseUrl = import.meta.env.BASE_URL || "/";
    const fullUrl = pdfUrl.startsWith("/")
      ? `${baseUrl.replace(/\/$/, "")}${pdfUrl}`
      : `${baseUrl}${pdfUrl}`;

    setResolvedUrl(fullUrl);
    setError(null);
    setLoading(true);
    setCurrentPage(1);
  }, [pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setCurrentPage(1);
    setError(null);
    setLoading(false);
  };

  const onDocumentLoadError = (err) => {
    console.error("PDF load error:", err);
    setError(err.message || "Error carregant el PDF");
    setLoading(false);
  };

  const goToPrevPage = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goToNextPage = () => setCurrentPage((p) => Math.min(numPages || 1, p + 1));
  const zoomOut = () => setScale((s) => Math.max(0.8, Number((s - 0.2).toFixed(2))));
  const zoomIn = () => setScale((s) => Math.min(2.6, Number((s + 0.2).toFixed(2))));

  return (
    <div className="presentation-viewer" ref={containerRef}>
      <div className="nav-bar" aria-label={`${title} controls`}>
        <div className="nav-left">
          <button className="nav-btn" onClick={goToPrevPage} disabled={currentPage <= 1 || !!error}>←</button>
          <span className="page-indicator">{currentPage} / {numPages || "…"}</span>
          <button className="nav-btn" onClick={goToNextPage} disabled={!numPages || currentPage >= numPages || !!error}>→</button>
        </div>
        <div className="nav-right">
          <button className="nav-btn" onClick={zoomOut} disabled={!!error}>−</button>
          <span className="zoom-indicator">{Math.round(scale * 100)}%</span>
          <button className="nav-btn" onClick={zoomIn} disabled={!!error}>+</button>
        </div>
      </div>
      <div className="pdf-container">
        {loading && !error && (
          <div className="loading-state">
            <div className="spinner" />
            <p>Carregant presentació...</p>
          </div>
        )}

        {error && (
          <div className="error-state">
            <p className="error-text">No s'ha pogut carregar la presentació.</p>
            <p>{error}</p>
          </div>
        )}

        {!error && resolvedUrl && (
          <Document
            file={resolvedUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading=""
          >
            <Page
              pageNumber={currentPage}
              scale={scale}
              loading=""
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        )}
      </div>
    </div>
  );
}
