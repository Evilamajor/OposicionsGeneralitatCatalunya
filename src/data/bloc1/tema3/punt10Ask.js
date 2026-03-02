// src/data/bloc1/tema3/ask/punt10Ask.js
// TEMA 3 – BLOC 1 – PUNT 10: La Sindicatura de Comptes
// 20 preguntes tipus test (5 TRAMPA, 5 LEGISLACIÓ, 10 CONCEPTE) amb explicació breu
// Nota: adapta el path/format segons l’estàndard del teu projecte.

export const punt10Ask = [
  // ─────────────────────────────────────────────────────────────────────────────
  // TRAMPA (5)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P10-Q01",
    tipus: "TRAMPA",
    enunciat: "Quina afirmació és correcta sobre la Sindicatura de Comptes?",
    opcions: [
      "És un òrgan jurisdiccional que dicta sentències sobre responsabilitat comptable",
      "És un òrgan de control extern que fiscalitza a posteriori i emet informes",
      "Depèn funcionalment del Govern i fa control intern preventiu",
      "Pot imposar multes directes per infraccions comptables",
    ],
    correcta: 1,
    explicacioCorrecta:
      "La Sindicatura és un òrgan independent de control extern que fiscalitza principalment a posteriori i concreta el resultat en informes d’auditoria.",
    explicacioIncorrectes: [
      "Incorrecta: la funció jurisdiccional sobre responsabilitat comptable correspon al Tribunal de Comptes.",
      "Correcta.",
      "Incorrecta: això descriu la Intervenció General (control intern, sovint preventiu).",
      "Incorrecta: no té potestat sancionadora directa; si cal, ho posa en coneixement de l’autoritat competent o del Ministeri Fiscal.",
    ],
  },
  {
    id: "T3B1P10-Q02",
    tipus: "TRAMPA",
    enunciat: "Pot la Sindicatura de Comptes declarar la nul·litat d’una despesa o expulsar una norma de l’ordenament?",
    opcions: [
      "Sí, perquè és l’òrgan fiscalitzador suprem de Catalunya",
      "Sí, si ho acorda el Parlament per majoria simple",
      "No: emet informes i recomanacions, però no anul·la actes ni normes",
      "Només si afecta l’administració local",
    ],
    correcta: 2,
    explicacioCorrecta:
      "La Sindicatura fa fiscalització externa i emet informes; no té potestat d’anul·lació normativa o administrativa.",
    explicacioIncorrectes: [
      "Incorrecta: el model suprem estatal és el Tribunal de Comptes; a Catalunya la Sindicatura fiscalitza però no anul·la.",
      "Incorrecta: el Parlament no pot convertir-la en òrgan anul·lador per majoria simple.",
      "Correcta.",
      "Incorrecta: el límit no depèn de si és administració local o Generalitat.",
    ],
  },
  {
    id: "T3B1P10-Q03",
    tipus: "TRAMPA",
    enunciat: "Qui té competència exclusiva per a l’enjudiciament de la responsabilitat comptable segons el punt?",
    opcions: [
      "La Sindicatura de Comptes",
      "El Parlament de Catalunya",
      "El Tribunal de Comptes",
      "La Intervenció General",
    ],
    correcta: 2,
    explicacioCorrecta:
      "El punt indica que la responsabilitat comptable (rescabalament per mal ús de fons públics) correspon exclusivament al Tribunal de Comptes.",
    explicacioIncorrectes: [
      "Incorrecta: la Sindicatura no té funció jurisdiccional.",
      "Incorrecta: el Parlament rep informes però no enjudicia responsabilitats comptables.",
      "Correcta.",
      "Incorrecta: la Intervenció és control intern, no jurisdicció comptable.",
    ],
  },
  {
    id: "T3B1P10-Q04",
    tipus: "TRAMPA",
    enunciat: "Quina és la diferència més precisa entre control intern i control extern en aquest punt?",
    opcions: [
      "Control intern: el fa el Parlament; control extern: el fa el Govern",
      "Control intern: Intervenció General (dins l’executiu); control extern: Sindicatura (independent, per delegació del Parlament)",
      "Control intern: Sindicatura (a posteriori); control extern: Intervenció (preventiu)",
      "No hi ha diferència: tots dos controls són externs",
    ],
    correcta: 1,
    explicacioCorrecta:
      "Control intern: Intervenció General, dins del Govern i principalment preventiu. Control extern: Sindicatura, independent de l’Administració fiscalitzada, i a posteriori.",
    explicacioIncorrectes: [
      "Incorrecta: és al revés; el control intern depèn del Govern i l’extern s’articula via Parlament/Sindicatura.",
      "Correcta.",
      "Incorrecta: has invertit els rols.",
      "Incorrecta: sí que hi ha una diferència clara.",
    ],
  },
  {
    id: "T3B1P10-Q05",
    tipus: "TRAMPA",
    enunciat: "La fiscalització de la Generalitat per la Sindicatura és exclusiva?",
    opcions: [
      "Sí, perquè és l’únic òrgan que pot fiscalitzar a Catalunya",
      "Sí, perquè l’Estat no pot fiscalitzar competències autonòmiques",
      "No: hi ha competència concurrent amb el Tribunal de Comptes estatal",
      "Només és exclusiva en matèria d’eficiència i eficàcia, però no en legalitat",
    ],
    correcta: 2,
    explicacioCorrecta:
      "El punt recull competència concurrent amb el Tribunal de Comptes estatal (arts. 136 i 153.d CE), de manera que cal coordinació.",
    explicacioIncorrectes: [
      "Incorrecta: el Tribunal de Comptes també té competències.",
      "Incorrecta: la CE preveu fiscalització estatal (p. ex. art. 153.d CE).",
      "Correcta.",
      "Incorrecta: la concurrència no es limita a un tipus de control com aquest.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LEGISLACIÓ (5)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P10-Q06",
    tipus: "LEGISLACIO",
    enunciat: "Quin article de la CE estableix el Tribunal de Comptes com a òrgan fiscalitzador suprem?",
    opcions: ["Article 136 CE", "Article 153.d CE", "Article 97 CE", "Article 54 CE"],
    correcta: 0,
    explicacioCorrecta:
      "L’article 136 CE defineix el Tribunal de Comptes com l’òrgan fiscalitzador suprem dels comptes i de la gestió econòmica de l’Estat i del sector públic.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: l’art. 153.d CE es relaciona amb el control econòmic i pressupostari de les CCAA per part del Tribunal de Comptes.",
      "Incorrecta: l’art. 97 CE regula les funcions del Govern.",
      "Incorrecta: l’art. 54 CE regula el Defensor del Poble.",
    ],
  },
  {
    id: "T3B1P10-Q07",
    tipus: "LEGISLACIO",
    enunciat: "A quins articles de l’EAC 2006 es regula la Sindicatura de Comptes segons el text base?",
    opcions: ["Arts. 80–81 EAC", "Arts. 76–79 EAC", "Arts. 78–79 EAC", "Arts. 68–71 EAC"],
    correcta: 0,
    explicacioCorrecta:
      "El text base indica que la Sindicatura es regula als articles 80 i 81 de l’EAC de 2006.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: 76–79 EAC corresponen al Consell de Garanties Estatutàries.",
      "Incorrecta: 78–79 EAC corresponen al Síndic de Greuges.",
      "Incorrecta: 68–71 EAC s’associen al Govern/Administració en altres punts.",
    ],
  },
  {
    id: "T3B1P10-Q08",
    tipus: "LEGISLACIO",
    enunciat: "Quina llei s’esmenta com a llei de desenvolupament bàsic de l’EAC per a la Sindicatura?",
    opcions: ["Llei 18/2010", "Llei 2/2009", "Llei 13/2008", "Llei 39/2015"],
    correcta: 0,
    explicacioCorrecta:
      "El text base esmenta la Llei 18/2010 com a llei de desenvolupament bàsic de l’Estatut en matèria de Sindicatura de Comptes.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: la Llei 2/2009 s’esmenta al punt del CGE.",
      "Incorrecta: no és la llei citada al punt 10.",
      "Incorrecta: és procediment administratiu comú, no desenvolupament estatutari d’aquesta institució.",
    ],
  },
  {
    id: "T3B1P10-Q09",
    tipus: "LEGISLACIO",
    enunciat: "Quina majoria requereix el Parlament per designar els síndics?",
    opcions: ["Majoría simple", "Majoría absoluta", "Tres cinquenes parts (3/5)", "Dues terceres parts (2/3)"],
    correcta: 2,
    explicacioCorrecta:
      "El punt indica que els síndics són designats pel Ple del Parlament per una majoria reforçada de 3/5.",
    explicacioIncorrectes: [
      "Incorrecta: no és suficient.",
      "Incorrecta: tampoc n’hi ha prou amb majoria absoluta.",
      "Correcta.",
      "Incorrecta: el punt indica 3/5, no 2/3.",
    ],
  },
  {
    id: "T3B1P10-Q10",
    tipus: "LEGISLACIO",
    enunciat: "Quin precepte constitucional s’esmenta com a base del control econòmic i pressupostari de les CCAA?",
    opcions: ["Article 153.d CE", "Article 136 CE", "Article 9.3 CE", "Article 103 CE"],
    correcta: 0,
    explicacioCorrecta:
      "El text base vincula la competència concurrent del Tribunal de Comptes amb els arts. 136 i 153.d CE; l’art. 153.d CE es refereix al control econòmic i pressupostari.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: 136 CE crea el Tribunal de Comptes com a fiscalitzador suprem.",
      "Incorrecta: 9.3 CE recull principis (legalitat, jerarquia...).",
      "Incorrecta: 103 CE regula principis de l’Administració pública.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CONCEPTE (10)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P10-Q11",
    tipus: "CONCEPTE",
    enunciat: "Quina és la missió principal de la Sindicatura de Comptes segons el punt?",
    opcions: [
      "Fiscalització externa a posteriori de l’activitat economicofinancera del sector públic de Catalunya",
      "Fiscalització interna i preventiva de la despesa de la Generalitat",
      "Enjudiciament de la responsabilitat comptable amb sentències",
      "Aprovació del pressupost de la Generalitat",
    ],
    correcta: 0,
    explicacioCorrecta:
      "És l’òrgan de control extern que fiscalitza principalment a posteriori l’activitat economicofinancera i comptable del sector públic català.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: això correspon a la Intervenció (control intern).",
      "Incorrecta: l’enjudiciament és del Tribunal de Comptes.",
      "Incorrecta: el pressupost l’aprova el Parlament mitjançant llei.",
    ],
  },
  {
    id: "T3B1P10-Q12",
    tipus: "CONCEPTE",
    enunciat: "Quina triple valoració incorpora la fiscalització de la Sindicatura (a més de la legalitat)?",
    opcions: [
      "Economia, eficàcia i eficiència",
      "Oportunitat política, conveniència i urgència",
      "Jerarquia normativa, reserva de llei i publicitat",
      "Constitucionalitat, estatutarietat i interpretació autèntica",
    ],
    correcta: 0,
    explicacioCorrecta:
      "El punt indica que el control no es limita a regularitat comptable: també avalua economia, eficàcia i eficiència mitjançant auditories.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: no és un control d’oportunitat política.",
      "Incorrecta: són principis generals del dret, no l’objecte principal de fiscalització econòmica.",
      "Incorrecta: això s’associa al control del CGE/TC, no a la fiscalització comptable.",
    ],
  },
  {
    id: "T3B1P10-Q13",
    tipus: "CONCEPTE",
    enunciat: "Quin és un producte destacat de la fiscalització de la Sindicatura segons el punt?",
    opcions: [
      "Informe anual sobre el Compte general de la Generalitat",
      "Sentència anual sobre responsabilitat comptable",
      "Decret anual de tancament pressupostari",
      "Resolució vinculant sobre contractació pública",
    ],
    correcta: 0,
    explicacioCorrecta:
      "El punt destaca l’Informe anual sobre el Compte general de la Generalitat com a resultat rellevant de la seva activitat.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: la Sindicatura no dicta sentències.",
      "Incorrecta: el tancament pressupostari és una actuació de gestió interna.",
      "Incorrecta: els informes no són resolucions vinculants.",
    ],
  },
  {
    id: "T3B1P10-Q14",
    tipus: "CONCEPTE",
    enunciat: "Què pot fer la Sindicatura si detecta fets delictius o irregularitats perseguibles?",
    opcions: [
      "Imposar multes directament",
      "Iniciar un procediment penal i dictar mesures cautelars",
      "Posar-ho en coneixement de l’autoritat competent o del Ministeri Fiscal",
      "Arxivar-ho perquè no té competència",
    ],
    correcta: 2,
    explicacioCorrecta:
      "Com que no té potestat sancionadora ni jurisdiccional, ha de comunicar els fets a l’autoritat competent o al Ministeri Fiscal.",
    explicacioIncorrectes: [
      "Incorrecta: no pot sancionar.",
      "Incorrecta: no és òrgan penal ni jurisdiccional.",
      "Correcta.",
      "Incorrecta: no és correcte arxivar automàticament; pot actuar comunicant-ho.",
    ],
  },
  {
    id: "T3B1P10-Q15",
    tipus: "CONCEPTE",
    enunciat:
      "Quan pot participar la Sindicatura en procediments de responsabilitat comptable segons el text base?",
    opcions: [
      "Sempre, perquè té jurisdicció pròpia",
      "Mai, perquè està totalment prohibida qualsevol participació",
      "Només si el Tribunal de Comptes li delega actuacions instructores/preparatòries mitjançant conveni",
      "Només si el Parlament li ho ordena per resolució",
    ],
    correcta: 2,
    explicacioCorrecta:
      "El punt indica que el Tribunal de Comptes és l’únic competent; la Sindicatura només pot fer actuacions instructores o preparatòries si hi ha delegació mitjançant conveni.",
    explicacioIncorrectes: [
      "Incorrecta: no té jurisdicció.",
      "Incorrecta: pot participar si hi ha delegació del TCo.",
      "Correcta.",
      "Incorrecta: no depèn d’una ordre parlamentària per substituir la competència del TCo.",
    ],
  },
  {
    id: "T3B1P10-Q16",
    tipus: "CONCEPTE",
    enunciat: "Quins ens formen part, segons el punt, de l’àmbit de control de la Sindicatura?",
    opcions: [
      "Només la Generalitat i els seus departaments",
      "Només l’administració local catalana",
      "Generalitat, administració local, universitats públiques i entitats/empreses del sector públic",
      "Només empreses privades sense finançament públic",
    ],
    correcta: 2,
    explicacioCorrecta:
      "L’àmbit és ampli: inclou Generalitat, ens locals, universitats públiques i altres entitats del sector públic o finançades majoritàriament amb fons públics.",
    explicacioIncorrectes: [
      "Incorrecta: és més ampli que els departaments de la Generalitat.",
      "Incorrecta: també inclou Generalitat i altres ens.",
      "Correcta.",
      "Incorrecta: l’abast es connecta amb finançament públic/serveis públics, no privats purs.",
    ],
  },
  {
    id: "T3B1P10-Q17",
    tipus: "CONCEPTE",
    enunciat: "Com es renova la Sindicatura segons el punt (mandat i renovació)?",
    opcions: [
      "Mandat de 4 anys; renovació total cada legislatura",
      "Mandat de 6 anys; renovació per meitats cada 3 anys",
      "Mandat de 9 anys; renovació total cada 9 anys",
      "Mandat de 3 anys; renovació anual",
    ],
    correcta: 1,
    explicacioCorrecta:
      "Els síndics són nomenats per 6 anys i la institució es renova per meitats cada 3 anys.",
    explicacioIncorrectes: [
      "Incorrecta: no és 4 anys ni renovació per legislatura.",
      "Correcta.",
      "Incorrecta: el mandat de 9 anys és del Síndic de Greuges, no de la Sindicatura de Comptes.",
      "Incorrecta: no és un mandat anual ni de 3 anys per als síndics.",
    ],
  },
  {
    id: "T3B1P10-Q18",
    tipus: "CONCEPTE",
    enunciat: "Qui elegeix el Síndic Major i per quant temps, segons el punt?",
    opcions: [
      "El Govern, per 4 anys",
      "El Parlament, per 6 anys",
      "Els mateixos síndics d’entre ells, per 3 anys",
      "El Tribunal de Comptes, per 3 anys",
    ],
    correcta: 2,
    explicacioCorrecta:
      "El Síndic Major és elegit pels mateixos síndics d’entre ells per un període de tres anys.",
    explicacioIncorrectes: [
      "Incorrecta: no el designa el Govern.",
      "Incorrecta: el Parlament designa els síndics, però el Síndic Major l’elegeixen els síndics.",
      "Correcta.",
      "Incorrecta: el Tribunal de Comptes no elegeix el Síndic Major.",
    ],
  },
  {
    id: "T3B1P10-Q19",
    tipus: "CONCEPTE",
    enunciat: "Quina relació orgànica manté la Sindicatura amb el Parlament de Catalunya?",
    opcions: [
      "Depèn orgànicament del Govern",
      "Depèn orgànicament del Parlament i actua per delegació d’aquest",
      "És una direcció general del Departament d’Economia",
      "És un òrgan consultiu del TC",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El punt assenyala que depèn orgànicament del Parlament i li envia informes per al debat, i que el Parlament controla el seu pressupost.",
    explicacioIncorrectes: [
      "Incorrecta: és independent del Govern.",
      "Correcta.",
      "Incorrecta: no és una direcció general.",
      "Incorrecta: no depèn del TC.",
    ],
  },
  {
    id: "T3B1P10-Q20",
    tipus: "CONCEPTE",
    enunciat: "Quina diferència essencial hi ha entre Intervenció General i Sindicatura de Comptes?",
    opcions: [
      "La Intervenció fa control extern; la Sindicatura fa control intern",
      "La Intervenció és control intern (executiu) i sovint previ; la Sindicatura és control extern, independent i a posteriori",
      "La Sindicatura és control previ i la Intervenció, a posteriori",
      "No hi ha diferències, només canvia el nom",
    ],
    correcta: 1,
    explicacioCorrecta:
      "La Intervenció General és un òrgan intern del Govern amb fiscalització prèvia de la despesa; la Sindicatura és un òrgan extern, vinculat al Parlament i independent, amb control principalment a posteriori.",
    explicacioIncorrectes: [
      "Incorrecta: has invertit els conceptes.",
      "Correcta.",
      "Incorrecta: també estan invertits.",
      "Incorrecta: hi ha diferències de naturalesa, dependència i moment del control.",
    ],
  },
];

export default punt10Ask;