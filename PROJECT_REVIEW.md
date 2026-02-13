# React + Vite Educational Project - Comprehensive Review

**Project**: OposicionsGeneralitatCatalunya  
**Type**: Educational study website for public administration exams (Generalitat de Catalunya)  
**Stack**: React 18, Vite 4, React Router 6, react-pdf  
**Date**: February 2026  

---

## Executive Summary

This is a well-structured educational web application with a clean architecture and good separation of concerns. The project demonstrates solid React fundamentals with a focus on usability for study purposes. The main areas for improvement are:

1. **Component organization** - Some duplication in PDF viewers
2. **Performance optimization** - PDF loading and rendering can be optimized
3. **Maintainability** - Better code organization and documentation needed
4. **State management** - Missing global state solution for cross-component needs
5. **Error handling** - Inconsistent error handling patterns

**Overall Grade**: B+ (Good foundation with room for optimization)

---

## 1. Project Structure Analysis

### 1.1 Directory Organization ✅ GOOD

```
oposicions/
├── src/
│   ├── components/        # React components (well-organized)
│   │   ├── BlocPage.jsx
│   │   ├── BlocPresentationViewer.jsx
│   │   ├── Bloc4PresentationViewer.jsx  ⚠️ REDUNDANT
│   │   ├── Bloc5PresentationViewer.jsx  ⚠️ REDUNDANT
│   │   ├── Sidebar.jsx
│   │   ├── NotesEditor.jsx
│   │   ├── BlocDiagram.jsx
│   │   ├── WelcomePanel.jsx
│   │   ├── AnnexPage.jsx
│   │   └── BlocList.jsx
│   ├── App.jsx            # Main router
│   ├── main.jsx           # Entry point
│   └── data.js            # ✅ Centralized data
├── public/
│   ├── content/           # HTML content by bloc/tema
│   ├── materials/         # PDF study materials
│   ├── diagrams/          # Draw.io diagrams
│   └── assets/            # Images
├── package.json
└── vite.config.js
```

**Strengths:**
- Clear separation between components, data, and static content
- Logical folder structure that matches the domain model (blocs/temas)
- Public folder properly used for static assets

**Issues:**
- ⚠️ Bloc-specific PDF viewers (Bloc4, Bloc5) are unnecessary wrapper components
- Missing `/hooks` directory for custom React hooks
- Missing `/utils` or `/lib` directory for shared utilities
- No `/constants` directory for magic strings and configuration

---

## 2. Component Architecture

### 2.1 Component Design Patterns ✅ MOSTLY GOOD

**Positive Patterns:**
- ✅ Functional components with hooks (modern React)
- ✅ Props are well-defined and documented with JSDoc
- ✅ Good separation of concerns (presentation vs. logic)
- ✅ Proper use of React Router hooks (`useParams`, `useNavigate`)

**Issues:**

#### 2.1.1 Redundant Wrapper Components ⚠️

**Problem:**
```jsx
// Bloc4PresentationViewer.jsx (15 lines)
export default function Bloc4PresentationViewer() {
  return (
    <BlocPresentationViewer
      pdfUrl="/content/bloc-4/bloc4_contractacio_publica_presentacio.pdf"
      title="Presentació · Bloc IV"
    />
  );
}
```

**Impact:** 
- Creates unnecessary files
- These components are never actually imported/used anywhere in the codebase
- Dead code that adds maintenance burden

**Recommendation:**
```jsx
// Remove Bloc4PresentationViewer.jsx and Bloc5PresentationViewer.jsx
// BlocPage.jsx already handles this with PRESENTATION_MAP
```

#### 2.1.2 Component Responsibility ⚠️

**BlocPage.jsx is doing too much (225 lines):**
- Manages routing (blocId, temaId, seccio)
- Fetches HTML content
- Renders PDF presentations
- Displays diagrams
- Shows notes editor
- Handles section navigation

**Recommendation:** Split into smaller components:
```
BlocPage.jsx (orchestrator)
├── BlocOverview.jsx (when only bloc selected)
├── TemaContent.jsx (when tema + section selected)
├── SectionTabs.jsx (navigation tabs)
└── ContentViewer.jsx (HTML content display)
```

### 2.2 Component Composition ✅ GOOD

**Well-composed components:**
- `BlocPage` properly composes `BlocDiagram`, `BlocPresentationViewer`, `NotesEditor`
- `Sidebar` handles its own expand/collapse state
- Components are generally reusable

### 2.3 State Management ⚠️ NEEDS IMPROVEMENT

**Current Approach:**
- Local component state with `useState`
- Props drilling for some data
- localStorage for notes persistence

**Issues:**
1. **No global state management**
   - Each component fetches its own data
   - No shared state for user preferences (theme, zoom level, sidebar state)
   - Notes are stored in localStorage but not coordinated

