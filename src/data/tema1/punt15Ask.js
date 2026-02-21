const bloc1Tema1Punt15Ask = [

	// 🔴 PREGUNTES TRAMPA (1–5)

	{
		id: 1,
		question: "El Govern respon políticament davant:",
		category: "trampa",
		options: [
			{ key: "A", text: "Les Corts Generals (Congrés i Senat conjuntament).", correct: false },
			{ key: "B", text: "El Congrés dels Diputats.", correct: true },
			{ key: "C", text: "El Senat.", correct: false },
			{ key: "D", text: "El Rei.", correct: false }
		],
		explanation:
			"Art. 108 CE: el Govern respon solidàriament davant el Congrés dels Diputats (no davant les Corts en conjunt)."
	},

	{
		id: 2,
		question: "La potestat reglamentària del Govern permet:",
		category: "trampa",
		options: [
			{ key: "A", text: "Contradir una llei si és més eficient.", correct: false },
			{ key: "B", text: "Desenvolupar les lleis sense contradir-les.", correct: true },
			{ key: "C", text: "Regular matèries reservades a llei.", correct: false },
			{ key: "D", text: "Aprovar lleis orgàniques.", correct: false }
		],
		explanation:
			"El reglament és inferior a la llei i no pot envair la reserva de llei."
	},

	{
		id: 3,
		question: "El Rei té el comandament suprem de les Forces Armades, però la direcció efectiva correspon a:",
		category: "trampa",
		options: [
			{ key: "A", text: "El Rei.", correct: false },
			{ key: "B", text: "El Govern.", correct: true },
			{ key: "C", text: "El Congrés.", correct: false },
			{ key: "D", text: "El Tribunal Suprem.", correct: false }
		],
		explanation:
			"Art. 62.h CE (comandament suprem del Rei) i art. 97 CE (direcció política i defensa per part del Govern)."
	},

	{
		id: 4,
		question: "El Govern en funcions:",
		category: "trampa",
		options: [
			{ key: "A", text: "Cessa automàticament el dia després de les eleccions.", correct: false },
			{ key: "B", text: "Manté totes les competències com si fos ordinari.", correct: false },
			{ key: "C", text: "Gestiona només el despatx ordinari fins al nou Govern.", correct: true },
			{ key: "D", text: "Pot aprovar projectes de llei amb normalitat.", correct: false }
		],
		explanation:
			"Art. 101.2 CE: el Govern en funcions continua fins la presa de possessió del nou Govern i es limita al despatx ordinari."
	},

	{
		id: 5,
		question: "L’Administració Pública és:",
		category: "trampa",
		options: [
			{ key: "A", text: "Un òrgan polític constitucional igual que el Govern.", correct: false },
			{ key: "B", text: "L’estructura professional que executa lleis i decisions.", correct: true },
			{ key: "C", text: "Una cambra parlamentària.", correct: false },
			{ key: "D", text: "Un poder de l’Estat independent.", correct: false }
		],
		explanation:
			"Govern = direcció política; Administració = estructura instrumental professional (arts. 103–106 CE)."
	},

	// 📜 PREGUNTES DE LEGISLACIÓ (6–10)

	{
		id: 6,
		question: "L’article que defineix que el Govern dirigeix la política interior i exterior i l’Administració és:",
		category: "legislacio",
		options: [
			{ key: "A", text: "Art. 97 CE.", correct: true },
			{ key: "B", text: "Art. 98 CE.", correct: false },
			{ key: "C", text: "Art. 103 CE.", correct: false },
			{ key: "D", text: "Art. 106 CE.", correct: false }
		],
		explanation:
			"Art. 97 CE: direcció política i de l’Administració civil i militar."
	},

	{
		id: 7,
		question: "La composició del Govern (President, Vicepresidents, Ministres...) es regula a:",
		category: "legislacio",
		options: [
			{ key: "A", text: "Art. 98 CE.", correct: true },
			{ key: "B", text: "Art. 100 CE.", correct: false },
			{ key: "C", text: "Art. 101 CE.", correct: false },
			{ key: "D", text: "Art. 108 CE.", correct: false }
		],
		explanation:
			"Art. 98 CE regula la composició i alguns aspectes de funcionament."
	},

	{
		id: 8,
		question: "El cessament del Govern i el Govern en funcions s’estableix a:",
		category: "legislacio",
		options: [
			{ key: "A", text: "Art. 99 CE.", correct: false },
			{ key: "B", text: "Art. 101 CE.", correct: true },
			{ key: "C", text: "Art. 102 CE.", correct: false },
			{ key: "D", text: "Art. 108 CE.", correct: false }
		],
		explanation:
			"Art. 101 CE: causes de cessament i règim del Govern en funcions."
	},

	{
		id: 9,
		question: "La responsabilitat penal del President i Ministres es regula a:",
		category: "legislacio",
		options: [
			{ key: "A", text: "Art. 108 CE.", correct: false },
			{ key: "B", text: "Art. 102 CE.", correct: true },
			{ key: "C", text: "Art. 106 CE.", correct: false },
			{ key: "D", text: "Art. 103 CE.", correct: false }
		],
		explanation:
			"Art. 102 CE: responsabilitat criminal del President i altres membres del Govern."
	},

	{
		id: 10,
		question: "El control judicial de l’activitat administrativa i dels reglaments s’estableix a:",
		category: "legislacio",
		options: [
			{ key: "A", text: "Art. 103 CE.", correct: false },
			{ key: "B", text: "Art. 106 CE.", correct: true },
			{ key: "C", text: "Art. 97 CE.", correct: false },
			{ key: "D", text: "Art. 98 CE.", correct: false }
		],
		explanation:
			"Art. 106 CE: tribunals controlen la legalitat de l’actuació administrativa i reglaments."
	},

	// 🟢 PREGUNTES DE CONTINGUT (11–20)

	{
		id: 11,
		question: "Quina és la idea central de l’art. 97 CE sobre el Govern?",
		category: "general",
		options: [
			{ key: "A", text: "És un òrgan judicial.", correct: false },
			{ key: "B", text: "És l’òrgan central de direcció política i executiva.", correct: true },
			{ key: "C", text: "És un òrgan legislatiu.", correct: false },
			{ key: "D", text: "És una estructura professional neutral.", correct: false }
		],
		explanation:
			"El Govern dirigeix política interior/exterior i l’Administració: és direcció política."
	},

	{
		id: 12,
		question: "La diferència clau entre Govern i Administració és:",
		category: "general",
		options: [
			{ key: "A", text: "Govern executa; Administració legisla.", correct: false },
			{ key: "B", text: "Govern dirigeix políticament; Administració executa professionalment.", correct: true },
			{ key: "C", text: "Administració és superior jeràrquicament al Govern.", correct: false },
			{ key: "D", text: "No hi ha diferència real.", correct: false }
		],
		explanation:
			"Govern = direcció política; Administració = estructura instrumental d’execució."
	},

	{
		id: 13,
		question: "La potestat reglamentària del Govern està limitada perquè:",
		category: "general",
		options: [
			{ key: "A", text: "Pot ser contrària a la llei si ho aprova el Congrés.", correct: false },
			{ key: "B", text: "No pot contradir la llei ni regular matèries reservades a llei.", correct: true },
			{ key: "C", text: "Només pot dictar reglaments si el Senat ho autoritza.", correct: false },
			{ key: "D", text: "Només pot dictar reglaments en temps d’emergència.", correct: false }
		],
		explanation:
			"Reglament inferior a la llei + reserva de llei."
	},

	{
		id: 14,
		question: "Les deliberacions del Consell de Ministres són:",
		category: "general",
		options: [
			{ key: "A", text: "Públiques per principi de transparència.", correct: false },
			{ key: "B", text: "Secretes.", correct: true },
			{ key: "C", text: "Publicades al BOE.", correct: false },
			{ key: "D", text: "Controlades pel Senat.", correct: false }
		],
		explanation:
			"El Consell de Ministres és òrgan col·legiat i les deliberacions són secretes."
	},

	{
		id: 15,
		question: "Els membres del Govern poden exercir altres activitats professionals o mercantils?",
		category: "general",
		options: [
			{ key: "A", text: "Sí, sempre.", correct: false },
			{ key: "B", text: "No, excepte el mandat parlamentari.", correct: true },
			{ key: "C", text: "Sí, si són activitats docents.", correct: false },
			{ key: "D", text: "Només si ho autoritza el President del Govern.", correct: false }
		],
		explanation:
			"Art. 98.3 CE: incompatibilitats, amb excepció del mandat parlamentari."
	},

	{
		id: 16,
		question: "El Govern cessa per totes aquestes causes EXCEPTE:",
		category: "general",
		options: [
			{ key: "A", text: "Eleccions generals.", correct: false },
			{ key: "B", text: "Moció de censura.", correct: false },
			{ key: "C", text: "Aprovació d’una llei orgànica.", correct: true },
			{ key: "D", text: "Dimissió o mort del President.", correct: false }
		],
		explanation:
			"Art. 101 CE: causes de cessament; aprovar una llei orgànica no és causa."
	},

	{
		id: 17,
		question: "Quina és la conseqüència de la pèrdua d’una qüestió de confiança?",
		category: "general",
		options: [
			{ key: "A", text: "El Govern queda reforçat.", correct: false },
			{ key: "B", text: "El Govern dimiteix.", correct: true },
			{ key: "C", text: "Es dissol automàticament el Senat.", correct: false },
			{ key: "D", text: "S’obre un referèndum obligatori.", correct: false }
		],
		explanation:
			"Art. 112 CE: si es perd la confiança, el Govern ha de dimitir."
	},

	{
		id: 18,
		question: "El principi de legalitat en l’actuació administrativa significa que:",
		category: "general",
		options: [
			{ key: "A", text: "L’Administració pot actuar sempre que sigui útil.", correct: false },
			{ key: "B", text: "L’Administració només pot actuar quan la llei ho permet.", correct: true },
			{ key: "C", text: "L’Administració pot crear lleis.", correct: false },
			{ key: "D", text: "El Govern no està sotmès a la llei.", correct: false }
		],
		explanation:
			"Art. 103.1 CE: sotmetiment ple a la llei i al dret."
	},

	{
		id: 19,
		question: "L’accés a la funció pública s’ha de basar en:",
		category: "general",
		options: [
			{ key: "A", text: "Antiguitat i confiança.", correct: false },
			{ key: "B", text: "Igualtat, mèrit i capacitat.", correct: true },
			{ key: "C", text: "Designació discrecional.", correct: false },
			{ key: "D", text: "Elecció popular.", correct: false }
		],
		explanation:
			"Art. 103.3 CE: accés segons igualtat, mèrit i capacitat."
	},

	{
		id: 20,
		question: "Els tribunals poden controlar:",
		category: "general",
		options: [
			{ key: "A", text: "Només els actes polítics del Govern.", correct: false },
			{ key: "B", text: "La legalitat dels reglaments i l’activitat administrativa.", correct: true },
			{ key: "C", text: "Només les lleis aprovades per les Corts.", correct: false },
			{ key: "D", text: "Només les decisions del Rei.", correct: false }
		],
		explanation:
			"Art. 106 CE: control judicial sobre reglaments i actuació administrativa."
	}

];

export default bloc1Tema1Punt15Ask;
