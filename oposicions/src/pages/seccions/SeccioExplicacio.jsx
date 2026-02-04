import { useParams } from 'react-router-dom';
import mapaBlocs from '../../blocs/mapaBlocs';

const SeccioExplicacio = () => {
  const { blocId, temaId } = useParams();

  // 🔧 NORMALITZACIÓ CRÍTICA
  // Accepta: "5", "tema5", "tema-5", "tema-05"
  const temaNum = temaId.replace(/\D/g, ''); // ← EXTREU NOMÉS EL NÚMERO

  const tema = mapaBlocs?.[blocId]?.[temaNum];
  const tipusExplicacio = tema?.explicacio;

  if (tipusExplicacio !== 'html') {
    return (
      <section>
        <h3>Explicació</h3>
        <p style={{ color: '#777' }}>
          Aquesta explicació encara no està disponible per a aquest tema.
        </p>
      </section>
    );
  }

  const temaFolder = `tema-${temaNum.padStart(2, '0')}`;
  const htmlSrc = `/content/${blocId}/${temaFolder}/explicacio.html`;

  return (
    <section>
      <h3>Explicació</h3>
      <iframe
        src={htmlSrc}
        title="Explicació del tema"
        style={{ width: '100%', height: '80vh', border: 'none' }}
      />
    </section>
  );
};

export default SeccioExplicacio;
