const normalizeId = (value, prefix) => {
  const raw = String(value || '').toLowerCase().trim();
  const match = raw.match(/(\d+)/);
  if (!match) return raw;

  const number = Number.parseInt(match[1], 10);
  return `${prefix}-${number}`;
};

const normalizePunt = (value) => {
  const raw = String(value || '').toLowerCase().trim();
  const match = raw.match(/(\d+)/);
  if (!match) return raw;

  return String(Number.parseInt(match[1], 10));
};

const buildAskKey = ({ blocId, temaId, punt }) => {
  const bloc = normalizeId(blocId, 'bloc');
  const tema = normalizeId(temaId, 'tema');
  const normalizedPunt = normalizePunt(punt);
  return `${bloc}|${tema}|${normalizedPunt}`;
};

const askModules = import.meta.glob('./**/punt*Ask.js', { eager: true });

const parseModulePath = (modulePath) => {
  const match = modulePath.match(/\.\/([^/]+)\/([^/]+)\/punt0*(\d+)Ask\.js$/i);
  if (!match) return null;

  const bloc = normalizeId(match[1], 'bloc');
  const tema = normalizeId(match[2], 'tema');
  const puntNumber = Number.parseInt(match[3], 10);

  if (Number.isNaN(puntNumber)) return null;

  return {
    bloc,
    tema,
    puntNumber,
  };
};

const resolveAskPayload = (module) => {
  if (module?.default) return module.default;

  const namedExportKey = Object.keys(module || {}).find((key) => /^punt\d+Ask$/i.test(key));
  if (namedExportKey) return module[namedExportKey];

  return Object.values(module || {}).find((value) => value && typeof value === 'object') || null;
};

const normalizeAskPayload = (payload, filePath) => {
  if (Array.isArray(payload)) {
    return {
      title: null,
      questionsData: payload,
    };
  }

  if (payload && typeof payload === 'object') {
    const questionsData = Array.isArray(payload.questions)
      ? payload.questions
      : (Array.isArray(payload.preguntes) ? payload.preguntes : null);

    if (!questionsData) {
      console.error('Invalid ASK module structure:', filePath);
      return null;
    }

    const payloadTitle = typeof payload.title === 'string' && payload.title.trim().length > 0
      ? payload.title.trim()
      : (typeof payload.titol === 'string' && payload.titol.trim().length > 0
        ? payload.titol.trim()
        : null);

    return {
      title: payloadTitle,
      questionsData,
    };
  }

  console.error('Invalid ASK module structure:', filePath);
  return null;
};

const getNumericId = (value) => {
  const match = String(value || '').match(/(\d+)/);
  if (!match) return null;

  const parsed = Number.parseInt(match[1], 10);
  return Number.isNaN(parsed) ? null : parsed;
};

const buildDynamicAskRegistry = () => {
  const registry = {};

  Object.entries(askModules).forEach(([modulePath, module]) => {
    const parsedPath = parseModulePath(modulePath);
    if (!parsedPath) return;

    const askPayload = resolveAskPayload(module);
    const normalizedPayload = normalizeAskPayload(askPayload, modulePath);
    if (!normalizedPayload) return;

    const blocNumber = getNumericId(parsedPath.bloc);
    const temaNumber = getNumericId(parsedPath.tema);
    const key = `${parsedPath.bloc}|${parsedPath.tema}|${parsedPath.puntNumber}`;

    registry[key] = {
      title:
        normalizedPayload.title
        || `ASK · Bloc ${blocNumber ?? parsedPath.bloc} · Tema ${temaNumber ?? parsedPath.tema} · Punt ${parsedPath.puntNumber}`,
      questionsData: normalizedPayload.questionsData,
      storageKey: `bloc${blocNumber ?? parsedPath.bloc}-tema${temaNumber ?? parsedPath.tema}-punt${parsedPath.puntNumber}-ask`,
    };
  });

  return registry;
};

const askRegistry = buildDynamicAskRegistry();

const isValidAskArray = (questionsData) => Array.isArray(questionsData) && questionsData.length > 0;

export function getAskConfig(params) {
  const key = buildAskKey(params);
  const config = askRegistry[key] || null;

  if (!config) {
    console.error('ASK file not found for:', params?.blocId, params?.temaId, params?.punt);
    return null;
  }

  if (!isValidAskArray(config.questionsData)) {
    console.error('ASK questions invalid for:', params?.blocId, params?.temaId, params?.punt);
    return null;
  }

  return config;
}
