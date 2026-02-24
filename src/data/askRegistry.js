import bloc1Tema1Punt1Ask from './bloc1/tema1/punt1Ask';
import bloc1Tema1Punt2Ask from './bloc1/tema1/punt2Ask';
import bloc1Tema1Punt3Ask from './bloc1/tema1/punt3Ask';
import bloc1Tema1Punt4Ask from './bloc1/tema1/punt4Ask';
import bloc1Tema1Punt5Ask from './bloc1/tema1/punt5Ask';
import bloc1Tema1Punt6Ask from './bloc1/tema1/punt6Ask';
import bloc1Tema1Punt7Ask from './bloc1/tema1/punt7Ask';
import bloc1Tema1Punt8Ask from './bloc1/tema1/punt8Ask';
import bloc1Tema1Punt9Ask from './bloc1/tema1/punt9Ask';
import bloc1Tema1Punt10Ask from './bloc1/tema1/punt10Ask';
import bloc1Tema1Punt11Ask from './bloc1/tema1/punt11Ask';
import bloc1Tema1Punt12Ask from './bloc1/tema1/punt12Ask';
import bloc1Tema1Punt13Ask from './bloc1/tema1/punt13Ask';
import bloc1Tema1Punt14Ask from './bloc1/tema1/punt14Ask';
import bloc1Tema1Punt15Ask from './bloc1/tema1/punt15Ask';
import bloc1Tema1Punt16Ask from './bloc1/tema1/punt16Ask';
import bloc1Tema1Punt17Ask from './bloc1/tema1/punt17Ask';
import bloc1Tema1Punt18Ask from './bloc1/tema1/punt18Ask';
import bloc1Tema1Punt19Ask from './bloc1/tema1/punt19Ask';
import bloc1Tema1Punt20Ask from './bloc1/tema1/punt20Ask';
import bloc1Tema1Punt21Ask from './bloc1/tema1/punt21Ask';
import bloc1Tema1Punt22Ask from './bloc1/tema1/punt22Ask';
import bloc1Tema1Punt23Ask from './bloc1/tema1/punt23Ask';
import bloc1Tema1Punt24Ask from './bloc1/tema1/punt24Ask';
import punt1AskTema2 from './bloc1/tema2/punt1Ask';
import punt2AskTema2 from './bloc1/tema2/punt2Ask';
import punt3AskTema2 from './bloc1/tema2/punt3Ask';
import punt4AskTema2 from './bloc1/tema2/punt4Ask';
import punt5AskTema2 from './bloc1/tema2/punt5Ask';
import punt6AskTema2 from './bloc1/tema2/punt6Ask';
import punt7AskTema2 from './bloc1/tema2/punt7Ask';
import punt8AskTema2 from './bloc1/tema2/punt8Ask';
import punt9AskTema2 from './bloc1/tema2/punt9Ask';
import punt10AskTema2 from './bloc1/tema2/punt10Ask';
import punt11AskTema2 from './bloc1/tema2/punt11Ask';
import punt12AskTema2 from './bloc1/tema2/punt12Ask';
import punt13AskTema2 from './bloc1/tema2/punt13Ask';
import punt14AskTema2 from './bloc1/tema2/punt14Ask';
import punt15AskTema2 from './bloc1/tema2/punt15Ask';
import punt16AskTema2 from './bloc1/tema2/punt16Ask';
import punt17AskTema2 from './bloc1/tema2/punt17Ask';
import punt18AskTema2 from './bloc1/tema2/punt18Ask';
import punt19AskTema2 from './bloc1/tema2/punt19Ask';
import punt20AskTema2 from './bloc1/tema2/punt20Ask';
import punt21AskTema2 from './bloc1/tema2/punt21Ask';
import punt22AskTema2 from './bloc1/tema2/punt22Ask';
import punt23AskTema2 from './bloc1/tema2/punt23Ask';
import punt24AskTema2 from './bloc1/tema2/punt24Ask';

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

