// src/data/bloc1/tema3/ask/punt7Ask.js
// TEMA 3 – BLOC 1 – PUNT 7: Competències executives i reglamentàries del Govern
// 20 preguntes tipus test (5 TRAMPA, 5 LEGISLACIÓ, 10 CONCEPTE) amb explicació breu
// Nota: adapta el path d’importació segons l’estructura del teu projecte.

export const punt7Ask = [
  // ─────────────────────────────────────────────────────────────────────────────
  // TRAMPA (5)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P7-Q01",
    tipus: "TRAMPA",
    enunciat:
      "Quin òrgan exerceix el control ordinari de legalitat dels reglaments (en general)?",
    opcions: [
      "El Tribunal Constitucional",
      "La jurisdicció contenciosa administrativa",
      "El Tribunal Suprem, sempre i en exclusiva",
      "El Defensor del Poble mitjançant recomanacions vinculants",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El control ordinari de la legalitat reglamentària correspon a la jurisdicció contenciosa administrativa, que pot anul·lar reglaments contraris a la llei o al dret.",
    explicacioIncorrectes: [
      "Incorrecta: el TC no és el control ordinari dels reglaments; intervé, si escau, en conflictes competencials o en supòsits específics.",
      "Correcta.",
      "Incorrecta: el TS pot conèixer de recursos segons competència, però el control ordinari és contenciós, no “sempre i en exclusiva” del TS.",
      "Incorrecta: les recomanacions no són control jurisdiccional ni tenen caràcter vinculant general.",
    ],
  },
  {
    id: "T3B1P7-Q02",
    tipus: "TRAMPA",
    enunciat: "Quina afirmació és correcta sobre circulars i instruccions internes?",
    opcions: [
      "Són reglaments perquè sempre innoven l’ordenament jurídic",
      "No són reglaments: orienten l’actuació interna i, en principi, no innoven l’ordenament",
      "Tenen rang de llei quan les dicta un conseller",
      "Només són aplicables als ciutadans quan les publica el DOGC",
    ],
    correcta: 1,
    explicacioCorrecta:
      "Circulars i instruccions són instruments de direcció interna (en principi) i no tenen naturalesa reglamentària ni creen normes generals amb rang infralegal.",
    explicacioIncorrectes: [
      "Incorrecta: no innoven necessàriament l’ordenament ni tenen caràcter reglamentari per se.",
      "Correcta.",
      "Incorrecta: un conseller no pot dictar normes amb rang de llei via circular/instrucció.",
      "Incorrecta: la publicació no converteix una instrucció interna en reglament aplicable erga omnes.",
    ],
  },
  {
    id: "T3B1P7-Q03",
    tipus: "TRAMPA",
    enunciat: "Pot un reglament crear un impost nou per si mateix?",
    opcions: [
      "Sí, si el Govern acredita urgència",
      "Sí, sempre que l’import sigui petit",
      "No, perquè la creació de tributs està sotmesa a reserva de llei",
      "Només si és un decret aprovat pel President",
    ],
    correcta: 2,
    explicacioCorrecta:
      "La creació de tributs i càrregues patrimonials essencials queda, en termes generals, subjecta a reserva de llei: el reglament no pot substituir la llei.",
    explicacioIncorrectes: [
      "Incorrecta: la urgència pot justificar un decret llei (rang de llei), però no habilita un reglament per crear tributs.",
      "Incorrecta: la quantia no elimina la reserva de llei.",
      "Correcta.",
      "Incorrecta: el rang i la matèria no canvien pel fet que el signi el President; continua sent reglament (infralegal).",
    ],
  },
  {
    id: "T3B1P7-Q04",
    tipus: "TRAMPA",
    enunciat: "Quina relació hi ha entre un decret reglamentari i una ordre de conselleria (a Catalunya)?",
    opcions: [
      "L’ordre té rang superior perquè la dicta un conseller",
      "El decret i l’ordre tenen el mateix rang",
      "El decret té rang superior a l’ordre",
      "L’ordre només és superior si es publica al DOGC",
    ],
    correcta: 2,
    explicacioCorrecta:
      "En la jerarquia normativa interna, els decrets del Govern (o del President) se situen per sobre de les ordres dels consellers.",
    explicacioIncorrectes: [
      "Incorrecta: el rang no depèn de la “importància” del càrrec, sinó de la jerarquia normativa establerta.",
      "Incorrecta: no tenen el mateix rang.",
      "Correcta.",
      "Incorrecta: la publicació és requisit d’eficàcia general del reglament, però no altera el seu rang respecte d’altres reglaments.",
    ],
  },
  {
    id: "T3B1P7-Q05",
    tipus: "TRAMPA",
    enunciat: "Quina afirmació descriu millor la potestat reglamentària?",
    opcions: [
      "És una potestat subordinada a la llei i limitada per la reserva de llei",
      "És una potestat equivalent a la llei perquè innova l’ordenament",
      "És una potestat que només pot exercir-se si una llei prèvia l’atorga expressament",
      "És una potestat pròpia del Parlament i exercida mitjançant decrets",
    ],
    correcta: 0,
    explicacioCorrecta:
      "El reglament innova l’ordenament, però és infralegal: està subordinat a la llei i no pot envair matèries reservades a llei.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: el reglament no és equivalent a la llei; és jeràrquicament inferior.",
      "Incorrecta: la potestat reglamentària és reconeguda per la CE/EAC (no sempre requereix una llei habilitant).",
      "Incorrecta: el Parlament exerceix funció legislativa, no potestat reglamentària.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LEGISLACIÓ (5)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P7-Q06",
    tipus: "LEGISLACIO",
    enunciat: "Quin precepte constitucional atribueix al Govern la funció executiva i la potestat reglamentària?",
    opcions: ["Article 9.3 CE", "Article 97 CE", "Article 147.1 CE", "Article 23 CE"],
    correcta: 1,
    explicacioCorrecta:
      "L’article 97 CE estableix que el Govern dirigeix la política interior i exterior, l’Administració i la defensa, i exerceix la funció executiva i la potestat reglamentària.",
    explicacioIncorrectes: [
      "Incorrecta: l’art. 9.3 CE recull principis com legalitat i jerarquia normativa, però no l’atribució del 97 CE.",
      "Correcta.",
      "Incorrecta: l’art. 147.1 CE regula l’Estatut d’Autonomia.",
      "Incorrecta: l’art. 23 CE es refereix a participació política.",
    ],
  },
  {
    id: "T3B1P7-Q07",
    tipus: "LEGISLACIO",
    enunciat: "Quin article de la CE estableix la submissió dels poders públics a la Constitució i a l’ordenament jurídic?",
    opcions: ["Article 9.1 CE", "Article 97 CE", "Article 66.2 CE", "Article 14 CE"],
    correcta: 0,
    explicacioCorrecta:
      "L’art. 9.1 CE disposa que els ciutadans i els poders públics estan subjectes a la Constitució i a la resta de l’ordenament jurídic.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: l’art. 97 CE defineix funcions del Govern.",
      "Incorrecta: l’art. 66.2 CE tracta de les funcions de les Corts Generals.",
      "Incorrecta: l’art. 14 CE regula el principi d’igualtat.",
    ],
  },
  {
    id: "T3B1P7-Q08",
    tipus: "LEGISLACIO",
    enunciat: "Quin article de la CE inclou el principi de legalitat i la jerarquia normativa (entre d’altres)?",
    opcions: ["Article 9.3 CE", "Article 97 CE", "Article 2 CE", "Article 103 CE"],
    correcta: 0,
    explicacioCorrecta:
      "L’art. 9.3 CE recull principis com la legalitat, jerarquia normativa, publicitat de les normes i seguretat jurídica.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: l’art. 97 CE és el del Govern (funció executiva i potestat reglamentària).",
      "Incorrecta: l’art. 2 CE tracta de la unitat d’Espanya i l’autonomia.",
      "Incorrecta: l’art. 103 CE regula principis de l’Administració pública (eficàcia, jerarquia, etc.).",
    ],
  },
  {
    id: "T3B1P7-Q09",
    tipus: "LEGISLACIO",
    enunciat: "Quin precepte estatutari s’esmenta com a base de la direcció del Govern sobre l’Administració a Catalunya?",
    opcions: ["Article 68.1 EAC", "Article 150 EAC", "Article 112 EAC", "Article 1 EAC"],
    correcta: 0,
    explicacioCorrecta:
      "L’art. 68.1 EAC s’invoca com a fonament estatutari de la direcció del Govern sobre l’Administració en l’àmbit de Catalunya.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: l’art. 150 EAC es refereix a competències sobre l’Administració de la Generalitat (estructura i funcionament).",
      "Incorrecta: l’art. 112 EAC preveu disposicions reglamentàries per a l’execució de normativa estatal dins l’àmbit competencial.",
      "Incorrecta: l’art. 1 EAC defineix Catalunya com a nacionalitat i l’EAC com a norma institucional bàsica.",
    ],
  },
  {
    id: "T3B1P7-Q10",
    tipus: "LEGISLACIO",
    enunciat: "Quin article de l’EAC es menciona com a base per dictar disposicions reglamentàries d’execució de normativa estatal?",
    opcions: ["Article 112 EAC", "Article 68.1 EAC", "Article 150 EAC", "Article 2.3 EAC"],
    correcta: 0,
    explicacioCorrecta:
      "L’art. 112 EAC s’esmenta com a previsió estatutària per dictar disposicions reglamentàries d’execució de normativa estatal, dins l’àmbit competencial.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: 68.1 EAC (direcció del Govern).",
      "Incorrecta: 150 EAC (estructura i funcionament de l’Administració de la Generalitat).",
      "Incorrecta: 2.3 EAC tracta d’ens locals (municipis, vegueries, etc.).",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CONCEPTE (10)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P7-Q11",
    tipus: "CONCEPTE",
    enunciat: "Quina és la millor definició de funció executiva del Govern, segons el temari?",
    opcions: [
      "Creació de normes primàries amb rang de llei",
      "Aplicació del dret a casos concrets mitjançant actes administratius",
      "Control preventiu de constitucionalitat de les lleis",
      "Interpretació autèntica de la Constitució",
    ],
    correcta: 1,
    explicacioCorrecta:
      "La funció executiva implica aplicar el dret (llei general i abstracta) a situacions concretes, sovint mitjançant actes administratius.",
    explicacioIncorrectes: [
      "Incorrecta: això és funció legislativa del Parlament.",
      "Correcta.",
      "Incorrecta: el control preventiu no és propi del Govern i, en general, no opera així en el sistema espanyol.",
      "Incorrecta: la interpretació autèntica de la CE correspon al TC.",
    ],
  },
  {
    id: "T3B1P7-Q12",
    tipus: "CONCEPTE",
    enunciat: "Quina afirmació descriu millor la relació llei–reglament?",
    opcions: [
      "El reglament té rang superior perquè és més concret",
      "El reglament és inferior a la llei i no la pot contradir",
      "La llei només vincula l’Administració, però no el Govern",
      "El reglament pot substituir la llei en matèries reservades si és urgent",
    ],
    correcta: 1,
    explicacioCorrecta:
      "Per jerarquia normativa, el reglament és infralegal: desenvolupa o complementa la llei però no pot contradir-la ni envair la reserva de llei.",
    explicacioIncorrectes: [
      "Incorrecta: la concreció no implica rang superior.",
      "Correcta.",
      "Incorrecta: Govern i Administració estan sotmesos a la llei i al dret.",
      "Incorrecta: la urgència pot justificar un decret llei (rang de llei), no un reglament en reserva de llei.",
    ],
  },
  {
    id: "T3B1P7-Q13",
    tipus: "CONCEPTE",
    enunciat: "Què caracteritza principalment els reglaments executius (secundum legem)?",
    opcions: [
      "Es dicten sempre sense cap llei prèvia",
      "Despleguen o faciliten l’aplicació d’una llei prèvia",
      "Tenen rang de llei perquè desenvolupen drets fonamentals",
      "Només els pot dictar el Parlament",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El reglament executiu pressuposa una llei prèvia i la concreta o desplega per fer-ne possible l’aplicació.",
    explicacioIncorrectes: [
      "Incorrecta: això descriu (en part) l’idea de reglament independent.",
      "Correcta.",
      "Incorrecta: continua sent infralegal.",
      "Incorrecta: el Parlament fa lleis, no reglaments.",
    ],
  },
  {
    id: "T3B1P7-Q14",
    tipus: "CONCEPTE",
    enunciat: "Quan parlem de reglaments independents (praeter legem), què vol dir principalment?",
    opcions: [
      "Regulen matèries no sotmeses a reserva de llei en absència de llei prèvia",
      "Regulen sempre drets fonamentals",
      "Són decrets llei autonòmics",
      "No poden ser controlats pels tribunals",
    ],
    correcta: 0,
    explicacioCorrecta:
      "Els reglaments independents es dicten sense llei prèvia quan la matèria no està reservada a llei (freqüentment, organització interna).",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: drets fonamentals tendeixen a exigir reserva de llei.",
      "Incorrecta: el decret llei té rang de llei; no és un reglament.",
      "Incorrecta: els reglaments estan sotmesos al control contenciós-administratiu.",
    ],
  },
  {
    id: "T3B1P7-Q15",
    tipus: "CONCEPTE",
    enunciat: "Quin és un límit material clàssic de la potestat reglamentària?",
    opcions: [
      "El reglament pot crear delictes i penes si ho publica al DOGC",
      "El reglament no pot tipificar delictes ni establir penes",
      "El reglament pot crear tributs si ho aprova el Consell Executiu",
      "El reglament pot eliminar la reserva de llei amb una disposició final",
    ],
    correcta: 1,
    explicacioCorrecta:
      "La potestat reglamentària està limitada per la reserva de llei i principis bàsics: no pot tipificar delictes ni establir penes, i té restriccions fortes en matèria sancionadora/tributària.",
    explicacioIncorrectes: [
      "Incorrecta: publicació no habilita a vulnerar reserva de llei.",
      "Correcta.",
      "Incorrecta: crear tributs requereix rang de llei.",
      "Incorrecta: un reglament no pot “desactivar” la reserva de llei.",
    ],
  },
  {
    id: "T3B1P7-Q16",
    tipus: "CONCEPTE",
    enunciat: "Quina diferència essencial hi ha entre reglament i decret llei?",
    opcions: [
      "Cap: tots dos tenen rang de llei",
      "El reglament és infralegal; el decret llei té rang de llei i exigeix pressupòsit habilitant (urgència)",
      "El decret llei només el pot dictar el Parlament",
      "El reglament sempre requereix convalidació parlamentària",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El reglament és una norma administrativa infralegal. El decret llei és una norma amb rang de llei dictada pel Govern en supòsits excepcionals (pressupòsit habilitant) i subjecta a control parlamentari.",
    explicacioIncorrectes: [
      "Incorrecta: tenen rang diferent.",
      "Correcta.",
      "Incorrecta: el decret llei el dicta el Govern, no el Parlament.",
      "Incorrecta: la convalidació és pròpia del decret llei, no del reglament.",
    ],
  },
  {
    id: "T3B1P7-Q17",
    tipus: "CONCEPTE",
    enunciat: "Quin és el control típic dels decrets llei i decrets legislatius (com a normes amb rang de llei)?",
    opcions: [
      "Jurisdicció contenciosa administrativa, com qualsevol reglament",
      "Tribunal Constitucional (control de constitucionalitat)",
      "Comissió Jurídica Assessora, com a control definitiu",
      "Cap control: són actes polítics no revisables",
    ],
    correcta: 1,
    explicacioCorrecta:
      "Com a normes amb rang de llei, el control de constitucionalitat correspon al Tribunal Constitucional (sense perjudici d’altres controls parlamentaris o interns).",
    explicacioIncorrectes: [
      "Incorrecta: el contenciós controla reglaments i actes administratius; el rang de llei s’enquadra en control constitucional.",
      "Correcta.",
      "Incorrecta: la CJA pot intervenir de manera consultiva en certs procediments, però no és el control “definitiu” de normes amb rang de llei.",
      "Incorrecta: hi ha controls i no són immunes.",
    ],
  },
  {
    id: "T3B1P7-Q18",
    tipus: "CONCEPTE",
    enunciat: "Quina idea reflecteix millor el principi de jerarquia normativa aplicat als reglaments?",
    opcions: [
      "Un reglament pot contradir una llei si és posterior",
      "Un reglament pot deixar sense efecte una llei si és més específic",
      "Un reglament no pot vulnerar una norma amb rang de llei",
      "La jerarquia només s’aplica entre lleis, no entre reglaments",
    ],
    correcta: 2,
    explicacioCorrecta:
      "La jerarquia normativa implica que el reglament és inferior a la llei: no la pot contradir ni modificar.",
    explicacioIncorrectes: [
      "Incorrecta: la posterioritat no supera la jerarquia (lex posterior no opera contra rang superior).",
      "Incorrecta: l’especificitat no autoritza a contradir una llei.",
      "Correcta.",
      "Incorrecta: també hi ha jerarquia entre reglaments (p. ex., decret vs ordre).",
    ],
  },
  {
    id: "T3B1P7-Q19",
    tipus: "CONCEPTE",
    enunciat: "Què vol dir que la funció executiva és 'derivada i subordinada' respecte de la funció legislativa?",
    opcions: [
      "Que el Govern només pot actuar si rep autorització del TC",
      "Que l’executiu aplica i gestiona normes dictades pel legislador, sense poder substituir-lo en reserva de llei",
      "Que el Govern dicta lleis i el Parlament les executa",
      "Que l’Administració és independent del Govern",
    ],
    correcta: 1,
    explicacioCorrecta:
      "La funció legislativa crea normes primàries (lleis). L’executiu desplega i aplica aquestes normes, i no pot envair espais reservats al legislador.",
    explicacioIncorrectes: [
      "Incorrecta: el TC no autoritza l’activitat executiva ordinària.",
      "Correcta.",
      "Incorrecta: és al revés: el Parlament legisla i el Govern/Administració executen.",
      "Incorrecta: l’Administració actua sota direcció del Govern (sens perjudici de garanties i controls).",
    ],
  },
  {
    id: "T3B1P7-Q20",
    tipus: "CONCEPTE",
    enunciat:
      "Segons el punt, què pot passar si un decret legislatiu excedeix els límits de la delegació (ultra vires) en alguns preceptes?",
    opcions: [
      "Els preceptes excedits poden degradar-se a rang reglamentari i ser controlats per la jurisdicció ordinària",
      "Tot el decret legislatiu es converteix automàticament en un reglament",
      "No passa res: la delegació impedeix qualsevol control",
      "El control sempre correspon al Síndic de Greuges",
    ],
    correcta: 0,
    explicacioCorrecta:
      "En cas d’excés de delegació, els preceptes que excedeixen la delegació poden perdre el rang de llei (degradació) i quedar sotmesos al control ordinari corresponent.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: no necessàriament “tot” el decret; es tracta dels preceptes excedits.",
      "Incorrecta: la delegació no elimina el control.",
      "Incorrecta: el Síndic pot fer recomanacions/actuacions, però no és el control jurisdiccional.",
    ],
  },
];

export default punt7Ask;