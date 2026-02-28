import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../Sidebar';

describe('Sidebar', () => {
  it('calls onToggle when Notícies is clicked while expanded', async () => {
    const user = userEvent.setup();
    const onToggle = vi.fn();

    render(
      <MemoryRouter initialEntries={['/bloc/bloc-1/tema-1/esquemes']}>
        <Routes>
          <Route path="/bloc/:blocId/:temaId/:seccio" element={<Sidebar collapsed={false} onToggle={onToggle} />} />
        </Routes>
      </MemoryRouter>,
    );

    await user.click(screen.getByRole('link', { name: /notícies/i }));

    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});
