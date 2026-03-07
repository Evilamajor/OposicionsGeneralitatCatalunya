export const getBlocTemaSectionRoute = (blocId, temaId, seccio = 'esquemes') => `/bloc/${blocId}/${temaId}/${seccio}`;

export const getDiagramViewerRoute = (blocId, temaId, punt) => `/diagram-viewer/${blocId}/${temaId}/${punt}`;

export const getAskRoute = (blocId, temaId, paddedPoint) => `/bloc/${blocId}/${temaId}/ask/punt-${paddedPoint}`;

const extractRouteNumericId = (value, fallback = '0') => {
	const match = String(value || '').match(/(\d+)/);
	if (!match) return fallback;

	const parsed = Number.parseInt(match[1], 10);
	return Number.isNaN(parsed) ? fallback : String(parsed);
};

export const getStandaloneExplanationRoute = (blocId, temaId, punt) => {
	const bloc = extractRouteNumericId(blocId, '0');
	const tema = extractRouteNumericId(temaId, '0');
	const point = extractRouteNumericId(punt, '0');
	return `/explicacio/bloc/${bloc}/tema/${tema}/punt/${point}`;
};