2. **Missing state synchronization**
   - Multiple components might load the same PDF
   - No caching of fetched content
   - No loading state coordination

**Recommendations:**

**Option A - Context API (Lightweight):**
```jsx
// contexts/AppContext.jsx
const AppContext = createContext();

export function AppProvider({ children }) {
  const [userPreferences, setUserPreferences] = useState({
    theme: 'light',
    sidebarExpanded: true,
    defaultZoom: 1.5
  });
  
  return (
    <AppContext.Provider value={{ userPreferences, setUserPreferences }}>
      {children}
    </AppContext.Provider>
  );
}
```

**Option B - Zustand (Better for this project):**
```jsx
// stores/useAppStore.js
import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useAppStore = create(
  persist(
    (set) => ({
      preferences: { theme: 'light', zoom: 1.5 },
      loadedContent: {},
      setPreference: (key, value) => 
        set((state) => ({ 
          preferences: { ...state.preferences, [key]: value } 
        })),
      cacheContent: (key, content) =>
        set((state) => ({
          loadedContent: { ...state.loadedContent, [key]: content }
        }))
    }),
    { name: 'oposicions-storage' }
  )
);
```

---

## 3. PDF Viewer Implementation

### 3.1 Current Implementation Analysis

**Component:** `BlocPresentationViewer.jsx` (368 lines)

**Libraries Used:**
- `react-pdf` v10.3.0 (wraps PDF.js)
- `pdfjs-dist` v5.4.624

**Features:**
- ✅ Slide-by-slide navigation
- ✅ Zoom controls (0.75x to 3x)
- ✅ Fullscreen mode
- ✅ Keyboard shortcuts
- ✅ Page jump input
- ✅ Slide indicator dots
- ✅ Error handling with debug info

### 3.2 Performance Issues ⚠️

#### 3.2.1 No PDF Caching

**Problem:**
```jsx
// Each time component mounts, PDF is re-fetched
<Document
  file={resolvedUrl}
  onLoadSuccess={onDocumentLoadSuccess}
/>
```

**Impact:**
- Network request on every navigation
- Slow navigation between blocs
- Unnecessary bandwidth usage

**Solution:**
```jsx
// utils/pdfCache.js
const pdfCache = new Map();

export async function getCachedPdf(url) {
  if (pdfCache.has(url)) {
    return pdfCache.get(url);
  }
  
  const response = await fetch(url);
  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  
  pdfCache.set(url, objectUrl);
  return objectUrl;
}

// In component:
useEffect(() => {
  getCachedPdf(resolvedUrl).then(setResolvedUrl);
}, [pdfUrl]);
```

#### 3.2.2 No Lazy Loading

**Problem:**
- Entire PDF loaded at once
- Large PDFs (20+ pages) slow down initial render

**Solution:**
```jsx
// Only load pages as needed
<Document
  file={resolvedUrl}
  loading={<Skeleton />}
  options={{
    // Load pages on-demand
    cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
    cMapPacked: true,
  }}
>
  <Page 
    pageNumber={currentPage}
    loading={<PageSkeleton />}
    // Only render current page + prefetch adjacent
  />
</Document>
```

#### 3.2.3 Rendering Performance

**Problem:**
```jsx
// Every page render includes both text and annotation layers
<Page
  pageNumber={currentPage}
  scale={scale}
  renderTextLayer={false}  // ✅ Already disabled
  renderAnnotationLayer={true}  // ⚠️ May not be needed
/>
```

**Recommendation:**
- Disable `renderAnnotationLayer` if PDFs don't have interactive elements
- Use canvas-only rendering for better performance
- Implement virtual scrolling for multi-page view

#### 3.2.4 Scale State Management

**Problem:**
```jsx
const [scale, setScale] = useState(1.5);
// Scale resets on every component mount
```

**Solution:**
```jsx
// Persist zoom level in localStorage or global state
const [scale, setScale] = usePersistedState('pdf-zoom', 1.5);
```

### 3.3 Worker Configuration ⚠️

**Current Setup:**
```jsx
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'react-pdf/node_modules/pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();
```

**Issues:**
1. Hardcoded path that might break in production
2. Worker loaded for every component instance
3. No error handling if worker fails to load

**Better Approach:**
```jsx
// utils/pdfWorker.js
let workerInitialized = false;

export function initPdfWorker() {
  if (workerInitialized) return;
  
  try {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.mjs',
      import.meta.url
    ).toString();
    workerInitialized = true;
  } catch (error) {
    console.error('Failed to initialize PDF worker:', error);
    // Fallback to CDN
    pdfjs.GlobalWorkerOptions.workerSrc = 
      'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  }
}

// In main.jsx (initialize once)
initPdfWorker();
```

### 3.4 User Experience Improvements

