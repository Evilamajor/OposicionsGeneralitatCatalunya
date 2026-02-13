# Architecture & Improvement Roadmap

## Current Architecture (Simplified)

```
┌─────────────────────────────────────────────────────────────┐
│                         Browser                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                    React App                           │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │ │
│  │  │   Sidebar    │  │   BlocPage   │  │  PDF Viewer  │ │ │
│  │  │              │  │              │  │              │ │ │
│  │  │ • Navigation │  │ • Routing    │  │ • react-pdf  │ │ │
│  │  │ • Expand/    │  │ • Content    │  │ • PDF.js     │ │ │
│  │  │   Collapse   │  │   Loading    │  │ • 1.5MB!     │ │ │
│  │  │              │  │ • Section    │  │ • No cache   │ │ │
│  │  │              │  │   Tabs       │  │              │ │ │
│  │  └──────────────┘  └──────────────┘  └──────────────┘ │ │
│  │                                                        │ │
│  │  ┌─────────────────────────────────────────────────┐  │ │
│  │  │            data.js (Central Data)               │  │ │
│  │  │  • blocks[]                                     │  │ │
│  │  │  • annexos[]                                    │  │ │
│  │  └─────────────────────────────────────────────────┘  │ │
│  │                                                        │ │
│  │  ┌─────────────────────────────────────────────────┐  │ │
│  │  │         localStorage (Notes Storage)            │  │ │
│  │  │  • notes-bloc-1                                 │  │ │
│  │  │  • notes-bloc-1-tema-1                          │  │ │
│  │  └─────────────────────────────────────────────────┘  │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                          │
                          │ HTTP Fetch
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                    Static Assets                             │
│  /public/                                                    │
│    ├── content/                                             │
│    │   ├── bloc-1/                                          │
│    │   │   ├── presentaciobloc1.pdf                         │
│    │   │   └── tema-1/                                      │
│    │   │       └── legislacio.html                          │
│    ├── materials/ (PDFs)                                    │
│    ├── diagrams/ (.drawio files)                            │
│    └── assets/ (images)                                     │
└─────────────────────────────────────────────────────────────┘
```

## Issues Identified

```
┌────────────────────────────────────────────────────────┐
│ 🔴 CRITICAL ISSUES                                     │
├────────────────────────────────────────────────────────┤
│ 1. No PDF Caching       → Every navigation refetches   │
│ 2. Dead Code            → Unused components exist      │
│ 3. Large Bundle         → 2MB+ for PDF libraries       │
│ 4. No Error Boundary    → App crashes on errors        │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ 🟡 MODERATE ISSUES                                     │
├────────────────────────────────────────────────────────┤
│ 1. Large Components     → BlocPage.jsx is 225 lines    │
│ 2. No State Management  → Props drilling, no cache     │
│ 3. No Tests            → Zero test coverage            │
│ 4. Scattered Data      → Maps in multiple files        │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ 🟢 MINOR ISSUES                                        │
├────────────────────────────────────────────────────────┤
│ 1. No TypeScript       → Missing type safety           │
│ 2. Limited Mobile      → Basic responsive design       │
│ 3. No Dark Mode        → Eye strain for long study     │
│ 4. Missing Features    → No search, bookmarks, etc.    │
└────────────────────────────────────────────────────────┘
```

## Proposed Architecture (After Improvements)

