// punt21Ask.js
// Bloc I · Tema 3 · Punt 21 — El Comitè Econòmic i Social Europeu (CESE)
// 20 preguntes tipus test (5 trampa, 5 legislació, 10 conceptes) amb explicació de correcta i incorrectes.

export const preguntes = [
  /* =====================================================
     PREGUNTES TRAMPA (1–5)
  ===================================================== */

  {
    id: 1,
    tipus: "trampa",
    pregunta: "Quina afirmació descriu millor la naturalesa del Comitè Econòmic i Social Europeu (CESE)?",
    opcions: [
      "És una institució de ple dret de la UE amb potestat legislativa",
      "És un òrgan consultiu que representa la societat civil organitzada mitjançant dictàmens",
      "És un òrgan jurisdiccional que resol litigis socioeconòmics",
      "És un organisme dependent de la Comissió Europea amb funcions executives"
    ],
    correcta: 1,
    explicacioCorrecta:
      "El CESE és un òrgan consultiu de la UE que representa interessos socioeconòmics de la societat civil organitzada i participa mitjançant dictàmens.",
    explicacioIncorrecta: {
      0: "El CESE no és institució de ple dret ni té potestat legislativa.",
      2: "No és un tribunal: no resol litigis ni dicta sentències.",
      3: "No és un òrgan executiu dependent de la Comissió; és consultiu i autònom en el seu funcionament."
    }
  },

  {
    id: 2,
    tipus: "trampa",
    pregunta: "Si una institució de la UE no consulta el CESE en un supòsit en què la consulta és preceptiva, quin efecte pot tenir?",
    opcions: [
      "Cap, perquè els dictàmens del CESE són sempre irrellevants jurídicament",
      "Pot constituir un vici de procediment en la formació del dret derivat de la UE",
      "Anul·la automàticament qualsevol norma europea adoptada",
      "Només genera responsabilitat política, però mai incidència procedimental"
    ],
    correcta: 1,
    explicacioCorrecta:
      "Quan la consulta és exigida pels Tractats, ometre-la pot suposar un vici procedimental en l’elaboració del dret derivat.",
    explicacioIncorrecta: {
      0: "Tot i ser consultius, en els casos preceptius la consulta és una exigència procedimental.",
      2: "L’efecte no és automàtic i dependrà del control jurídic, però sí pot ser un vici de procediment.",
      3: "No és només polític: hi pot haver incidència jurídica si la consulta era obligatòria."
    }
  },

  {
    id: 3,
    tipus: "trampa",
    pregunta: "Quina d’aquestes afirmacions és correcta sobre els membres del CESE?",
    opcions: [
      "Representen els governs nacionals que els proposen",
      "Estan sotmesos a mandat imperatiu de l’Estat membre",
      "Exerceixen el càrrec amb independència i no poden rebre instruccions externes",
      "Només poden defensar l’interès general de la Unió i no els interessos dels grups socioeconòmics"
    ],
    correcta: 2,
    explicacioCorrecta:
      "Segons el text base (art. 300.4 TFUE), els membres actuen amb independència i no poden estar vinculats per mandat imperatiu ni rebre instruccions externes.",
    explicacioIncorrecta: {
      0: "No representen els governs; representen interessos socioeconòmics i actuen en interès general.",
      1: "Precisament el contrari: no hi ha mandat imperatiu.",
      3: "El CESE representa interessos socioeconòmics (empresaris, treballadors, societat civil), tot actuant amb independència."
    }
  },

  {
    id: 4,
    tipus: "trampa",
    pregunta: "El CESE participa en el procés decisori de la UE principalment mitjançant:",
    opcions: [
      "Votació vinculant de directives i reglaments",
      "Negociació i signatura de tractats internacionals",
      "Emissió de dictàmens consultius",
      "Control jurisdiccional de la legalitat dels actes europeus"
    ],
    correcta: 2,
    explicacioCorrecta:
      "El CESE intervé emetent dictàmens consultius perquè les institucions legislatives escoltin la societat civil abans d’adoptar normes.",
    explicacioIncorrecta: {
      0: "No té potestat legislativa ni vot vinculant.",
      1: "La signatura de tractats correspon a altres institucions/òrgans.",
      3: "El control jurisdiccional correspon al TJUE, no al CESE."
    }
  },

  {
    id: 5,
    tipus: "trampa",
    pregunta: "Quina opció reflecteix millor la funció del CESE en relació amb el “dèficit democràtic” de la UE?",
    opcions: [
      "Elimina el dèficit democràtic substituint el Parlament en matèria legislativa",
      "Redueix el dèficit democràtic actuant com a pont entre institucions i societat civil organitzada",
      "Elimina el dèficit democràtic imposant consultes populars vinculants",
      "No té cap relació amb la legitimitat democràtica perquè només tracta qüestions tècniques"
    ],
    correcta: 1,
    explicacioCorrecta:
      "El CESE reforça la legitimitat democràtica incorporant la societat civil organitzada al procés decisori mitjançant dictàmens.",
    explicacioIncorrecta: {
      0: "No substitueix el Parlament ni té funció legislativa.",
      2: "No convoca ni imposa consultes populars vinculants.",
      3: "Tot i ser consultiu, té una funció de participació i legitimitat democràtica."
    }
  },

  /* =====================================================
     PREGUNTES LEGISLACIÓ (6–10)
  ===================================================== */

  {
    id: 6,
    tipus: "legislacio",
    pregunta: "Quins articles del TFUE regulen de manera sistemàtica el CESE?",
    opcions: [
      "Arts. 13–17 TFUE",
      "Arts. 300–304 TFUE",
      "Arts. 285–287 TFUE",
      "Arts. 101–109 TFUE"
    ],
    correcta: 1,
    explicacioCorrecta:
      "El CESE es regula al TFUE, especialment als articles 300 a 304.",
    explicacioIncorrecta: {
      0: "Aquests articles no corresponen a la regulació del CESE.",
      2: "Els arts. 285–287 TFUE fan referència al Tribunal de Comptes Europeu.",
      3: "Aquests articles tracten principalment competència i mercat interior."
    }
  },

  {
    id: 7,
    tipus: "legislacio",
    pregunta: "Segons el text base, quin article del TFUE estableix que el Parlament, el Consell i la Comissió estaran assistits pel CESE amb funcions consultives?",
    opcions: [
      "Art. 300 TFUE",
      "Art. 301 TFUE",
      "Art. 300.4 TFUE",
      "Art. 304 TFUE"
    ],
    correcta: 0,
    explicacioCorrecta:
      "L’art. 300 TFUE estableix la base general del CESE i preveu l’assistència consultiva a Parlament, Consell i Comissió.",
    explicacioIncorrecta: {
      1: "L’art. 301 TFUE tracta del nombre màxim de membres i la distribució.",
      2: "L’art. 300.4 TFUE s’associa al principi d’independència dels membres en el text base.",
      3: "El text base no atribueix aquesta definició principal a l’art. 304."
    }
  },

  {
    id: 8,
    tipus: "legislacio",
    pregunta: "Quin és el nombre màxim de membres del CESE segons l’art. 301 TFUE?",
    opcions: [
      "No pot excedir de 250",
      "No pot excedir de 300",
      "No pot excedir de 350",
      "No pot excedir de 400"
    ],
    correcta: 2,
    explicacioCorrecta:
      "L’art. 301 TFUE fixa que el nombre de membres del CESE no pot excedir de 350.",
    explicacioIncorrecta: {
      0: "El límit no és 250.",
      1: "El límit no és 300.",
      3: "El límit no és 400."
    }
  },

  {
    id: 9,
    tipus: "legislacio",
    pregunta: "Qui fixa la distribució de membres del CESE per estats membres segons el text base?",
    opcions: [
      "El Parlament Europeu per majoria simple",
      "El Consell, per unanimitat, a proposta de la Comissió",
      "La Comissió per decisió autònoma",
      "El Consell Europeu per consens polític"
    ],
    correcta: 1,
    explicacioCorrecta:
      "La distribució es fixa pel Consell per unanimitat, a proposta de la Comissió (segons el text base vinculat a l’art. 301 TFUE).",
    explicacioIncorrecta: {
      0: "El Parlament no fixa la distribució en aquests termes.",
      2: "La Comissió proposa, però no fixa unilateralment la distribució.",
      3: "El Consell Europeu no és qui fixa la distribució de membres del CESE."
    }
  },

  {
    id: 10,
    tipus: "legislacio",
    pregunta: "Quina és la durada del mandat dels membres del CESE segons el text base?",
    opcions: [
      "3 anys, no renovable",
      "4 anys, renovable",
      "5 anys, renovable",
      "6 anys, renovable"
    ],
    correcta: 2,
    explicacioCorrecta:
      "El Consell adopta la llista de membres per un període de cinc anys i el mandat és renovable.",
    explicacioIncorrecta: {
      0: "No és de 3 anys ni és no renovable.",
      1: "No és de 4 anys.",
      3: "No és de 6 anys (aquest és típic d’altres òrgans, però no del CESE segons el text base)."
    }
  },

  /* =====================================================
     PREGUNTES CONCEPTES (11–20)
  ===================================================== */

  {
    id: 11,
    tipus: "concepte",
    pregunta: "Quina és la funció primordial del CESE dins del sistema institucional de la UE segons el text base?",
    opcions: [
      "Executar el pressupost de la UE",
      "Servir de fòrum de debat i recerca de consens entre actors socioeconòmics",
      "Aprovar reglaments europeus",
      "Resoldre conflictes entre estats membres"
    ],
    correcta: 1,
    explicacioCorrecta:
      "El CESE actua com a fòrum de debat i consens i trasllada aquesta visió a les institucions mitjançant dictàmens.",
    explicacioIncorrecta: {
      0: "L’execució del pressupost correspon principalment a la Comissió.",
      2: "L’aprovació normativa correspon al Parlament i al Consell.",
      3: "La resolució de conflictes jurídics correspon al TJUE."
    }
  },

  {
    id: 12,
    tipus: "concepte",
    pregunta: "Quins són els tres grans grups interns del CESE?",
    opcions: [
      "Institucions, agències i òrgans",
      "Empresaris, Treballadors i Altres interessos de la societat civil",
      "Parlament, Consell i Comissió",
      "Regions, municipis i províncies"
    ],
    correcta: 1,
    explicacioCorrecta:
      "El CESE s’estructura en tres grups: Grup I (Empresaris), Grup II (Treballadors) i Grup III (Altres interessos de la societat civil).",
    explicacioIncorrecta: {
      0: "Això és una classificació d’actors de la UE, no del CESE.",
      2: "Això és el triangle institucional, no els grups del CESE.",
      3: "Això fa referència a dimensió territorial, no a l’estructura interna del CESE."
    }
  },

  {
    id: 13,
    tipus: "concepte",
    pregunta: "Quin tipus d’interessos agrupa el Grup III del CESE segons el text base?",
    opcions: [
      "Només grans empreses multinacionals",
      "Només sindicats europeus",
      "Àmbits diversos: agricultura, consumidors, professions liberals, economia social, ONG, etc.",
      "Només institucions públiques estatals"
    ],
    correcta: 2,
    explicacioCorrecta:
      "El Grup III agrupa altres interessos de la societat civil: agricultura, consumidors, professions liberals, economia social i ONG, entre d’altres.",
    explicacioIncorrecta: {
      0: "Les empreses s’emmarquen principalment al Grup I.",
      1: "Els sindicats s’emmarquen al Grup II.",
      3: "No és un òrgan de representació de governs o institucions estatals."
    }
  },

  {
    id: 14,
    tipus: "concepte",
    pregunta: "Qui proposa inicialment els candidats per ser membres del CESE?",
    opcions: [
      "El Parlament Europeu",
      "Els estats membres",
      "La Comissió Europea",
      "El Comitè de les Regions"
    ],
    correcta: 1,
    explicacioCorrecta:
      "Cada estat membre presenta una llista de candidats vinculats a organitzacions de la seva societat civil.",
    explicacioIncorrecta: {
      0: "El Parlament no proposa els candidats.",
      2: "La Comissió pot intervenir en propostes institucionals, però el text base indica iniciativa dels estats membres.",
      3: "El Comitè de les Regions és un altre òrgan consultiu; no proposa membres del CESE."
    }
  },

  {
    id: 15,
    tipus: "concepte",
    pregunta: "Quina és la decisió final en el nomenament dels membres del CESE segons el text base?",
    opcions: [
      "La pren la Comissió Europea",
      "La pren el Consell de la UE adoptant formalment la llista",
      "La pren el Parlament Europeu per votació",
      "La pren el Consell Europeu"
    ],
    correcta: 1,
    explicacioCorrecta:
      "El Consell de la UE adopta formalment la llista de membres per un període de cinc anys (renovable).",
    explicacioIncorrecta: {
      0: "La Comissió no adopta la llista final.",
      2: "El Parlament no fa el nomenament; no és el mecanisme descrit.",
      3: "El Consell Europeu no és l’òrgan de nomenament en el text base."
    }
  },

  {
    id: 16,
    tipus: "concepte",
    pregunta: "Quina característica defineix l’exercici del càrrec dels membres del CESE segons el text base?",
    opcions: [
      "Mandat imperatiu i instruccions del govern estatal",
      "Dependència jeràrquica de la Comissió Europea",
      "Independència i absència d’instruccions externes",
      "Obligació de votar sempre en bloc segons el grup intern"
    ],
    correcta: 2,
    explicacioCorrecta:
      "El text base destaca la independència: no hi ha mandat imperatiu ni instruccions externes.",
    explicacioIncorrecta: {
      0: "És contrari al principi d’independència del text base.",
      1: "El CESE no és un òrgan jeràrquicament dependent de la Comissió.",
      3: "No existeix aquesta obligació; l’activitat és deliberativa i consultiva."
    }
  },

  {
    id: 17,
    tipus: "concepte",
    pregunta: "Quins tipus de dictàmens pot emetre el CESE segons el text base?",
    opcions: [
      "Només dictàmens obligatoris",
      "Dictàmens obligatoris, facultatius i per iniciativa pròpia",
      "Només dictàmens per iniciativa pròpia",
      "Dictàmens vinculants amb efecte directe"
    ],
    correcta: 1,
    explicacioCorrecta:
      "El CESE pot emetre dictàmens obligatoris (preceptius), facultatius i per iniciativa pròpia.",
    explicacioIncorrecta: {
      0: "No es limita als obligatoris.",
      2: "Tampoc es limita als d’iniciativa pròpia.",
      3: "Els dictàmens no són vinculants; són consultius."
    }
  },

  {
    id: 18,
    tipus: "concepte",
    pregunta: "Quina institució sol·licita sovint dictàmens al CESE en fases inicials de preparació normativa, segons el text base?",
    opcions: [
      "La Comissió Europea",
      "El Banc Central Europeu",
      "El Tribunal de Justícia de la UE",
      "El Consell Europeu"
    ],
    correcta: 0,
    explicacioCorrecta:
      "La Comissió, com a titular del monopoli d’iniciativa legislativa, sol·licita sovint dictàmens en fases primerenques.",
    explicacioIncorrecta: {
      1: "El BCE actua en política monetària, no sol·licita dictàmens en aquest sentit.",
      2: "El TJUE és jurisdiccional, no forma part del procés consultiu d’aquest tipus.",
      3: "El Consell Europeu fixa orientacions polítiques generals; no és l’actor típic de consulta descrita."
    }
  },

  {
    id: 19,
    tipus: "concepte",
    pregunta: "Com s’articula la relació del CESE amb el Parlament i el Consell en el procediment legislatiu ordinari?",
    opcions: [
      "El CESE substitueix el Parlament quan la consulta és preceptiva",
      "El Parlament i el Consell han de tenir en compte els dictàmens del CESE en les matèries que ho requereixen",
      "El CESE aprova l’acte final i el Parlament només el publica",
      "El CESE només intervé després de l’adopció de la norma"
    ],
    correcta: 1,
    explicacioCorrecta:
      "Segons el text base, el Parlament i el Consell han de considerar els dictàmens del CESE en matèries on la consulta és preceptiva.",
    explicacioIncorrecta: {
      0: "El CESE no substitueix el Parlament.",
      2: "El CESE no aprova normes; és consultiu.",
      3: "La seva intervenció és anterior a l’adopció (si escau), no posterior."
    }
  },

  {
    id: 20,
    tipus: "concepte",
    pregunta: "Quina és la contribució principal del CESE segons el text base en termes de cohesió socioeconòmica?",
    opcions: [
      "Imposar mesures econòmiques als estats membres",
      "Facilitar polítiques més equilibrades i acceptables mitjançant consens entre interessos contraposats",
      "Eliminar tota conflictivitat social a escala europea",
      "Substituir la negociació col·lectiva dins dels estats membres"
    ],
    correcta: 1,
    explicacioCorrecta:
      "El CESE afavoreix l’equilibri de polítiques aportant consens entre patronal, sindicats i altres actors, reforçant la cohesió socioeconòmica.",
    explicacioIncorrecta: {
      0: "No imposa mesures; emet dictàmens consultius.",
      2: "No pot eliminar tota conflictivitat; facilita el diàleg i el consens.",
      3: "No substitueix la negociació col·lectiva; és un òrgan consultiu a nivell UE."
    }
  }
];