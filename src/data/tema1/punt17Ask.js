const punt17Ask = {
	id: 'tema1_punt17',
	tema: 1,
	punt: 17,
	titol: 'Tribunal Constitucional: composició i competències',
	total: 20,
	categories: {
		trampa: 5,
		legislacio: 5,
		relacionades: 10,
	},
	preguntes: [
		{
			id: 'T17_TR_01',
			tipus: 'trampa',
			enunciat: 'El Tribunal Constitucional (TC):',
			opcions: [
				'Forma part del Poder Judicial i és el seu òrgan superior',
				'És un òrgan constitucional independent que controla la constitucionalitat de les lleis',
				'Depèn jeràrquicament del Congrés dels Diputats',
				'És una sala especial del Tribunal Suprem',
			],
			correcta: 1,
			explicacio:
				'El TC és un òrgan constitucional independent i NO forma part del Poder Judicial. Controla la conformitat de les lleis amb la Constitució (justícia constitucional concentrada).',
		},
		{
			id: 'T17_TR_02',
			tipus: 'trampa',
			enunciat: 'Qui pot plantejar una qüestió d’inconstitucionalitat?',
			opcions: [
				'Qualsevol ciutadà directament davant el TC',
				'El Defensor del Poble, sense procés previ',
				'Un jutge o tribunal, en un cas concret, quan una norma amb rang de llei sigui aplicable i en dubti la constitucionalitat',
				'El Govern autonòmic mitjançant recurs d’empara',
			],
			correcta: 2,
			explicacio:
				'La qüestió d’inconstitucionalitat (art. 163 CE) només la pot plantejar un jutge o tribunal en el marc d’un procés, si la norma és rellevant per resoldre el cas.',
		},
		{
			id: 'T17_TR_03',
			tipus: 'trampa',
			enunciat: 'El recurs d’empara davant el TC és procedent quan:',
			opcions: [
				'S’ha vulnerat qualsevol dret reconegut a la Constitució, inclosos els principis rectors (capítol III)',
				'S’ha vulnerat un dret dels arts. 14 a 29 CE o l’objecció de consciència (30.2 CE), i s’ha esgotat prèviament la via judicial ordinària',
				'Hi ha un desacord amb una sentència, encara que no s’hagi al·legat cap dret fonamental',
				'Es vol impugnar una llei en abstracte sense legitimació especial',
			],
			correcta: 1,
			explicacio:
				'L’empara (art. 53.2 CE) protegeix drets fonamentals dels arts. 14–29 i l’art. 30.2 CE. És subsidiari: cal esgotar la via judicial ordinària.',
		},
		{
			id: 'T17_TR_04',
			tipus: 'trampa',
			enunciat: 'Sobre la composició del TC (art. 159 CE), és correcte afirmar que:',
			opcions: [
				'Té 15 magistrats i es renova íntegrament cada 9 anys',
				'Té 12 magistrats i es renova parcialment: 4 cada 3 anys',
				'Té 12 magistrats i es renova parcialment: 6 cada 3 anys',
				'Té 12 magistrats i el mandat és de 6 anys',
			],
			correcta: 1,
			explicacio:
				'El TC està format per 12 magistrats amb mandat de 9 anys i renovació parcial per terceres parts: 4 cada 3 anys.',
		},
		{
			id: 'T17_TR_05',
			tipus: 'trampa',
			enunciat: 'La invocació de l’art. 161.2 CE per part del Govern en impugnar una disposició autonòmica implica:',
			opcions: [
				'L’anul·lació definitiva automàtica de la norma autonòmica',
				'La suspensió automàtica temporal de la norma impugnada, com a màxim durant 5 mesos',
				'Cap efecte suspensiu fins que el TC dicti sentència',
				'La conversió automàtica del recurs en recurs d’empara',
			],
			correcta: 1,
			explicacio:
				'L’art. 161.2 CE preveu la suspensió automàtica de la norma autonòmica impugnada quan el Govern ho invoca; és temporal (màxim 5 mesos).',
		},
		{
			id: 'T17_LEG_01',
			tipus: 'legislacio',
			enunciat: 'Quin article de la CE fixa la composició del Tribunal Constitucional (nombre de magistrats, designació i mandat)?',
			opcions: ['Art. 159 CE', 'Art. 163 CE', 'Art. 161.2 CE', 'Art. 53.2 CE'],
			correcta: 0,
			explicacio: 'La composició del TC es regula a l’art. 159 CE.',
		},
		{
			id: 'T17_LEG_02',
			tipus: 'legislacio',
			enunciat: 'Quin precepte constitucional regula el recurs d’inconstitucionalitat com a competència del TC?',
			opcions: ['Art. 161.1.a CE', 'Art. 120.3 CE', 'Art. 117.3 CE', 'Art. 95 CE'],
			correcta: 0,
			explicacio: 'El recurs d’inconstitucionalitat s’emmarca a l’art. 161.1.a CE (control abstracte).',
		},
		{
			id: 'T17_LEG_03',
			tipus: 'legislacio',
			enunciat: 'Quin article regula la qüestió d’inconstitucionalitat plantejada per jutges i tribunals?',
			opcions: ['Art. 163 CE', 'Art. 159 CE', 'Art. 161.2 CE', 'Art. 121 CE'],
			correcta: 0,
			explicacio: 'La qüestió d’inconstitucionalitat és a l’art. 163 CE.',
		},
		{
			id: 'T17_LEG_04',
			tipus: 'legislacio',
			enunciat: 'Quin article estableix el recurs d’empara constitucional per a la tutela dels drets fonamentals?',
			opcions: ['Art. 53.2 CE', 'Art. 117.5 CE', 'Art. 122 CE', 'Art. 125 CE'],
			correcta: 0,
			explicacio: 'El recurs d’empara s’emmarca a l’art. 53.2 CE.',
		},
		{
			id: 'T17_LEG_05',
			tipus: 'legislacio',
			enunciat: 'Quin article preveu el control previ de tractats internacionals pel Tribunal Constitucional?',
			opcions: ['Art. 95 CE', 'Art. 94 CE', 'Art. 24 CE', 'Art. 120.1 CE'],
			correcta: 0,
			explicacio: 'El control previ de tractats internacionals s’associa a l’art. 95 CE.',
		},
		{
			id: 'T17_REL_01',
			tipus: 'relacionades',
			enunciat: 'Quina és la funció essencial del TC dins el model europeu de justícia constitucional concentrada?',
			opcions: [
				'Aplicar les lleis a casos concrets com a òrgan de cassació',
				'Declarar la inconstitucionalitat de les lleis i garantir la supremacia de la Constitució',
				'Dirigir el govern dels jutges a través del CGPJ',
				'Executar les sentències dels tribunals ordinaris',
			],
			correcta: 1,
			explicacio:
				'Model concentrat: només el TC pot declarar la inconstitucionalitat de les lleis; garanteix la supremacia constitucional.',
		},
		{
			id: 'T17_REL_02',
			tipus: 'relacionades',
			enunciat: 'Segons la LOTC (art. 1), el TC és:',
			opcions: [
				'L’òrgan superior del Poder Judicial',
				'Una sala especial del Tribunal Suprem',
				'L’intèrpret suprem de la Constitució',
				'Un òrgan dependent del Govern',
			],
			correcta: 2,
			explicacio: 'La LOTC defineix el TC com a intèrpret suprem de la Constitució (art. 1 LOTC).',
		},
		{
			id: 'T17_REL_03',
			tipus: 'relacionades',
			enunciat: 'Els magistrats del TC han de ser:',
			opcions: [
				'Funcionaris del Cos Superior d’Administració amb 10 anys d’antiguitat',
				'Juristes de reconeguda competència amb més de 15 anys d’exercici professional',
				'Membres del CGPJ en actiu',
				'Magistrats de carrera amb qualsevol antiguitat',
			],
			correcta: 1,
			explicacio:
				'Requisit: juristes de reconeguda competència amb més de 15 anys d’exercici.',
		},
		{
			id: 'T17_REL_04',
			tipus: 'relacionades',
			enunciat: 'Sistema de designació del TC (art. 159 CE): quina combinació és correcta?',
			opcions: [
				'4 Govern, 4 CGPJ, 2 Congrés, 2 Senat',
				'4 Congrés (3/5), 4 Senat (3/5), 2 Govern, 2 CGPJ (3/5)',
				'6 Congrés (majoria simple) i 6 Senat (majoria simple)',
				'12 designats directament pel Rei sense proposta',
			],
			correcta: 1,
			explicacio:
				'Art. 159 CE: 4 Congrés (3/5), 4 Senat (3/5), 2 Govern, 2 CGPJ (3/5); nomenament pel Rei.',
		},
		{
			id: 'T17_REL_05',
			tipus: 'relacionades',
			enunciat: 'Què diferencia principalment el control del TC del control dels jutges ordinaris?',
			opcions: [
				'Els jutges ordinaris poden anul·lar lleis amb efectes generals',
				'El TC controla la constitucionalitat de normes; els jutges ordinaris jutgen casos i apliquen la llei',
				'El TC jutja delictes i el TS només resol recursos',
				'El TC és un òrgan jeràrquic superior que dona instruccions interpretatives als jutges',
			],
			correcta: 1,
			explicacio:
				'El TC no jutja persones ni aplica lleis a casos concrets; controla la conformitat de normes amb la CE.',
		},
		{
			id: 'T17_REL_06',
			tipus: 'relacionades',
			enunciat: 'El recurs d’inconstitucionalitat es caracteritza per:',
			opcions: [
				'Ser sempre plantejat per un jutge en un procediment concret',
				'Ser un control abstracte de lleis (sense cas concret), amb legitimació restringida',
				'Ser un recurs obert a qualsevol ciutadà sense requisits',
				'Ser un recurs contra sentències del Tribunal Suprem',
			],
			correcta: 1,
			explicacio:
				'Recurs d’inconstitucionalitat (art. 161.1.a CE): control abstracte de normes amb rang de llei i legitimació tasada.',
		},
		{
			id: 'T17_REL_07',
			tipus: 'relacionades',
			enunciat: 'Qui està legitimat per interposar recurs d’inconstitucionalitat (segons el punt 17)?',
			opcions: [
				'Qualsevol persona física o jurídica',
				'President del Govern, Defensor del Poble, 50 diputats, 50 senadors, governs i parlaments autonòmics',
				'Només el Tribunal Suprem',
				'Només el Congrés i el Senat per majoria simple',
			],
			correcta: 1,
			explicacio:
				'Legitimació: President del Govern, Defensor del Poble, 50 diputats, 50 senadors, govern autonòmic i parlament autonòmic.',
		},
		{
			id: 'T17_REL_08',
			tipus: 'relacionades',
			enunciat: 'Efectes típics de les sentències del TC (segons el punt 17):',
			opcions: [
				'Només afecten les parts del procés (efectes inter partes) i són recurribles',
				'Tenen valor de cosa jutjada, efectes generals (erga omnes) i no són recurribles',
				'Són recomanacions sense força vinculant',
				'Només vinculen el Govern però no els jutges',
			],
			correcta: 1,
			explicacio:
				'Sentències del TC: cosa jutjada, efectes generals (erga omnes), no recurribles; vinculen tots els poders públics.',
		},
		{
			id: 'T17_REL_09',
			tipus: 'relacionades',
			enunciat: 'Com a regla general, la declaració d’inconstitucionalitat d’una llei:',
			opcions: [
				'Revisa automàticament totes les sentències fermes dictades aplicant aquella llei',
				'No revisa, en principi, sentències fermes, excepte (segons el punt 17) en matèria penal o sancionadora si beneficia el condemnat',
				'Reobre sempre tots els procediments administratius tancats',
				'Només produeix efectes a partir d’un referèndum',
			],
			correcta: 1,
			explicacio:
				'Regla: no revisió de sentències fermes; excepció indicada: penal o sancionadora quan beneficia el condemnat/sancionat.',
		},
		{
			id: 'T17_REL_10',
			tipus: 'relacionades',
			enunciat: 'TC vs Tribunal Suprem: quina comparació és correcta?',
			opcions: [
				'El TC aplica lleis a casos concrets i el TS controla la constitucionalitat',
				'El TC és “legislador negatiu” (expulsa normes inconstitucionals) i el TS unifica doctrina i resol cassació',
				'El TC és l’òrgan superior del Poder Judicial i el TS no',
				'El TS no forma part del Poder Judicial i el TC sí',
			],
			correcta: 1,
			explicacio:
				'El TC controla constitucionalitat (legislador negatiu). El TS és òrgan superior del Poder Judicial i unifica doctrina via cassació.',
		},
	],
};

const optionKeys = ['A', 'B', 'C', 'D', 'E'];

const bloc1Tema1Punt17Ask = punt17Ask.preguntes.map((item, index) => ({
	id: index + 1,
	question: item.enunciat,
	category: item.tipus,
	options: item.opcions.map((text, optionIndex) => ({
		key: optionKeys[optionIndex] || String(optionIndex + 1),
		text,
		correct: optionIndex === item.correcta,
	})),
	explanation: item.explicacio,
}));

export default bloc1Tema1Punt17Ask;
export { punt17Ask };
