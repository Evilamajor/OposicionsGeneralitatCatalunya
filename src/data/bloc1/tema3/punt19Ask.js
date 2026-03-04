// Fitxer: punt19Ask.js
// Bloc 1 · Tema 3 · Punt 19 — El Banc Central Europeu (BCE)

export const punt19Ask = [
  /* ============================
     CONCEPTES (10)
  ============================ */

  {
    id: 1,
    type: "concept",
    question: "Quina és la idea nuclear que defineix el paper del BCE segons el text base?",
    options: [
      "És el principal òrgan legislatiu de la UE en matèria econòmica",
      "És l’eix central de la política monetària de la zona euro i autoritza l’emissió de l’euro",
      "És una agència de la Comissió per gestionar el pressupost",
      "És l’òrgan de coordinació política general dels estats membres"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El BCE és l’eix de la política monetària de la zona euro i té competència exclusiva per autoritzar l’emissió de l’euro.",
      incorrect: [
        "Incorrecte. La funció legislativa correspon al Parlament i al Consell de la UE.",
        "Incorrecte. El BCE no és una agència de la Comissió ni gestiona el pressupost general de la UE.",
        "Incorrecte. La coordinació política general correspon sobretot al Consell Europeu."
      ]
    }
  },

  {
    id: 2,
    type: "concept",
    question: "On té la seu permanent el Banc Central Europeu segons el text base?",
    options: ["Luxemburg", "Frankfurt (Alemanya)", "Estrasburg", "Brussel·les"],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El BCE té la seu permanent a Frankfurt (Alemanya).",
      incorrect: [
        "Incorrecte. Luxemburg és la seu d’altres institucions i serveis europeus, però no del BCE.",
        "Incorrecte. Estrasburg és seu principal de plens del Parlament Europeu.",
        "Incorrecte. Brussel·les és una seu institucional clau, però no del BCE."
      ]
    }
  },

  {
    id: 3,
    type: "concept",
    question: "Quina diferència conceptual clau hi ha entre SEBC i Eurosistema?",
    options: [
      "El SEBC inclou només els països de la zona euro; l’Eurosistema inclou tota la UE",
      "El SEBC inclou BCE + BCN de tota la UE; l’Eurosistema inclou BCE + BCN només de la zona euro",
      "L’Eurosistema és un òrgan del Parlament; el SEBC és un òrgan del Consell",
      "No hi ha diferència: són sinònims"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. SEBC = BCE + tots els bancs centrals nacionals (tota la UE). Eurosistema = BCE + bancs centrals dels estats que tenen l’euro.",
      incorrect: [
        "Incorrecte. És just a l’inrevés.",
        "Incorrecte. No depenen del Parlament ni del Consell com a òrgans interns.",
        "Incorrecte. No són sinònims."
      ]
    }
  },

  {
    id: 4,
    type: "concept",
    question: "Quin és l’objectiu principal del BCE segons el text base?",
    options: [
      "Aconseguir el màxim creixement econòmic",
      "Mantenir l’estabilitat de preus",
      "Finançar directament els estats membres",
      "Aprovar la política fiscal de la UE"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. L’objectiu principal és l’estabilitat de preus; té prioritat sobre la resta d’objectius.",
      incorrect: [
        "Incorrecte. El creixement és un objectiu de suport, subordinat a l’estabilitat de preus.",
        "Incorrecte. El BCE no té com a funció finançar directament els estats (i això seria contrari al disseny d’independència).",
        "Incorrecte. La política fiscal és principalment competència dels estats (coordinada a escala UE)."
      ]
    }
  },

  {
    id: 5,
    type: "concept",
    question: "Quina relació hi ha entre l’objectiu principal i els objectius secundaris del BCE?",
    options: [
      "Els objectius secundaris prevalen si hi ha crisi",
      "Els objectius secundaris només es poden perseguir si no perjudiquen l’estabilitat de preus",
      "Els objectius secundaris són decidits anualment pel Parlament Europeu",
      "No existeixen objectius secundaris"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El BCE pot donar suport a polítiques econòmiques generals sempre que no entrin en conflicte amb l’estabilitat de preus.",
      incorrect: [
        "Incorrecte. El mandat d’estabilitat de preus manté prioritat.",
        "Incorrecte. No és una decisió anual del Parlament.",
        "Incorrecte. Sí que existeixen objectius secundaris, però subordinats."
      ]
    }
  },

  {
    id: 6,
    type: "concept",
    question: "Quina de les següents és una funció típica del BCE segons el text base?",
    options: [
      "Definir i executar la política monetària de la zona euro",
      "Aprovar directives i reglaments en co-decisió",
      "Presentar mocions de censura contra la Comissió",
      "Resoldre qüestions prejudicials (art. 267 TFUE)"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. El BCE defineix i executa la política monetària de la zona euro.",
      incorrect: [
        "Incorrecte. La funció legislativa correspon al Parlament i al Consell.",
        "Incorrecte. La moció de censura és competència del Parlament Europeu.",
        "Incorrecte. Les qüestions prejudicials són del TJUE."
      ]
    }
  },

  {
    id: 7,
    type: "concept",
    question: "Què és el Mecanisme Únic de Supervisió (MUS) segons el text base?",
    options: [
      "Un procediment per aprovar pressupostos europeus",
      "El marc en què el BCE exerceix tasques de supervisió prudencial d’entitats de crèdit",
      "Un sistema de votació del Consell de Govern del BCE",
      "Un òrgan judicial adscrit al TJUE"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El MUS és l’instrument de la Unió Bancària mitjançant el qual el BCE fa supervisió prudencial bancària.",
      incorrect: [
        "Incorrecte. No és un mecanisme pressupostari.",
        "Incorrecte. No és un sistema de votació.",
        "Incorrecte. No és un òrgan judicial."
      ]
    }
  },

  {
    id: 8,
    type: "concept",
    question: "Quin és l’òrgan suprem de decisió dins del BCE segons el text base?",
    options: [
      "Consell Europeu",
      "Consell de Govern",
      "Tribunal General",
      "Comissió Europea"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El Consell de Govern és l’òrgan suprem de decisió del BCE.",
      incorrect: [
        "Incorrecte. El Consell Europeu no és un òrgan del BCE.",
        "Incorrecte. El Tribunal General és un òrgan jurisdiccional, no monetari.",
        "Incorrecte. La Comissió no dirigeix el BCE."
      ]
    }
  },

  {
    id: 9,
    type: "concept",
    question: "Quina composició té el Consell de Govern del BCE segons el text base?",
    options: [
      "President del BCE + presidents dels grups polítics del Parlament",
      "Membres del Comitè Executiu + governadors dels bancs centrals nacionals dels estats de la zona euro",
      "Ministres d’Economia de tots els estats membres (zona euro i no euro)",
      "Comissaris europeus + representants de la societat civil"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El Consell de Govern = Comitè Executiu + governadors dels BCN dels estats de la zona euro.",
      incorrect: [
        "Incorrecte. Això no té relació amb l’estructura del BCE.",
        "Incorrecte. Això s’assemblaria a un format ECOFIN/Consell, però no és el BCE.",
        "Incorrecte. Els comissaris no formen el Consell de Govern."
      ]
    }
  },

  {
    id: 10,
    type: "concept",
    question: "Quina és la característica institucional més singular del BCE segons el text base?",
    options: [
      "Dependència jeràrquica directa de la Comissió Europea",
      "Elevadíssima independència: no rep instruccions d’institucions ni governs",
      "Capacitat legislativa pròpia en matèria econòmica",
      "Responsabilitat política davant el Parlament mitjançant moció de censura"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El BCE destaca per una independència molt elevada, protegida pels Tractats.",
      incorrect: [
        "Incorrecte. Justament no depèn de la Comissió ni rep ordres.",
        "Incorrecte. No té capacitat legislativa.",
        "Incorrecte. La moció de censura és sobre la Comissió, no sobre el BCE."
      ]
    }
  },

  /* ============================
     LEGISLACIÓ (5)
  ============================ */

  {
    id: 11,
    type: "law",
    question: "Quin article del TUE situa el BCE dins del marc institucional únic de la Unió (segons el text base)?",
    options: ["Art. 13 TUE", "Art. 15 TUE", "Art. 17 TUE", "Art. 19 TUE"],
    correct: 0,
    explanation: {
      correct:
        "Correcte. L’art. 13 TUE enumera les institucions de la Unió, incloent-hi el BCE.",
      incorrect: [
        "Incorrecte. L’art. 15 TUE regula el Consell Europeu.",
        "Incorrecte. L’art. 17 TUE regula la Comissió.",
        "Incorrecte. L’art. 19 TUE regula el TJUE."
      ]
    }
  },

  {
    id: 12,
    type: "law",
    question: "Quins articles del TFUE fixa el text base com a fonament dels objectius del BCE?",
    options: [
      "Arts. 127.1 i 282.2 TFUE",
      "Arts. 258–260 TFUE",
      "Arts. 263 i 265 TFUE",
      "Arts. 290 i 291 TFUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. El text base cita expressament els arts. 127.1 i 282.2 TFUE per als objectius del BCE.",
      incorrect: [
        "Incorrecte. 258–260 TFUE regulen el recurs per incompliment (TJUE).",
        "Incorrecte. 263 i 265 TFUE regulen anul·lació i omissió (TJUE/TG).",
        "Incorrecte. 290 i 291 TFUE regulen actes delegats i d’execució."
      ]
    }
  },

  {
    id: 13,
    type: "law",
    question: "Quin article del TFUE estableix el principi d’independència del BCE segons el text base?",
    options: ["Art. 130 TFUE", "Art. 127 TFUE", "Art. 282 TFUE", "Art. 294 TFUE"],
    correct: 0,
    explanation: {
      correct:
        "Correcte. L’art. 130 TFUE recull la prohibició d’instruccions al BCE i als BCN (independència).",
      incorrect: [
        "Incorrecte. L’art. 127 TFUE tracta, entre d’altres, objectius i funcions del SEBC.",
        "Incorrecte. L’art. 282 TFUE regula aspectes institucionals del BCE/SEBC, però la independència es concreta a 130 TFUE.",
        "Incorrecte. 294 TFUE és el procediment legislatiu ordinari."
      ]
    }
  },

  {
    id: 14,
    type: "law",
    question: "Segons el text base, quin mandat té el Comitè Executiu del BCE i qui el nomena?",
    options: [
      "8 anys no renovable; nomenat pel Consell Europeu",
      "5 anys renovable; nomenat pel Parlament Europeu",
      "6 anys renovable; nomenat pel Consell de la UE",
      "2 anys i mig renovable; nomenat pel Consell Europeu"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. El text base indica que el Comitè Executiu és nomenat pel Consell Europeu per 8 anys no renovables.",
      incorrect: [
        "Incorrecte. No és 5 anys ni el nomena el Parlament.",
        "Incorrecte. No és 6 anys ni el nomena el Consell de la UE.",
        "Incorrecte. 2,5 anys renovables és propi del president del Consell Europeu, no del Comitè Executiu del BCE."
      ]
    }
  },

  {
    id: 15,
    type: "law",
    question: "Quina és la regla de mandat mínim dels governadors dels bancs centrals nacionals (BCN) que es destaca al text base per reforçar la independència personal?",
    options: [
      "Mínim 5 anys",
      "Mínim 3 anys",
      "Mínim 8 anys no renovable",
      "Mínim 2 anys i mig renovable"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. El text base assenyala que els governadors dels BCN han de tenir un mandat mínim de 5 anys per reduir pressions polítiques.",
      incorrect: [
        "Incorrecte. 3 anys no és el mínim indicat al text base.",
        "Incorrecte. 8 anys no renovable és el mandat del Comitè Executiu, no dels governadors BCN.",
        "Incorrecte. 2,5 anys renovable és del president del Consell Europeu."
      ]
    }
  },

  /* ============================
     TRAMPA (5)
  ============================ */

  {
    id: 16,
    type: "trap",
    question: "Quina afirmació és correcta sobre el SEBC segons el text base?",
    options: [
      "Inclou només els estats que han adoptat l’euro",
      "Inclou el BCE i els BCN de tots els estats membres, tinguin o no l’euro",
      "És un òrgan judicial del TJUE",
      "És un subòrgà del Consell Europeu"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El SEBC inclou tots els estats membres (zona euro i no euro).",
      incorrect: [
        "Incorrecte. Això descriu l’Eurosistema.",
        "Incorrecte. No és un òrgan judicial.",
        "Incorrecte. No depèn del Consell Europeu."
      ]
    }
  },

  {
    id: 17,
    type: "trap",
    question: "Quina afirmació és correcta sobre l’Eurosistema segons el text base?",
    options: [
      "És el marc global que inclou tots els bancs centrals de la UE",
      "És el braç operatiu que executa la política monetària de la zona euro (BCE + BCN de l’euro)",
      "Inclou també els estats no euro per coordinar la política monetària comuna",
      "És un òrgan transitori sense funcions pràctiques"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. L’Eurosistema = BCE + BCN dels estats de la zona euro i és el que executa la política monetària de l’euro.",
      incorrect: [
        "Incorrecte. Això descriu el SEBC.",
        "Incorrecte. Els estats no euro no formen part de l’Eurosistema.",
        "Incorrecte. No és un òrgan merament transitori ni buit de funcions."
      ]
    }
  },

  {
    id: 18,
    type: "trap",
    question: "Quin dels següents NO és un dels quatre vessants d’independència del BCE descrits al text base?",
    options: [
      "Independència institucional",
      "Independència funcional",
      "Independència legislativa",
      "Independència financera"
    ],
    correct: 2,
    explanation: {
      correct:
        "Correcte. El text base parla d’independència institucional, funcional, personal i financera; no d’“independència legislativa”.",
      incorrect: [
        "Incorrecte. Sí que és un vessant clau de la independència (no rep instruccions).",
        "Incorrecte. Sí que és un vessant clau (instruments per assolir l’objectiu).",
        "Incorrecte. Sí que és un vessant clau (pressupost i capital propi)."
      ]
    }
  },

  {
    id: 19,
    type: "trap",
    question: "Quina afirmació és correcta sobre el Consell General del BCE segons el text base?",
    options: [
      "És l’òrgan suprem que fixa els tipus d’interès",
      "És un òrgan transitori mentre hi hagi estats membres que no han adoptat l’euro",
      "Està integrat només pels governadors dels bancs centrals de la zona euro",
      "És nomenat pel Parlament Europeu per un mandat de 5 anys"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El Consell General és transitori mentre hi hagi estats no euro i inclou governadors de tots els BCN de la UE.",
      incorrect: [
        "Incorrecte. L’òrgan suprem de decisió és el Consell de Govern.",
        "Incorrecte. No es limita a la zona euro, inclou tots els BCN (zona euro i no euro).",
        "Incorrecte. No és un òrgan nomenat així pel Parlament."
      ]
    }
  },

  {
    id: 20,
    type: "trap",
    question: "Quina és la distinció correcta entre política monetària i política econòmica general segons el text base?",
    options: [
      "El BCE controla tota la política econòmica (fiscal i pressupostària) de la UE",
      "El BCE controla la política monetària; la política fiscal i pressupostària és competència dels estats membres, coordinada a escala UE",
      "La política monetària és competència exclusiva dels estats, i el BCE només coordina",
      "La política econòmica general depèn exclusivament del Consell Europeu, sense intervenció dels estats"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El BCE té la política monetària; la política fiscal/pressupostària és dels estats membres, tot i que coordinada a escala UE.",
      incorrect: [
        "Incorrecte. Això és un error típic: el BCE no controla tota la política econòmica.",
        "Incorrecte. La política monetària de la zona euro és centralitzada en el BCE/Eurosistema.",
        "Incorrecte. Els estats tenen un paper clau en política econòmica general; no és exclusiu del Consell Europeu."
      ]
    }
  }
];