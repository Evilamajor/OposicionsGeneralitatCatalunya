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
  const [error, setError] = useState(null);
  const [resolvedUrl, setResolvedUrl] = useState(null);

  const containerRef = useRef(null);

  useEffect(() => {
    const baseUrl = import.meta.env.BASE_URL || "/";
    const fullUrl = pdfUrl.startsWith("/")
      ? `${baseUrl.replace(/\/$/, "")}${pdfUrl}`
      : `${baseUrl}${pdfUrl}`;

    setResolvedUrl(fullUrl);
  }, [pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setCurrentPage(1);
    setError(null);
  };

  const onDocumentLoadError = (err) => {
    console.error("PDF load error:", err);
    setError(err.message || "Error carregant el PDF");
  };

  return (
    <div className="presentation-viewer" ref={containerRef}>
      <div className="pdf-container">
        {error && <p>{error}</p>}

        {!error && resolvedUrl && (
          <Document
            file={resolvedUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
          >
            <Page pageNumber={currentPage} scale={scale} />
          </Document>
        )}
      </div>
    </div>
  );
}
