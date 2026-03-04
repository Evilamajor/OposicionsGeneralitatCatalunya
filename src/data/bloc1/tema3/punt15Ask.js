// Fitxer: punt15Ask.js
// Bloc 1 · Tema 3 · Punt 15 — La Comissió Europea: estructura i funcions

export const punt15Ask = [
  /* ============================
     CONCEPTES (10)
  ============================ */

  {
    id: 1,
    type: "concept",
    question: "Quina afirmació descriu millor el paper general de la Comissió Europea dins la UE?",
    options: [
      "Representa principalment els governs dels estats membres",
      "Representa l’interès general de la Unió i impulsa el procés d’integració",
      "És l’òrgan legislatiu principal i aprova les lleis de la UE en solitari",
      "És un òrgan judicial encarregat d’interpretar els Tractats"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La Comissió representa l’interès general de la Unió i és el motor de la integració europea.",
      incorrect: [
        "Incorrecte. Això descriu el Consell de la UE (governs) i el Consell Europeu (caps d’estat o de govern).",
        "Incorrecte. La funció legislativa correspon al Parlament Europeu i al Consell de la UE.",
        "Incorrecte. La interpretació dels Tractats correspon al TJUE."
      ]
    }
  },

  {
    id: 2,
    type: "concept",
    question: "Per què es diu que la Comissió és la 'guardiana dels Tractats'?",
    options: [
      "Perquè aprova i publica els Tractats a la seva web oficial",
      "Perquè vetlla per l’aplicació dels Tractats i del dret de la UE",
      "Perquè decideix unilateralment les sancions econòmiques als estats",
      "Perquè exerceix la funció legislativa i modifica els Tractats"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La Comissió supervisa l’aplicació dels Tractats i del dret de la Unió.",
      incorrect: [
        "Incorrecte. Publicar informació no és la raó jurídica del concepte.",
        "Incorrecte. Les sancions i mecanismes depenen de procediments específics i no són una decisió unilateral general.",
        "Incorrecte. No legisla ni modifica els Tractats."
      ]
    }
  },

  {
    id: 3,
    type: "concept",
    question: "Quin principi garanteix que els membres de la Comissió no representin els seus governs nacionals?",
    options: [
      "Principi de subsidiarietat",
      "Principi d’independència",
      "Principi de proporcionalitat",
      "Principi de cooperació lleial"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El principi d’independència implica que els comissaris no poden sol·licitar ni acceptar instruccions de governs.",
      incorrect: [
        "Incorrecte. La subsidiarietat regula l’exercici de competències entre UE i estats membres.",
        "Incorrecte. La proporcionalitat limita l’abast de l’acció de la UE.",
        "Incorrecte. La cooperació lleial regula el comportament recíproc entre UE i estats."
      ]
    }
  },

  {
    id: 4,
    type: "concept",
    question: "Com s’estructura políticament la Comissió Europea?",
    options: [
      "En cambres legislatives i comissions parlamentàries",
      "En un Col·legi de Comissaris presidit pel President de la Comissió",
      "En tribunals especialitzats i sales d’apel·lació",
      "En ambaixadors permanents (COREPER) i grups de treball"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El nivell polític és el Col·legi de Comissaris, dirigit pel President de la Comissió.",
      incorrect: [
        "Incorrecte. Això correspon al Parlament Europeu.",
        "Incorrecte. Això correspon a l’estructura judicial del TJUE.",
        "Incorrecte. COREPER i grups de treball són propis del Consell de la UE."
      ]
    }
  },

  {
    id: 5,
    type: "concept",
    question: "Quin paper té el President de la Comissió Europea segons el text base?",
    options: [
      "Defineix les orientacions polítiques i organitza internament la Comissió",
      "Presideix el Consell Europeu i marca l’agenda política general",
      "És el responsable principal de la funció legislativa de la UE",
      "Actua com a jutge en els recursos d’incompliment"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. El President defineix orientacions polítiques i decideix l’organització interna i vicepresidències.",
      incorrect: [
        "Incorrecte. El Consell Europeu té el seu propi president.",
        "Incorrecte. La funció legislativa correspon al Parlament i al Consell de la UE.",
        "Incorrecte. Els recursos d’incompliment es resolen al TJUE."
      ]
    }
  },

  {
    id: 6,
    type: "concept",
    question: "Quina afirmació descriu millor el nivell administratiu de la Comissió?",
    options: [
      "S’organitza en Direccions Generals (DG) i serveis equivalents",
      "S’organitza en configuracions ministerials sectorials",
      "S’organitza en ambaixadors permanents i Presidència rotatòria",
      "S’organitza en sales judicials i advocats generals"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. La Comissió s’estructura en DG i serveis equivalents sota responsabilitat dels comissaris.",
      incorrect: [
        "Incorrecte. Això correspon al Consell de la UE (configuracions).",
        "Incorrecte. Això descriu estructures pròpies del Consell de la UE.",
        "Incorrecte. Això descriu el TJUE."
      ]
    }
  },

  {
    id: 7,
    type: "concept",
    question: "Què implica el principi de col·legialitat en la Comissió Europea?",
    options: [
      "Que cada comissari decideix de manera independent i exclusiva en la seva cartera",
      "Que les decisions s’adopten col·lectivament i tots assumeixen responsabilitat política",
      "Que només el President decideix i la resta executa",
      "Que el Parlament Europeu vota internament totes les decisions de la Comissió"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La col·legialitat significa decisions col·lectives del Col·legi i responsabilitat compartida.",
      incorrect: [
        "Incorrecte. Les carteres existeixen, però la decisió és col·legiada.",
        "Incorrecte. El President dirigeix, però no substitueix el principi col·legiat.",
        "Incorrecte. El Parlament controla políticament, però no vota totes les decisions internes."
      ]
    }
  },

  {
    id: 8,
    type: "concept",
    question: "Quina és la diferència bàsica entre actes delegats i actes d’execució?",
    options: [
      "Els delegats són judicials; els d’execució són legislatius",
      "Els delegats completen/modifiquen elements no essencials; els d’execució fixen condicions uniformes d’aplicació",
      "Els delegats s’apliquen només als estats no membres; els d’execució als estats membres",
      "Els delegats els aprova el Consell Europeu; els d’execució el Parlament"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. Els actes delegats (290 TFUE) completen o modifiquen elements no essencials; els d’execució (291 TFUE) asseguren condicions uniformes.",
      incorrect: [
        "Incorrecte. No són actes judicials; són actes normatius no legislatius.",
        "Incorrecte. No depèn de si l’estat és membre o no.",
        "Incorrecte. No és així: el marc ve dels Tractats i del legislador; la Comissió pot adoptar-los segons habilitació."
      ]
    }
  },

  {
    id: 9,
    type: "concept",
    question: "Quina funció és pròpia de la Comissió en relació amb el pressupost de la UE?",
    options: [
      "Aprovar el pressupost en solitari",
      "Executar el pressupost i gestionar programes de la Unió",
      "Vetar el pressupost aprovat pel Consell i el Parlament",
      "Interpretar judicialment la legalitat del pressupost"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La Comissió executa el pressupost i gestiona programes, incloent fons estructurals.",
      incorrect: [
        "Incorrecte. L’aprovació pressupostària és del Parlament i el Consell.",
        "Incorrecte. No té un dret de veto general sobre el pressupost aprovat.",
        "Incorrecte. La interpretació judicial correspon al TJUE."
      ]
    }
  },

  {
    id: 10,
    type: "concept",
    question: "Quin és l’error d’examen més típic respecte a la iniciativa legislativa?",
    options: [
      "Pensar que la Comissió proposa normes però no les executa mai",
      "Pensar que la Comissió té iniciativa legislativa però que legisla en solitari",
      "Pensar que el Consell Europeu té iniciativa legislativa general",
      "Pensar que el TJUE proposa directives"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La Comissió té, com a regla general, el monopoli de la iniciativa, però la funció legislativa és del Parlament i el Consell de la UE.",
      incorrect: [
        "Incorrecte. La Comissió sí que té funcions executives (pressupost i programes).",
        "Incorrecte. El Consell Europeu marca orientacions; no té iniciativa legislativa general.",
        "Incorrecte. El TJUE és un òrgan jurisdiccional."
      ]
    }
  },

  /* ============================
     LEGISLACIÓ (5)
  ============================ */

  {
    id: 11,
    type: "law",
    question: "Quin article del TUE regula les funcions principals de la Comissió Europea?",
    options: [
      "Art. 15 TUE",
      "Art. 16 TUE",
      "Art. 17 TUE",
      "Art. 48 TUE"
    ],
    correct: 2,
    explanation: {
      correct:
        "Correcte. L’art. 17 TUE estableix les funcions i el paper institucional de la Comissió Europea.",
      incorrect: [
        "Incorrecte. L’art. 15 TUE regula el Consell Europeu.",
        "Incorrecte. L’art. 16 TUE regula el Consell de la UE.",
        "Incorrecte. L’art. 48 TUE regula la revisió dels Tractats."
      ]
    }
  },

  {
    id: 12,
    type: "law",
    question: "Quin article del TFUE preveu que la Comissió aprovi el seu Reglament intern?",
    options: [
      "Art. 244 TFUE",
      "Art. 258 TFUE",
      "Art. 218 TFUE",
      "Art. 13 TUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. L’art. 244 TFUE preveu que la Comissió aprovi el seu Reglament intern per regular-ne el funcionament.",
      incorrect: [
        "Incorrecte. L’art. 258 TFUE regula el procediment d’infracció contra un estat membre.",
        "Incorrecte. L’art. 218 TFUE regula la negociació i celebració d’acords internacionals.",
        "Incorrecte. L’art. 13 TUE enumera institucions; no regula el reglament intern."
      ]
    }
  },

  {
    id: 13,
    type: "law",
    question: "Quin precepte regula el procediment d’infracció iniciat per la Comissió contra un estat membre?",
    options: [
      "Art. 258 TFUE",
      "Art. 291 TFUE",
      "Art. 244 TFUE",
      "Art. 16.2 TUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. L’art. 258 TFUE habilita la Comissió a iniciar el procediment d’infracció per incompliment del dret de la UE.",
      incorrect: [
        "Incorrecte. L’art. 291 TFUE regula actes d’execució (condicions uniformes).",
        "Incorrecte. L’art. 244 TFUE tracta del reglament intern de la Comissió.",
        "Incorrecte. L’art. 16.2 TUE regula la composició del Consell de la UE."
      ]
    }
  },

  {
    id: 14,
    type: "law",
    question: "Quins articles del TFUE regulen els actes delegats i els actes d’execució?",
    options: [
      "Arts. 290 i 291 TFUE",
      "Arts. 237 a 243 TFUE",
      "Arts. 258 a 260 TFUE",
      "Arts. 13 i 17 TUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. Els actes delegats es regulen a l’art. 290 TFUE i els actes d’execució a l’art. 291 TFUE.",
      incorrect: [
        "Incorrecte. 237–243 TFUE s’associen al funcionament del Consell (estructura i suport).",
        "Incorrecte. 258–260 TFUE s’associen al procediment d’infracció i conseqüències.",
        "Incorrecte. 13 i 17 són del TUE; no regulen delegats/execució."
      ]
    }
  },

  {
    id: 15,
    type: "law",
    question: "Quin article del TFUE s’esmenta com a base per al paper de la Comissió en la negociació d’acords internacionals?",
    options: [
      "Art. 218 TFUE",
      "Art. 244 TFUE",
      "Art. 290 TFUE",
      "Art. 16 TUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. L’art. 218 TFUE regula el procediment de negociació i celebració d’acords internacionals, amb paper de la Comissió.",
      incorrect: [
        "Incorrecte. L’art. 244 TFUE tracta del reglament intern de la Comissió.",
        "Incorrecte. L’art. 290 TFUE tracta d’actes delegats, no d’acords internacionals.",
        "Incorrecte. L’art. 16 TUE regula el Consell de la UE."
      ]
    }
  },

  /* ============================
     TRAMPA (5)
  ============================ */

  {
    id: 16,
    type: "trap",
    question: "Quina institució representa principalment els governs dels estats membres?",
    options: [
      "La Comissió Europea",
      "El Consell de la Unió Europea",
      "El Parlament Europeu",
      "El Tribunal de Justícia de la UE"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El Consell de la UE representa els governs dels estats membres.",
      incorrect: [
        "Incorrecte. La Comissió representa l’interès general de la Unió.",
        "Incorrecte. El Parlament representa la ciutadania.",
        "Incorrecte. El TJUE és un òrgan jurisdiccional."
      ]
    }
  },

  {
    id: 17,
    type: "trap",
    question: "Quina afirmació és correcta sobre el 'monopoli de la iniciativa' de la Comissió?",
    options: [
      "La Comissió aprova en solitari les directives i reglaments",
      "Com a regla general, els actes legislatius s’adopten a proposta de la Comissió",
      "La iniciativa legislativa correspon sempre al Consell Europeu",
      "La iniciativa legislativa correspon al TJUE"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. En general, el procés legislatiu s’inicia amb una proposta de la Comissió.",
      incorrect: [
        "Incorrecte. La Comissió proposa, però la legislació l’aproven Consell i Parlament.",
        "Incorrecte. El Consell Europeu marca orientacions, no té iniciativa general.",
        "Incorrecte. El TJUE no té iniciativa legislativa."
      ]
    }
  },

  {
    id: 18,
    type: "trap",
    question: "Quina afirmació és correcta sobre la responsabilitat política de la Comissió davant el Parlament?",
    options: [
      "El Parlament pot destituir individualment un comissari amb una moció de censura",
      "El Parlament pot aprovar una moció de censura que comporta la dimissió col·lectiva de la Comissió",
      "El Parlament no té cap control polític sobre la Comissió",
      "Només el Consell Europeu pot censurar la Comissió"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La moció de censura del Parlament, si prospera, obliga a la dimissió col·lectiva de la Comissió.",
      incorrect: [
        "Incorrecte. La moció de censura és col·lectiva sobre la Comissió, no individual d’un comissari (en el marc del punt).",
        "Incorrecte. El Parlament exerceix control polític (preguntes, debats, informes i censura).",
        "Incorrecte. El control polític principal és del Parlament, no només del Consell Europeu."
      ]
    }
  },

  {
    id: 19,
    type: "trap",
    question: "En quin cas la Comissió NO assumeix principalment la representació exterior de la UE segons el text base?",
    options: [
      "En la política exterior i de seguretat comuna (PESC)",
      "En la negociació d’acords internacionals comercials",
      "En la representació exterior en matèries de competència de la Unió",
      "En la gestió de programes europeus amb dimensió exterior"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. L’excepció indicada és la PESC, on el protagonisme institucional és diferent i hi ha un paper específic de l’Alt Representant.",
      incorrect: [
        "Incorrecte. La negociació d’acords internacionals s’atribueix a la Comissió (art. 218 TFUE).",
        "Incorrecte. En general, la Comissió assumeix la representació exterior fora de la PESC.",
        "Incorrecte. La gestió de programes pot incloure dimensió exterior, però no és l’excepció destacada."
      ]
    }
  },

  {
    id: 20,
    type: "trap",
    question: "Quina combinació és correcta en el repartiment de rols (iniciativa–legislació–execució) segons el punt 15?",
    options: [
      "Comissió legisla; Consell executa; Parlament proposa",
      "Comissió proposa; Parlament i Consell legislen; Comissió executa pressupost i gestiona programes",
      "Consell Europeu proposa; Comissió legisla; TJUE executa",
      "Parlament proposa; Comissió legisla; Consell Europeu executa"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La Comissió té la iniciativa (proposa), la legislació és de Parlament+Consell, i la Comissió executa pressupost i gestiona programes.",
      incorrect: [
        "Incorrecte. El Parlament no ‘proposa’ com a regla general, i la Comissió no legisla en solitari.",
        "Incorrecte. El Consell Europeu no proposa lleis de manera general; TJUE no executa.",
        "Incorrecte. El Parlament no té iniciativa general i la Comissió no legisla en solitari."
      ]
    }
  }
];