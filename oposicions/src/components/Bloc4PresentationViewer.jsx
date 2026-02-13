import React from 'react';
import BlocPresentationViewer from './BlocPresentationViewer';

/**
 * Bloc IV Presentation Viewer
 * Wraps the generic BlocPresentationViewer with the specific PDF URL for Bloc IV
 */
export default function Bloc4PresentationViewer() {
  return (
    <BlocPresentationViewer
      pdfUrl="/content/bloc-4/bloc4_contractacio_publica_presentacio.pdf"
      title="Presentació · Bloc IV"
    />
  );
}
