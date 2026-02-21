const punt18Ask = {
	id: 'tema1_punt18',
	tema: 1,
	punt: 18,
	titol: 'Recurs d’inconstitucionalitat i qüestió d’inconstitucionalitat',
	total: 20,
	categories: {
		trampa: 5,
		legislacio: 5,
		relacionades: 10,
	},
	preguntes: [
		{
			id: 'T18_TR_01',
			tipus: 'trampa',
			enunciat: 'Pot un ciutadà interposar recurs d’inconstitucionalitat contra una llei?',
			opcions: [
				'Sí, si acredita interès legítim',
				'No, el recurs d’inconstitucionalitat està reservat a subjectes legitimats; el ciutadà pot acudir, si escau, a l’empara per drets fonamentals',
				'Sí, amb 500.000 signatures',
				'Sí, davant el Tribunal Suprem',
			],
			correcta: 1,
			explicacio:
				'Trampa típica: confondre recurs d’inconstitucionalitat amb empara. El recurs té legitimació tasada (art. 162.1.a CE).',
		},
		{
			id: 'T18_TR_02',
			tipus: 'trampa',
			enunciat: 'La diferència essencial entre recurs i qüestió d’inconstitucionalitat és que:',
			opcions: [
				'El recurs és contra lleis estatals i la qüestió contra lleis autonòmiques',
				'El recurs és control abstracte i directe; la qüestió és control concret i indirecte dins d’un procés',
				'La qüestió només pot afectar lleis orgàniques',
				'No hi ha diferència real',
			],
			correcta: 1,
			explicacio:
				'L’objecte (normes amb rang de llei) pot coincidir, però canvia la naturalesa i la via d’accés: abstracte/directe vs concret/indirecte.',
		},
		{
			id: 'T18_TR_03',
			tipus: 'trampa',
			enunciat: 'Si el Govern d’una comunitat autònoma impugna una llei estatal, què passa amb la vigència de la llei impugnada?',
			opcions: [
				'Se suspèn automàticament durant 5 mesos',
				'Se suspèn automàticament fins que el TC dicti sentència',
				'Continua vigent fins a la sentència del TC',
				'Se suspèn si ho aprova el Senat per majoria absoluta',
			],
			correcta: 2,
			explicacio:
				'La suspensió automàtica de l’art. 161.2 CE s’activa només quan el Govern de l’Estat impugna normes autonòmiques, no a la inversa.',
		},
		{
			id: 'T18_TR_04',
			tipus: 'trampa',
			enunciat: 'Qui pot plantejar una qüestió d’inconstitucionalitat?',
			opcions: [
				'Qualsevol part del procés mitjançant escrit directe al TC',
				'El Defensor del Poble',
				'Només jutges i tribunals; les parts poden sol·licitar-ho però no decidir-ho',
				'El Parlament mitjançant acord',
			],
			correcta: 2,
			explicacio:
				'Les parts poden instar-ho, però la decisió de plantejar-la és sempre del jutge o tribunal (art. 163 CE).',
		},
		{
			id: 'T18_TR_05',
			tipus: 'trampa',
			enunciat: 'Quan s’interposa una qüestió d’inconstitucionalitat, el procediment judicial principal:',
			opcions: [
				'Continua amb normalitat fins a sentència, i després el TC decideix',
				'Queda suspès fins que resolgui el Tribunal Constitucional',
				'S’arxiva definitivament',
				'S’envia automàticament al Tribunal Suprem',
			],
			correcta: 1,
			explicacio:
				'Un cop plantejada la qüestió, el procés judicial queda suspès fins a la resolució del TC (control concret dins d’un procés).',
		},
		{
			id: 'T18_LEG_01',
			tipus: 'legislacio',
			enunciat: 'Quin article de la CE atribueix al TC el recurs d’inconstitucionalitat (control abstracte) com a competència?',
			opcions: ['Art. 161.1.a CE', 'Art. 163 CE', 'Art. 162.1.a CE', 'Art. 164 CE'],
			correcta: 0,
			explicacio: 'El recurs d’inconstitucionalitat s’emmarca a l’art. 161.1.a CE.',
		},
		{
			id: 'T18_LEG_02',
			tipus: 'legislacio',
			enunciat: 'Quin article regula la legitimació per interposar recurs d’inconstitucionalitat (President del Govern, Defensor del Poble, 50 diputats, 50 senadors, etc.)?',
			opcions: ['Art. 162.1.a CE', 'Art. 161.2 CE', 'Art. 53.2 CE', 'Art. 159 CE'],
			correcta: 0,
			explicacio: 'La legitimació activa del recurs és a l’art. 162.1.a CE.',
		},
		{
			id: 'T18_LEG_03',
			tipus: 'legislacio',
			enunciat: 'Quin article constitucional regula la qüestió d’inconstitucionalitat plantejada per jutges i tribunals?',
			opcions: ['Art. 163 CE', 'Art. 164 CE', 'Art. 161.1.a CE', 'Art. 162.1.a CE'],
			correcta: 0,
			explicacio: 'La qüestió d’inconstitucionalitat es regula a l’art. 163 CE.',
		},
		{
			id: 'T18_LEG_04',
			tipus: 'legislacio',
			enunciat: 'Quin article estableix els efectes generals (erga omnes) i la cosa jutjada de les sentències del TC?',
			opcions: ['Art. 164 CE', 'Art. 161.2 CE', 'Art. 95 CE', 'Art. 117.5 CE'],
			correcta: 0,
			explicacio: 'Els efectes de les sentències del TC s’emmarquen a l’art. 164 CE.',
		},
		{
			id: 'T18_LEG_05',
			tipus: 'legislacio',
			enunciat: 'Quin article preveu la suspensió automàtica de disposicions autonòmiques impugnades quan el Govern invoca aquest precepte?',
			opcions: ['Art. 161.2 CE', 'Art. 162.1.a CE', 'Art. 163 CE', 'Art. 164 CE'],
			correcta: 0,
			explicacio: 'La suspensió automàtica temporal s’associa a l’art. 161.2 CE.',
		},
		{
			id: 'T18_REL_01',
			tipus: 'relacionades',
			enunciat: 'En el model espanyol de justícia constitucional, qui té el monopoli per declarar la inconstitucionalitat d’una llei?',
			opcions: [
				'Qualsevol jutge, si aprecia contradicció amb la CE',
				'El Tribunal Suprem',
				'El Tribunal Constitucional',
				'El Congrés dels Diputats per majoria absoluta',
			],
			correcta: 2,
			explicacio:
				'Model concentrat: només el TC pot declarar la inconstitucionalitat de normes amb rang de llei.',
		},
		{
			id: 'T18_REL_02',
			tipus: 'relacionades',
			enunciat: 'Per què es diu que el TC actua com a “legislador negatiu”?',
			opcions: [
				'Perquè redacta lleis noves quan en falten',
				'Perquè crea normes reglamentàries per executar la Constitució',
				'Perquè no crea lleis, però pot expulsar-les de l’ordenament si vulneren la Constitució',
				'Perquè dirigeix la política legislativa del Govern',
			],
			correcta: 2,
			explicacio:
				'El TC no legisla; depura l’ordenament anul·lant o expulsant normes contràries a la CE.',
		},
		{
			id: 'T18_REL_03',
			tipus: 'relacionades',
			enunciat: 'El recurs d’inconstitucionalitat és:',
			opcions: [
				'Control concret i indirecte dins d’un procés',
				'Control abstracte i directe, sense necessitat de cas judicial',
				'Un recurs contra sentències del Tribunal Suprem',
				'Un recurs que només pot presentar un ciutadà si acredita interès legítim',
			],
			correcta: 1,
			explicacio:
				'Recurs = control abstracte i directe de la norma en si mateixa, sense cas concret.',
		},
		{
			id: 'T18_REL_04',
			tipus: 'relacionades',
			enunciat: 'Quin és l’element clau de la qüestió d’inconstitucionalitat que NO exigeix el recurs?',
			opcions: [
				'Que sigui contra una norma amb rang de llei',
				'Que existeixi un procés judicial i la norma sigui aplicable al cas',
				'Que la norma sigui publicada al BOE',
				'Que la impugnació la faci el Defensor del Poble',
			],
			correcta: 1,
			explicacio:
				'La qüestió sorgeix en un procés: norma aplicable al cas i rellevant per resoldre’l (control concret).',
		},
		{
			id: 'T18_REL_05',
			tipus: 'relacionades',
			enunciat: 'Objecte del recurs d’inconstitucionalitat (segons el punt 18):',
			opcions: [
				'Només lleis orgàniques',
				'Només estatuts d’autonomia',
				'Normes amb rang de llei (entre d’altres: estatuts, lleis orgàniques/ordinàries, decrets llei, decrets legislatius, reglaments parlamentaris, tractats)',
				'Només reglaments administratius',
			],
			correcta: 2,
			explicacio:
				'El punt 18 inclou un ventall d’objectes impugnables, tots amb rang o valor normatiu rellevant (incloent reglaments parlamentaris i tractats).',
		},
		{
			id: 'T18_REL_06',
			tipus: 'relacionades',
			enunciat: 'Termini general per interposar recurs d’inconstitucionalitat i possible ampliació (segons el punt 18):',
			opcions: [
				'1 mes; ampliable a 3 mesos',
				'3 mesos; ampliable a 9 mesos si hi ha negociació Estat-CA (art. 33.2 LOTC)',
				'6 mesos; ampliable a 12 mesos',
				'No hi ha termini',
			],
			correcta: 1,
			explicacio:
				'Termini: 3 mesos des de la publicació; ampliable a 9 mesos si hi ha negociació Estat-CA (art. 33.2 LOTC).',
		},
		{
			id: 'T18_REL_07',
			tipus: 'relacionades',
			enunciat: 'Requisits acumulatius típics per plantejar una qüestió d’inconstitucionalitat (segons el punt 18):',
			opcions: [
				'Norma reglamentària; interès legítim; informe del Congrés',
				'Norma amb rang de llei; aplicable al cas; validesa determinant (judici de rellevància); audiència prèvia de parts i Ministeri Fiscal',
				'Que la norma sigui estatal; que hi hagi 50 diputats; que es presenti en 3 mesos',
				'Que el TC ho autoritzi prèviament abans de sentir les parts',
			],
			correcta: 1,
			explicacio:
				'La qüestió exigeix rang de llei, aplicabilitat i judici de rellevància, amb audiència prèvia de parts i Ministeri Fiscal.',
		},
		{
			id: 'T18_REL_08',
			tipus: 'relacionades',
			enunciat: 'Què és el “judici de rellevància” en la qüestió d’inconstitucionalitat?',
			opcions: [
				'Que la norma sigui important políticament',
				'Que la validesa de la norma sigui determinant per a la sentència del cas concret',
				'Que la norma tingui rang constitucional',
				'Que la norma afecti almenys 3 comunitats autònomes',
			],
			correcta: 1,
			explicacio:
				'És requisit essencial: la norma ha de ser decisiva per resoldre el litigi.',
		},
		{
			id: 'T18_REL_09',
			tipus: 'relacionades',
			enunciat: 'Efectes generals de les sentències del TC en matèria de constitucionalitat:',
			opcions: [
				'Només afecten el procés on s’han dictat (inter partes)',
				'Tenen eficàcia erga omnes i vinculen tots els poders públics',
				'Són recurribles davant el Tribunal Suprem',
				'Només vinculen el Govern de l’Estat',
			],
			correcta: 1,
			explicacio:
				'Les sentències del TC tenen efectes generals (erga omnes) i valor de cosa jutjada.',
		},
		{
			id: 'T18_REL_10',
			tipus: 'relacionades',
			enunciat: 'Com a regla general, la declaració d’inconstitucionalitat d’una llei:',
			opcions: [
				'Anul·la automàticament totes les sentències fermes anteriors',
				'No comporta revisió general de sentències fermes; excepció: penal o sancionadora si beneficia el condemnat/sancionat',
				'Reobre sempre tots els procediments administratius finalitzats',
				'Només produeix efectes després d’un referèndum',
			],
			correcta: 1,
			explicacio:
				'Regla: no revisió general de sentències fermes; excepció indicada: penal o sancionadora quan beneficia el condemnat.',
		},
	],
};

const optionKeys = ['A', 'B', 'C', 'D', 'E'];

const bloc1Tema1Punt18Ask = punt18Ask.preguntes.map((item, index) => ({
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

export default bloc1Tema1Punt18Ask;
export { punt18Ask };
