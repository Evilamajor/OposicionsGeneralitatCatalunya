// punt13Ask.js
// TEMA 2 — PUNT 13
// Organització territorial de Catalunya (EAC 2006)

const punt13Ask = [

/* ======================================================
   5 PREGUNTES TRAMPA
====================================================== */

{
  type: "trampa",
  question: "Catalunya pot eliminar les províncies mitjançant llei del Parlament.",
  options: [
    "Sí, perquè l’EAC li atorga competència exclusiva",
    "Sí, si hi ha majoria absoluta",
    "No, la província és ens constitucional garantit per l’art. 141 CE",
    "Només si ho aprova el Consell de Vegueria"
  ],
  correctAnswer: 2,
  explanation: "Correcta: la província és entitat constitucional necessària (art. 141 CE). Incorrectes: el Parlament no pot eliminar-la unilateralment."
},

{
  type: "trampa",
  question: "La comarca és l’ens local bàsic de l’organització territorial catalana.",
  options: [
    "Sí, perquè agrupa municipis",
    "No, l’ens local bàsic és el municipi",
    "Sí, segons l’art. 83 EAC",
    "Només a l’àrea metropolitana"
  ],
  correctAnswer: 1,
  explanation: "Correcta: l’ens local bàsic és el municipi (art. 86.1 EAC). Incorrectes: la comarca és ens supramunicipal."
},

{
  type: "trampa",
  question: "Els ens locals tenen autonomia política equivalent a la Generalitat.",
  options: [
    "Sí, perquè gestionen interessos propis",
    "No, tenen autonomia administrativa",
    "Sí, si tenen competències pròpies",
    "Només els municipis grans"
  ],
  correctAnswer: 1,
  explanation: "Correcta: autonomia administrativa, no política. Incorrectes: no tenen potestat legislativa."
},

{
  type: "trampa",
  question: "La Generalitat té competència exclusiva total en règim local.",
  options: [
    "Sí, en tots els aspectes",
    "No, és competència compartida amb l’Estat (art. 149.1.18 CE)",
    "Només en matèria de municipis",
    "Només en comarques"
  ],
  correctAnswer: 1,
  explanation: "Correcta: l’Estat dicta les bases del règim local (149.1.18 CE). Incorrectes: no és competència exclusiva plena."
},

{
  type: "trampa",
  question: "La vegueria és una entitat constitucional prevista a la CE.",
  options: [
    "Sí, a l’art. 141 CE",
    "No, és creació estatutària",
    "Sí, com a província",
    "Només si ho aprova el TC"
  ],
  correctAnswer: 1,
  explanation: "Correcta: la vegueria és ens estatutari (art. 90 EAC). Incorrectes: la CE només reconeix província."
},

/* ======================================================
   5 PREGUNTES LEGISLACIÓ
====================================================== */

{
  type: "legislacio",
  question: "L’article 137 CE estableix que l’Estat s’organitza en:",
  options: [
    "Municipis, comarques i comunitats autònomes",
    "Municipis, províncies i comunitats autònomes",
    "Municipis i vegueries",
    "Províncies i vegueries"
  ],
  correctAnswer: 1,
  explanation: "Correcta: municipis, províncies i CCAA."
},

{
  type: "legislacio",
  question: "Segons l’art. 86.1 EAC, el municipi és:",
  options: [
    "Ens supramunicipal",
    "Ens local bàsic",
    "Ens constitucional necessari",
    "Divisió territorial administrativa de l’Estat"
  ],
  correctAnswer: 1,
  explanation: "Correcta: ens local bàsic."
},

{
  type: "legislacio",
  question: "L’article 90.1 EAC regula:",
  options: [
    "La comarca",
    "La vegueria",
    "La província",
    "Les mancomunitats"
  ],
  correctAnswer: 1,
  explanation: "Correcta: regula la vegueria."
},

{
  type: "legislacio",
  question: "L’alteració dels límits provincials requereix:",
  options: [
    "Llei ordinària del Parlament",
    "Decret del Govern",
    "Llei orgànica de les Corts Generals",
    "Referèndum autonòmic"
  ],
  correctAnswer: 2,
  explanation: "Correcta: art. 141.1 CE exigeix llei orgànica estatal."
},

{
  type: "legislacio",
  question: "L’article 84.3 EAC recull el principi de:",
  options: [
    "Jerarquia",
    "Subsidiarietat",
    "Centralització",
    "Legalitat pressupostària"
  ],
  correctAnswer: 1,
  explanation: "Correcta: regula el principi de subsidiarietat."
},

/* ======================================================
   10 PREGUNTES CONCEPTES
====================================================== */

{
  type: "conceptes",
  question: "L’autonomia política correspon a:",
  options: [
    "Municipis",
    "Comarques",
    "Generalitat",
    "Vegueries"
  ],
  correctAnswer: 2,
  explanation: "Correcta: només la Generalitat té autonomia política amb potestat legislativa."
},

{
  type: "conceptes",
  question: "Les competències pròpies dels municipis es caracteritzen per:",
  options: [
    "Dependència jeràrquica absoluta",
    "Exercici amb plena autonomia subjecta a control de legalitat",
    "Subordinació política al Govern",
    "Delegació obligatòria"
  ],
  correctAnswer: 1,
  explanation: "Correcta: exercici amb autonomia i control de legalitat."
},

{
  type: "conceptes",
  question: "La comarca exerceix principalment funcions de:",
  options: [
    "Legislació",
    "Cooperació i coordinació municipal",
    "Control judicial",
    "Representació internacional"
  ],
  correctAnswer: 1,
  explanation: "Correcta: és ens supramunicipal de cooperació."
},

{
  type: "conceptes",
  question: "Els Consells de Vegueria substitueixen:",
  options: [
    "Els ajuntaments",
    "Les diputacions provincials",
    "Les comarques",
    "El Parlament"
  ],
  correctAnswer: 1,
  explanation: "Correcta: substitució estatutària de diputacions (art. 91.3 EAC)."
},

{
  type: "conceptes",
  question: "El règim local es caracteritza per:",
  options: [
    "Competència exclusiva estatal",
    "Competència exclusiva autonòmica",
    "Bifrontalitat (bases estatals + desplegament autonòmic)",
    "Dependència judicial"
  ],
  correctAnswer: 2,
  explanation: "Correcta: règim local és competència compartida."
},

{
  type: "conceptes",
  question: "Les mancomunitats són:",
  options: [
    "Entitats constitucionals",
    "Entitats supramunicipals voluntàries",
    "Divisions provincials",
    "Òrgans judicials"
  ],
  correctAnswer: 1,
  explanation: "Correcta: creades voluntàriament per municipis."
},

{
  type: "conceptes",
  question: "Les àrees metropolitanes es creen:",
  options: [
    "Per decret del President",
    "Per llei del Parlament",
    "Per acord municipal simple",
    "Per llei orgànica estatal"
  ],
  correctAnswer: 1,
  explanation: "Correcta: art. 93 EAC exigeix llei del Parlament."
},

{
  type: "conceptes",
  question: "Les EMD són:",
  options: [
    "Ens provincials",
    "Nuclis descentralitzats dins d’un municipi",
    "Ens autonòmics",
    "Comarques petites"
  ],
  correctAnswer: 1,
  explanation: "Correcta: entitats municipals descentralitzades."
},

{
  type: "conceptes",
  question: "La STC 31/2010 estableix que:",
  options: [
    "La Generalitat pot eliminar províncies",
    "La província és garantia institucional",
    "Les vegueries són entitats constitucionals",
    "El règim local és exclusiu autonòmic"
  ],
  correctAnswer: 1,
  explanation: "Correcta: la província és garantia constitucional."
},

{
  type: "conceptes",
  question: "El principi de subsidiarietat implica que:",
  options: [
    "Sempre decideix l’Estat",
    "Les competències s’exerceixen pel nivell més proper capaç de gestionar-les",
    "La Generalitat absorbeix competències locals",
    "Les vegueries substitueixen municipis"
  ],
  correctAnswer: 1,
  explanation: "Correcta: subsidiarietat = nivell més proper eficient."
}

];

export default punt13Ask;