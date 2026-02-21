const bloc1Tema1Punt6Ask = [

  // 🔴 TRAMPA (1–5)

  {
    id: 1,
    question: "Tots els drets fonamentals dels arts. 15–29 CE exigeixen reforma agreujada (art. 168 CE)?",
    category: "trampa",
    options: [
      { key: "A", text: "Sí, tots sense excepció.", correct: true },
      { key: "B", text: "No, cap la requereix.", correct: false },
      { key: "C", text: "Només els drets processals.", correct: false },
      { key: "D", text: "Només l’art. 15 CE.", correct: false }
    ],
    explanation:
      "Els drets de la Secció 1a (15–29 CE) exigeixen reforma agreujada segons art. 168 CE."
  },

  {
    id: 2,
    question: "L’article 14 CE té el mateix règim de reforma que els arts. 15–29 CE?",
    category: "trampa",
    options: [
      { key: "A", text: "Sí, també exigeix art. 168 CE.", correct: false },
      { key: "B", text: "No, es reforma pel procediment ordinari (art. 167 CE).", correct: true },
      { key: "C", text: "No és reformable.", correct: false },
      { key: "D", text: "Depèn del contingut.", correct: false }
    ],
    explanation:
      "L’art. 14 CE té recurs d’empara però no està subjecte a reforma agreujada."
  },

  {
    id: 3,
    question: "El dret a la tutela judicial efectiva implica:",
    category: "trampa",
    options: [
      { key: "A", text: "Dret a obtenir sentència favorable.", correct: false },
      { key: "B", text: "Dret a resolució motivada.", correct: true },
      { key: "C", text: "Dret automàtic a doble instància.", correct: false },
      { key: "D", text: "Immunitat davant tribunals.", correct: false }
    ],
    explanation:
      "L’art. 24 CE garanteix accés als tribunals i resolució motivada, no el resultat."
  },

  {
    id: 4,
    question: "La llibertat d’expressió (art. 20 CE) és absoluta?",
    category: "trampa",
    options: [
      { key: "A", text: "Sí, no té límits.", correct: false },
      { key: "B", text: "Només té límits en estat d’excepció.", correct: false },
      { key: "C", text: "No, pot limitar-se per altres drets com l’honor.", correct: true },
      { key: "D", text: "Només la limita el Govern.", correct: false }
    ],
    explanation:
      "Cap dret és absolut. Pot entrar en conflicte amb honor o intimitat."
  },

  {
    id: 5,
    question: "El dret de reunió (art. 21 CE) requereix:",
    category: "trampa",
    options: [
      { key: "A", text: "Autorització administrativa prèvia.", correct: false },
      { key: "B", text: "Comunicació prèvia en determinats casos.", correct: true },
      { key: "C", text: "Llicència judicial.", correct: false },
      { key: "D", text: "Cap formalitat.", correct: false }
    ],
    explanation:
      "El dret de reunió no requereix autorització, però sí comunicació en llocs públics."
  },

  // 📜 LEGISLACIÓ (6–10)

  {
    id: 6,
    question: "La reserva de Llei Orgànica per als drets fonamentals es troba a:",
    category: "legislacio",
    options: [
      { key: "A", text: "Art. 53 CE.", correct: false },
      { key: "B", text: "Art. 81 CE.", correct: true },
      { key: "C", text: "Art. 10 CE.", correct: false },
      { key: "D", text: "Art. 168 CE.", correct: false }
    ],
    explanation:
      "L’art. 81 CE estableix que el desenvolupament essencial exigeix Llei Orgànica."
  },

  {
    id: 7,
    question: "El recurs d’empara es regula a:",
    category: "legislacio",
    options: [
      { key: "A", text: "Art. 53.2 CE.", correct: true },
      { key: "B", text: "Art. 53.1 CE.", correct: false },
      { key: "C", text: "Art. 81 CE.", correct: false },
      { key: "D", text: "Art. 24 CE.", correct: false }
    ],
    explanation:
      "L’art. 53.2 CE regula el recurs d’empara davant el TC."
  },

  {
    id: 8,
    question: "La detenció preventiva no pot excedir de:",
    category: "legislacio",
    options: [
      { key: "A", text: "24 hores.", correct: false },
      { key: "B", text: "48 hores.", correct: false },
      { key: "C", text: "72 hores.", correct: true },
      { key: "D", text: "96 hores.", correct: false }
    ],
    explanation:
      "L’art. 17 CE fixa un màxim de 72 hores."
  },

  {
    id: 9,
    question: "El principi de legalitat penal es troba a:",
    category: "legislacio",
    options: [
      { key: "A", text: "Art. 24 CE.", correct: false },
      { key: "B", text: "Art. 25 CE.", correct: true },
      { key: "C", text: "Art. 20 CE.", correct: false },
      { key: "D", text: "Art. 53 CE.", correct: false }
    ],
    explanation:
      "L’art. 25 CE consagra el principi nullum crimen, nulla poena sine lege."
  },

  {
    id: 10,
    question: "El contingut essencial dels drets es protegeix a:",
    category: "legislacio",
    options: [
      { key: "A", text: "Art. 53.1 CE.", correct: true },
      { key: "B", text: "Art. 10 CE.", correct: false },
      { key: "C", text: "Art. 81 CE.", correct: false },
      { key: "D", text: "Art. 168 CE.", correct: false }
    ],
    explanation:
      "El legislador no pot vulnerar el contingut essencial (art. 53.1 CE)."
  },

  // 🟢 COMPRENSIÓ (11–20)

  {
    id: 11,
    question: "La dimensió subjectiva dels drets implica:",
    category: "general",
    options: [
      { key: "A", text: "Principis polítics abstractes.", correct: false },
      { key: "B", text: "Facultats exigibles davant poders públics.", correct: true },
      { key: "C", text: "Normes reglamentàries.", correct: false },
      { key: "D", text: "Mandats programàtics.", correct: false }
    ],
    explanation:
      "Són drets que poden reclamar-se davant tribunals."
  },

  {
    id: 12,
    question: "La dimensió objectiva implica:",
    category: "general",
    options: [
      { key: "A", text: "Estructuren tot l’ordenament jurídic.", correct: true },
      { key: "B", text: "Només protegeixen particulars.", correct: false },
      { key: "C", text: "No tenen força normativa.", correct: false },
      { key: "D", text: "Són principis rectors.", correct: false }
    ],
    explanation:
      "Informen tot el sistema constitucional."
  },

  {
    id: 13,
    question: "El principi favor libertatis implica:",
    category: "general",
    options: [
      { key: "A", text: "Interpretació restrictiva.", correct: false },
      { key: "B", text: "Interpretació més favorable al dret.", correct: true },
      { key: "C", text: "Eliminació de límits.", correct: false },
      { key: "D", text: "Submissió al Govern.", correct: false }
    ],
    explanation:
      "El TC interpreta sempre en el sentit més favorable al dret."
  },

  {
    id: 14,
    question: "La ponderació s’utilitza per:",
    category: "general",
    options: [
      { key: "A", text: "Eliminar drets conflictius.", correct: false },
      { key: "B", text: "Resoldre conflictes entre drets.", correct: true },
      { key: "C", text: "Reformar la Constitució.", correct: false },
      { key: "D", text: "Suspensió general.", correct: false }
    ],
    explanation:
      "S’aplica quan dos drets entren en conflicte."
  },

  {
    id: 15,
    question: "La llibertat d’informació exigeix:",
    category: "general",
    options: [
      { key: "A", text: "Majoritària acceptació social.", correct: false },
      { key: "B", text: "Veracitat.", correct: true },
      { key: "C", text: "Autorització judicial.", correct: false },
      { key: "D", text: "Absència de límits.", correct: false }
    ],
    explanation:
      "La informació ha de ser veraç."
  },

  {
    id: 16,
    question: "El dret a l’habeas corpus es vincula a:",
    category: "general",
    options: [
      { key: "A", text: "Art. 17 CE.", correct: true },
      { key: "B", text: "Art. 24 CE.", correct: false },
      { key: "C", text: "Art. 20 CE.", correct: false },
      { key: "D", text: "Art. 53 CE.", correct: false }
    ],
    explanation:
      "Forma part de la garantia de la llibertat personal."
  },

  {
    id: 17,
    question: "Els drets fonamentals vinculen:",
    category: "general",
    options: [
      { key: "A", text: "Només el Govern.", correct: false },
      { key: "B", text: "Tots els poders públics.", correct: true },
      { key: "C", text: "Només jutges.", correct: false },
      { key: "D", text: "Només el legislador.", correct: false }
    ],
    explanation:
      "Tenen eficàcia directa davant tots els poders públics."
  },

  {
    id: 18,
    question: "El principi de proporcionalitat exigeix:",
    category: "general",
    options: [
      { key: "A", text: "Adequació, necessitat i proporcionalitat estricta.", correct: true },
      { key: "B", text: "Autorització administrativa.", correct: false },
      { key: "C", text: "Majoría parlamentària.", correct: false },
      { key: "D", text: "Suspensió automàtica.", correct: false }
    ],
    explanation:
      "La restricció ha de ser adequada, necessària i equilibrada."
  },

  {
    id: 19,
    question: "La llibertat sindical es regula a:",
    category: "general",
    options: [
      { key: "A", text: "Art. 27 CE.", correct: false },
      { key: "B", text: "Art. 28 CE.", correct: true },
      { key: "C", text: "Art. 23 CE.", correct: false },
      { key: "D", text: "Art. 25 CE.", correct: false }
    ],
    explanation:
      "L’art. 28 CE regula llibertat sindical i dret de vaga."
  },

  {
    id: 20,
    question: "Els drets fonamentals es fonamenten en:",
    category: "general",
    options: [
      { key: "A", text: "La sobirania nacional.", correct: false },
      { key: "B", text: "La dignitat humana (art. 10.1 CE).", correct: true },
      { key: "C", text: "Els principis rectors.", correct: false },
      { key: "D", text: "La jerarquia normativa.", correct: false }
    ],
    explanation:
      "La dignitat humana és el fonament del sistema de drets."
  }

];

export default bloc1Tema1Punt6Ask;