**Missing Features:**
1. **Thumbnail preview** - No overview of all slides
2. **Search within PDF** - Can't find specific content
3. **Bookmarks** - Can't save favorite slides
4. **Print/Download** - No way to get offline copy
5. **Mobile gestures** - No pinch-to-zoom on mobile
6. **Progress indicator** - No visual progress through presentation

**Recommendations:**

```jsx
// Add thumbnail strip
<div className="thumbnail-strip">
  {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
    <ThumbnailPage
      key={page}
      pageNumber={page}
      onClick={() => setCurrentPage(page)}
      active={page === currentPage}
    />
  ))}
</div>

// Add progress bar
<div className="progress-bar">
  <div 
    className="progress-fill" 
    style={{ width: `${(currentPage / numPages) * 100}%` }}
  />
</div>

// Add download button
<button onClick={() => window.open(resolvedUrl, '_blank')}>
  📥 Descarregar PDF
</button>
```

---

## 4. Data Management

### 4.1 Current Approach ✅ GOOD

**File:** `src/data.js`

**Structure:**
```javascript
export const blocks = [
  {
    id: 'bloc-1',
    title: 'Bloc I · Marc institucional',
    topics: [
      { 
        id: 'tema-1', 
        label: 'Tema 1 · La Constitució...', 
        filename: 'tema01.html' 
      }
    ]
  }
];

export const annexos = [
  { id: 'annex-a', title: 'Bloc A · Català' }
];
```

**Strengths:**
- ✅ Centralized data source
- ✅ Clear structure that matches domain model
- ✅ Easy to maintain and extend
- ✅ Type-safe (if TypeScript were added)

### 4.2 Issues ⚠️

#### 4.2.1 Hardcoded File Paths

**Problem:**
```jsx
// BlocPage.jsx
const PRESENTATION_MAP = {
  'bloc-1': '/content/bloc-1/presentaciobloc1.pdf',
  'bloc-3': '/content/bloc-3/presetaciobloc3.pdf', // ⚠️ Typo!
};

// BlocDiagram.jsx
const DIAGRAM_MAP = {
  'bloc-1': 'esquema-marc-institucional.drawio',
};
```

**Issues:**
1. Data scattered across multiple files
2. Manual mapping required (error-prone)
3. Typo in bloc-3 path (`presetacio` vs `presentacio`)
4. No single source of truth

**Solution:** Move all paths to `data.js`:
```javascript
// data.js
export const blocks = [
  {
    id: 'bloc-1',
    title: 'Bloc I · Marc institucional',
    presentation: '/content/bloc-1/presentaciobloc1.pdf',
    diagram: 'esquema-marc-institucional.drawio',
    topics: [...]
  },
  {
    id: 'bloc-3',
    title: 'Bloc III · Règim jurídic',
    presentation: '/content/bloc-3/presentaciobloc3.pdf', // ✅ Fixed typo
    diagram: 'esquema-regim-juridic-sector-public.drawio',
    topics: [...]
  }
];

// Usage in components
const bloc = blocks.find(b => b.id === blocId);
<BlocPresentationViewer pdfUrl={bloc.presentation} />
```

#### 4.2.2 No Content Validation

**Problem:**
- No check if files exist
- No fallback for missing content
- Runtime errors if paths are wrong

**Solution:**
```javascript
// utils/contentValidator.js
export async function validateContent() {
  const errors = [];
  
  for (const bloc of blocks) {
    // Check if presentation exists
    const res = await fetch(bloc.presentation, { method: 'HEAD' });
    if (!res.ok) {
      errors.push(`Missing: ${bloc.presentation}`);
    }
    
    // Check topics
    for (const topic of bloc.topics) {
      const topicPath = `/content/${bloc.id}/${topic.id}/legislacio.html`;
      const topicRes = await fetch(topicPath, { method: 'HEAD' });
      if (!topicRes.ok) {
        errors.push(`Missing: ${topicPath}`);
      }
    }
  }
  
  return errors;
}

// Run in development
if (import.meta.env.DEV) {
  validateContent().then(errors => {
    if (errors.length > 0) {
      console.warn('Missing content files:', errors);
    }
  });
}
```

#### 4.2.3 Magic Strings

**Problem:**
```jsx
// BlocPage.jsx
const SECTIONS = [
  { id: 'legislacio', label: 'Legislació' },
  { id: 'contingut', label: 'Contingut' },
  { id: 'casos', label: 'Casos' },
  { id: 'chatgpt', label: 'ChatGPT' },
  { id: 'flashcards', label: 'Flashcards' },
  { id: 'materials', label: 'Materials' },
  { id: 'powerpoint', label: 'PowerPoint' },
];
```

