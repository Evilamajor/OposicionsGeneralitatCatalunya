import { useEffect, useMemo, useState } from 'react';
import MultipleChoiceTest from '../components/tests/MultipleChoiceTest';
import { getBasePath } from '../utils/basePath';
import './TestNormativaPage.css';

function normalizeQuestions(questions = []) {
  return questions
    .filter((item) => Array.isArray(item.options) && item.options.length === 4)
    .map((item, index) => ({
      id: item.id || `n-${index + 1}`,
      question: item.question,
      options: item.options,
      correctIndex: Number(item.correctIndex),
    }))
    .filter((item) => Number.isInteger(item.correctIndex) && item.correctIndex >= 0 && item.correctIndex < 4);
}

export default function TestNormativaPage() {
  const [lawItems, setLawItems] = useState([]);
  const [selectedLawId, setSelectedLawId] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [error, setError] = useState('');

  const selectedLaw = useMemo(
    () => lawItems.find((item) => item.id === selectedLawId),
    [lawItems, selectedLawId],
  );

  useEffect(() => {
    let mounted = true;

    async function loadLawList() {
      try {
        setLoadingList(true);
        setError('');
        const response = await fetch(getBasePath('tests/normativa/index.json'));
        if (!response.ok) throw new Error('No s\'ha pogut carregar el cataleg de normativa.');
        const data = await response.json();
        const laws = Array.isArray(data?.laws) ? data.laws : [];

        if (!mounted) return;

        setLawItems(laws);
        setSelectedLawId(laws[0]?.id || '');
      } catch (loadError) {
        if (!mounted) return;
        setError(loadError.message || 'Error desconegut carregant la normativa.');
      } finally {
        if (mounted) setLoadingList(false);
      }
    }

    loadLawList();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;

    async function loadQuestions() {
      if (!selectedLaw?.file) {
        setQuestions([]);
        return;
      }

      try {
        setLoadingQuestions(true);
        setError('');
        const response = await fetch(getBasePath(`tests/normativa/${selectedLaw.file}`));
        if (!response.ok) throw new Error('No s\'han pogut carregar les preguntes d\'aquesta llei.');

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
  }, [selectedLaw]);

  return (
    <section className="test-page">
      <header className="test-page-header">
        <h1>Test de normativa</h1>
        <p>Selecciona una llei i practica amb preguntes tipus examen.</p>
      </header>

      {loadingList ? <p className="test-message">Carregant llistat de lleis...</p> : null}
      {error ? <p className="test-message error">{error}</p> : null}

      {!loadingList && lawItems.length > 0 ? (
        <div className="law-grid">
          {lawItems.map((law) => (
            <button
              key={law.id}
              type="button"
              className={`law-card ${law.id === selectedLawId ? 'selected' : ''}`}
              onClick={() => setSelectedLawId(law.id)}
            >
              <span className="law-card-title">{law.title}</span>
              {law.description ? <span className="law-card-description">{law.description}</span> : null}
            </button>
          ))}
        </div>
      ) : null}

      {loadingQuestions ? (
        <p className="test-message">Carregant preguntes...</p>
      ) : (
        <MultipleChoiceTest
          title={selectedLaw ? `Test: ${selectedLaw.title}` : 'Test de normativa'}
          subtitle="20 preguntes per llei, 4 opcions i una sola resposta correcta."
          questions={questions}
        />
      )}
    </section>
  );
}
