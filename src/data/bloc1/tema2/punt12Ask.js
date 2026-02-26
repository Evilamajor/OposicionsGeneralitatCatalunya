// punt12Ask.js
// TEMA 2 — PUNT 12
// Relacions Parlament-Govern i control polític

const punt12Ask = [

/* ======================================================
   5 PREGUNTES TRAMPA
====================================================== */

{
  type: "trampa",
  question: "El President del Parlament pot proposar qualsevol ciutadà com a candidat a la investidura.",
  options: [
    "Sí, sempre que tingui veïnatge administratiu a Catalunya",
    "Sí, si ho avala la majoria absoluta",
    "No, el candidat ha de ser diputat del Parlament",
    "Només si no hi ha cap diputat disposat"
  ],
  correctAnswer: 2,
  explanation: "Correcta: el candidat ha de ser membre del Parlament (art. 152.1 CE i 67.2 EAC). Incorrectes: no pot ser qualsevol ciutadà ni depèn d’avals polítics externs."
},

{
  type: "trampa",
  question: "La moció de censura pot dirigir-se contra un Conseller individual.",
  options: [
    "Sí, perquè la responsabilitat és individual",
    "Sí, amb majoria simple",
    "No, s’exerceix sobre el President i comporta el cessament del Govern",
    "Només si ho demana una comissió d’investigació"
  ],
  correctAnswer: 2,
  explanation: "Correcta: la moció és constructiva contra el President i implica el cessament del Govern. Incorrectes: no és contra consellers individuals."
},

{
  type: "trampa",
  question: "La qüestió de confiança requereix majoria absoluta per ser aprovada.",
  options: [
    "Sí, com la moció de censura",
    "No, s’aprova per majoria simple",
    "Sí, si afecta política general",
    "Només si ho demana el Parlament"
  ],
  correctAnswer: 1,
  explanation: "Correcta: es concedeix amb majoria simple. Incorrectes: la majoria absoluta és pròpia de la moció de censura."
},

{
  type: "trampa",
  question: "El President necessita l’acord del Govern per plantejar una qüestió de confiança.",
  options: [
    "Sí, acord vinculant",
    "No, només deliberació prèvia",
    "Sí, unanimitat",
    "Depèn del Reglament del Parlament"
  ],
  correctAnswer: 1,
  explanation: "Correcta: només cal deliberació prèvia. Incorrectes: no hi ha acord vinculant ni unanimitat."
},

{
  type: "trampa",
  question: "El Parlament pot dissoldre’s immediatament després d’eleccions si no hi ha majoria clara.",
  options: [
    "Sí, per decisió del President del Parlament",
    "Sí, si ho demana la majoria simple",
    "No, cal esperar dos mesos des de la primera votació fallida",
    "Sí, automàticament al cap d’un mes"
  ],
  correctAnswer: 2,
  explanation: "Correcta: la dissolució automàtica opera després de dos mesos sense investidura. Incorrectes: no és immediata."
},

/* ======================================================
   5 PREGUNTES LEGISLACIÓ
====================================================== */

{
  type: "legislacio",
  question: "Quin article de la CE estableix el model institucional autonòmic?",
  options: [
    "Art. 24 CE",
    "Art. 149.1 CE",
    "Art. 152.1 CE",
    "Art. 1.2 CE"
  ],
  correctAnswer: 2,
  explanation: "Correcta: l’art. 152.1 CE regula Assemblea, Govern i President autonòmic."
},

{
  type: "legislacio",
  question: "Segons l’art. 67.2 EAC, el President és elegit:",
  options: [
    "Pel Rei",
    "Pel Parlament d’entre els seus membres",
    "Per sufragi universal directe",
    "Pel Govern estatal"
  ],
  correctAnswer: 1,
  explanation: "Correcta: elegit pel Parlament entre diputats."
},

{
  type: "legislacio",
  question: "L’article 74.1 EAC estableix:",
  options: [
    "La inviolabilitat del Parlament",
    "La responsabilitat solidària del Govern davant el Parlament",
    "La dissolució automàtica",
    "La potestat reglamentària"
  ],
  correctAnswer: 1,
  explanation: "Correcta: regula la responsabilitat política solidària."
},

{
  type: "legislacio",
  question: "L’article 75 EAC regula:",
  options: [
    "La moció de censura",
    "La qüestió de confiança",
    "La dissolució anticipada del Parlament",
    "Les incompatibilitats"
  ],
  correctAnswer: 2,
  explanation: "Correcta: regula la dissolució anticipada."
},

{
  type: "legislacio",
  question: "La moció de censura requereix:",
  options: [
    "Majoría simple",
    "Majoría absoluta",
    "Unanimitat",
    "2/3 dels diputats"
  ],
  correctAnswer: 1,
  explanation: "Correcta: majoria absoluta."
},

/* ======================================================
   10 PREGUNTES CONCEPTES
====================================================== */

{
  type: "conceptes",
  question: "La forma de govern a Catalunya és:",
  options: [
    "Presidencialista",
    "Assembleària",
    "Parlamentària",
    "Directa"
  ],
  correctAnswer: 2,
  explanation: "Correcta: és un sistema parlamentari."
},

{
  type: "conceptes",
  question: "El Govern es manté en el poder mentre:",
  options: [
    "Tingui suport popular directe",
    "Conservi la confiança del Parlament",
    "Ho decideixi el Rei",
    "Ho aprovi el TC"
  ],
  correctAnswer: 1,
  explanation: "Correcta: depèn de la confiança parlamentària."
},

{
  type: "conceptes",
  question: "La diferència entre control polític i control jurídic és que:",
  options: [
    "El polític implica cessament; el jurídic responsabilitat legal",
    "El jurídic és exercit pel Parlament",
    "El polític sempre acaba en sanció penal",
    "No hi ha diferència"
  ],
  correctAnswer: 0,
  explanation: "Correcta: el polític és relació de confiança; el jurídic és davant tribunals."
},

{
  type: "conceptes",
  question: "Les interpel·lacions poden donar lloc a:",
  options: [
    "Sentències",
    "Mocions",
    "Decrets llei",
    "Cessament automàtic"
  ],
  correctAnswer: 1,
  explanation: "Correcta: poden derivar en mocions."
},

{
  type: "conceptes",
  question: "Les comissions d’investigació tenen com a finalitat:",
  options: [
    "Condemnar penalment",
    "Fiscalitzar assumptes d’interès públic",
    "Aprovar pressupostos",
    "Elegir President"
  ],
  correctAnswer: 1,
  explanation: "Correcta: investigació política, no penal."
},

{
  type: "conceptes",
  question: "La qüestió de confiança és iniciativa de:",
  options: [
    "El Parlament",
    "El President",
    "El Rei",
    "El TSJC"
  ],
  correctAnswer: 1,
  explanation: "Correcta: iniciativa exclusiva del President."
},

{
  type: "conceptes",
  question: "La moció de censura és constructiva perquè:",
  options: [
    "Exigeix majoria simple",
    "Inclou candidat alternatiu",
    "La presenta el President",
    "No té efectes jurídics"
  ],
  correctAnswer: 1,
  explanation: "Correcta: inclou candidat alternatiu."
},

{
  type: "conceptes",
  question: "El President en funcions pot:",
  options: [
    "Dissoldre el Parlament",
    "Plantejar confiança",
    "Limitar-se al despatx ordinari",
    "Aprovar reforma estatutària"
  ],
  correctAnswer: 2,
  explanation: "Correcta: només despatx ordinari."
},

{
  type: "conceptes",
  question: "El parlamentarisme racionalitzat busca:",
  options: [
    "Incrementar inestabilitat",
    "Evitar buits de poder i reforçar estabilitat",
    "Eliminar el Parlament",
    "Donar sobirania pròpia a la Generalitat"
  ],
  correctAnswer: 1,
  explanation: "Correcta: reforça estabilitat governamental."
},

{
  type: "conceptes",
  question: "Segons la STC 31/2010, l’EAC és:",
  options: [
    "Norma superior a la CE",
    "Norma subordinada a la Constitució",
    "Equivalent a la CE",
    "Poder constituent originari"
  ],
  correctAnswer: 1,
  explanation: "Correcta: l’EAC és Llei Orgànica subordinada."
}

];

export default punt12Ask;