import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

vi.mock('../../data/askRegistry', () => ({
  getAskConfig: vi.fn(() => ({
    title: 'ASK Demo',
    questionsData: [{ pregunta: 'Q1', opcions: ['A'], correcta: 0, explicacio: '' }],
    storageKey: 'test-storage-key',
  })),
}));

vi.mock('../AskPageWrapper', () => ({
  default: ({ title }) => <div data-testid="ask-page-wrapper">{title}</div>,
}));

import QuizRoutePage from '../QuizRoutePage';

describe('QuizRoutePage', () => {
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
});
