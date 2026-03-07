import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomeSidebar from '../HomeSidebar';

describe('HomeSidebar', () => {
  it('shows a single active convocatoria section without ICS entry', () => {
    render(
      <MemoryRouter>
        <HomeSidebar />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /oposicions administratiu generalitat/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /convocatòria 2026/i })).toHaveAttribute('href', '/generalitat');
  expect(screen.queryByRole('link', { name: /administratiu generalitat/i })).not.toBeInTheDocument();
  expect(screen.queryByRole('link', { name: /administratiu ics/i })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /annexos/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /català jurídic i administratiu/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /català nivell c/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /notícies per l’opositor/i })).toBeInTheDocument();
  });
});