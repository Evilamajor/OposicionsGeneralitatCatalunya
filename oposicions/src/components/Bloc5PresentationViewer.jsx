import React from 'react';
import BlocPresentationViewer from './BlocPresentationViewer';

/**
 * Bloc V Presentation Viewer
 * Wraps the generic BlocPresentationViewer with the specific PDF URL for Bloc V
 */
export default function Bloc5PresentationViewer() {
  return (
    <BlocPresentationViewer
      pdfUrl="/content/bloc-5/presentacio.pdf"
      title="Presentació · Bloc V"
    />
  );
}
