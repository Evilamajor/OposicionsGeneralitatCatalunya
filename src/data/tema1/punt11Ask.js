const bloc1Tema1Punt11Ask = [

  // 🔴 PREGUNTES TRAMPA (1–5)

  {
    id: 1,
    question: "La supletorietat del dret estatal és:",
    category: "trampa",
    options: [
      { key: "A", text: "Un títol competencial per a l’Estat.", correct: false },
      { key: "B", text: "Una habilitació per legislar en qualsevol matèria.", correct: false },
      { key: "C", text: "Una regla d’aplicació pels jutges per omplir llacunes.", correct: true },
      { key: "D", text: "Una competència exclusiva estatal.", correct: false }
    ],
    explanation:
      "La supletorietat (art. 149.3 CE) no és títol competencial, sinó regla d’aplicació judicial."
  },

  {
    id: 2,
    question: "En una competència compartida, l’Estat pot regular tota la matèria?",
    category: "trampa",
    options: [
      { key: "A", text: "Sí, si és competència bàsica.", correct: false },
      { key: "B", text: "No, només pot dictar les bases.", correct: true },
      { key: "C", text: "Sí, si ho decideix el Govern.", correct: false },
      { key: "D", text: "Sí, per clàusula residual.", correct: false }
    ],
    explanation:
      "En competències compartides, l’Estat dicta les bases i la CA desenvolupa."
  },

  {
    id: 3,
    question: "Si una CA no assumeix una competència al seu Estatut:",
    category: "trampa",
    options: [
      { key: "A", text: "La conserva la CA per defecte.", correct: false },
      { key: "B", text: "Queda sense titular.", correct: false },
      { key: "C", text: "Correspon a l’Estat.", correct: true },
      { key: "D", text: "Cal reforma constitucional.", correct: false }
    ],
    explanation:
      "Segons la clàusula residual (art. 149.3 CE), si la CA no assumeix, correspon a l’Estat."
  },

  {
    id: 4,
    question: "La prevalença del dret estatal implica:",
    category: "trampa",
    options: [
      { key: "A", text: "Superioritat jeràrquica general.", correct: false },
      { key: "B", text: "Aplicació preferent en cas de conflicte vàlid.", correct: true },
      { key: "C", text: "Anul·lació automàtica de tota norma autonòmica.", correct: false },
      { key: "D", text: "Supressió de l’autonomia.", correct: false }
    ],
    explanation:
      "La prevalença opera en cas de conflicte competencial vàlid."
  },

  {
    id: 5,
    question: "Les bases poden ser definides per qualsevol tribunal?",
    category: "trampa",
    options: [
      { key: "A", text: "Sí, pels jutjats ordinaris.", correct: false },
      { key: "B", text: "Sí, pel Tribunal Suprem.", correct: false },
      { key: "C", text: "No, només el Tribunal Constitucional pot definir què és bàsic.", correct: true },
      { key: "D", text: "Sí, per les CA.", correct: false }
    ],
    explanation:
      "Només el TC determina què és legislació bàsica."
  },

  // 📜 PREGUNTES DE LEGISLACIÓ (6–10)

  {
    id: 6,
    question: "Les competències assumibles per les CA es regulen a:",
    category: "legislacio",
    options: [
      { key: "A", text: "Art. 149 CE.", correct: false },
      { key: "B", text: "Art. 148 CE.", correct: true },
      { key: "C", text: "Art. 150 CE.", correct: false },
      { key: "D", text: "Art. 161 CE.", correct: false }
    ],
    explanation:
      "L’art. 148 CE enumera competències assumibles per les CA."
  },

  {
    id: 7,
    question: "Les competències exclusives de l’Estat es troben a:",
    category: "legislacio",
    options: [
      { key: "A", text: "Art. 148 CE.", correct: false },
      { key: "B", text: "Art. 149.1 CE.", correct: true },
      { key: "C", text: "Art. 149.3 CE.", correct: false },
      { key: "D", text: "Art. 137 CE.", correct: false }
    ],
    explanation:
      "L’art. 149.1 CE reserva 32 matèries a l’Estat."
  },

  {
    id: 8,
    question: "La clàusula residual es troba a:",
    category: "legislacio",
    options: [
      { key: "A", text: "Art. 148 CE.", correct: false },
      { key: "B", text: "Art. 149.1 CE.", correct: false },
      { key: "C", text: "Art. 149.3 CE.", correct: true },
      { key: "D", text: "Art. 150 CE.", correct: false }
    ],
    explanation:
      "L’art. 149.3 CE conté la clàusula residual."
  },

  {
    id: 9,
    question: "La suspensió automàtica de normes autonòmiques impugnades pel Govern es regula a:",
    category: "legislacio",
    options: [
      { key: "A", text: "Art. 149 CE.", correct: false },
      { key: "B", text: "Art. 161.2 CE.", correct: true },
      { key: "C", text: "Art. 150 CE.", correct: false },
      { key: "D", text: "Art. 137 CE.", correct: false }
    ],
    explanation:
      "L’art. 161.2 CE permet la suspensió automàtica."
  },

  {
    id: 10,
    question: "El bloc de la constitucionalitat inclou:",
    category: "legislacio",
    options: [
      { key: "A", text: "Només la Constitució.", correct: false },
      { key: "B", text: "Constitució, Estatuts i normes com la LOFCA.", correct: true },
      { key: "C", text: "Només els Estatuts.", correct: false },
      { key: "D", text: "Només les lleis estatals.", correct: false }
    ],
    explanation:
      "El bloc inclou CE, Estatuts i altres normes delimitadores competencials."
  },

  // 🟢 PREGUNTES DE COMPRENSIÓ (11–20)

  {
    id: 11,
    question: "El sistema competencial espanyol es basa en:",
    category: "general",
    options: [
      { key: "A", text: "Federalisme pur.", correct: false },
      { key: "B", text: "Principi dispositiu.", correct: true },
      { key: "C", text: "Centralització absoluta.", correct: false },
      { key: "D", text: "Confederació.", correct: false }
    ],
    explanation:
      "Les CA assumeixen competències dins el marc constitucional."
  },

  {
    id: 12,
    question: "Les competències exclusives estatals impliquen:",
    category: "general",
    options: [
      { key: "A", text: "Legislació i execució per l’Estat.", correct: true },
      { key: "B", text: "Només legislació.", correct: false },
      { key: "C", text: "Només execució.", correct: false },
      { key: "D", text: "Desenvolupament autonòmic.", correct: false }
    ],
    explanation:
      "En competències exclusives, l’Estat té legislació i execució."
  },

  {
    id: 13,
    question: "Les competències compartides impliquen:",
    category: "general",
    options: [
      { key: "A", text: "Bases estatals i desenvolupament autonòmic.", correct: true },
      { key: "B", text: "Legislació exclusiva autonòmica.", correct: false },
      { key: "C", text: "Execució exclusiva estatal.", correct: false },
      { key: "D", text: "Supletorietat automàtica.", correct: false }
    ],
    explanation:
      "L’Estat dicta bases; la CA desenvolupa i executa."
  },

  {
    id: 14,
    question: "La LOFCA forma part de:",
    category: "general",
    options: [
      { key: "A", text: "El bloc de la constitucionalitat.", correct: true },
      { key: "B", text: "El reglament estatal.", correct: false },
      { key: "C", text: "La legislació autonòmica.", correct: false },
      { key: "D", text: "La Constitució material.", correct: false }
    ],
    explanation:
      "És norma delimitadora competencial."
  },

  {
    id: 15,
    question: "El TC resol:",
    category: "general",
    options: [
      { key: "A", text: "Conflictes competencials.", correct: true },
      { key: "B", text: "Recursos contenciosos administratius.", correct: false },
      { key: "C", text: "Procediments penals.", correct: false },
      { key: "D", text: "Eleccions municipals.", correct: false }
    ],
    explanation:
      "El TC garanteix l’equilibri competencial."
  },

  {
    id: 16,
    question: "Les bases estatals garanteixen:",
    category: "general",
    options: [
      { key: "A", text: "Uniformitat absoluta.", correct: false },
      { key: "B", text: "Uniformitat essencial mínima.", correct: true },
      { key: "C", text: "Eliminació de l’autonomia.", correct: false },
      { key: "D", text: "Descentralització total.", correct: false }
    ],
    explanation:
      "Les bases fixen un mínim comú normatiu."
  },

  {
    id: 17,
    question: "La prevalença opera:",
    category: "general",
    options: [
      { key: "A", text: "Sempre a favor de l’Estat.", correct: false },
      { key: "B", text: "En cas de conflicte competencial vàlid.", correct: true },
      { key: "C", text: "Quan la CA legisla primer.", correct: false },
      { key: "D", text: "Només en competències exclusives autonòmiques.", correct: false }
    ],
    explanation:
      "Opera en conflictes vàlids entre normes."
  },

  {
    id: 18,
    question: "La supletorietat:",
    category: "general",
    options: [
      { key: "A", text: "És regla d’aplicació judicial.", correct: true },
      { key: "B", text: "És competència exclusiva.", correct: false },
      { key: "C", text: "Permet invasió competencial.", correct: false },
      { key: "D", text: "Anul·la Estatuts.", correct: false }
    ],
    explanation:
      "No habilita a legislar, només a aplicar."
  },

  {
    id: 19,
    question: "La distribució competencial es fonamenta en:",
    category: "general",
    options: [
      { key: "A", text: "El principi dispositiu.", correct: true },
      { key: "B", text: "El principi jeràrquic.", correct: false },
      { key: "C", text: "El principi de centralització.", correct: false },
      { key: "D", text: "La sobirania autonòmica.", correct: false }
    ],
    explanation:
      "Les CA assumeixen competències dins el marc constitucional."
  },

  {
    id: 20,
    question: "El bloc de la constitucionalitat serveix per:",
    category: "general",
    options: [
      { key: "A", text: "Delimitar competències.", correct: true },
      { key: "B", text: "Reformar la Constitució.", correct: false },
      { key: "C", text: "Derogar Estatuts.", correct: false },
      { key: "D", text: "Substituir el TC.", correct: false }
    ],
    explanation:
      "És l’instrument interpretatiu del TC en matèria competencial."
  }

];

export default bloc1Tema1Punt11Ask;