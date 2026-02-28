const preguntes = [

  // =====================================
  // 5 PREGUNTES DE LEGISLACIÓ
  // =====================================

  {
    id: 1,
    tipus: "legislacio",
    pregunta: "Segons l'article 147 CE, l'Estatut d'Autonomia és:",
    opcions: [
      "Una norma reglamentària autonòmica",
      "La norma institucional bàsica de la Comunitat Autònoma",
      "Una llei ordinària de l'Estat",
      "Una norma constitucional"
    ],
    correcta: 1,
    explicacioCorrecta: "L'article 147.1 CE defineix l'Estatut com la norma institucional bàsica de cada Comunitat Autònoma.",
    explicacionsIncorrectes: [
      "No és reglament.",
      "",
      "No és llei ordinària sinó llei orgànica.",
      "No té rang constitucional."
    ]
  },

  {
    id: 2,
    tipus: "legislacio",
    pregunta: "Quin article de l'EAC regula la reforma dels títols I i II?",
    opcions: [
      "Article 223 EAC",
      "Article 222 EAC",
      "Article 147 CE",
      "Article 81 CE"
    ],
    correcta: 1,
    explicacioCorrecta: "L'article 222 EAC regula la reforma dels títols I i II.",
    explicacionsIncorrectes: [
      "L'article 223 regula el procediment ordinari.",
      "",
      "És un article constitucional.",
      "Aquest article regula les lleis orgàniques."
    ]
  },

  {
    id: 3,
    tipus: "legislacio",
    pregunta: "La reforma ordinària de l'Estatut està regulada a:",
    opcions: [
      "Article 223 EAC",
      "Article 222 EAC",
      "Article 149 CE",
      "Article 2 CE"
    ],
    correcta: 0,
    explicacioCorrecta: "L'article 223 EAC regula el procediment ordinari de reforma.",
    explicacionsIncorrectes: [
      "",
      "Aquest regula reforma reforçada.",
      "Article competencial estatal.",
      "Article sobre unitat d'Espanya."
    ]
  },

  {
    id: 4,
    tipus: "legislacio",
    pregunta: "Segons l'article 81 CE, l'Estatut s'aprova com:",
    opcions: [
      "Llei ordinària",
      "Decret legislatiu",
      "Llei orgànica",
      "Reglament parlamentari"
    ],
    correcta: 2,
    explicacioCorrecta: "Els Estatuts d'Autonomia tenen rang de llei orgànica.",
    explicacionsIncorrectes: [
      "No és llei ordinària.",
      "No és decret legislatiu.",
      ""
    ]
  },

  {
    id: 5,
    tipus: "legislacio",
    pregunta: "La reforma estatutària sempre requereix:",
    opcions: [
      "Aprovació només pel Parlament de Catalunya",
      "Majoría absoluta del Congrés",
      "Aprovació per 2/3 del Parlament, Llei Orgànica i referèndum",
      "Aprovació del Senat exclusivament"
    ],
    correcta: 2,
    explicacioCorrecta: "La reforma requereix 2/3 del Parlament, Llei Orgànica de les Corts i referèndum a Catalunya.",
    explicacionsIncorrectes: [
      "No és suficient el Parlament.",
      "No n'hi ha prou amb majoria absoluta.",
      "No és competència exclusiva del Senat."
    ]
  },

  // =====================================
  // 5 PREGUNTES TRAMPA
  // =====================================

  {
    id: 6,
    tipus: "trampa",
    pregunta: "L'Estatut pot redefinir conceptes constitucionals si és aprovat en referèndum.",
    opcions: [
      "Sí",
      "Només parcialment",
      "No",
      "Sí, si afecta només Catalunya"
    ],
    correcta: 2,
    explicacioCorrecta: "La STC 31/2010 estableix que l'Estatut és poder constituït i no pot redefinir la CE.",
    explicacionsIncorrectes: [
      "El referèndum no el converteix en norma constitucional.",
      "No existeix redefinició parcial.",
      "La CE és límit suprem."
    ]
  },

  {
    id: 7,
    tipus: "trampa",
    pregunta: "La sobirania correspon a:",
    opcions: [
      "El poble català",
      "El Parlament de Catalunya",
      "El poble espanyol",
      "Les Comunitats Autònomes"
    ],
    correcta: 2,
    explicacioCorrecta: "Segons la CE, la sobirania resideix en el poble espanyol.",
    explicacionsIncorrectes: [
      "Catalunya té autonomia política, no sobirania.",
      "El Parlament és poder constituït.",
      "Les CA no són sobiranes."
    ]
  },

  {
    id: 8,
    tipus: "trampa",
    pregunta: "El Parlament pot retirar una proposta de reforma un cop aprovada definitivament per les Corts.",
    opcions: [
      "Sí",
      "No",
      "Només amb majoria absoluta",
      "Només si ho autoritza el Govern"
    ],
    correcta: 1,
    explicacioCorrecta: "La retirada només és possible abans de l'aprovació definitiva a les Corts.",
    explicacionsIncorrectes: [
      "No és possible després de l'aprovació.",
      "No depèn de majoria.",
      "No depèn del Govern."
    ]
  },

  {
    id: 9,
    tipus: "trampa",
    pregunta: "El bloc de la constitucionalitat està integrat només per la Constitució.",
    opcions: [
      "Sí",
      "No",
      "Només per lleis orgàniques",
      "Només per Estatuts"
    ],
    correcta: 1,
    explicacioCorrecta: "Inclou la CE i els Estatuts d'Autonomia.",
    explicacionsIncorrectes: [
      "No és només la CE.",
      "No són només lleis orgàniques.",
      "No són només Estatuts."
    ]
  },

  {
    id: 10,
    tipus: "trampa",
    pregunta: "El referèndum en la reforma estatutària és opcional.",
    opcions: [
      "Sí",
      "Només en reforma ordinària",
      "No",
      "Depèn del Senat"
    ],
    correcta: 2,
    explicacioCorrecta: "El referèndum és obligatori en ambdós procediments.",
    explicacionsIncorrectes: [
      "No és opcional.",
      "No depèn del tipus.",
      "No depèn del Senat."
    ]
  },

  // =====================================
  // 10 PREGUNTES CONCEPTUALS
  // =====================================

  {
    id: 11,
    tipus: "concepte",
    pregunta: "L'Estatut forma part de:",
    opcions: [
      "El bloc de la constitucionalitat",
      "El dret europeu",
      "El reglament parlamentari",
      "El poder constituent"
    ],
    correcta: 0,
    explicacioCorrecta: "Forma part del bloc de la constitucionalitat.",
    explicacionsIncorrectes: [
      "",
      "No és dret europeu.",
      "No és reglament.",
      "És poder constituït."
    ]
  },

  {
    id: 12,
    tipus: "concepte",
    pregunta: "El poder de reforma estatutària és expressió de:",
    opcions: [
      "Poder constituent",
      "Poder constituït",
      "Sobirania pròpia",
      "Competència europea"
    ],
    correcta: 1,
    explicacioCorrecta: "És poder constituït, subordinat a la CE.",
    explicacionsIncorrectes: [
      "No és poder constituent.",
      "No implica sobirania.",
      "No és competència UE."
    ]
  },

  {
    id: 13,
    tipus: "concepte",
    pregunta: "La STC 31/2010 reafirma:",
    opcions: [
      "La supremacia estatutària",
      "La supremacia constitucional",
      "La sobirania catalana",
      "L'autodeterminació"
    ],
    correcta: 1,
    explicacioCorrecta: "Reafirma la supremacia de la Constitució.",
    explicacionsIncorrectes: [
      "No hi ha supremacia estatutària.",
      "",
      "No reconeix sobirania.",
      "No tracta autodeterminació."
    ]
  },

  {
    id: 14,
    tipus: "concepte",
    pregunta: "El procediment reforçat exigeix:",
    opcions: [
      "Majoría simple",
      "Majoría absoluta",
      "Majoría de 2/3",
      "Unanimitat"
    ],
    correcta: 2,
    explicacioCorrecta: "Requereix vot favorable de 2/3 del Parlament.",
    explicacionsIncorrectes: [
      "No és majoria simple.",
      "No és només absoluta.",
      "No exigeix unanimitat."
    ]
  },

  {
    id: 15,
    tipus: "concepte",
    pregunta: "El límit suprem de la reforma és:",
    opcions: [
      "El Parlament",
      "La Constitució",
      "El Govern",
      "El TC"
    ],
    correcta: 1,
    explicacioCorrecta: "La CE és el límit material de la reforma.",
    explicacionsIncorrectes: [
      "No és el Parlament.",
      "",
      "El Govern no és límit suprem.",
      "El TC controla però no és norma."
    ]
  },

  {
    id: 16,
    tipus: "concepte",
    pregunta: "Els drets estatutaris segons la STC 31/2010:",
    opcions: [
      "Són drets fonamentals",
      "Vinculen només poders públics catalans",
      "Són superiors als drets fonamentals",
      "No tenen valor jurídic"
    ],
    correcta: 1,
    explicacioCorrecta: "No són drets fonamentals constitucionals.",
    explicacionsIncorrectes: [
      "No són drets fonamentals.",
      "",
      "No són superiors.",
      "Sí tenen valor jurídic."
    ]
  },

  {
    id: 17,
    tipus: "concepte",
    pregunta: "El caràcter pactat de l'Estatut implica:",
    opcions: [
      "Acord Parlament–Corts",
      "Acord Parlament–UE",
      "Acord Govern–TC",
      "Acord Senat–TC"
    ],
    correcta: 0,
    explicacioCorrecta: "Requereix voluntat del Parlament i de les Corts Generals.",
    explicacionsIncorrectes: [
      "",
      "No intervé la UE.",
      "No és acord amb TC.",
      "No és acord institucional judicial."
    ]
  },

  {
    id: 18,
    tipus: "concepte",
    pregunta: "El recurs previ d'inconstitucionalitat afecta:",
    opcions: [
      "Reformes estatutàries",
      "Totes les lleis ordinàries",
      "Reglaments autonòmics",
      "Decrets municipals"
    ],
    correcta: 0,
    explicacioCorrecta: "Des de 2015 es reintrodueix per reformes estatutàries.",
    explicacionsIncorrectes: [
      "",
      "No és general.",
      "No és reglamentari.",
      "No és municipal."
    ]
  },

  {
    id: 19,
    tipus: "concepte",
    pregunta: "La autonomia política inclou:",
    opcions: [
      "Sobirania plena",
      "Potestat legislativa dins la CE",
      "Independència internacional",
      "Cap competència normativa"
    ],
    correcta: 1,
    explicacioCorrecta: "Inclou potestat legislativa dins el marc constitucional.",
    explicacionsIncorrectes: [
      "No implica sobirania.",
      "",
      "No hi ha independència internacional.",
      "Sí hi ha competències."
    ]
  },

  {
    id: 20,
    tipus: "concepte",
    pregunta: "L'Estatut és jeràrquicament:",
    opcions: [
      "Superior a la CE",
      "Igual a la CE",
      "Subordinat a la CE",
      "Superior a les lleis orgàniques"
    ],
    correcta: 2,
    explicacioCorrecta: "És norma subconstitucional subordinada a la CE.",
    explicacionsIncorrectes: [
      "Mai superior.",
      "No és igual.",
      "",
      "Té rang de llei orgànica."
    ]
  }

];

export default preguntes;