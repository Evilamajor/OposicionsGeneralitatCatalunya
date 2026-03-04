// Fitxer: punt18Ask.js
// Bloc 1 · Tema 3 · Punt 18 — El Tribunal General i la tutela jurisdiccional

export const punt18Ask = [
  /* ============================
     CONCEPTES (10)
  ============================ */

  {
    id: 1,
    type: "concept",
    question: "Quina és la funció principal del Tribunal General (TG) dins del sistema jurisdiccional de la UE segons el text base?",
    options: [
      "Resoldre en primera instància la majoria de litigis contra actes de les institucions de la Unió",
      "Fixar el sentit oficial del dret de la UE mitjançant qüestions prejudicials",
      "Aprovar el pressupost anual de la UE",
      "Dirigir políticament les orientacions generals de la Unió"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. El TG coneix en primera instància la majoria de litigis contra actes de les institucions de la UE.",
      incorrect: [
        "Incorrecte. La funció prejudicial correspon principalment al Tribunal de Justícia (TJ).",
        "Incorrecte. El pressupost l’aproven Parlament i Consell; la Comissió l’executa.",
        "Incorrecte. La direcció política correspon sobretot al Consell Europeu."
      ]
    }
  },

  {
    id: 2,
    type: "concept",
    question: "Quina afirmació descriu millor la relació institucional del TG amb el TJUE?",
    options: [
      "El TG és una institució independent i externa al TJUE",
      "El TG forma part del TJUE com a òrgan judicial amb autonomia funcional dins del sistema",
      "El TG és un òrgan consultiu del Parlament Europeu",
      "El TG és una agència administrativa de la Comissió Europea"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El TG no és independent: forma part del TJUE, amb autonomia de funcionament però integrat al sistema de recursos.",
      incorrect: [
        "Incorrecte. El TG està integrat dins el TJUE.",
        "Incorrecte. No és un òrgan consultiu del Parlament.",
        "Incorrecte. No és una agència administrativa."
      ]
    }
  },

  {
    id: 3,
    type: "concept",
    question: "Per quin motiu es crea el Tribunal General (originàriament TPI) segons el text base?",
    options: [
      "Per substituir els tribunals nacionals en qualsevol litigi",
      "Per alleugerir la càrrega de treball del Tribunal de Justícia",
      "Per assumir funcions legislatives en lloc del Consell de la UE",
      "Per centralitzar la política exterior i de seguretat comuna"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. Es crea per descongestionar el Tribunal de Justícia davant l’augment de recursos i litigiositat.",
      incorrect: [
        "Incorrecte. No substitueix tribunals nacionals.",
        "Incorrecte. No té funcions legislatives.",
        "Incorrecte. La PESC no depèn del TG."
      ]
    }
  },

  {
    id: 4,
    type: "concept",
    question: "Quina és una característica destacada del TG respecte dels advocats generals?",
    options: [
      "Té sempre advocats generals permanents com el TJ",
      "No té advocats generals permanents, però un jutge pot assumir aquesta funció en casos complexos",
      "Els advocats generals del TG són designats pels tribunals nacionals",
      "Els advocats generals només existeixen en tribunals especialitzats"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El TG no disposa d’advocats generals permanents; excepcionalment un jutge pot exercir aquesta funció.",
      incorrect: [
        "Incorrecte. Aquesta és una característica pròpia del TJ.",
        "Incorrecte. No els designen tribunals nacionals.",
        "Incorrecte. Els advocats generals existeixen al TJ principalment."
      ]
    }
  },

  {
    id: 5,
    type: "concept",
    question: "Quin tipus de control assegura el Tribunal General principalment sobre l’actuació de les institucions de la UE?",
    options: [
      "Control polític mitjançant moció de censura",
      "Control judicial de legalitat, especialment via recurs d’anul·lació",
      "Control pressupostari mitjançant descàrrega",
      "Control diplomàtic de la representació exterior"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El TG és clau en el control judicial de legalitat dels actes de les institucions, especialment via recurs d’anul·lació.",
      incorrect: [
        "Incorrecte. La moció de censura és del Parlament sobre la Comissió.",
        "Incorrecte. La descàrrega pressupostària és del Parlament.",
        "Incorrecte. No és un control diplomàtic."
      ]
    }
  },

  {
    id: 6,
    type: "concept",
    question: "Quina és la funció del recurs de cassació contra sentències del TG, segons el text base?",
    options: [
      "Revisar completament fets i proves com una segona primera instància",
      "Permetre al TJ revisar només qüestions de dret de les decisions del TG",
      "Permetre a la Comissió anul·lar sentències del TG unilateralment",
      "Traslladar el cas als tribunals nacionals per resolució final"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La cassació davant el TJ és limitada a qüestions de dret (incompetència, irregularitats procedimentals o infracció del dret UE).",
      incorrect: [
        "Incorrecte. No és una revisió plena de fets i proves.",
        "Incorrecte. Cap institució pot anul·lar una sentència unilateralment.",
        "Incorrecte. No es trasllada als tribunals nacionals."
      ]
    }
  },

  {
    id: 7,
    type: "concept",
    question: "Quina és la idea central de la tutela judicial efectiva en el dret de la UE segons el punt 18?",
    options: [
      "Garantir que tots els litigis europeus es resolguin només al TJ",
      "Garantir accés a un jutge independent i una resolució motivada quan s’al·leguen vulneracions de drets derivats del dret UE",
      "Garantir que només els estats membres puguin impugnar actes europeus",
      "Garantir que les institucions de la UE no puguin ser controlades judicialment"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La tutela judicial efectiva assegura accés a un jutge independent i resolució motivada per protegir drets derivats del dret de la UE.",
      incorrect: [
        "Incorrecte. No implica exclusivitat del TJ; el TG és clau en l’accés dels particulars.",
        "Incorrecte. També hi ha accés de particulars en determinats supòsits (recurs d’anul·lació).",
        "Incorrecte. Justament el principi exigeix control judicial de les institucions."
      ]
    }
  },

  {
    id: 8,
    type: "concept",
    question: "Quin és l’àmbit típic de competència del Tribunal General segons el text base?",
    options: [
      "Qüestions prejudicials plantejades pels jutges nacionals",
      "Recursos directes de particulars i empreses contra actes de les institucions de la UE",
      "Nomenaments institucionals del president de la Comissió",
      "Aprovació d’actes legislatius en co-decisió"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El TG coneix principalment recursos directes de particulars i empreses contra actes de les institucions europees.",
      incorrect: [
        "Incorrecte. Les qüestions prejudicials corresponen principalment al TJ.",
        "Incorrecte. Els nomenaments no són competència jurisdiccional del TG.",
        "Incorrecte. La co-decisió legislativa és de Parlament i Consell."
      ]
    }
  },

  {
    id: 9,
    type: "concept",
    question: "Quin efecte té, segons el text base, l’accés dels particulars al TG mitjançant recurs d’anul·lació?",
    options: [
      "Impedeix qualsevol control judicial sobre la Comissió",
      "Assegura que l’activitat administrativa de la UE estigui sotmesa al dret i al control judicial",
      "Converteix el TG en un parlament judicial",
      "Fa que els tribunals nacionals deixin d’aplicar el dret de la UE"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El recurs d’anul·lació davant el TG garanteix el control judicial de legalitat dels actes institucionals i la submissió al dret.",
      incorrect: [
        "Incorrecte. És just el contrari: reforça el control judicial.",
        "Incorrecte. No és un òrgan legislatiu.",
        "Incorrecte. Els tribunals nacionals continuen aplicant el dret de la UE."
      ]
    }
  },

  {
    id: 10,
    type: "concept",
    question: "Quin error d’examen és típic segons el punt 18?",
    options: [
      "Pensar que el TG resol qüestions prejudicials",
      "Pensar que el TG és un òrgan legislatiu",
      "Pensar que el TG té funcions de control pressupostari",
      "Totes les anteriors"
    ],
    correct: 3,
    explanation: {
      correct:
        "Correcte. Són errors típics: confondre competències (prejudicial, legislació, control pressupostari) i barrejar TG amb altres institucions/òrgans.",
      incorrect: [
        "Incorrecte. És un error típic efectivament, però no l’únic.",
        "Incorrecte. També és un error típic, però no l’únic.",
        "Incorrecte. També és un error típic, però no l’únic."
      ]
    }
  },

  /* ============================
     LEGISLACIÓ (5)
  ============================ */

  {
    id: 11,
    type: "law",
    question: "Quin article del TUE estableix la missió del TJUE de garantir el respecte del dret en la interpretació i aplicació dels Tractats (base del sistema on s’integra el TG)?",
    options: [
      "Art. 19 TUE",
      "Art. 13 TUE",
      "Art. 2 TUE",
      "Art. 10 TUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. L’art. 19 TUE defineix la missió jurisdiccional del TJUE, on s’integra el Tribunal General.",
      incorrect: [
        "Incorrecte. L’art. 13 TUE enumera institucions, però la missió jurisdiccional és a l’art. 19.",
        "Incorrecte. L’art. 2 TUE conté valors (estat de dret), no la missió jurisdiccional concreta.",
        "Incorrecte. L’art. 10 TUE tracta la democràcia representativa."
      ]
    }
  },

  {
    id: 12,
    type: "law",
    question: "Quin precepte del text base identifica la tutela judicial efectiva com a dret fonamental en l’àmbit de la UE?",
    options: [
      "Art. 47 de la Carta de Drets Fonamentals de la UE",
      "Art. 14.2 TUE",
      "Art. 15 TUE",
      "Art. 294 TFUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. L’art. 47 de la Carta reconeix el dret a la tutela judicial efectiva i a un jutge independent.",
      incorrect: [
        "Incorrecte. 14.2 TUE regula la composició del Parlament.",
        "Incorrecte. 15 TUE regula el Consell Europeu.",
        "Incorrecte. 294 TFUE regula el procediment legislatiu ordinari."
      ]
    }
  },

  {
    id: 13,
    type: "law",
    question: "Quin article del TUE es cita al text base com a valor fonamental relacionat amb l’estat de dret i la tutela judicial efectiva?",
    options: [
      "Art. 2 TUE",
      "Art. 17 TUE",
      "Art. 19.2 TUE",
      "Art. 16 TUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. El text base vincula la tutela judicial efectiva amb l’estat de dret com a valor de l’art. 2 TUE.",
      incorrect: [
        "Incorrecte. 17 TUE regula la Comissió.",
        "Incorrecte. El text base no fonamenta això en un hipotètic 19.2 TUE.",
        "Incorrecte. 16 TUE regula el Consell de la UE."
      ]
    }
  },

  {
    id: 14,
    type: "law",
    question: "Quin article del TFUE és el fonament clàssic del recurs d’anul·lació (clau en la tutela judicial davant actes de la UE)?",
    options: [
      "Art. 263 TFUE",
      "Art. 267 TFUE",
      "Art. 258 TFUE",
      "Art. 265 TFUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. El recurs d’anul·lació es regula a l’art. 263 TFUE i és essencial per controlar la legalitat dels actes de la UE.",
      incorrect: [
        "Incorrecte. 267 TFUE és la qüestió prejudicial.",
        "Incorrecte. 258 TFUE s’emmarca en el recurs per incompliment.",
        "Incorrecte. 265 TFUE és el recurs per omissió."
      ]
    }
  },

  {
    id: 15,
    type: "law",
    question: "Quin article del TUE, citat al text base, obliga els estats membres a establir vies de recurs necessàries per garantir la tutela judicial efectiva?",
    options: [
      "Art. 19.1 TUE",
      "Art. 13 TUE",
      "Art. 10 TUE",
      "Art. 14 TUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. L’art. 19.1 TUE obliga els estats membres a establir les vies de recurs necessàries per garantir la tutela judicial efectiva.",
      incorrect: [
        "Incorrecte. 13 TUE enumera institucions.",
        "Incorrecte. 10 TUE tracta la democràcia representativa.",
        "Incorrecte. 14 TUE tracta el Parlament Europeu."
      ]
    }
  },

  /* ============================
     TRAMPA (5)
  ============================ */

  {
    id: 16,
    type: "trap",
    question: "Quina afirmació és correcta sobre la competència prejudicial segons el punt 18?",
    options: [
      "És competència general del Tribunal General en tots els casos",
      "És, com a norma general, exclusiva del Tribunal de Justícia",
      "És competència del Consell Europeu en litigis institucionals",
      "És un procediment de control pressupostari del Parlament"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La competència prejudicial (interpretació del dret de la UE a petició de jutges nacionals) correspon principalment al Tribunal de Justícia.",
      incorrect: [
        "Incorrecte. El TG, per norma general, no resol qüestions prejudicials.",
        "Incorrecte. El Consell Europeu no exerceix funcions judicials.",
        "Incorrecte. No és un procediment pressupostari."
      ]
    }
  },

  {
    id: 17,
    type: "trap",
    question: "Quina afirmació és correcta sobre la cassació contra sentències del Tribunal General?",
    options: [
      "Permet reobrir íntegrament el cas i tornar a valorar totes les proves",
      "Només pot basar-se en qüestions de dret (incompetència, irregularitats de procediment o infracció del dret UE)",
      "Es resol al Parlament Europeu per majoria absoluta",
      "S’interposa sempre davant tribunals nacionals"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La cassació davant el TJ és limitada a qüestions de dret; no és una revisió plena de fets i proves.",
      incorrect: [
        "Incorrecte. No hi ha revisió completa de proves com en una segona primera instància.",
        "Incorrecte. El Parlament no resol cassacions.",
        "Incorrecte. La cassació és dins del sistema jurisdiccional de la UE."
      ]
    }
  },

  {
    id: 18,
    type: "trap",
    question: "Quin error d’examen és especialment perillós quan compares TJ i TG?",
    options: [
      "Creure que el TG és el tribunal principal per a litigis de particulars i empreses",
      "Creure que el TJ és l’instància superior que pot conèixer cassació",
      "Creure que el TG resol prejudicials i fixa la interpretació uniforme del dret de la UE",
      "Creure que les sentències del TG poden ser recorregudes en cassació"
    ],
    correct: 2,
    explanation: {
      correct:
        "Correcte. És un error confondre la funció prejudicial (del TJ) amb el TG: el TG no fixa via prejudicial la interpretació uniforme.",
      incorrect: [
        "Incorrecte. Aquesta afirmació és correcta segons el punt: el TG és la principal instància contenciosa per particulars/empreses.",
        "Incorrecte. Això és correcte: el TJ és instància superior i coneix cassació.",
        "Incorrecte. Això és correcte: les sentències del TG poden ser recorregudes en cassació."
      ]
    }
  },

  {
    id: 19,
    type: "trap",
    question: "Quina afirmació és correcta sobre l’accés dels particulars a la justícia europea, segons el text base?",
    options: [
      "Els particulars no poden impugnar mai actes de la UE davant tribunals de la UE",
      "L’accés dels particulars al TG és clau per garantir el control judicial de les institucions",
      "Només els estats poden impugnar actes de la UE i sempre davant el Consell",
      "El control judicial de les institucions és voluntari i només polític"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El text base remarca que sense accés dels particulars al TG, l’eficàcia dels drets europeus i la legalitat quedarien compromeses.",
      incorrect: [
        "Incorrecte. En determinades condicions, els particulars poden interposar recurs d’anul·lació.",
        "Incorrecte. No és així: no és davant el Consell, i els particulars poden tenir legitimació en certs supòsits.",
        "Incorrecte. El control és judicial i obligatori quan es planteja un recurs."
      ]
    }
  },

  {
    id: 20,
    type: "trap",
    question: "Quina afirmació és correcta sobre el Tribunal General i els tribunals nacionals?",
    options: [
      "El TG resol litigis interns entre ciutadans aplicant dret nacional",
      "El TG controla la legalitat dels actes de les institucions de la UE, no litigis interns basats en dret nacional",
      "El TG substitueix els tribunals nacionals en tots els casos de dret administratiu",
      "El TG és la instància d’apel·lació general de totes les sentències nacionals"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El TG controla la legalitat dels actes de la UE; no és un tribunal general d’apel·lació de litigis interns ni aplica dret nacional com a objecte principal.",
      incorrect: [
        "Incorrecte. Això és funció dels tribunals nacionals.",
        "Incorrecte. No substitueix els tribunals nacionals.",
        "Incorrecte. No és una instància d’apel·lació general de sentències nacionals."
      ]
    }
  }
];