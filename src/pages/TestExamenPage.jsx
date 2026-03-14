import { useEffect, useMemo, useState } from 'react';
import MultipleChoiceTest from '../components/tests/MultipleChoiceTest';
import { getBasePath } from '../utils/basePath';
import './TestExamenPage.css';

function normalizeQuestions(questions = []) {
  return questions
    .filter((item) => Array.isArray(item.options) && item.options.length === 4)
    .map((item, index) => ({
      id: item.id || `e-${index + 1}`,
      question: item.question,
      options: item.options,
      correctIndex: Number(item.correctIndex),
    }))
    .filter((item) => Number.isInteger(item.correctIndex) && item.correctIndex >= 0 && item.correctIndex < 4);
}

export default function TestExamenPage() {
  const [simulations, setSimulations] = useState([]);
  const [selectedSimulationId, setSelectedSimulationId] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [error, setError] = useState('');

  const selectedSimulation = useMemo(
    () => simulations.find((item) => item.id === selectedSimulationId),
    [simulations, selectedSimulationId],
  );

  useEffect(() => {
    let mounted = true;

    async function loadSimulations() {
      try {
        setLoadingList(true);
        setError('');
        const response = await fetch(getBasePath('tests/examen/index.json'));
        if (!response.ok) throw new Error('No s\'ha pogut carregar el cataleg de simulacions.');
        const data = await response.json();
        const items = Array.isArray(data?.simulations) ? data.simulations : [];

        if (!mounted) return;

        setSimulations(items);
        setSelectedSimulationId(items[0]?.id || '');
      } catch (loadError) {
        if (!mounted) return;
        setError(loadError.message || 'Error desconegut carregant les simulacions.');
      } finally {
        if (mounted) setLoadingList(false);
      }
    }

    loadSimulations();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;

    async function loadQuestions() {
      if (!selectedSimulation?.file) {
        setQuestions([]);
        return;
      }

      try {
        setLoadingQuestions(true);
        setError('');
        const response = await fetch(getBasePath(`tests/examen/${selectedSimulation.file}`));
        if (!response.ok) throw new Error('No s\'han pogut carregar les preguntes del simulacre.');

        const data = await response.json();
        const loadedQuestions = normalizeQuestions(data?.questions);

        if (!mounted) return;
        setQuestions(loadedQuestions);
      } catch (loadError) {
        if (!mounted) return;
        setQuestions([]);
        setError(loadError.message || 'Error desconegut carregant les preguntes.');
      } finally {
        if (mounted) setLoadingQuestions(false);
      }
    }

    loadQuestions();

    return () => {
      mounted = false;
    };
  }, [selectedSimulation]);

  return (
    <section className="test-page">
      <header className="test-page-header">
        <h1>Test examen</h1>
        <p>Simulacres de 100 preguntes amb format oficial de resposta multiple.</p>
      </header>

      {loadingList ? <p className="test-message">Carregant simulacres...</p> : null}
      {error ? <p className="test-message error">{error}</p> : null}

      {!loadingList && simulations.length > 0 ? (
        <div className="simulation-grid">
          {simulations.map((simulation) => (
            <button
              key={simulation.id}
              type="button"
              className={`simulation-card ${simulation.id === selectedSimulationId ? 'selected' : ''}`}
              onClick={() => setSelectedSimulationId(simulation.id)}
            >
              <span className="simulation-card-title">{simulation.title}</span>
              {simulation.description ? (
                <span className="simulation-card-description">{simulation.description}</span>
              ) : null}
            </button>
          ))}
        </div>
      ) : null}

      {loadingQuestions ? (
        <p className="test-message">Carregant preguntes...</p>
      ) : (
        <MultipleChoiceTest
          title={selectedSimulation ? selectedSimulation.title : 'Simulacre d\'examen'}
          subtitle="100 preguntes, 4 opcions i correccio final automàtica."
          questions={questions}
        />
      )}
    </section>
  );
}