**Solution:** Move to `data.js` or `constants.js`:
```javascript
// constants/sections.js
export const TEMA_SECTIONS = [
  { id: 'legislacio', label: 'Legislació', icon: '📖' },
  { id: 'contingut', label: 'Contingut', icon: '📝' },
  { id: 'casos', label: 'Casos', icon: '⚖️' },
  { id: 'chatgpt', label: 'ChatGPT', icon: '🤖' },
  { id: 'flashcards', label: 'Flashcards', icon: '🎴' },
  { id: 'materials', label: 'Materials', icon: '📚' },
  { id: 'powerpoint', label: 'PowerPoint', icon: '📊' },
] as const;

export type SectionId = typeof TEMA_SECTIONS[number]['id'];
```

---

## 5. Routing & Navigation

### 5.1 Current Implementation ✅ GOOD

**Router Setup:**
```jsx
<Routes>
  <Route path="/" element={<WelcomePanel />} />
  <Route path="/bloc/:blocId/:temaId/:seccio" element={<BlocPage />} />
  <Route path="/bloc/:blocId" element={<BlocPage />} />
  <Route path="/annex/:annexId" element={<AnnexPage />} />
</Routes>
```

**Strengths:**
- ✅ Clean URL structure
- ✅ Hierarchical routes match domain model
- ✅ Proper use of URL parameters

### 5.2 Issues ⚠️

#### 5.2.1 No 404 Page

**Problem:**
- Invalid routes show blank page
- No user feedback for broken links

**Solution:**
```jsx
<Routes>
  <Route path="/" element={<WelcomePanel />} />
  <Route path="/bloc/:blocId/:temaId/:seccio" element={<BlocPage />} />
  <Route path="/bloc/:blocId" element={<BlocPage />} />
  <Route path="/annex/:annexId" element={<AnnexPage />} />
  <Route path="*" element={<NotFoundPage />} />
</Routes>
```

#### 5.2.2 Navigation State Management

**Problem in Sidebar.jsx:**
```jsx
// Redundant navigation
onClick={() => {
  navigate(`/bloc/${bloc.id}`);
  setExpandedBlocId(bloc.id);
}}
```

- `NavLink` already handles navigation
- Calling `navigate` in `onClick` causes double navigation
- State update should be in separate effect

**Solution:**
```jsx
// Remove navigate call
<NavLink
  to={`/bloc/${bloc.id}`}
  onClick={() => setExpandedBlocId(bloc.id)}
>
```

#### 5.2.3 Deep Linking Issues

**Problem:**
- Sidebar doesn't auto-expand when deep-linking to a tema
- Breadcrumbs missing

**Solution:**
```jsx
// Sidebar.jsx - auto-expand on mount
useEffect(() => {
  if (activeBlockId && !expandedBlocId) {
    setExpandedBlocId(activeBlockId);
  }
}, [activeBlockId]); // ✅ Already implemented

// Add breadcrumbs
<nav className="breadcrumbs">
  <Link to="/">Inici</Link>
  {blocId && <> › <Link to={`/bloc/${blocId}`}>{bloc?.title}</Link></>}
  {temaId && <> › <span>{tema?.label}</span></>}
  {seccio && <> › <span>{SECTIONS.find(s => s.id === seccio)?.label}</span></>}
</nav>
```

---

## 6. Styling & UI/UX

### 6.1 CSS Architecture ✅ MOSTLY GOOD

**Current Approach:**
- Global CSS files (`index.css`, `App.css`)
- Component-specific CSS (e.g., `BlocPage.css`)
- No CSS-in-JS or CSS Modules

**Strengths:**
- ✅ Clean, readable stylesheets
- ✅ BEM-like naming convention
- ✅ Good use of CSS Grid for layout
- ✅ Responsive design considerations

### 6.2 Issues ⚠️

#### 6.2.1 CSS Organization

**Problems:**
1. **No CSS naming convention** - Mix of camelCase and kebab-case
2. **Color values hardcoded** - No design tokens
3. **Duplicate styles** - Similar buttons styled differently
4. **No dark mode** - Despite being a study app (eye strain)

**Recommendations:**

**A. Design Tokens:**
```css
/* styles/tokens.css */
:root {
  /* Colors */
  --color-primary: #0052cc;
  --color-primary-hover: #003d99;
  --color-text: #1f2933;
  --color-text-secondary: #6b7280;
  --color-border: #e5e7eb;
  --color-background: #f6f7f9;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  
  /* Typography */
  --font-size-sm: 13px;
  --font-size-base: 15px;
  --font-size-lg: 16px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #f6f7f9;
    --color-background: #1f2933;
    --color-border: #3e4c59;
  }
}
```

**B. Component-Scoped Styles with CSS Modules:**
```jsx
// BlocPage.module.css
.container {
  padding: var(--space-lg);
}

.title {
  font-size: var(--font-size-lg);
  color: var(--color-text);
}

// BlocPage.jsx
import styles from './BlocPage.module.css';

<div className={styles.container}>
  <h2 className={styles.title}>{tema.label}</h2>
</div>
```

