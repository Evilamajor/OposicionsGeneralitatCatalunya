import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../Sidebar';

describe('Sidebar', () => {
  it('shows only bloc navigation inside convocatoria routes', () => {
    render(
      <MemoryRouter initialEntries={['/bloc/bloc-1/tema-1/esquemes']}>
        <Routes>
          <Route path="/bloc/:blocId/:temaId/:seccio" element={<Sidebar collapsed={false} onToggle={vi.fn()} />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /blocs/i })).toBeInTheDocument();
    expect(screen.getByText(/bloc i · marc institucional/i)).toBeInTheDocument();
    expect(screen.getByText(/bloc vii · transparència i administració digital/i)).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /annexos/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /notícies/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /català jurídic i administratiu/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /català nivell c/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /notícies per l.?opositor/i })).not.toBeInTheDocument();
  });
});
