import { useState } from 'react';
import './ForumPage.css';

/* ─────────────────────────────────────────────────────────────────────────────
   Mock data — replace with Firebase / Supabase queries when backend is ready.
   ───────────────────────────────────────────────────────────────────────────── */

const CATEGORIES = [
  {
    id: 'dubtes-temari',
    title: 'Dubtes de temari',
    description: 'Preguntes i aclariments sobre els temes oficials del temari.',
    topics: 24,
    replies: 87,
    icon: '📚',
  },
  {
    id: 'estrategia-estudi',
    title: 'Estratègia d\'estudi',
    description: 'Consells, planificació i tècniques per preparar les oposicions.',
    topics: 18,
    replies: 63,
    icon: '🧠',
  },
  {
    id: 'suposits-practics',
    title: 'Supòsits pràctics',
    description: 'Casos pràctics resolts i dubtes sobre la prova pràctica.',
    topics: 15,
    replies: 52,
    icon: '📝',
  },
  {
    id: 'gestio-economica',
    title: 'Gestió econòmica i pressupostària',
    description: 'Debats específics sobre pressupostos, despesa pública i control financer.',
    topics: 12,
    replies: 41,
    icon: '💰',
  },
  {
    id: 'contractacio-publica',
    title: 'Contractació pública',
    description: 'Procediments, tipologia de contractes i plataforma PSCP.',
    topics: 9,
    replies: 34,
    icon: '📄',
  },
  {
    id: 'general',
    title: 'General',
    description: 'Conversa oberta, novetats, convocatòries i temes diversos.',
    topics: 31,
    replies: 112,
    icon: '💬',
  },
];

const LATEST_TOPICS = [
  {
    id: 1,
    title: 'Diferència entre nul·litat i anul·labilitat — algun esquema clar?',
    author: 'MariaGP',
    replies: 7,
    lastActivity: 'Fa 2 hores',
    category: 'Dubtes de temari',
  },
  {
    id: 2,
    title: 'Quants temes estudieu per setmana?',
    author: 'JordiAdmin',
    replies: 12,
    lastActivity: 'Fa 5 hores',
    category: 'Estratègia d\'estudi',
  },
  {
    id: 3,
    title: 'Supòsit sobre procediment de contractació menor',
    author: 'LauraBCN',
    replies: 4,
    lastActivity: 'Ahir',
    category: 'Supòsits pràctics',
  },
  {
    id: 4,
    title: 'Modificació de contractes vs. resolució — quan aplica cadascuna?',
    author: 'PereContractes',
    replies: 9,
    lastActivity: 'Ahir',
    category: 'Contractació pública',
  },
  {
    id: 5,
    title: 'Algú sap la data de la propera convocatòria C1?',
    author: 'AnnaTGN',
    replies: 15,
    lastActivity: 'Fa 2 dies',
    category: 'General',
  },
  {
    id: 6,
    title: 'Com distingir les fases d\'execució del pressupost?',
    author: 'MarcGirona',
    replies: 6,
    lastActivity: 'Fa 3 dies',
    category: 'Gestió econòmica i pressupostària',
  },
];

/* ─────────────────────────────────────────────────────────────────────────── */

export default function ForumPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="forum-page">
      {/* ── Header ── */}
      <header className="forum-header">
        <div className="forum-header-text">
          <h1 className="forum-title">
            <span className="forum-title-icon" aria-hidden>💬</span>
            Fòrum d&rsquo;oposicions &mdash; Administratiu Generalitat
          </h1>
          <p className="forum-subtitle">Espai de debat i resolució de dubtes</p>
        </div>
        <button className="forum-new-topic-btn" disabled title="Properament disponible">
          ＋ Crear nou tema
        </button>
      </header>

      {/* ── Categories ── */}
      <section className="forum-categories">
        <h2 className="forum-section-heading">Categories</h2>
        <div className="forum-categories-grid">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className={`forum-category-card${selectedCategory === cat.id ? ' forum-category-card--active' : ''}`}
              onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
            >
              <span className="forum-category-icon" aria-hidden>{cat.icon}</span>
              <h3 className="forum-category-title">{cat.title}</h3>
              <p className="forum-category-desc">{cat.description}</p>
              <div className="forum-category-stats">
                <span className="forum-stat">
                  <strong>{cat.topics}</strong> temes
                </span>
                <span className="forum-stat">
                  <strong>{cat.replies}</strong> respostes
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Latest topics ── */}
      <section className="forum-latest">
        <h2 className="forum-section-heading">Últims temes</h2>
        <div className="forum-table-wrapper">
          <table className="forum-table">
            <thead>
              <tr>
                <th>Tema</th>
                <th>Autor</th>
                <th className="forum-th-center">Respostes</th>
                <th>Última activitat</th>
              </tr>
            </thead>
            <tbody>
              {LATEST_TOPICS
                .filter((t) => !selectedCategory || CATEGORIES.find((c) => c.id === selectedCategory)?.title === t.category)
                .map((topic) => (
                <tr key={topic.id}>
                  <td>
                    <span className="forum-topic-title">{topic.title}</span>
                    <span className="forum-topic-badge">{topic.category}</span>
                  </td>
                  <td className="forum-author">{topic.author}</td>
                  <td className="forum-replies-count">{topic.replies}</td>
                  <td className="forum-last-activity">{topic.lastActivity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
