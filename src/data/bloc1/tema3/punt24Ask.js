// punt24Ask.js
// Bloc I · Tema 3 · Punt 24 — El Defensor del Poble Europeu i altres òrgans consultius
// 20 preguntes tipus test (5 trampa, 5 legislació, 10 conceptes) amb explicació de correcta i incorrectes.

export const preguntes = [
  /* =====================================================
     PREGUNTES TRAMPA (1–5)
  ===================================================== */

  {
    id: 1,
    tipus: "trampa",
    pregunta: "Quina afirmació descriu millor la naturalesa del Defensor del Poble Europeu?",
    opcions: [
      "És un tribunal europeu amb potestat per anul·lar actes administratius de la UE",
      "És un òrgan consultiu que emet dictàmens vinculants en matèria socioeconòmica",
      "És una institució de garantia no jurisdiccional que vetlla per la bona administració i la transparència",
      "És una agència executiva que substitueix la Comissió en la gestió del pressupost"
    ],
    correcta: 2,
    explicacioCorrecta:
      "El Defensor del Poble Europeu és una institució de garantia no jurisdiccional: controla casos de mala administració i promou bona administració i transparència.",
    explicacioIncorrecta: {
      0: "No és un tribunal i no pot anul·lar decisions; actua com a magistratura de persuasió.",
      1: "Això descriu el CESE (dictàmens consultius), no el Defensor del Poble.",
      3: "No és una agència executiva ni gestiona el pressupost."
    }
  },

  {
    id: 2,
    tipus: "trampa",
    pregunta: "Quan el Defensor del Poble Europeu detecta mala administració, què pot fer?",
    opcions: [
      "Imposar sancions econòmiques automàtiques a la institució afectada",
      "Dictar una sentència obligatòria amb execució forçosa",
      "Formular recomanacions i intentar una solució amistosa",
      "Revocar directament l’acte administratiu impugnat"
    ],
    correcta: 2,
    explicacioCorrecta:
      "El Defensor del Poble no dicta sentències ni anul·la actes: pot investigar, buscar solucions amistoses i formular recomanacions i informes.",
    explicacioIncorrecta: {
      0: "No té potestat sancionadora automàtica.",
      1: "No és un òrgan jurisdiccional; no dicta sentències.",
      3: "No pot revocar actes administratius."
    }
  },

  {
    id: 3,
    tipus: "trampa",
    pregunta: "Quin és l’element que millor diferencia el dret de petició davant el Parlament Europeu de la queixa al Defensor del Poble?",
    opcions: [
      "El dret de petició només el poden exercir les empreses",
      "La queixa al Defensor del Poble es limita a la mala administració; la petició pot tractar qualsevol afer dins l’àmbit d’activitat de la UE",
      "La petició és sempre secreta i la queixa sempre pública",
      "La queixa al Defensor del Poble serveix per recórrer sentències del TJUE"
    ],
    correcta: 1,
    explicacioCorrecta:
      "El dret de petició és més ampli; el Defensor del Poble actua estrictament sobre mala administració de les institucions/òrgans/organismes de la UE.",
    explicacioIncorrecta: {
      0: "El dret de petició no és exclusiu d’empreses; s’associa a ciutadans i altres subjectes legitimats.",
      2: "Aquesta distinció no és la clau jurídica definida al text base.",
      3: "El Defensor del Poble no revisa sentències ni actua sobre el TJUE en funcions jurisdiccionals."
    }
  },

  {
    id: 4,
    tipus: "trampa",
    pregunta: "El Defensor del Poble Europeu pot investigar el Tribunal de Justícia de la UE (TJUE):",
    opcions: [
      "Sempre, perquè és una institució europea",
      "Només quan el TJUE actua en funcions jurisdiccionals",
      "No, quan el TJUE actua en funcions jurisdiccionals",
      "Només si ho ordena la Comissió Europea"
    ],
    correcta: 2,
    explicacioCorrecta:
      "El text base indica que el Defensor del Poble no pot investigar el TJUE quan actua en exercici de funcions jurisdiccionals, per preservar la independència judicial.",
    explicacioIncorrecta: {
      0: "No té competència general sobre el TJUE en funcions jurisdiccionals.",
      1: "És el contrari del que estableix el text base.",
      3: "La Comissió no ordena ni habilita aquesta investigació."
    }
  },

  {
    id: 5,
    tipus: "trampa",
    pregunta: "Quin òrgan és un exemple d’“òrgan consultiu” de la UE, i no pas el Defensor del Poble?",
    opcions: [
      "Comitè Econòmic i Social Europeu (CESE)",
      "Defensor del Poble Europeu",
      "Tribunal de Justícia de la UE",
      "Banc Central Europeu"
    ],
    correcta: 0,
    explicacioCorrecta:
      "El CESE és un òrgan consultiu que emet dictàmens. El Defensor del Poble és un òrgan de garantia de bona administració, no consultiu en el sentit clàssic.",
    explicacioIncorrecta: {
      1: "El Defensor del Poble no és un òrgan consultiu, sinó de control administratiu extern.",
      2: "El TJUE és un òrgan jurisdiccional.",
      3: "El BCE és una institució de política monetària, no un òrgan consultiu."
    }
  },

  /* =====================================================
     PREGUNTES LEGISLACIÓ (6–10)
  ===================================================== */

  {
    id: 6,
    tipus: "legislacio",
    pregunta: "Quin article del TFUE estableix el fonament principal del Defensor del Poble Europeu?",
    opcions: [
      "Art. 228 TFUE",
      "Arts. 300–304 TFUE",
      "Art. 309 TFUE",
      "Arts. 285–287 TFUE"
    ],
    correcta: 0,
    explicacioCorrecta:
      "El text base identifica l’article 228 TFUE com el precepte principal que regula el Defensor del Poble Europeu i la seva facultat de rebre queixes per mala administració.",
    explicacioIncorrecta: {
      1: "Aquests articles regulen els òrgans consultius CESE (i part del marc consultiu), no el Defensor del Poble.",
      2: "L’art. 309 TFUE regula la missió del BEI (préstecs i garanties).",
      3: "Aquests articles regulen el Tribunal de Comptes Europeu."
    }
  },

  {
    id: 7,
    tipus: "legislacio",
    pregunta: "La funció del Defensor del Poble Europeu es vincula especialment amb:",
    opcions: [
      "El principi de bona administració reconegut a la Carta dels Drets Fonamentals de la UE",
      "El principi de primacia del dret de la UE sobre el dret nacional",
      "El principi de lliure competència al mercat interior",
      "El principi d’independència del BCE"
    ],
    correcta: 0,
    explicacioCorrecta:
      "El text base connecta l’actuació del Defensor del Poble amb el principi de bona administració reconegut a la Carta dels Drets Fonamentals de la UE.",
    explicacioIncorrecta: {
      1: "La primacia és un principi general del dret de la UE, però no és el vincle específic del Defensor del Poble en el text base.",
      2: "La lliure competència no és l’eix del Defensor del Poble.",
      3: "Això és propi del BCE, no del Defensor del Poble."
    }
  },

  {
    id: 8,
    tipus: "legislacio",
    pregunta: "Qui elegeix el Defensor del Poble Europeu segons el text base?",
    opcions: [
      "El Consell de la Unió Europea",
      "La Comissió Europea",
      "El Parlament Europeu",
      "El Tribunal de Justícia de la UE"
    ],
    correcta: 2,
    explicacioCorrecta:
      "El Defensor del Poble Europeu és elegit pel Parlament Europeu després de cada elecció de la cambra.",
    explicacioIncorrecta: {
      0: "El Consell no és qui l’elegeix.",
      1: "La Comissió no l’elegeix.",
      3: "El TJUE no l’elegeix; només pot intervenir en un procediment de destitució en els termes indicats."
    }
  },

  {
    id: 9,
    tipus: "legislacio",
    pregunta: "La durada del mandat del Defensor del Poble Europeu coincideix amb:",
    opcions: [
      "El mandat del Consell Europeu (2,5 anys)",
      "La legislatura del Parlament Europeu (5 anys)",
      "El mandat del BCE (8 anys)",
      "Un mandat fix de 6 anys com el Tribunal de Comptes"
    ],
    correcta: 1,
    explicacioCorrecta:
      "El text base indica que el mandat coincideix amb la legislatura del Parlament Europeu: cinc anys, renovable.",
    explicacioIncorrecta: {
      0: "No és el mateix que la presidència del Consell Europeu.",
      2: "El mandat del BCE no és el criteri del Defensor del Poble.",
      3: "No és un mandat de 6 anys segons el text base."
    }
  },

  {
    id: 10,
    tipus: "legislacio",
    pregunta: "En quins supòsits pot intervenir el Tribunal de Justícia de la UE en relació amb el Defensor del Poble, segons el text base?",
    opcions: [
      "Per anul·lar recomanacions del Defensor del Poble",
      "Per destituir-lo a petició del Parlament si no reuneix condicions o ha comès falta greu",
      "Per elegir-lo directament després de les eleccions europees",
      "Per supervisar totes les investigacions ordinàries del Defensor del Poble"
    ],
    correcta: 1,
    explicacioCorrecta:
      "El text base indica que el TJUE pot intervenir en un eventual procediment de destitució a petició del Parlament Europeu, en casos de manca de condicions o falta greu.",
    explicacioIncorrecta: {
      0: "El TJUE no anul·la recomanacions com a objecte ordinari d’aquesta institució.",
      2: "No l’elegeix el TJUE, sinó el Parlament.",
      3: "El TJUE no supervisa de manera ordinària totes les investigacions."
    }
  },

  /* =====================================================
     PREGUNTES CONCEPTES (11–20)
  ===================================================== */

  {
    id: 11,
    tipus: "concepte",
    pregunta: "Què s’entén per “mala administració” segons el text base?",
    opcions: [
      "Qualsevol decisió política que no agradi al ciutadà",
      "Qualsevol infracció penal comesa per un funcionari europeu",
      "Actuacions administratives deficients com discriminació, abús de poder, manca d’informació o retards",
      "Qualsevol conflicte competencial entre la UE i els estats membres"
    ],
    correcta: 2,
    explicacioCorrecta:
      "El text base defineix mala administració com actuació administrativa deficient (irregularitats, discriminació, abús, falta d’informació, procediments injustos o retards).",
    explicacioIncorrecta: {
      0: "No es tracta de desacord polític, sinó de qualitat i regularitat administrativa.",
      1: "La mala administració no s’identifica necessàriament amb delicte penal.",
      3: "Els conflictes competencials no són l’objecte típic del Defensor del Poble."
    }
  },

  {
    id: 12,
    tipus: "concepte",
    pregunta: "Quin és el paper institucional del Defensor del Poble Europeu dins la UE?",
    opcions: [
      "Control administratiu extern i reforç de la legitimitat democràtica",
      "Control financer extern del pressupost",
      "Direcció de la política monetària",
      "Aprovació de lleis europees conjuntament amb el Consell"
    ],
    correcta: 0,
    explicacioCorrecta:
      "Actua com a mecanisme de control administratiu extern orientat a bona administració i transparència, reforçant la legitimitat democràtica.",
    explicacioIncorrecta: {
      1: "Això correspon al Tribunal de Comptes Europeu.",
      2: "Això correspon al BCE.",
      3: "La funció legislativa correspon al Parlament i al Consell."
    }
  },

  {
    id: 13,
    tipus: "concepte",
    pregunta: "Què significa que el Defensor del Poble actua com a “magistratura de persuasió”?",
    opcions: [
      "Que dicta sentències amb força executiva",
      "Que imposa multes per incompliment de recomanacions",
      "Que cerca solucions amistoses i formula recomanacions sense caràcter vinculant",
      "Que només actua si el Tribunal de Justícia li delega funcions"
    ],
    correcta: 2,
    explicacioCorrecta:
      "No resol com un tribunal; impulsa millores mitjançant recomanacions i solucions amistoses.",
    explicacioIncorrecta: {
      0: "No dicta sentències.",
      1: "No imposa multes.",
      3: "No actua per delegació del TJUE."
    }
  },

  {
    id: 14,
    tipus: "concepte",
    pregunta: "Quina d’aquestes és una atribució pròpia del Defensor del Poble Europeu?",
    opcions: [
      "Actuar d’ofici en investigacions quan detecta problemes sistèmics",
      "Aprovar el pressupost anual de la UE",
      "Fixar els tipus d’interès de l’euro",
      "Representar els governs regionals en dictàmens territorials"
    ],
    correcta: 0,
    explicacioCorrecta:
      "El text base indica que pot iniciar investigacions d’ofici quan detecta problemes sistèmics o casos greus.",
    explicacioIncorrecta: {
      1: "El pressupost correspon a les institucions pressupostàries, no al Defensor del Poble.",
      2: "Això és competència del BCE.",
      3: "Això correspon al Comitè de les Regions (CdR)."
    }
  },

  {
    id: 15,
    tipus: "concepte",
    pregunta: "Quin és el resultat típic d’una investigació del Defensor del Poble Europeu?",
    opcions: [
      "Una anul·lació automàtica de l’acte administratiu",
      "Una recomanació a la institució i, si escau, informe al Parlament",
      "Una sentència del TJUE dictada pel Defensor del Poble",
      "Una modificació immediata dels Tractats"
    ],
    correcta: 1,
    explicacioCorrecta:
      "El Defensor del Poble pot formular recomanacions i elevar informes anuals o especials al Parlament Europeu.",
    explicacioIncorrecta: {
      0: "No pot anul·lar actes.",
      2: "No dicta sentències ni és part del TJUE.",
      3: "No modifica els Tractats."
    }
  },

  {
    id: 16,
    tipus: "concepte",
    pregunta: "Qui pot presentar una queixa davant el Defensor del Poble Europeu segons el text base?",
    opcions: [
      "Només els estats membres",
      "Qualsevol ciutadà de la UE o persona que resideixi en un estat membre",
      "Només els diputats del Parlament Europeu",
      "Només les institucions europees"
    ],
    correcta: 1,
    explicacioCorrecta:
      "El text base estableix que qualsevol ciutadà de la UE o persona resident en un estat membre pot presentar una queixa.",
    explicacioIncorrecta: {
      0: "No és una via reservada als estats.",
      2: "No és exclusiva d’eurodiputats.",
      3: "No és un mecanisme intern només entre institucions."
    }
  },

  {
    id: 17,
    tipus: "concepte",
    pregunta: "Quin límit competencial destaca el text base en relació amb el Defensor del Poble Europeu?",
    opcions: [
      "No pot intervenir en afers de competència d’autoritats nacionals, autonòmiques o locals",
      "No pot investigar la Comissió Europea en cap cas",
      "No pot rebre queixes de ciutadans, només d’empreses",
      "No pot emetre informes al Parlament Europeu"
    ],
    correcta: 0,
    explicacioCorrecta:
      "El text base indica que no intervé en afers que siguin competència d’autoritats nacionals/autonòmiques/locals (aquests corresponen a defensors nacionals, p. ex. Síndic de Greuges).",
    explicacioIncorrecta: {
      1: "Sí que pot investigar institucions com la Comissió en casos de mala administració.",
      2: "Pot rebre queixes de ciutadans i també de persones físiques o jurídiques dins dels límits indicats.",
      3: "Pot elevar informes anuals o especials al Parlament."
    }
  },

  {
    id: 18,
    tipus: "concepte",
    pregunta: "Quina és la funció principal del Comitè Econòmic i Social Europeu (CESE) segons el text base?",
    opcions: [
      "Investigar mala administració a les institucions europees",
      "Representar la societat civil organitzada i emetre dictàmens consultius socioeconòmics",
      "Finançar inversions a llarg termini",
      "Vetllar pel principi de subsidiarietat territorial"
    ],
    correcta: 1,
    explicacioCorrecta:
      "El CESE representa la societat civil organitzada (empresaris, treballadors i altres grups) i emet dictàmens consultius.",
    explicacioIncorrecta: {
      0: "Això correspon al Defensor del Poble Europeu.",
      2: "Això correspon al BEI.",
      3: "Això s’associa especialment al CdR."
    }
  },

  {
    id: 19,
    tipus: "concepte",
    pregunta: "Quina és la funció principal del Comitè de les Regions (CdR) segons el text base?",
    opcions: [
      "Representar els ens regionals i locals i garantir que la veu territorial sigui escoltada",
      "Aprovar directives i reglaments",
      "Fiscalitzar els comptes de la UE",
      "Resoldre litigis administratius europeus"
    ],
    correcta: 0,
    explicacioCorrecta:
      "El CdR representa territoris i garanteix la dimensió territorial en el procés legislatiu europeu, amb especial relació amb la subsidiarietat.",
    explicacioIncorrecta: {
      1: "No té potestat legislativa.",
      2: "Això correspon al Tribunal de Comptes Europeu.",
      3: "Això correspon al TJUE, no al CdR."
    }
  },

  {
    id: 20,
    tipus: "concepte",
    pregunta: "Quina és la funció típica de les agències europees especialitzades segons el text base?",
    opcions: [
      "Dictar sentències sobre mala administració",
      "Realitzar tasques tècniques o científiques i donar suport a l’execució de polítiques de la UE",
      "Aprovar el pressupost de la UE",
      "Elegir el Defensor del Poble Europeu"
    ],
    correcta: 1,
    explicacioCorrecta:
      "Les agències especialitzades desenvolupen tasques tècniques/científiques i donen suport a institucions i estats per executar polítiques de la UE.",
    explicacioIncorrecta: {
      0: "No són òrgans jurisdiccionals.",
      2: "El pressupost és una funció de les institucions pressupostàries, no d’agències.",
      3: "El Defensor del Poble l’elegeix el Parlament Europeu."
    }
  }
];