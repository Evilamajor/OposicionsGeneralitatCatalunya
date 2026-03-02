// src/data/bloc1/tema3/ask/punt8Ask.js
// TEMA 3 – BLOC 1 – PUNT 8: El Consell de Garanties Estatutàries (CGE)
// 20 preguntes tipus test (5 TRAMPA, 5 LEGISLACIÓ, 10 CONCEPTE) amb explicació breu
// Nota: adapta el path i el format a l’estàndard del teu projecte.

export const punt8Ask = [
  // ─────────────────────────────────────────────────────────────────────────────
  // TRAMPA (5)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P8-Q01",
    tipus: "TRAMPA",
    enunciat: "Quina afirmació és correcta sobre la capacitat del CGE respecte de les lleis?",
    opcions: [
      "Pot anul·lar lleis catalanes quan siguin contràries a l’EAC",
      "Pot suspendre l’entrada en vigor d’una llei del Parlament",
      "No pot anul·lar lleis: emet dictàmens consultius",
      "Pot declarar la nul·litat de normes amb efectes erga omnes",
    ],
    correcta: 2,
    explicacioCorrecta:
      "El CGE és un òrgan consultiu: emet dictàmens i no té potestat jurisdiccional d’anul·lació de normes. Aquesta funció correspon al TC.",
    explicacioIncorrectes: [
      "Incorrecta: l’anul·lació correspon al TC, no al CGE.",
      "Incorrecta: el CGE no suspèn l’entrada en vigor; pot suspendre terminis de tramitació quan se sol·licita dictamen, però no l’eficàcia d’una llei ja aprovada.",
      "Correcta.",
      "Incorrecta: els efectes erga omnes són propis de les sentències del TC.",
    ],
  },
  {
    id: "T3B1P8-Q02",
    tipus: "TRAMPA",
    enunciat: "Com s’activa l’actuació del Consell de Garanties Estatutàries?",
    opcions: [
      "Pot actuar d’ofici quan detecta una vulneració constitucional",
      "Actua sempre a instància de subjectes legitimats",
      "Només actua quan el Tribunal Constitucional li ho sol·licita",
      "Actua automàticament quan un projecte de llei afecta drets estatutaris",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El CGE no actua d’ofici: s’activa a instància dels subjectes legitimats (Govern, grups parlamentaris/diputats, Síndic en certs casos, ens locals, etc.).",
    explicacioIncorrectes: [
      "Incorrecta: el text base indica expressament que no actua d’ofici.",
      "Correcta.",
      "Incorrecta: no depèn del TC per activar-se.",
      "Incorrecta: no és automàtic; cal sol·licitud formal.",
    ],
  },
  {
    id: "T3B1P8-Q03",
    tipus: "TRAMPA",
    enunciat:
      "Després de la STC 31/2010, quin és el caràcter dels dictàmens del CGE (en general)?",
    opcions: ["Vinculants en drets estatutaris", "Sempre vinculants", "No vinculants", "Equivalents a sentència del TC"],
    correcta: 2,
    explicacioCorrecta:
      "La STC 31/2010 va anul·lar el caràcter vinculant previst a l’art. 76.4 EAC; actualment, els dictàmens del CGE són no vinculants.",
    explicacioIncorrectes: [
      "Incorrecta: precisament es va anul·lar la vinculació fins i tot en drets estatutaris.",
      "Incorrecta: no són vinculants en cap cas segons el text base.",
      "Correcta.",
      "Incorrecta: el CGE no és un òrgan jurisdiccional i els seus dictàmens no són sentències.",
    ],
  },
  {
    id: "T3B1P8-Q04",
    tipus: "TRAMPA",
    enunciat: "Quina és la diferència més precisa entre el control del CGE i el del TC?",
    opcions: [
      "El CGE exerceix control a posteriori i el TC a priori",
      "El CGE fa un control preventiu i consultiu; el TC és jurisdiccional i pot anul·lar normes",
      "El CGE és poder judicial i el TC és poder executiu",
      "El CGE només controla normes estatals i el TC només controla normes catalanes",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El CGE és consultiu amb examen abstracte i preventiu; el TC és l’intèrpret suprem de la CE i pot declarar nul·les normes amb rang de llei.",
    explicacioIncorrectes: [
      "Incorrecta: és al revés; el CGE és preventiu i el TC, en general, a posteriori.",
      "Correcta.",
      "Incorrecta: el CGE no és poder judicial; el TC tampoc és poder executiu.",
      "Incorrecta: el TC controla normes estatals i autonòmiques; el CGE té àmbit autonòmic català.",
    ],
  },
  {
    id: "T3B1P8-Q05",
    tipus: "TRAMPA",
    enunciat:
      "Què passa amb la tramitació parlamentària quan se sol·licita un dictamen del CGE sobre un projecte o proposició?",
    opcions: [
      "La tramitació continua sense cap efecte",
      "La tramitació queda anul·lada i s’ha de reiniciar",
      "Se suspèn el termini de tramitació fins que el CGE emet el dictamen",
      "El CGE substitueix el Ple en la votació final",
    ],
    correcta: 2,
    explicacioCorrecta:
      "La sol·licitud de dictamen comporta la suspensió del termini de tramitació del text afectat fins que el CGE emet el seu parer.",
    explicacioIncorrectes: [
      "Incorrecta: hi ha un efecte suspensiu del termini.",
      "Incorrecta: no s’anul·la ni es reinicia el procediment; se suspèn el termini.",
      "Correcta.",
      "Incorrecta: el CGE no substitueix el Ple ni decideix políticament.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LEGISLACIÓ (5)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P8-Q06",
    tipus: "LEGISLACIO",
    enunciat: "Entre quins articles de l’EAC 2006 es regula el Consell de Garanties Estatutàries?",
    opcions: ["Arts. 68–71 EAC", "Arts. 76–79 EAC", "Arts. 97–103 EAC", "Arts. 2–5 EAC"],
    correcta: 1,
    explicacioCorrecta:
      "El text base situa la regulació del CGE als articles 76 a 79 de l’EAC 2006.",
    explicacioIncorrectes: [
      "Incorrecta: 68 i següents es vinculen a Govern/Administració, no al CGE.",
      "Correcta.",
      "Incorrecta: aquests articles no corresponen a la regulació del CGE segons el punt.",
      "Incorrecta: l’art. 2 tracta de la Generalitat com a institució i principis generals.",
    ],
  },
  {
    id: "T3B1P8-Q07",
    tipus: "LEGISLACIO",
    enunciat: "Quina llei s’esmenta com a llei de desenvolupament bàsic del CGE?",
    opcions: ["Llei 13/2008", "Llei 2/2009", "LOFCA", "Llei 39/2015"],
    correcta: 1,
    explicacioCorrecta:
      "El text base identifica la Llei 2/2009 com a llei de desenvolupament bàsic del CGE.",
    explicacioIncorrectes: [
      "Incorrecta: al temari s’associa a altres matèries (procediment/organització), però el punt cita Llei 2/2009.",
      "Correcta.",
      "Incorrecta: la LOFCA regula el finançament autonòmic.",
      "Incorrecta: la Llei 39/2015 regula el procediment administratiu comú.",
    ],
  },
  {
    id: "T3B1P8-Q08",
    tipus: "LEGISLACIO",
    enunciat: "Quin article de l’EAC s’esmenta com a base de les funcions del CGE (control jurídic)?",
    opcions: ["Article 76 EAC", "Article 79 EAC", "Article 150 EAC", "Article 112 EAC"],
    correcta: 0,
    explicacioCorrecta:
      "El punt indica que l’article 76 EAC assigna al CGE la funció de control jurídic (no d’oportunitat política).",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: 79 forma part del bloc regulador, però el text atribueix específicament la funció a l’art. 76.",
      "Incorrecta: 150 EAC tracta de l’Administració de la Generalitat (estructura i funcionament).",
      "Incorrecta: 112 EAC es vincula a execució de normativa estatal en altres punts.",
    ],
  },
  {
    id: "T3B1P8-Q09",
    tipus: "LEGISLACIO",
    enunciat:
      "Segons el punt, abans d’interposar quin tipus d’actuacions davant el TC és preceptiu el dictamen del CGE?",
    opcions: [
      "Recurs d’inconstitucionalitat i conflicte de competències",
      "Recurs d’empara i qüestió d’inconstitucionalitat",
      "Només el recurs d’empara",
      "Només la qüestió d’inconstitucionalitat",
    ],
    correcta: 0,
    explicacioCorrecta:
      "El dictamen és preceptiu abans que Parlament o Govern interposin recurs d’inconstitucionalitat o conflicte de competències davant el TC (i també el conflicte en defensa de l’autonomia local).",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: l’empara i la qüestió d’inconstitucionalitat no s’esmenten aquí com a supòsits de dictamen preceptiu.",
      "Incorrecta: no és només l’empara.",
      "Incorrecta: no és només la qüestió d’inconstitucionalitat.",
    ],
  },
  {
    id: "T3B1P8-Q10",
    tipus: "LEGISLACIO",
    enunciat:
      "Quina decisió jurisprudencial s’esmenta com la que elimina el caràcter vinculant dels dictàmens del CGE?",
    opcions: ["STC 31/2010", "STC 1/1981", "STC 76/1983", "STC 118/1996"],
    correcta: 0,
    explicacioCorrecta:
      "La STC 31/2010 declara inconstitucional i nul el caràcter vinculant previst a l’art. 76.4 EAC.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: no és la que s’esmenta al text base.",
      "Incorrecta: no és la que s’esmenta al text base.",
      "Incorrecta: no és la que s’esmenta al text base.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CONCEPTE (10)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P8-Q11",
    tipus: "CONCEPTE",
    enunciat: "Quina és la funció essencial del CGE segons el punt?",
    opcions: [
      "Fer control d’oportunitat política de les lleis",
      "Vetllar per l’adequació de determinades disposicions a la CE i a l’EAC",
      "Aplicar sancions als òrgans que incompleixen l’EAC",
      "Executar les decisions del TC a Catalunya",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El CGE vetlla per la constitucionalitat i estatutarietat (adequació a CE/EAC) en els supòsits previstos, amb caràcter consultiu i preventiu.",
    explicacioIncorrectes: [
      "Incorrecta: el punt insisteix que és control jurídic, no d’oportunitat.",
      "Correcta.",
      "Incorrecta: no té potestat sancionadora.",
      "Incorrecta: no és un òrgan executor del TC.",
    ],
  },
  {
    id: "T3B1P8-Q12",
    tipus: "CONCEPTE",
    enunciat: "Quin tret defineix millor la naturalesa del CGE?",
    opcions: [
      "Òrgan jurisdiccional amb potestat d’expulsar normes de l’ordenament",
      "Òrgan consultiu independent amb autonomia orgànica, funcional i pressupostària",
      "Òrgan administratiu subordinat al Govern i sense autonomia",
      "Òrgan legislatiu que substitueix el Parlament en matèria de drets",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El punt el descriu com a òrgan consultiu independent dins el sistema institucional català, amb autonomia orgànica, funcional i pressupostària.",
    explicacioIncorrectes: [
      "Incorrecta: això descriu el TC, no el CGE.",
      "Correcta.",
      "Incorrecta: no és subordinat en l’exercici de les seves funcions.",
      "Incorrecta: no és òrgan legislatiu ni substitueix el Parlament.",
    ],
  },
  {
    id: "T3B1P8-Q13",
    tipus: "CONCEPTE",
    enunciat:
      "Quina afirmació és més correcta sobre la relació del CGE amb el sistema institucional de la Generalitat?",
    opcions: [
      "No forma part del sistema institucional català perquè és un òrgan estatal",
      "És un òrgan de rellevància estatutària integrat al sistema institucional, però independent",
      "És una secció del Parlament sense autonomia",
      "Depèn funcionalment del TC",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El CGE s’integra en l’estructura institucional de la Generalitat però gaudeix d’independència i autonomia per exercir les funcions.",
    explicacioIncorrectes: [
      "Incorrecta: és un òrgan autonòmic de la Generalitat.",
      "Correcta.",
      "Incorrecta: no és una secció del Parlament.",
      "Incorrecta: no depèn funcionalment del TC.",
    ],
  },
  {
    id: "T3B1P8-Q14",
    tipus: "CONCEPTE",
    enunciat: "Quin és el tipus de control que realitza el CGE sobre determinades normes o propostes?",
    opcions: [
      "Control preventiu (a priori) i abstracte",
      "Control repressiu (a posteriori) i executiu",
      "Control judicial amb sentència ferma",
      "Control exclusiu sobre normes estatals",
    ],
    correcta: 0,
    explicacioCorrecta:
      "El punt defineix l’examen del CGE com a abstracte i preventiu, abans de l’aplicació o impugnació definitiva.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: el control repressiu/jurisdiccional s’associa al TC i als tribunals en altres àmbits.",
      "Incorrecta: el CGE emet dictàmens, no sentències.",
      "Incorrecta: el seu àmbit és autonòmic català.",
    ],
  },
  {
    id: "T3B1P8-Q15",
    tipus: "CONCEPTE",
    enunciat: "Quina és la composició del CGE segons el text base?",
    opcions: ["7 membres", "9 membres", "11 membres", "15 membres"],
    correcta: 1,
    explicacioCorrecta:
      "El text base indica que el Consell està integrat per nou membres.",
    explicacioIncorrectes: [
      "Incorrecta: no és 7.",
      "Correcta.",
      "Incorrecta: no és 11.",
      "Incorrecta: no és 15.",
    ],
  },
  {
    id: "T3B1P8-Q16",
    tipus: "CONCEPTE",
    enunciat: "Quina majoria cal al Parlament per proposar 6 membres del CGE?",
    opcions: ["Majoría simple", "2/3", "3/5", "Unanimitat"],
    correcta: 2,
    explicacioCorrecta:
      "El Parlament proposa 6 membres per majoria reforçada de tres cinquenes parts dels diputats.",
    explicacioIncorrectes: [
      "Incorrecta: no és majoria simple.",
      "Incorrecta: el punt indica 3/5, no 2/3.",
      "Correcta.",
      "Incorrecta: no cal unanimitat.",
    ],
  },
  {
    id: "T3B1P8-Q17",
    tipus: "CONCEPTE",
    enunciat: "Quina participació té el Consell de Governs Locals en la composició del CGE?",
    opcions: [
      "Cap: no hi participa",
      "Proposa una terna per a un dels tres membres proposats pel Govern",
      "Nomena directament dos membres del CGE",
      "Pot vetar els membres proposats pel Parlament",
    ],
    correcta: 1,
    explicacioCorrecta:
      "Un dels tres membres proposats pel Govern ha de ser escollit entre una terna proposada pel Consell de Governs Locals.",
    explicacioIncorrectes: [
      "Incorrecta: sí que hi participa, segons el text base.",
      "Correcta.",
      "Incorrecta: no nomena directament dos membres.",
      "Incorrecta: no té facultat de veto sobre els del Parlament.",
    ],
  },
  {
    id: "T3B1P8-Q18",
    tipus: "CONCEPTE",
    enunciat:
      "Quin efecte principal té la STC 31/2010 sobre el funcionament del CGE, segons el punt?",
    opcions: [
      "Elimina el CGE de l’ordenament",
      "Fa vinculants tots els dictàmens del CGE",
      "Anul·la el caràcter vinculant previst per a certs dictàmens (art. 76.4 EAC)",
      "Impedeix que el CGE dictamini sobre decrets llei",
    ],
    correcta: 2,
    explicacioCorrecta:
      "La STC 31/2010 declara inconstitucional i nul el caràcter vinculant que l’art. 76.4 EAC atribuïa a alguns dictàmens; ara són no vinculants.",
    explicacioIncorrectes: [
      "Incorrecta: no elimina el CGE.",
      "Incorrecta: no els fa vinculants; fa el contrari (elimina la vinculació).",
      "Correcta.",
      "Incorrecta: el punt no diu que impedeixi dictaminar sobre decrets llei.",
    ],
  },
  {
    id: "T3B1P8-Q19",
    tipus: "CONCEPTE",
    enunciat:
      "Abans d’interposar un recurs d’inconstitucionalitat o un conflicte de competències davant el TC, el dictamen del CGE és…",
    opcions: ["Opcional", "Preceptiu", "Vinculant", "Innecessari si hi ha informe jurídic intern"],
    correcta: 1,
    explicacioCorrecta:
      "El punt indica que el dictamen és preceptiu abans d’interposar aquestes accions per part del Parlament o el Govern.",
    explicacioIncorrectes: [
      "Incorrecta: no és opcional en aquests supòsits.",
      "Correcta.",
      "Incorrecta: és preceptiu però no vinculant.",
      "Incorrecta: un informe intern no substitueix la preceptivitat prevista.",
    ],
  },
  {
    id: "T3B1P8-Q20",
    tipus: "CONCEPTE",
    enunciat: "Quina afirmació resumeix millor la diferència CGE–TC en termes d’efectes?",
    opcions: [
      "Els dictàmens del CGE tenen valor de cosa jutjada",
      "Les sentències del TC tenen efectes erga omnes; els dictàmens del CGE són orientatius i no vinculants",
      "El CGE pot expulsar normes de l’ordenament i el TC només assessora",
      "El CGE i el TC tenen el mateix tipus d’efectes però en àmbits diferents",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El TC dicta sentències amb efectes erga omnes i valor de cosa jutjada; el CGE emet dictàmens consultius no vinculants.",
    explicacioIncorrectes: [
      "Incorrecta: el valor de cosa jutjada és propi de les sentències del TC.",
      "Correcta.",
      "Incorrecta: és al revés.",
      "Incorrecta: els efectes són diferents per naturalesa (consultiu vs jurisdiccional).",
    ],
  },
];

export default punt8Ask;