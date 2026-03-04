// Fitxer: punt16Ask.js
// Bloc 1 · Tema 3 · Punt 16 — El Parlament Europeu: composició i funcions

export const punt16Ask = [
  /* ============================
     CONCEPTES (10)
  ============================ */

  {
    id: 1,
    type: "concept",
    question: "Quina és la base de representació del Parlament Europeu dins el sistema institucional de la UE?",
    options: [
      "Representa els governs dels estats membres",
      "Representa els ciutadans de la Unió Europea",
      "Representa l’interès general de la Unió (supranacional)",
      "Representa els caps d’estat o de govern"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El Parlament Europeu representa directament els ciutadans de la Unió Europea (democràcia representativa).",
      incorrect: [
        "Incorrecte. Això correspon al Consell de la UE.",
        "Incorrecte. Això correspon a la Comissió Europea.",
        "Incorrecte. Això correspon al Consell Europeu."
      ]
    }
  },

  {
    id: 2,
    type: "concept",
    question: "Quina evolució institucional ha experimentat el Parlament Europeu segons el text base?",
    options: [
      "Ha passat de ser una cambra executiva a una cambra judicial",
      "Ha passat de ser una assemblea consultiva a una cambra legislativa amb plenes potestats",
      "Ha passat de ser un òrgan intergovernamental a una agència administrativa",
      "Ha passat de ser un tribunal a una cambra pressupostària"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El Parlament ha evolucionat d’una assemblea consultiva a una cambra legislativa amb plenes potestats.",
      incorrect: [
        "Incorrecte. No és un òrgan executiu ni judicial.",
        "Incorrecte. No és una agència administrativa.",
        "Incorrecte. No és un tribunal; i la funció pressupostària és compartida, però no defineix aquesta evolució."
      ]
    }
  },

  {
    id: 3,
    type: "concept",
    question: "Què significa que el Parlament aporta 'legitimitat democràtica directa' a la UE?",
    options: [
      "Que els seus membres són designats pels governs nacionals",
      "Que els seus membres són elegits per sufragi universal directe",
      "Que els seus membres són funcionaris europeus independents",
      "Que els seus membres són escollits pel Consell Europeu"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La legitimitat directa prové del sufragi universal directe, lliure i secret dels ciutadans.",
      incorrect: [
        "Incorrecte. La designació per governs seria representació intergovernamental (Consell), no legitimitat directa ciutadana.",
        "Incorrecte. Els funcionaris no són eurodiputats.",
        "Incorrecte. El Consell Europeu no elegeix els eurodiputats."
      ]
    }
  },

  {
    id: 4,
    type: "concept",
    question: "Quina és la característica bàsica de la 'proporcionalitat decreixent' en la composició del Parlament?",
    options: [
      "Els estats petits no tenen representació assegurada",
      "Els estats grans tenen menys escons que els petits",
      "Els estats grans tenen més escons, però els estats petits tenen més escons dels que els tocaria estrictament per població",
      "Cada estat té exactament el mateix nombre d’escons"
    ],
    correct: 2,
    explanation: {
      correct:
        "Correcte. Els estats més poblats tenen més diputats, però els estats petits estan sobrerrepresentats respecte del pur criteri demogràfic.",
      incorrect: [
        "Incorrecte. Precisament el sistema garanteix veu mínima als estats petits.",
        "Incorrecte. Els estats grans tenen més escons, no menys.",
        "Incorrecte. No hi ha igualtat estricta d’escons entre estats."
      ]
    }
  },

  {
    id: 5,
    type: "concept",
    question: "Com s’agrupen els eurodiputats dins del Parlament Europeu?",
    options: [
      "Per nacionalitats, segons l’estat membre d’origen",
      "Per afinitats polítiques, en grups polítics europeus",
      "Per ministeris i carteres, segons l’àmbit competencial",
      "Per circumscripcions judicials de la UE"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. Els eurodiputats s’agrupen per afinitats polítiques en grups polítics europeus, no per nacionalitat.",
      incorrect: [
        "Incorrecte. La lògica del Parlament és política europea, no nacional per defecte.",
        "Incorrecte. Cartera i ministeris és propi de governs; no del Parlament.",
        "Incorrecte. No hi ha circumscripcions judicials en l’organització parlamentària."
      ]
    }
  },

  {
    id: 6,
    type: "concept",
    question: "Quina és la funció principal de les comissions parlamentàries?",
    options: [
      "Substituir el Ple i aprovar definitivament tots els actes legislatius",
      "Preparar tècnicament el treball: estudiar i esmenar propostes abans del Ple",
      "Imposar sancions als estats membres per incompliments",
      "Negociar tractats internacionals en nom de la UE"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. Les comissions preparen el treball legislatiu: analitzen i esmenen propostes abans de passar al Ple.",
      incorrect: [
        "Incorrecte. Les comissions no substitueixen el Ple en general (la decisió final depèn del procediment).",
        "Incorrecte. Les sancions i incompliments s’articulen per altres vies (Comissió/TJUE, etc.).",
        "Incorrecte. La negociació d’acords internacionals correspon principalment a la Comissió en el marc de l’art. 218 TFUE."
      ]
    }
  },

  {
    id: 7,
    type: "concept",
    question: "Quina és la funció del President o Presidenta del Parlament Europeu?",
    options: [
      "Proposar lleis amb monopoli d’iniciativa",
      "Representar el Parlament i presidir debats i sessions",
      "Presidir el Consell Europeu",
      "Dirigir el COREPER"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El President representa la institució i presideix els debats i sessions, supervisant el reglament.",
      incorrect: [
        "Incorrecte. El monopoli de la iniciativa legislativa és de la Comissió (com a regla general).",
        "Incorrecte. El Consell Europeu té el seu propi president.",
        "Incorrecte. COREPER és un òrgan de preparació del Consell de la UE."
      ]
    }
  },

  {
    id: 8,
    type: "concept",
    question: "En el procediment legislatiu ordinari, quin és el paper del Parlament?",
    options: [
      "Ser consultat sense capacitat de bloqueig",
      "Actuar com a co-legislador en igualtat amb el Consell de la UE",
      "Aprovar la llei i enviar-la al Consell Europeu per ratificació",
      "Aprovar la llei en solitari sense intervenció del Consell"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El Parlament és co-legislador amb el Consell de la UE en el procediment legislatiu ordinari.",
      incorrect: [
        "Incorrecte. En el procediment ordinari no és merament consultiu.",
        "Incorrecte. La ratificació no correspon al Consell Europeu.",
        "Incorrecte. La legislació ordinària no és exclusiva del Parlament."
      ]
    }
  },

  {
    id: 9,
    type: "concept",
    question: "Què és la 'descàrrega pressupostària' del Parlament Europeu?",
    options: [
      "La fase en què el Parlament redacta el pressupost anual en solitari",
      "L’acte pel qual el Parlament aprova definitivament l’execució del pressupost de l’any anterior",
      "Una sanció automàtica a la Comissió per mala gestió financera",
      "La validació judicial del pressupost pel TJUE"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La descàrrega és el mecanisme de control polític sobre l’execució del pressupost anterior (per recomanació del Consell).",
      incorrect: [
        "Incorrecte. El pressupost l’aproven Parlament i Consell conjuntament; no és redacció en solitari.",
        "Incorrecte. No és una sanció automàtica, tot i que pot tenir conseqüències polítiques.",
        "Incorrecte. No és un control judicial del TJUE."
      ]
    }
  },

  {
    id: 10,
    type: "concept",
    question: "Quin instrument de control és el més extrem sobre la Comissió Europea?",
    options: [
      "La conferència de presidents",
      "La moció de censura que pot forçar la dimissió col·lectiva",
      "La creació de grups polítics",
      "L’aprovació de sessions plenàries a Brussel·les"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La moció de censura pot comportar la dimissió col·lectiva de la Comissió i és l’instrument de control més extrem.",
      incorrect: [
        "Incorrecte. La conferència de presidents organitza treballs parlamentaris, no és un instrument extrem de control.",
        "Incorrecte. Els grups polítics són organització interna, no control extrem.",
        "Incorrecte. La seu de sessions no és instrument de control."
      ]
    }
  },

  /* ============================
     LEGISLACIÓ (5)
  ============================ */

  {
    id: 11,
    type: "law",
    question: "Quin article del TUE estableix el principi de democràcia representativa a la Unió?",
    options: [
      "Art. 10 TUE",
      "Art. 13 TUE",
      "Art. 14.2 TUE",
      "Art. 16 TUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. L’art. 10 TUE estableix la democràcia representativa i la representació directa dels ciutadans al Parlament.",
      incorrect: [
        "Incorrecte. L’art. 13 TUE enumera institucions i marc institucional.",
        "Incorrecte. L’art. 14.2 TUE regula composició (topalls i criteris), no el principi general.",
        "Incorrecte. L’art. 16 TUE regula el Consell de la UE."
      ]
    }
  },

  {
    id: 12,
    type: "law",
    question: "Quin article del TUE regula la composició del Parlament (topall 750 + President i rang 6–96 per estat)?",
    options: [
      "Art. 14.2 TUE",
      "Art. 13 TUE",
      "Art. 15 TUE",
      "Art. 17 TUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. L’art. 14.2 TUE fixa el nombre màxim (750 + President) i els llindars per estat (6–96), amb proporcionalitat decreixent.",
      incorrect: [
        "Incorrecte. L’art. 13 TUE enumera institucions però no fixa aquests límits.",
        "Incorrecte. L’art. 15 TUE regula el Consell Europeu.",
        "Incorrecte. L’art. 17 TUE regula la Comissió Europea."
      ]
    }
  },

  {
    id: 13,
    type: "law",
    question: "Quin article del TFUE regula el procediment legislatiu ordinari (co-decisió)?",
    options: [
      "Art. 294 TFUE",
      "Art. 244 TFUE",
      "Art. 258 TFUE",
      "Art. 218 TFUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. L’art. 294 TFUE regula el procediment legislatiu ordinari, on Parlament i Consell són co-legisladors.",
      incorrect: [
        "Incorrecte. L’art. 244 TFUE tracta del reglament intern de la Comissió.",
        "Incorrecte. L’art. 258 TFUE tracta del procediment d’infracció.",
        "Incorrecte. L’art. 218 TFUE regula acords internacionals."
      ]
    }
  },

  {
    id: 14,
    type: "law",
    question: "Quin és el topall màxim d’eurodiputats segons el text base (art. 14.2 TUE)?",
    options: [
      "705 més el President",
      "750 més el President",
      "800 més el President",
      "750 inclòs el President"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El topall és 750 eurodiputats més el President, segons l’art. 14.2 TUE (segons el text base).",
      incorrect: [
        "Incorrecte. 705 és una xifra que pot variar per legislatura, però el text base fixa 750 + President.",
        "Incorrecte. No és 800.",
        "Incorrecte. El text base indica explícitament “més el President”."
      ]
    }
  },

  {
    id: 15,
    type: "law",
    question: "Quins són els llindars mínim i màxim d’escons per estat membre al Parlament Europeu segons el text base?",
    options: [
      "Mínim 1 i màxim 100",
      "Mínim 6 i màxim 96",
      "Mínim 5 i màxim 99",
      "Mínim 10 i màxim 90"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. Cap estat pot tenir menys de 6 escons ni més de 96, segons l’art. 14.2 TUE (text base).",
      incorrect: [
        "Incorrecte. No coincideix amb els llindars previstos.",
        "Incorrecte. No coincideix amb els llindars previstos.",
        "Incorrecte. No coincideix amb els llindars previstos."
      ]
    }
  },

  /* ============================
     TRAMPA (5)
  ============================ */

  {
    id: 16,
    type: "trap",
    question: "Quina institució representa els governs dels estats membres i comparteix funció legislativa amb el Parlament?",
    options: [
      "Comissió Europea",
      "Consell de la Unió Europea",
      "Consell Europeu",
      "Tribunal de Justícia de la UE"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El Consell de la UE representa els governs i és co-legislador amb el Parlament.",
      incorrect: [
        "Incorrecte. La Comissió representa l’interès general i té iniciativa legislativa general.",
        "Incorrecte. El Consell Europeu marca orientacions polítiques generals però no legisla.",
        "Incorrecte. El TJUE és un òrgan jurisdiccional."
      ]
    }
  },

  {
    id: 17,
    type: "trap",
    question: "Quina seu és l’oficial per a les sessions plenàries ordinàries (12 períodes parcials anuals) del Parlament Europeu?",
    options: [
      "Brussel·les",
      "Estrasburg",
      "Luxemburg",
      "Frankfurt"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. Estrasburg és la seu oficial on se celebren els 12 períodes parcials de sessions plenàries ordinàries anuals.",
      incorrect: [
        "Incorrecte. Brussel·les acull comissions i plens addicionals.",
        "Incorrecte. Luxemburg acull la Secretaria General i serveis administratius.",
        "Incorrecte. Frankfurt és seu del BCE, no del Parlament."
      ]
    }
  },

  {
    id: 18,
    type: "trap",
    question: "Quina afirmació és correcta sobre la iniciativa legislativa a la UE en el procediment ordinari?",
    options: [
      "El Parlament té el monopoli de la iniciativa legislativa",
      "El Consell de la UE té el monopoli de la iniciativa legislativa",
      "La Comissió té, com a regla general, el monopoli de la iniciativa; Parlament i Consell legislen",
      "El Consell Europeu inicia les lleis i el Parlament les ratifica"
    ],
    correct: 2,
    explanation: {
      correct:
        "Correcte. La Comissió proposa (iniciativa general) i Parlament+Consell adopten els actes legislatius en co-decisió.",
      incorrect: [
        "Incorrecte. El Parlament pot demanar propostes a la Comissió, però no té el monopoli general.",
        "Incorrecte. El Consell de la UE no té el monopoli de la iniciativa.",
        "Incorrecte. El Consell Europeu no inicia lleis; fixa orientacions polítiques."
      ]
    }
  },

  {
    id: 19,
    type: "trap",
    question: "Quin és l'error d’examen més típic quan es comparen institucions de la UE segons el punt 16?",
    options: [
      "Confondre el Parlament (ciutadans) amb el Consell de la UE (governs) o el Consell Europeu (caps d’estat o govern)",
      "Confondre el Parlament amb el TJUE perquè tots dos fan votacions",
      "Confondre el Parlament amb el BCE perquè tots dos tenen seu a Frankfurt",
      "Confondre el Parlament amb el COREPER perquè tots dos són comissions"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. La confusió típica és entre Consell de la UE, Consell Europeu i Parlament: base de representació i funcions són diferents.",
      incorrect: [
        "Incorrecte. El TJUE és un tribunal, no una cambra representativa.",
        "Incorrecte. Frankfurt és del BCE, no del Parlament.",
        "Incorrecte. COREPER és un òrgan del Consell de la UE, no del Parlament."
      ]
    }
  },

  {
    id: 20,
    type: "trap",
    question: "Quina afirmació és correcta sobre la moció de censura del Parlament Europeu?",
    options: [
      "Permet destituir un únic comissari de manera individual",
      "Pot forçar la dimissió col·lectiva de la Comissió si s’aprova",
      "És una eina dirigida contra el Consell Europeu i obliga a canviar el seu president",
      "És un procediment judicial resolt pel Tribunal de Justícia"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La moció de censura pot comportar la dimissió col·lectiva de la Comissió Europea.",
      incorrect: [
        "Incorrecte. El mecanisme s’orienta a la responsabilitat col·lectiva de la Comissió (segons el punt).",
        "Incorrecte. No està dirigida contra el Consell Europeu.",
        "Incorrecte. És un instrument polític parlamentari, no un procediment judicial."
      ]
    }
  }
];