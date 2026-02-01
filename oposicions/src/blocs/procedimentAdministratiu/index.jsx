import { NavLink } from 'react-router-dom';

const ProcedimentAdministratiu = () => {
  return (
    <div>
      <h2>Procediment Administratiu</h2>

      <p>
        Índex del temari de procediment administratiu.
        Selecciona un apartat per desenvolupar-lo en profunditat.
      </p>

      <ol>
        <li>
          <NavLink to="/procediment/apartat/1">
            <strong>1. Normativa aplicable i esquema general de la regulació</strong>
          </NavLink>
          <p>
            Marc normatiu, àmbit d’aplicació i visió global del procediment administratiu.
          </p>
        </li>

        <li>
          <NavLink to="/procediment/apartat/2">
            <strong>2. El procediment administratiu com a garantia de l’actuació administrativa</strong>
          </NavLink>
          <p>
            Principis generals i drets de les persones interessades.
          </p>
        </li>

        <li>
          <NavLink to="/procediment/apartat/3">
            <strong>3. L’acte administratiu</strong>
          </NavLink>
          <p>
            Concepte, elements, eficàcia, validesa i notificació dels actes administratius.
          </p>
        </li>

        <li>
          <NavLink to="/procediment/apartat/4">
            <strong>4. Les persones en el procediment administratiu</strong>
          </NavLink>
          <p>
            Persones interessades, representació, òrgans administratius,
            abstenció i recusació.
          </p>
        </li>

        <li>
          <NavLink to="/procediment/apartat/5">
            <strong>5. Tramitació del procediment administratiu</strong>
          </NavLink>
          <p>
            Iniciació, ordenació, instrucció, finalització i silenci administratiu.
          </p>
        </li>

        <li>
          <NavLink to="/procediment/apartat/6">
            <strong>6. Execució de l’acte administratiu</strong>
          </NavLink>
          <p>
            Executorietat, mitjans d’execució forçosa i suspensió.
          </p>
        </li>

        <li>
          <NavLink to="/procediment/apartat/7">
            <strong>7. Revisió dels actes administratius i recursos</strong>
          </NavLink>
          <p>
            Revisió d’ofici, recursos administratius, anul·lació i revocació.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default ProcedimentAdministratiu;
