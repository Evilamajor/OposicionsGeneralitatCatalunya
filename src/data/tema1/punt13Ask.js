const bloc1Tema1Punt13Ask = [

	// 🔴 PREGUNTES TRAMPA (1–5)

	{
		id: 1,
		question: "En una monarquia parlamentària, el Rei:",
		category: "trampa",
		options: [
			{ key: "A", text: "Exerceix el poder executiu.", correct: false },
			{ key: "B", text: "Regna però no governa.", correct: true },
			{ key: "C", text: "Dirigeix el Govern.", correct: false },
			{ key: "D", text: "Pot vetar lleis.", correct: false }
		],
		explanation:
			"Segons l’art. 1.3 CE, Espanya és una monarquia parlamentària: el Rei regna però no governa."
	},

	{
		id: 2,
		question: "La inviolabilitat del Rei significa que:",
		category: "trampa",
		options: [
			{ key: "A", text: "Els seus actes no necessiten refrendament.", correct: false },
			{ key: "B", text: "No pot ser jutjat i no respon jurídicament.", correct: true },
			{ key: "C", text: "No pot ser criticat políticament.", correct: false },
			{ key: "D", text: "No està subjecte a la Constitució.", correct: false }
		],
		explanation:
			"L’art. 56.3 CE estableix que la persona del Rei és inviolable i no està subjecta a responsabilitat."
	},

	{
		id: 3,
		question: "El Rei pot negar-se a sancionar una llei aprovada per les Corts?",
		category: "trampa",
		options: [
			{ key: "A", text: "Sí, si no està d’acord.", correct: false },
			{ key: "B", text: "Sí, si el TC ho recomana.", correct: false },
			{ key: "C", text: "No, és un acte degut.", correct: true },
			{ key: "D", text: "Només en lleis orgàniques.", correct: false }
		],
		explanation:
			"La sanció és un acte degut (arts. 62.a i 91 CE). No existeix dret de vet."
	},

	{
		id: 4,
		question: "Sense refrendament, un acte del Rei:",
		category: "trampa",
		options: [
			{ key: "A", text: "És vàlid però no executiu.", correct: false },
			{ key: "B", text: "És nul.", correct: true },
			{ key: "C", text: "És revisable pel TC.", correct: false },
			{ key: "D", text: "Només és simbòlic.", correct: false }
		],
		explanation:
			"Segons l’art. 64 CE, sense refrendament l’acte és invàlid."
	},

	{
		id: 5,
		question: "El comandament suprem de les Forces Armades implica:",
		category: "trampa",
		options: [
			{ key: "A", text: "Direcció militar efectiva.", correct: false },
			{ key: "B", text: "Funció simbòlica dins la monarquia parlamentària.", correct: true },
			{ key: "C", text: "Competència executiva directa en defensa.", correct: false },
			{ key: "D", text: "Control pressupostari de Defensa.", correct: false }
		],
		explanation:
			"És una funció simbòlica (art. 62.h CE), no direcció operativa."
	},

	// 📜 PREGUNTES DE LEGISLACIÓ (6–10)

	{
		id: 6,
		question: "La inviolabilitat del Rei es regula a:",
		category: "legislacio",
		options: [
			{ key: "A", text: "Art. 64 CE.", correct: false },
			{ key: "B", text: "Art. 56.3 CE.", correct: true },
			{ key: "C", text: "Art. 62 CE.", correct: false },
			{ key: "D", text: "Art. 65 CE.", correct: false }
		],
		explanation:
			"L’art. 56.3 CE estableix la inviolabilitat i irresponsabilitat."
	},

	{
		id: 7,
		question: "El termini per sancionar i promulgar una llei és:",
		category: "legislacio",
		options: [
			{ key: "A", text: "10 dies.", correct: false },
			{ key: "B", text: "15 dies.", correct: true },
			{ key: "C", text: "30 dies.", correct: false },
			{ key: "D", text: "No hi ha termini.", correct: false }
		],
		explanation:
			"Segons l’art. 91 CE, el termini és de 15 dies."
	},

	{
		id: 8,
		question: "Qui refrenda el nomenament del President del Govern?",
		category: "legislacio",
		options: [
			{ key: "A", text: "El President del Govern cessant.", correct: false },
			{ key: "B", text: "El President del Congrés.", correct: true },
			{ key: "C", text: "El Ministre de Justícia.", correct: false },
			{ key: "D", text: "El President del Senat.", correct: false }
		],
		explanation:
			"Art. 64 CE: en aquest cas refrenda el President del Congrés."
	},

	{
		id: 9,
		question: "El dret de gràcia (indult) es regula a:",
		category: "legislacio",
		options: [
			{ key: "A", text: "Art. 63 CE.", correct: false },
			{ key: "B", text: "Art. 62.i CE.", correct: true },
			{ key: "C", text: "Art. 117 CE.", correct: false },
			{ key: "D", text: "Art. 56 CE.", correct: false }
		],
		explanation:
			"L’art. 62.i CE reconeix el dret de gràcia, prohibint indults generals."
	},

	{
		id: 10,
		question: "La successió a la Corona es regula principalment a:",
		category: "legislacio",
		options: [
			{ key: "A", text: "Art. 56 CE.", correct: false },
			{ key: "B", text: "Art. 57 CE.", correct: true },
			{ key: "C", text: "Art. 59 CE.", correct: false },
			{ key: "D", text: "Art. 60 CE.", correct: false }
		],
		explanation:
			"L’art. 57 CE regula la successió hereditària."
	},

	// 🟢 PREGUNTES DE COMPRENSIÓ (11–20)

	{
		id: 11,
		question: "El Rei simbolitza:",
		category: "general",
		options: [
			{ key: "A", text: "La sobirania popular.", correct: false },
			{ key: "B", text: "La unitat i permanència de l’Estat.", correct: true },
			{ key: "C", text: "El poder legislatiu.", correct: false },
			{ key: "D", text: "La representació del poble.", correct: false }
		],
		explanation:
			"Art. 56.1 CE: simbolitza la unitat i permanència de l’Estat."
	},

	{
		id: 12,
		question: "El Rei representa:",
		category: "general",
		options: [
			{ key: "A", text: "El poble espanyol.", correct: false },
			{ key: "B", text: "Les Corts Generals.", correct: false },
			{ key: "C", text: "L’Estat.", correct: true },
			{ key: "D", text: "El Govern.", correct: false }
		],
		explanation:
			"La representació popular correspon a les Corts."
	},

	{
		id: 13,
		question: "La responsabilitat dels actes del Rei recau en:",
		category: "general",
		options: [
			{ key: "A", text: "El Tribunal Constitucional.", correct: false },
			{ key: "B", text: "Qui refrenda l’acte.", correct: true },
			{ key: "C", text: "El President del Senat.", correct: false },
			{ key: "D", text: "Les Corts Generals.", correct: false }
		],
		explanation:
			"Art. 64.2 CE: la responsabilitat recau en qui refrenda."
	},

	{
		id: 14,
		question: "La dissolució de les Corts es produeix:",
		category: "general",
		options: [
			{ key: "A", text: "Per decisió unilateral del Rei.", correct: false },
			{ key: "B", text: "A proposta del President del Govern.", correct: true },
			{ key: "C", text: "Per acord del TC.", correct: false },
			{ key: "D", text: "Per decisió del Senat.", correct: false }
		],
		explanation:
			"Art. 115 CE: dissolució a proposta del President del Govern."
	},

	{
		id: 15,
		question: "La regència s’exerceix:",
		category: "general",
		options: [
			{ key: "A", text: "En nom propi.", correct: false },
			{ key: "B", text: "En nom del Rei.", correct: true },
			{ key: "C", text: "En nom de les Corts.", correct: false },
			{ key: "D", text: "En nom del Govern.", correct: false }
		],
		explanation:
			"Art. 59 CE: la regència s’exerceix en nom del Rei."
	},

	{
		id: 16,
		question: "Les abdicacions i renúncies es resolen per:",
		category: "general",
		options: [
			{ key: "A", text: "Reial decret.", correct: false },
			{ key: "B", text: "Llei ordinària.", correct: false },
			{ key: "C", text: "Llei Orgànica.", correct: true },
			{ key: "D", text: "Reforma constitucional.", correct: false }
		],
		explanation:
			"Art. 57.5 CE: mitjançant Llei Orgànica."
	},

	{
		id: 17,
		question: "La tutela del Rei menor és incompatible amb:",
		category: "general",
		options: [
			{ key: "A", text: "Ser regent.", correct: false },
			{ key: "B", text: "Un càrrec polític.", correct: true },
			{ key: "C", text: "Ser diputat.", correct: false },
			{ key: "D", text: "Ser ministre.", correct: false }
		],
		explanation:
			"Art. 60 CE: la tutela és incompatible amb càrrec polític."
	},

	{
		id: 18,
		question: "La justícia s’administra:",
		category: "general",
		options: [
			{ key: "A", text: "En nom del poble.", correct: false },
			{ key: "B", text: "En nom del Rei.", correct: true },
			{ key: "C", text: "En nom del Govern.", correct: false },
			{ key: "D", text: "En nom del TC.", correct: false }
		],
		explanation:
			"Art. 117.1 CE: la justícia s’administra en nom del Rei."
	},

	{
		id: 19,
		question: "El Rei pot declarar la guerra:",
		category: "general",
		options: [
			{ key: "A", text: "Sense autorització.", correct: false },
			{ key: "B", text: "Amb autorització de les Corts.", correct: true },
			{ key: "C", text: "Amb acord del Govern només.", correct: false },
			{ key: "D", text: "Per decret.", correct: false }
		],
		explanation:
			"Art. 63.3 CE: amb autorització de les Corts."
	},

	{
		id: 20,
		question: "Els actes previstos a l’art. 65 CE:",
		category: "general",
		options: [
			{ key: "A", text: "Requereixen refrendament.", correct: false },
			{ key: "B", text: "No requereixen refrendament.", correct: true },
			{ key: "C", text: "Són competència del Govern.", correct: false },
			{ key: "D", text: "Són revisables pel TC.", correct: false }
		],
		explanation:
			"L’art. 65 CE preveu excepcions al refrendament."
	}

];

export default bloc1Tema1Punt13Ask;