#### 6.2.2 Responsive Design

**Current Implementation:**
```css
@media (max-width: 720px) {
  .app-layout {
    grid-template-columns: 1fr;
  }
}
```

**Issues:**
1. Only one breakpoint
2. PDF viewer not optimized for mobile
3. Touch gestures not implemented

**Recommendations:**
```css
/* Multiple breakpoints */
@media (max-width: 480px) { /* Mobile */ }
@media (min-width: 481px) and (max-width: 768px) { /* Tablet */ }
@media (min-width: 769px) and (max-width: 1024px) { /* Desktop */ }
@media (min-width: 1025px) { /* Large desktop */ }

/* Mobile-specific PDF controls */
@media (max-width: 768px) {
  .presentation-toolbar {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .page-jump-input {
    width: 100%;
  }
}
```

#### 6.2.3 Accessibility ⚠️

**Current State:**
- ✅ Good: Semantic HTML, ARIA labels, keyboard navigation
- ⚠️ Missing: Focus indicators, skip links, screen reader announcements

**Improvements Needed:**
```jsx
// Add skip link
<a href="#main-content" className="skip-link">
  Saltar a contingut principal
</a>

// Better focus indicators
button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

// Announce page changes to screen readers
<div role="status" aria-live="polite" className="sr-only">
  {loading && 'Carregant contingut...'}
  {error && `Error: ${error}`}
</div>
```

---

## 7. Error Handling

### 7.1 Current State ⚠️ INCONSISTENT

**Good Examples:**
```jsx
// BlocPage.jsx - handles fetch errors
fetch(contentUrl)
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.text();
  })
  .catch(err => {
    setError(err.message);
  });
```

**Missing:**
1. No global error boundary
2. No retry logic for failed requests
3. No offline detection
4. No error logging/monitoring

### 7.2 Recommendations

**A. Error Boundary:**
```jsx
// components/ErrorBoundary.jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
    // Send to error tracking service (Sentry, etc.)
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-page">
          <h1>Alguna cosa ha anat malament</h1>
          <button onClick={() => window.location.reload()}>
            Recarregar pàgina
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Wrap app
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

**B. Retry Logic:**
```jsx
// utils/fetchWithRetry.js
export async function fetchWithRetry(url, options = {}, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response;
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}
```

**C. Offline Detection:**
```jsx
// hooks/useOnlineStatus.js
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  return isOnline;
}

// Usage
const isOnline = useOnlineStatus();
{!isOnline && (
  <div className="offline-banner">
    ⚠️ Sense connexió a internet. Algunes funcions no estan disponibles.
  </div>
)}
```

---

## 8. Performance Analysis

### 8.1 Bundle Size ⚠️

**Current Dependencies:**
- `react-pdf`: ~500KB (large!)
- `pdfjs-dist`: ~1.5MB (very large!)
- `react-router-dom`: ~50KB

**Issues:**
1. PDF libraries add significant bundle size
2. No code splitting
3. All blocs loaded upfront

**Recommendations:**

**A. Code Splitting:**
```jsx
// Lazy load components
const BlocPage = lazy(() => import('./components/BlocPage'));
const AnnexPage = lazy(() => import('./components/AnnexPage'));

<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/bloc/:blocId" element={<BlocPage />} />
    <Route path="/annex/:annexId" element={<AnnexPage />} />
  </Routes>
</Suspense>
```

**B. Dynamic Imports for PDFs:**
```jsx
// Only load react-pdf when needed
const loadPdfViewer = () => {
  return import('./components/BlocPresentationViewer').then(
    module => module.default
  );
};
```

### 8.2 Render Performance

**Issues:**
1. **Sidebar re-renders on every route change**
   - Should be memoized
   
2. **BlocPage re-fetches content on every render**
   - Should cache content

**Solutions:**

**A. Memoization:**
```jsx
// Sidebar.jsx
export default memo(function Sidebar() {
  // ... component code
});

// Or use React.memo with custom comparison
export default memo(Sidebar, (prevProps, nextProps) => {
  return prevProps.activeBlockId === nextProps.activeBlockId;
});
```

**B. Content Caching:**
```jsx
// hooks/useContentCache.js
const contentCache = new Map();

