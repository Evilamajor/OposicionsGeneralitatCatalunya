const preguntes = [

  // ===============================
  // 🔹 LEGISLACIÓ (5)
  // ===============================

  {
    pregunta: "Quin article de la CE reconeix l’autonomia financera de les comunitats autònomes?",
    opcions: [
      "Article 155 CE",
      "Article 156 CE",
      "Article 157 CE",
      "Article 158 CE"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. L’article 156 CE reconeix l’autonomia financera de les CA dins els principis de coordinació i solidaritat.",
      incorrectes: [
        "L’article 155 CE regula mesures coercitives.",
        "L’article 157 CE enumera recursos.",
        "L’article 158 CE regula fons d’anivellament i FCI."
      ]
    }
  },

  {
    pregunta: "L’article 157 CE regula:",
    opcions: [
      "La solidaritat interterritorial",
      "Els recursos financers de les CA",
      "La suspensió automàtica de normes",
      "Les lleis d’harmonització"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. L’article 157 CE enumera els recursos de les comunitats autònomes.",
      incorrectes: [
        "La solidaritat es desenvolupa a l’art. 158 CE.",
        "Això és l’art. 161.2 CE.",
        "Les lleis d’harmonització són a l’art. 150.3 CE."
      ]
    }
  },

  {
    pregunta: "El Fons de Compensació Interterritorial (FCI) està previst a:",
    opcions: [
      "Article 156 CE",
      "Article 157 CE",
      "Article 158 CE",
      "Article 135 CE"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. L’article 158 CE regula el FCI destinat a inversions.",
      incorrectes: [
        "156 CE regula autonomia financera.",
        "157 CE enumera recursos.",
        "135 CE regula estabilitat pressupostària."
      ]
    }
  },

  {
    pregunta: "Quina llei orgànica desenvolupa el sistema de finançament del règim comú?",
    opcions: [
      "LOPJ",
      "LOFCA",
      "LOTC",
      "LBRL"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. La LOFCA (Llei Orgànica 8/1980) desenvolupa el sistema de finançament.",
      incorrectes: [
        "La LOPJ regula el poder judicial.",
        "La LOTC regula el Tribunal Constitucional.",
        "La LBRL regula règim local."
      ]
    }
  },

  {
    pregunta: "L’article 204 EAC regula:",
    opcions: [
      "Els principis financers",
      "L’Agència Tributària de Catalunya",
      "El FCI",
      "La solidaritat interterritorial"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. L’article 204 EAC regula l’Agència Tributària de Catalunya.",
      incorrectes: [
        "Els principis estan a l’art. 201 EAC.",
        "El FCI és a l’art. 158 CE.",
        "La solidaritat es regula constitucionalment."
      ]
    }
  },

  // ===============================
  // 🔹 TRAMPA (5)
  // ===============================

  {
    pregunta: "L’EAC fixa de manera jurídicament vinculant la inversió estatal a Catalunya?",
    opcions: [
      "Sí, sempre",
      "Sí, si ho aprova el Parlament",
      "No, segons la STC 31/2010",
      "Sí, mitjançant LOFCA"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. La STC 31/2010 considera que la DA 3a no vincula la potestat pressupostària estatal.",
      incorrectes: [
        "No és jurídicament obligatori.",
        "El Parlament autonòmic no pot imposar-ho.",
        "La LOFCA no estableix aquesta obligació."
      ]
    }
  },

  {
    pregunta: "L’ATC gestiona tots els impostos recaptats a Catalunya?",
    opcions: [
      "Sí",
      "Només els propis i cedits totalment",
      "Només l’IRPF",
      "Només els impostos locals"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. Només gestiona tributs propis i cedits totalment.",
      incorrectes: [
        "No gestiona tots els impostos.",
        "L’IRPF és cessió parcial.",
        "Els tributs locals no depenen de l’ATC."
      ]
    }
  },

  {
    pregunta: "La suposada ordinalitat impedeix que Catalunya aporti recursos a la solidaritat?",
    opcions: [
      "Sí",
      "No, només evita perdre posició relativa",
      "Sí, si és competència exclusiva",
      "No, perquè no existeix ordinalitat"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. L’ordinalitat garanteix que no es perdi posició relativa després de la nivellació.",
      incorrectes: [
        "No impedeix la solidaritat.",
        "No depèn del tipus competencial.",
        "L’ordinalitat està prevista a l’art. 206.5 EAC."
      ]
    }
  },

  {
    pregunta: "La Generalitat pot crear tributs sobre fets ja gravats per l’Estat?",
    opcions: [
      "Sí, lliurement",
      "Sí, si són ambientals",
      "No, ho prohibeix la LOFCA",
      "Només amb autorització estatal"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. L’art. 6.2 LOFCA prohibeix la duplicitat de fets imposables.",
      incorrectes: [
        "No pot crear duplicitat.",
        "El caràcter ambiental no elimina la prohibició.",
        "No existeix aquesta autorització."
      ]
    }
  },

  {
    pregunta: "El FCI finança:",
    opcions: [
      "Despesa corrent",
      "Inversions per corregir desequilibris",
      "Nòmines de funcionaris",
      "Recaptació tributària"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. El FCI està destinat exclusivament a inversions.",
      incorrectes: [
        "No finança despesa corrent.",
        "No finança nòmines.",
        "No té funció recaptatòria."
      ]
    }
  },

  // ===============================
  // 🔹 CONTINGUT (10)
  // ===============================

  {
    pregunta: "El principi d’autonomia financera implica:",
    opcions: [
      "Independència absoluta",
      "Cap límit estatal",
      "Decidir ingressos i despesa dins el marc legal",
      "No contribuir a la solidaritat"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. L’autonomia financera s’exerceix dins els límits constitucionals.",
      incorrectes: [
        "No és independència absoluta.",
        "Existeixen límits constitucionals.",
        "La solidaritat és obligatòria."
      ]
    }
  },

  {
    pregunta: "Els tributs cedits poden incloure:",
    opcions: [
      "Només rendiment",
      "Rendiment i capacitat normativa",
      "Només inspecció",
      "Només recàrrecs"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. Poden cedir-se totalment o parcialment amb capacitat normativa.",
      incorrectes: [
        "Poden incloure normativa.",
        "No es limita a inspecció.",
        "No són simples recàrrecs."
      ]
    }
  },

  {
    pregunta: "La solidaritat interterritorial té com a límit:",
    opcions: [
      "L’autonomia financera",
      "L’ordinalitat",
      "La LOFCA",
      "El Parlament estatal"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. L’ordinalitat limita l’efecte redistributiu.",
      incorrectes: [
        "No és el límit principal.",
        "La LOFCA desenvolupa el sistema.",
        "No depèn del Parlament estatal directament."
      ]
    }
  },

  {
    pregunta: "El règim comú es diferencia del foral perquè:",
    opcions: [
      "No recapta impostos",
      "Es basa en costos de competències",
      "No participa en solidaritat",
      "No aplica LOFCA"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. El règim comú es basa en costos de competències assumides.",
      incorrectes: [
        "Sí recapta impostos cedits.",
        "Participa en solidaritat.",
        "La LOFCA és la seva base."
      ]
    }
  },

  {
    pregunta: "L’article 135 CE introdueix:",
    opcions: [
      "Autonomia fiscal plena",
      "Estabilitat pressupostària",
      "Nivellació fiscal",
      "Finançament local"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. Introdueix el principi d’estabilitat pressupostària.",
      incorrectes: [
        "No atorga autonomia plena.",
        "No regula nivellació.",
        "No regula finançament local."
      ]
    }
  }

];

export default preguntes;