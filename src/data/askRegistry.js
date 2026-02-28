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

const askModules = import.meta.glob('./bloc1/tema*/punt*Ask.js', { eager: true });

const buildDynamicAskRegistry = () => {
  const registry = {};

  Object.entries(askModules).forEach(([modulePath, module]) => {
    const match = modulePath.match(/\.\/bloc1\/tema(\d+)\/punt(\d+)Ask\.js$/);
    if (!match) return;

    const temaNumber = Number.parseInt(match[1], 10);
    const puntNumber = Number.parseInt(match[2], 10);

    if (Number.isNaN(temaNumber) || Number.isNaN(puntNumber)) return;

    const key = `bloc-1|tema-${temaNumber}|${puntNumber}`;
    registry[key] = {
      title: `ASK · Bloc 1 · Tema ${temaNumber} · Punt ${puntNumber}`,
      questionsData: module?.default,
      storageKey: `bloc1-tema${temaNumber}-punt${puntNumber}-ask`,
    };
  });

  return registry;
};

const askRegistry = buildDynamicAskRegistry();

const isValidAskArray = (questionsData) => Array.isArray(questionsData) && questionsData.length > 0;

export function getAskConfig(params) {
  const key = buildAskKey(params);
  const config = askRegistry[key] || null;

  if (!config) return null;
  if (!isValidAskArray(config.questionsData)) return null;

  return config;
}