export function useCachedContent(url) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (contentCache.has(url)) {
      setContent(contentCache.get(url));
      return;
    }
    
    setLoading(true);
    fetch(url)
      .then(res => res.text())
      .then(text => {
        contentCache.set(url, text);
        setContent(text);
        setLoading(false);
      });
  }, [url]);
  
  return { content, loading };
}
```

### 8.3 Loading Strategy

**Current:** Fetch on demand (good)  
**Issue:** No prefetching of likely next content

**Recommendation:**
```jsx
// Prefetch next tema when user views current tema
useEffect(() => {
  if (!tema) return;
  
  const currentIndex = bloc.topics.findIndex(t => t.id === temaId);
  const nextTema = bloc.topics[currentIndex + 1];
  
  if (nextTema) {
    // Prefetch next tema's legislacio section
    const nextUrl = `/content/${blocId}/${nextTema.id}/legislacio.html`;
    fetch(nextUrl).then(res => res.text()); // Cache for later
  }
}, [bloc, temaId]);
```

---

## 9. Testing Strategy

### 9.1 Current State ❌ NO TESTS

**Missing:**
- Unit tests
- Integration tests
- E2E tests
- Accessibility tests

### 9.2 Recommendations

**A. Testing Setup:**
```json
// package.json
{
  "devDependencies": {
    "vitest": "^1.0.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "@testing-library/user-event": "^14.0.0"
  },
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

**B. Example Tests:**

```jsx
// components/__tests__/Sidebar.test.jsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../Sidebar';

describe('Sidebar', () => {
  it('renders all blocs', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/Bloc I/i)).toBeInTheDocument();
    expect(screen.getByText(/Bloc II/i)).toBeInTheDocument();
  });
  
  it('expands bloc on click', async () => {
    const { user } = render(<Sidebar />);
    
    const toggleButton = screen.getByLabelText(/Expand Bloc I/i);
    await user.click(toggleButton);
    
    expect(screen.getByText(/Tema 1/i)).toBeVisible();
  });
});
```

```jsx
// components/__tests__/BlocPage.test.jsx
describe('BlocPage', () => {
  it('shows loading state while fetching content', () => {
    render(<BlocPage />);
    expect(screen.getByText(/Carregant/i)).toBeInTheDocument();
  });
  
  it('displays error when content fails to load', async () => {
    server.use(
      rest.get('/content/*', (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );
    
    render(<BlocPage />);
    await waitFor(() => {
      expect(screen.getByText(/Error/i)).toBeInTheDocument();
    });
  });
});
```

**C. E2E Tests (Playwright):**
```javascript
// e2e/navigation.spec.js
test('user can navigate from home to tema content', async ({ page }) => {
  await page.goto('/');
  
  // Click on Bloc I
  await page.click('text=Bloc I');
  await expect(page).toHaveURL(/\/bloc\/bloc-1/);
  
  // Click on Tema 1
  await page.click('text=Tema 1');
  await expect(page).toHaveURL(/\/bloc\/bloc-1\/tema-1/);
  
  // Click on Legislació section
  await page.click('text=Legislació');
  await expect(page).toHaveURL(/\/bloc\/bloc-1\/tema-1\/legislacio/);
  
  // Content should be visible
  await expect(page.locator('.html-content')).toBeVisible();
});
```

---

## 10. Developer Experience

### 10.1 Current State ✅ GOOD

**Strengths:**
- ✅ Vite provides fast HMR
- ✅ ESLint configured
- ✅ Clear README with dev instructions
- ✅ Simple npm scripts

### 10.2 Improvements

**A. Add TypeScript:**
```bash
npm install -D typescript @types/react @types/react-dom

# tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

**B. Add Prettier:**
```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80
}
```

**C. Pre-commit Hooks:**
```json
// package.json
{
  "devDependencies": {
    "husky": "^8.0.0",
    "lint-staged": "^15.0.0"
  },
  "lint-staged": {
    "*.{js,jsx}": ["eslint --fix", "prettier --write"],
    "*.{css,md}": ["prettier --write"]
  }
}
```

**D. Better Dev Scripts:**
```json
{
  "scripts": {
    "dev": "vite",
    "dev:host": "vite --host", // Test on mobile
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext js,jsx",
    "lint:fix": "eslint src --ext js,jsx --fix",
    "format": "prettier --write \"src/**/*.{js,jsx,css}\"",
    "typecheck": "tsc --noEmit",
    "validate": "npm run lint && npm run typecheck && npm run test"
  }
}
```

---

## 11. Security Considerations

### 11.1 Current Issues ⚠️

**1. XSS Vulnerability:**
```jsx
// BlocPage.jsx - DANGEROUS
<div 
  className="html-content"
  dangerouslySetInnerHTML={{ __html: htmlContent }}
/>
```

**Risk:** If HTML content is ever user-generated or from untrusted source, this is XSS vulnerable.

**Mitigation:**
- ✅ Current: Content is static, controlled by developers
- ⚠️ Future: If adding user comments/notes with HTML, must sanitize

**Solution (if needed):**
```jsx
import DOMPurify from 'dompurify';

<div 
  className="html-content"
  dangerouslySetInnerHTML={{ 
    __html: DOMPurify.sanitize(htmlContent) 
  }}
