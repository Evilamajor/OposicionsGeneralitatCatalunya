// punt11Ask.js
// TEMA 2 — PUNT 11
// El Govern de la Generalitat: estructura i competències

const punt11Ask = [

/* ======================================================
   5 PREGUNTES TRAMPA
====================================================== */

{
  type: "trampa",
  question: "El Govern és l’únic titular del poder executiu a Catalunya.",
  options: [
    "Sí, exclusivament el Govern",
    "No, l’Administració també forma part de la funció executiva sota la seva direcció",
    "Sí, perquè el Parlament només legisla",
    "No, perquè el poder executiu correspon al Tribunal Superior de Justícia"
  ],
  correctAnswer: 1,
  explanation: "Correcta: el Govern dirigeix l’Administració, que és l’estructura instrumental del poder executiu. Incorrectes: no és exclusiu sense Administració; el Parlament no executa; el TSJC és poder judicial."
},

{
  type: "trampa",
  question: "El terme oficial utilitzat per l’EAC 2006 per referir-se a l’executiu és:",
  options: [
    "Consell Executiu",
    "Consell de Govern",
    "Govern",
    "Consell de Ministres de Catalunya"
  ],
  correctAnswer: 2,
  explanation: "Correcta: el terme oficial és 'Govern'. Incorrectes: 'Consell Executiu' és denominació anterior; les altres no són terminologia estatutària."
},

{
  type: "trampa",
  question: "El Conseller Primer pot ser simultàniament Vicepresident.",
  options: [
    "Sí, són càrrecs compatibles",
    "No, la Llei 13/2008 estableix que són excloents",
    "Sí, si ho autoritza el Parlament",
    "Només en períodes en funcions"
  ],
  correctAnswer: 1,
  explanation: "Correcta: són figures excloents. Incorrectes: no depèn d’autorització parlamentària ni de situació en funcions."
},

{
  type: "trampa",
  question: "El Govern té potestat legislativa pròpia en el mateix sentit que el Parlament.",
  options: [
    "Sí, comparteix la potestat legislativa",
    "No, només té iniciativa legislativa i potestat normativa limitada",
    "Sí, mitjançant decrets ordinaris",
    "Sí, quan hi ha urgència"
  ],
  correctAnswer: 1,
  explanation: "Correcta: la potestat legislativa correspon al Parlament. El Govern pot dictar decrets llei o legislatius, però no té potestat legislativa plena."
},

{
  type: "trampa",
  question: "El Govern en funcions pot aprovar el projecte de llei de pressupostos.",
  options: [
    "Sí, si hi ha urgència",
    "Sí, amb majoria absoluta del Parlament",
    "No, la Llei 13/2008 ho prohibeix",
    "Només si ho autoritza el President"
  ],
  correctAnswer: 2,
  explanation: "Correcta: l’art. 27.2 de la Llei 13/2008 ho prohibeix. Incorrectes: no hi ha excepció per urgència ni autorització presidencial."
},

/* ======================================================
   5 PREGUNTES DE LEGISLACIÓ
====================================================== */

{
  type: "legislacio",
  question: "Quin article de la CE estableix el model institucional autonòmic amb Govern propi?",
  options: [
    "Art. 24 CE",
    "Art. 152.1 CE",
    "Art. 149.1 CE",
    "Art. 67 CE"
  ],
  correctAnswer: 1,
  explanation: "Correcta: l’art. 152.1 CE regula l’organització institucional autonòmica. Les altres opcions no tracten aquesta matèria."
},

{
  type: "legislacio",
  question: "Segons l’art. 68.2 EAC, el Govern es compon de:",
  options: [
    "President i Consellers únicament",
    "President, Conseller Primer o Vicepresident (si escau) i Consellers",
    "Només el President",
    "President, Parlament i TSJC"
  ],
  correctAnswer: 1,
  explanation: "Correcta: aquesta és la composició prevista. Incorrectes: el Parlament i TSJC no formen part del Govern."
},

{
  type: "legislacio",
  question: "Quin article de l’EAC regula les incompatibilitats dels membres del Govern?",
  options: [
    "Art. 67 EAC",
    "Art. 70 EAC",
    "Art. 55 EAC",
    "Art. 62 EAC"
  ],
  correctAnswer: 1,
  explanation: "Correcta: l’art. 70 EAC regula incompatibilitats. Les altres opcions regulen altres matèries."
},

{
  type: "legislacio",
  question: "Segons l’art. 68.4 EAC, el Govern cessa:",
  options: [
    "Quan cessa el President",
    "Quan ho acorda el Parlament per majoria simple",
    "Cada any automàticament",
    "Només si hi ha moció de censura"
  ],
  correctAnswer: 0,
  explanation: "Correcta: el cessament del President comporta el cessament del Govern. Incorrectes: no hi ha cessament anual ni per simple acord parlamentari."
},

{
  type: "legislacio",
  question: "Els decrets legislatius del Govern s’aproven:",
  options: [
    "Sense delegació parlamentària",
    "En virtut de delegació del Parlament",
    "Mitjançant referèndum",
    "Amb autorització del Rei"
  ],
  correctAnswer: 1,
  explanation: "Correcta: necessiten delegació parlamentària. Incorrectes: no hi ha referèndum ni intervenció del Rei."
},

/* ======================================================
   10 PREGUNTES DE CONTINGUT
====================================================== */

{
  type: "conceptes",
  question: "El principi de col·legialitat implica que:",
  options: [
    "El President decideix unilateralment",
    "Els acords es formen mitjançant deliberació conjunta",
    "Els consellers decideixen individualment",
    "El Parlament valida totes les decisions"
  ],
  correctAnswer: 1,
  explanation: "Correcta: la voluntat del Govern es forma col·lectivament. Incorrectes: no hi ha decisió unilateral presidencial ni validació parlamentària prèvia."
},

{
  type: "conceptes",
  question: "En cas d’empat en una votació del Govern:",
  options: [
    "Es repeteix la votació",
    "Decideix el Parlament",
    "El vot del President és diriment",
    "Queda anul·lada la decisió"
  ],
  correctAnswer: 2,
  explanation: "Correcta: el vot del President és diriment. Incorrectes: no intervé el Parlament ni queda anul·lada."
},

{
  type: "conceptes",
  question: "Les deliberacions del Govern tenen caràcter:",
  options: [
    "Públic",
    "Secret",
    "Reservat només durant la legislatura",
    "Publicable immediatament"
  ],
  correctAnswer: 1,
  explanation: "Correcta: són secretes fins i tot després del cessament. Incorrectes: no són públiques."
},

{
  type: "conceptes",
  question: "La responsabilitat política del Govern davant el Parlament és:",
  options: [
    "Individual",
    "Solidària",
    "Judicial",
    "Administrativa"
  ],
  correctAnswer: 1,
  explanation: "Correcta: és solidària. Cada membre té responsabilitat directa departamental, però la responsabilitat política és conjunta."
},

{
  type: "conceptes",
  question: "La potestat reglamentària del Govern consisteix en:",
  options: [
    "Aprovar lleis",
    "Dictar decrets que desenvolupen o executen lleis",
    "Modificar la Constitució",
    "Aprovar sentències"
  ],
  correctAnswer: 1,
  explanation: "Correcta: dicta reglaments i decrets. Incorrectes: no aprova lleis ni modifica la CE."
},

{
  type: "conceptes",
  question: "El Govern pot dictar decrets llei en:",
  options: [
    "Qualsevol circumstància",
    "Casos de necessitat extraordinària i urgent",
    "Només amb referèndum",
    "Només amb majoria absoluta parlamentària prèvia"
  ],
  correctAnswer: 1,
  explanation: "Correcta: requereix necessitat extraordinària i urgent. Incorrectes: no és lliure ni requereix referèndum."
},

{
  type: "conceptes",
  question: "La iniciativa legislativa del Govern es manifesta mitjançant:",
  options: [
    "Mocions",
    "Projectes de llei",
    "Decrets ordinaris",
    "Interpel·lacions"
  ],
  correctAnswer: 1,
  explanation: "Correcta: projectes de llei. Incorrectes: mocions/interpel·lacions són instruments parlamentaris."
},

{
  type: "conceptes",
  question: "La relació entre Govern i Administració es basa en:",
  options: [
    "Independència absoluta",
    "Principi de jerarquia",
    "Control judicial permanent",
    "Delegació parlamentària"
  ],
  correctAnswer: 1,
  explanation: "Correcta: el Govern dirigeix l’Administració sota principi de jerarquia."
},

{
  type: "conceptes",
  question: "La STC 31/2010 va reafirmar que:",
  options: [
    "L’EAC és superior a la CE",
    "El TC és l’intèrpret suprem del repartiment competencial",
    "La Generalitat té sobirania pròpia",
    "El Govern pot definir competències estatals"
  ],
  correctAnswer: 1,
  explanation: "Correcta: el TC és l’intèrpret suprem. Incorrectes: l’EAC és subordinat a la CE."
},

{
  type: "conceptes",
  question: "El Govern forma part del:",
  options: [
    "Bloc de constitucionalitat",
    "Poder constituent",
    "Òrgan sobirà",
    "Poder judicial"
  ],
  correctAnswer: 0,
  explanation: "Correcta: actua dins el bloc de la constitucionalitat. Incorrectes: no és poder constituent ni judicial."
}

];

export default punt11Ask;