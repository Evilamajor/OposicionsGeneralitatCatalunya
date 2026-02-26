// punt14Ask.js
// TEMA 2 — PUNT 14
// Vegueries, comarques i municipis

const punt14Ask = [

/* ======================================================
   5 PREGUNTES TRAMPA
====================================================== */

{
  type: "trampa",
  question: "La comarca és una estructura territorial bàsica segons l’EAC 2006.",
  options: [
    "Sí, al mateix nivell que el municipi",
    "Sí, perquè és ens supramunicipal",
    "No, les estructures bàsiques són municipis i vegueries",
    "Només a les zones rurals"
  ],
  correctAnswer: 2,
  explanation: "Correcta: l’art. 83.1 EAC estableix municipis i vegueries com a bàsiques. Incorrectes: la comarca és àmbit supramunicipal necessari."
},

{
  type: "trampa",
  question: "El Parlament de Catalunya pot modificar els límits provincials mitjançant llei pròpia.",
  options: [
    "Sí, per majoria absoluta",
    "Sí, si hi ha acord municipal",
    "No, requereix llei orgànica estatal (art. 141 CE)",
    "Només amb referèndum"
  ],
  correctAnswer: 2,
  explanation: "Correcta: l’alteració dels límits provincials és competència estatal via llei orgànica. Incorrectes: la Generalitat no té aquesta competència."
},

{
  type: "trampa",
  question: "Els ens locals tenen autonomia política equivalent a la Generalitat.",
  options: [
    "Sí, perquè gestionen interessos propis",
    "No, només tenen autonomia administrativa",
    "Sí, si tenen competències pròpies",
    "Només les vegueries"
  ],
  correctAnswer: 1,
  explanation: "Correcta: l’autonomia local és administrativa. Incorrectes: només la Generalitat té autonomia política amb potestat legislativa."
},

{
  type: "trampa",
  question: "La vegueria és una divisió territorial de l’Estat prevista a la CE.",
  options: [
    "Sí, a l’art. 141 CE",
    "No, és una divisió estatutària per a la Generalitat",
    "Sí, com a substitució automàtica de la província",
    "Només si ho valida el TC"
  ],
  correctAnswer: 1,
  explanation: "Correcta: és divisió estatutària (art. 90 EAC). Incorrectes: la CE només reconeix la província."
},

{
  type: "trampa",
  question: "La Generalitat té competència exclusiva absoluta en règim local.",
  options: [
    "Sí, en tot el règim local",
    "No, és competència bifrontal amb l’Estat",
    "Només en municipis",
    "Només en vegueries"
  ],
  correctAnswer: 1,
  explanation: "Correcta: l’art. 149.1.18 CE reserva bases a l’Estat. Incorrectes: no és competència exclusiva total."
},

/* ======================================================
   5 PREGUNTES LEGISLACIÓ
====================================================== */

{
  type: "legislacio",
  question: "Segons l’art. 137 CE, l’Estat s’organitza en:",
  options: [
    "Municipis, comarques i vegueries",
    "Municipis, províncies i comunitats autònomes",
    "Municipis i vegueries",
    "Províncies i comarques"
  ],
  correctAnswer: 1,
  explanation: "Correcta: art. 137 CE estableix municipis, províncies i CCAA."
},

{
  type: "legislacio",
  question: "L’article 86.1 EAC defineix el municipi com:",
  options: [
    "Ens supramunicipal",
    "Ens local bàsic",
    "Divisió provincial",
    "Ens constitucional estatal"
  ],
  correctAnswer: 1,
  explanation: "Correcta: el municipi és ens local bàsic."
},

{
  type: "legislacio",
  question: "La vegueria es regula principalment a:",
  options: [
    "Art. 84 EAC",
    "Art. 90 EAC",
    "Art. 140 CE",
    "Art. 149.1.18 CE"
  ],
  correctAnswer: 1,
  explanation: "Correcta: art. 90 EAC regula la vegueria."
},

{
  type: "legislacio",
  question: "La garantia constitucional de la província es troba a:",
  options: [
    "Art. 137 CE",
    "Art. 140 CE",
    "Art. 141 CE",
    "Art. 152 CE"
  ],
  correctAnswer: 2,
  explanation: "Correcta: art. 141 CE reconeix la província com a entitat constitucional necessària."
},

{
  type: "legislacio",
  question: "El principi de subsidiarietat es recull a:",
  options: [
    "Art. 84.3 EAC",
    "Art. 90 EAC",
    "Art. 137 CE",
    "Art. 67 EAC"
  ],
  correctAnswer: 0,
  explanation: "Correcta: art. 84.3 EAC regula el principi de subsidiarietat."
},

/* ======================================================
   10 PREGUNTES CONCEPTES
====================================================== */

{
  type: "conceptes",
  question: "L’ens local bàsic de l’organització territorial catalana és:",
  options: [
    "La comarca",
    "La vegueria",
    "El municipi",
    "La província"
  ],
  correctAnswer: 2,
  explanation: "Correcta: el municipi és l’ens local bàsic."
},

{
  type: "conceptes",
  question: "La funció principal de la comarca és:",
  options: [
    "Legislativa",
    "Cooperació municipal",
    "Representació estatal",
    "Control jurisdiccional"
  ],
  correctAnswer: 1,
  explanation: "Correcta: la comarca exerceix funcions de cooperació i gestió supramunicipal."
},

{
  type: "conceptes",
  question: "El govern del municipi correspon a:",
  options: [
    "Consell Comarcal",
    "Consell de Vegueria",
    "Ajuntament",
    "Diputació"
  ],
  correctAnswer: 2,
  explanation: "Correcta: el govern municipal correspon a l’Ajuntament."
},

{
  type: "conceptes",
  question: "Els Consells de Vegueria substitueixen:",
  options: [
    "Ajuntaments",
    "Diputacions provincials",
    "Comarques",
    "Consells comarcals"
  ],
  correctAnswer: 1,
  explanation: "Correcta: art. 91.3 EAC estableix la substitució de diputacions."
},

{
  type: "conceptes",
  question: "La STC 31/2010 estableix que la província:",
  options: [
    "Pot ser eliminada per la Generalitat",
    "És una garantia institucional constitucional",
    "És un ens estatutari",
    "Depèn del Parlament català"
  ],
  correctAnswer: 1,
  explanation: "Correcta: el TC declara la província entitat constitucional garantida."
},

{
  type: "conceptes",
  question: "Les competències pròpies municipals s’exerceixen:",
  options: [
    "Amb subordinació política al Govern",
    "Amb plena autonomia subjecta a control de legalitat",
    "Només per delegació estatal",
    "Sense control judicial"
  ],
  correctAnswer: 1,
  explanation: "Correcta: exercici amb autonomia i control de legalitat."
},

{
  type: "conceptes",
  question: "El règim local és una matèria:",
  options: [
    "Exclusiva autonòmica",
    "Exclusiva estatal",
    "Bifrontal (bases estatals + desplegament autonòmic)",
    "Jurisdiccional"
  ],
  correctAnswer: 2,
  explanation: "Correcta: art. 149.1.18 CE + desplegament autonòmic."
},

{
  type: "conceptes",
  question: "El principi de subsidiarietat implica que:",
  options: [
    "Decideix sempre l’Estat",
    "Decideix l’administració més propera si és eficaç",
    "La Generalitat assumeix totes les competències",
    "Les vegueries substitueixen municipis"
  ],
  correctAnswer: 1,
  explanation: "Correcta: exercici pel nivell més proper capaç de gestionar."
},

{
  type: "conceptes",
  question: "La vegueria és també divisió territorial per:",
  options: [
    "L’Estat",
    "Els tribunals",
    "L’organització dels serveis de la Generalitat",
    "Les diputacions"
  ],
  correctAnswer: 2,
  explanation: "Correcta: art. 90 EAC."
},

{
  type: "conceptes",
  question: "L’autonomia local és de naturalesa:",
  options: [
    "Política i legislativa",
    "Administrativa",
    "Constituent",
    "Soberana"
  ],
  correctAnswer: 1,
  explanation: "Correcta: autonomia administrativa; no legislativa."
}

];

export default punt14Ask;