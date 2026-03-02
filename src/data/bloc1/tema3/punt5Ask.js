// src/data/bloc-1/tema-3/ask/punt5Ask.js
export const punt5Ask = {
  title: "Bloc I · Tema 3 · Punt 5 — La Presidència de la Generalitat: elecció i funcions",
  questions: [

    /* =========================
       5 PREGUNTES DE LEGISLACIÓ
    ========================== */

    {
      type: "legislacio",
      question: "Quin article de la Constitució Espanyola predetermina, per a determinades comunitats autònomes, una organització basada en assemblea legislativa, consell de govern i president elegit per l’assemblea?",
      options: ["Art. 152.1 CE", "Art. 151 CE", "Art. 153 CE", "Art. 67 CE"],
      correct: 0,
      explanationCorrect: "L’art. 152.1 CE estableix l’esquema institucional bàsic: assemblea legislativa, consell de govern i president elegit per l’assemblea entre els seus membres.",
      explanationIncorrect: [
        "",
        "Incorrecte. L’art. 151 CE és la via d’accés a l’autonomia, però el model institucional el concreta l’art. 152.1 CE.",
        "Incorrecte. L’art. 153 CE regula el control jurisdiccional de l’activitat autonòmica.",
        "Incorrecte. L’art. 67 CE regula el mandat imperatiu a les Corts Generals, no l’organització autonòmica."
      ]
    },

    {
      type: "legislacio",
      question: "Segons el text base, quin article de l’EAC defineix la posició institucional de la Presidència (i es relaciona amb la seva triple dimensió)?",
      options: ["Art. 67.1 EAC", "Art. 67.3 EAC", "Art. 74.1 EAC", "Art. 55.2 EAC"],
      correct: 0,
      explanationCorrect: "El text base vincula la triple dimensió institucional amb l’art. 67.1 EAC i l’art. 2 de la Llei 13/2008.",
      explanationIncorrect: [
        "",
        "Incorrecte. L’art. 67.3 EAC tracta la dissolució automàtica per manca d’investidura.",
        "Incorrecte. L’art. 74.1 EAC tracta la responsabilitat política solidària del president i consellers davant el Parlament.",
        "Incorrecte. L’art. 55.2 EAC regula la funció general de control i impuls del Parlament sobre el Govern."
      ]
    },

    {
      type: "legislacio",
      question: "Segons el text base (art. 4 Llei 13/2008), quin termini té el president o presidenta del Parlament per proposar un candidat després de constituir-se la legislatura o produir-se un cessament?",
      options: ["10 dies", "5 dies", "15 dies", "48 hores"],
      correct: 0,
      explanationCorrect: "El text base indica que el president del Parlament ha de proposar candidat en un termini de 10 dies.",
      explanationIncorrect: [
        "",
        "Incorrecte. 5 dies és el termini que el text base associa a la presa de possessió després del nomenament.",
        "Incorrecte. 15 dies no és el termini indicat per la proposta.",
        "Incorrecte. 48 hores és el lapse entre la primera i la segona votació d’investidura."
      ]
    },

    {
      type: "legislacio",
      question: "Quin article de l’EAC preveu la dissolució automàtica si transcorren dos mesos des de la primera votació d’investidura sense president elegit?",
      options: ["Art. 67.3 EAC", "Art. 75 EAC", "Art. 74.1 EAC", "Art. 56.2 EAC"],
      correct: 0,
      explanationCorrect: "L’art. 67.3 EAC estableix la dissolució automàtica per manca d’investidura després de dos mesos des de la primera votació.",
      explanationIncorrect: [
        "",
        "Incorrecte. L’art. 75 EAC regula la dissolució anticipada (i els seus límits), no la dissolució automàtica.",
        "Incorrecte. L’art. 74.1 EAC tracta responsabilitat política solidària.",
        "Incorrecte. L’art. 56.2 EAC tracta la majoria reforçada per a la llei electoral."
      ]
    },

    {
      type: "legislacio",
      question: "Segons el text base, la presa de possessió del president o presidenta investit/da s’ha de fer en quin termini a partir del nomenament?",
      options: ["5 dies", "10 dies", "15 dies", "40 dies"],
      correct: 0,
      explanationCorrect: "El text base indica que la presa de possessió s’ha de fer en un termini de cinc dies a partir del nomenament.",
      explanationIncorrect: [
        "",
        "Incorrecte. 10 dies és el termini del president del Parlament per proposar candidat.",
        "Incorrecte. 15 dies no és el termini indicat per la presa de possessió.",
        "Incorrecte. 40 dies és un referent electoral (eleccions 40–60 dies després de la convocatòria) en cas de dissolució automàtica, segons el text base."
      ]
    },

    /* =========================
       5 PREGUNTES TRAMPA
    ========================== */

    {
      type: "trampa",
      question: "En la primera votació d’investidura del president, n’hi ha prou amb la majoria simple de vots a favor.",
      options: ["Sí, sempre", "Sí, si el candidat és el més votat", "No, cal majoria absoluta", "Només si hi ha abstencions"],
      correct: 2,
      explanationCorrect: "Segons el text base, la primera votació exigeix majoria absoluta (mínim 68/135).",
      explanationIncorrect: [
        "Incorrecte. La majoria simple és suficient només a la segona votació (48 hores després).",
        "Incorrecte. Ser “el més votat” no substitueix el requisit de majoria absoluta en la primera votació.",
        "",
        "Incorrecte. Les abstencions poden influir en la majoria simple, però no canvien l’exigència de majoria absoluta a la primera votació."
      ]
    },

    {
      type: "trampa",
      question: "El candidat a la Presidència pot ser qualsevol ciutadà major d’edat, encara que no sigui diputat.",
      options: ["Sí, perquè és un càrrec executiu", "Sí, si té suport d’un grup parlamentari", "No, ha de ser necessàriament membre del Parlament", "Només si ho autoritza el Rei"],
      correct: 2,
      explanationCorrect: "El text base estableix que el candidat ha de ser necessàriament membre del Parlament (procediment intraparlamentari).",
      explanationIncorrect: [
        "Incorrecte. En el model parlamentari català, el president és elegit d’entre els diputats.",
        "Incorrecte. El suport polític és rellevant, però no substitueix el requisit de ser diputat.",
        "",
        "Incorrecte. El Rei nomena després de la investidura; no pot autoritzar un candidat que no compleixi requisits."
      ]
    },

    {
      type: "trampa",
      question: "Si no hi ha president elegit després de dos mesos, la legislatura continua i simplement es repeteixen votacions fins que hi hagi acord.",
      options: ["Sí, perquè el Parlament no es pot dissoldre automàticament", "No, hi ha dissolució automàtica i convocatòria d’eleccions", "Sí, però només si el president del Parlament ho decideix", "No, però només si hi ha moció de censura en tràmit"],
      correct: 1,
      explanationCorrect: "Segons el text base (art. 67.3 EAC), transcorreguts dos mesos des de la primera votació sense investidura, hi ha dissolució automàtica i convocatòria d’eleccions.",
      explanationIncorrect: [
        "Incorrecte. L’EAC preveu expressament la dissolució automàtica en aquest supòsit.",
        "",
        "Incorrecte. No és una decisió discrecional del president del Parlament: és automàtic.",
        "Incorrecte. El supòsit de 2 mesos sense investidura és independent de la moció de censura."
      ]
    },

    {
      type: "trampa",
      question: "El president en funcions pot dissoldre el Parlament si considera que hi ha bloqueig institucional.",
      options: ["Sí, perquè manté totes les funcions del càrrec", "Sí, si ho aprova el Govern en funcions", "No, el text base indica que ho té prohibit", "Només si el TC ho avala"],
      correct: 2,
      explanationCorrect: "El text base assenyala que el president en funcions té prohibit dissoldre el Parlament.",
      explanationIncorrect: [
        "Incorrecte. El president en funcions està limitat al despatx ordinari i té prohibicions específiques.",
        "Incorrecte. La deliberació del Govern en funcions no elimina la prohibició destacada al text base.",
        "",
        "Incorrecte. El TC no autoritza dissolucions polítiques."
      ]
    },

    {
      type: "trampa",
      question: "La promulgació de lleis a Catalunya és una funció exclusiva del Parlament, sense intervenció del president.",
      options: ["Sí, perquè el Parlament aprova la llei", "Sí, perquè el DOGC és parlamentari", "No, el president promulga en nom del Rei i ordena la publicació", "Només en lleis de pressupostos"],
      correct: 2,
      explanationCorrect: "Segons el text base, el president promulga en nom del Rei les lleis i ordena la seva publicació.",
      explanationIncorrect: [
        "Incorrecte. Aprovar és funció del Parlament; promulgar i ordenar la publicació és funció presidencial segons el text base.",
        "Incorrecte. El DOGC és el diari oficial de la Generalitat, però la promulgació recau en la Presidència en nom del Rei.",
        "",
        "Incorrecte. No és només per pressupostos; és una funció institucional general."
      ]
    },

    /* =========================
       10 PREGUNTES DE CONTINGUT
    ========================== */

    {
      type: "contingut",
      question: "Quina triple dimensió institucional caracteritza la Presidència segons el text base?",
      options: [
        "Més alta representació de la Generalitat, direcció del Govern i representació ordinària de l’Estat a Catalunya",
        "Direcció del Parlament, control del TC i representació dels municipis",
        "Direcció del poder judicial, comandament militar i representació exterior",
        "Només representació simbòlica sense funcions executives"
      ],
      correct: 0,
      explanationCorrect: "El text base defineix la triple dimensió: representació de la Generalitat, direcció del Govern i representació ordinària de l’Estat a Catalunya.",
      explanationIncorrect: [
        "",
        "Incorrecte. El president no dirigeix el Parlament ni controla el TC.",
        "Incorrecte. No exerceix direcció del poder judicial ni comandament militar.",
        "Incorrecte. Té funcions executives i parlamentàries, no només simbòliques."
      ]
    },

    {
      type: "contingut",
      question: "Com es defineix el procediment d’elecció del president segons el text base?",
      options: ["Popular directe (elecció ciutadana)", "Exclusivament intraparlamentari", "Designació del Govern de l’Estat", "Elecció per referèndum"],
      correct: 1,
      explanationCorrect: "És un procediment intraparlamentari: investidura al Parlament i posterior nomenament formal.",
      explanationIncorrect: [
        "Incorrecte. No hi ha elecció directa ciutadana del president.",
        "",
        "Incorrecte. El Govern de l’Estat no designa el president.",
        "Incorrecte. No s’exigeix referèndum per a l’elecció."
      ]
    },

    {
      type: "contingut",
      question: "Què passa si el candidat no obté majoria absoluta en la primera votació d’investidura?",
      options: [
        "S’ha de dissoldre immediatament el Parlament",
        "Es pot fer una segona votació 48 hores després amb majoria simple",
        "El Rei nomena igualment el candidat",
        "El candidat queda automàticament descartat i s’ha de proposar un altre"
      ],
      correct: 1,
      explanationCorrect: "El text base preveu una segona votació 48 hores després, on n’hi ha prou amb majoria simple.",
      explanationIncorrect: [
        "Incorrecte. La dissolució automàtica és als 2 mesos des de la primera votació sense investidura, no immediata.",
        "",
        "Incorrecte. El nomenament del Rei ve després de la investidura parlamentària.",
        "Incorrecte. No queda descartat automàticament; pot anar a segona votació."
      ]
    },

    {
      type: "contingut",
      question: "Quan comença a comptar el termini de dos mesos que pot portar a dissolució automàtica per manca d’investidura?",
      options: [
        "Des de la constitució del Parlament",
        "Des de la proposta de candidat",
        "Des de la primera votació d’investidura",
        "Des de la segona votació d’investidura"
      ],
      correct: 2,
      explanationCorrect: "El text base indica expressament que el còmput és des de la primera votació d’investidura.",
      explanationIncorrect: [
        "Incorrecte. La constitució del Parlament no és el moment de còmput indicat al text base.",
        "Incorrecte. La proposta de candidat no és el moment de còmput indicat.",
        "",
        "Incorrecte. No s’inicia des de la segona votació, sinó des de la primera."
      ]
    },

    {
      type: "contingut",
      question: "Quina seqüència descriu correctament el procés formal fins a l’entrada en funcions del president?",
      options: [
        "Nomenament del Rei → debat → votació → publicació",
        "Investidura parlamentària → reial decret de nomenament → publicació DOGC/BOE → presa de possessió",
        "Proposta de candidat → publicació al DOGC → possessió → votació",
        "Debat d’investidura → possessió → nomenament del Rei"
      ],
      correct: 1,
      explanationCorrect: "La seqüència correcta és: investidura al Parlament, nomenament pel Rei per RD contrasignat, publicació DOGC/BOE i presa de possessió.",
      explanationIncorrect: [
        "Incorrecte. El nomenament no és anterior a la investidura.",
        "",
        "Incorrecte. La publicació i la possessió no van abans de la votació d’investidura.",
        "Incorrecte. La possessió és posterior al nomenament."
      ]
    },

    {
      type: "contingut",
      question: "Quina de les següents és una funció institucional del president segons el text base?",
      options: [
        "Aprovar el pressupost anual sense el Parlament",
        "Promulgar en nom del Rei les lleis i ordenar-ne la publicació",
        "Admetre a tràmit les iniciatives legislatives a la Mesa",
        "Presidir el Tribunal Superior de Justícia de Catalunya"
      ],
      correct: 1,
      explanationCorrect: "La promulgació en nom del Rei i l’ordre de publicació és una funció institucional del president segons el text base.",
      explanationIncorrect: [
        "Incorrecte. El pressupost requereix aprovació parlamentària; el president no el pot aprovar unilateralment.",
        "",
        "Incorrecte. L’admissió a tràmit és funció de la Mesa del Parlament.",
        "Incorrecte. El president no presideix l’òrgan judicial."
      ]
    },

    {
      type: "contingut",
      question: "Quina és una funció executiva i de direcció política del president segons el text base?",
      options: [
        "Nomenar i separar lliurement els consellers",
        "Convalidar decrets llei en 30 dies",
        "Declarar inconstitucional una llei",
        "Fixar el reglament del Parlament"
      ],
      correct: 0,
      explanationCorrect: "El text base atribueix al president el nomenament i cessament de consellers, com a cap del Govern.",
      explanationIncorrect: [
        "",
        "Incorrecte. La convalidació de decrets llei correspon al Parlament, no al president.",
        "Incorrecte. La declaració d’inconstitucionalitat correspon al TC.",
        "Incorrecte. El reglament del Parlament és competència del mateix Parlament."
      ]
    },

    {
      type: "contingut",
      question: "Quina de les següents és una funció parlamentària del president segons el text base?",
      options: [
        "Plantejar una qüestió de confiança (prèvia deliberació del Govern)",
        "Aprovar dictàmens de ponència",
        "Designar els diputats de la Diputació Permanent",
        "Aprovar la Llei electoral per 2/3"
      ],
      correct: 0,
      explanationCorrect: "El text base inclou com a funció parlamentària del president plantejar qüestió de confiança, prèvia deliberació del Govern.",
      explanationIncorrect: [
        "",
        "Incorrecte. Els dictàmens són resultat del treball parlamentari (ponència/comissió), no decisió presidencial.",
        "Incorrecte. La Diputació Permanent és organització interna del Parlament.",
        "Incorrecte. Les lleis les aprova el Parlament; el president no “aprova” lleis."
      ]
    },

    {
      type: "contingut",
      question: "Quina afirmació és correcta sobre la responsabilitat política segons el text base?",
      options: [
        "La responsabilitat política només pot exigir-se als tribunals",
        "La responsabilitat política comporta cessament i es diferencia de la penal",
        "La responsabilitat política s’exigeix només amb preguntes orals",
        "La responsabilitat política no afecta el president, només els consellers"
      ],
      correct: 1,
      explanationCorrect: "El text base diferencia responsabilitat política (pèrdua de confiança i cessament) de la responsabilitat penal (judicial).",
      explanationIncorrect: [
        "Incorrecte. Els tribunals exerceixen responsabilitat judicial, no política.",
        "",
        "Incorrecte. Les preguntes són control ordinari però no són el mecanisme de cessament.",
        "Incorrecte. El president és el principal subjecte de confiança i responsabilitat política."
      ]
    },

    {
      type: "contingut",
      question: "Quina de les següents és una prohibició del president en funcions segons el text base?",
      options: [
        "Convocar i presidir reunions del Govern",
        "Plantejar una qüestió de confiança",
        "Gestionar el despatx ordinari dels assumptes públics",
        "Representar institucionalment la Generalitat"
      ],
      correct: 1,
      explanationCorrect: "El text base assenyala que el president en funcions té prohibit plantejar una qüestió de confiança (i també dissoldre el Parlament, entre d’altres).",
      explanationIncorrect: [
        "Incorrecte. El text base limita a despatx ordinari; certes funcions de coordinació poden existir, però amb límits i sense instruments polítics forts.",
        "",
        "Incorrecte. El despatx ordinari és precisament el que pot fer.",
        "Incorrecte. Manté una certa representació institucional, però amb restriccions i sense decisions de gran abast polític."
      ]
    }
  ]
};

export default punt5Ask;