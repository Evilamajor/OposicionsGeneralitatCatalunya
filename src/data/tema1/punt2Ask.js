const bloc1Tema1Punt2Ask = [
  // 🔴 TRAMPA (1–5)

  {
    id: 1,
    question: "El procés constituent espanyol es va caracteritzar principalment per:",
    category: "trampa",
    options: [
      { key: "A", text: "Una ruptura immediata amb tota la legalitat anterior.", correct: false },
      { key: "B", text: "Una reforma jurídica des de la legalitat vigent mitjançant la LRP.", correct: true },
      { key: "C", text: "La imposició unilateral d’una majoria parlamentària.", correct: false },
      { key: "D", text: "La suspensió provisional de la sobirania popular.", correct: false }
    ],
    explanation:
      "No hi va haver ruptura immediata, sinó una reforma jurídica des de dins mitjançant la Llei per a la Reforma Política."
  },

  {
    id: 2,
    question: "Les Corts elegides el 15 de juny de 1977 van ser:",
    category: "trampa",
    options: [
      { key: "A", text: "Formalment convocades com a assemblea constituent.", correct: false },
      { key: "B", text: "Corts bicamerals que van assumir funció constituent de facto.", correct: true },
      { key: "C", text: "Un òrgan provisional sense competències legislatives.", correct: false },
      { key: "D", text: "Designades íntegrament pel Rei.", correct: false }
    ],
    explanation:
      "No van ser convocades formalment com a constituents, però van assumir aquesta funció per consens polític."
  },

  {
    id: 3,
    question: "La sanció reial de la Constitució implica:",
    category: "trampa",
    options: [
      { key: "A", text: "Un acte discrecional del Rei.", correct: false },
      { key: "B", text: "Un acte degut de caràcter formal.", correct: true },
      { key: "C", text: "La ratificació popular del text.", correct: false },
      { key: "D", text: "Una aprovació substitutiva del referèndum.", correct: false }
    ],
    explanation:
      "Segons l’article 91 CE, la sanció és un acte formal i degut del Rei, no discrecional."
  },

  {
    id: 4,
    question: "La legitimitat democràtica plena de la Constitució deriva principalment de:",
    category: "trampa",
    options: [
      { key: "A", text: "La Llei per a la Reforma Política.", correct: false },
      { key: "B", text: "L’aprovació parlamentària del 31 d’octubre de 1978.", correct: false },
      { key: "C", text: "El referèndum del 6 de desembre de 1978.", correct: true },
      { key: "D", text: "La proclamació del Rei el 1975.", correct: false }
    ],
    explanation:
      "La sobirania resideix en el poble (art. 1.2 CE), que ratifica la Constitució en referèndum."
  },

  {
    id: 5,
    question: "El poder constituent originari es diferencia del poder de reforma perquè:",
    category: "trampa",
    options: [
      { key: "A", text: "És un poder constituït sotmès al Títol X.", correct: false },
      { key: "B", text: "És originari i no està limitat per normes prèvies.", correct: true },
      { key: "C", text: "Correspon exclusivament a les Corts Generals.", correct: false },
      { key: "D", text: "És exercit mitjançant referèndum ordinari.", correct: false }
    ],
    explanation:
      "El poder constituent originari és sobirà i prejurídic; el de reforma és constituït i limitat."
  },

  // 📜 LEGISLACIÓ (6–10)

  {
    id: 6,
    question: "Segons l’article 1.2 CE, la sobirania nacional resideix en:",
    category: "legislacio",
    options: [
      { key: "A", text: "El Rei.", correct: false },
      { key: "B", text: "Les Corts Generals.", correct: false },
      { key: "C", text: "El poble espanyol.", correct: true },
      { key: "D", text: "El Govern.", correct: false }
    ],
    explanation:
      "L’article 1.2 CE estableix que la sobirania nacional resideix en el poble espanyol."
  },

  {
    id: 7,
    question: "L’article 91 CE regula:",
    category: "legislacio",
    options: [
      { key: "A", text: "La reforma constitucional.", correct: false },
      { key: "B", text: "La sanció i promulgació de les lleis.", correct: true },
      { key: "C", text: "El referèndum constitucional.", correct: false },
      { key: "D", text: "El poder constituent.", correct: false }
    ],
    explanation:
      "L’article 91 CE estableix que el Rei sanciona i promulga les lleis aprovades per les Corts."
  },

  {
    id: 8,
    question: "La Constitució espanyola entra en vigor el:",
    category: "legislacio",
    options: [
      { key: "A", text: "6 de desembre de 1978.", correct: false },
      { key: "B", text: "27 de desembre de 1978.", correct: false },
      { key: "C", text: "29 de desembre de 1978.", correct: true },
      { key: "D", text: "31 d’octubre de 1978.", correct: false }
    ],
    explanation:
      "La CE entra en vigor amb la seva publicació al BOE el 29 de desembre de 1978."
  },

  {
    id: 9,
    question: "La Llei per a la Reforma Política és considerada:",
    category: "legislacio",
    options: [
      { key: "A", text: "La primera llei orgànica democràtica.", correct: false },
      { key: "B", text: "L’última Llei Fonamental del règim anterior.", correct: true },
      { key: "C", text: "Una disposició transitòria de la CE.", correct: false },
      { key: "D", text: "Una reforma constitucional parcial.", correct: false }
    ],
    explanation:
      "La LRP és l’última Llei Fonamental franquista i va permetre la transició cap a la democràcia."
  },

  {
    id: 10,
    question: "La Disposició Transitòria Vuitena CE reconeix:",
    category: "legislacio",
    options: [
      { key: "A", text: "La reforma constitucional.", correct: false },
      { key: "B", text: "La funció constituent de les Corts de 1977.", correct: true },
      { key: "C", text: "La dissolució automàtica del Senat.", correct: false },
      { key: "D", text: "El referèndum constitucional.", correct: false }
    ],
    explanation:
      "La DT 8a CE reconeix la funció constituent de les Corts elegides el 1977."
  },

  // 🟢 CONTINGUT (11–20)

  {
    id: 11,
    question: "La Transició espanyola implica simultàniament:",
    category: "general",
    options: [
      { key: "A", text: "Reforma econòmica i militar.", correct: false },
      { key: "B", text: "Transformació política i territorial.", correct: true },
      { key: "C", text: "Només canvi de forma d’Estat.", correct: false },
      { key: "D", text: "Només descentralització administrativa.", correct: false }
    ],
    explanation:
      "Va implicar el pas de dictadura a democràcia i d’Estat centralista a Estat autonòmic."
  },

  {
    id: 12,
    question: "El restabliment provisional de la Generalitat el 29/09/1977 evidencia:",
    category: "general",
    options: [
      { key: "A", text: "La ruptura immediata amb el règim anterior.", correct: false },
      { key: "B", text: "La dimensió territorial de la Transició.", correct: true },
      { key: "C", text: "La dissolució del Senat.", correct: false },
      { key: "D", text: "L’entrada en vigor anticipada de la CE.", correct: false }
    ],
    explanation:
      "Mostra la transformació territorial cap a un Estat descentralitzat."
  },

  {
    id: 13,
    question: "La Ponència Constitucional estava formada per:",
    category: "general",
    options: [
      { key: "A", text: "Representants exclusius d’UCD.", correct: false },
      { key: "B", text: "Set membres representatius de l’arc polític.", correct: true },
      { key: "C", text: "Magistrats del Tribunal Suprem.", correct: false },
      { key: "D", text: "Senadors designats pel Rei.", correct: false }
    ],
    explanation:
      "La Ponència reflectia el pluralisme polític i el principi de consens."
  },

  {
    id: 14,
    question: "El consens durant el procés constituent va permetre:",
    category: "general",
    options: [
      { key: "A", text: "Imposar una majoria simple.", correct: false },
      { key: "B", text: "Garantir estabilitat i acceptació plural del text.", correct: true },
      { key: "C", text: "Evitar esmenes parlamentàries.", correct: false },
      { key: "D", text: "Eliminar el referèndum.", correct: false }
    ],
    explanation:
      "El consens fou essencial per legitimar políticament la Constitució."
  },

  {
    id: 15,
    question: "Les eleccions del 15 de juny de 1977 són rellevants perquè:",
    category: "general",
    options: [
      { key: "A", text: "Aproven directament la CE.", correct: false },
      { key: "B", text: "Donen lloc a les Corts que elaboraran la Constitució.", correct: true },
      { key: "C", text: "Dissolen el règim automàticament.", correct: false },
      { key: "D", text: "Estableixen l’Estat autonòmic.", correct: false }
    ],
    explanation:
      "Les Corts sorgides d’aquestes eleccions assumeixen la funció constituent."
  },

  {
    id: 16,
    question: "El fet que 41 senadors fossin designats pel Rei implica que:",
    category: "general",
    options: [
      { key: "A", text: "Les Corts no eren plenament democràtiques.", correct: true },
      { key: "B", text: "No podien elaborar la Constitució.", correct: false },
      { key: "C", text: "El Senat tenia funció consultiva.", correct: false },
      { key: "D", text: "La sobirania residia en el Rei.", correct: false }
    ],
    explanation:
      "Tot i les eleccions democràtiques, la composició no era plenament democràtica."
  },

  {
    id: 17,
    question: "La publicació al BOE té com a efecte:",
    category: "general",
    options: [
      { key: "A", text: "Conferir entrada en vigor jurídica.", correct: true },
      { key: "B", text: "Substituir el referèndum.", correct: false },
      { key: "C", text: "Ratificar políticament el text.", correct: false },
      { key: "D", text: "Dissoldre les Corts.", correct: false }
    ],
    explanation:
      "La publicació al BOE determina l’entrada en vigor de la norma."
  },

  {
    id: 18,
    question: "El poder de reforma constitucional és:",
    category: "general",
    options: [
      { key: "A", text: "Originari i il·limitat.", correct: false },
      { key: "B", text: "Constituït i limitat pel Títol X.", correct: true },
      { key: "C", text: "Equivalent al poder constituent.", correct: false },
      { key: "D", text: "Exercit pel Rei.", correct: false }
    ],
    explanation:
      "El poder de reforma és un poder constituït sotmès als procediments del Títol X."
  },

  {
    id: 19,
    question: "El procés constituent espanyol pot qualificar-se com:",
    category: "general",
    options: [
      { key: "A", text: "Revolucionari.", correct: false },
      { key: "B", text: "Reformista i consensuat.", correct: true },
      { key: "C", text: "Imposat unilateralment.", correct: false },
      { key: "D", text: "Exclusivament tècnic.", correct: false }
    ],
    explanation:
      "Va ser un procés reformista basat en el consens polític."
  },

  {
    id: 20,
    question: "La Constitució de 1978 és fruit:",
    category: "general",
    options: [
      { key: "A", text: "D’una decisió unilateral del Govern.", correct: false },
      { key: "B", text: "D’un pacte polític plural basat en el consens.", correct: true },
      { key: "C", text: "D’una imposició militar.", correct: false },
      { key: "D", text: "D’una reforma administrativa parcial.", correct: false }
    ],
    explanation:
      "La CE és fruit d’un pacte plural entre forces polítiques representatives."
  }
];

export default bloc1Tema1Punt2Ask;