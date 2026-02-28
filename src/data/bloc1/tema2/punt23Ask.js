const preguntes = [
  // =========================
  // 5 PREGUNTES DE LEGISLACIÓ
  // =========================

  {
    id: 1,
    tipus: "legislacio",
    pregunta: "Segons la Constitució Espanyola, qui té la competència exclusiva en matèria de relacions internacionals?",
    opcions: [
      "La Generalitat de Catalunya",
      "L'Estat, segons l'article 149.1.3 CE",
      "Les comunitats autònomes de manera compartida",
      "El Senat"
    ],
    correcta: 1,
    explicacioCorrecta: "L'article 149.1.3 CE atribueix a l'Estat la competència exclusiva en matèria de relacions internacionals.",
    explicacionsIncorrectes: [
      "La Generalitat no té competència en relacions internacionals, sinó acció exterior vinculada a competències pròpies.",
      "",
      "No és una competència compartida.",
      "El Senat no és titular de competències materials."
    ]
  },

  {
    id: 2,
    tipus: "legislacio",
    pregunta: "Quin article de l'EAC regula la posició determinant de la Generalitat en la formació de la posició de l'Estat davant la UE?",
    opcions: [
      "Article 189 EAC",
      "Article 193 EAC",
      "Article 186.3 EAC",
      "Article 149.1.3 CE"
    ],
    correcta: 2,
    explicacioCorrecta: "L'article 186.3 EAC estableix que la posició de la Generalitat pot ser determinant en determinats supòsits.",
    explicacionsIncorrectes: [
      "L'article 189 regula la fase descendent.",
      "L'article 193 és disposició general d'acció exterior.",
      "Aquest article és de la Constitució, no de l'EAC."
    ]
  },

  {
    id: 3,
    tipus: "legislacio",
    pregunta: "Segons l'EAC, quin article estableix que la normativa europea no altera la distribució interna de competències?",
    opcions: [
      "Article 186 EAC",
      "Article 189 EAC",
      "Article 194 EAC",
      "Article 3.1 EAC"
    ],
    correcta: 1,
    explicacioCorrecta: "L'article 189 EAC estableix que el dret de la UE no modifica la distribució competencial interna.",
    explicacionsIncorrectes: [
      "L'article 186 regula la fase ascendent.",
      "",
      "L'article 194 regula oficines a l'exterior.",
      "L'article 3.1 regula la lleialtat institucional."
    ]
  },

  {
    id: 4,
    tipus: "legislacio",
    pregunta: "L'article 3.1 de l'EAC consagra el principi de:",
    opcions: [
      "Subsidiarietat",
      "Coordinació jeràrquica",
      "Lleialtat institucional",
      "Supremacia europea"
    ],
    correcta: 2,
    explicacioCorrecta: "L'article 3.1 EAC estableix el principi de lleialtat institucional mútua.",
    explicacionsIncorrectes: [
      "La subsidiarietat es regula específicament a l'àmbit europeu.",
      "No és coordinació jeràrquica.",
      "No consagra el principi de supremacia."
    ]
  },

  {
    id: 5,
    tipus: "legislacio",
    pregunta: "Quina sentència del TC va admetre la legitimitat d'obrir oficines autonòmiques a Brussel·les?",
    opcions: [
      "STC 31/2010",
      "STC 165/1994",
      "STC 76/1983",
      "STC 247/2007"
    ],
    correcta: 1,
    explicacioCorrecta: "La STC 165/1994 va reconèixer la legitimitat de les oficines autonòmiques a Brussel·les.",
    explicacionsIncorrectes: [
      "La STC 31/2010 resol el recurs contra l'EAC.",
      "No tracta específicament aquesta qüestió.",
      "No és la sentència rellevant en aquest àmbit."
    ]
  },

  // =========================
  // 5 PREGUNTES TRAMPA
  // =========================

  {
    id: 6,
    tipus: "trampa",
    pregunta: "La Generalitat pot signar tractats internacionals si afecten exclusivament competències pròpies.",
    opcions: [
      "Sí, en qualsevol cas",
      "Sí, si l'Estat ho autoritza prèviament",
      "No, el ius contrahendi és exclusiu de l'Estat",
      "Només en l'àmbit europeu"
    ],
    correcta: 2,
    explicacioCorrecta: "El ius contrahendi forma part del nucli exclusiu estatal en relacions internacionals.",
    explicacionsIncorrectes: [
      "Mai pot signar tractats internacionals.",
      "L'autorització no transfereix la titularitat competencial.",
      "Tampoc en l'àmbit europeu."
    ]
  },

  {
    id: 7,
    tipus: "trampa",
    pregunta: "Si una comunitat autònoma incompleix dret de la UE, la responsabilitat internacional recau sobre:",
    opcions: [
      "La comunitat autònoma",
      "La Generalitat i l'Estat solidàriament",
      "L'Estat",
      "La Comissió Europea"
    ],
    correcta: 2,
    explicacioCorrecta: "Només l'Estat és subjecte de dret internacional i responsable davant la UE.",
    explicacionsIncorrectes: [
      "Les CA no tenen subjectivitat internacional.",
      "No existeix responsabilitat solidària davant la UE.",
      "La Comissió no assumeix responsabilitat."
    ]
  },

  {
    id: 8,
    tipus: "trampa",
    pregunta: "La Delegació de la Generalitat a Brussel·les té estatus diplomàtic equivalent a una ambaixada.",
    opcions: [
      "Sí",
      "Només parcialment",
      "No",
      "Sí, si ho aprova el Parlament"
    ],
    correcta: 2,
    explicacioCorrecta: "Les delegacions autonòmiques no tenen estatus diplomàtic.",
    explicacionsIncorrectes: [
      "No tenen caràcter diplomàtic.",
      "No existeix estatus parcial.",
      "El Parlament no pot atribuir estatus internacional."
    ]
  },

  {
    id: 9,
    tipus: "trampa",
    pregunta: "La posició de la Generalitat és sempre determinant en la formació de la posició estatal davant la UE.",
    opcions: [
      "Sí",
      "Només si afecta competències exclusives amb impacte rellevant",
      "Mai",
      "Només si ho decideix el Senat"
    ],
    correcta: 1,
    explicacioCorrecta: "Només és determinant en els supòsits de l'article 186.3 EAC.",
    explicacionsIncorrectes: [
      "No és sempre determinant.",
      "Pot ser determinant en determinats casos.",
      "El Senat no decideix aquesta qüestió."
    ]
  },

  {
    id: 10,
    tipus: "trampa",
    pregunta: "L'existència de normativa europea modifica automàticament el repartiment intern de competències.",
    opcions: [
      "Sí",
      "Sí, en matèries econòmiques",
      "No",
      "Només en competències compartides"
    ],
    correcta: 2,
    explicacioCorrecta: "L'article 189 EAC estableix que el dret de la UE no altera la distribució competencial interna.",
    explicacionsIncorrectes: [
      "No modifica el repartiment.",
      "No existeix excepció econòmica.",
      "No es limita a competències compartides."
    ]
  },

  // =========================
  // 10 PREGUNTES CONCEPTUALS
  // =========================

  {
    id: 11,
    tipus: "concepte",
    pregunta: "Què diferencia les relacions internacionals de l'acció exterior?",
    opcions: [
      "La primera és estatal i la segona autonòmica vinculada a competències pròpies",
      "Són sinònims",
      "Ambdues són exclusives de l'Estat",
      "Ambdues són compartides"
    ],
    correcta: 0,
    explicacioCorrecta: "El TC distingeix clarament ambdós conceptes.",
    explicacionsIncorrectes: [
      "",
      "No són sinònims.",
      "L'acció exterior no és exclusiva estatal.",
      "No són compartides."
    ]
  },

  {
    id: 12,
    tipus: "concepte",
    pregunta: "El ius legationis fa referència a:",
    opcions: [
      "La signatura de tractats",
      "La representació exterior",
      "L'aplicació del dret UE",
      "La cooperació autonòmica"
    ],
    correcta: 1,
    explicacioCorrecta: "El ius legationis és la facultat de representació exterior.",
    explicacionsIncorrectes: [
      "Això és ius ad tractatum.",
      "",
      "No té relació amb aplicació del dret UE.",
      "No és cooperació."
    ]
  },

  {
    id: 13,
    tipus: "concepte",
    pregunta: "La fase descendent en assumptes europeus consisteix en:",
    opcions: [
      "Formar la posició negociadora",
      "Aplicar i executar el dret de la UE",
      "Signar tractats",
      "Representar l'Estat al Consell Europeu"
    ],
    correcta: 1,
    explicacioCorrecta: "La fase descendent és el desenvolupament i aplicació del dret europeu.",
    explicacionsIncorrectes: [
      "Això és fase ascendent.",
      "",
      "No correspon a les CA signar tractats.",
      "La representació correspon a l'Estat."
    ]
  },

  {
    id: 14,
    tipus: "concepte",
    pregunta: "El Comitè de les Regions és:",
    opcions: [
      "Un òrgan legislatiu vinculant",
      "Un òrgan consultiu de la UE",
      "Un tribunal europeu",
      "Una conferència sectorial espanyola"
    ],
    correcta: 1,
    explicacioCorrecta: "El Comitè de les Regions és un òrgan consultiu que emet dictàmens no vinculants.",
    explicacionsIncorrectes: [
      "No és òrgan legislatiu.",
      "",
      "No és un tribunal.",
      "No és òrgan intern espanyol."
    ]
  },

  {
    id: 15,
    tipus: "concepte",
    pregunta: "La CARUE és:",
    opcions: [
      "Un òrgan bilateral Generalitat-UE",
      "La conferència sectorial per afers europeus",
      "Una delegació permanent catalana",
      "Un òrgan judicial"
    ],
    correcta: 1,
    explicacioCorrecta: "És la Conferència per a Afers Relacionats amb la UE.",
    explicacionsIncorrectes: [
      "No és òrgan UE.",
      "",
      "No és delegació catalana.",
      "No és judicial."
    ]
  },

  {
    id: 16,
    tipus: "concepte",
    pregunta: "El principi de subsidiarietat implica:",
    opcions: [
      "Centralització de competències",
      "Decidir al nivell més pròxim possible",
      "Primacia autonòmica absoluta",
      "Subordinació jeràrquica"
    ],
    correcta: 1,
    explicacioCorrecta: "El principi de subsidiarietat busca que les decisions es prenguin al nivell més proper.",
    explicacionsIncorrectes: [
      "No implica centralització.",
      "",
      "No estableix primacia absoluta.",
      "No és jerarquia."
    ]
  },

  {
    id: 17,
    tipus: "concepte",
    pregunta: "La responsabilitat internacional de l'Estat implica:",
    opcions: [
      "Que només respon el Govern autonòmic",
      "Que respon l'Estat encara que la infracció sigui autonòmica",
      "Que respon la UE",
      "Que no hi ha responsabilitat"
    ],
    correcta: 1,
    explicacioCorrecta: "Només l'Estat és responsable davant la UE.",
    explicacionsIncorrectes: [
      "Les CA no són subjectes internacionals.",
      "",
      "La UE no assumeix responsabilitat.",
      "Sempre hi ha responsabilitat estatal."
    ]
  },

  {
    id: 18,
    tipus: "concepte",
    pregunta: "La STC 31/2010 va establir que:",
    opcions: [
      "L'EAC podia imposar obligacions vinculants a l'Estat",
      "Els mandats estatutaris són orientatius",
      "La Generalitat pot signar tractats",
      "Les CA són subjectes internacionals"
    ],
    correcta: 1,
    explicacioCorrecta: "El TC va reconduir diversos preceptes a mandats no vinculants.",
    explicacionsIncorrectes: [
      "No pot imposar obligacions vinculants.",
      "",
      "No pot signar tractats.",
      "No tenen subjectivitat internacional."
    ]
  },

  {
    id: 19,
    tipus: "concepte",
    pregunta: "La fase ascendent té lloc abans de:",
    opcions: [
      "L'aplicació del dret europeu",
      "La negociació a la UE",
      "La formació de la posició estatal",
      "La ratificació parlamentària"
    ],
    correcta: 0,
    explicacioCorrecta: "La fase ascendent precedeix l'aplicació i desenvolupament del dret europeu.",
    explicacionsIncorrectes: [
      "",
      "Forma part de la negociació.",
      "És precisament la formació de la posició.",
      "No és una fase parlamentària."
    ]
  },

  {
    id: 20,
    tipus: "concepte",
    pregunta: "L'acció exterior autonòmica ha de ser:",
    opcions: [
      "Independent de l'Estat",
      "Instrumental a les competències pròpies",
      "Diplomàtica plena",
      "Jeràrquicament subordinada"
    ],
    correcta: 1,
    explicacioCorrecta: "Ha d'estar vinculada a les competències pròpies i no envair les estatals.",
    explicacionsIncorrectes: [
      "No és independent.",
      "",
      "No és diplomàcia plena.",
      "No existeix jerarquia en aquest sentit."
    ]
  }
];

export default preguntes;