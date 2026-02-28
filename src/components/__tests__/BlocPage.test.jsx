import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import BlocPage from '../BlocPage';

describe('BlocPage', () => {
  it('shows unavailable content message when bloc does not exist', () => {
    render(
      <MemoryRouter initialEntries={['/bloc/bloc-inexistent/tema-1/esquemes']}>
        <Routes>
          <Route path="/bloc/:blocId/:temaId/:seccio" element={<BlocPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText('Contingut no disponible')).toBeInTheDocument();
    expect(screen.getByText('El bloc sol·licitat no existeix.')).toBeInTheDocument();
  });
});
