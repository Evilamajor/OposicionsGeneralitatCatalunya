const bloc1Tema1Punt10Ask = [

  // 🔴 PREGUNTES TRAMPA (1–5)

  {
    id: 1,
    question: "Els municipis tenen potestat legislativa?",
    category: "trampa",
    options: [
      { key: "A", text: "Sí, dins del seu terme municipal.", correct: false },
      { key: "B", text: "Només en matèria tributària.", correct: false },
      { key: "C", text: "No, només potestat reglamentària.", correct: true },
      { key: "D", text: "Sí, si ho autoritza la Comunitat Autònoma.", correct: false }
    ],
    explanation:
      "Els municipis tenen autonomia administrativa i potestat reglamentària, però mai legislativa."
  },

  {
    id: 2,
    question: "La província és:",
    category: "trampa",
    options: [
      { key: "A", text: "Un òrgan de desconcentració autonòmica.", correct: false },
      { key: "B", text: "Una entitat local amb personalitat jurídica pròpia.", correct: true },
      { key: "C", text: "Un ens amb potestat legislativa.", correct: false },
      { key: "D", text: "Una divisió modificable per decret autonòmic.", correct: false }
    ],
    explanation:
      "La província és entitat local amb personalitat pròpia (art. 141 CE)."
  },

  {
    id: 3,
    question: "L’autonomia local implica:",
    category: "trampa",
    options: [
      { key: "A", text: "Sobirania pròpia.", correct: false },
      { key: "B", text: "Capacitat d’autogovern administratiu.", correct: true },
      { key: "C", text: "Poder constituent.", correct: false },
      { key: "D", text: "Independència normativa absoluta.", correct: false }
    ],
    explanation:
      "L’autonomia local és administrativa, no sobirana."
  },

  {
    id: 4,
    question: "La descentralització consisteix en:",
    category: "trampa",
    options: [
      { key: "A", text: "Distribució interna dins d’una mateixa Administració.", correct: false },
      { key: "B", text: "Trasllat de competències a ens amb personalitat pròpia.", correct: true },
      { key: "C", text: "Delegació jeràrquica dins el Ministeri.", correct: false },
      { key: "D", text: "Centralització de competències.", correct: false }
    ],
    explanation:
      "Descentralitzar és atribuir competències a ens amb personalitat pròpia."
  },

  {
    id: 5,
    question: "Les Comunitats Autònomes tenen:",
    category: "trampa",
    options: [
      { key: "A", text: "Autonomia administrativa.", correct: false },
      { key: "B", text: "Autonomia política amb potestat legislativa.", correct: true },
      { key: "C", text: "Sobirania pròpia.", correct: false },
      { key: "D", text: "Només potestat reglamentària.", correct: false }
    ],
    explanation:
      "Les CA tenen autonomia política i potestat legislativa dins el marc constitucional."
  },

  // 📜 PREGUNTES DE LEGISLACIÓ (6–10)

  {
    id: 6,
    question: "L’organització territorial en municipis, províncies i CA es regula a:",
    category: "legislacio",
    options: [
      { key: "A", text: "Art. 137 CE.", correct: true },
      { key: "B", text: "Art. 138 CE.", correct: false },
      { key: "C", text: "Art. 140 CE.", correct: false },
      { key: "D", text: "Art. 141 CE.", correct: false }
    ],
    explanation:
      "L’art. 137 CE estableix l’organització territorial bàsica."
  },

  {
    id: 7,
    question: "L’autonomia municipal es garanteix a:",
    category: "legislacio",
    options: [
      { key: "A", text: "Art. 139 CE.", correct: false },
      { key: "B", text: "Art. 140 CE.", correct: true },
      { key: "C", text: "Art. 141 CE.", correct: false },
      { key: "D", text: "Art. 142 CE.", correct: false }
    ],
    explanation:
      "L’art. 140 CE garanteix l’autonomia municipal."
  },

  {
    id: 8,
    question: "La suficiència financera de les Hisendes locals es regula a:",
    category: "legislacio",
    options: [
      { key: "A", text: "Art. 137 CE.", correct: false },
      { key: "B", text: "Art. 140 CE.", correct: false },
      { key: "C", text: "Art. 141 CE.", correct: false },
      { key: "D", text: "Art. 142 CE.", correct: true }
    ],
    explanation:
      "L’art. 142 CE estableix el principi de suficiència financera."
  },

  {
    id: 9,
    question: "La província es regula principalment a:",
    category: "legislacio",
    options: [
      { key: "A", text: "Art. 140 CE.", correct: false },
      { key: "B", text: "Art. 141 CE.", correct: true },
      { key: "C", text: "Art. 142 CE.", correct: false },
      { key: "D", text: "Art. 137 CE.", correct: false }
    ],
    explanation:
      "L’art. 141 CE regula la província."
  },

  {
    id: 10,
    question: "La modificació dels límits provincials exigeix:",
    category: "legislacio",
    options: [
      { key: "A", text: "Decret del Govern.", correct: false },
      { key: "B", text: "Llei ordinària.", correct: false },
      { key: "C", text: "Llei Orgànica de les Corts Generals.", correct: true },
      { key: "D", text: "Acord autonòmic.", correct: false }
    ],
    explanation:
      "La modificació dels límits provincials exigeix Llei Orgànica."
  },

  // 🟢 PREGUNTES DE COMPRENSIÓ (11–20)

  {
    id: 11,
    question: "L’Estat compost implica:",
    category: "general",
    options: [
      { key: "A", text: "Diversos centres de poder dins un únic Estat sobirà.", correct: true },
      { key: "B", text: "Diversos Estats sobirans.", correct: false },
      { key: "C", text: "Confederació territorial.", correct: false },
      { key: "D", text: "Unitat uniforme.", correct: false }
    ],
    explanation:
      "L’Estat compost integra diversos centres de poder dins una única sobirania."
  },

  {
    id: 12,
    question: "L’alcalde és elegit:",
    category: "general",
    options: [
      { key: "A", text: "Sempre pels veïns directament.", correct: false },
      { key: "B", text: "Sempre pels regidors.", correct: false },
      { key: "C", text: "Pels regidors o pels veïns segons la llei.", correct: true },
      { key: "D", text: "Pel President de la CA.", correct: false }
    ],
    explanation:
      "L’art. 140 CE permet ambdues opcions segons la llei."
  },

  {
    id: 13,
    question: "Els ens locals poden dictar:",
    category: "general",
    options: [
      { key: "A", text: "Lleis.", correct: false },
      { key: "B", text: "Reglaments i ordenances.", correct: true },
      { key: "C", text: "Estatuts autonòmics.", correct: false },
      { key: "D", text: "Reformes constitucionals.", correct: false }
    ],
    explanation:
      "Només tenen potestat reglamentària."
  },

  {
    id: 14,
    question: "La suficiència financera garanteix:",
    category: "general",
    options: [
      { key: "A", text: "Dependència econòmica de l’Estat.", correct: false },
      { key: "B", text: "Mitjans suficients per exercir competències.", correct: true },
      { key: "C", text: "Autonomia legislativa.", correct: false },
      { key: "D", text: "Privilegis fiscals.", correct: false }
    ],
    explanation:
      "Els ens locals han de disposar de recursos suficients."
  },

  {
    id: 15,
    question: "La Diputació Provincial governa:",
    category: "general",
    options: [
      { key: "A", text: "La Comunitat Autònoma.", correct: false },
      { key: "B", text: "La província.", correct: true },
      { key: "C", text: "El municipi.", correct: false },
      { key: "D", text: "L’Estat.", correct: false }
    ],
    explanation:
      "La Diputació governa la província."
  },

  {
    id: 16,
    question: "La desconcentració implica:",
    category: "general",
    options: [
      { key: "A", text: "Trasllat a ens amb personalitat pròpia.", correct: false },
      { key: "B", text: "Distribució interna dins la mateixa Administració.", correct: true },
      { key: "C", text: "Delegació legislativa.", correct: false },
      { key: "D", text: "Autonomia política.", correct: false }
    ],
    explanation:
      "És distribució interna dins una mateixa estructura administrativa."
  },

  {
    id: 17,
    question: "Les Comunitats Autònomes tenen:",
    category: "general",
    options: [
      { key: "A", text: "Parlament i Govern propis.", correct: true },
      { key: "B", text: "Només Ajuntament.", correct: false },
      { key: "C", text: "Diputació.", correct: false },
      { key: "D", text: "Cap òrgan legislatiu.", correct: false }
    ],
    explanation:
      "Les CA tenen Parlament i Govern propis."
  },

  {
    id: 18,
    question: "El conflicte en defensa de l’autonomia local es planteja davant:",
    category: "general",
    options: [
      { key: "A", text: "El Tribunal Suprem.", correct: false },
      { key: "B", text: "El Tribunal Constitucional.", correct: true },
      { key: "C", text: "La Diputació.", correct: false },
      { key: "D", text: "El Defensor del Poble.", correct: false }
    ],
    explanation:
      "És un mecanisme davant el TC per protegir l’autonomia local."
  },

  {
    id: 19,
    question: "Les competències locals poden ser:",
    category: "general",
    options: [
      { key: "A", text: "Només pròpies.", correct: false },
      { key: "B", text: "Pròpies o delegades.", correct: true },
      { key: "C", text: "Legislatives.", correct: false },
      { key: "D", text: "Constituents.", correct: false }
    ],
    explanation:
      "Poden exercir competències pròpies o delegades."
  },

  {
    id: 20,
    question: "La garantia institucional significa que:",
    category: "general",
    options: [
      { key: "A", text: "El legislador pot suprimir l’autonomia local.", correct: false },
      { key: "B", text: "No es pot buidar de contingut l’autonomia local.", correct: true },
      { key: "C", text: "Les CA poden dissoldre municipis lliurement.", correct: false },
      { key: "D", text: "Els municipis són sobirans.", correct: false }
    ],
    explanation:
      "La garantia institucional impedeix buidar de contingut l’autonomia local."
  }

];

export default bloc1Tema1Punt10Ask;