const punt16Ask = [

  /* ============================
     5 PREGUNTES TRAMPA
  ============================ */

  {
    id: 1,
    type: "trampa",
    question: "L’Aran és actualment:",
    options: [
      "Una comarca ordinària dins l’organització general catalana.",
      "Una província amb règim especial.",
      "Una entitat territorial singular amb règim especial propi.",
      "Una vegueria ordinària."
    ],
    correct: 2,
    explanation: {
      correct: "L’EAC 2006 configura l’Aran com una entitat territorial singular amb règim especial.",
      incorrect: [
        "Ja no és un règim comarcal especial com a l’Estatut de 1979.",
        "No és una província.",
        "No és una vegueria ordinària dins el sistema general."
      ]
    }
  },

  {
    id: 2,
    type: "trampa",
    question: "L’aranès és oficial:",
    options: [
      "Només a la Vall d’Aran.",
      "Només davant el Conselh Generau.",
      "A tota Catalunya.",
      "Només en l’àmbit educatiu."
    ],
    correct: 2,
    explanation: {
      correct: "L’article 6.5 EAC estableix que l’aranès és oficial a tota Catalunya.",
      incorrect: [
        "No es limita territorialment a l’Aran.",
        "No és només davant el Conselh.",
        "No és exclusiu de l’àmbit educatiu."
      ]
    }
  },

  {
    id: 3,
    type: "trampa",
    question: "El Síndic d’Aran és designat:",
    options: [
      "Pel President de la Generalitat.",
      "Pel Parlament de Catalunya.",
      "Pel Ple del Conselh Generau d’Aran.",
      "Per sufragi universal directe dels ciutadans."
    ],
    correct: 2,
    explanation: {
      correct: "El Síndic és elegit pel Ple del Conselh d’entre els seus membres.",
      incorrect: [
        "No el designa el President.",
        "No és elegit pel Parlament.",
        "No és elecció directa dels ciutadans."
      ]
    }
  },

  {
    id: 4,
    type: "trampa",
    question: "El Conselh Generau pot aprovar lleis pròpies?",
    options: [
      "Sí, amb rang de llei autonòmica.",
      "Sí, si afecten exclusivament l’Aran.",
      "No, només exerceix funcions executives i reglamentàries.",
      "Sí, si el Parlament ho delega."
    ],
    correct: 2,
    explanation: {
      correct: "La potestat legislativa correspon al Parlament; el Conselh exerceix funcions executives i administratives.",
      incorrect: [
        "No té potestat legislativa pròpia.",
        "No pot legislar encara que afecti només l’Aran.",
        "No pot rebre delegació legislativa en aquest sentit."
      ]
    }
  },

  {
    id: 5,
    type: "trampa",
    question: "L’Aran forma part definitiva de la vegueria de l’Alt Pirineu?",
    options: [
      "Sí, de manera permanent.",
      "No, l’adscripció és provisional.",
      "Sí, segons la STC 31/2010.",
      "Depèn del Consell de Governs Locals."
    ],
    correct: 1,
    explanation: {
      correct: "L’adscripció és provisional i Aran pot mantenir-se fora de l’organització veguerial ordinària.",
      incorrect: [
        "No és adscripció definitiva.",
        "La STC 31/2010 no imposa aquesta integració.",
        "No depèn del Consell de Governs Locals."
      ]
    }
  },

  /* ============================
     4 PREGUNTES LEGISLACIÓ
  ============================ */

  {
    id: 6,
    type: "legislacio",
    question: "L’article clau que reconeix l’autogovern de l’Aran és:",
    options: [
      "Article 6.5 EAC.",
      "Article 11 EAC.",
      "Article 2.3 EAC.",
      "Article 149 CE."
    ],
    correct: 1,
    explanation: {
      correct: "L’article 11 EAC reconeix l’autogovern del poble aranès.",
      incorrect: [
        "L’art. 6.5 regula la llengua.",
        "L’art. 2.3 regula la interiorització institucional.",
        "L’art. 149 CE regula competències estatals."
      ]
    }
  },

  {
    id: 7,
    type: "legislacio",
    question: "L’aranès és llengua pròpia d’Aran segons:",
    options: [
      "Article 11 EAC.",
      "Article 6.5 EAC.",
      "Article 3 CE.",
      "Llei 30/2010."
    ],
    correct: 1,
    explanation: {
      correct: "L’article 6.5 EAC estableix que l’aranès és llengua pròpia d’Aran i oficial a Catalunya.",
      incorrect: [
        "L’art. 11 regula l’autogovern.",
        "L’art. 3 CE regula llengües oficials de l’Estat.",
        "La Llei 30/2010 no regula la llengua."
      ]
    }
  },

  {
    id: 8,
    type: "legislacio",
    question: "La Llei 1/2015 regula:",
    options: [
      "El règim electoral aranès.",
      "El règim especial d’Aran.",
      "La creació de vegueries.",
      "El finançament local general."
    ],
    correct: 1,
    explanation: {
      correct: "La Llei 1/2015 regula el règim especial d’Aran.",
      incorrect: [
        "No regula exclusivament règim electoral.",
        "No crea vegueries.",
        "No regula finançament local general."
      ]
    }
  },

  {
    id: 9,
    type: "legislacio",
    question: "La STC 31/2010 va:",
    options: [
      "Anul·lar el règim institucional d’Aran.",
      "Validar el règim institucional amb matisos lingüístics.",
      "Declarar inconstitucional l’aranès.",
      "Eliminar el Conselh Generau."
    ],
    correct: 1,
    explanation: {
      correct: "Va validar el règim institucional, amb matisos sobre l’oficialitat lingüística.",
      incorrect: [
        "No va anul·lar el règim.",
        "No va eliminar l’aranès.",
        "No va suprimir el Conselh."
      ]
    }
  },

  /* ============================
     11 PREGUNTES CONTINGUT
  ============================ */

  {
    id: 10,
    type: "contingut",
    question: "El poble aranès exerceix l’autogovern mitjançant:",
    options: [
      "Només el Conselh Generau.",
      "L’Estatut i institucions pròpies.",
      "Les vegueries.",
      "La Diputació."
    ],
    correct: 1,
    explanation: {
      correct: "L’art. 11 EAC estableix que l’autogovern s’exerceix mitjançant l’Estatut i institucions pròpies.",
      incorrect: [
        "No es limita només al Conselh.",
        "No és mitjançant vegueries.",
        "No és competència de diputacions."
      ]
    }
  },

  {
    id: 11,
    type: "contingut",
    question: "El Ple del Conselh està format per:",
    options: [
      "6 membres.",
      "10 membres.",
      "13 membres.",
      "25 membres."
    ],
    correct: 2,
    explanation: {
      correct: "El Ple està format per 13 membres elegits per sufragi universal.",
      incorrect: [
        "No són 6 membres.",
        "No són 10.",
        "No són 25."
      ]
    }
  },

  {
    id: 12,
    type: "contingut",
    question: "La capital administrativa d’Aran és:",
    options: [
      "Bossòst.",
      "Arties.",
      "Vielha.",
      "Salardú."
    ],
    correct: 2,
    explanation: {
      correct: "La seu del Conselh i capital és Vielha.",
      incorrect: [
        "No és Bossòst.",
        "No és Arties.",
        "No és Salardú."
      ]
    }
  },

  {
    id: 13,
    type: "contingut",
    question: "El sistema electoral del Conselh es basa en:",
    options: [
      "Províncies.",
      "Comarques.",
      "Terçons històrics.",
      "Districtes judicials."
    ],
    correct: 2,
    explanation: {
      correct: "El sistema s’articula segons els sis terçons històrics.",
      incorrect: [
        "No es basa en províncies.",
        "No es basa en comarques.",
        "No en districtes judicials."
      ]
    }
  },

  {
    id: 14,
    type: "contingut",
    question: "L’Aran participa en iniciatives legislatives que afecten el seu règim mitjançant:",
    options: [
      "Dret de veto.",
      "Consulta obligatòria al Conselh.",
      "Referèndum propi.",
      "Acord amb el TC."
    ],
    correct: 1,
    explanation: {
      correct: "El Conselh ha de ser consultat obligatòriament en aquestes iniciatives.",
      incorrect: [
        "No té dret de veto.",
        "No és referèndum.",
        "No depèn del TC."
      ]
    }
  },

  {
    id: 15,
    type: "contingut",
    question: "La singularitat d’Aran es fonamenta en:",
    options: [
      "Només factors econòmics.",
      "Identitat cultural, històrica, geogràfica i lingüística.",
      "Només decisió parlamentària.",
      "Només voluntat popular actual."
    ],
    correct: 1,
    explanation: {
      correct: "L’EAC defineix Aran com realitat occitana amb identitat cultural, històrica, geogràfica i lingüística.",
      incorrect: [
        "No es limita a factors econòmics.",
        "No és només decisió política.",
        "No es basa únicament en voluntat actual."
      ]
    }
  },

  {
    id: 16,
    type: "contingut",
    question: "El sistema competencial d’Aran és:",
    options: [
      "Unilateral estatal.",
      "Unilateral autonòmic.",
      "Bifront.",
      "Exclusivament local."
    ],
    correct: 2,
    explanation: {
      correct: "Combina funcions locals i pròpies de la Generalitat.",
      incorrect: [
        "No és només estatal.",
        "No és només autonòmic.",
        "No és exclusivament local."
      ]
    }
  },

  {
    id: 17,
    type: "contingut",
    question: "La Comission d’Auditors de Compdes és:",
    options: [
      "Òrgan legislatiu.",
      "Òrgan de control intern.",
      "Òrgan judicial.",
      "Òrgan estatal."
    ],
    correct: 1,
    explanation: {
      correct: "És l’òrgan de control intern del Conselh.",
      incorrect: [
        "No legisla.",
        "No és òrgan judicial.",
        "No és òrgan estatal."
      ]
    }
  },

  {
    id: 18,
    type: "contingut",
    question: "L’Aran s’integra al sistema institucional segons:",
    options: [
      "Article 6 EAC.",
      "Article 2.3 EAC.",
      "Article 140 CE.",
      "Article 149 CE."
    ],
    correct: 1,
    explanation: {
      correct: "L’article 2.3 EAC regula la interiorització institucional.",
      incorrect: [
        "No és l’art. 6.",
        "L’art. 140 CE regula municipis.",
        "L’art. 149 CE regula competències estatals."
      ]
    }
  },

  {
    id: 19,
    type: "contingut",
    question: "Els terçons històrics són:",
    options: [
      "Divisions provincials.",
      "Divisions judicials.",
      "Base territorial pròpia d’Aran.",
      "Districtes electorals estatals."
    ],
    correct: 2,
    explanation: {
      correct: "Constitueixen la base territorial pròpia del sistema aranès.",
      incorrect: [
        "No són províncies.",
        "No són divisions judicials.",
        "No són districtes estatals."
      ]
    }
  },

  {
    id: 20,
    type: "contingut",
    question: "El dret del poble aranès a decidir el seu futur apareix a:",
    options: [
      "Article 11 EAC.",
      "Disposició Addicional 1a de la Llei 1/2015.",
      "Article 3 CE.",
      "STC 31/2010."
    ],
    correct: 1,
    explanation: {
      correct: "Es recull a la Disposició Addicional 1a de la Llei 1/2015.",
      incorrect: [
        "No apareix a l’art. 11.",
        "No està a l’art. 3 CE.",
        "No és precepte de la STC."
      ]
    }
  }

];

export default punt16Ask;