const askRegistry = {
  'bloc-1|tema-1|1': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 1',
    questionsData: bloc1Tema1Punt1Ask,
    storageKey: 'bloc1-tema1-punt1-ask',
  },
  'bloc-1|tema-1|2': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 2',
    questionsData: bloc1Tema1Punt2Ask,
    storageKey: 'bloc1-tema1-punt2-ask',
  },
  'bloc-1|tema-1|3': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 3',
    questionsData: bloc1Tema1Punt3Ask,
    storageKey: 'bloc1-tema1-punt3-ask',
  },
  'bloc-1|tema-1|4': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 4',
    questionsData: bloc1Tema1Punt4Ask,
    storageKey: 'bloc1-tema1-punt4-ask',
  },
  'bloc-1|tema-1|5': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 5',
    questionsData: bloc1Tema1Punt5Ask,
    storageKey: 'bloc1-tema1-punt5-ask',
  },
  'bloc-1|tema-1|6': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 6',
    questionsData: bloc1Tema1Punt6Ask,
    storageKey: 'bloc1-tema1-punt6-ask',
  },
  'bloc-1|tema-1|7': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 7',
    questionsData: bloc1Tema1Punt7Ask,
    storageKey: 'bloc1-tema1-punt7-ask',
  },
  'bloc-1|tema-1|8': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 8',
    questionsData: bloc1Tema1Punt8Ask,
    storageKey: 'bloc1-tema1-punt8-ask',
  },
  'bloc-1|tema-1|9': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 9',
    questionsData: bloc1Tema1Punt9Ask,
    storageKey: 'bloc1-tema1-punt9-ask',
  },
  'bloc-1|tema-1|10': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 10',
    questionsData: bloc1Tema1Punt10Ask,
    storageKey: 'bloc1-tema1-punt10-ask',
  },
  'bloc-1|tema-1|11': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 11',
    questionsData: bloc1Tema1Punt11Ask,
    storageKey: 'bloc1-tema1-punt11-ask',
  },
  'bloc-1|tema-1|12': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 12',
    questionsData: bloc1Tema1Punt12Ask,
    storageKey: 'bloc1-tema1-punt12-ask',
  },
  'bloc-1|tema-1|13': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 13',
    questionsData: bloc1Tema1Punt13Ask,
    storageKey: 'bloc1-tema1-punt13-ask',
  },
  'bloc-1|tema-1|14': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 14',
    questionsData: bloc1Tema1Punt14Ask,
    storageKey: 'bloc1-tema1-punt14-ask',
  },
  'bloc-1|tema-1|15': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 15',
    questionsData: bloc1Tema1Punt15Ask,
    storageKey: 'bloc1-tema1-punt15-ask',
  },
  'bloc-1|tema-1|16': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 16',
    questionsData: bloc1Tema1Punt16Ask,
    storageKey: 'bloc1-tema1-punt16-ask',
  },
  'bloc-1|tema-1|17': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 17',
    questionsData: bloc1Tema1Punt17Ask,
    storageKey: 'bloc1-tema1-punt17-ask',
  },
  'bloc-1|tema-1|18': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 18',
    questionsData: bloc1Tema1Punt18Ask,
    storageKey: 'bloc1-tema1-punt18-ask',
  },
  'bloc-1|tema-1|19': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 19',
    questionsData: bloc1Tema1Punt19Ask,
    storageKey: 'bloc1-tema1-punt19-ask',
  },
  'bloc-1|tema-1|20': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 20',
    questionsData: bloc1Tema1Punt20Ask,
    storageKey: 'bloc1-tema1-punt20-ask',
  },
  'bloc-1|tema-1|21': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 21',
    questionsData: bloc1Tema1Punt21Ask,
    storageKey: 'bloc1-tema1-punt21-ask',
  },
  'bloc-1|tema-1|22': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 22',
    questionsData: bloc1Tema1Punt22Ask,
    storageKey: 'bloc1-tema1-punt22-ask',
  },
  'bloc-1|tema-1|23': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 23',
    questionsData: bloc1Tema1Punt23Ask,
    storageKey: 'bloc1-tema1-punt23-ask',
  },
  'bloc-1|tema-1|24': {
    title: 'ASK · Bloc 1 · Tema 1 · Punt 24',
    questionsData: bloc1Tema1Punt24Ask,
    storageKey: 'bloc1-tema1-punt24-ask',
  },
  'bloc-1|tema-2|1': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 1',
    questionsData: punt1AskTema2,
    storageKey: 'bloc1-tema2-punt1-ask',
  },
  'bloc-1|tema-2|2': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 2',
    questionsData: punt2AskTema2,
    storageKey: 'bloc1-tema2-punt2-ask',
  },
  'bloc-1|tema-2|3': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 3',
    questionsData: punt3AskTema2,
    storageKey: 'bloc1-tema2-punt3-ask',
  },
  'bloc-1|tema-2|4': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 4',
    questionsData: punt4AskTema2,
    storageKey: 'bloc1-tema2-punt4-ask',
  },
  'bloc-1|tema-2|5': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 5',
    questionsData: punt5AskTema2,
    storageKey: 'bloc1-tema2-punt5-ask',
  },
  'bloc-1|tema-2|6': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 6',
    questionsData: punt6AskTema2,
    storageKey: 'bloc1-tema2-punt6-ask',
  },
  'bloc-1|tema-2|7': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 7',
    questionsData: punt7AskTema2,
    storageKey: 'bloc1-tema2-punt7-ask',
  },
  'bloc-1|tema-2|8': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 8',
    questionsData: punt8AskTema2,
    storageKey: 'bloc1-tema2-punt8-ask',
  },
  'bloc-1|tema-2|9': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 9',
    questionsData: punt9AskTema2,
    storageKey: 'bloc1-tema2-punt9-ask',
  },
  'bloc-1|tema-2|10': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 10',
    questionsData: punt10AskTema2,
    storageKey: 'bloc1-tema2-punt10-ask',
  },
  'bloc-1|tema-2|11': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 11',
    questionsData: punt11AskTema2,
    storageKey: 'bloc1-tema2-punt11-ask',
  },
  'bloc-1|tema-2|12': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 12',
    questionsData: punt12AskTema2,
    storageKey: 'bloc1-tema2-punt12-ask',
  },
  'bloc-1|tema-2|13': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 13',
    questionsData: punt13AskTema2,
    storageKey: 'bloc1-tema2-punt13-ask',
  },
  'bloc-1|tema-2|14': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 14',
    questionsData: punt14AskTema2,
    storageKey: 'bloc1-tema2-punt14-ask',
  },
  'bloc-1|tema-2|15': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 15',
    questionsData: punt15AskTema2,
    storageKey: 'bloc1-tema2-punt15-ask',
  },
  'bloc-1|tema-2|16': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 16',
    questionsData: punt16AskTema2,
    storageKey: 'bloc1-tema2-punt16-ask',
  },
  'bloc-1|tema-2|17': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 17',
    questionsData: punt17AskTema2,
    storageKey: 'bloc1-tema2-punt17-ask',
  },
  'bloc-1|tema-2|18': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 18',
    questionsData: punt18AskTema2,
    storageKey: 'bloc1-tema2-punt18-ask',
  },
  'bloc-1|tema-2|19': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 19',
    questionsData: punt19AskTema2,
    storageKey: 'bloc1-tema2-punt19-ask',
  },
  'bloc-1|tema-2|20': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 20',
    questionsData: punt20AskTema2,
    storageKey: 'bloc1-tema2-punt20-ask',
  },
  'bloc-1|tema-2|21': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 21',
    questionsData: punt21AskTema2,
    storageKey: 'bloc1-tema2-punt21-ask',
  },
  'bloc-1|tema-2|22': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 22',
    questionsData: punt22AskTema2,
    storageKey: 'bloc1-tema2-punt22-ask',
  },
  'bloc-1|tema-2|23': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 23',
    questionsData: punt23AskTema2,
    storageKey: 'bloc1-tema2-punt23-ask',
  },
  'bloc-1|tema-2|24': {
    title: 'ASK · Bloc 1 · Tema 2 · Punt 24',
    questionsData: punt24AskTema2,
    storageKey: 'bloc1-tema2-punt24-ask',
  },
};

export function getAskConfig(params) {
  const key = buildAskKey(params);
  return askRegistry[key] || null;
}
