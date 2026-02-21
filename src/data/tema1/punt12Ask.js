const bloc1Tema1Punt12Ask = [

	// 🔴 PREGUNTES TRAMPA (1–5)

	{
		id: 1,
		question: "L’autonomia financera de les Comunitats Autònomes implica:",
		category: "trampa",
		options: [
			{ key: "A", text: "Sobirania fiscal plena.", correct: false },
			{ key: "B", text: "Potestat tributària originària.", correct: false },
			{ key: "C", text: "Capacitat de gestionar ingressos i despeses dins la Constitució.", correct: true },
			{ key: "D", text: "Independència financera absoluta de l’Estat.", correct: false }
		],
		explanation:
			"L’art. 156 CE reconeix autonomia financera, però dins el marc constitucional i en coordinació amb l’Estat."
	},

	{
		id: 2,
		question: "Les CA poden crear tributs sobre fets imposables ja gravats per l’Estat?",
		category: "trampa",
		options: [
			{ key: "A", text: "Sí, sempre que sigui per llei autonòmica.", correct: false },
			{ key: "B", text: "Sí, si el CPFF ho autoritza.", correct: false },
			{ key: "C", text: "No, està prohibit pel sistema constitucional.", correct: true },
			{ key: "D", text: "Només en règim foral.", correct: false }
		],
		explanation:
			"Els tributs propis no poden gravar fets imposables ja gravats per l’Estat."
	},

	{
		id: 3,
		question: "El principi de solidaritat pot generar privilegis territorials?",
		category: "trampa",
		options: [
			{ key: "A", text: "Sí, per garantir l’autonomia.", correct: false },
			{ key: "B", text: "No, l’art. 138.2 CE prohibeix privilegis.", correct: true },
			{ key: "C", text: "Sí, en el règim comú.", correct: false },
			{ key: "D", text: "Només en matèria d’inversió.", correct: false }
		],
		explanation:
			"La solidaritat garanteix equilibri, però no privilegis (art. 138.2 CE)."
	},

	{
		id: 4,
		question: "La potestat tributària de les CA és:",
		category: "trampa",
		options: [
			{ key: "A", text: "Originària.", correct: false },
			{ key: "B", text: "Compartida amb l’Estat.", correct: false },
			{ key: "C", text: "Derivada segons art. 133.2 CE.", correct: true },
			{ key: "D", text: "Ilimitada.", correct: false }
		],
		explanation:
			"La potestat tributària originària correspon a l’Estat (art. 133.1 CE); la de les CA és derivada."
	},

	{
		id: 5,
		question: "El principi de coresponsabilitat fiscal significa que:",
		category: "trampa",
		options: [
			{ key: "A", text: "Les CA només reben transferències.", correct: false },
			{ key: "B", text: "Les CA participen en la recaptació i responsabilitat fiscal.", correct: true },
			{ key: "C", text: "Les CA poden endeutar-se sense límit.", correct: false },
			{ key: "D", text: "El CPFF fixa els impostos autonòmics.", correct: false }
		],
		explanation:
			"La coresponsabilitat implica participació activa en la recaptació i responsabilitat fiscal."
	},

	// 📜 PREGUNTES DE LEGISLACIÓ (6–10)

	{
		id: 6,
		question: "L’autonomia financera de les CA es regula a:",
		category: "legislacio",
		options: [
			{ key: "A", text: "Art. 157 CE.", correct: false },
			{ key: "B", text: "Art. 156 CE.", correct: true },
			{ key: "C", text: "Art. 158 CE.", correct: false },
			{ key: "D", text: "Art. 133 CE.", correct: false }
		],
		explanation:
			"L’art. 156 CE estableix l’autonomia financera."
	},

	{
		id: 7,
		question: "La llista de recursos de les CA es troba a:",
		category: "legislacio",
		options: [
			{ key: "A", text: "Art. 156 CE.", correct: false },
			{ key: "B", text: "Art. 157 CE.", correct: true },
			{ key: "C", text: "Art. 158 CE.", correct: false },
			{ key: "D", text: "Art. 135 CE.", correct: false }
		],
		explanation:
			"L’art. 157 CE enumera els recursos de les CA."
	},

	{
		id: 8,
		question: "El Fons de Compensació Interterritorial es regula a:",
		category: "legislacio",
		options: [
			{ key: "A", text: "Art. 157 CE.", correct: false },
			{ key: "B", text: "Art. 158.2 CE.", correct: true },
			{ key: "C", text: "Art. 138 CE.", correct: false },
			{ key: "D", text: "Art. 135 CE.", correct: false }
		],
		explanation:
			"L’art. 158.2 CE regula el Fons de Compensació Interterritorial."
	},

	{
		id: 9,
		question: "La LOFCA es dicta en virtut de:",
		category: "legislacio",
		options: [
			{ key: "A", text: "Art. 157.3 CE.", correct: true },
			{ key: "B", text: "Art. 156 CE.", correct: false },
			{ key: "C", text: "Art. 158 CE.", correct: false },
			{ key: "D", text: "Art. 135 CE.", correct: false }
		],
		explanation:
			"L’art. 157.3 CE remet a una llei orgànica per regular el sistema de finançament."
	},

	{
		id: 10,
		question: "El límit d’estabilitat pressupostària es troba a:",
		category: "legislacio",
		options: [
			{ key: "A", text: "Art. 158 CE.", correct: false },
			{ key: "B", text: "Art. 156 CE.", correct: false },
			{ key: "C", text: "Art. 135 CE.", correct: true },
			{ key: "D", text: "Art. 149 CE.", correct: false }
		],
		explanation:
			"L’art. 135 CE estableix el principi d’estabilitat pressupostària."
	},

	// 🟢 PREGUNTES DE COMPRENSIÓ (11–20)

	{
		id: 11,
		question: "El finançament autonòmic és essencial perquè:",
		category: "general",
		options: [
			{ key: "A", text: "Permet exercir competències com sanitat i educació.", correct: true },
			{ key: "B", text: "Dona sobirania fiscal.", correct: false },
			{ key: "C", text: "Elimina el control estatal.", correct: false },
			{ key: "D", text: "Substitueix els Estatuts.", correct: false }
		],
		explanation:
			"Sense recursos no es poden exercir competències autonòmiques."
	},

	{
		id: 12,
		question: "Els impostos cedits són:",
		category: "general",
		options: [
			{ key: "A", text: "Creats per les CA.", correct: false },
			{ key: "B", text: "De titularitat estatal cedits totalment o parcialment.", correct: true },
			{ key: "C", text: "Tributs municipals.", correct: false },
			{ key: "D", text: "Recàrrecs autonòmics.", correct: false }
		],
		explanation:
			"Són impostos estatals cedits totalment o parcialment a les CA."
	},

	{
		id: 13,
		question: "El règim foral es caracteritza per:",
		category: "general",
		options: [
			{ key: "A", text: "Transferències estatals principals.", correct: false },
			{ key: "B", text: "Recaptació pràcticament íntegra i pagament de cupo.", correct: true },
			{ key: "C", text: "Sistema d’anivellament general.", correct: false },
			{ key: "D", text: "Absència de LOFCA.", correct: false }
		],
		explanation:
			"Al règim foral es recapta pràcticament tot i es paga un cupo a l’Estat."
	},

	{
		id: 14,
		question: "El CPFF és:",
		category: "general",
		options: [
			{ key: "A", text: "Òrgan de coordinació fiscal entre Estat i CA.", correct: true },
			{ key: "B", text: "Tribunal fiscal.", correct: false },
			{ key: "C", text: "Òrgan legislatiu.", correct: false },
			{ key: "D", text: "Entitat autonòmica.", correct: false }
		],
		explanation:
			"El Consell de Política Fiscal i Financera coordina finances públiques."
	},

	{
		id: 15,
		question: "La solidaritat interterritorial garanteix:",
		category: "general",
		options: [
			{ key: "A", text: "Privilegis econòmics.", correct: false },
			{ key: "B", text: "Nivell similar de serveis públics fonamentals.", correct: true },
			{ key: "C", text: "Uniformitat absoluta d’impostos.", correct: false },
			{ key: "D", text: "Supressió de transferències.", correct: false }
		],
		explanation:
			"Busca assegurar un nivell similar de serveis públics."
	},

	{
		id: 16,
		question: "Els recursos no tributaris inclouen:",
		category: "general",
		options: [
			{ key: "A", text: "Només impostos cedits.", correct: false },
			{ key: "B", text: "Transferències, patrimoni i operacions de crèdit.", correct: true },
			{ key: "C", text: "Recàrrecs estatals.", correct: false },
			{ key: "D", text: "Només FCI.", correct: false }
		],
		explanation:
			"Inclouen transferències, patrimoni propi i crèdit."
	},

	{
		id: 17,
		question: "La unitat de mercat limita:",
		category: "general",
		options: [
			{ key: "A", text: "La potestat legislativa estatal.", correct: false },
			{ key: "B", text: "La creació de tributs que obstaculitzin la lliure circulació.", correct: true },
			{ key: "C", text: "El FCI.", correct: false },
			{ key: "D", text: "El règim foral.", correct: false }
		],
		explanation:
			"Les CA no poden establir tributs que dificultin la lliure circulació."
	},

	{
		id: 18,
		question: "El principi de capacitat econòmica (art. 31 CE) influeix en:",
		category: "general",
		options: [
			{ key: "A", text: "El sistema de finançament autonòmic.", correct: true },
			{ key: "B", text: "Només en tributs municipals.", correct: false },
			{ key: "C", text: "Només en l’IRPF.", correct: false },
			{ key: "D", text: "Només en el règim foral.", correct: false }
		],
		explanation:
			"És principi general del sistema tributari."
	},

	{
		id: 19,
		question: "La LOFCA desenvolupa:",
		category: "general",
		options: [
			{ key: "A", text: "El règim de finançament autonòmic.", correct: true },
			{ key: "B", text: "El sistema judicial.", correct: false },
			{ key: "C", text: "El règim municipal.", correct: false },
			{ key: "D", text: "El poder constituent.", correct: false }
		],
		explanation:
			"La LOFCA regula el sistema de finançament."
	},

	{
		id: 20,
		question: "L’autonomia financera s’exerceix:",
		category: "general",
		options: [
			{ key: "A", text: "Sense coordinació amb l’Estat.", correct: false },
			{ key: "B", text: "En coordinació amb la Hisenda estatal.", correct: true },
			{ key: "C", text: "Amb sobirania fiscal plena.", correct: false },
			{ key: "D", text: "Sense límits pressupostaris.", correct: false }
		],
		explanation:
			"L’art. 156 CE estableix coordinació amb la Hisenda estatal."
	}

];

export default bloc1Tema1Punt12Ask;
