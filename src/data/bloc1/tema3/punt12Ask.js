// src/data/bloc1/tema3/ask/punt12Ask.js
// TEMA 3 – BLOC 1 – PUNT 12: El Consell de Governs Locals
// 20 preguntes tipus test (5 TRAMPA, 5 LEGISLACIÓ, 10 CONCEPTE) amb explicació breu
// Nota: adapta el path/format segons l’estàndard del teu projecte.

export const punt12Ask = [
  // ─────────────────────────────────────────────────────────────────────────────
  // TRAMPA (5)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P12-Q01",
    tipus: "TRAMPA",
    enunciat: "Quina afirmació descriu correctament el Consell de Governs Locals?",
    opcions: [
      "És una associació privada i voluntària com l’ACM o la FMC",
      "És una institució estatutària de la Generalitat que representa municipis i vegueries",
      "És un òrgan del Govern que dirigeix els ajuntaments",
      "És un tribunal que anul·la normes que vulneren l’autonomia local",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El Consell de Governs Locals és una institució pública de rellevància estatutària (art. 85 EAC) que representa municipis i vegueries en les institucions de l’autogovern.",
    explicacioIncorrectes: [
      "Incorrecta: ACM/FMC són associacions privades i voluntàries; el Consell és una institució pública necessària.",
      "Correcta.",
      "Incorrecta: no dirigeix ajuntaments ni és un òrgan executiu de comandament.",
      "Incorrecta: no és un òrgan jurisdiccional ni anul·la normes; pot sol·licitar dictàmens al CGE.",
    ],
  },
  {
    id: "T3B1P12-Q02",
    tipus: "TRAMPA",
    enunciat: "Els informes del Consell de Governs Locals són vinculants per al Parlament?",
    opcions: [
      "Sí, perquè el tràmit és preceptiu",
      "Sí, si afecten l’autonomia local",
      "No: són no vinculants, tot i que el tràmit és preceptiu",
      "Només són vinculants en matèria pressupostària",
    ],
    correcta: 2,
    explicacioCorrecta:
      "El tràmit és preceptiu (s’ha de demanar), però els informes són no vinculants: el Parlament o el Govern no estan obligats a seguir-los.",
    explicacioIncorrectes: [
      "Incorrecta: preceptiu no equival a vinculant.",
      "Incorrecta: el punt diu expressament que són no vinculants.",
      "Correcta.",
      "Incorrecta: no s’estableix aquesta vinculació pressupostària.",
    ],
  },
  {
    id: "T3B1P12-Q03",
    tipus: "TRAMPA",
    enunciat: "El Consell de Governs Locals té potestat sancionadora o normativa pròpia?",
    opcions: [
      "Sí, pot sancionar ajuntaments que incompleixin plans de la Generalitat",
      "Sí, pot dictar reglaments locals vinculants",
      "No: no té potestat sancionadora ni potestat normativa; actua per representació i persuasió",
      "Només pot sancionar en període electoral",
    ],
    correcta: 2,
    explicacioCorrecta:
      "El punt defineix el Consell com a institució de representació: informes no vinculants, sense potestat sancionadora ni potestat normativa pròpia.",
    explicacioIncorrectes: [
      "Incorrecta: no pot sancionar.",
      "Incorrecta: no dicta reglaments propis vinculants.",
      "Correcta.",
      "Incorrecta: no existeix aquesta excepció.",
    ],
  },
  {
    id: "T3B1P12-Q04",
    tipus: "TRAMPA",
    enunciat: "Quina és la diferència clau entre el Consell de Governs Locals i l’ACM/FMC?",
    opcions: [
      "No hi ha diferències; tots són òrgans estatutaris",
      "El Consell és privat i l’ACM/FMC són públiques",
      "El Consell és una institució pública estatutària necessària; l’ACM/FMC són associacions privades i voluntàries",
      "El Consell depèn del Govern i l’ACM/FMC depenen del Parlament",
    ],
    correcta: 2,
    explicacioCorrecta:
      "El Consell és òrgan públic estatutari; l’ACM/FMC són entitats de caràcter privat i adhesió voluntària.",
    explicacioIncorrectes: [
      "Incorrecta: sí que hi ha diferència de naturalesa i base jurídica.",
      "Incorrecta: és al revés.",
      "Correcta.",
      "Incorrecta: el punt no estableix aquestes dependències i, en tot cas, el Consell no és un departament del Govern.",
    ],
  },
  {
    id: "T3B1P12-Q05",
    tipus: "TRAMPA",
    enunciat: "Quina afirmació és correcta sobre la relació del Consell amb el CGE?",
    opcions: [
      "El Consell substitueix el CGE en el control de constitucionalitat",
      "El Consell pot sol·licitar dictàmens al CGE en defensa de l’autonomia local",
      "El CGE nomena els membres del Consell de Governs Locals",
      "El Consell pot anul·lar lleis mitjançant dictamen propi",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El Consell està legitimat per sol·licitar dictamen al CGE sobre l’adequació a l’autonomia local de projectes/proposicions de llei i projectes de decret legislatiu.",
    explicacioIncorrectes: [
      "Incorrecta: el Consell no exerceix control de constitucionalitat.",
      "Correcta.",
      "Incorrecta: el CGE no nomena el Consell.",
      "Incorrecta: el Consell no anul·la normes.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LEGISLACIÓ (5)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P12-Q06",
    tipus: "LEGISLACIO",
    enunciat: "Quin article de l’EAC crea formalment el Consell de Governs Locals segons el text base?",
    opcions: ["Article 85 EAC", "Article 82 EAC", "Article 80 EAC", "Article 78 EAC"],
    correcta: 0,
    explicacioCorrecta:
      "El text base indica que l’article 85 EAC crea el Consell de Governs Locals com a òrgan de representació de municipis i vegueries.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: 82 EAC correspon al CAC.",
      "Incorrecta: 80–81 EAC s’associen a la Sindicatura de Comptes.",
      "Incorrecta: 78–79 EAC s’associen al Síndic de Greuges.",
    ],
  },
  {
    id: "T3B1P12-Q07",
    tipus: "LEGISLACIO",
    enunciat: "Quins articles de la CE es citen com a fonament indirecte (autonomia local i municipal) al text base?",
    opcions: ["Arts. 137 i 140 CE", "Arts. 20 i 54 CE", "Arts. 136 i 153.d CE", "Arts. 97 i 103 CE"],
    correcta: 0,
    explicacioCorrecta:
      "El punt vincula el Consell amb el reconeixement constitucional de l’autonomia local (art. 137 CE) i municipal (art. 140 CE).",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: 20 i 54 CE corresponen a drets comunicatius/Defensor del Poble.",
      "Incorrecta: 136 i 153.d CE són del Tribunal de Comptes/control econòmic.",
      "Incorrecta: 97 i 103 CE són Govern/Administració.",
    ],
  },
  {
    id: "T3B1P12-Q08",
    tipus: "LEGISLACIO",
    enunciat: "Quina llei regula detalladament l’estructura del Consell de Governs Locals segons el text base?",
    opcions: ["Llei 12/2010", "Llei 18/2010", "Llei 2/2012", "Llei 2/2009"],
    correcta: 0,
    explicacioCorrecta:
      "El text base assenyala la Llei 12/2010 com a regulació detallada del Consell de Governs Locals.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: la Llei 18/2010 s’esmenta a la Sindicatura de Comptes.",
      "Incorrecta: la Llei 2/2012 s’esmenta en relació amb la composició del CAC.",
      "Incorrecta: la Llei 2/2009 s’associa al Consell de Garanties Estatutàries.",
    ],
  },
  {
    id: "T3B1P12-Q09",
    tipus: "LEGISLACIO",
    enunciat: "Segons el text base, quants membres integra el Consell de Governs Locals?",
    opcions: ["50", "75", "100", "135"],
    correcta: 2,
    explicacioCorrecta:
      "El punt indica que el Consell està integrat per 100 membres (segons la Llei 12/2010).",
    explicacioIncorrectes: [
      "Incorrecta: no és 50.",
      "Incorrecta: no és 75.",
      "Correcta.",
      "Incorrecta: 135 és el nombre de diputats del Parlament, no membres del Consell.",
    ],
  },
  {
    id: "T3B1P12-Q10",
    tipus: "LEGISLACIO",
    enunciat: "Quin article de l’EAC s’esmenta sobre integració dels ens locals en el sistema institucional de la Generalitat?",
    opcions: ["Article 2.3 EAC", "Article 3 EAC", "Article 85 EAC", "Article 146 EAC"],
    correcta: 0,
    explicacioCorrecta:
      "En les idees clau s’indica que, segons l’art. 2.3 EAC, municipis, vegueries i comarques integren el sistema institucional de la Generalitat, sense perjudici de l’autonomia.",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: l’art. 3 EAC s’esmenta per lleialtat institucional, però no és la referència d’integració.",
      "Incorrecta: l’art. 85 EAC crea el Consell.",
      "Incorrecta: 146 EAC s’associa a competències audiovisuals en un altre punt.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CONCEPTE (10)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "T3B1P12-Q11",
    tipus: "CONCEPTE",
    enunciat: "Quina és la missió essencial del Consell de Governs Locals segons el punt?",
    opcions: [
      "Fiscalitzar la gestió econòmica dels ajuntaments",
      "Garantir que la veu dels governs locals sigui escoltada en decisions de la Generalitat d’incidència local",
      "Anul·lar reglaments autonòmics que afectin el món local",
      "Substituir el Parlament en la tramitació de lleis locals",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El punt subratlla la funció de representació institucional: assegurar la participació i escolta del món local en normes/decisions d’incidència local.",
    explicacioIncorrectes: [
      "Incorrecta: fiscalització econòmica és funció de la Sindicatura de Comptes.",
      "Correcta.",
      "Incorrecta: no és òrgan jurisdiccional ni anul·lador.",
      "Incorrecta: la potestat legislativa correspon al Parlament.",
    ],
  },
  {
    id: "T3B1P12-Q12",
    tipus: "CONCEPTE",
    enunciat: "Què significa que el tràmit d’audiència al Consell sigui 'preceptiu'?",
    opcions: [
      "Que el Consell decideix definitivament el contingut de la norma",
      "Que és obligatori demanar el seu parer quan la iniciativa afecta específicament el món local",
      "Que només s’activa si el Consell ho demana d’ofici",
      "Que el Govern està obligat a acceptar l’informe",
    ],
    correcta: 1,
    explicacioCorrecta:
      "Preceptiu significa obligatori en el procediment (s’ha de demanar l’informe o escoltar-lo), però no implica que sigui vinculant.",
    explicacioIncorrectes: [
      "Incorrecta: no decideix definitivament.",
      "Correcta.",
      "Incorrecta: el punt no el configura com actuació d’ofici; és una audiència en tramitació normativa.",
      "Incorrecta: no és vinculant.",
    ],
  },
  {
    id: "T3B1P12-Q13",
    tipus: "CONCEPTE",
    enunciat: "En quins processos pot ser escoltat el Consell, segons el punt?",
    opcions: [
      "Només en pressupostos anuals de la Generalitat",
      "En iniciatives legislatives i també en plans i normes reglamentàries d’incidència local",
      "Només en decrets llei",
      "Només en mocions parlamentàries",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El text base indica audiència preceptiva en tramitació de lleis d’afectació local i també en plans i reglaments d’incidència equivalent.",
    explicacioIncorrectes: [
      "Incorrecta: no es limita a pressupostos.",
      "Correcta.",
      "Incorrecta: no es redueix a decrets llei.",
      "Incorrecta: l’àmbit és normatiu d’incidència local, no només mocions.",
    ],
  },
  {
    id: "T3B1P12-Q14",
    tipus: "CONCEPTE",
    enunciat: "Quin és el rol del Consell respecte a l’autonomia local?",
    opcions: [
      "La defensa jurisdiccional directa davant tribunals ordinaris",
      "Vetllar i activar garanties institucionals, inclosa la sol·licitud de dictamen al CGE",
      "Imposar sancions a la Generalitat si vulnera l’autonomia local",
      "Aprovar reglaments locals obligatoris per als municipis",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El punt destaca la defensa institucional de l’autonomia local i la possibilitat de sol·licitar dictàmens al CGE sobre adequació a l’autonomia local.",
    explicacioIncorrectes: [
      "Incorrecta: el mecanisme destacat és institucional (CGE), no jurisdiccional directa ordinària.",
      "Correcta.",
      "Incorrecta: no té potestat sancionadora.",
      "Incorrecta: no té potestat normativa pròpia.",
    ],
  },
  {
    id: "T3B1P12-Q15",
    tipus: "CONCEPTE",
    enunciat: "Quina relació manté el Consell amb el CGE en matèria de composició?",
    opcions: [
      "Designa directament un membre del CGE",
      "Proposa una terna perquè el Govern nomeni un dels membres del CGE que li correspon designar",
      "Nomena tots els membres del CGE a proposta del Parlament",
      "No té cap relació amb el CGE",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El Consell proposa una terna de candidats perquè el Govern designi un dels tres membres del CGE que li pertoca nomenar.",
    explicacioIncorrectes: [
      "Incorrecta: no designa directament; proposa terna.",
      "Correcta.",
      "Incorrecta: no nomena tots els membres.",
      "Incorrecta: sí que té relació segons el punt.",
    ],
  },
  {
    id: "T3B1P12-Q16",
    tipus: "CONCEPTE",
    enunciat: "Quina idea resumeix millor el paper del Consell dins el sistema multinivell?",
    opcions: [
      "És el nexe d’unió entre nivell local i autonòmic, reforçant coordinació i lleialtat institucional",
      "És un òrgan executiu que dirigeix els ens locals",
      "És un òrgan de fiscalització econòmica dels municipis",
      "És una associació de municipis de subscripció voluntària",
    ],
    correcta: 0,
    explicacioCorrecta:
      "El punt indica que actua com a nexe d’unió, garantint coordinació i lleialtat institucional recíproca (art. 3 EAC).",
    explicacioIncorrectes: [
      "Correcta.",
      "Incorrecta: no és executiu de comandament.",
      "Incorrecta: això és propi de la Sindicatura de Comptes.",
      "Incorrecta: això descriu ACM/FMC.",
    ],
  },
  {
    id: "T3B1P12-Q17",
    tipus: "CONCEPTE",
    enunciat: "Quin element reforça la representativitat del Consell segons el punt?",
    opcions: [
      "Que només hi participen regidors d’un sol partit",
      "Que la seva estructura reflecteix pluralitat política i territorial",
      "Que depèn jeràrquicament del Govern",
      "Que emet sentències vinculants",
    ],
    correcta: 1,
    explicacioCorrecta:
      "La composició i el sistema de membres nats/designats volen reflectir pluralitat política i territorial del món local català.",
    explicacioIncorrectes: [
      "Incorrecta: això aniria contra el principi de pluralisme.",
      "Correcta.",
      "Incorrecta: no depèn del Govern en aquest sentit.",
      "Incorrecta: no és jurisdiccional.",
    ],
  },
  {
    id: "T3B1P12-Q18",
    tipus: "CONCEPTE",
    enunciat: "Quina diferència essencial hi ha entre Consell de Governs Locals i Síndic de Greuges?",
    opcions: [
      "Tots dos supervisen l’Administració per defensar drets individuals",
      "El Síndic defensa drets dels ciutadans; el Consell representa interessos institucionals dels ens locals",
      "El Consell anul·la actes; el Síndic sanciona",
      "El Síndic és associació privada; el Consell és un tribunal",
    ],
    correcta: 1,
    explicacioCorrecta:
      "El Síndic protegeix drets i supervisa l’Administració; el Consell actua com a representació institucional dels ens locals.",
    explicacioIncorrectes: [
      "Incorrecta: el Consell no és defensor de drets individuals com el Síndic.",
      "Correcta.",
      "Incorrecta: cap dels dos anul·la/sanciona d’aquesta manera (el Síndic no sanciona i el Consell no anul·la).",
      "Incorrecta: és al revés i cap és tribunal.",
    ],
  },
  {
    id: "T3B1P12-Q19",
    tipus: "CONCEPTE",
    enunciat: "Quina diferència clau hi ha entre Consell de Governs Locals i Sindicatura de Comptes?",
    opcions: [
      "El Consell fiscalitza econòmicament; la Sindicatura representa políticament",
      "La Sindicatura fiscalitza econòmicament; el Consell representa institucionalment els ens locals",
      "Tots dos són òrgans jurisdiccionals",
      "Tots dos imposen sancions directes",
    ],
    correcta: 1,
    explicacioCorrecta:
      "La Sindicatura és control extern econòmic del sector públic; el Consell no audita, sinó que representa i participa en processos normatius d’incidència local.",
    explicacioIncorrectes: [
      "Incorrecta: està invertit.",
      "Correcta.",
      "Incorrecta: cap dels dos és jurisdiccional.",
      "Incorrecta: cap dels dos té potestat sancionadora directa en aquest punt.",
    ],
  },
  {
    id: "T3B1P12-Q20",
    tipus: "CONCEPTE",
    enunciat: "Quin és un error típic d’opositor segons el punt?",
    opcions: [
      "Creure que el Consell és una institució estatutària",
      "Confondre el Consell amb ACM/FMC i pensar que és una associació voluntària",
      "Entendre que el tràmit és preceptiu",
      "Saber que la potestat legislativa correspon al Parlament",
    ],
    correcta: 1,
    explicacioCorrecta:
      "Un error típic és confondre’l amb una associació municipalista: el Consell és institució estatutària obligatòria i pública.",
    explicacioIncorrectes: [
      "Incorrecta: això és correcte, no un error.",
      "Correcta.",
      "Incorrecta: això és correcte; preceptiu no és error.",
      "Incorrecta: això és correcte i ajuda a evitar confusions.",
    ],
  },
];

export default punt12Ask;