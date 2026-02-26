// punt10Ask.js
// TEMA 2 — PUNT 10
// La Presidència de la Generalitat (EAC 2006)

const punt10Ask = [

  /* ======================================================
     5 PREGUNTES TRAMPA
  ====================================================== */

  {
    type: "trampa",
    question: "Qui elegeix el President o Presidenta de la Generalitat?",
    options: [
      "El Rei, per lliure designació",
      "El Parlament de Catalunya",
      "El Govern de la Generalitat",
      "El Tribunal Constitucional"
    ],
    correctAnswer: 1,
    explanation:
      "Correcta: el President és elegit pel Parlament mitjançant investidura. Incorrectes: el Rei només el nomena formalment per Reial Decret; el Govern i el TC no elegeixen el President."
  },
  {
    type: "trampa",
    question: "Per ser candidat a la Presidència de la Generalitat cal ser:",
    options: [
      "Qualsevol ciutadà amb veïnatge administratiu a Catalunya",
      "Funcionari de la Generalitat amb categoria A1",
      "Necessàriament diputat o diputada del Parlament",
      "Senador/a designat per Catalunya"
    ],
    correctAnswer: 2,
    explanation:
      "Correcta: el candidat ha de ser membre del Parlament (diputat/da). Incorrectes: no n’hi ha prou amb ser ciutadà o funcionari, i ser senador/a no substitueix la condició de diputat."
  },
  {
    type: "trampa",
    question: "En cas de dissolució anticipada del Parlament, el President en funcions pot dissoldre novament la Cambra?",
    options: [
      "Sí, perquè manté totes les facultats",
      "Sí, si ho aprova el Govern per unanimitat",
      "No, el President en funcions té facultats limitades i no pot dissoldre",
      "Només si ho autoritza el Rei"
    ],
    correctAnswer: 2,
    explanation:
      "Correcta: en funcions el President no pot dissoldre el Parlament. Incorrectes: no manté totes les facultats, no depèn d’unanimitat del Govern i el Rei no autoritza dissolucions autonòmiques."
  },
  {
    type: "trampa",
    question: "La moció de censura al Parlament de Catalunya és:",
    options: [
      "No constructiva (només cal censurar el President)",
      "Constructiva (ha d’incloure candidat alternatiu)",
      "Automàtica si es denega una qüestió de confiança",
      "Aprovable per majoria simple"
    ],
    correctAnswer: 1,
    explanation:
      "Correcta: és constructiva i inclou candidat alternatiu. Incorrectes: no és no-constructiva, no és automàtica (són mecanismes diferents) i requereix majoria absoluta, no simple."
  },
  {
    type: "trampa",
    question: "El President necessita l’acord del Govern per dissoldre anticipadament el Parlament?",
    options: [
      "Sí, acord formal i vinculant del Govern",
      "Sí, però només de la Mesa del Parlament",
      "No: pot haver-hi deliberació prèvia, però la decisió és del President",
      "No: perquè la dissolució la decreta el Rei"
    ],
    correctAnswer: 2,
    explanation:
      "Correcta: la decisió és del President (amb deliberació prèvia segons el cas). Incorrectes: el Govern no decideix vinculantment, la Mesa no té aquesta competència i el Rei no decreta la dissolució autonòmica."
  },

  /* ======================================================
     5 PREGUNTES DE LEGISLACIÓ
  ====================================================== */

  {
    type: "legislacio",
    question: "Quin precepte constitucional predetermina la figura del President en el marc autonòmic (govern parlamentari)?",
    options: [
      "Article 24 CE",
      "Article 149.1.1 CE",
      "Article 152.1 CE",
      "Article 67.1 CE"
    ],
    correctAnswer: 2,
    explanation:
      "Correcta: l’art. 152.1 CE estableix l’esquema institucional bàsic de les CCAA (presidència i govern sota model parlamentari). Incorrectes: 24 CE és tutela judicial; 149.1.1 CE és bases d’igualtat; 67.1 CE tracta el mandat imperatiu a les Corts."
  },
  {
    type: "legislacio",
    question: "Quin article de l’EAC concreta la triple dimensió del President (cap Generalitat, cap Govern, representant ordinari de l’Estat)?",
    options: [
      "Article 55 EAC",
      "Article 67.1 EAC",
      "Article 76 EAC",
      "Article 62.2 EAC"
    ],
    correctAnswer: 1,
    explanation:
      "Correcta: art. 67.1 EAC. Incorrectes: 55 EAC és Parlament; 76 EAC és Consell de Garanties; 62.2 EAC és majories de lleis de desenvolupament bàsic."
  },
  {
    type: "legislacio",
    question: "Quin article de l’EAC regula els actes del President com a representant ordinari de l’Estat (promulgació/publicació, etc.)?",
    options: [
      "Article 67.6 EAC",
      "Article 67.7 EAC",
      "Article 67.8 EAC",
      "Article 2.4 EAC"
    ],
    correctAnswer: 0,
    explanation:
      "Correcta: art. 67.6 EAC (representació ordinària de l’Estat). Incorrectes: 67.7 és cessament; 67.8 suplència; 2.4 és menció sobre el poble de Catalunya (interpretada segons STC 31/2010)."
  },
  {
    type: "legislacio",
    question: "Segons l’art. 67.7 EAC, quina d’aquestes és una causa de cessament del President?",
    options: [
      "Aprovació d’una moció de censura",
      "Pèrdua d’una votació ordinària al Ple",
      "Rebuig d’una proposició de llei",
      "No aprovar el pressupost en primera votació"
    ],
    correctAnswer: 0,
    explanation:
      "Correcta: la moció de censura aprovada comporta cessament. Incorrectes: perdre votacions ordinàries o rebutjar lleis no implica cessament automàtic; el pressupost tampoc genera cessament per si sol."
  },
  {
    type: "legislacio",
    question: "Quin article de l’EAC regula la suplència del President en casos d’absència o malaltia?",
    options: [
      "Article 67.8 EAC",
      "Article 67.6 EAC",
      "Article 67.1 EAC",
      "Article 55.3 EAC"
    ],
    correctAnswer: 0,
    explanation:
      "Correcta: art. 67.8 EAC (suplència). Incorrectes: 67.6 és actes deguts; 67.1 triple dimensió; 55.3 EAC és inviolabilitat del Parlament."
  },

  /* ======================================================
     10 PREGUNTES DE CONCEPTES
  ====================================================== */

  {
    type: "conceptes",
    question: "Quina afirmació descriu millor la posició del President en el sistema parlamentari català?",
    options: [
      "És un càrrec merament simbòlic sense funcions executives",
      "És l’únic membre del Govern investit directament pel Parlament",
      "És elegit directament pel poble mitjançant sufragi universal",
      "Depèn jeràrquicament del President del Parlament"
    ],
    correctAnswer: 1,
    explanation:
      "Correcta: el President rep la confiança directa del Parlament via investidura. Incorrectes: no és només simbòlic, no és elecció directa ciutadana i no depèn jeràrquicament del President del Parlament."
  },
  {
    type: "conceptes",
    question: "En primera votació d’investidura, el candidat necessita:",
    options: [
      "Majoría simple",
      "Majoría absoluta",
      "Majoría de 2/3",
      "Unanimitat"
    ],
    correctAnswer: 1,
    explanation:
      "Correcta: majoria absoluta. Incorrectes: la majoria simple és a la segona votació; 2/3 i unanimitat no s’exigeixen."
  },
  {
    type: "conceptes",
    question: "Si no s’obté majoria absoluta en primera votació, la segona votació té lloc:",
    options: [
      "24 hores després",
      "48 hores després",
      "7 dies després",
      "1 mes després"
    ],
    correctAnswer: 1,
    explanation:
      "Correcta: 48 hores després. Incorrectes: 24h/7 dies/1 mes no són el termini previst en el procediment descrit."
  },
  {
    type: "conceptes",
    question: "Què passa si transcorren dos mesos des de la primera votació d’investidura sense elegir President?",
    options: [
      "El Rei nomena un President provisional",
      "El Parlament es dissol automàticament i es convoquen eleccions",
      "S’activa automàticament una qüestió de confiança",
      "El President del Parlament assumeix la Presidència"
    ],
    correctAnswer: 1,
    explanation:
      "Correcta: dissolució automàtica i noves eleccions. Incorrectes: el Rei no designa provisionalment; la confiança no s’activa així; el President del Parlament no assumeix la Presidència de la Generalitat."
  },
  {
    type: "conceptes",
    question: "El nomenament formal del President, un cop elegit pel Parlament, s’efectua mitjançant:",
    options: [
      "Decret del Govern de la Generalitat",
      "Reial Decret del Rei contrasignat pel President del Govern de l’Estat",
      "Resolució del Tribunal Constitucional",
      "Acord de la Mesa del Parlament"
    ],
    correctAnswer: 1,
    explanation:
      "Correcta: Reial Decret amb contrasignatura del President del Govern. Incorrectes: no és decret de la Generalitat, ni resolució judicial, ni acord de la Mesa."
  },
  {
    type: "conceptes",
    question: "Quina de les següents funcions és pròpia del President com a cap del Govern?",
    options: [
      "Promulgar les lleis en nom del Rei",
      "Convocar i presidir les reunions del Govern",
      "Ordenar la publicació al BOE de totes les lleis estatals",
      "Nomenar jutges del TSJC"
    ],
    correctAnswer: 1,
    explanation:
      "Correcta: convoca i presideix el Govern. Incorrectes: la promulgació en nom del Rei és dimensió de representant ordinari; no publica lleis estatals ni nomena jutges."
  },
  {
    type: "conceptes",
    question: "Els actes del President com a representant ordinari de l’Estat (promulgació/publicació) es consideren:",
    options: [
      "Actes discrecionals polítics",
      "Actes deguts (formals i obligats)",
      "Actes jurisdiccionals",
      "Actes de dret privat"
    ],
    correctAnswer: 1,
    explanation:
      "Correcta: són actes deguts. Incorrectes: no són discrecionals en el fons, ni jurisdiccionals, ni de dret privat."
  },
  {
    type: "conceptes",
    question: "La qüestió de confiança plantejada pel President s’aprova amb:",
    options: [
      "Majoría absoluta",
      "Majoría simple",
      "Majoría de 3/5",
      "Unanimitat"
    ],
    correctAnswer: 1,
    explanation:
      "Correcta: majoria simple. Incorrectes: la majoria absoluta és pròpia de la moció de censura i d’altres supòsits; 3/5 i unanimitat no es requereixen."
  },
  {
    type: "conceptes",
    question: "Quina afirmació és correcta sobre el President en funcions?",
    options: [
      "Pot dissoldre el Parlament per desbloquejar la legislatura",
      "Pot plantejar qüestions de confiança per legitimar-se",
      "Té limitades les facultats: no pot dissoldre ni plantejar confiança ni cessar/nomenar consellers",
      "Pot cessar consellers però no nomenar-ne de nous"
    ],
    correctAnswer: 2,
    explanation:
      "Correcta: en funcions té limitacions (dissolució, confiança i nomenament/cessament). Incorrectes: les altres opcions atribueixen facultats que la regulació limita."
  },
  {
    type: "conceptes",
    question: "Segons la STC 31/2010, la menció al “poble de Catalunya” com a font dels poders s’ha d’interpretar:",
    options: [
      "Com a sobirania exclusiva del poble català",
      "Com a sobirania compartida entre Catalunya i l’Estat",
      "D’acord amb la sobirania única del poble espanyol (art. 1.2 CE)",
      "Com a equivalent jurídic al dret d’autodeterminació"
    ],
    correctAnswer: 2,
    explanation:
      "Correcta: s’interpreta conforme a la sobirania única del poble espanyol (art. 1.2 CE). Incorrectes: no reconeix sobirania exclusiva catalana, ni sobirania compartida, ni equival a autodeterminació."
  }

];

export default punt10Ask;