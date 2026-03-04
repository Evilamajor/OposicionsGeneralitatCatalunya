// Fitxer: punt14Ask.js
// Bloc 1 · Tema 3 · Punt 14 — El Consell de la Unió Europea

export const punt14Ask = [
  /* ============================
     CONCEPTES (10)
  ============================ */
  {
    id: 1,
    type: "concept",
    question: "Quina és la idea clau que defineix el Consell de la Unió Europea dins la UE?",
    options: [
      "Representa els ciutadans de la Unió i exerceix el control polític",
      "Representa els governs dels estats membres i participa en la funció legislativa",
      "És l’òrgan judicial suprem i interpreta els tractats",
      "És el motor executiu principal i aplica directament el pressupost"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El Consell de la UE representa els governs dels estats membres i és co-legislador i co-pressupostari amb el Parlament.",
      incorrect: [
        "Incorrecte. Aquesta és una funció pròpia del Parlament Europeu.",
        "Incorrecte. La funció judicial correspon al Tribunal de Justícia de la UE.",
        "Incorrecte. L’execució principal del pressupost correspon a la Comissió Europea."
      ]
    }
  },
  {
    id: 2,
    type: "concept",
    question: "Quina diferència essencial hi ha entre el Consell Europeu i el Consell de la UE?",
    options: [
      "El Consell Europeu legisla i el Consell de la UE només orienta políticament",
      "El Consell Europeu és judicial i el Consell de la UE és executiu",
      "El Consell Europeu marca orientacions polítiques generals i el Consell de la UE negocia i aprova lleis",
      "El Consell Europeu està format per comissaris i el Consell de la UE per eurodiputats"
    ],
    correct: 2,
    explanation: {
      correct:
        "Correcte. El Consell Europeu fixa l’orientació política general; el Consell de la UE és el fòrum de negociació i aprovació normativa.",
      incorrect: [
        "Incorrecte. El Consell Europeu no exerceix funció legislativa.",
        "Incorrecte. Cap dels dos és un òrgan judicial; i el Consell de la UE no és executiu principal.",
        "Incorrecte. El Consell Europeu reuneix caps d’estat o govern; el Consell de la UE, ministres; no comissaris ni eurodiputats."
      ]
    }
  },
  {
    id: 3,
    type: "concept",
    question: "Per què es diu que el Consell dona ‘legitimitat estatal’ al procés decisori de la UE?",
    options: [
      "Perquè és escollit per sufragi universal directe",
      "Perquè representa els governs dels estats membres en la presa de decisions",
      "Perquè controla la legalitat de les normes europees",
      "Perquè decideix en solitari el pressupost anual"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El Consell representa els governs estatals: la seva participació incorpora la perspectiva i legitimitat dels estats membres.",
      incorrect: [
        "Incorrecte. El sufragi universal directe és propi del Parlament Europeu.",
        "Incorrecte. El control de legalitat correspon al TJUE.",
        "Incorrecte. El pressupost s’aprova conjuntament amb el Parlament."
      ]
    }
  },
  {
    id: 4,
    type: "concept",
    question: "Quina afirmació descriu millor les ‘configuracions’ del Consell de la UE?",
    options: [
      "Són institucions diferents amb personalitat jurídica pròpia",
      "Són reunions del mateix Consell amb ministres diferents segons la matèria",
      "Són comitès judicials dins del Consell",
      "Són reunions del Consell Europeu amb ordre del dia sectorial"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El Consell és una institució única, però es reuneix en configuracions segons la matèria (Agricultura, ECOFIN, etc.).",
      incorrect: [
        "Incorrecte. No són institucions diferents; és el mateix Consell.",
        "Incorrecte. No són òrgans judicials.",
        "Incorrecte. Les configuracions són del Consell de la UE, no del Consell Europeu."
      ]
    }
  },
  {
    id: 5,
    type: "concept",
    question: "Quina configuració del Consell vetlla per la coherència dels treballs i prepara reunions del Consell Europeu?",
    options: [
      "Consell d’Afers Generals",
      "Consell d’Afers Exteriors",
      "ECOFIN",
      "Consell de Medi Ambient"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. El Consell d’Afers Generals vetlla per la coherència entre configuracions i prepara les reunions del Consell Europeu.",
      incorrect: [
        "Incorrecte. Afers Exteriors se centra en l’acció exterior de la UE.",
        "Incorrecte. ECOFIN tracta política econòmica, fiscalitat i serveis financers.",
        "Incorrecte. Medi Ambient és una configuració sectorial, no la de coherència general."
      ]
    }
  },
  {
    id: 6,
    type: "concept",
    question: "Quin paper tenen el COREPER i els grups de treball en el funcionament del Consell?",
    options: [
      "Aproven definitivament les normes sense intervenció dels ministres",
      "Prepararen tècnicament i políticament els dossiers abans d’arribar al nivell ministerial",
      "Són òrgans de control judicial de les propostes de la Comissió",
      "Són òrgans del Parlament Europeu que negocien amb el Consell"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. COREPER i grups de treball preparen i filtren els assumptes, facilitant la decisió ministerial al Consell.",
      incorrect: [
        "Incorrecte. No substitueixen la decisió política final dels ministres quan correspon.",
        "Incorrecte. No exerceixen control judicial; això és del TJUE.",
        "Incorrecte. No són òrgans del Parlament; són estructures vinculades al Consell."
      ]
    }
  },
  {
    id: 7,
    type: "concept",
    question: "Quina funció compleix el Secretariat General del Consell?",
    options: [
      "Presentar propostes legislatives com a regla general",
      "Prestar suport administratiu i jurídic i garantir la continuïtat dels treballs",
      "Votar en les decisions del Consell quan hi ha empat",
      "Controlar l’execució del pressupost als estats membres"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El Secretariat General dona suport administratiu i jurídic i assegura la continuïtat dels treballs del Consell i la Presidència.",
      incorrect: [
        "Incorrecte. La iniciativa legislativa general correspon a la Comissió Europea.",
        "Incorrecte. El Secretariat no vota ni desempata.",
        "Incorrecte. El control d’execució pressupostària no és la seva funció."
      ]
    }
  },
  {
    id: 8,
    type: "concept",
    question: "Quina és la regla general de votació del Consell per a l’adopció d’actes legislatius?",
    options: [
      "Unanimitat",
      "Majoria simple",
      "Majoria qualificada",
      "Votació per consens"
    ],
    correct: 2,
    explanation: {
      correct:
        "Correcte. La regla general per adoptar actes legislatius al Consell és la majoria qualificada, d’acord amb els Tractats.",
      incorrect: [
        "Incorrecte. La unanimitat s’exigeix en matèries especialment sensibles.",
        "Incorrecte. La majoria simple s’utilitza sobretot per qüestions de procediment.",
        "Incorrecte. El consens és més propi del Consell Europeu; el Consell de la UE vota segons regles de tractat."
      ]
    }
  },
  {
    id: 9,
    type: "concept",
    question: "Quina és la idea bàsica del sistema de ‘doble majoria’ introduït pel Tractat de Lisboa?",
    options: [
      "Dues votacions consecutives: una al Consell i una al Consell Europeu",
      "Majoritàriament s’aprova si hi ha 55% d’estats i 65% de població representada",
      "S’aprova si hi ha unanimitat dels estats i majoria simple de població",
      "S’aprova si ho decideix el president del Consell i el president de la Comissió"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. La doble majoria exigeix percentatge d’estats (55%, mínim 15) i percentatge de població (65%).",
      incorrect: [
        "Incorrecte. No implica dues votacions en òrgans diferents.",
        "Incorrecte. No és unanimitat + majoria simple de població.",
        "Incorrecte. No és una decisió discrecional de presidents."
      ]
    }
  },
  {
    id: 10,
    type: "concept",
    question: "En el procediment legislatiu ordinari, quina afirmació és correcta sobre el Consell i el Parlament?",
    options: [
      "El Consell aprova les lleis i el Parlament només és consultat",
      "El Parlament aprova les lleis i el Consell només coordina polítiques",
      "Consell i Parlament actuen com a co-legisladors: cal acord d’ambdós",
      "Ni el Consell ni el Parlament intervenen: decideix la Comissió"
    ],
    correct: 2,
    explanation: {
      correct:
        "Correcte. En el procediment legislatiu ordinari, Consell i Parlament comparteixen la funció legislativa (co-decisió).",
      incorrect: [
        "Incorrecte. El Parlament no és merament consultiu en el procediment ordinari.",
        "Incorrecte. El Consell no es limita a coordinar: legisla amb el Parlament.",
        "Incorrecte. La Comissió té iniciativa, però la decisió legislativa és de Consell i Parlament."
      ]
    }
  },

  /* ============================
     LEGISLACIÓ (5)
  ============================ */
  {
    id: 11,
    type: "law",
    question: "Quin article del TUE regula el Consell de la Unió Europea com a institució i en defineix funcions bàsiques?",
    options: [
      "Art. 16 TUE",
      "Art. 15 TUE",
      "Art. 13 TUE",
      "Art. 48 TUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. L’art. 16 TUE regula el Consell (composició general i funcions legislativa i pressupostària).",
      incorrect: [
        "Incorrecte. L’art. 15 TUE regula el Consell Europeu.",
        "Incorrecte. L’art. 13 TUE enumera institucions però no és el precepte principal del Consell.",
        "Incorrecte. L’art. 48 TUE regula la revisió dels tractats."
      ]
    }
  },
  {
    id: 12,
    type: "law",
    question: "Segons l’art. 16.2 TUE, el Consell està format per:",
    options: [
      "Un eurodiputat de cada estat membre",
      "Un comissari europeu de cada estat membre",
      "Un representant de cada estat membre amb rang ministerial",
      "El cap d’estat o de govern de cada estat membre"
    ],
    correct: 2,
    explanation: {
      correct:
        "Correcte. L’art. 16.2 TUE estableix que el Consell el forma un representant ministerial per estat membre.",
      incorrect: [
        "Incorrecte. Els eurodiputats formen el Parlament Europeu.",
        "Incorrecte. Els comissaris integren la Comissió Europea.",
        "Incorrecte. Caps d’estat o govern integren el Consell Europeu."
      ]
    }
  },
  {
    id: 13,
    type: "law",
    question: "Quin bloc d’articles del TFUE regula l’organització i funcionament intern del Consell (COREPER, Secretariat, etc.)?",
    options: [
      "Arts. 237 a 243 TFUE",
      "Arts. 1 a 6 TFUE",
      "Arts. 50 a 54 TFUE",
      "Arts. 258 a 260 TFUE"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. Els arts. 237–243 TFUE regulen el funcionament del Consell i estructures de suport (COREPER, etc.).",
      incorrect: [
        "Incorrecte. Són articles generals inicials del TFUE, no específics del Consell.",
        "Incorrecte. Aquest bloc no regula el funcionament intern del Consell.",
        "Incorrecte. Aquests articles tracten procediments d’infracció (Comissió vs Estat)."
      ]
    }
  },
  {
    id: 14,
    type: "law",
    question: "Quina institució enumera l’art. 13 TUE en relació amb el Consell?",
    options: [
      "El Consell de la UE forma part del marc institucional únic de la UE",
      "El Consell de la UE és un òrgan auxiliar del Parlament",
      "El Consell de la UE és una agència executiva de la Comissió",
      "El Consell de la UE és un tribunal especialitzat"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. L’art. 13 TUE inclou el Consell com a institució dins del marc institucional únic de la UE.",
      incorrect: [
        "Incorrecte. No és un òrgan auxiliar del Parlament; és una institució co-legisladora.",
        "Incorrecte. No és una agència de la Comissió.",
        "Incorrecte. No és un òrgan jurisdiccional."
      ]
    }
  },
  {
    id: 15,
    type: "law",
    question: "Segons l’art. 16.1 TUE, quines funcions exerceix el Consell juntament amb el Parlament Europeu?",
    options: [
      "Funcions legislativa i pressupostària",
      "Funció judicial i funció de control financer",
      "Funció executiva i funció d’iniciativa legislativa",
      "Funció de revisió dels tractats"
    ],
    correct: 0,
    explanation: {
      correct:
        "Correcte. L’art. 16.1 TUE atribueix al Consell, amb el Parlament, la funció legislativa i pressupostària.",
      incorrect: [
        "Incorrecte. La funció judicial és del TJUE; el control financer és del Tribunal de Comptes.",
        "Incorrecte. L’execució i la iniciativa legislativa general són de la Comissió.",
        "Incorrecte. La revisió dels tractats es regula a l’art. 48 TUE."
      ]
    }
  },

  /* ============================
     TRAMPA (5)
  ============================ */
  {
    id: 16,
    type: "trap",
    question: "Quina afirmació és correcta sobre la presidència del Consell d’Afers Exteriors?",
    options: [
      "És rotatòria cada sis mesos com la resta de configuracions",
      "És presidida permanentment per l’Alt Representant",
      "És presidida pel president del Consell Europeu",
      "És presidida pel president de la Comissió Europea"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El Consell d’Afers Exteriors és l’excepció: el presideix permanentment l’Alt Representant per garantir continuïtat.",
      incorrect: [
        "Incorrecte. La rotació semestral s’aplica a les altres configuracions, no a Afers Exteriors.",
        "Incorrecte. El president del Consell Europeu no presideix aquesta configuració.",
        "Incorrecte. El president de la Comissió no presideix el Consell."
      ]
    }
  },
  {
    id: 17,
    type: "trap",
    question: "Qui ‘seu’ al Consell quan es reuneix la configuració d’Agricultura i Pesca?",
    options: [
      "Els caps d’estat o de govern",
      "Els ministres d’Agricultura (i/o Pesca) dels estats membres",
      "Els comissaris europeus d’Agricultura",
      "Els eurodiputats de la comissió AGRI del Parlament"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. A cada configuració hi assisteix el ministre competent de cada estat membre en aquella matèria.",
      incorrect: [
        "Incorrecte. Caps d’estat o govern formen el Consell Europeu.",
        "Incorrecte. Els comissaris no integren el Consell, tot i que poden participar en treballs.",
        "Incorrecte. Els eurodiputats no formen part del Consell."
      ]
    }
  },
  {
    id: 18,
    type: "trap",
    question: "Quina opció descriu millor el COREPER?",
    options: [
      "Un òrgan judicial que anul·la actes del Consell",
      "Un comitè d’ambaixadors que prepara els treballs del Consell",
      "Una configuració del Consell formada per ministres d’Afers Exteriors",
      "Un servei de la Comissió encarregat de redactar propostes"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El COREPER està format pels representants permanents (ambaixadors) i prepara els treballs del Consell.",
      incorrect: [
        "Incorrecte. L’anul·lació d’actes correspon al TJUE.",
        "Incorrecte. No és una configuració ministerial del Consell.",
        "Incorrecte. No és un servei de la Comissió."
      ]
    }
  },
  {
    id: 19,
    type: "trap",
    question: "Quina regla és generalment certa sobre la iniciativa legislativa a la UE (d’acord amb el punt 14)?",
    options: [
      "El Consell de la UE té la iniciativa legislativa general",
      "La Comissió Europea presenta habitualment les propostes sobre les quals legislen Consell i Parlament",
      "El Parlament Europeu és l’únic òrgan amb iniciativa legislativa",
      "El COREPER presenta directament els projectes de reglament"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. Habitualment la Comissió presenta propostes i el Consell aprova (amb el Parlament) els actes legislatius.",
      incorrect: [
        "Incorrecte. El Consell no té la iniciativa legislativa general.",
        "Incorrecte. El Parlament no és l’únic amb iniciativa i, de fet, no té iniciativa general.",
        "Incorrecte. COREPER no presenta projectes normatius com a iniciativa."
      ]
    }
  },
  {
    id: 20,
    type: "trap",
    question: "Quina afirmació és correcta sobre el paper del Consell en el sistema institucional?",
    options: [
      "És un òrgan d’orientació política general i no legisla",
      "És la institució on es concilien interessos nacionals i s’aproven lleis europees",
      "És el tribunal suprem i garanteix la uniformitat interpretativa",
      "És una institució formada per caps d’estat o de govern"
    ],
    correct: 1,
    explanation: {
      correct:
        "Correcte. El Consell és clau per conciliar interessos estatals i aprovar lleis (co-legislació) i pressupost amb el Parlament.",
      incorrect: [
        "Incorrecte. Això descriu el Consell Europeu, no el Consell de la UE.",
        "Incorrecte. Això descriu el TJUE.",
        "Incorrecte. Caps d’estat o govern formen el Consell Europeu."
      ]
    }
  }
];