/>
```

**2. localStorage Security:**
```jsx
// NotesEditor.jsx
localStorage.setItem(storageKey, newNotes);
```

**Issues:**
- Not encrypted
- Accessible to any script
- No size limit checks

**Recommendations:**
```jsx
// utils/secureStorage.js
export function saveToStorage(key, value) {
  try {
    // Check quota
    const size = new Blob([value]).size;
    if (size > 5 * 1024 * 1024) { // 5MB limit
      throw new Error('Storage quota exceeded');
    }
    
    // Optionally encrypt sensitive data
    const encrypted = btoa(value); // Simple encoding (not secure encryption)
    localStorage.setItem(key, encrypted);
  } catch (error) {
    console.error('Storage error:', error);
    // Fallback to IndexedDB or warn user
  }
}
```

**3. Content Security Policy:**

Add to `index.html`:
```html
<meta http-equiv="Content-Security-Policy" 
      content="
        default-src 'self';
        script-src 'self' 'unsafe-inline';
        style-src 'self' 'unsafe-inline';
        img-src 'self' data: https:;
        font-src 'self' data:;
        connect-src 'self' https://viewer.diagrams.net;
        frame-src https://viewer.diagrams.net;
      ">
```

---

## 12. Maintainability

### 12.1 Code Quality ✅ GOOD

**Strengths:**
- Readable, well-formatted code
- Consistent naming conventions
- JSDoc comments on key components
- Logical file organization

### 12.2 Documentation ⚠️ NEEDS IMPROVEMENT

**Missing:**
1. Component prop documentation (use TypeScript or PropTypes)
2. Architecture decision records (ADRs)
3. Contributing guide
4. Deployment guide

**Recommendations:**

**A. PropTypes (if not using TypeScript):**
```jsx
import PropTypes from 'prop-types';

BlocPresentationViewer.propTypes = {
  pdfUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  onPageChange: PropTypes.func,
};

BlocPresentationViewer.defaultProps = {
  title: 'Presentació',
  onPageChange: () => {},
};
```

**B. Architecture Decision Records:**
```markdown
# docs/adr/001-use-react-pdf.md

# Use react-pdf for PDF viewing

## Context
Need to display PDF presentations within the web app.

## Decision
Use `react-pdf` library (wrapper around PDF.js).

## Alternatives Considered
1. iframe with PDF.js viewer - less control
2. PDF.js directly - more complex
3. Server-side PDF → images - performance issues

## Consequences
- Pros: Good React integration, active maintenance
- Cons: Large bundle size (~2MB)
```

**C. Component README:**
```markdown
# BlocPresentationViewer

Full-featured PDF presentation viewer for blocs.

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `pdfUrl` | string | Yes | - | URL to PDF file |
| `title` | string | No | 'Presentació' | Display title |

## Features

- Slide navigation (arrows, dots, jump to page)
- Zoom controls (0.75x - 3x)
- Fullscreen mode
- Keyboard shortcuts
- Error handling

## Usage

\`\`\`jsx
<BlocPresentationViewer 
  pdfUrl="/content/bloc-1/presentacio.pdf"
  title="Bloc I Presentació"
/>
\`\`\`

## Performance Notes

- Renders only current page
- TextLayer disabled for performance
- Worker runs in separate thread
```

---

## 13. Deployment & CI/CD

### 13.1 Current State ⚠️ NOT DOCUMENTED

**Missing:**
- Build process documentation
- Deployment strategy
- CI/CD pipeline
- Environment management

### 13.2 Recommendations

**A. GitHub Actions CI:**
```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        working-directory: ./oposicions
        run: npm ci
      
      - name: Lint
        working-directory: ./oposicions
        run: npm run lint
      
      - name: Build
        working-directory: ./oposicions
        run: npm run build
      
      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: dist
          path: oposicions/dist
```

**B. Environment Configuration:**
```javascript
// .env.example
VITE_BASE_URL=/
VITE_PDF_WORKER_URL=
VITE_API_URL=
VITE_ENABLE_DEBUG=false

// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_URL || '/',
  build: {
    outDir: 'dist',
    sourcemap: process.env.NODE_ENV !== 'production',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'pdf-vendor': ['react-pdf', 'pdfjs-dist'],
        },
      },
    },
  },
});
```

**C. Deployment Guide:**
```markdown
# docs/DEPLOYMENT.md

## Build for Production

\`\`\`bash
cd oposicions
npm run build
\`\`\`

Output: `dist/` directory

## Deploy to GitHub Pages

\`\`\`bash
npm install -g gh-pages
gh-pages -d oposicions/dist
\`\`\`

## Deploy to Netlify

1. Connect repository
2. Build command: `cd oposicions && npm run build`
3. Publish directory: `oposicions/dist`
4. Environment variables: (see .env.example)

## Deploy to Vercel

\`\`\`bash
npm i -g vercel
cd oposicions
vercel --prod
\`\`\`
```

---

## 14. Priority Recommendations

### 🔴 High Priority (Do First)

