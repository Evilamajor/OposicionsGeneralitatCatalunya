export const punt1Ask = {
  title: "Bloc I · Tema 3 · Punt 1 — El Parlament de Catalunya: composició i funcions",
  questions: [

    /* =========================
       5 PREGUNTES DE LEGISLACIÓ
    ========================== */

    {
      type: "legislacio",
      question: "Segons l'article 152.1 CE, l'organització institucional bàsica de determinades comunitats autònomes ha d'incloure:",
      options: [
        "Un govern elegit directament pel poble.",
        "Una assemblea legislativa elegida per sufragi universal.",
        "Un senat territorial propi.",
        "Un tribunal constitucional autonòmic."
      ],
      correct: 1,
      explanationCorrect: "L'article 152.1 CE exigeix una assemblea legislativa elegida per sufragi universal en les comunitats que accedeixen per la via de l'art. 151 CE.",
      explanationIncorrect: [
        "Incorrecte. El Govern no és elegit directament pel poble sinó pel Parlament.",
        "",
        "Incorrecte. No existeix un senat territorial autonòmic obligatori.",
        "Incorrecte. No es preveu un tribunal constitucional autonòmic."
      ]
    },

    {
      type: "legislacio",
      question: "L’article 56.1 EAC estableix que el Parlament es compon de:",
      options: [
        "Entre 50 i 100 diputats.",
        "Entre 100 i 150 diputats.",
        "Exactament 135 diputats.",
        "Entre 120 i 150 diputats."
      ],
      correct: 1,
      explanationCorrect: "L'article 56.1 EAC fixa el marge entre 100 i 150 diputats.",
      explanationIncorrect: [
        "Incorrecte. No és el marge estatutari.",
        "",
        "Incorrecte. 135 és el nombre actual, però no és el que fixa l'Estatut.",
        "Incorrecte. El marge estatutari és més ampli."
      ]
    },

    {
      type: "legislacio",
      question: "Les lleis de desenvolupament bàsic de l’Estatut requereixen:",
      options: [
        "Majoritat simple.",
        "Majoritat absoluta.",
        "Majoritat de 3/5.",
        "Referèndum obligatori."
      ],
      correct: 1,
      explanationCorrect: "Segons l'article 62.2 EAC, requereixen majoria absoluta del Ple.",
      explanationIncorrect: [
        "Incorrecte. No n'hi ha prou amb majoria simple.",
        "",
        "Incorrecte. No s'exigeix majoria qualificada de 3/5.",
        "Incorrecte. No requereixen referèndum."
      ]
    },

    {
      type: "legislacio",
      question: "El Parlament és inviolable segons:",
      options: [
        "Article 2 CE.",
        "Article 55.3 EAC.",
        "Article 67 CE.",
        "Article 150.2 CE."
      ],
      correct: 1,
      explanationCorrect: "L'article 55.3 EAC estableix la inviolabilitat del Parlament.",
      explanationIncorrect: [
        "Incorrecte. L'article 2 CE regula la unitat de la Nació.",
        "",
        "Incorrecte. L'article 67 CE regula incompatibilitats parlamentàries estatals.",
        "Incorrecte. L'article 150.2 CE regula transferències competencials."
      ]
    },

    {
      type: "legislacio",
      question: "La participació del Parlament en el control de subsidiarietat a la UE està prevista a:",
      options: [
        "Article 188 EAC.",
        "Article 152 CE.",
        "Article 62 EAC.",
        "Article 55 EAC."
      ],
      correct: 0,
      explanationCorrect: "L'article 188 EAC regula la participació del Parlament en assumptes europeus.",
      explanationIncorrect: [
        "",
        "Incorrecte. 152 CE regula l'estructura institucional autonòmica.",
        "Incorrecte. 62 EAC regula funció legislativa.",
        "Incorrecte. 55 EAC regula naturalesa del Parlament."
      ]
    },

    /* =========================
       5 PREGUNTES TRAMPA
    ========================== */

    {
      type: "trampa",
      question: "El Parlament de Catalunya és un òrgan sobirà.",
      options: [
        "Sí, perquè representa el poble de Catalunya.",
        "Sí, dins del seu àmbit competencial.",
        "No, és un poder constituït dins la CE.",
        "Només segons l’EAC."
      ],
      correct: 2,
      explanationCorrect: "És poder constituït i no sobirà; la sobirania resideix en el poble espanyol (art. 1.2 CE).",
      explanationIncorrect: [
        "Incorrecte. Representar el poble no implica sobirania.",
        "Incorrecte. No existeix sobirania parcial.",
        "",
        "Incorrecte. L'EAC no pot atribuir sobirania."
      ]
    },

    {
      type: "trampa",
      question: "La inviolabilitat del Parlament implica que:",
      options: [
        "No pot ser dissolt.",
        "No pot ser controlat pel TC.",
        "No pot ser objecte de registre judicial.",
        "Les seves lleis no poden ser anul·lades."
      ],
      correct: 2,
      explanationCorrect: "La inviolabilitat protegeix la seu i independència institucional.",
      explanationIncorrect: [
        "Incorrecte. Pot ser dissolt.",
        "Incorrecte. El TC pot controlar les seves lleis.",
        "",
        "Incorrecte. Les seves lleis són controlables."
      ]
    },

    {
      type: "trampa",
      question: "Els diputats del Parlament poden ser simultàniament diputats al Congrés:",
      options: [
        "Sí, sense límit.",
        "Sí, si ho permet el Reglament.",
        "No, és incompatible segons l’art. 67.1 CE.",
        "Només en períodes extraordinaris."
      ],
      correct: 2,
      explanationCorrect: "L’article 67.1 CE estableix incompatibilitat entre cambres.",
      explanationIncorrect: [
        "Incorrecte. No és compatible.",
        "Incorrecte. No depèn del Reglament.",
        "",
        "Incorrecte. No existeix aquesta excepció."
      ]
    },

    {
      type: "trampa",
      question: "La funció pressupostària correspon principalment:",
      options: [
        "Al Govern.",
        "Al Parlament.",
        "Al Tribunal de Comptes.",
        "Al President."
      ],
      correct: 1,
      explanationCorrect: "El Parlament aprova els pressupostos.",
      explanationIncorrect: [
        "Incorrecte. El Govern elabora el projecte.",
        "",
        "Incorrecte. El Tribunal fiscalitza.",
        "Incorrecte. El President no aprova pressupostos."
      ]
    },

    {
      type: "trampa",
      question: "La STC 31/2010 va declarar inconstitucional el Parlament.",
      options: [
        "Sí, totalment.",
        "Sí, parcialment.",
        "No, només va interpretar preceptes de l’EAC.",
        "Va suspendre’l temporalment."
      ],
      correct: 2,
      explanationCorrect: "La STC 31/2010 va interpretar i anul·lar alguns preceptes estatutaris, no el Parlament.",
      explanationIncorrect: [
        "Incorrecte. No va anul·lar la institució.",
        "Incorrecte. No va afectar la seva existència.",
        "",
        "Incorrecte. No hi va haver suspensió institucional."
      ]
    },

    /* =========================
       10 PREGUNTES DE CONTINGUT
    ========================== */

    {
      type: "contingut",
      question: "El sistema electoral del Parlament és:",
      options: [
        "Majoritari.",
        "Proporcional.",
        "Mixt.",
        "Indirecte."
      ],
      correct: 1,
      explanationCorrect: "L'article 152.1 CE exigeix sistema proporcional.",
      explanationIncorrect: [
        "Incorrecte. No és majoritari.",
        "",
        "Incorrecte. No és sistema mixt.",
        "Incorrecte. L'elecció és directa."
      ]
    },

    {
      type: "contingut",
      question: "La Mesa del Parlament és:",
      options: [
        "L’òrgan jurisdiccional intern.",
        "L’òrgan rector de la cambra.",
        "Un òrgan del Govern.",
        "Un òrgan consultiu."
      ],
      correct: 1,
      explanationCorrect: "La Mesa dirigeix i ordena els treballs parlamentaris.",
      explanationIncorrect: [
        "Incorrecte. No exerceix funcions jurisdiccionals.",
        "",
        "Incorrecte. No forma part del Govern.",
        "Incorrecte. No és merament consultiu."
      ]
    },

    {
      type: "contingut",
      question: "La Diputació Permanent actua:",
      options: [
        "Només durant la legislatura ordinària.",
        "Quan el Parlament està dissolt o fora de període.",
        "Sempre substituint el Ple.",
        "Només en casos d’emergència."
      ],
      correct: 1,
      explanationCorrect: "Vetlla pels poders del Parlament fora de períodes ordinaris.",
      explanationIncorrect: [
        "Incorrecte. Actua especialment fora del període ordinari.",
        "",
        "Incorrecte. No substitueix permanentment el Ple.",
        "Incorrecte. No es limita a emergències."
      ]
    },

    {
      type: "contingut",
      question: "La funció de control s’exerceix mitjançant:",
      options: [
        "Sentències.",
        "Preguntes i interpel·lacions.",
        "Reglaments.",
        "Ordres executives."
      ],
      correct: 1,
      explanationCorrect: "El control polític es realitza mitjançant preguntes, interpel·lacions i mocions.",
      explanationIncorrect: [
        "Incorrecte. Les sentències corresponen al poder judicial.",
        "",
        "Incorrecte. Els reglaments són potestat del Govern.",
        "Incorrecte. No existeixen ordres executives parlamentàries."
      ]
    },

    {
      type: "contingut",
      question: "El Parlament pot interposar:",
      options: [
        "Recursos d’inconstitucionalitat.",
        "Recursos de cassació.",
        "Ordres ministerials.",
        "Decrets llei."
      ],
      correct: 0,
      explanationCorrect: "Pot defensar l’autonomia mitjançant recurs d’inconstitucionalitat.",
      explanationIncorrect: [
        "",
        "Incorrecte. La cassació és judicial.",
        "Incorrecte. Les ordres ministerials són estatals.",
        "Incorrecte. Els decrets llei els dicta el Govern."
      ]
    },

    {
      type: "contingut",
      question: "El mandat dels diputats és de:",
      options: [
        "Tres anys.",
        "Quatre anys.",
        "Cinc anys.",
        "Sis anys."
      ],
      correct: 1,
      explanationCorrect: "La legislatura té una durada de quatre anys.",
      explanationIncorrect: [
        "Incorrecte.",
        "",
        "Incorrecte.",
        "Incorrecte."
      ]
    },

    {
      type: "contingut",
      question: "El principi que defineix la relació amb el Govern és:",
      options: [
        "Separació rígida de poders.",
        "Confiança parlamentària.",
        "Subordinació executiva.",
        "Jerarquia administrativa."
      ],
      correct: 1,
      explanationCorrect: "El sistema és parlamentari i basat en la confiança.",
      explanationIncorrect: [
        "Incorrecte. No hi ha separació rígida.",
        "",
        "Incorrecte. No és subordinació administrativa.",
        "Incorrecte."
      ]
    },

    {
      type: "contingut",
      question: "Els grups parlamentaris requereixen:",
      options: [
        "2 membres.",
        "3 membres.",
        "5 membres.",
        "10 membres."
      ],
      correct: 2,
      explanationCorrect: "Es requereix un mínim de cinc membres.",
      explanationIncorrect: [
        "Incorrecte.",
        "Incorrecte.",
        "",
        "Incorrecte."
      ]
    },

    {
      type: "contingut",
      question: "Les lleis del Parlament estan sotmeses:",
      options: [
        "Només al control polític.",
        "Al control del Tribunal Constitucional.",
        "Al control del Govern.",
        "A cap control."
      ],
      correct: 1,
      explanationCorrect: "Estan sotmeses al control de constitucionalitat.",
      explanationIncorrect: [
        "Incorrecte.",
        "",
        "Incorrecte.",
        "Incorrecte."
      ]
    },

    {
      type: "contingut",
      question: "El Parlament és l’únic òrgan que:",
      options: [
        "Dirigeix l’Administració.",
        "Concentra la representació política directa del poble català.",
        "Exerceix potestat reglamentària.",
        "Nomena tots els càrrecs públics."
      ],
      correct: 1,
      explanationCorrect: "És l’únic òrgan amb representació política directa.",
      explanationIncorrect: [
        "Incorrecte. Dirigir l’Administració correspon al Govern.",
        "",
        "Incorrecte. La potestat reglamentària és del Govern.",
        "Incorrecte."
      ]
    }

  ]
};