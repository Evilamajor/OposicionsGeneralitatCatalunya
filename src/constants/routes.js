export const getBlocTemaSectionRoute = (blocId, temaId, seccio = 'esquemes') => `/bloc/${blocId}/${temaId}/${seccio}`;

export const getDiagramViewerRoute = (blocId, temaId, punt) => `/diagram-viewer/${blocId}/${temaId}/${punt}`;

export const getAskRoute = (blocId, temaId, paddedPoint) => `/bloc/${blocId}/${temaId}/ask/punt-${paddedPoint}`;
