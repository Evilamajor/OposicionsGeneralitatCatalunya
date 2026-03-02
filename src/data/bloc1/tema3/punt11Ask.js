// src/data/bloc1/tema3/ask/punt11Ask.js
// TEMA 3 – BLOC 1 – PUNT 11: El Consell de l’Audiovisual de Catalunya (CAC)
// 20 preguntes tipus test (5 TRAMPA, 5 LEGISLACIÓ, 10 CONCEPTE) amb explicació breu
// Nota: adapta el path/format segons l’estàndard del teu projecte.

export const punt11Ask = [
  // ─────────────────────────────────────────────────────────────────────────────
  // TRAMPA (5)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P11-Q01",
    tipus: "TRAMPA",
    enunciat: "Quina afirmació descriu millor la naturalesa del CAC?",
    opcions: [
      "És un departament del Govern encarregat de dirigir la política audiovisual",
      "És una autoritat reguladora independent, ens de dret públic amb autonomia orgànica i funcional",
      "És un tribunal especialitzat que dicta sentències contra operadors audiovisuals",
      "És una comissió interna del Parlament sense personalitat jurídica",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El CAC és una autoritat reguladora independent: un ens de dret públic amb personalitat jurídica pròpia i autonomia orgànica i funcional.",
    explicacioIncorrectes: [
      "Incorrecta: el CAC no és un departament del Govern ni segueix direcció política.",
      "Correcta.",
      "Incorrecta: no és un òrgan jurisdiccional; exerceix potestats administratives.",
      "Incorrecta: el CAC té personalitat jurídica pròpia i autonomia, no és una simple comissió interna.",
    ],
  },
  {
    id: "T3B1P11-Q02",
    tipus: "TRAMPA",
    enunciat: "El CAC depèn jeràrquicament del President de la Generalitat?",
    opcions: [
      "Sí, perquè és una institució del sistema institucional de la Generalitat",
      "Sí, perquè el President n’orienta les decisions en matèria de pluralisme",
      "No, actua amb plena independència del Govern en l’exercici de les seves funcions",
      "Només depèn del President en període electoral",
    ],
    correcta: 2,
    explicacioCorrecta:
      "El CAC actua amb independència del Govern; la seva funció reguladora s’ha de mantenir neutral i objectiva per protegir llibertats públiques.",
    explicacioIncorrectes: [
      "Incorrecta: formar part del sistema institucional no implica dependència jeràrquica.",
      "Incorrecta: el Govern no dirigeix les seves decisions reguladores.",
      "Correcta.",
      "Incorrecta: el règim d’independència no s’interromp per períodes electorals.",
    ],
  },
  {
    id: "T3B1P11-Q03",
    tipus: "TRAMPA",
    enunciat: "Quin dels següents àmbits NO entra dins la supervisió del CAC segons el punt?",
    opcions: [
      "Ràdio i televisió (públiques i privades) que operen a Catalunya",
      "Serveis audiovisuals digitals dirigits al públic de Catalunya",
      "Premsa escrita (diaris i revistes impresos)",
      "Protecció de menors i control de publicitat audiovisual",
    ],
    correcta: 2,
    explicacioCorrecta:
      "El CAC supervisa l’àmbit audiovisual (ràdio, TV i serveis digitals), però no la premsa escrita.",
    explicacioIncorrectes: [
      "Incorrecta: és àmbit audiovisual propi del CAC.",
      "Incorrecta: el punt inclou nous serveis digitals audiovisuals.",
      "Correcta.",
      "Incorrecta: el punt destaca protecció de menors i control de publicitat com a funcions.",
    ],
  },
  {
    id: "T3B1P11-Q04",
    tipus: "TRAMPA",
    enunciat: "Quina afirmació és correcta sobre la potestat del CAC?",
    opcions: [
      "No pot sancionar; només emet recomanacions no vinculants",
      "Pot dictar instruccions generals vinculants i imposar sancions als operadors",
      "Pot anul·lar lleis i expulsar-les de l’ordenament",
      "Pot dictar decrets llei en matèria audiovisual",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El punt atribueix al CAC potestat sancionadora i potestat normativa mitjançant instruccions generals vinculants per als prestadors.",
    explicacioIncorrectes: [
      "Incorrecta: no és només consultiu; té potestats administratives (sancionadora i normativa).",
      "Correcta.",
      "Incorrecta: això correspon al TC, no al CAC.",
      "Incorrecta: els decrets llei són del Govern, no del CAC.",
    ],
  },
  {
    id: "T3B1P11-Q05",
    tipus: "TRAMPA",
    enunciat: "Qui designa el President o Presidenta del CAC segons el text base?",
    opcions: [
      "El Govern de la Generalitat",
      "La CNMC",
      "El Parlament de Catalunya d’entre els membres del CAC",
      "Els prestadors audiovisuals mitjançant votació sectorial",
    ],
    correcta: 2,
    explicacioCorrecta:
      "El President/a del CAC és elegit pel Parlament d’entre els sis membres del Consell.",
    explicacioIncorrectes: [
      "Incorrecta: el Govern no el designa.",
      "Incorrecta: la CNMC és autoritat estatal i no designa el CAC.",
      "Correcta.",
      "Incorrecta: els operadors no intervenen en el nomenament.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LEGISLACIÓ (5)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P11-Q06",
    tipus: "LEGISLACIO",
    enunciat: "Quin article de la CE és clau com a fonament de les garanties de llibertat d’expressió i informació?",
    opcions: ["Article 20 CE", "Article 54 CE", "Article 97 CE", "Article 136 CE"],
    correcta: 0,
    explicacioCorrecta:
      "L’article 20 CE reconeix drets relacionats amb llibertat d’expressió i comunicació d’informació veraç; l’art. 20.3 CE preveu control parlamentari dels mitjans públics i garantia d’accés en pluralisme.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: 54 CE és Defensor del Poble.",
      "Incorrecta: 97 CE és Govern (funció executiva i potestat reglamentària).",
      "Incorrecta: 136 CE és Tribunal de Comptes.",
    ],
  },
  {
    id: "T3B1P11-Q07",
    tipus: "LEGISLACIO",
    enunciat: "Quin article de l’EAC 2006 eleva el CAC a rang estatutari segons el punt?",
    opcions: ["Article 82 EAC", "Article 80 EAC", "Article 78 EAC", "Article 76 EAC"],
    correcta: 0,
    explicacioCorrecta:
      "El text base indica que l’art. 82 EAC eleva el CAC a rang estatutari i l’integra en el sistema institucional.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: 80–81 EAC s’associen a la Sindicatura de Comptes.",
      "Incorrecta: 78–79 EAC s’associen al Síndic de Greuges.",
      "Incorrecta: 76 EAC s’associa al CGE (funcions de control jurídic).",
    ],
  },
  {
    id: "T3B1P11-Q08",
    tipus: "LEGISLACIO",
    enunciat: "Quines majories d’elecció dels membres del CAC s’estableixen al text base?",
    opcions: [
      "3/5 en primera votació i simple en segona",
      "2/3 en primera votació i majoria absoluta en segona",
      "Majoría absoluta en primera votació i 2/3 en segona",
      "Majoría simple sempre",
    ],
    correcta: 1,
    explicacioCorrecta:
      "Segons el text, el Parlament elegeix els membres amb 2/3 en primera votació; si no s’assoleix, es passa a majoria absoluta en la mateixa sessió.",
    explicacioIncorrectes: [
      "Incorrecta: 3/5 és propi d’altres institucions (p. ex. Síndic/Sindicatura de Comptes), però aquí és 2/3 i absoluta.",
      "Correcta.",
      "Incorrecta: està invertit.",
      "Incorrecta: no és majoria simple.",
    ],
  },
  {
    id: "T3B1P11-Q09",
    tipus: "LEGISLACIO",
    enunciat: "Quina és la durada del mandat dels membres del CAC segons el text base?",
    opcions: ["4 anys renovable", "6 anys no renovable", "9 anys no renovable", "6 anys renovable"],
    correcta: 1,
    explicacioCorrecta:
      "El punt estableix que el mandat és de 6 anys i no és renovable.",
    explicacioIncorrectes: [
      "Incorrecta: no és 4 anys.",
      "Correcta.",
      "Incorrecta: 9 anys s’associa al Síndic de Greuges.",
      "Incorrecta: el text diu expressament que no és renovable.",
    ],
  },
  {
    id: "T3B1P11-Q10",
    tipus: "LEGISLACIO",
    enunciat: "Quin article de l’EAC s’esmenta sobre distribució competencial en matèria audiovisual?",
    opcions: ["Article 146 EAC", "Article 150 EAC", "Article 112 EAC", "Article 81 EAC"],
    correcta: 0,
    explicacioCorrecta:
      "El text base indica que l’art. 146 EAC estableix una distribució competencial complexa en matèria audiovisual.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: 150 EAC es vincula a l’Administració de la Generalitat (estructura i funcionament).",
      "Incorrecta: 112 EAC s’associa a execució de normativa estatal en altres punts.",
      "Incorrecta: 81 EAC és Sindicatura de Comptes (composició/designació).",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CONCEPTE (10)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P11-Q11",
    tipus: "CONCEPTE",
    enunciat: "Quina és la missió principal del CAC segons el punt?",
    opcions: [
      "Dirigir la política cultural del Govern en mitjans públics",
      "Vetllar pel compliment de la normativa audiovisual pels prestadors públics i privats",
      "Enjudiciar responsabilitats comptables dels operadors",
      "Representar Catalunya davant el Tribunal Constitucional",
    ],
    correcta: 1,
    explicacioCorrecta:
      "La missió del CAC és garantir el compliment de la normativa aplicable als prestadors de serveis audiovisuals (públics i privats).",
    explicacioIncorrectes: [
      "Incorrecta: la direcció política correspon al Govern, no al CAC.",
      "Correcta.",
      "Incorrecta: això és propi del Tribunal de Comptes (i ni tan sols en audiovisual).",
      "Incorrecta: no és funció del CAC.",
    ],
  },
  {
    id: "T3B1P11-Q12",
    tipus: "CONCEPTE",
    enunciat: "Quin element justifica especialment la independència del CAC respecte del Govern?",
    opcions: [
      "Perquè gestiona el pressupost general de la Generalitat",
      "Perquè exerceix potestats que afecten llibertats públiques i cal neutralitat",
      "Perquè és un òrgan judicial",
      "Perquè substitueix el Parlament en matèria legislativa audiovisual",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El punt destaca que la independència desvincula potestats que incideixen en llibertats públiques de la direcció política, assegurant neutralitat i objectivitat.",
    explicacioIncorrectes: [
      "Incorrecta: no gestiona el pressupost general.",
      "Correcta.",
      "Incorrecta: no és òrgan judicial.",
      "Incorrecta: no substitueix el Parlament ni legisla.",
    ],
  },
  {
    id: "T3B1P11-Q13",
    tipus: "CONCEPTE",
    enunciat: "Quina funció del CAC s’associa directament amb el pluralisme?",
    opcions: [
      "Vetllar pel pluralisme polític, social, religiós, cultural i lingüístic",
      "Aprovar la llei audiovisual de Catalunya",
      "Nomenar els directors dels mitjans públics",
      "Fixar el tipus impositiu de la publicitat",
    ],
    correcta: 0,
    explicacioCorrecta:
      "El CAC vetlla pel pluralisme en el conjunt del sistema audiovisual a Catalunya.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: aprovar lleis és competència del Parlament.",
      "Incorrecta: el CAC no nomena directius dels mitjans públics.",
      "Incorrecta: no fixa tributs ni tipus impositius.",
    ],
  },
  {
    id: "T3B1P11-Q14",
    tipus: "CONCEPTE",
    enunciat: "Quina afirmació és correcta sobre la potestat normativa del CAC?",
    opcions: [
      "Pot dictar instruccions generals vinculants per als prestadors de serveis",
      "Pot dictar decrets llei",
      "Pot aprovar lleis orgàniques",
      "Només pot emetre recomanacions sempre no vinculants",
    ],
    correcta: 0,
    explicacioCorrecta:
      "Segons el punt, el CAC pot dictar instruccions generals de caràcter vinculant per als prestadors.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: els decrets llei són del Govern.",
      "Incorrecta: les lleis orgàniques corresponen a les Corts Generals.",
      "Incorrecta: el punt atribueix instruccions generals vinculants, a més d’altres informes.",
    ],
  },
  {
    id: "T3B1P11-Q15",
    tipus: "CONCEPTE",
    enunciat: "Quin rol té el CAC en protecció de col·lectius?",
    opcions: [
      "No en té cap, només fiscalitza pluralisme",
      "Protegeix infància i adolescència i controla publicitat audiovisual",
      "Només pot actuar en publicitat institucional del Govern",
      "Només controla l’ús del català, no altres aspectes",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El text base indica una funció específica en protecció de menors i control de publicitat.",
    explicacioIncorrectes: [
      "Incorrecta: sí que té funcions de protecció de col·lectius i control publicitari.",
      "Correcta.",
      "Incorrecta: el control no es limita a publicitat institucional.",
      "Incorrecta: també vetlla per drets, pluralisme i protecció de menors.",
    ],
  },
  {
    id: "T3B1P11-Q16",
    tipus: "CONCEPTE",
    enunciat: "Quina afirmació reflecteix millor la relació CAC–Parlament?",
    opcions: [
      "El Parlament dirigeix jeràrquicament el CAC i li dona instruccions polítiques",
      "El Parlament designa els membres, però el CAC exerceix potestats reguladores i sancionadores de manera autònoma",
      "El CAC aprova les lleis i el Parlament només les ratifica",
      "El CAC només pot actuar si el Govern ho autoritza",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El Parlament té potestat legislativa i designa membres, però el CAC actua autònomament en regulació i sanció dins el seu àmbit.",
    explicacioIncorrectes: [
      "Incorrecta: la designació no implica direcció jeràrquica ni instruccions polítiques.",
      "Correcta.",
      "Incorrecta: és al revés; el Parlament aprova les lleis.",
      "Incorrecta: el CAC és independent del Govern.",
    ],
  },
  {
    id: "T3B1P11-Q17",
    tipus: "CONCEPTE",
    enunciat: "Quina és la relació general CAC–CNMC segons el punt?",
    opcions: [
      "La CNMC és l’òrgan autonòmic i el CAC és estatal",
      "La CNMC té àmbit estatal; el CAC actua a Catalunya (àmbit autonòmic i local) i sobre desconnexions a Catalunya",
      "El CAC depèn de la CNMC i n’executa totes les decisions",
      "El CAC només controla publicitat i la CNMC només controla pluralisme",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El punt situa la CNMC com a regulador estatal i el CAC com a regulador a Catalunya, incloent prestadors autonòmics i locals i desconnexions per Catalunya.",
    explicacioIncorrectes: [
      "Incorrecta: està invertit.",
      "Correcta.",
      "Incorrecta: no hi ha dependència jeràrquica indicada.",
      "Incorrecta: la distribució de funcions no és aquesta.",
    ],
  },
  {
    id: "T3B1P11-Q18",
    tipus: "CONCEPTE",
    enunciat: "Quin element singular s’atribueix al President/a del CAC en el Ple?",
    opcions: ["Pot vetar totes les decisions", "Té vot de qualitat", "És designat pel Govern", "Té mandat vitalici"],
    correcta: 1,
    explicacioCorrecta:
      "Segons el text base, el President/a té vot de qualitat en el Ple del CAC.",
    explicacioIncorrectes: [
      "Incorrecta: no s’indica potestat de veto general.",
      "Correcta.",
      "Incorrecta: el President/a és elegit pel Parlament d’entre els membres.",
      "Incorrecta: el mandat no és vitalici.",
    ],
  },
  {
    id: "T3B1P11-Q19",
    tipus: "CONCEPTE",
    enunciat: "Quina afirmació és correcta sobre les incompatibilitats dels membres del CAC segons el punt?",
    opcions: [
      "Poden ser diputats si s’abstenen en votacions audiovisuals",
      "Poden tenir participació en empreses audiovisuals si és indirecta",
      "No poden ser diputats ni membres del Govern, ni tenir interessos en empreses del sector audiovisual o publicitat",
      "Només tenen incompatibilitat amb càrrecs judicials",
    ],
    correcta: 2,
    explicacioCorrecta:
      "El punt estableix incompatibilitats estrictes: no diputats, no Govern, no interessos directes o indirectes en empreses del sector, i dedicació exclusiva.",
    explicacioIncorrectes: [
      "Incorrecta: no poden ser diputats.",
      "Incorrecta: la prohibició inclou interessos directes o indirectes.",
      "Correcta.",
      "Incorrecta: és un règim més ampli que només càrrecs judicials.",
    ],
  },
  {
    id: "T3B1P11-Q20",
    tipus: "CONCEPTE",
    enunciat: "Quina és la diferència essencial entre el CAC i el Tribunal Constitucional (TC)?",
    opcions: [
      "El CAC controla constitucionalitat de lleis; el TC controla legalitat audiovisual",
      "El CAC controla compliment de legalitat administrativa en audiovisual; el TC controla constitucionalitat de les lleis",
      "Tots dos dicten sentències judicials amb efectes erga omnes",
      "El TC regula llicències audiovisuals i el CAC resol recursos d’empara",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El CAC actua com a regulador administratiu del sector audiovisual; el TC és l’intèrpret suprem de la CE i controla la constitucionalitat de normes amb rang de llei.",
    explicacioIncorrectes: [
      "Incorrecta: està invertit.",
      "Correcta.",
      "Incorrecta: el CAC no dicta sentències.",
      "Incorrecta: la regulació de llicències correspon al CAC; els recursos d’empara al TC.",
    ],
  },
];

export default punt11Ask;