import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import regulacioImg from '../../assets/regulacio.png';
import principisImg from '../../assets/principis.png';

const APARTATS = [
  {
    id: '1',
    title: 'Normativa aplicable i principis generals',
    content: (
      <>
        {/* ESQUEMA NORMATIVA */}
        <div
          style={{
            margin: '2rem 0',
            textAlign: 'center',
          }}
        >
          <img
            src={regulacioImg}
            alt="Esquema de la normativa aplicable al procediment administratiu"
            style={{
              maxWidth: '85%',
              height: 'auto',
              borderRadius: '6px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          />
        </div>

        {/* LINK AL DESENVOLUPAMENT TEÒRIC */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto 3rem auto',
            padding: '1rem 1.25rem',
            backgroundColor: '#f7f9fc',
            borderLeft: '4px solid #2563eb',
            borderRadius: '4px',
          }}
        >
          <p style={{ marginBottom: '0.5rem', fontWeight: 500 }}>
            📘 Desenvolupament teòric complet:
          </p>

          <a
            href="/normativa.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#1d4ed8',
              textDecoration: 'underline',
              fontWeight: 500,
            }}
          >
            Consultar l’explicació detallada del marc normatiu
          </a>
        </div>

        {/* ESQUEMA PRINCIPIS D’ACTUACIÓ ADMINISTRATIVA */}
        <div
          style={{
            margin: '2rem 0',
            textAlign: 'center',
          }}
        >
          <img
            src={principisImg}
            alt="Principis de l’actuació administrativa"
            style={{
              maxWidth: '75%',
              height: 'auto',
              borderRadius: '6px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          />
        </div>
         {/* LINK AL DESENVOLUPAMENT TEÒRIC */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto 3rem auto',
            padding: '1rem 1.25rem',
            backgroundColor: '#f7f9fc',
            borderLeft: '4px solid #2563eb',
            borderRadius: '4px',
          }}
        >
          <p style={{ marginBottom: '0.5rem', fontWeight: 500 }}>
            📘 Desenvolupament teòric complet:
          </p>


          <a href="/principis.html" target="_blank" rel="noopener noreferrer">
          Consultar l’explicació detallada dels principis d’actuació administrativa
          </a>

          
        </div>
      </>
    ),
  },
  {
    id: '2',
    title:
      'El procediment administratiu com a garantia de l’actuació administrativa',
    content: <p>(Contingut pendent)</p>,
  },
  {
    id: '3',
    title: 'L’acte administratiu',
    content: <p>(Contingut pendent)</p>,
  },
  {
    id: '4',
    title: 'Les persones en el procediment administratiu',
    content: <p>(Contingut pendent)</p>,
  },
  {
    id: '5',
    title: 'Tramitació del procediment administratiu',
    content: <p>(Contingut pendent)</p>,
  },
  {
    id: '6',
    title: 'Execució de l’acte administratiu',
    content: <p>(Contingut pendent)</p>,
  },
  {
    id: '7',
    title: 'Revisió dels actes administratius i recursos',
    content: <p>(Contingut pendent)</p>,
  },
];

const ProcedimentApartat = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const apartat = useMemo(
    () => APARTATS.find((a) => a.id === id),
    [id]
  );

  if (!apartat) {
    return (
      <div style={{ padding: '1.5rem 2rem' }}>
        <button onClick={() => navigate('/procediment')}>
          ← Tornar al temari
        </button>
        <h2>Apartat no trobat</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '1.5rem 2rem' }}>
      <button
        onClick={() => navigate('/procediment')}
        style={{ marginBottom: '1rem', cursor: 'pointer' }}
      >
        ← Tornar al temari
      </button>

      <h2 style={{ marginBottom: '1.25rem' }}>
        Apartat {apartat.id}. {apartat.title}
      </h2>

      {apartat.content}
    </div>
  );
};

export default ProcedimentApartat;
