// src/data/bloc1/tema3/ask/punt9Ask.js
// TEMA 3 – BLOC 1 – PUNT 9: El Síndic de Greuges
// 20 preguntes tipus test (5 TRAMPA, 5 LEGISLACIÓ, 10 CONCEPTE) amb explicació breu
// Nota: adapta el path/format a l’estàndard del teu projecte.

export const punt9Ask = [
  // ─────────────────────────────────────────────────────────────────────────────
  // TRAMPA (5)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P9-Q01",
    tipus: "TRAMPA",
    enunciat: "Quina afirmació és correcta sobre les resolucions del Síndic de Greuges?",
    opcions: [
      "Són vinculants i obliguen l’Administració a revocar l’acte impugnat",
      "Són no vinculants: el Síndic formula recomanacions i suggeriments",
      "Tenen el mateix valor que una sentència judicial ferma",
      "Poden imposar sancions a l’Administració supervisada",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El Síndic és una magistratura de persuasió: les seves resolucions no són vinculants, tot i que l’Administració té el deure de cooperar i respondre.",
    explicacioIncorrectes: [
      "Incorrecta: el Síndic no pot obligar a revocar actes ni dictar ordres vinculants.",
      "Correcta.",
      "Incorrecta: no és un òrgan jurisdiccional i no dicta sentències.",
      "Incorrecta: no té potestat sancionadora.",
    ],
  },
  {
    id: "T3B1P9-Q02",
    tipus: "TRAMPA",
    enunciat: "Pot el Síndic de Greuges anul·lar una multa o un acte administratiu?",
    opcions: [
      "Sí, si la queixa està ben fonamentada",
      "Sí, si afecta drets fonamentals",
      "No: pot recomanar, però no anul·lar ni modificar actes",
      "Només si el Parlament ho autoritza",
    ],
    correcta: 2,
    explicacioCorrecta:
      "El Síndic no pot anul·lar actes administratius ni modificar normes. El seu control és per recomanació; la decisió última correspon a l’Administració o als tribunals.",
    explicacioIncorrectes: [
      "Incorrecta: no té potestat d’anul·lació.",
      "Incorrecta: l’afectació de drets no li dona potestat d’anul·lar.",
      "Correcta.",
      "Incorrecta: ni amb autorització parlamentària es converteix en òrgan anul·lador.",
    ],
  },
  {
    id: "T3B1P9-Q03",
    tipus: "TRAMPA",
    enunciat: "Quina afirmació és correcta sobre l’actuació del Defensor del Poble estatal a Catalunya?",
    opcions: [
      "No pot actuar a Catalunya perquè existeix el Síndic",
      "Només pot actuar si el Síndic li delega competències",
      "Pot actuar de forma concurrent amb el Síndic en defensa de drets constitucionals",
      "Només pot supervisar administracions locals catalanes",
    ],
    correcta: 2,
    explicacioCorrecta:
      "Després de la STC 31/2010, la supervisió del Síndic sobre la Generalitat no és exclusiva: hi ha competència concurrent amb el Defensor del Poble en l’àmbit dels drets constitucionals.",
    explicacioIncorrectes: [
      "Incorrecta: el Defensor del Poble pot actuar a Catalunya.",
      "Incorrecta: no hi ha subordinació ni delegació necessària per actuar.",
      "Correcta.",
      "Incorrecta: el Defensor del Poble pot supervisar totes les administracions públiques, no només les locals.",
    ],
  },
  {
    id: "T3B1P9-Q04",
    tipus: "TRAMPA",
    enunciat: "Pot el Síndic intervenir en assumptes pendents de resolució judicial (causes sub iúdice)?",
    opcions: [
      "Sí, si ho demana el ciutadà",
      "Sí, si l’Administració ha actuat amb mala fe",
      "No, perquè no pot interferir en l’activitat jurisdiccional",
      "Només si el jutge li demana informe",
    ],
    correcta: 2,
    explicacioCorrecta:
      "Un límit essencial és l’exclusió de l’activitat jurisdiccional: el Síndic no pot intervenir en assumptes sub iúdice ni supervisar jutges i tribunals.",
    explicacioIncorrectes: [
      "Incorrecta: la petició del ciutadà no elimina aquest límit.",
      "Incorrecta: la sospita de mala fe no habilita a interferir en causes judicials.",
      "Correcta.",
      "Incorrecta: encara que pugui col·laborar informativament, no pot supervisar ni intervenir com a control jurisdiccional.",
    ],
  },
  {
    id: "T3B1P9-Q05",
    tipus: "TRAMPA",
    enunciat: "Quina d’aquestes afirmacions descriu millor el Síndic de Greuges?",
    opcions: [
      "És un òrgan del poder judicial amb funcions sancionadores",
      "És un alt comissionat del Parlament, independent i no jurisdiccional",
      "És un membre de la Mesa del Parlament encarregat de tramitar queixes",
      "És un òrgan del Govern amb competència d’inspecció general",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El Síndic és l’alt comissionat del Parlament per defensar drets i llibertats, amb independència i autonomia funcional, i no forma part del poder judicial.",
    explicacioIncorrectes: [
      "Incorrecta: no és poder judicial ni té potestat sancionadora.",
      "Correcta.",
      "Incorrecta: no és membre de la Mesa; és extern i independent.",
      "Incorrecta: no depèn del Govern.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LEGISLACIÓ (5)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P9-Q06",
    tipus: "LEGISLACIO",
    enunciat: "Quin article de la CE regula la figura del Defensor del Poble?",
    opcions: ["Article 54 CE", "Article 97 CE", "Article 9.3 CE", "Article 23 CE"],
    correcta: 0,
    explicacioCorrecta:
      "L’article 54 CE estableix la figura del Defensor del Poble com a comissionat de les Corts Generals per a la supervisió de l’Administració i la defensa dels drets del Títol I.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: l’art. 97 CE regula el Govern.",
      "Incorrecta: l’art. 9.3 CE recull principis (legalitat, jerarquia normativa...).",
      "Incorrecta: l’art. 23 CE tracta de participació política.",
    ],
  },
  {
    id: "T3B1P9-Q07",
    tipus: "LEGISLACIO",
    enunciat: "A quins articles de l’EAC 2006 es regula el Síndic de Greuges segons el text base?",
    opcions: ["Articles 76–79 EAC", "Articles 78–79 EAC", "Articles 68–71 EAC", "Articles 112–113 EAC"],
    correcta: 1,
    explicacioCorrecta:
      "El text base indica que el Síndic de Greuges es regula als articles 78 i 79 de l’EAC 2006.",
    explicacioIncorrectes: [
      "Incorrecta: 76–79 correspon al CGE, no al Síndic.",
      "Correcta.",
      "Incorrecta: aquests articles no són els del Síndic segons el punt.",
      "Incorrecta: aquests articles no són els del Síndic segons el punt.",
    ],
  },
  {
    id: "T3B1P9-Q08",
    tipus: "LEGISLACIO",
    enunciat: "Quina majoria requereix el Parlament per elegir el Síndic de Greuges?",
    opcions: ["Majoría simple", "Majoría absoluta", "Tres cinquenes parts (3/5)", "Dues terceres parts (2/3)"],
    correcta: 2,
    explicacioCorrecta:
      "El Síndic és elegit pel Ple del Parlament amb una majoria qualificada de tres cinquenes parts (3/5).",
    explicacioIncorrectes: [
      "Incorrecta: no n’hi ha prou amb majoria simple.",
      "Incorrecta: no és majoria absoluta.",
      "Correcta.",
      "Incorrecta: el punt indica 3/5, no 2/3.",
    ],
  },
  {
    id: "T3B1P9-Q09",
    tipus: "LEGISLACIO",
    enunciat: "Quina sentència s’esmenta com a rellevant per eliminar el caràcter exclusiu de la supervisió del Síndic?",
    opcions: ["STC 31/2010", "STC 76/1983", "STC 1/1981", "STC 118/1996"],
    correcta: 0,
    explicacioCorrecta:
      "La STC 31/2010 va anul·lar l’incís que atribuïa al Síndic la supervisió de l’Administració catalana amb caràcter exclusiu.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: no és la que es destaca al text base.",
      "Incorrecta: no és la que es destaca al text base.",
      "Incorrecta: no és la que es destaca al text base.",
    ],
  },
  {
    id: "T3B1P9-Q10",
    tipus: "LEGISLACIO",
    enunciat: "Quina és la durada del mandat del Síndic de Greuges segons el text base?",
    opcions: ["4 anys", "6 anys", "8 anys", "9 anys"],
    correcta: 3,
    explicacioCorrecta:
      "El mandat del Síndic de Greuges és de nou anys, superior a una legislatura parlamentària.",
    explicacioIncorrectes: [
      "Incorrecta: 4 anys seria similar a legislatura, però el mandat és més llarg.",
      "Incorrecta: no és 6.",
      "Incorrecta: no és 8.",
      "Correcta.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CONCEPTE (10)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P9-Q11",
    tipus: "CONCEPTE",
    enunciat: "Quina és la naturalesa jurídica del Síndic de Greuges segons el punt?",
    opcions: [
      "Òrgan jurisdiccional integrat al poder judicial",
      "Institució de garantia no jurisdiccional i alt comissionat del Parlament",
      "Òrgan executiu dependent del Govern",
      "Autoritat sancionadora superior de l’Administració",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El Síndic és una institució de garantia no jurisdiccional i actua com a alt comissionat del Parlament per a la defensa dels drets i llibertats.",
    explicacioIncorrectes: [
      "Incorrecta: no forma part del poder judicial.",
      "Correcta.",
      "Incorrecta: no depèn del Govern.",
      "Incorrecta: no té potestat sancionadora.",
    ],
  },
  {
    id: "T3B1P9-Q12",
    tipus: "CONCEPTE",
    enunciat: "Quina és la missió primordial del Síndic de Greuges?",
    opcions: [
      "Dirigir la política interior i exterior de la Generalitat",
      "Protegir i defensar els drets fonamentals i les llibertats públiques",
      "Resoldre recursos administratius i revocar sancions",
      "Aprovar reglaments per desenvolupar lleis",
    ],
    correcta: 1,
    explicacioCorrecta:
      "La funció central del Síndic és la defensa dels drets i llibertats, mitjançant supervisió administrativa i recomanacions.",
    explicacioIncorrectes: [
      "Incorrecta: això correspon al Govern (direcció política).",
      "Correcta.",
      "Incorrecta: no resol recursos ni revoca sancions.",
      "Incorrecta: no té potestat reglamentària.",
    ],
  },
  {
    id: "T3B1P9-Q13",
    tipus: "CONCEPTE",
    enunciat: "Sobre quins àmbits pot exercir supervisió el Síndic segons el text base?",
    opcions: [
      "Només l’Administració de l’Estat a Catalunya",
      "L’Administració de la Generalitat, l’Administració local i empreses privades que gestionen serveis públics",
      "Només jutges i tribunals",
      "Només les universitats públiques i els col·legis professionals",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El punt inclou la Generalitat i organismes vinculats, l’Administració local i empreses privades que gestionen serveis públics o activitats d’interès general concertades/indirectes.",
    explicacioIncorrectes: [
      "Incorrecta: el Síndic no se centra només en administració estatal.",
      "Correcta.",
      "Incorrecta: l’activitat jurisdiccional queda exclosa.",
      "Incorrecta: no és l’enunciat del punt.",
    ],
  },
  {
    id: "T3B1P9-Q14",
    tipus: "CONCEPTE",
    enunciat: "Com pot iniciar actuacions el Síndic de Greuges?",
    opcions: [
      "Només per ordre del Parlament",
      "Només a instància de part (queixes), mai d’ofici",
      "D’ofici o a instància de part (queixes ciutadanes)",
      "Només a petició del Govern",
    ],
    correcta: 2,
    explicacioCorrecta:
      "El punt estableix que el Síndic pot actuar d’ofici (iniciativa pròpia) i a instància de part (queixes).",
    explicacioIncorrectes: [
      "Incorrecta: no necessita ordre del Parlament per iniciar sempre.",
      "Incorrecta: pot actuar també d’ofici.",
      "Correcta.",
      "Incorrecta: no depèn exclusivament del Govern.",
    ],
  },
  {
    id: "T3B1P9-Q15",
    tipus: "CONCEPTE",
    enunciat: "Quins instruments pot formular el Síndic després d’investigar una queixa?",
    opcions: [
      "Sentències i providències",
      "Ordres executives i sancions",
      "Advertiments, recomanacions, suggeriments i recordatoris de deures legals",
      "Decrets llei autonòmics",
    ],
    correcta: 2,
    explicacioCorrecta:
      "El Síndic actua per persuasió: emet recomanacions, suggeriments, advertiments i recordatoris, i pot proposar conciliacions.",
    explicacioIncorrectes: [
      "Incorrecta: no és òrgan jurisdiccional.",
      "Incorrecta: no pot donar ordres vinculants ni sancionar.",
      "Correcta.",
      "Incorrecta: no té potestat normativa amb rang de llei.",
    ],
  },
  {
    id: "T3B1P9-Q16",
    tipus: "CONCEPTE",
    enunciat: "Què implica que el Síndic sigui una 'magistratura de persuasió'?",
    opcions: [
      "Que pot imposar sancions si l’Administració no compleix",
      "Que pot obligar l’Administració a modificar actes",
      "Que influeix mitjançant recomanacions sense poder de comandament",
      "Que forma part del poder judicial i aplica coerció",
    ],
    correcta: 2,
    explicacioCorrecta:
      "La magistratura de persuasió significa que el Síndic no té poder d’imperium: proposa, recomana i persuadeix, però no imposa.",
    explicacioIncorrectes: [
      "Incorrecta: no sanciona.",
      "Incorrecta: no pot obligar a modificar actes.",
      "Correcta.",
      "Incorrecta: no és poder judicial.",
    ],
  },
  {
    id: "T3B1P9-Q17",
    tipus: "CONCEPTE",
    enunciat:
      "Si el Síndic detecta indicis de delicte o infraccions disciplinàries, què ha de fer segons el punt?",
    opcions: [
      "Imposar una sanció immediata",
      "Traslladar els fets al Ministeri Fiscal o a l’òrgan competent",
      "Anul·lar l’acte administratiu i iniciar diligències",
      "Arxivar-ho perquè és una institució no jurisdiccional",
    ],
    correcta: 1,
    explicacioCorrecta:
      "Com que no té potestat sancionadora, ha de traslladar la informació al Ministeri Fiscal o a l’òrgan competent quan detecta fets delictius o infraccions disciplinàries.",
    explicacioIncorrectes: [
      "Incorrecta: no pot sancionar.",
      "Correcta.",
      "Incorrecta: no pot anul·lar actes.",
      "Incorrecta: no és correcte arxivar per sistema; pot activar vies adequades traslladant-ho.",
    ],
  },
  {
    id: "T3B1P9-Q18",
    tipus: "CONCEPTE",
    enunciat: "Quin és un límit essencial de l’actuació del Síndic de Greuges?",
    opcions: [
      "Pot supervisar jutges i tribunals si hi ha queixa",
      "Pot intervenir en causes sub iúdice per protegir drets",
      "No pot intervenir en assumptes pendents de resolució judicial",
      "Pot anul·lar sentències quan vulneren drets",
    ],
    correcta: 2,
    explicacioCorrecta:
      "El Síndic no pot interferir en l’activitat jurisdiccional ni intervenir en assumptes pendents de resolució judicial.",
    explicacioIncorrectes: [
      "Incorrecta: està exclosa la supervisió de jutges i tribunals.",
      "Incorrecta: no pot intervenir en causes sub iúdice.",
      "Correcta.",
      "Incorrecta: no té cap potestat sobre sentències.",
    ],
  },
  {
    id: "T3B1P9-Q19",
    tipus: "CONCEPTE",
    enunciat:
      "Quina relació manté el Síndic amb el Consell de Garanties Estatutàries, segons el text base?",
    opcions: [
      "El CGE està subordinat al Síndic",
      "El Síndic pot sol·licitar dictàmens no vinculants del CGE sobre projectes que afectin drets",
      "El Síndic nomena els membres del CGE",
      "El CGE pot sancionar el Síndic si no compleix",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El Síndic està legitimat per sol·licitar dictàmens no vinculants al CGE sobre projectes de llei que afectin drets estatutaris.",
    explicacioIncorrectes: [
      "Incorrecta: no hi ha subordinació.",
      "Correcta.",
      "Incorrecta: no nomena membres del CGE.",
      "Incorrecta: el CGE no té potestat sancionadora sobre el Síndic.",
    ],
  },
  {
    id: "T3B1P9-Q20",
    tipus: "CONCEPTE",
    enunciat: "Quina relació manté el Síndic amb el Tribunal Constitucional (TC) segons el punt?",
    opcions: [
      "El Síndic és una secció del TC a Catalunya",
      "El Síndic pot acudir al TC mitjançant recurs d’empara o d’inconstitucionalitat",
      "El Síndic pot anul·lar normes autonòmiques sense passar pel TC",
      "El Síndic només pot acudir al TC si ho demana el Govern",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El text base atribueix al Síndic legitimació processal per interposar recurs d’inconstitucionalitat i recurs d’empara davant el TC en defensa dels drets.",
    explicacioIncorrectes: [
      "Incorrecta: no és part del TC.",
      "Correcta.",
      "Incorrecta: l’anul·lació normativa correspon al TC, no al Síndic.",
      "Incorrecta: no depèn d’una petició del Govern per acudir al TC.",
    ],
  },
];

export default punt9Ask;