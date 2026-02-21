const bloc1Tema1Punt14Ask = [

	// 🔴 PREGUNTES TRAMPA (1–5)

	{
		id: 1,
		question: "Les Corts Generals representen:",
		category: "trampa",
		options: [
			{ key: "A", text: "Les Comunitats Autònomes.", correct: false },
			{ key: "B", text: "El poble espanyol.", correct: true },
			{ key: "C", text: "El Govern.", correct: false },
			{ key: "D", text: "La Corona.", correct: false }
		],
		explanation:
			"Art. 66.1 CE: les Corts Generals representen el poble espanyol."
	},

	{
		id: 2,
		question: "En el bicameralisme espanyol, el Senat és:",
		category: "trampa",
		options: [
			{ key: "A", text: "La cambra amb preeminència legislativa.", correct: false },
			{ key: "B", text: "Una cambra territorial però amb bicameralisme asimètric.", correct: true },
			{ key: "C", text: "L’única cambra que pot investir el President.", correct: false },
			{ key: "D", text: "La cambra que aprova definitivament les lleis.", correct: false }
		],
		explanation:
			"El Senat és cambra territorial (art. 69 CE), però el sistema és asimètric: el Congrés té preeminència."
	},

	{
		id: 3,
		question: "Per aixecar immediatament un veto del Senat, el Congrés necessita:",
		category: "trampa",
		options: [
			{ key: "A", text: "Majoría simple.", correct: false },
			{ key: "B", text: "Majoría absoluta.", correct: true },
			{ key: "C", text: "2/3 parts.", correct: false },
			{ key: "D", text: "3/5 parts.", correct: false }
		],
		explanation:
			"Art. 90 CE: el Congrés pot aixecar el veto immediatament amb majoria absoluta."
	},

	{
		id: 4,
		question: "La moció de censura a Espanya és:",
		category: "trampa",
		options: [
			{ key: "A", text: "Destructiva: només destitueix el Govern.", correct: false },
			{ key: "B", text: "Constructiva: proposa un candidat alternatiu.", correct: true },
			{ key: "C", text: "Aprovable per majoria simple.", correct: false },
			{ key: "D", text: "Competència del Senat.", correct: false }
		],
		explanation:
			"Art. 113 CE: la moció de censura és constructiva i requereix majoria absoluta del Congrés."
	},

	{
		id: 5,
		question: "La Llei de Pressupostos Generals de l’Estat pot crear tributs?",
		category: "trampa",
		options: [
			{ key: "A", text: "Sí, lliurement.", correct: false },
			{ key: "B", text: "Sí, amb majoria absoluta.", correct: false },
			{ key: "C", text: "No; només pot modificar-los si una llei tributària ho permet.", correct: true },
			{ key: "D", text: "Sí, si ho aprova el Senat.", correct: false }
		],
		explanation:
			"Art. 134 CE: la Llei de Pressupostos no pot crear tributs; només modificar-los si una llei tributària ho autoritza."
	},

	// 📜 PREGUNTES DE LEGISLACIÓ (6–10)

	{
		id: 6,
		question: "La funció legislativa, pressupostària i de control del Govern està recollida a:",
		category: "legislacio",
		options: [
			{ key: "A", text: "Art. 66.2 CE.", correct: true },
			{ key: "B", text: "Art. 69 CE.", correct: false },
			{ key: "C", text: "Art. 90 CE.", correct: false },
			{ key: "D", text: "Art. 134 CE.", correct: false }
		],
		explanation:
			"Art. 66.2 CE: potestat legislativa, pressupostos i control del Govern."
	},

	{
		id: 7,
		question: "La composició del Congrés dels Diputats es regula principalment a:",
		category: "legislacio",
		options: [
			{ key: "A", text: "Art. 68 CE.", correct: true },
			{ key: "B", text: "Art. 69 CE.", correct: false },
			{ key: "C", text: "Art. 87 CE.", correct: false },
			{ key: "D", text: "Art. 99 CE.", correct: false }
		],
		explanation:
			"Art. 68 CE regula el Congrés (elecció, circumscripció, mandat...)."
	},

	{
		id: 8,
		question: "El Senat com a cambra de representació territorial s’estableix a:",
		category: "legislacio",
		options: [
			{ key: "A", text: "Art. 66 CE.", correct: false },
			{ key: "B", text: "Art. 69 CE.", correct: true },
			{ key: "C", text: "Art. 90 CE.", correct: false },
			{ key: "D", text: "Art. 81 CE.", correct: false }
		],
		explanation:
			"Art. 69 CE: el Senat és cambra de representació territorial."
	},

	{
		id: 9,
		question: "La iniciativa legislativa popular exigeix:",
		category: "legislacio",
		options: [
			{ key: "A", text: "100.000 signatures.", correct: false },
			{ key: "B", text: "250.000 signatures.", correct: false },
			{ key: "C", text: "500.000 signatures.", correct: true },
			{ key: "D", text: "1.000.000 signatures.", correct: false }
		],
		explanation:
			"Art. 87.3 CE: iniciativa legislativa popular amb 500.000 signatures, amb límits."
	},

	{
		id: 10,
		question: "El vot dels parlamentaris és:",
		category: "legislacio",
		options: [
			{ key: "A", text: "Delegable en casos excepcionals.", correct: false },
			{ key: "B", text: "Personal i indelegable.", correct: true },
			{ key: "C", text: "Delegable al portaveu del grup.", correct: false },
			{ key: "D", text: "Només indelegable al Senat.", correct: false }
		],
		explanation:
			"Art. 79.3 CE: el vot és personal i indelegable."
	},

	// 🟢 PREGUNTES DE CONTINGUT (11–20)

	{
		id: 11,
		question: "El nombre de diputats del Congrés és:",
		category: "general",
		options: [
			{ key: "A", text: "Fix: 350 per la Constitució.", correct: false },
			{ key: "B", text: "Entre 300 i 400; la llei determina el nombre concret.", correct: true },
			{ key: "C", text: "Fix: 400 per la Constitució.", correct: false },
			{ key: "D", text: "Variable sense límit constitucional.", correct: false }
		],
		explanation:
			"Art. 68 CE fixa un rang (300–400). El nombre concret l’estableix la LOREG (350 actualment)."
	},

	{
		id: 12,
		question: "La circumscripció electoral del Congrés és:",
		category: "general",
		options: [
			{ key: "A", text: "La Comunitat Autònoma.", correct: false },
			{ key: "B", text: "La província (Ceuta i Melilla: circumscripció especial).", correct: true },
			{ key: "C", text: "El municipi.", correct: false },
			{ key: "D", text: "El partit judicial.", correct: false }
		],
		explanation:
			"La província és la circumscripció, amb singularitat de Ceuta i Melilla."
	},

	{
		id: 13,
		question: "El paper del Senat en el procediment legislatiu ordinari és:",
		category: "general",
		options: [
			{ key: "A", text: "Decisiu i definitiu.", correct: false },
			{ key: "B", text: "De segona lectura, amb capacitat de veto suspensiu i esmenes.", correct: true },
			{ key: "C", text: "Només consultiu.", correct: false },
			{ key: "D", text: "Inexistent.", correct: false }
		],
		explanation:
			"El Senat pot vetar o esmenar, però el Congrés pot aixecar el veto (art. 90 CE)."
	},

	{
		id: 14,
		question: "El termini general del Senat per vetar o esmenar és:",
		category: "general",
		options: [
			{ key: "A", text: "15 dies.", correct: false },
			{ key: "B", text: "1 mes.", correct: false },
			{ key: "C", text: "2 mesos (20 dies en urgència).", correct: true },
			{ key: "D", text: "4 mesos.", correct: false }
		],
		explanation:
			"Art. 90 CE: 2 mesos, o 20 dies si s’ha declarat urgència."
	},

	{
		id: 15,
		question: "La investidura del President del Govern és competència de:",
		category: "general",
		options: [
			{ key: "A", text: "Les Corts en sessió conjunta.", correct: false },
			{ key: "B", text: "Només el Congrés dels Diputats.", correct: true },
			{ key: "C", text: "Només el Senat.", correct: false },
			{ key: "D", text: "El Rei en solitari.", correct: false }
		],
		explanation:
			"Art. 99 CE: intervé el Congrés."
	},

	{
		id: 16,
		question: "En la segona votació d’investidura (48h després) cal:",
		category: "general",
		options: [
			{ key: "A", text: "Majoría absoluta.", correct: false },
			{ key: "B", text: "Majoría simple.", correct: true },
			{ key: "C", text: "3/5 parts.", correct: false },
			{ key: "D", text: "2/3 parts.", correct: false }
		],
		explanation:
			"Art. 99 CE: la segona votació requereix majoria simple."
	},

	{
		id: 17,
		question: "La qüestió de confiança requereix:",
		category: "general",
		options: [
			{ key: "A", text: "Majoría absoluta.", correct: false },
			{ key: "B", text: "Majoría simple.", correct: true },
			{ key: "C", text: "2/3 parts.", correct: false },
			{ key: "D", text: "Majoría del Senat.", correct: false }
		],
		explanation:
			"Art. 112 CE: majoria simple."
	},

	{
		id: 18,
		question: "Si es perd una qüestió de confiança:",
		category: "general",
		options: [
			{ key: "A", text: "El Govern es manté però queda limitat.", correct: false },
			{ key: "B", text: "El Govern dimiteix.", correct: true },
			{ key: "C", text: "S’ha de convocar referèndum.", correct: false },
			{ key: "D", text: "Intervé el Senat.", correct: false }
		],
		explanation:
			"La pèrdua de la confiança obliga el Govern a dimitir."
	},

	{
		id: 19,
		question: "La pròrroga dels Pressupostos es produeix:",
		category: "general",
		options: [
			{ key: "A", text: "Si no s’aproven abans de l’1 de gener.", correct: true },
			{ key: "B", text: "Si el Senat veta la Llei de Pressupostos.", correct: false },
			{ key: "C", text: "Si ho decideix el Rei.", correct: false },
			{ key: "D", text: "Només amb majoria absoluta del Congrés.", correct: false }
		],
		explanation:
			"Art. 134 CE: pròrroga automàtica si no s’aproven abans de l’1 de gener."
	},

	{
		id: 20,
		question: "En el sistema de control dels estats excepcionals, el Congrés:",
		category: "general",
		options: [
			{ key: "A", text: "No intervé en cap cas.", correct: false },
			{ key: "B", text: "Autoritza la pròrroga de l’alarma i autoritza prèviament l’excepció.", correct: true },
			{ key: "C", text: "Només intervé en l’estat de setge.", correct: false },
			{ key: "D", text: "Autoritza totes les declaracions sense excepció.", correct: false }
		],
		explanation:
			"Art. 116 CE: alarma (pròrroga), excepció (autorització prèvia), setge (declaració per majoria absoluta)."
	}

];

export default bloc1Tema1Punt14Ask;
