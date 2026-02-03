import { NavLink } from 'react-router-dom';

/**
 * Barra lateral de navegació del temari oficial
 * Cos Administratiu (C1) – Generalitat de Catalunya
 *
 * Estructura:
 * - Blocs del temari
 *   - Temes de cada bloc
 *
 * Cada tema apunta a:
 * /temari/:blocId/:temaId
 *
 * Les seccions internes (explicació, flashcards, casos, links)
 * es gestionen dins del component Tema.jsx
 */
const BarraLateral = () => {
  return (
    <nav
      style={{
        width: '260px',
        padding: '1rem',
        borderRight: '1px solid #ddd',
        overflowY: 'auto',
      }}
    >
      <h3>Temari C1</h3>

      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>

        {/* BLOC I · Organització política i administrativa */}
        <li>
          <strong>Bloc I · Organització</strong>
          <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0.5rem' }}>
            <li>
              <NavLink to="/temari/bloc1/tema1">
                Tema 1 · Constitució espanyola
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc1/tema2">
                Tema 2 · Estatut d’autonomia
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc1/tema3">
                Tema 3 · Administració pública
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc1/tema4">
                Tema 4 · Administració de la Generalitat
              </NavLink>
            </li>
          </ul>
        </li>

        {/* BLOC II · Dret administratiu general */}
        <li style={{ marginTop: '1rem' }}>
          <strong>Bloc II · Dret administratiu</strong>
          <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0.5rem' }}>
            <li>
              <NavLink to="/temari/bloc2/tema5">
                Tema 5 · Acte administratiu
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc2/tema6">
                Tema 6 · Nul·litat i anul·labilitat
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc2/tema7">
                Tema 7 · Procediment administratiu
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc2/tema8">
                Tema 8 · Persones interessades
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc2/tema9">
                Tema 9 · Terminis i silenci
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc2/tema10">
                Tema 10 · Recursos administratius
              </NavLink>
            </li>
          </ul>
        </li>

        {/* BLOC III · Funció pública */}
        <li style={{ marginTop: '1rem' }}>
          <strong>Bloc III · Funció pública</strong>
          <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0.5rem' }}>
            <li>
              <NavLink to="/temari/bloc3/tema11">
                Tema 11 · Personal al servei de les AP
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc3/tema12">
                Tema 12 · Drets, deures i règim disciplinari
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc3/tema13">
                Tema 13 · Situacions administratives
              </NavLink>
            </li>
          </ul>
        </li>

        {/* BLOC IV · Gestió administrativa */}
        <li style={{ marginTop: '1rem' }}>
          <strong>Bloc IV · Gestió administrativa</strong>
          <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0.5rem' }}>
            <li>
              <NavLink to="/temari/bloc4/tema14">
                Tema 14 · Documentació administrativa
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc4/tema15">
                Tema 15 · Documents administratius
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc4/tema16">
                Tema 16 · Notificacions i comunicacions
              </NavLink>
            </li>
          </ul>
        </li>

        {/* BLOC V · Contractació i pressupost */}
        <li style={{ marginTop: '1rem' }}>
          <strong>Bloc V · Gestió econòmica</strong>
          <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0.5rem' }}>
            <li>
              <NavLink to="/temari/bloc5/tema17">
                Tema 17 · Contractació pública
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc5/tema18">
                Tema 18 · Pressupost de la Generalitat
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc5/tema19">
                Tema 19 · Subvencions públiques
              </NavLink>
            </li>
          </ul>
        </li>

        {/* BLOC VI · Administració digital */}
        <li style={{ marginTop: '1rem' }}>
          <strong>Bloc VI · Administració digital</strong>
          <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0.5rem' }}>
            <li>
              <NavLink to="/temari/bloc6/tema20">
                Tema 20 · Administració electrònica
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc6/tema21">
                Tema 21 · Identificació i signatura
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc6/tema22">
                Tema 22 · Protecció de dades
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc6/tema23">
                Tema 23 · Transparència i bon govern
              </NavLink>
            </li>
          </ul>
        </li>

        {/* BLOC VII · Igualtat i ètica */}
        <li style={{ marginTop: '1rem' }}>
          <strong>Bloc VII · Igualtat i ètica</strong>
          <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0.5rem' }}>
            <li>
              <NavLink to="/temari/bloc7/tema24">
                Tema 24 · Igualtat efectiva
              </NavLink>
            </li>
            <li>
              <NavLink to="/temari/bloc7/tema25">
                Tema 25 · Ètica i conducta pública
              </NavLink>
            </li>
          </ul>
        </li>

      </ul>
    </nav>
  );
};

export default BarraLateral;