```
┌─────────────────────────────────────────────────────────────┐
│                         Browser                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                React App + Error Boundary              │ │
│  │  ┌──────────────────────────────────────────────────┐  │ │
│  │  │           Zustand Store (Global State)          │  │ │
│  │  │  • User preferences (theme, zoom)                │  │ │
│  │  │  • Content cache                                 │  │ │
│  │  │  • PDF cache                                     │  │ │
│  │  └──────────────────────────────────────────────────┘  │ │
│  │                                                        │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │ │
│  │  │   Sidebar    │  │  BlocPage    │  │  PDF Viewer  │ │ │
│  │  │  (Memoized)  │  │ (Refactored) │  │   (Cached)   │ │ │
│  │  │              │  │              │  │              │ │ │
│  │  │              │  │ • Smaller    │  │ • PDF cache  │ │ │
│  │  │              │  │   components │  │ • Lazy load  │ │ │
│  │  │              │  │ • Better     │  │ • Prefetch   │ │ │
│  │  │              │  │   structure  │  │              │ │ │
│  │  └──────────────┘  └──────────────┘  └──────────────┘ │ │
│  │                           │                            │ │
│  │                           ▼                            │ │
│  │                   ┌──────────────┐                     │ │
│  │                   │  Custom Hooks │                    │ │
│  │                   │ • usePdfCache │                    │ │
│  │                   │ • useContent  │                    │ │
│  │                   └──────────────┘                     │ │
│  │                                                        │ │
│  │  ┌─────────────────────────────────────────────────┐  │ │
│  │  │        data.js (Enhanced Central Data)          │  │ │
│  │  │  • blocks[] with presentations & diagrams       │  │ │
│  │  │  • annexos[]                                    │  │ │
│  │  │  • SECTIONS constant                            │  │ │
│  │  └─────────────────────────────────────────────────┘  │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## Implementation Roadmap

### Phase 1: Critical Fixes (Week 1)
```
Day 1-2: Remove Dead Code & Fix Data Structure
├── Delete Bloc4PresentationViewer.jsx
├── Delete Bloc5PresentationViewer.jsx
├── Move PRESENTATION_MAP to data.js
├── Move DIAGRAM_MAP to data.js
└── Fix bloc-3 typo

Day 3-4: Implement PDF Caching
├── Create utils/pdfCache.js
├── Add in-memory cache
├── Update BlocPresentationViewer.jsx
└── Test caching behavior

Day 5: Error Handling
├── Create ErrorBoundary component
├── Add content validation
└── Improve error messages
```

### Phase 2: Performance (Week 2)
```
Day 1-2: Code Splitting
├── Lazy load BlocPage
├── Lazy load PDF viewer
├── Add loading fallbacks
└── Measure bundle size reduction

Day 3-4: State Management
├── Install Zustand
├── Create useAppStore
├── Migrate localStorage to store
└── Add content caching

Day 5: Component Refactoring
├── Split BlocPage into smaller components
├── Create BlocOverview
├── Create TemaContent
└── Add proper memoization
```

### Phase 3: Testing & Quality (Week 3)
```
Day 1-2: Testing Setup
├── Install Vitest & Testing Library
├── Configure test environment
├── Write component tests
└── Add integration tests

Day 3-4: Mobile Optimization
├── Add responsive breakpoints
├── Implement touch gestures
├── Optimize PDF for mobile
└── Test on devices

Day 5: Documentation
├── Add PropTypes or TypeScript
├── Write component docs
├── Create CONTRIBUTING.md
└── Document deployment
```

### Phase 4: Polish (Week 4+)
```
• Dark mode implementation
• Advanced PDF features (search, bookmarks)
• Analytics integration
• Performance monitoring
• Accessibility audit
• TypeScript migration
```

## Key Metrics to Track

### Performance Metrics
```
┌──────────────────────────────────────────────────┐
│ Metric              │ Current  │ Target          │
├──────────────────────────────────────────────────┤
│ Initial Load Time   │ ~4s      │ < 3s            │
│ PDF Render Time     │ ~2s      │ < 1s            │
│ Route Navigation    │ ~1s      │ < 500ms         │
│ Bundle Size         │ ~2.5MB   │ < 1.5MB         │
│ Lighthouse Score    │ 70       │ > 90            │
└──────────────────────────────────────────────────┘
```

### Quality Metrics
```
┌──────────────────────────────────────────────────┐
│ Metric              │ Current  │ Target          │
├──────────────────────────────────────────────────┤
│ Test Coverage       │ 0%       │ > 70%           │
│ TypeScript          │ 0%       │ 100%            │
│ ESLint Errors       │ 0        │ 0 (maintain)    │
│ Dead Code           │ 2 files  │ 0               │
│ Documentation       │ Basic    │ Comprehensive   │
└──────────────────────────────────────────────────┘
```

## Component Dependency Graph

### Current (Simplified)
```
App
├── Sidebar
│   └── data.js (blocks, annexos)
└── Routes
    ├── WelcomePanel
    ├── BlocPage
    │   ├── data.js
    │   ├── BlocPresentationViewer
    │   │   └── react-pdf (1.5MB)
    │   ├── BlocDiagram
    │   │   └── diagrams.net viewer
    │   └── NotesEditor
    │       └── localStorage
    └── AnnexPage
        └── data.js