1. **Remove Dead Code**
   - Delete `Bloc4PresentationViewer.jsx` and `Bloc5PresentationViewer.jsx`
   - Remove unused imports

2. **Fix Data Structure**
   - Move all file paths to `data.js`
   - Fix typo in bloc-3 presentation path
   - Centralize section definitions

3. **Add Error Boundary**
   - Wrap app in error boundary
   - Add basic error recovery

4. **Implement PDF Caching**
   - Cache PDFs in memory to avoid re-fetching
   - Reduces network usage significantly

5. **Add Content Validation**
   - Check for missing files in development
   - Show clear errors for broken links

### 🟡 Medium Priority (Do Next)

6. **Split Large Components**
   - Break down `BlocPage.jsx` into smaller components
   - Improve testability

7. **Add State Management**
   - Implement Zustand or Context for user preferences
   - Persist zoom level, theme, sidebar state

8. **Performance Optimization**
   - Add code splitting
   - Lazy load PDF viewer
   - Memoize Sidebar

9. **Improve Mobile Experience**
   - Add touch gestures
   - Optimize PDF viewer for mobile
   - Better responsive breakpoints

10. **Add Testing**
    - Set up Vitest
    - Write tests for critical components
    - Add E2E tests for main flows

### 🟢 Low Priority (Nice to Have)

11. **TypeScript Migration**
    - Gradual migration to TypeScript
    - Better type safety

12. **Design System**
    - Create design tokens
    - Implement dark mode
    - Component library

13. **Advanced Features**
    - Search within PDFs
    - Bookmarks
    - Progress tracking
    - Study statistics

14. **SEO & Meta Tags**
    - Add proper meta tags
    - Open Graph tags
    - Sitemap generation

15. **Analytics**
    - Track most viewed topics
    - Study time tracking
    - User progress

---

## 15. Conclusion

### Overall Assessment

**Strengths:**
- ✅ Clean, maintainable architecture
- ✅ Good React practices
- ✅ Well-organized file structure
- ✅ Functional, usable application

**Weaknesses:**
- ⚠️ Performance optimization needed (PDF caching, code splitting)
- ⚠️ Some code duplication (bloc-specific viewers)
- ⚠️ Missing tests
- ⚠️ No TypeScript
- ⚠️ Limited mobile optimization

### Grade: B+ (83/100)

**Breakdown:**
- Architecture: 8/10
- Code Quality: 9/10
- Performance: 6/10
- Maintainability: 8/10
- Testing: 0/10
- Documentation: 7/10
- UX/UI: 8/10

### Next Steps

1. Implement high-priority recommendations
2. Add basic test coverage
3. Optimize PDF loading performance
4. Consider TypeScript migration for long-term maintainability

---

## Appendix A: File Structure Recommendation

```
oposicions/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── ErrorBoundary.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── NotFoundPage.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── MainLayout.jsx
│   │   ├── bloc/
│   │   │   ├── BlocPage.jsx
│   │   │   ├── BlocOverview.jsx
│   │   │   ├── TemaContent.jsx
│   │   │   ├── SectionTabs.jsx
│   │   │   └── BlocDiagram.jsx
│   │   ├── pdf/
│   │   │   ├── PdfViewer.jsx
│   │   │   ├── PdfToolbar.jsx
│   │   │   └── PdfThumbnails.jsx
│   │   └── notes/
│   │       └── NotesEditor.jsx
│   ├── hooks/
│   │   ├── useCachedContent.js
│   │   ├── usePersistedState.js
│   │   ├── useOnlineStatus.js
│   │   └── usePdfCache.js
│   ├── utils/
│   │   ├── pdfCache.js
│   │   ├── contentValidator.js
│   │   ├── fetchWithRetry.js
│   │   └── secureStorage.js
│   ├── constants/
│   │   ├── sections.js
│   │   └── routes.js
│   ├── stores/
│   │   └── useAppStore.js
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── global.css
│   │   └── utilities.css
│   ├── data.js
│   ├── App.jsx
│   └── main.jsx
├── public/
│   ├── content/
│   ├── materials/
│   ├── diagrams/
│   └── assets/
├── docs/
│   ├── adr/
│   ├── DEPLOYMENT.md
│   └── CONTRIBUTING.md
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
└── package.json
```

---

## Appendix B: Recommended Dependencies

**Add:**
```json
{
  "dependencies": {
    "zustand": "^4.4.0",  // State management
    "dompurify": "^3.0.0"  // XSS protection (if needed)
  },
  "devDependencies": {
    "typescript": "^5.2.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "vitest": "^1.0.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "@testing-library/user-event": "^14.0.0",
    "playwright": "^1.40.0",
    "prettier": "^3.0.0",
    "husky": "^8.0.0",
    "lint-staged": "^15.0.0"
  }
}
```

**Remove:**
- None (all current dependencies are being used)

---

**End of Review**
