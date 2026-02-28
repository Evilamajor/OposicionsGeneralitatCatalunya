const punt17Ask = [

  /* ============================
     5 PREGUNTES TRAMPA
  ============================ */

  {
    id: 1,
    type: "trampa",
    question: "Existeix jerarquia entre una llei estatal i una llei autonòmica?",
    options: [
      "Sí, sempre preval la llei estatal.",
      "Sí, perquè l’Estat és sobirà.",
      "No, regeix el principi de competència.",
      "Depèn de la matèria."
    ],
    correct: 2,
    explanation: {
      correct: "No hi ha jerarquia entre llei estatal i autonòmica; regeix el principi de competència (art. 149.3 CE).",
      incorrect: [
        "La prevalença no implica jerarquia general.",
        "La sobirania no altera el principi de competència.",
        "No depèn de la matèria sinó del títol competencial."
      ]
    }
  },

  {
    id: 2,
    type: "trampa",
    question: "En competències compartides, les bases estatals han d’estar sempre en una llei?",
    options: [
      "Sí, obligatòriament.",
      "No, poden ser reglamentàries de forma excepcional segons el TC.",
      "Sí, segons l’art. 111 EAC.",
      "Només si ho autoritza el Parlament."
    ],
    correct: 1,
    explanation: {
      correct: "La STC 31/2010 estableix que excepcionalment les bases poden estar en normes reglamentàries.",
      incorrect: [
        "No és obligatori rang de llei.",
        "L’EAC ho preveia però el TC ho va limitar.",
        "No depèn d’autorització parlamentària."
      ]
    }
  },

  {
    id: 3,
    type: "trampa",
    question: "Si una matèria no apareix ni a la CE ni a l’EAC, la competència correspon:",
    options: [
      "A la Generalitat.",
      "A l’Estat per aplicació de la clàusula residual.",
      "Al Tribunal Constitucional.",
      "A qui legisli primer."
    ],
    correct: 1,
    explanation: {
      correct: "Segons l’art. 149.3 CE, si no s’assumeix estatutàriament, correspon a l’Estat.",
      incorrect: [
        "No correspon automàticament a la Generalitat.",
        "El TC no assumeix competències materials.",
        "No s’aplica criteri cronològic."
      ]
    }
  },

  {
    id: 4,
    type: "trampa",
    question: "En competències executives, la Generalitat pot dictar lleis?",
    options: [
      "Sí, en matèries d’execució.",
      "No, només exerceix funció executiva i reglamentària d’organització.",
      "Sí, si l’Estat no legisla.",
      "Depèn del tipus de matèria."
    ],
    correct: 1,
    explanation: {
      correct: "En competències executives (art. 112 EAC), la Generalitat només executa.",
      incorrect: [
        "No pot legislar.",
        "L’absència de llei estatal no converteix la competència en legislativa.",
        "No depèn del tipus de matèria sinó de la tipologia competencial."
      ]
    }
  },

  {
    id: 5,
    type: "trampa",
    question: "Una competència exclusiva de la Generalitat és absoluta i sense límits?",
    options: [
      "Sí, perquè és exclusiva.",
      "No, ha de respectar títols competencials estatals transversals.",
      "Sí, excepte en economia.",
      "Només si ho valida el TC."
    ],
    correct: 1,
    explanation: {
      correct: "Les competències exclusives poden quedar afectades per títols estatals com l’art. 149.1.13 CE.",
      incorrect: [
        "No són absolutament immunes.",
        "No és una excepció només econòmica.",
        "No depèn d’una validació prèvia del TC."
      ]
    }
  },

  /* ============================
     5 PREGUNTES LEGISLACIÓ
  ============================ */

  {
    id: 6,
    type: "legislacio",
    question: "Les competències exclusives estan regulades a:",
    options: [
      "Article 111 EAC.",
      "Article 110 EAC.",
      "Article 112 EAC.",
      "Article 149 CE."
    ],
    correct: 1,
    explanation: {
      correct: "L’art. 110 EAC defineix les competències exclusives.",
      incorrect: [
        "111 regula compartides.",
        "112 regula executives.",
        "149 CE regula competències estatals."
      ]
    }
  },

  {
    id: 7,
    type: "legislacio",
    question: "Les competències compartides estan regulades a:",
    options: [
      "Article 110 EAC.",
      "Article 111 EAC.",
      "Article 112 EAC.",
      "Article 148 CE."
    ],
    correct: 1,
    explanation: {
      correct: "L’art. 111 EAC regula les competències compartides.",
      incorrect: [
        "110 és exclusives.",
        "112 és executives.",
        "148 CE no classifica competències estatutàries."
      ]
    }
  },

  {
    id: 8,
    type: "legislacio",
    question: "La clàusula residual es troba a:",
    options: [
      "Art. 148 CE.",
      "Art. 149.1 CE.",
      "Art. 149.3 CE.",
      "Art. 110 EAC."
    ],
    correct: 2,
    explanation: {
      correct: "L’art. 149.3 CE conté la clàusula residual.",
      incorrect: [
        "148 no regula residualitat.",
        "149.1 enumera matèries estatals.",
        "110 EAC no és constitucional."
      ]
    }
  },

  {
    id: 9,
    type: "legislacio",
    question: "La STC 31/2010 va establir que:",
    options: [
      "L’EAC pot definir definitivament les bases estatals.",
      "Només el TC pot definir què és legislació bàsica.",
      "Les bases han de ser sempre llei.",
      "L’Estat no pot incidir en competències exclusives."
    ],
    correct: 1,
    explanation: {
      correct: "La STC 31/2010 reafirma que el TC defineix què és bàsic.",
      incorrect: [
        "L’EAC no vincula el TC.",
        "No sempre han de ser llei.",
        "L’Estat pot incidir amb títols transversals."
      ]
    }
  },

  {
    id: 10,
    type: "legislacio",
    question: "Les competències executives estan regulades a:",
    options: [
      "Art. 110 EAC.",
      "Art. 111 EAC.",
      "Art. 112 EAC.",
      "Art. 149.3 CE."
    ],
    correct: 2,
    explanation: {
      correct: "L’art. 112 EAC regula les competències executives.",
      incorrect: [
        "110 és exclusives.",
        "111 és compartides.",
        "149.3 CE no classifica competències autonòmiques."
      ]
    }
  },

  /* ============================
     10 PREGUNTES DE CONTINGUT
  ============================ */

  {
    id: 11,
    type: "contingut",
    question: "En competències compartides, l’Estat fixa:",
    options: [
      "L’execució.",
      "Les bases.",
      "El reglament autonòmic.",
      "L’organització administrativa autonòmica."
    ],
    correct: 1,
    explanation: {
      correct: "L’Estat fixa les bases o mínim comú normatiu.",
      incorrect: [
        "L’execució correspon a la Generalitat.",
        "El reglament autonòmic no el dicta l’Estat.",
        "L’organització interna és autonòmica."
      ]
    }
  },

  {
    id: 12,
    type: "contingut",
    question: "En competències executives, l’Estat conserva:",
    options: [
      "Només la llei.",
      "Només el reglament.",
      "Tota la funció normativa.",
      "Cap funció."
    ],
    correct: 2,
    explanation: {
      correct: "L’Estat conserva tota la funció normativa (llei i reglament).",
      incorrect: [
        "No és només la llei.",
        "No és només reglament.",
        "No perd la competència normativa."
      ]
    }
  },

  {
    id: 13,
    type: "contingut",
    question: "El principi dispositiu implica que:",
    options: [
      "La CE atribueix directament totes les competències.",
      "L’Estatut determina les competències assumides dins el marc constitucional.",
      "El Parlament estatal decideix les competències autonòmiques.",
      "El TC reparteix competències."
    ],
    correct: 1,
    explanation: {
      correct: "L’Estatut concreta quines competències assumeix la CA dins el marc CE.",
      incorrect: [
        "La CE no atribueix totes directament.",
        "No és decisió unilateral estatal.",
        "El TC interpreta, no reparteix originàriament."
      ]
    }
  },

  {
    id: 14,
    type: "contingut",
    question: "El bloc de la constitucionalitat inclou:",
    options: [
      "Només la CE.",
      "CE, EAC i lleis de l’art. 150 CE.",
      "Només l’EAC.",
      "Només jurisprudència."
    ],
    correct: 1,
    explanation: {
      correct: "Inclou CE, Estatuts i lleis de l’art. 150 CE.",
      incorrect: [
        "No és només CE.",
        "No és només EAC.",
        "No és només jurisprudència."
      ]
    }
  },

  {
    id: 15,
    type: "contingut",
    question: "Les competències exclusives inclouen:",
    options: [
      "Només execució.",
      "Legislació, reglament i execució.",
      "Només legislació.",
      "Només reglament."
    ],
    correct: 1,
    explanation: {
      correct: "Inclouen potestat legislativa, reglamentària i funció executiva.",
      incorrect: [
        "No és només execució.",
        "No és només legislació.",
        "No és només reglament."
      ]
    }
  },

  {
    id: 16,
    type: "contingut",
    question: "La prevalença del dret estatal s’aplica:",
    options: [
      "Sempre.",
      "Només en matèries exclusives autonòmiques.",
      "En cas de conflicte en matèries no exclusives autonòmiques.",
      "Mai."
    ],
    correct: 2,
    explanation: {
      correct: "S’aplica en cas de conflicte en matèries no atribuïdes en exclusiva a la CA.",
      incorrect: [
        "No és absoluta.",
        "No s’aplica en exclusives autonòmiques.",
        "No és incorrecte afirmar que mai."
      ]
    }
  },

  {
    id: 17,
    type: "contingut",
    question: "La supletorietat implica que:",
    options: [
      "El dret estatal substitueix l’autonòmic.",
      "El dret estatal cobreix llacunes del dret autonòmic.",
      "L’Estat pot legislar en qualsevol matèria.",
      "La Generalitat pot ignorar la norma estatal."
    ],
    correct: 1,
    explanation: {
      correct: "La supletorietat permet cobrir llacunes normatives.",
      incorrect: [
        "No substitueix competències.",
        "No amplia competències estatals.",
        "No permet ignorar la norma estatal."
      ]
    }
  },

  {
    id: 18,
    type: "contingut",
    question: "Un exemple de competència executiva és:",
    options: [
      "Agricultura.",
      "Ordenació del territori.",
      "Execució de la legislació laboral.",
      "Cultura."
    ],
    correct: 2,
    explanation: {
      correct: "L’execució de la legislació laboral és exemple de competència executiva.",
      incorrect: [
        "Agricultura és exclusiva.",
        "Ordenació del territori és exclusiva.",
        "Cultura és habitualment exclusiva."
      ]
    }
  },

  {
    id: 19,
    type: "contingut",
    question: "Qui determina en última instància què és legislació bàsica?",
    options: [
      "El Parlament.",
      "El Govern.",
      "El Tribunal Constitucional.",
      "La Generalitat."
    ],
    correct: 2,
    explanation: {
      correct: "El TC és l’intèrpret suprem del repartiment competencial.",
      incorrect: [
        "No és competència exclusiva del Parlament.",
        "No és decisió del Govern.",
        "La Generalitat no defineix unilateralment el concepte."
      ]
    }
  },

  {
    id: 20,
    type: "contingut",
    question: "En competències compartides, la Generalitat pot:",
    options: [
      "Només executar.",
      "Desplegar legislativament les bases estatals.",
      "Modificar les bases estatals.",
      "Ignorar la normativa estatal."
    ],
    correct: 1,
    explanation: {
      correct: "Pot aprovar lleis de desplegament respectant les bases estatals.",
      incorrect: [
        "No és només execució.",
        "No pot modificar les bases.",
        "No pot ignorar normativa estatal."
      ]
    }
  }

];

export default punt17Ask;