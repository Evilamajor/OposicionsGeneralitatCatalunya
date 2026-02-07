// Temari oficial Administratiu/va C1 – estructurat per BLOCS
// Cada bloc conté els TEMES oficials (alineats amb el DOGC)

export const blocks = [
  {
    id: 'bloc-1',
    title: 'Bloc I · Marc institucional',
    topics: [
      { id: 'tema-1', label: 'Tema 1 · La Constitució espanyola de 1978', filename: 'tema01.html' },
      { id: 'tema-2', label: 'Tema 2 · L\'Estatut d\'autonomia de Catalunya', filename: 'tema02.html' },
      { id: 'tema-3', label: 'Tema 3 · Institucions de la Generalitat i de la Unió Europea', filename: 'tema03.html' },
    ],
  },
  {
    id: 'bloc-2',
    title: 'Bloc II · Dret administratiu general',
    topics: [
      { id: 'tema-04', label: 'Tema 4 · Fonts del dret administratiu', filename: 'tema04.html' },
      { id: 'tema-05', label: 'Tema 5 · L\'acte administratiu', filename: 'tema05.html' },
      { id: 'tema-06', label: 'Tema 6 · Nul·litat i anul·labilitat dels actes administratius', filename: 'tema06.html' },
      { id: 'tema-07', label: 'Tema 7 · El procediment administratiu comú', filename: 'tema07.html' },
      { id: 'tema-08', label: 'Tema 8 · Revisió dels actes en via administrativa', filename: 'tema08.html' },
    ],
  },
  {
    id: 'bloc-3',
    title: 'Bloc III · Règim jurídic del sector públic',
    topics: [
      { id: 'tema-09', label: 'Tema 9 · Òrgans administratius i competències', filename: 'tema09.html' },
      { id: 'tema-10', label: 'Tema 10 · Funcionament del sector públic i relacions interadministratives', filename: 'tema10.html' },
      { id: 'tema-11', label: 'Tema 11 · Responsabilitat patrimonial de l\'Administració', filename: 'tema11.html' },
      { id: 'tema-12', label: 'Tema 12 · Administració electrònica', filename: 'tema12.html' },
    ],
  },
  {
    id: 'bloc-4',
    title: 'Bloc IV · Contractació pública',
    topics: [
      { id: 'tema-13', label: 'Tema 13 · Contractes del sector públic: principis i tipologia', filename: 'tema13.html' },
      { id: 'tema-14', label: 'Tema 14 · Procediments de contractació pública', filename: 'tema14.html' },
      { id: 'tema-15', label: 'Tema 15 · Execució, modificació i extinció dels contractes', filename: 'tema15.html' },
    ],
  },
  {
    id: 'bloc-5',
    title: 'Bloc V · Gestió econòmica i pressupostària',
    topics: [
      { id: 'tema-16', label: 'Tema 16 · El pressupost de la Generalitat de Catalunya', filename: 'tema16.html' },
      { id: 'tema-17', label: 'Tema 17 · Execució de la despesa pública', filename: 'tema17.html' },
      { id: 'tema-18', label: 'Tema 18 · Control financer i responsabilitats', filename: 'tema18.html' },
    ],
  },
  {
    id: 'bloc-6',
    title: 'Bloc VI · Funció pública',
    topics: [
      { id: 'tema-19', label: 'Tema 19 · L\'empleat públic', filename: 'tema19.html' },
      { id: 'tema-20', label: 'Tema 20 · Drets, deures i situacions administratives', filename: 'tema20.html' },
      { id: 'tema-21', label: 'Tema 21 · Règim disciplinari del personal al servei de l\'Administració', filename: 'tema21.html' },
    ],
  },
  {
    id: 'bloc-7',
    title: 'Bloc VII · Transparència i administració digital',
    topics: [
      { id: 'tema-22', label: 'Tema 22 · Transparència i bon govern', filename: 'tema22.html' },
      { id: 'tema-23', label: 'Tema 23 · Protecció de dades de caràcter personal', filename: 'tema23.html' },
      { id: 'tema-24', label: 'Tema 24 · Drets digitals i administració digital', filename: 'tema24.html' },
      { id: 'tema-25', label: 'Tema 25 · Atenció a la ciutadania i qualitat dels serveis públics', filename: 'tema25.html' },
    ],
  },
];

// Annexos – continguts complementaris (separats dels blocs oficials)
export const annexos = [
  {
    id: 'annex-1',
    label: 'Annex I · Català',
    topics: [
      { id: 'catala-general', label: 'Català general' },
      { id: 'catala-juridic', label: 'Català jurídic' },
    ],
  },
  {
    id: 'annex-2',
    label: 'Annex II · Cultura general',
    topics: [
      { id: 'historia', label: 'Història catalana' },
      { id: 'art', label: 'Art català' },
      { id: 'literatura', label: 'Literatura catalana' },
      { id: 'filosofia', label: 'Filosofia i pensament' },
    ],
  },
];
