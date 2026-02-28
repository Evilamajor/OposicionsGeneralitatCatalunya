const preguntes = [

  // ===============================
  // 🔹 LEGISLACIÓ (5)
  // ===============================

  {
    pregunta: "Quin article de l’EAC regula les competències exclusives?",
    opcions: [
      "Article 110 EAC",
      "Article 111 EAC",
      "Article 112 EAC",
      "Article 149.1 CE"
    ],
    correcta: 0,
    explicacio: {
      correcta: "Correcte. L’article 110 EAC regula les competències exclusives.",
      incorrectes: [
        "L’article 111 regula les compartides.",
        "L’article 112 regula les executives.",
        "L’article 149.1 CE enumera competències estatals."
      ]
    }
  },

  {
    pregunta: "L’article 111 EAC regula:",
    opcions: [
      "Competències exclusives",
      "Competències compartides",
      "Competències executives",
      "Clàusula residual"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. L’article 111 EAC regula les competències compartides.",
      incorrectes: [
        "Les exclusives són a l’art. 110.",
        "Les executives són a l’art. 112.",
        "La clàusula residual és a l’art. 149.3 CE."
      ]
    }
  },

  {
    pregunta: "La clàusula residual es troba a:",
    opcions: [
      "Article 148 CE",
      "Article 149.1 CE",
      "Article 149.3 CE",
      "Article 150 CE"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. L’article 149.3 CE conté la clàusula residual.",
      incorrectes: [
        "148 CE regula matèries assumibles.",
        "149.1 CE enumera competències estatals.",
        "150 CE regula tècniques de delegació."
      ]
    }
  },

  {
    pregunta: "Segons la STC 31/2010, les bases estatals:",
    opcions: [
      "Han d’estar sempre en llei formal",
      "Poden establir-se excepcionalment per reglament",
      "Només poden ser fixades per les CA",
      "No poden afectar competències exclusives autonòmiques"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. El TC admet bases reglamentàries en supòsits excepcionals.",
      incorrectes: [
        "El TC va anul·lar aquesta exigència.",
        "Les bases les fixa l’Estat.",
        "Els títols transversals poden incidir en competències autonòmiques."
      ]
    }
  },

  {
    pregunta: "L’article 112 EAC regula:",
    opcions: [
      "Competències compartides",
      "Competències executives",
      "Competències exclusives",
      "Principi dispositiu"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. L’article 112 regula les competències executives.",
      incorrectes: [
        "Les compartides són a l’art. 111.",
        "Les exclusives són a l’art. 110.",
        "El principi dispositiu no està en aquest article."
      ]
    }
  },

  // ===============================
  // 🔹 TRAMPA (5)
  // ===============================

  {
    pregunta: "En una competència exclusiva, la Generalitat pot ignorar els títols estatals de l’art. 149.1 CE?",
    opcions: [
      "Sí, perquè és exclusiva",
      "Sí, si la matèria està a l’EAC",
      "No, ha de respectar els títols transversals estatals",
      "Depèn del Govern central"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. L’exclusivitat és relativa i ha de respectar els títols estatals transversals.",
      incorrectes: [
        "Exclusiva no vol dir il·limitada.",
        "L’EAC no pot impedir l’exercici de competències estatals.",
        "No depèn d’una decisió política."
      ]
    }
  },

  {
    pregunta: "Existeix jerarquia entre llei estatal i llei autonòmica?",
    opcions: [
      "Sí, sempre preval la llei estatal",
      "No, regeix el principi de competència",
      "Sí, si és llei orgànica",
      "Sí, si és reglament estatal"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. No hi ha jerarquia sinó distribució competencial.",
      incorrectes: [
        "No hi ha prevalença automàtica.",
        "La naturalesa orgànica no altera el principi competencial.",
        "Un reglament no preval sobre una llei vàlida."
      ]
    }
  },

  {
    pregunta: "En competències executives, la Generalitat pot legislar?",
    opcions: [
      "Sí, en matèries complementàries",
      "No, només pot executar",
      "Sí, si l’Estat ho autoritza",
      "Sí, mitjançant decret llei"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. Només pot executar i organitzar.",
      incorrectes: [
        "No pot innovar l’ordenament.",
        "No depèn d’autorització política.",
        "El decret llei no altera el repartiment competencial."
      ]
    }
  },

  {
    pregunta: "La supletorietat del dret estatal és:",
    opcions: [
      "Un títol competencial",
      "Una regla per evitar buits legals",
      "Un principi jeràrquic",
      "Una competència exclusiva estatal"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. Evita llacunes però no atribueix competències.",
      incorrectes: [
        "No és títol competencial.",
        "No crea jerarquia.",
        "No és competència material."
      ]
    }
  },

  {
    pregunta: "En competències compartides, qui fixa les bases?",
    opcions: [
      "La Generalitat",
      "El Parlament de Catalunya",
      "L’Estat",
      "El Tribunal Constitucional"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. Les bases les fixa l’Estat.",
      incorrectes: [
        "La Generalitat desplega.",
        "El Parlament autonòmic no fixa bases estatals.",
        "El TC interpreta, no legisla."
      ]
    }
  },

  // ===============================
  // 🔹 CONTINGUT (10)
  // ===============================

  {
    pregunta: "Quines funcions integra una competència exclusiva?",
    opcions: [
      "Només execució",
      "Legislació i execució",
      "Legislació, reglament i execució",
      "Només reglament"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. Inclou legislació, reglament i execució.",
      incorrectes: [
        "És incomplet.",
        "Falta la potestat reglamentària.",
        "És insuficient."
      ]
    }
  },

  {
    pregunta: "En competències compartides, la Generalitat pot:",
    opcions: [
      "Fixar bases",
      "Desenvolupar legislativament les bases",
      "Ignorar les bases estatals",
      "Impedir aplicació estatal"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. Pot dictar legislació de desplegament.",
      incorrectes: [
        "Les bases són estatals.",
        "No pot ignorar-les.",
        "No pot impedir aplicació constitucional."
      ]
    }
  },

  {
    pregunta: "En competències executives, la Generalitat pot aprovar:",
    opcions: [
      "Lleis pròpies",
      "Reglaments d’organització",
      "Bases estatals",
      "Reformes constitucionals"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. Pot aprovar reglaments d’organització i execució.",
      incorrectes: [
        "No pot legislar.",
        "Les bases les fixa l’Estat.",
        "No és competència autonòmica."
      ]
    }
  },

  {
    pregunta: "El marge autonòmic en competències executives és:",
    opcions: [
      "Màxim",
      "Mitjà",
      "Mínim",
      "Il·limitat"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. És mínim: mera gestió i aplicació.",
      incorrectes: [
        "No és màxim.",
        "No és mitjà.",
        "Mai és il·limitat."
      ]
    }
  },

  {
    pregunta: "En competències compartides, el binomi clau és:",
    opcions: [
      "Jerarquia / subordinació",
      "Bases / desplegament",
      "Llei / Constitució",
      "Supletorietat / prevalença"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. Bases estatals i desplegament autonòmic.",
      incorrectes: [
        "No hi ha jerarquia.",
        "No és aquesta la relació.",
        "Són regles diferents."
      ]
    }
  }

];

export default preguntes;