// punt22Ask.js
// Tema 2 (EAC 2006) · Punt 22 — Participació de la Generalitat en institucions de l’Estat
// 20 preguntes (5 trampa, 5 legislació, 10 contingut) amb explicació de correctes i incorrectes

export const quiz = {
  id: "bloc1_tema2_punt22",
  title: "Bloc 1 · Tema 2 · Punt 22 — Participació de la Generalitat en institucions de l’Estat",
  description:
    "Participació autonòmica en òrgans de l’Estat, mecanismes multilaterals, participació en assumptes UE i límits de la STC 31/2010.",
  theme: "tipus_test",
  totalQuestions: 20,
  questions: [
    // =========================
    // 1) TRAMPA
    // =========================
    {
      id: 1,
      type: "trampa",
      prompt: "Existeix jerarquia entre una llei estatal i una llei de la Generalitat quan totes dues regulen el mateix àmbit?",
      options: [
        "Sí, sempre preval la llei estatal per jerarquia normativa.",
        "Sí, perquè l’Estat és sobirà i les CA són subordinades.",
        "No, la relació es regeix pel principi de competència.",
        "Només hi ha jerarquia si així ho estableix l’EAC.",
      ],
      correctIndex: 2,
      explanation: {
        correct:
          "Correcte: en el model autonòmic, la col·lisió entre normes es resol pel principi de competència (qui és competent), no per jerarquia.",
        incorrect: {
          0: "Incorrecte: no hi ha una jerarquia general “Estat > CA” entre lleis; depèn del títol competencial.",
          1: "Incorrecte: la sobirania estatal no crea per si sola una jerarquia legal entre lleis estatals i autonòmiques.",
          3: "Incorrecte: l’EAC no pot instaurar una jerarquia general entre lleis; el criteri és competencial.",
        },
      },
    },

    // =========================
    // 2) CONTINGUT
    // =========================
    {
      id: 2,
      type: "contingut",
      prompt: "Quin és el significat principal del “bloc de la constitucionalitat” en les relacions interinstitucionals?",
      options: [
        "Un conjunt de normes europees aplicables a les comunitats autònomes.",
        "CE + EAC (i normes complementàries) com a paràmetre per interpretar competències i resoldre conflictes.",
        "Només la Constitució, perquè els Estatuts no tenen valor interpretatiu.",
        "Un acord polític entre governs per resoldre discrepàncies sense tribunals.",
      ],
      correctIndex: 1,
      explanation: {
        correct:
          "Correcte: el bloc de la constitucionalitat inclou CE i EAC (i altres normes habilitades) i serveix de paràmetre per delimitar competències i resoldre conflictes.",
        incorrect: {
          0: "Incorrecte: no és un conjunt de normes de la UE; és un paràmetre constitucional intern.",
          2: "Incorrecte: l’EAC integra el bloc i és rellevant en la delimitació competencial.",
          3: "Incorrecte: no és un acord polític, sinó un conjunt normatiu de referència per al TC.",
        },
      },
    },

    // =========================
    // 3) LEGISLACIÓ
    // =========================
    {
      id: 3,
      type: "legislacio",
      prompt: "Quin article de l’EAC s’esmenta com a base de participació en la designació de membres del CGPJ?",
      options: ["Art. 186 EAC", "Art. 180 EAC", "Art. 187 EAC", "Art. 149.1 CE"],
      correctIndex: 1,
      explanation: {
        correct:
          "Correcte: l’art. 180 EAC preveu la participació en la designació de membres del CGPJ (sempre d’acord amb la legislació estatal aplicable).",
        incorrect: {
          0: "Incorrecte: l’art. 186 EAC tracta la participació en assumptes de la UE.",
          2: "Incorrecte: l’art. 187 EAC s’associa a execució/coordinació del dret europeu.",
          3: "Incorrecte: l’art. 149.1 CE és llista de competències estatals, no un article de participació CGPJ a l’EAC.",
        },
      },
    },

    // =========================
    // 4) TRAMPA
    // =========================
    {
      id: 4,
      type: "trampa",
      prompt: "L’EAC obliga l’Estat a nomenar directament els candidats proposats pel Parlament de Catalunya per al Tribunal Constitucional?",
      options: [
        "Sí, perquè l’EAC és norma institucional bàsica i vincula les Corts Generals.",
        "Sí, si la proposta és aprovada per majoria absoluta del Parlament.",
        "No, la participació és per via de proposta i depèn de la legislació estatal (STC 31/2010).",
        "Només en matèries de competència exclusiva de la Generalitat.",
      ],
      correctIndex: 2,
      explanation: {
        correct:
          "Correcte: la Generalitat participa mitjançant propostes trameses al Senat; la STC 31/2010 evita llegir-ho com a obligació vinculant per al legislador estatal.",
        incorrect: {
          0: "Incorrecte: la STC 31/2010 matisa que aquests mandats sovint són recomanacions no vinculants.",
          1: "Incorrecte: la majoria parlamentària catalana no converteix la proposta en nomenament obligatori.",
          3: "Incorrecte: el mecanisme de proposta al TC no depèn de la competència material, sinó del procediment estatal.",
        },
      },
    },

    // =========================
    // 5) CONTINGUT
    // =========================
    {
      id: 5,
      type: "contingut",
      prompt: "Quina és la idea força sobre el límit general de la participació catalana en institucions estatals?",
      options: [
        "Participació = sobirania compartida amb l’Estat.",
        "Participació sempre pot interferir en funcions exclusives estatals si hi ha acord bilateral.",
        "Participació ≠ sobirania: opera dins límits constitucionals i del marc estatal.",
        "Participació implica dret de veto sobre decisions estatals que afectin Catalunya.",
      ],
      correctIndex: 2,
      explanation: {
        correct:
          "Correcte: el TC recorda que Catalunya té autonomia però no sobirania; la participació sempre està condicionada pels límits constitucionals.",
        incorrect: {
          0: "Incorrecte: no hi ha sobirania compartida; la sobirania correspon al poble espanyol segons el TC.",
          1: "Incorrecte: ni la bilateralitat permet interferir en funcions exclusives estatals.",
          3: "Incorrecte: la participació no comporta dret de veto.",
        },
      },
    },

    // =========================
    // 6) LEGISLACIÓ
    // =========================
    {
      id: 6,
      type: "legislacio",
      prompt: "Quin article de l’EAC regula la participació de la Generalitat en les posicions de l’Estat davant la UE?",
      options: ["Art. 180 EAC", "Art. 186 EAC", "Art. 182 EAC", "Art. 156 CE"],
      correctIndex: 1,
      explanation: {
        correct:
          "Correcte: l’art. 186 EAC estableix la participació en posicions de l’Estat davant la UE (i l’art. 186.3 parla del caràcter determinant en certs supòsits).",
        incorrect: {
          0: "Incorrecte: l’art. 180 EAC s’associa a participació vinculada al CGPJ (segons el temari).",
          2: "Incorrecte: l’art. 182 EAC es vincula a participació en organismes econòmics/socials de l’Estat.",
          3: "Incorrecte: l’art. 156 CE tracta autonomia financera; no és l’article clau UE en aquest punt.",
        },
      },
    },

    // =========================
    // 7) CONTINGUT
    // =========================
    {
      id: 7,
      type: "contingut",
      prompt: "Quan pot ser “determinant” la posició de la Generalitat en la formació de la posició estatal davant la UE?",
      options: [
        "Sempre que la Generalitat ho sol·liciti formalment.",
        "Quan afecti competències exclusives i comporti conseqüències financeres rellevants.",
        "Només quan l’Estat no tingui una posició prèvia fixada.",
        "Quan afecti competències compartides i no tingui impacte financer.",
      ],
      correctIndex: 1,
      explanation: {
        correct:
          "Correcte: l’art. 186.3 EAC preveu caràcter determinant si afecta competències exclusives i té conseqüències financeres rellevants.",
        incorrect: {
          0: "Incorrecte: no depèn d’una mera sol·licitud; depèn dels requisits materials.",
          2: "Incorrecte: no està condicionat a l’absència de posició estatal prèvia.",
          3: "Incorrecte: el criteri és competència exclusiva + impacte financer rellevant, no compartida sense impacte.",
        },
      },
    },

    // =========================
    // 8) TRAMPA
    // =========================
    {
      id: 8,
      type: "trampa",
      prompt: "La bilateralitat (Estat-Generalitat) pot substituir els òrgans multilaterals, com el CPFF, si hi ha acord entre les parts?",
      options: [
        "Sí, perquè la bilateralitat és prioritària a l’EAC.",
        "Sí, perquè el CPFF és consultiu i no necessari.",
        "No, la bilateralitat és complementària i no pot excloure òrgans multilaterals (STC 31/2010).",
        "Només si la Comissió Bilateral ho formalitza en un acord amb rang de llei.",
      ],
      correctIndex: 2,
      explanation: {
        correct:
          "Correcte: segons la STC 31/2010, la bilateralitat no pot buidar de contingut ni substituir la multilateralitat (CPFF).",
        incorrect: {
          0: "Incorrecte: la bilateralitat no és “prioritària” en el sentit d’anul·lar la multilateralitat.",
          1: "Incorrecte: el CPFF és un òrgan clau de coordinació financera; no queda neutralitzat per acords bilaterals.",
          3: "Incorrecte: ni tan sols un acord bilateral pot excloure els mecanismes multilaterals del sistema.",
        },
      },
    },

    // =========================
    // 9) CONTINGUT
    // =========================
    {
      id: 9,
      type: "contingut",
      prompt: "Quina és la funció típica de les conferències sectorials en el sistema autonòmic?",
      options: [
        "Són tribunals arbitralment competents per resoldre conflictes.",
        "Són instruments de coordinació i col·laboració multilateral per àmbits materials.",
        "Són òrgans bilaterals exclusius Catalunya-Estat.",
        "Són òrgans de control jurisdiccional de les lleis autonòmiques.",
      ],
      correctIndex: 1,
      explanation: {
        correct:
          "Correcte: les conferències sectorials són mecanismes multilaterals de coordinació i col·laboració en àmbits concrets.",
        incorrect: {
          0: "Incorrecte: no són tribunals ni substitueixen el TC.",
          2: "Incorrecte: no són exclusivament bilaterals; normalment hi participen diverses CA.",
          3: "Incorrecte: no són òrgans jurisdiccionals.",
        },
      },
    },

    // =========================
    // 10) LEGISLACIÓ
    // =========================
    {
      id: 10,
      type: "legislacio",
      prompt: "Quina sentència és clau per delimitar l’abast real de la participació de la Generalitat en institucions de l’Estat en aquest punt?",
      options: ["STC 76/1983", "STC 31/2010", "STC 247/2007", "STC 148/2021"],
      correctIndex: 1,
      explanation: {
        correct:
          "Correcte: la STC 31/2010 és la decisiva; admet participació però rebutja imposició i rebaixa molts mandats a recomanacions no vinculants.",
        incorrect: {
          0: "Incorrecte: no és la sentència de referència principal en aquest punt del temari.",
          2: "Incorrecte: no és la clau del marc interpretatiu del 2006/EAC en aquesta matèria.",
          3: "Incorrecte: no és la sentència base del temari d’EAC 2006 aquí.",
        },
      },
    },

    // =========================
    // 11) CONTINGUT
    // =========================
    {
      id: 11,
      type: "contingut",
      prompt: "Quina afirmació descriu millor el paper del TC en les relacions interinstitucionals Estat-Generalitat?",
      options: [
        "El TC només intervé si hi ha acord polític previ entre les parts.",
        "El TC és l’intèrpret suprem que dirimeix conflictes segons el bloc de la constitucionalitat.",
        "El TC aplica preferentment la jerarquia per resoldre col·lisions normatives.",
        "El TC no pot revisar previsions estatutàries perquè formen part del poder constituent.",
      ],
      correctIndex: 1,
      explanation: {
        correct:
          "Correcte: el TC és l’òrgan que resol conflictes i interpreta el repartiment competencial d’acord amb el bloc de la constitucionalitat.",
        incorrect: {
          0: "Incorrecte: no cal acord polític previ per activar el control constitucional.",
          2: "Incorrecte: el TC prioritza la lògica competencial; la jerarquia no és el criteri central Estat/CA.",
          3: "Incorrecte: l’EAC és poder constituït i és controlable; de fet, la STC 31/2010 n’és exemple.",
        },
      },
    },

    // =========================
    // 12) TRAMPA
    // =========================
    {
      id: 12,
      type: "trampa",
      prompt: "La participació de la Generalitat en organismes estatals implica un dret de co-decisió sobirana sobre les decisions estatals?",
      options: [
        "Sí, perquè l’Estat autonòmic és equivalent a un sistema federal de cogovernança absoluta.",
        "Sí, sempre que es tracti d’òrgans econòmics o reguladors.",
        "No, participar no és imposar: no hi ha co-decisió sobirana en el model autonòmic.",
        "Només en assumptes europeus, perquè la UE exigeix co-decisió de les CA.",
      ],
      correctIndex: 2,
      explanation: {
        correct:
          "Correcte: l’EAC preveu participació, però no co-decisió sobirana; la STC 31/2010 reforça la no vinculació del legislador estatal.",
        incorrect: {
          0: "Incorrecte: el model autonòmic no és una cogovernança federal absoluta en aquest sentit.",
          1: "Incorrecte: ni en òrgans econòmics la participació implica imposició o veto.",
          3: "Incorrecte: en UE hi ha participació (fins i tot determinant en supòsits), però no co-decisió sobirana general.",
        },
      },
    },

    // =========================
    // 13) CONTINGUT
    // =========================
    {
      id: 13,
      type: "contingut",
      prompt: "Com es descriu la participació de la Generalitat en el procés de designació de candidats al Tribunal Constitucional (segons el text base)?",
      options: [
        "Designa directament magistrats i l’Estat només els formalitza.",
        "Participa mitjançant propostes del Parlament de Catalunya trameses al Senat.",
        "Nomena magistrats a través de la Comissió Bilateral.",
        "Participa només si el Senat li delega expressament aquesta funció.",
      ],
      correctIndex: 1,
      explanation: {
        correct:
          "Correcte: la participació és per proposta del Parlament de Catalunya que es tramet al Senat, en els termes de la legislació estatal.",
        incorrect: {
          0: "Incorrecte: no hi ha designació directa garantida per l’EAC.",
          2: "Incorrecte: la Comissió Bilateral no és el canal de designació del TC.",
          3: "Incorrecte: la participació no es configura com una delegació puntual del Senat en el text base.",
        },
      },
    },

    // =========================
    // 14) LEGISLACIÓ
    // =========================
    {
      id: 14,
      type: "legislacio",
      prompt: "Quin precepte concret del punt 22 s’identifica com a base del caràcter “determinant” en UE?",
      options: ["Art. 187 EAC", "Art. 186.3 EAC", "Art. 180 EAC", "Art. 182 EAC"],
      correctIndex: 1,
      explanation: {
        correct:
          "Correcte: l’art. 186.3 EAC preveu que la posició de la Generalitat pugui ser determinant en supòsits d’exclusives + impacte financer rellevant.",
        incorrect: {
          0: "Incorrecte: l’art. 187 EAC s’associa a execució/coordinació del dret europeu, no al “determinant” específic.",
          2: "Incorrecte: l’art. 180 EAC no és el precepte UE determinant.",
          3: "Incorrecte: l’art. 182 EAC no és el precepte UE determinant.",
        },
      },
    },

    // =========================
    // 15) CONTINGUT
    // =========================
    {
      id: 15,
      type: "contingut",
      prompt: "Quina afirmació reflecteix millor el sentit de la STC 31/2010 sobre la participació institucional de la Generalitat?",
      options: [
        "El TC prohibeix tota participació autonòmica en institucions de l’Estat.",
        "El TC admet la participació, però rebutja imposició i “desactiva” mandats vinculants.",
        "El TC reconeix dret de veto autonòmic en matèries sensibles.",
        "El TC declara que l’EAC forma part del poder constituent i no pot ser interpretat.",
      ],
      correctIndex: 1,
      explanation: {
        correct:
          "Correcte: la STC 31/2010 accepta participació, però impedeix que l’EAC imposi models o obligacions vinculants al legislador estatal.",
        incorrect: {
          0: "Incorrecte: no prohibeix tota participació; n’admet el principi.",
          2: "Incorrecte: no reconeix vetos autonòmics com a regla general.",
          3: "Incorrecte: l’EAC és poder constituït i el TC l’interpreta i controla.",
        },
      },
    },

    // =========================
    // 16) CONTINGUT
    // =========================
    {
      id: 16,
      type: "contingut",
      prompt: "En els supòsits on la posició de la Generalitat davant la UE no és determinant, quin dret mínim es garanteix (segons el text base)?",
      options: [
        "Dret a veto sobre la posició estatal.",
        "Dret a ser escoltada abans de fixar la posició estatal.",
        "Dret a designar el cap de la delegació estatal al Consell.",
        "Dret a aprovar la posició estatal mitjançant resolució del Parlament.",
      ],
      correctIndex: 1,
      explanation: {
        correct:
          "Correcte: fora dels supòsits determinants, la Generalitat ha de ser escoltada (participació consultiva).",
        incorrect: {
          0: "Incorrecte: no existeix dret general de veto.",
          2: "Incorrecte: la Generalitat no designa el cap de delegació estatal.",
          3: "Incorrecte: el Parlament no “aprova” la posició estatal com a requisit vinculant.",
        },
      },
    },

    // =========================
    // 17) LEGISLACIÓ
    // =========================
    {
      id: 17,
      type: "legislacio",
      prompt: "Quin article de l’EAC es vincula al punt 22 com a base d’execució i coordinació del dret europeu en l’àmbit competencial propi?",
      options: ["Art. 187 EAC", "Art. 183 EAC", "Art. 206.5 EAC", "Art. 149.3 CE"],
      correctIndex: 0,
      explanation: {
        correct:
          "Correcte: l’art. 187 EAC s’identifica al punt 22 com a referència d’execució/coordinació del dret europeu dins les competències pròpies.",
        incorrect: {
          1: "Incorrecte: l’art. 183 EAC tracta la Comissió Bilateral (punt 21).",
          2: "Incorrecte: l’art. 206.5 EAC és principi d’ordinalitat (finançament, punt 20).",
          3: "Incorrecte: l’art. 149.3 CE regula prevalença/supletorietat, no execució UE a l’EAC.",
        },
      },
    },

    // =========================
    // 18) TRAMPA
    // =========================
    {
      id: 18,
      type: "trampa",
      prompt: "La Generalitat és sobirana i, per això, pot imposar a l’Estat el seu criteri en òrgans estatals quan hi participa.",
      options: [
        "Sí, perquè l’autogovern implica sobirania compartida.",
        "Sí, si la participació està prevista a l’EAC.",
        "No, el TC recorda que hi ha autonomia però no sobirania; participar no és imposar.",
        "Només si l’Estat no exerceix la seva competència en aquell moment.",
      ],
      correctIndex: 2,
      explanation: {
        correct:
          "Correcte: el TC subratlla autonomia sense sobirania; la participació no habilita imposició de voluntat al legislador o òrgans estatals.",
        incorrect: {
          0: "Incorrecte: autonomia no equival a sobirania compartida.",
          1: "Incorrecte: la previsió estatutària no converteix la participació en imposició vinculant.",
          3: "Incorrecte: l’exercici o no de competència estatal no crea sobirania autonòmica sobre l’òrgan estatal.",
        },
      },
    },

    // =========================
    // 19) CONTINGUT
    // =========================
    {
      id: 19,
      type: "contingut",
      prompt: "Quin enunciat descriu millor la relació entre bilateralitat i multilateralitat en aquest punt?",
      options: [
        "La bilateralitat elimina la multilateralitat perquè és una relació de “tu a tu”.",
        "La multilateralitat només existeix si l’Estat la permet expressament cada any.",
        "Ambdues tècniques són complementàries; la bilateralitat no pot excloure la multilateralitat.",
        "La multilateralitat queda reduïda a qüestions menors sense impacte financer.",
      ],
      correctIndex: 2,
      explanation: {
        correct:
          "Correcte: la participació es canalitza per vies bilaterals i multilaterals, complementàries; STC 31/2010 impedeix que la bilateralitat substitueixi òrgans multilaterals.",
        incorrect: {
          0: "Incorrecte: la bilateralitat no elimina la multilateralitat.",
          1: "Incorrecte: la multilateralitat és estructural (conferències sectorials, CPFF), no anual discrecional.",
          3: "Incorrecte: òrgans multilaterals com el CPFF tenen impacte financer central, no “menor”.",
        },
      },
    },

    // =========================
    // 20) LEGISLACIÓ (i una mica trampa suau)
    // =========================
    {
      id: 20,
      type: "legislacio",
      prompt: "Segons el punt 22, quins són els articles EAC essencials que has de memoritzar per a l’examen?",
      options: [
        "Arts. 110–112 EAC i art. 149.1 CE",
        "Arts. 180, 181, 182 i 186–187 EAC",
        "Arts. 183 i 210 EAC i art. 161.2 CE",
        "Arts. 201–206 EAC i arts. 156–158 CE",
      ],
      correctIndex: 1,
      explanation: {
        correct:
          "Correcte: el punt 22 destaca com a essencials els arts. 180, 181, 182 i 186–187 EAC, a més de la referència jurisprudencial STC 31/2010.",
        incorrect: {
          0: "Incorrecte: 110–112 EAC són tipologies competencials (punt 17/18), no el nucli del punt 22.",
          2: "Incorrecte: 183/210 EAC i 161.2 CE són sobretot del punt 21 (bilateralitat/impugnació).",
          3: "Incorrecte: 201–206 EAC i 156–158 CE són finançament (punt 20).",
        },
      },
    },
  ],
};

const normalizeIncorrectExplanations = (incorrect) => {
  if (Array.isArray(incorrect)) return incorrect;
  if (incorrect && typeof incorrect === 'object') {
    return Object.entries(incorrect)
      .sort((a, b) => Number(a[0]) - Number(b[0]))
      .map(([, value]) => value)
      .filter((value) => typeof value === 'string' && value.trim().length > 0);
  }
  return [];
};

const punt22Ask = (quiz.questions || []).map((item) => ({
  id: item.id,
  type: item.type,
  question: item.prompt,
  options: item.options,
  correctAnswer: item.correctIndex,
  explanation: {
    correct: item.explanation?.correct || '',
    incorrect: normalizeIncorrectExplanations(item.explanation?.incorrect),
  },
}));

export default punt22Ask;