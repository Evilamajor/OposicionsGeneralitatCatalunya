const punt15Ask = [
  /* ============================
     5 PREGUNTES TRAMPA
  ============================ */

  {
    id: 1,
    type: "trampa",
    question: "L’autonomia dels ens locals reconeguda a l’article 137 CE és:",
    options: [
      "Autonomia política amb potestat legislativa pròpia.",
      "Autonomia administrativa per a la gestió dels seus interessos.",
      "Autonomia financera plena i independent.",
      "Autonomia normativa equiparable a la de les Comunitats Autònomes."
    ],
    correct: 1,
    explanation: {
      correct: "Els ens locals tenen autonomia administrativa, no política ni legislativa.",
      incorrect: [
        "Els ens locals no tenen potestat legislativa.",
        "La seva autonomia financera està condicionada per la CE i la legislació estatal.",
        "Només les Comunitats Autònomes tenen autonomia política amb potestat legislativa."
      ]
    }
  },

  {
    id: 2,
    type: "trampa",
    question: "El Consell de Governs Locals és:",
    options: [
      "L’òrgan de govern dels municipis catalans.",
      "Un òrgan de representació i consulta davant la Generalitat.",
      "Una institució constitucional estatal.",
      "L’òrgan que substitueix les Diputacions."
    ],
    correct: 1,
    explanation: {
      correct: "És un òrgan de representació i consulta, no de govern.",
      incorrect: [
        "No és òrgan executiu dels municipis.",
        "No és una institució constitucional estatal.",
        "No substitueix les Diputacions."
      ]
    }
  },

  {
    id: 3,
    type: "trampa",
    question: "La Generalitat pot suprimir unilateralment la província segons l’EAC 2006?",
    options: [
      "Sí, perquè la vegueria la substitueix automàticament.",
      "Sí, si ho aprova el Parlament de Catalunya.",
      "No, perquè la província és entitat constitucionalment necessària.",
      "Sí, si ho autoritza el Consell de Governs Locals."
    ],
    correct: 2,
    explanation: {
      correct: "La STC 31/2010 estableix que la província és entitat constitucionalment necessària.",
      incorrect: [
        "La vegueria no pot eliminar la província per si sola.",
        "El Parlament no pot suprimir una entitat constitucional.",
        "El Consell de Governs Locals no té aquesta competència."
      ]
    }
  },

  {
    id: 4,
    type: "trampa",
    question: "El municipi és:",
    options: [
      "Un ens supramunicipal.",
      "L’ens local bàsic segons l’EAC.",
      "Una divisió territorial de l’Estat sense autonomia.",
      "Una entitat amb potestat legislativa pròpia."
    ],
    correct: 1,
    explanation: {
      correct: "L’article 86.1 EAC defineix el municipi com a ens local bàsic.",
      incorrect: [
        "No és supramunicipal.",
        "Té autonomia garantida per l’art. 140 CE.",
        "No té potestat legislativa."
      ]
    }
  },

  {
    id: 5,
    type: "trampa",
    question: "El principi que orienta portar competències cap a l’administració més propera al ciutadà és:",
    options: [
      "Suficiència financera.",
      "Diferenciació.",
      "Subsidiarietat.",
      "Jerarquia normativa."
    ],
    correct: 2,
    explanation: {
      correct: "El principi de subsidiarietat estableix que les competències s’exerceixen pel nivell més proper.",
      incorrect: [
        "La suficiència financera es refereix a recursos econòmics.",
        "La diferenciació atén la diversitat municipal.",
        "La jerarquia normativa no és un principi de distribució competencial."
      ]
    }
  },

  /* ============================
     5 PREGUNTES LEGISLACIÓ
  ============================ */

  {
    id: 6,
    type: "legislacio",
    question: "L’article 137 CE estableix que l’Estat s’organitza en:",
    options: [
      "Municipis, comarques i comunitats autònomes.",
      "Municipis, províncies i comunitats autònomes.",
      "Municipis i comunitats autònomes.",
      "Províncies i vegueries."
    ],
    correct: 1,
    explanation: {
      correct: "L’art. 137 CE enumera municipis, províncies i comunitats autònomes.",
      incorrect: [
        "Les comarques no apareixen a la CE.",
        "Les províncies també hi figuren.",
        "Les vegueries no són entitats constitucionals."
      ]
    }
  },

  {
    id: 7,
    type: "legislacio",
    question: "L’article 140 CE garanteix:",
    options: [
      "La potestat legislativa municipal.",
      "L’autonomia municipal i la seva personalitat jurídica plena.",
      "La creació obligatòria de comarques.",
      "La suficiència financera autonòmica."
    ],
    correct: 1,
    explanation: {
      correct: "L’art. 140 CE garanteix autonomia municipal i personalitat jurídica plena.",
      incorrect: [
        "No reconeix potestat legislativa.",
        "No regula comarques.",
        "No regula finances autonòmiques."
      ]
    }
  },

  {
    id: 8,
    type: "legislacio",
    question: "L’article 149.1.18 CE atribueix a l’Estat competència sobre:",
    options: [
      "Règim electoral municipal.",
      "Legislació bàsica del règim jurídic de les administracions públiques.",
      "Organització interna de les vegueries.",
      "Creació de municipis."
    ],
    correct: 1,
    explanation: {
      correct: "L’Estat fixa les bases del règim jurídic de totes les administracions públiques.",
      incorrect: [
        "No es limita al règim electoral.",
        "Les vegueries són regulades per l’EAC.",
        "La creació municipal no és exclusiva d’aquest precepte."
      ]
    }
  },

  {
    id: 9,
    type: "legislacio",
    question: "Segons l’article 86.1 EAC, el municipi és:",
    options: [
      "L’ens supramunicipal bàsic.",
      "L’ens local bàsic de l’organització territorial de Catalunya.",
      "Una divisió administrativa estatal.",
      "Una entitat dependent de la província."
    ],
    correct: 1,
    explanation: {
      correct: "L’art. 86.1 EAC defineix el municipi com a ens local bàsic.",
      incorrect: [
        "No és supramunicipal.",
        "No és una divisió estatal.",
        "No depèn jeràrquicament de la província."
      ]
    }
  },

  {
    id: 10,
    type: "legislacio",
    question: "L’article 142 CE regula:",
    options: [
      "La reforma constitucional.",
      "La suficiència financera de les hisendes locals.",
      "La creació de vegueries.",
      "El règim electoral municipal."
    ],
    correct: 1,
    explanation: {
      correct: "L’art. 142 CE estableix el principi de suficiència financera local.",
      incorrect: [
        "No tracta reforma constitucional.",
        "No regula vegueries.",
        "No regula eleccions."
      ]
    }
  },

  /* ============================
     10 PREGUNTES CONCEPTES
  ============================ */

  {
    id: 11,
    type: "concepte",
    question: "El règim local a Catalunya es caracteritza per:",
    options: [
      "Ser exclusivament autonòmic.",
      "Ser exclusivament estatal.",
      "Tenir caràcter bifrontal.",
      "Dependre únicament de la CE."
    ],
    correct: 2,
    explanation: {
      correct: "És bifrontal: bases estatals + desplegament autonòmic.",
      incorrect: [
        "No és exclusiu autonòmic.",
        "No és exclusiu estatal.",
        "No depèn només de la CE."
      ]
    }
  },

  {
    id: 12,
    type: "concepte",
    question: "La vegueria és:",
    options: [
      "Una entitat constitucional obligatòria.",
      "Una divisió territorial de la Generalitat amb personalitat jurídica pròpia.",
      "Un ens dependent de la província.",
      "Un òrgan estatal."
    ],
    correct: 1,
    explanation: {
      correct: "És divisió territorial pròpia de la Generalitat.",
      incorrect: [
        "No és entitat constitucional necessària.",
        "No depèn jeràrquicament de la província.",
        "No és òrgan estatal."
      ]
    }
  },

  {
    id: 13,
    type: "concepte",
    question: "Les comarques són:",
    options: [
      "Entitats constitucionals.",
      "Ens locals supramunicipals amb personalitat jurídica pròpia.",
      "Òrgans interns dels municipis.",
      "Divisions estatals."
    ],
    correct: 1,
    explanation: {
      correct: "Són ens locals supramunicipals.",
      incorrect: [
        "No apareixen a la CE.",
        "No són òrgans municipals.",
        "No són divisions estatals."
      ]
    }
  },

  {
    id: 14,
    type: "concepte",
    question: "El conflicte en defensa de l’autonomia local es planteja davant:",
    options: [
      "El Parlament de Catalunya.",
      "El Govern de l’Estat.",
      "El Tribunal Constitucional.",
      "El Consell de Governs Locals."
    ],
    correct: 2,
    explanation: {
      correct: "És un procediment davant el Tribunal Constitucional.",
      incorrect: [
        "No es resol parlamentàriament.",
        "No és resolució governamental.",
        "El Consell no resol conflictes."
      ]
    }
  },

  {
    id: 15,
    type: "concepte",
    question: "La STC 31/2010 és rellevant perquè:",
    options: [
      "Elimina les vegueries.",
      "Permet suprimir províncies.",
      "Reafirma la constitucionalitat de la província.",
      "Declara inconstitucional l’autonomia municipal."
    ],
    correct: 2,
    explanation: {
      correct: "Reafirma que la província és entitat constitucionalment necessària.",
      incorrect: [
        "No elimina vegueries.",
        "No permet suprimir províncies.",
        "No anul·la l’autonomia municipal."
      ]
    }
  },

  {
    id: 16,
    type: "concepte",
    question: "Els regidors municipals són elegits per:",
    options: [
      "Designació del Parlament.",
      "Sufragi universal, igual, lliure, directe i secret.",
      "Designació del Govern.",
      "Elecció indirecta pels consells comarcals."
    ],
    correct: 1,
    explanation: {
      correct: "Així ho estableix el règim constitucional i legal municipal.",
      incorrect: [
        "No són designats pel Parlament.",
        "No els designa el Govern.",
        "No és elecció indirecta."
      ]
    }
  },

  {
    id: 17,
    type: "concepte",
    question: "La suficiència financera implica que:",
    options: [
      "Els municipis poden crear qualsevol tribut.",
      "Els ens locals han de disposar de mitjans suficients per exercir les seves funcions.",
      "La Generalitat finança íntegrament els municipis.",
      "No depenen de participacions estatals."
    ],
    correct: 1,
    explanation: {
      correct: "La suficiència financera garanteix recursos adequats.",
      incorrect: [
        "No poden crear qualsevol tribut.",
        "No implica finançament íntegre.",
        "Sí depenen de participacions."
      ]
    }
  },

  {
    id: 18,
    type: "concepte",
    question: "La interiorització estatutària significa que:",
    options: [
      "Els ens locals perden autonomia.",
      "Els ens locals integren el sistema institucional de la Generalitat.",
      "La província desapareix.",
      "La Generalitat assumeix competències municipals."
    ],
    correct: 1,
    explanation: {
      correct: "L’art. 2.3 EAC integra els ens locals dins el sistema institucional.",
      incorrect: [
        "No perden autonomia.",
        "No elimina províncies.",
        "No implica absorció competencial."
      ]
    }
  },

  {
    id: 19,
    type: "concepte",
    question: "L’alteració dels límits provincials requereix:",
    options: [
      "Llei ordinària autonòmica.",
      "Decret del Govern.",
      "Llei orgànica de les Corts Generals.",
      "Acord del Consell de Vegueria."
    ],
    correct: 2,
    explanation: {
      correct: "Ho exigeix l’art. 141.1 CE.",
      incorrect: [
        "No és llei autonòmica.",
        "No és decret governamental.",
        "No depèn del Consell de Vegueria."
      ]
    }
  },

  {
    id: 20,
    type: "concepte",
    question: "El model d’Estat compost implica:",
    options: [
      "Concentració absoluta del poder.",
      "Distribució vertical del poder entre diferents nivells territorials.",
      "Supressió de les entitats locals.",
      "Subordinació total de les CA a l’Estat."
    ],
    correct: 1,
    explanation: {
      correct: "El poder es distribueix entre instàncies centrals, autonòmiques i locals.",
      incorrect: [
        "No hi ha concentració absoluta.",
        "No suprimeix ens locals.",
        "Les CA tenen autonomia política."
      ]
    }
  }

];

export default punt15Ask;