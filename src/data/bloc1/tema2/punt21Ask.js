const preguntes = [

  // ===============================
  // 🔹 LEGISLACIÓ (5)
  // ===============================

  {
    pregunta: "Quin article de l’EAC regula la Comissió Bilateral Generalitat–Estat?",
    opcions: [
      "Article 164.4 EAC",
      "Article 183 EAC",
      "Article 210 EAC",
      "Article 3.1 EAC"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. L’article 183 EAC regula la Comissió Bilateral com a marc general i permanent de relació.",
      incorrectes: [
        "164.4 EAC regula la Junta de Seguretat.",
        "210 EAC regula la Comissió Mixta d’Afers Econòmics i Fiscals.",
        "3.1 EAC proclama principis generals, inclosa la bilateralitat."
      ]
    }
  },

  {
    pregunta: "L’article 210 EAC regula:",
    opcions: [
      "La Comissió Bilateral",
      "La Junta de Seguretat",
      "La Comissió Mixta d’Afers Econòmics i Fiscals",
      "El Consell de Política Fiscal i Financera"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. L’article 210 EAC regula la Comissió Mixta d’Afers Econòmics i Fiscals.",
      incorrectes: [
        "La Comissió Bilateral és a l’art. 183 EAC.",
        "La Junta de Seguretat és a l’art. 164.4 EAC.",
        "El CPFF és un òrgan multilateral estatal."
      ]
    }
  },

  {
    pregunta: "Quin article CE regula la suspensió automàtica de normes autonòmiques?",
    opcions: [
      "Article 150 CE",
      "Article 149.3 CE",
      "Article 161.2 CE",
      "Article 155 CE"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. L’article 161.2 CE permet la suspensió automàtica si el Govern de l’Estat impugna una norma autonòmica.",
      incorrectes: [
        "150 CE regula lleis marc, transferència i harmonització.",
        "149.3 CE regula prevalença i supletorietat.",
        "155 CE regula mesures coercitives."
      ]
    }
  },

  {
    pregunta: "La via negociadora prèvia que amplia el termini a 9 mesos està regulada a:",
    opcions: [
      "Article 33.2 LOTC",
      "Article 161.2 CE",
      "Article 183 EAC",
      "Article 149.1 CE"
    ],
    correcta: 0,
    explicacio: {
      correcta: "Correcte. L’article 33.2 LOTC permet ampliar el termini de recurs d’inconstitucionalitat fins a 9 mesos.",
      incorrectes: [
        "161.2 CE regula la suspensió automàtica.",
        "183 EAC regula la Comissió Bilateral.",
        "149.1 CE enumera competències estatals."
      ]
    }
  },

  {
    pregunta: "La Junta de Seguretat està regulada a:",
    opcions: [
      "Article 183 EAC",
      "Article 164.4 EAC",
      "Article 210 EAC",
      "Article 3.1 EAC"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. L’article 164.4 EAC regula la Junta de Seguretat.",
      incorrectes: [
        "183 EAC regula la Comissió Bilateral.",
        "210 EAC regula la Comissió Mixta financera.",
        "3.1 EAC proclama principis generals."
      ]
    }
  },

  // ===============================
  // 🔹 TRAMPA (5)
  // ===============================

  {
    pregunta: "Els acords de la Comissió Bilateral tenen valor de llei?",
    opcions: [
      "Sí, sempre",
      "Sí, si són aprovats per majoria absoluta",
      "No, són acords polítics o administratius",
      "Sí, si afecten competències exclusives"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. Els acords no tenen rang de llei i sovint requereixen formalització posterior.",
      incorrectes: [
        "No tenen rang legal directe.",
        "La majoria no els converteix en llei.",
        "El tipus de competència no altera la seva naturalesa."
      ]
    }
  },

  {
    pregunta: "La Comissió Bilateral és presidida sempre pel President de la Generalitat?",
    opcions: [
      "Sí",
      "No, la presidència és alternativa anual",
      "Sí, segons la STC 31/2010",
      "Només en matèria financera"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. La presidència és alternativa entre Estat i Generalitat.",
      incorrectes: [
        "No és presidència fixa.",
        "La STC no estableix això.",
        "No depèn de la matèria."
      ]
    }
  },

  {
    pregunta: "La bilateralitat pot substituir el CPFF?",
    opcions: [
      "Sí, en matèria financera",
      "Sí, si hi ha acord polític",
      "No, segons la STC 31/2010",
      "Sí, si ho decideix el Parlament"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. La bilateralitat és complementària i no pot excloure òrgans multilaterals.",
      incorrectes: [
        "No pot substituir-lo.",
        "No depèn d’acords polítics.",
        "El Parlament no pot alterar el sistema constitucional."
      ]
    }
  },

  {
    pregunta: "La Generalitat pot imposar models organitzatius al legislador estatal mitjançant l’EAC?",
    opcions: [
      "Sí",
      "Només en competències exclusives",
      "No, segons la STC 31/2010",
      "Sí, si hi ha acord bilateral"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. L’Estatut és poder constituït i no pot imposar models al legislador estatal.",
      incorrectes: [
        "No té aquesta potestat.",
        "El tipus de competència no altera aquest límit.",
        "L’acord bilateral no vincula el legislador estatal."
      ]
    }
  },

  {
    pregunta: "El recurs de la Generalitat contra una llei estatal produeix suspensió automàtica?",
    opcions: [
      "Sí",
      "No",
      "Només si ho acorda el TC",
      "Només si afecta competències exclusives"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. Només el Govern de l’Estat pot provocar suspensió automàtica (art. 161.2 CE).",
      incorrectes: [
        "No existeix aquesta suspensió.",
        "El TC no suspèn automàticament en aquest cas.",
        "No depèn del tipus competencial."
      ]
    }
  },

  // ===============================
  // 🔹 CONTINGUT (10)
  // ===============================

  {
    pregunta: "El principi de lleialtat institucional implica:",
    opcions: [
      "Subordinació jeràrquica",
      "Ignorar interessos estatals",
      "Considerar els interessos de l’altra part",
      "Renunciar a competències pròpies"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. Implica actuar tenint en compte els interessos de l’altra instància.",
      incorrectes: [
        "No hi ha jerarquia.",
        "No es poden ignorar interessos.",
        "No implica renúncia competencial."
      ]
    }
  },

  {
    pregunta: "La bilateralitat es diferencia de la multilateralitat perquè:",
    opcions: [
      "Inclou totes les CCAA",
      "És exclusiva Estat-Generalitat",
      "És judicial",
      "No té base estatutària"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. La bilateralitat és relació exclusiva entre dos governs.",
      incorrectes: [
        "Això és multilateralitat.",
        "No és via judicial.",
        "Sí té base estatutària."
      ]
    }
  },

  {
    pregunta: "La Comissió Bilateral és:",
    opcions: [
      "Òrgan sobirà",
      "Òrgan de cooperació",
      "Tribunal administratiu",
      "Òrgan legislatiu"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. És un òrgan de cooperació i participació.",
      incorrectes: [
        "No és sobirà.",
        "No és tribunal.",
        "No té funció legislativa."
      ]
    }
  },

  {
    pregunta: "La Junta de Seguretat coordina:",
    opcions: [
      "Polítiques fiscals",
      "Tribunals",
      "Policia Generalitat i Forces Estat",
      "Infraestructures estatals"
    ],
    correcta: 2,
    explicacio: {
      correcta: "Correcte. Coordina cossos policials.",
      incorrectes: [
        "No tracta fiscalitat.",
        "No coordina tribunals.",
        "No regula infraestructures."
      ]
    }
  },

  {
    pregunta: "El bloc de la constitucionalitat serveix per:",
    opcions: [
      "Modificar competències",
      "Dirimir conflictes competencials",
      "Substituir la CE",
      "Regular pressupostos"
    ],
    correcta: 1,
    explicacio: {
      correcta: "Correcte. És el paràmetre utilitzat pel TC per resoldre conflictes.",
      incorrectes: [
        "No modifica competències.",
        "No substitueix la CE.",
        "No regula pressupostos."
      ]
    }
  }

];

export default preguntes;