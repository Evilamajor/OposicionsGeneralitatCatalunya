const bloc1Tema1Punt5Ask = [

  // 🔴 TRAMPA (1–5)

  {
    id: 1,
    question: "Tots els drets del Títol I tenen el mateix nivell de garantia?",
    category: "trampa",
    options: [
      { key: "A", text: "Sí, tots són drets fonamentals.", correct: false },
      { key: "B", text: "Sí, perquè estan a la Constitució.", correct: false },
      { key: "C", text: "No, depèn de la seva ubicació i garanties.", correct: true },
      { key: "D", text: "Només els principis rectors tenen garanties reforçades.", correct: false }
    ],
    explanation:
      "Existeix una jerarquia de garanties segons la ubicació dins el Títol I."
  },

  {
    id: 2,
    question: "Els principis rectors del Capítol III són directament exigibles davant els tribunals?",
    category: "trampa",
    options: [
      { key: "A", text: "Sí, mitjançant recurs d’empara.", correct: false },
      { key: "B", text: "Sí, amb procediment preferent.", correct: false },
      { key: "C", text: "No, només segons la llei que els desenvolupi.", correct: true },
      { key: "D", text: "Sí, si afecten drets socials.", correct: false }
    ],
    explanation:
      "Segons l’art. 53.3 CE només poden al·legar-se conforme a la llei que els desenvolupi."
  },

  {
    id: 3,
    question: "La llibertat d’empresa (art. 38 CE) té el mateix nivell de garantia que la llibertat d’expressió (art. 20 CE)?",
    category: "trampa",
    options: [
      { key: "A", text: "Sí, totes dues tenen recurs d’empara.", correct: false },
      { key: "B", text: "No, només la llibertat d’expressió té recurs d’empara.", correct: true },
      { key: "C", text: "Sí, perquè ambdues són drets fonamentals.", correct: false },
      { key: "D", text: "No, cap de les dues en té.", correct: false }
    ],
    explanation:
      "La llibertat d’expressió és Secció 1a; la llibertat d’empresa és Secció 2a."
  },

  {
    id: 4,
    question: "L’estat d’alarma permet la suspensió de drets fonamentals?",
    category: "trampa",
    options: [
      { key: "A", text: "Sí, igual que l’estat d’excepció.", correct: false },
      { key: "B", text: "Sí, però només parcialment.", correct: false },
      { key: "C", text: "No, només permet limitacions.", correct: true },
      { key: "D", text: "Sí, si ho aprova el Govern.", correct: false }
    ],
    explanation:
      "L’estat d’alarma només permet limitació, no suspensió (art. 55 CE)."
  },

  {
    id: 5,
    question: "L’article 10 CE reconeix:",
    category: "trampa",
    options: [
      { key: "A", text: "Un dret fonamental específic.", correct: false },
      { key: "B", text: "El fonament dels drets.", correct: true },
      { key: "C", text: "Un principi rector.", correct: false },
      { key: "D", text: "Un dret polític.", correct: false }
    ],
    explanation:
      "L’art. 10 CE és el pòrtic del sistema, no reconeix un dret concret."
  },

  // 📜 LEGISLACIÓ (6–10)

  {
    id: 6,
    question: "Segons l’art. 10.2 CE, els drets fonamentals s’interpretaran conforme a:",
    category: "legislacio",
    options: [
      { key: "A", text: "La jurisprudència del Tribunal Suprem.", correct: false },
      { key: "B", text: "La Declaració Universal i tractats ratificats.", correct: true },
      { key: "C", text: "Les lleis orgàniques.", correct: false },
      { key: "D", text: "Els principis rectors.", correct: false }
    ],
    explanation:
      "L’art. 10.2 CE obliga a interpretar conforme als tractats internacionals."
  },

  {
    id: 7,
    question: "El recurs d’empara es regula a:",
    category: "legislacio",
    options: [
      { key: "A", text: "Art. 53.2 CE.", correct: true },
      { key: "B", text: "Art. 54 CE.", correct: false },
      { key: "C", text: "Art. 55 CE.", correct: false },
      { key: "D", text: "Art. 81 CE.", correct: false }
    ],
    explanation:
      "L’art. 53.2 CE estableix el recurs d’empara constitucional."
  },

  {
    id: 8,
    question: "Els drets de la Secció 1a (arts. 15–29) requereixen:",
    category: "legislacio",
    options: [
      { key: "A", text: "Llei ordinària.", correct: false },
      { key: "B", text: "Llei Orgànica.", correct: true },
      { key: "C", text: "Decret llei.", correct: false },
      { key: "D", text: "Reglament.", correct: false }
    ],
    explanation:
      "Segons art. 81 CE, el seu desenvolupament requereix Llei Orgànica."
  },

  {
    id: 9,
    question: "El Defensor del Poble es regula a:",
    category: "legislacio",
    options: [
      { key: "A", text: "Art. 53 CE.", correct: false },
      { key: "B", text: "Art. 54 CE.", correct: true },
      { key: "C", text: "Art. 55 CE.", correct: false },
      { key: "D", text: "Art. 14 CE.", correct: false }
    ],
    explanation:
      "L’art. 54 CE crea el Defensor del Poble."
  },

  {
    id: 10,
    question: "La suspensió individual per terrorisme es regula a:",
    category: "legislacio",
    options: [
      { key: "A", text: "Art. 53 CE.", correct: false },
      { key: "B", text: "Art. 55.2 CE.", correct: true },
      { key: "C", text: "Art. 55.1 CE.", correct: false },
      { key: "D", text: "Art. 81 CE.", correct: false }
    ],
    explanation:
      "L’art. 55.2 CE permet suspensió individual amb control judicial."
  },

  // 🟢 COMPRENSIÓ (11–20)

  {
    id: 11,
    question: "La jerarquia de garanties implica que:",
    category: "general",
    options: [
      { key: "A", text: "Tots els drets tenen el mateix nivell de protecció.", correct: false },
      { key: "B", text: "El nivell de protecció depèn de la ubicació constitucional.", correct: true },
      { key: "C", text: "Només els drets socials són exigibles.", correct: false },
      { key: "D", text: "Els principis rectors tenen màxima protecció.", correct: false }
    ],
    explanation:
      "La ubicació dins el Títol I determina el règim de garanties."
  },

  {
    id: 12,
    question: "Els drets de la Secció 2a:",
    category: "general",
    options: [
      { key: "A", text: "Tenen recurs d’empara.", correct: false },
      { key: "B", text: "Exigeixen Llei Orgànica.", correct: false },
      { key: "C", text: "Tenen reserva de llei ordinària.", correct: true },
      { key: "D", text: "Són principis rectors.", correct: false }
    ],
    explanation:
      "Els drets de la Secció 2a tenen menor nivell de garantia."
  },

  {
    id: 13,
    question: "Els principis rectors orienten:",
    category: "general",
    options: [
      { key: "A", text: "La política social i econòmica.", correct: true },
      { key: "B", text: "El Tribunal Constitucional exclusivament.", correct: false },
      { key: "C", text: "Només els ajuntaments.", correct: false },
      { key: "D", text: "La reforma constitucional agreujada.", correct: false }
    ],
    explanation:
      "Són mandats als poders públics."
  },

  {
    id: 14,
    question: "La Secció 1a és considerada:",
    category: "general",
    options: [
      { key: "A", text: "El nucli dur dels drets fonamentals.", correct: true },
      { key: "B", text: "Un conjunt de principis rectors.", correct: false },
      { key: "C", text: "Un annex del Títol I.", correct: false },
      { key: "D", text: "Una norma reglamentària.", correct: false }
    ],
    explanation:
      "Arts. 15–29 CE constitueixen el nucli de drets fonamentals."
  },

  {
    id: 15,
    question: "La propietat privada (art. 33 CE):",
    category: "general",
    options: [
      { key: "A", text: "És dret fonamental estricte.", correct: false },
      { key: "B", text: "És dret constitucional amb menor garantia.", correct: true },
      { key: "C", text: "És principi rector.", correct: false },
      { key: "D", text: "Té recurs d’empara.", correct: false }
    ],
    explanation:
      "Forma part de la Secció 2a."
  },

  {
    id: 16,
    question: "Els drets polítics de l’art. 23 CE:",
    category: "general",
    options: [
      { key: "A", text: "Són exclusius dels espanyols, amb excepcions municipals.", correct: true },
      { key: "B", text: "Són universals per a tots els residents.", correct: false },
      { key: "C", text: "No tenen recurs d’empara.", correct: false },
      { key: "D", text: "Són principis rectors.", correct: false }
    ],
    explanation:
      "Els drets polítics es reserven als espanyols amb excepcions municipals per reciprocitat."
  },

  {
    id: 17,
    question: "El Capítol IV del Títol I regula:",
    category: "general",
    options: [
      { key: "A", text: "La suspensió de drets.", correct: false },
      { key: "B", text: "Les garanties dels drets.", correct: true },
      { key: "C", text: "La nacionalitat.", correct: false },
      { key: "D", text: "Els principis rectors.", correct: false }
    ],
    explanation:
      "Arts. 53–54 CE regulen el sistema de garanties."
  },

  {
    id: 18,
    question: "El recurs d’empara protegeix:",
    category: "general",
    options: [
      { key: "A", text: "Només els principis rectors.", correct: false },
      { key: "B", text: "Art. 14 i arts. 15–29 CE.", correct: true },
      { key: "C", text: "Tots els drets del Títol I.", correct: false },
      { key: "D", text: "Només drets socials.", correct: false }
    ],
    explanation:
      "Així ho estableix l’art. 53.2 CE."
  },

  {
    id: 19,
    question: "La suspensió general de drets es produeix en:",
    category: "general",
    options: [
      { key: "A", text: "Estat d’alarma.", correct: false },
      { key: "B", text: "Estat d’excepció o setge.", correct: true },
      { key: "C", text: "Qualsevol crisi econòmica.", correct: false },
      { key: "D", text: "Mitjançant decret llei.", correct: false }
    ],
    explanation:
      "Art. 55.1 CE."
  },

  {
    id: 20,
    question: "Tot el sistema de drets del Títol I es fonamenta en:",
    category: "general",
    options: [
      { key: "A", text: "La sobirania popular.", correct: false },
      { key: "B", text: "La dignitat humana (art. 10 CE).", correct: true },
      { key: "C", text: "La jerarquia normativa.", correct: false },
      { key: "D", text: "Els principis rectors.", correct: false }
    ],
    explanation:
      "L’art. 10 CE és el fonament del sistema de drets."
  }

];

export default bloc1Tema1Punt5Ask;