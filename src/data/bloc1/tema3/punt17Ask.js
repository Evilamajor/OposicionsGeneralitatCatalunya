// Fitxer: punt17Ask.js
// Bloc 1 · Tema 3 · Punt 17 — El Tribunal de Justícia de la Unió Europea (TJUE)

export const punt17Ask = [
  /* ============================
     CONCEPTES (10)
  ============================ */

  {
    id: 1,
    type: "concept",
    question: "Quina és la missió fonamental del TJUE segons el text base?",
    options: [
      "Aprovar el pressupost anual de la Unió",
      "Garantir el respecte del dret en la interpretació i aplicació dels Tractats",
      "Representar els governs dels estats membres en el procés legislatiu",
      "Negociar acords internacionals en nom de la Unió"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La funció essencial del TJUE és garantir el respecte del dret en la interpretació i aplicació dels Tractats (art. 19 TUE).",
      incorrect: [
        "Incorrecte. El pressupost l’aproven Parlament i Consell; la Comissió l’executa.",
        "Incorrecte. Això correspon al Consell de la UE.",
        "Incorrecte. La negociació d’acords internacionals correspon principalment a la Comissió (art. 218 TFUE)."
      ]
    }
  },

  {
    id: 2,
    type: "concept",
    question: "Per què es considera el TJUE imprescindible per al caràcter supranacional de la UE?",
    options: [
      "Perquè substitueix els tribunals nacionals en tots els litigis",
      "Perquè assegura una interpretació uniforme del dret de la Unió a tots els estats membres",
      "Perquè aprova en solitari reglaments i directives",
      "Perquè dirigeix políticament la integració europea"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. Sense el TJUE, el dret de la UE quedaria fragmentat per interpretacions nacionals divergents.",
      incorrect: [
        "Incorrecte. El TJUE no substitueix els tribunals nacionals ni és una tercera instància general.",
        "Incorrecte. La funció legislativa és del Parlament i el Consell de la UE.",
        "Incorrecte. La direcció política correspon sobretot al Consell Europeu."
      ]
    }
  },

  {
    id: 3,
    type: "concept",
    question: "Quina afirmació descriu correctament l’estructura del TJUE segons el text base?",
    options: [
      "És un únic tribunal sense divisions internes",
      "És un sistema jurisdiccional que inclou Tribunal de Justícia, Tribunal General i eventualment tribunals especialitzats",
      "És un òrgan del Parlament Europeu amb funcions judicials",
      "És una agència administrativa adscrita a la Comissió"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El TJUE és un sistema jurisdiccional que inclou TJ, TG i la possible creació de tribunals especialitzats (art. 19.1 TUE).",
      incorrect: [
        "Incorrecte. No és un únic òrgan; inclou diversos nivells jurisdiccionals.",
        "Incorrecte. No depèn del Parlament ni n’és un òrgan intern.",
        "Incorrecte. No és una agència de la Comissió."
      ]
    }
  },

  {
    id: 4,
    type: "concept",
    question: "Quina és la diferència funcional bàsica entre el Tribunal de Justícia (TJ) i el Tribunal General (TG)?",
    options: [
      "El TJ resol sobretot litigis de particulars i el TG només qüestions prejudicials",
      "El TJ és instància superior (prejudicial i cassació) i el TG coneix en primera instància molts recursos de particulars i empreses",
      "El TJ només resol recursos pressupostaris i el TG només recursos legislatius",
      "El TG és jeràrquicament superior al TJ"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El TJ és la instància superior (q. prejudicials i cassació); el TG resol en primera instància molts recursos de particulars/empreses.",
      incorrect: [
        "Incorrecte. És al revés: prejudicial és principalment del TJ; particulars/empreses principalment al TG.",
        "Incorrecte. La distinció no és pressupost vs legislació.",
        "Incorrecte. El TJ és l’òrgan superior."
      ]
    }
  },

  {
    id: 5,
    type: "concept",
    question: "Quina és la funció típica dels advocats generals al Tribunal de Justícia?",
    options: [
      "Defensar els interessos de l’estat membre d’origen del jutge ponent",
      "Presentar conclusions motivades amb imparcialitat i independència en els assumptes que ho requereixin",
      "Votar la sentència final en cas d’empat",
      "Admetre o inadmetre els recursos com a filtre previ obligatori"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. Els advocats generals emeten conclusions motivades amb independència com a anàlisi jurídica prèvia quan cal.",
      incorrect: [
        "Incorrecte. No defensen interessos estatals; actuen amb imparcialitat.",
        "Incorrecte. No voten la sentència per desempatar.",
        "Incorrecte. No són un filtre previ obligatori d’admissió."
      ]
    }
  },

  {
    id: 6,
    type: "concept",
    question: "Com funciona habitualment el Tribunal de Justícia pel que fa a configuracions?",
    options: [
      "Sempre en Ple (tots els jutges) per a qualsevol assumpte",
      "Normalment en sales de 3 o 5 jutges, i en Gran Sala en casos especials",
      "Només en sales d’1 jutge per estat membre",
      "Només en Gran Sala i mai en sales reduïdes"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El TJ actua habitualment en sales de 3 o 5; Gran Sala (15) per casos d’importància/complexitat o a petició.",
      incorrect: [
        "Incorrecte. El Ple queda reservat a supòsits excepcionals o determinats processos.",
        "Incorrecte. No és un model d’1 jutge per estat en cada assumpte.",
        "Incorrecte. No actua sempre en Gran Sala."
      ]
    }
  },

  {
    id: 7,
    type: "concept",
    question: "Què caracteritza el recurs de cassació contra sentències del Tribunal General?",
    options: [
      "Permet revisar fets i proves lliurement",
      "És limitat a qüestions de dret (incompetència, irregularitats procedimentals o infracció del dret de la UE)",
      "Es presenta davant tribunals nacionals",
      "Només el poden interposar particulars i mai institucions"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La cassació davant el TJ és limitada a qüestions de dret.",
      incorrect: [
        "Incorrecte. No és una revisió plena de fets i proves.",
        "Incorrecte. Es tramita dins el sistema jurisdiccional de la UE, no davant tribunals nacionals.",
        "Incorrecte. No és un mecanisme reservat només a particulars."
      ]
    }
  },

  {
    id: 8,
    type: "concept",
    question: "Quina és la idea clau de la qüestió prejudicial (art. 267 TFUE) segons el text base?",
    options: [
      "És un recurs contra sentències nacionals perquè el TJUE actuï com a tercera instància",
      "És un mecanisme de cooperació perquè el TJUE fixi el sentit oficial del dret de la UE i el jutge nacional l’apliqui",
      "És una via perquè els governs anul·lin lleis europees",
      "És un procediment per aprovar directives més ràpidament"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. És cooperació, no jerarquia: el TJ interpreta/valida, i el jutge nacional aplica al cas concret, garantint uniformitat.",
      incorrect: [
        "Incorrecte. El TJUE no és una tercera instància general per a qualsevol litigi.",
        "Incorrecte. No és un mecanisme d’anul·lació política per governs.",
        "Incorrecte. No és un procediment legislatiu."
      ]
    }
  },

  {
    id: 9,
    type: "concept",
    question: "Què estableix el principi de primacia del dret de la UE (Costa c. ENEL, 1964) segons el text base?",
    options: [
      "Que el dret nacional preval sempre sobre el dret de la UE",
      "Que el dret de la UE preval sobre el dret intern i el jutge nacional ha d’inaplicar la norma interna contrària",
      "Que només preval el dret de la UE si l’estat ho ratifica anualment",
      "Que el dret de la UE només preval en matèria pressupostària"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. En cas de conflicte, preval el dret de la UE i el jutge nacional ha d’inaplicar la norma interna incompatible.",
      incorrect: [
        "Incorrecte. És el contrari del principi de primacia.",
        "Incorrecte. No depèn d’una ratificació anual.",
        "Incorrecte. No és limitat al pressupost."
      ]
    }
  },

  {
    id: 10,
    type: "concept",
    question: "Quina condició essencial destaca el text base per a l’efecte directe (Van Gend en Loos, 1963)?",
    options: [
      "Que la norma sigui clara, precisa i incondicional",
      "Que la norma estigui transposada sempre per llei estatal prèvia",
      "Que la norma sigui aprovada per unanimitat al Consell Europeu",
      "Que la norma sigui una recomanació o dictamen"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. L’efecte directe requereix que la norma sigui clara, precisa i incondicional per ser invocable directament.",
      incorrect: [
        "Incorrecte. L’efecte directe s’oposa justament a exigir sempre mesures intermèdies.",
        "Incorrecte. El Consell Europeu no aprova normes legislatives.",
        "Incorrecte. Recomanacions i dictàmens no són, en principi, vinculants."
      ]
    }
  },

  /* ============================
     LEGISLACIÓ (5)
  ============================ */

  {
    id: 11,
    type: "law",
    question: "Quin article del TUE defineix la missió del TJUE de garantir el respecte del dret en la interpretació i aplicació dels Tractats?",
    options: [
      "Art. 19 TUE",
      "Art. 13 TUE",
      "Art. 14 TUE",
      "Art. 17 TUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. L’art. 19 TUE estableix la missió jurisdiccional del TJUE.",
      incorrect: [
        "Incorrecte. L’art. 13 TUE enumera institucions, però la missió jurisdiccional es concreta a l’art. 19.",
        "Incorrecte. L’art. 14 TUE regula el Parlament Europeu.",
        "Incorrecte. L’art. 17 TUE regula la Comissió."
      ]
    }
  },

  {
    id: 12,
    type: "law",
    question: "Quin article del TFUE regula la qüestió prejudicial?",
    options: [
      "Art. 263 TFUE",
      "Art. 265 TFUE",
      "Art. 267 TFUE",
      "Art. 258 TFUE"
    ],
    correct: 2,
    explanation: {
      correct:
        "Correcte. La qüestió prejudicial es regula a l’art. 267 TFUE.",
      incorrect: [
        "Incorrecte. 263 TFUE regula el recurs d’anul·lació.",
        "Incorrecte. 265 TFUE regula el recurs per omissió.",
        "Incorrecte. 258 TFUE regula el recurs per incompliment iniciat per la Comissió."
      ]
    }
  },

  {
    id: 13,
    type: "law",
    question: "Quins articles del TFUE regulen el recurs per incompliment segons el text base?",
    options: [
      "Arts. 258–260 TFUE",
      "Arts. 290–291 TFUE",
      "Arts. 223–234 TFUE",
      "Arts. 237–243 TFUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. El recurs per incompliment es regula als arts. 258–260 TFUE.",
      incorrect: [
        "Incorrecte. 290–291 TFUE regulen actes delegats i d’execució.",
        "Incorrecte. 223–234 TFUE s’associen al funcionament del Parlament (en el temari anterior).",
        "Incorrecte. 237–243 TFUE s’associen al funcionament del Consell (en el temari anterior)."
      ]
    }
  },

  {
    id: 14,
    type: "law",
    question: "Quin article del TFUE regula el recurs d’anul·lació?",
    options: [
      "Art. 263 TFUE",
      "Art. 265 TFUE",
      "Art. 244 TFUE",
      "Art. 294 TFUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. El recurs d’anul·lació es regula a l’art. 263 TFUE.",
      incorrect: [
        "Incorrecte. 265 TFUE és el recurs per omissió.",
        "Incorrecte. 244 TFUE regula el reglament intern de la Comissió.",
        "Incorrecte. 294 TFUE regula el procediment legislatiu ordinari."
      ]
    }
  },

  {
    id: 15,
    type: "law",
    question: "Quin article del TFUE regula el recurs per omissió?",
    options: [
      "Art. 265 TFUE",
      "Art. 263 TFUE",
      "Art. 267 TFUE",
      "Art. 258 TFUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. El recurs per omissió es regula a l’art. 265 TFUE.",
      incorrect: [
        "Incorrecte. 263 TFUE és el recurs d’anul·lació.",
        "Incorrecte. 267 TFUE és la qüestió prejudicial.",
        "Incorrecte. 258 TFUE s’emmarca en el recurs per incompliment."
      ]
    }
  },

  /* ============================
     TRAMPA (5)
  ============================ */

  {
    id: 16,
    type: "trap",
    question: "On té la seu permanent el TJUE segons el text base?",
    options: [
      "Estrasburg",
      "Brussel·les",
      "Luxemburg (Kirchberg)",
      "Frankfurt"
    ],
    correct: 2,
    explanation: {
      correct:
        "Correcte. El TJUE té la seu permanent a Kirchberg (Luxemburg).",
      incorrect: [
        "Incorrecte. Estrasburg és seu principal de plens del Parlament Europeu.",
        "Incorrecte. Brussel·les és seu de comissions i plens addicionals del Parlament i d’altres institucions.",
        "Incorrecte. Frankfurt és seu del Banc Central Europeu."
      ]
    }
  },

  {
    id: 17,
    type: "trap",
    question: "Quina afirmació és correcta sobre la relació entre jutges nacionals i TJUE en la qüestió prejudicial?",
    options: [
      "És una relació jeràrquica: el TJUE substitueix el jutge nacional i resol el cas complet",
      "És cooperació: el TJUE interpreta/valida el dret de la UE i el jutge nacional aplica al cas",
      "El jutge nacional no pot plantejar mai qüestions prejudicials",
      "Només el Consell de la UE pot activar la qüestió prejudicial"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. No hi ha jerarquia; hi ha cooperació: TJUE fixa el sentit i el jutge nacional aplica al cas concret.",
      incorrect: [
        "Incorrecte. El TJUE no resol el litigi nacional com a tercera instància general.",
        "Incorrecte. Els jutges nacionals sí que poden (i a vegades han de) plantejar qüestions.",
        "Incorrecte. No és una competència del Consell."
      ]
    }
  },

  {
    id: 18,
    type: "trap",
    question: "Quina confusió d’examen cal evitar especialment segons el punt 17?",
    options: [
      "Pensar que el TJUE és una tercera instància per a qualsevol judici nacional",
      "Pensar que el TJUE només resol litigis entre particulars d’un mateix estat",
      "Pensar que el TJUE només actua en matèria pressupostària",
      "Pensar que el TJUE és un òrgan legislatiu"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. El TJUE no és una tercera instància general; és un tribunal especialitzat en dret de la Unió.",
      incorrect: [
        "Incorrecte. Pot intervenir en molts àmbits, no només litigis interns d’un estat.",
        "Incorrecte. La seva competència és molt més àmplia que el pressupost.",
        "Incorrecte. La funció legislativa és del Parlament i el Consell, no del TJUE."
      ]
    }
  },

  {
    id: 19,
    type: "trap",
    question: "Quina afirmació és correcta sobre qui pot interposar un recurs per incompliment?",
    options: [
      "Només particulars i empreses",
      "La Comissió o un estat membre contra un altre estat membre",
      "Només el Parlament Europeu contra la Comissió",
      "Només el Tribunal General contra el Tribunal de Justícia"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El recurs per incompliment pot ser interposat per la Comissió o per un estat membre contra un altre estat membre (arts. 258–260 TFUE).",
      incorrect: [
        "Incorrecte. Particulars/empreses no interposen directament el recurs per incompliment en aquest esquema.",
        "Incorrecte. El Parlament no és el legitimant principal del recurs per incompliment.",
        "Incorrecte. Els tribunals no es demanden així."
      ]
    }
  },

  {
    id: 20,
    type: "trap",
    question: "Quina afirmació diferencia millor el Tribunal General (TG) del Tribunal de Justícia (TJ) segons el text base?",
    options: [
      "El TG és la instància superior i resol prejudicials; el TJ és primera instància de particulars",
      "El TJ té funció constitucional/prejudicial i cassació; el TG és primera instància sobretot per a particulars i empreses",
      "El TJ només resol casos d’empreses i el TG només casos d’estats",
      "No existeix TG; només hi ha TJUE com a únic tribunal"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El TJ resol prejudicials i cassació; el TG coneix en primera instància molts recursos de particulars i empreses.",
      incorrect: [
        "Incorrecte. És al revés: prejudicial i superioritat corresponen al TJ.",
        "Incorrecte. La distribució competencial no és aquesta.",
        "Incorrecte. El sistema inclou TJ i TG, i eventualment tribunals especialitzats."
      ]
    }
  }
];