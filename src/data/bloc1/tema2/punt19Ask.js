const preguntes = [

  // ===============================
  // 🔹 LEGISLACIÓ (5)
  // ===============================

  {
    pregunta: "Quin article de la CE regula la prevalença i la supletorietat?",
    opcions: [
      "Article 148 CE",
      "Article 149.1 CE",
      "Article 149.3 CE",
      "Article 150 CE"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. L’article 149.3 CE estableix les clàusules de prevalença i supletorietat.",
      incorrectes: [
        "L’article 148 CE regula competències assumibles per les CA.",
        "L’article 149.1 CE enumera competències exclusives estatals.",
        "L’article 150 CE regula tècniques de transferència i harmonització."
      ]
    }
  },

  {
    pregunta: "La Comissió Bilateral Generalitat–Estat està prevista a:",
    opcions: [
      "Article 150 CE",
      "Article 183 EAC",
      "Article 161.2 CE",
      "Article 149.3 CE"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. L’article 183 EAC regula la Comissió Bilateral.",
      incorrectes: [
        "150 CE regula lleis marc, transferència i harmonització.",
        "161.2 CE regula la suspensió automàtica.",
        "149.3 CE regula prevalença i supletorietat."
      ]
    }
  },

  {
    pregunta: "L’article 161.2 CE preveu:",
    opcions: [
      "Transferència de competències",
      "Suspensió automàtica de normes autonòmiques impugnades pel Govern",
      "Lleis d’harmonització",
      "Clàusula residual"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. Permet la suspensió automàtica per un màxim de 5 mesos.",
      incorrectes: [
        "No regula transferències.",
        "Això és l’article 150.3 CE.",
        "La clàusula residual és a l’art. 149.3 CE."
      ]
    }
  },

  {
    pregunta: "Les lleis d’harmonització es regulen a:",
    opcions: [
      "Article 150.1 CE",
      "Article 150.2 CE",
      "Article 150.3 CE",
      "Article 149.3 CE"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. L’article 150.3 CE regula les lleis d’harmonització.",
      incorrectes: [
        "150.1 regula lleis marc.",
        "150.2 regula lleis de transferència o delegació.",
        "149.3 regula prevalença i supletorietat."
      ]
    }
  },

  {
    pregunta: "La via negocial prèvia en el recurs d’inconstitucionalitat està prevista a:",
    opcions: [
      "Article 33.2 LOTC",
      "Article 150 CE",
      "Article 183 EAC",
      "Article 149.3 CE"
    ],
    correcta: 0,
    explicacio: {
      correcta: "Correcte. L’article 33.2 LOTC permet allargar el termini fins a 9 mesos.",
      incorrectes: [
        "No regula el procediment constitucional.",
        "Regula cooperació institucional.",
        "Regula prevalença i supletorietat."
      ]
    }
  },

  // ===============================
  // 🔹 TRAMPA (5)
  // ===============================

  {
    pregunta: "Existeix jerarquia entre llei estatal i llei autonòmica?",
    opcions: [
      "Sí, sempre preval la llei estatal",
      "No, regeix el principi de competència",
      "Sí, si és llei orgànica",
      "Sí, si és posterior en el temps"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. No hi ha jerarquia sinó distribució competencial.",
      incorrectes: [
        "No hi ha prevalença general automàtica.",
        "La naturalesa orgànica no altera el principi competencial.",
        "El criteri temporal no és determinant."
      ]
    }
  },

  {
    pregunta: "La supletorietat permet a l’Estat legislar en qualsevol matèria?",
    opcions: [
      "Sí, sempre",
      "Només si ho demana el TC",
      "No, no és un títol competencial",
      "Sí, si la CA no ha legislat"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. La supletorietat no atribueix competències.",
      incorrectes: [
        "No és un poder general de legislació.",
        "El TC no concedeix competències.",
        "Encara que la CA no legisli, cal títol competencial estatal."
      ]
    }
  },

  {
    pregunta: "Tots els recursos al TC suspenen la norma impugnada?",
    opcions: [
      "Sí",
      "No, només si ho sol·licita la Generalitat",
      "No, només si impugna el Govern de l’Estat (art. 161.2 CE)",
      "Sí, en matèria econòmica"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. Només el Govern estatal pot provocar suspensió automàtica.",
      incorrectes: [
        "No és general.",
        "La Generalitat no té aquesta prerrogativa.",
        "No depèn de la matèria."
      ]
    }
  },

  {
    pregunta: "L’Estatut pot definir què és legislació bàsica estatal?",
    opcions: [
      "Sí",
      "Sí, si ho aprova el Parlament",
      "No, correspon al TC",
      "Sí, mitjançant llei orgànica"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. Segons la STC 31/2010, només el TC pot definir-ho.",
      incorrectes: [
        "L’EAC no pot condicionar el legislador estatal.",
        "El Parlament autonòmic no té aquesta potestat.",
        "Una llei orgànica no altera aquesta doctrina."
      ]
    }
  },

  {
    pregunta: "La prevalença s’aplica sempre que hi ha conflicte normatiu?",
    opcions: [
      "Sí, sempre",
      "Només si la competència autonòmica no és exclusiva",
      "Mai",
      "Només si el TC ho declara expressament"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. No opera si la competència és exclusiva autonòmica.",
      incorrectes: [
        "No és automàtica.",
        "Sí que pot aplicar-se en determinats casos.",
        "No cal declaració expressa prèvia."
      ]
    }
  },

  // ===============================
  // 🔹 CONTINGUT (10)
  // ===============================

  {
    pregunta: "El principi que regeix les relacions normatives Estat-CA és:",
    opcions: [
      "Jerarquia",
      "Competència",
      "Subordinació",
      "Preeminència estatal absoluta"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. El sistema es basa en el principi de competència.",
      incorrectes: [
        "No hi ha jerarquia general.",
        "No existeix subordinació estructural.",
        "No hi ha supremacia normativa absoluta."
      ]
    }
  },

  {
    pregunta: "La Comissió Bilateral té com a funció principal:",
    opcions: [
      "Resoldre conflictes judicials",
      "Coordinació política permanent",
      "Substituir el TC",
      "Aprovar lleis estatals"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. És marc permanent de relació i cooperació.",
      incorrectes: [
        "No és òrgan jurisdiccional.",
        "No substitueix el TC.",
        "No té potestat legislativa."
      ]
    }
  },

  {
    pregunta: "Les lleis marc permeten:",
    opcions: [
      "Harmonitzar legislació autonòmica",
      "Delegar competències executives",
      "Atribuir facultat legislativa autonòmica dins principis estatals",
      "Modificar la Constitució"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. Permeten atribuir facultat legislativa en matèria estatal.",
      incorrectes: [
        "Això són lleis d’harmonització.",
        "Això correspon a 150.2 CE.",
        "No alteren la Constitució."
      ]
    }
  },

  {
    pregunta: "Les lleis d’harmonització requereixen:",
    opcions: [
      "Majoría simple",
      "Majoría absoluta del Congrés i Senat",
      "Referèndum",
      "Autorització del TC"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. Requereixen majoria absoluta en ambdues cambres.",
      incorrectes: [
        "No és majoria simple.",
        "No exigeixen referèndum.",
        "No requereixen autorització prèvia del TC."
      ]
    }
  }

];

export default preguntes;