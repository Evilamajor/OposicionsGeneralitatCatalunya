import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const { getAskConfigMock } = vi.hoisted(() => ({
  getAskConfigMock: vi.fn(),
}));

vi.mock('../../data/askRegistry', () => ({
  getAskConfig: getAskConfigMock,
}));

vi.mock('../AskPageWrapper', () => ({
  default: ({ title }) => <div data-testid="ask-page-wrapper">{title}</div>,
}));

import QuizRoutePage from '../QuizRoutePage';

describe('QuizRoutePage', () => {
  beforeEach(() => {
    getAskConfigMock.mockReset();
    getAskConfigMock.mockReturnValue({
      title: 'ASK Demo',
      questionsData: [{ pregunta: 'Q1', opcions: ['A'], correcta: 0, explicacio: '' }],
      storageKey: 'test-storage-key',
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders AskPageWrapper when ask config exists', async () => {
    render(
      <MemoryRouter initialEntries={['/bloc/bloc-1/tema-1/ask/punt-01']}>
        <Routes>
          <Route path="/bloc/:blocId/:temaId/ask/:punt" element={<QuizRoutePage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(await screen.findByTestId('ask-page-wrapper')).toBeInTheDocument();
    expect(screen.getByText('ASK Demo')).toBeInTheDocument();
  });

  it('fetches HTML quiz content using the configured base path', async () => {
    getAskConfigMock.mockReturnValue(null);
    const expectedPath = `${import.meta.env.BASE_URL}content/bloc-1/tema-1/preguntes/punt-01.html`;
    const fetchMock = vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      text: vi.fn().mockResolvedValue('<p>Pregunta</p>'),
    });

    render(
      <MemoryRouter initialEntries={['/bloc/bloc-1/tema-1/ask/01']}>
        <Routes>
          <Route path="/bloc/:blocId/:temaId/ask/:punt" element={<QuizRoutePage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(await screen.findByTitle('Preguntes punt 01')).toHaveAttribute(
      'src',
      expectedPath,
    );
    expect(fetchMock).toHaveBeenCalledWith(expectedPath);
  });
});