⚠️ Issues:
• BlocPage has too many responsibilities
• Data scattered across components
• No shared state
```

### Proposed (Improved)
```
App (+ ErrorBoundary)
├── AppProvider (Zustand Store)
├── Sidebar (memoized)
│   └── data.js
└── Routes
    ├── WelcomePanel
    ├── BlocPage (orchestrator)
    │   ├── BlocOverview
    │   │   ├── PdfViewer (lazy, cached)
    │   │   ├── BlocDiagram
    │   │   └── NotesEditor
    │   └── TemaContent
    │       ├── SectionTabs
    │       ├── ContentViewer
    │       └── NotesEditor
    └── AnnexPage

✅ Benefits:
• Smaller, focused components
• Better reusability
• Easier testing
• Clear data flow
```

## File Structure: Before & After

### Before
```
src/
├── components/
│   ├── BlocPage.jsx (225 lines) ⚠️
│   ├── BlocPresentationViewer.jsx
│   ├── Bloc4PresentationViewer.jsx ❌
│   ├── Bloc5PresentationViewer.jsx ❌
│   ├── Sidebar.jsx
│   ├── NotesEditor.jsx
│   ├── BlocDiagram.jsx
│   ├── WelcomePanel.jsx
│   └── AnnexPage.jsx
├── App.jsx
├── main.jsx
└── data.js
```

### After (Recommended)
```
src/
├── components/
│   ├── common/
│   │   ├── ErrorBoundary.jsx
│   │   └── LoadingSpinner.jsx
│   ├── layout/
│   │   ├── Sidebar.jsx
│   │   └── Header.jsx
│   ├── bloc/
│   │   ├── BlocPage.jsx (orchestrator)
│   │   ├── BlocOverview.jsx
│   │   ├── TemaContent.jsx
│   │   ├── SectionTabs.jsx
│   │   └── BlocDiagram.jsx
│   ├── pdf/
│   │   ├── PdfViewer.jsx
│   │   └── PdfToolbar.jsx
│   └── notes/
│       └── NotesEditor.jsx
├── hooks/
│   ├── usePdfCache.js
│   ├── useCachedContent.js
│   └── usePersistedState.js
├── utils/
│   ├── pdfCache.js
│   ├── contentValidator.js
│   └── fetchWithRetry.js
├── stores/
│   └── useAppStore.js
├── constants/
│   ├── sections.js
│   └── routes.js
├── data.js
├── App.jsx
└── main.jsx
```

## Quick Win Checklist

### Can Be Done in < 1 Hour Each ⚡
- [ ] Delete Bloc4PresentationViewer.jsx
- [ ] Delete Bloc5PresentationViewer.jsx
- [ ] Move PRESENTATION_MAP to data.js
- [ ] Move SECTIONS to constants file
- [ ] Add ErrorBoundary wrapper
- [ ] Fix bloc-3 filename typo
- [ ] Add .gitignore for node_modules (if missing)
- [ ] Document minimum browser requirements

### Can Be Done in 1-3 Hours Each 🕐
- [ ] Implement PDF caching
- [ ] Add content validation
- [ ] Create custom hooks directory
- [ ] Add loading states to all async operations
- [ ] Implement retry logic for failed fetches
- [ ] Add 404 page
- [ ] Memoize Sidebar component
- [ ] Add prefetching for next content

### Requires More Planning (> 3 Hours) 📅
- [ ] Code splitting implementation
- [ ] State management with Zustand
- [ ] Component refactoring
- [ ] Testing setup and implementation
- [ ] Mobile optimization
- [ ] TypeScript migration
- [ ] Dark mode
- [ ] CI/CD pipeline

---

**Document Version:** 1.0  
**Last Updated:** February 2026  
**Related Documents:**
- [PROJECT_REVIEW.md](./PROJECT_REVIEW.md) - Full detailed review
- [REVIEW_SUMMARY.md](./REVIEW_SUMMARY.md) - Executive summary
