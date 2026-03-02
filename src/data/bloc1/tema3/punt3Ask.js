// src/data/bloc-1/tema-3/ask/punt3Ask.js
export const punt3Ask = {
  title: "Bloc I · Tema 3 · Punt 3 — Funció legislativa i procediment parlamentari",
  questions: [

    /* =========================
       5 PREGUNTES DE LEGISLACIÓ
    ========================== */

    {
      type: "legislacio",
      question: "Segons l’article 66.2 CE, qui exerceix la potestat legislativa de l’Estat?",
      options: [
        "El Govern de l’Estat",
        "El Tribunal Constitucional",
        "Les Corts Generals",
        "El Consell d’Estat"
      ],
      correct: 2,
      explanationCorrect: "L’art. 66.2 CE estableix que les Corts Generals exerceixen la potestat legislativa de l’Estat.",
      explanationIncorrect: [
        "Incorrecte. El Govern exerceix funció executiva i potestat reglamentària, no la legislativa estatal.",
        "Incorrecte. El TC controla la constitucionalitat, no exerceix potestat legislativa.",
        "",
        "Incorrecte. El Consell d’Estat és un òrgan consultiu."
      ]
    },

    {
      type: "legislacio",
      question: "Quin precepte constitucional predetermina l’existència d’una assemblea legislativa autonòmica elegida per sufragi universal amb representació proporcional?",
      options: [
        "Art. 152.1 CE",
        "Art. 23 CE",
        "Art. 161.2 CE",
        "Art. 79.3 CE"
      ],
      correct: 0,
      explanationCorrect: "L’art. 152.1 CE exigeix una assemblea legislativa elegida per sufragi universal amb representació proporcional.",
      explanationIncorrect: [
        "",
        "Incorrecte. L’art. 23 CE regula el dret de participació política, no el model institucional autonòmic.",
        "Incorrecte. L’art. 161.2 CE regula la suspensió per impugnació del Govern de l’Estat.",
        "Incorrecte. L’art. 79.3 CE regula la regla general de vot personal i indelegable."
      ]
    },

    {
      type: "legislacio",
      question: "Quin article de l’EAC estableix que el Parlament representa el poble de Catalunya i exerceix la potestat legislativa?",
      options: [
        "Art. 55 EAC",
        "Art. 56.2 EAC",
        "Art. 62.2 EAC",
        "Art. 188 EAC"
      ],
      correct: 0,
      explanationCorrect: "L’art. 55 EAC atribueix al Parlament la representació del poble i la potestat legislativa.",
      explanationIncorrect: [
        "",
        "Incorrecte. L’art. 56.2 EAC regula la majoria reforçada per al règim electoral (2/3).",
        "Incorrecte. L’art. 62.2 EAC regula lleis de desenvolupament bàsic i majoria absoluta.",
        "Incorrecte. L’art. 188 EAC tracta participació i control en àmbit europeu."
      ]
    },

    {
      type: "legislacio",
      question: "Segons l’article 62.2 EAC, les lleis de desenvolupament bàsic de l’Estatut requereixen:",
      options: [
        "Majoritat simple",
        "Majoritat absoluta del Ple en votació final sobre el conjunt",
        "Majoritat de 2/3",
        "Referèndum obligatori"
      ],
      correct: 1,
      explanationCorrect: "L’art. 62.2 EAC exigeix majoria absoluta en la votació final sobre el conjunt del text.",
      explanationIncorrect: [
        "Incorrecte. No n’hi ha prou amb majoria simple.",
        "",
        "Incorrecte. La majoria de 2/3 és per al règim electoral (art. 56.2 EAC).",
        "Incorrecte. No hi ha referèndum obligatori per aquestes lleis."
      ]
    },

    {
      type: "legislacio",
      question: "Què preveu l’article 161.2 CE quan el Govern de l’Estat impugna una llei autonòmica?",
      options: [
        "La llei queda automàticament anul·lada",
        "La llei queda automàticament suspesa fins a un màxim de cinc mesos",
        "La llei queda suspesa indefinidament fins a sentència",
        "No hi ha cap efecte automàtic sobre la vigència"
      ],
      correct: 1,
      explanationCorrect: "L’art. 161.2 CE preveu la suspensió automàtica, amb un límit màxim de cinc mesos, fins que el TC decideixi si manté o aixeca la suspensió.",
      explanationIncorrect: [
        "Incorrecte. No queda anul·lada automàticament.",
        "",
        "Incorrecte. No és indefinida: el màxim és de cinc mesos.",
        "Incorrecte. Sí que hi ha efecte automàtic de suspensió en aquest supòsit."
      ]
    },

    /* =========================
       5 PREGUNTES TRAMPA
    ========================== */

    {
      type: "trampa",
      question: "La potestat reglamentària correspon principalment a:",
      options: [
        "El Parlament, perquè aprova normes",
        "El Govern, perquè dicta reglaments subordinats a la llei",
        "El Tribunal Constitucional, perquè interpreta la Constitució",
        "Les comissions parlamentàries, perquè elaboren dictàmens"
      ],
      correct: 1,
      explanationCorrect: "La potestat reglamentària és del Govern i dels seus membres; el Parlament exerceix potestat legislativa.",
      explanationIncorrect: [
        "Incorrecte. El Parlament aprova lleis (rang superior), no reglaments com a regla general.",
        "",
        "Incorrecte. El TC no exerceix potestat reglamentària.",
        "Incorrecte. Les comissions no dicten reglaments; treballen en tramitació legislativa."
      ]
    },

    {
      type: "trampa",
      question: "Les lleis de desenvolupament bàsic de l’Estatut tenen rang jeràrquic superior a les lleis ordinàries.",
      options: [
        "Sí, perquè desenvolupen l’Estatut",
        "Sí, perquè requereixen majoria absoluta",
        "No, tenen el mateix rang; la diferència és procedimental",
        "Només si ho diu el Reglament del Parlament"
      ],
      correct: 2,
      explanationCorrect: "No hi ha diferència jeràrquica entre lleis: la diferència és el procediment i la majoria exigida.",
      explanationIncorrect: [
        "Incorrecte. Desenvolupar l’Estatut no crea un rang superior de llei.",
        "Incorrecte. La majoria exigida no altera el rang jeràrquic.",
        "",
        "Incorrecte. El rang normatiu no depèn del Reglament."
      ]
    },

    {
      type: "trampa",
      question: "La iniciativa de la Llei de pressupostos correspon:",
      options: [
        "Exclusivament al Parlament",
        "Exclusivament al Govern",
        "A qualsevol diputat individual",
        "A la iniciativa popular (ILP)"
      ],
      correct: 1,
      explanationCorrect: "La iniciativa de la llei de pressupostos és reservada al Govern; el Parlament la tramita i aprova.",
      explanationIncorrect: [
        "Incorrecte. El Parlament no en té la iniciativa exclusiva; és el Govern qui presenta el projecte.",
        "",
        "Incorrecte. Un diputat no pot presentar el pressupost com a proposició de llei.",
        "Incorrecte. Les matèries pressupostàries queden excloses de la ILP (segons el text base)."
      ]
    },

    {
      type: "trampa",
      question: "Un decret llei del Govern té caràcter definitiu sense intervenció del Parlament.",
      options: [
        "Sí, perquè és norma amb rang de llei",
        "Sí, si el dicta el Govern en necessitat urgent",
        "No, és provisional i requereix convalidació parlamentària en 30 dies",
        "No, perquè el decret llei l’aprova el Parlament"
      ],
      correct: 2,
      explanationCorrect: "El decret llei és una norma del Govern amb rang de llei però provisional, que ha de ser convalidada pel Parlament en 30 dies.",
      explanationIncorrect: [
        "Incorrecte. El rang de llei no elimina el control parlamentari.",
        "Incorrecte. La urgència justifica l’ús, però no elimina la convalidació.",
        "",
        "Incorrecte. El decret llei el dicta el Govern, no el Parlament."
      ]
    },

    {
      type: "trampa",
      question: "La STC 31/2010 va establir que els dictàmens del Consell de Garanties Estatutàries (CGE) són:",
      options: [
        "Vinculants per al Parlament en tots els casos",
        "Vinculants només per a lleis ordinàries",
        "No vinculants; el CGE és consultiu",
        "Vinculants si ho decideix la Mesa"
      ],
      correct: 2,
      explanationCorrect: "La STC 31/2010 va declarar inconstitucional el caràcter vinculant dels dictàmens del CGE, deixant-lo com a òrgan consultiu.",
      explanationIncorrect: [
        "Incorrecte. El caràcter vinculant va ser anul·lat.",
        "Incorrecte. No hi ha vinculació parcial per tipus de llei.",
        "",
        "Incorrecte. La Mesa no pot convertir en vinculant el que constitucionalment no ho és."
      ]
    },

    /* =========================
       10 PREGUNTES DE CONTINGUT
    ========================== */

    {
      type: "contingut",
      question: "Quina diferència descriu correctament la potestat legislativa i la potestat reglamentària?",
      options: [
        "La legislativa és del Govern i la reglamentària del Parlament",
        "La legislativa aprova lleis; la reglamentària dicta normes subordinades a la llei",
        "La legislativa dicta decrets i la reglamentària dicta lleis",
        "No hi ha diferència real; són sinònims"
      ],
      correct: 1,
      explanationCorrect: "La legislativa (Parlament) aprova lleis; la reglamentària (Govern) dicta reglaments subordinats.",
      explanationIncorrect: [
        "Incorrecte. És al revés.",
        "",
        "Incorrecte. Els decrets són del Govern; les lleis, del Parlament.",
        "Incorrecte. No són sinònims."
      ]
    },

    {
      type: "contingut",
      question: "Les proposicions de llei són la via típica de:",
      options: [
        "Iniciativa del Govern",
        "Iniciativa parlamentària",
        "Iniciativa del TC",
        "Iniciativa de la Junta Electoral"
      ],
      correct: 1,
      explanationCorrect: "Les proposicions de llei s’associen a la iniciativa parlamentària (diputats i grups).",
      explanationIncorrect: [
        "Incorrecte. El Govern presenta projectes de llei.",
        "",
        "Incorrecte. El TC no té iniciativa legislativa.",
        "Incorrecte. La Junta Electoral no té iniciativa legislativa."
      ]
    },

    {
      type: "contingut",
      question: "Els projectes de llei són la via típica de:",
      options: [
        "Iniciativa del Govern",
        "Iniciativa popular",
        "Iniciativa territorial",
        "Iniciativa dels consells comarcals exclusivament"
      ],
      correct: 0,
      explanationCorrect: "Els projectes de llei provenen del Govern i s’aproven prèviament pel Consell Executiu.",
      explanationIncorrect: [
        "",
        "Incorrecte. La iniciativa popular presenta proposicions de llei, no projectes.",
        "Incorrecte. La iniciativa territorial no és la via típica dels projectes de llei del Govern.",
        "Incorrecte. Els consells comarcals poden impulsar iniciativa territorial, no projectes del Govern."
      ]
    },

    {
      type: "contingut",
      question: "Quin òrgan decideix l’admissió a tràmit d’un projecte o proposició de llei?",
      options: [
        "La Mesa del Parlament",
        "La Junta de Portaveus",
        "El President de la Generalitat",
        "El Tribunal Superior de Justícia de Catalunya"
      ],
      correct: 0,
      explanationCorrect: "La Mesa comprova requisits formals i decideix l’admissió a tràmit.",
      explanationIncorrect: [
        "",
        "Incorrecte. La Junta de Portaveus incideix en l’ordre del dia, no admet formalment iniciatives.",
        "Incorrecte. El President no admet a tràmit iniciatives parlamentàries.",
        "Incorrecte. El TSJC no té aquesta funció."
      ]
    },

    {
      type: "contingut",
      question: "On es publica el text un cop admès a tràmit per obrir el termini d’esmenes?",
      options: [
        "DOGC",
        "BOPC",
        "BOE",
        "Diari de Sessions"
      ],
      correct: 1,
      explanationCorrect: "La publicació per obrir esmenes es fa al BOPC (Butlletí Oficial del Parlament de Catalunya).",
      explanationIncorrect: [
        "Incorrecte. El DOGC publica la llei ja aprovada i promulgada.",
        "",
        "Incorrecte. El BOE és l’àmbit estatal.",
        "Incorrecte. El Diari de Sessions recull debats, no és el butlletí de publicació legislativa."
      ]
    },

    {
      type: "contingut",
      question: "Quin és el pas típic després del debat de totalitat (si s’escau)?",
      options: [
        "Publicació al DOGC",
        "Treball en comissió amb ponència i dictamen",
        "Convalidació del TC",
        "Sanció i promulgació automàtica"
      ],
      correct: 1,
      explanationCorrect: "Superat el debat de totalitat, el text passa a comissió, es designa ponència i s’elabora dictamen.",
      explanationIncorrect: [
        "Incorrecte. El DOGC és al final del procediment (publicació de la llei).",
        "",
        "Incorrecte. El TC no convalida lleis.",
        "Incorrecte. La sanció i promulgació és posterior a l’aprovació pel Ple."
      ]
    },

    {
      type: "contingut",
      question: "Quina és la funció principal de la ponència en el procediment legislatiu?",
      options: [
        "Convocar eleccions",
        "Estudiar el text i esmenes i elaborar un informe",
        "Promulgar la llei",
        "Suspensió de la llei per 5 mesos"
      ],
      correct: 1,
      explanationCorrect: "La ponència estudia text i esmenes i elabora un informe que serveix de base per al dictamen de comissió.",
      explanationIncorrect: [
        "Incorrecte. No té funcions electorals.",
        "",
        "Incorrecte. Promulgar correspon al President/a de la Generalitat (en nom del rei).",
        "Incorrecte. La suspensió és una conseqüència de l’art. 161.2 CE quan impugna el Govern de l’Estat."
      ]
    },

    {
      type: "contingut",
      question: "La sanció i promulgació de les lleis aprovades pel Parlament correspon a:",
      options: [
        "El President o Presidenta de la Generalitat (en nom del rei)",
        "La Mesa del Parlament",
        "El Tribunal Constitucional",
        "La Junta Electoral Central"
      ],
      correct: 0,
      explanationCorrect: "Un cop aprovada, el President/a de la Generalitat sanciona i promulga la llei en nom del rei i n’ordena la publicació al DOGC.",
      explanationIncorrect: [
        "",
        "Incorrecte. La Mesa ordena la tramitació interna, no sanciona ni promulga.",
        "Incorrecte. El TC no promulga lleis.",
        "Incorrecte. La JEC no té funcions legislatives."
      ]
    },

    {
      type: "contingut",
      question: "Quin procediment especial redueix els terminis del procediment ordinari a la meitat?",
      options: [
        "Lectura única",
        "Procediment d’urgència",
        "Seu legislativa plena",
        "Procediment pressupostari"
      ],
      correct: 1,
      explanationCorrect: "El procediment d’urgència redueix els terminis a la meitat.",
      explanationIncorrect: [
        "Incorrecte. Lectura única concentra la tramitació, però no es defineix com “terminis a la meitat”.",
        "",
        "Incorrecte. La seu legislativa plena és delegació del Ple en una comissió.",
        "Incorrecte. El pressupost té terminis específics i tramitació preferent."
      ]
    },

    {
      type: "contingut",
      question: "Quina afirmació és correcta sobre el control del TC?",
      options: [
        "El TC només controla lleis estatals",
        "El TC controla lleis autonòmiques per recurs o qüestió d’inconstitucionalitat",
        "El TC convalida prèviament totes les lleis autonòmiques",
        "El TC substitueix el Parlament quan hi ha esmenes"
      ],
      correct: 1,
      explanationCorrect: "El TC controla lleis autonòmiques mitjançant recurs o qüestió d’inconstitucionalitat.",
      explanationIncorrect: [
        "Incorrecte. El TC controla normes estatals i autonòmiques.",
        "",
        "Incorrecte. No existeix convalidació prèvia generalitzada.",
        "Incorrecte. El TC no substitueix el legislador."
      ]
    }
  ]
};

export default punt3Ask;