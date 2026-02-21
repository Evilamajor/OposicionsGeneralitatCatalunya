const punt16Ask = {
	id: 'tema1_punt16',
	tema: 1,
	punt: 16,
	titol: 'Poder judicial i principi d’independència judicial',
	total: 20,
	categories: {
		trampa: 5,
		legislacio: 5,
		relacionades: 10,
	},
	preguntes: [
		{
			id: 'T16_TR_01',
			tipus: 'trampa',
			enunciat: 'Qui integra el Poder Judicial en sentit estricte (jurisdiccional)?',
			opcions: [
				'El CGPJ i el Ministeri Fiscal',
				'Els jutges i magistrats',
				'El Tribunal Constitucional i el Tribunal Suprem',
				'El Govern i els tribunals militars',
			],
			correcta: 1,
			explicacio:
				'El Poder Judicial en sentit jurisdiccional l’integren únicament jutges i magistrats (art. 117 CE). El CGPJ governa administrativament però no jutja; el TC no forma part del Poder Judicial.',
		},
		{
			id: 'T16_TR_02',
			tipus: 'trampa',
			enunciat: 'L’afirmació “la justícia s’administra en nom del Rei” significa que:',
			opcions: [
				'El Rei pot revisar les sentències fermes',
				'El Rei dirigeix el CGPJ',
				'La funció jurisdiccional es realitza formalment en nom del Rei, però per jutges independents',
				'El Rei nomena i cessa lliurement jutges i magistrats',
			],
			correcta: 2,
			explicacio:
				'Segons l’art. 117.1 CE, la justícia s’administra en nom del Rei, però la potestat jurisdiccional correspon a jutges i tribunals sotmesos a l’imperi de la llei i independents.',
		},
		{
			id: 'T16_TR_03',
			tipus: 'trampa',
			enunciat: 'La independència interna implica que:',
			opcions: [
				'El Tribunal Suprem pot donar instruccions interpretatives obligatòries als tribunals inferiors',
				'Els tribunals superiors no poden donar ordres interpretatives als inferiors; només hi ha revisió via recursos',
				'El Govern pot emetre criteris interpretatius vinculants per a jutges',
				'Els jutges només són independents respecte del Parlament',
			],
			correcta: 1,
			explicacio:
				'Independència interna = absència d’instruccions interpretatives jeràrquiques entre òrgans judicials; la revisió és per recursos previstos legalment.',
		},
		{
			id: 'T16_TR_04',
			tipus: 'trampa',
			enunciat: 'Sobre el CGPJ, quina és la correcta?',
			opcions: [
				'És l’òrgan jurisdiccional superior de l’Estat',
				'Forma part del Poder Judicial i dicta sentències',
				'És l’òrgan de govern del Poder Judicial, però no exerceix funcions jurisdiccionals',
				'Depèn jeràrquicament del Govern',
			],
			correcta: 2,
			explicacio:
				'El CGPJ (art. 122 CE) governa administrativament el Poder Judicial (nomenaments, ascensos, inspecció, disciplina), però no jutja.',
		},
		{
			id: 'T16_TR_05',
			tipus: 'trampa',
			enunciat: 'La jurisdicció és única a tot l’Estat (art. 117.5 CE). Això vol dir que:',
			opcions: [
				'Els tribunals de les comunitats autònomes són òrgans propis i independents de l’Estat',
				'Només hi ha un Poder Judicial; els tribunals a les CCAA (p. ex. TSJ) són òrgans de l’Estat',
				'Cada comunitat autònoma pot crear tribunals d’excepció per matèries pròpies',
				'La jurisdicció militar pot actuar fora de l’àmbit castrense de manera general',
			],
			correcta: 1,
			explicacio:
				'Unitat jurisdiccional = un únic Poder Judicial per a tot l’Estat; els TSJ són òrgans judicials de l’Estat situats a les CCAA. Les excepcions són taxades (p. ex. militar limitada).',
		},
		{
			id: 'T16_LEG_01',
			tipus: 'legislacio',
			enunciat: 'Quin article de la Constitució estableix que “la justícia emana del poble” i que s’administra en nom del Rei?',
			opcions: ['Article 24 CE', 'Article 117.1 CE', 'Article 122 CE', 'Article 125 CE'],
			correcta: 1,
			explicacio: 'És literal de l’article 117.1 CE.',
		},
		{
			id: 'T16_LEG_02',
			tipus: 'legislacio',
			enunciat: 'On es recull el principi d’unitat jurisdiccional com a base de l’organització i funcionament dels tribunals?',
			opcions: ['Article 117.5 CE', 'Article 120.3 CE', 'Article 127 CE', 'Article 121 CE'],
			correcta: 0,
			explicacio: 'El principi d’unitat jurisdiccional s’estableix a l’article 117.5 CE.',
		},
		{
			id: 'T16_LEG_03',
			tipus: 'legislacio',
			enunciat: 'Quin precepte constitucional regula el Consell General del Poder Judicial (CGPJ)?',
			opcions: ['Article 122 CE', 'Article 120 CE', 'Article 121 CE', 'Article 125 CE'],
			correcta: 0,
			explicacio: 'El CGPJ està regulat a l’article 122 CE.',
		},
		{
			id: 'T16_LEG_04',
			tipus: 'legislacio',
			enunciat: 'Quin article constitucional preveu la indemnització per error judicial?',
			opcions: ['Article 121 CE', 'Article 117.2 CE', 'Article 120.1 CE', 'Article 24 CE'],
			correcta: 0,
			explicacio: 'La indemnització per error judicial es reconeix a l’article 121 CE.',
		},
		{
			id: 'T16_LEG_05',
			tipus: 'legislacio',
			enunciat: 'Quin article estableix les incompatibilitats polítiques i sindicals dels jutges (no pertànyer a partits ni sindicats)?',
			opcions: ['Article 127 CE', 'Article 125 CE', 'Article 122 CE', 'Article 117.6 CE'],
			correcta: 0,
			explicacio: 'Les incompatibilitats es recullen a l’article 127 CE.',
		},
		{
			id: 'T16_REL_01',
			tipus: 'relacionades',
			enunciat: 'Quines són les quatre característiques essencials dels jutges i magistrats segons el punt 16 (art. 117 CE)?',
			opcions: [
				'Independents, electes, jeràrquics, sotmesos al Govern',
				'Independents, inamovibles, responsables, sotmesos únicament a l’imperi de la llei',
				'Imparcials, inamovibles, immunes, sotmesos al Parlament',
				'Autònoms, jeràrquics, responsables, sotmesos al CGPJ',
			],
			correcta: 1,
			explicacio:
				'El punt 16 recull: independència, inamovibilitat, responsabilitat i submissió a l’imperi de la llei (art. 117 CE).',
		},
		{
			id: 'T16_REL_02',
			tipus: 'relacionades',
			enunciat: 'La independència judicial és sobretot:',
			opcions: [
				'Un privilegi corporatiu dels jutges',
				'Una garantia del ciutadà perquè el jutge pugui aplicar el dret sense pressions',
				'Una facultat del jutge per apartar-se de la llei',
				'Un mecanisme perquè el Govern controli el Poder Judicial',
			],
			correcta: 1,
			explicacio:
				'La independència no és un privilegi del jutge; és una garantia per al ciutadà (decisions sense pressions).',
		},
		{
			id: 'T16_REL_03',
			tipus: 'relacionades',
			enunciat: 'Quina afirmació descriu millor la independència externa?',
			opcions: [
				'Els tribunals superiors poden ordenar com interpretar la llei als inferiors',
				'El jutge no pot rebre ordres del Govern ni del Parlament; el seu estatut no depèn de l’Executiu',
				'El jutge només és independent quan jutja delictes, no en l’àmbit civil',
				'El CGPJ pot dictar sentències per garantir la independència',
			],
			correcta: 1,
			explicacio:
				'Independència externa = absència d’ordres del Govern/Parlament i gestió de l’estatut fora de l’Executiu; govern dels jutges via CGPJ.',
		},
		{
			id: 'T16_REL_04',
			tipus: 'relacionades',
			enunciat: 'Quina és la funció principal del CGPJ segons el punt 16?',
			opcions: [
				'Jutjar i fer executar allò jutjat',
				'Controlar la constitucionalitat de les lleis',
				'Govern administratiu del Poder Judicial (nomenaments, ascensos, inspecció, disciplina)',
				'Dirigir la política de justícia del Govern',
			],
			correcta: 2,
			explicacio:
				'El CGPJ governa administrativament el Poder Judicial: nomenaments, ascensos, inspecció i règim disciplinari (art. 122 CE).',
		},
		{
			id: 'T16_REL_05',
			tipus: 'relacionades',
			enunciat: 'La inamovibilitat judicial comporta que els jutges i magistrats:',
			opcions: [
				'Poden ser traslladats per decisió discrecional del Govern',
				'No poden ser cessats, traslladats o suspesos si no és per causes legals',
				'Només poden ser cessats per decisió del Parlament',
				'Poden ser suspesos per ordres del tribunal superior sense base legal',
			],
			correcta: 1,
			explicacio:
				'La inamovibilitat (art. 117.2 CE) protegeix la independència: cessament/trasllat/suspensió només per causes legals.',
		},
		{
			id: 'T16_REL_06',
			tipus: 'relacionades',
			enunciat: 'Què significa l’exclusivitat jurisdiccional (art. 117.3 CE)?',
			opcions: [
				'Només el Govern pot executar les sentències',
				'Només jutges i tribunals poden jutjar i fer executar allò jutjat',
				'El CGPJ pot substituir jutges en procediments concrets',
				'Els tribunals d’excepció són possibles en casos d’urgència',
			],
			correcta: 1,
			explicacio:
				'Exclusivitat jurisdiccional: la potestat de jutjar i executar el jutjat correspon només a jutges i tribunals (art. 117.3 CE).',
		},
		{
			id: 'T16_REL_07',
			tipus: 'relacionades',
			enunciat: 'La prohibició de tribunals d’excepció (art. 117.6 CE) implica que:',
			opcions: [
				'Es poden crear tribunals especials per a un cas concret si ho aprova el Govern',
				'No es poden crear tribunals especials ad hoc per a casos concrets',
				'Els tribunals militars poden jutjar qualsevol persona en temps de pau',
				'Les comissions parlamentàries poden imposar penes disciplinàries',
			],
			correcta: 1,
			explicacio:
				'L’art. 117.6 CE prohibeix tribunals d’excepció: res d’òrgans creats “a mida” per a un cas concret.',
		},
		{
			id: 'T16_REL_08',
			tipus: 'relacionades',
			enunciat: 'Quines són excepcions constitucionals al principi d’unitat jurisdiccional segons el punt 16?',
			opcions: [
				'Tribunals d’excepció i tribunals polítics',
				'Jurisdicció militar (àmbit castrense), tribunals consuetudinaris (art. 125 CE) i jurat en certs processos',
				'Arbitratge privat i comitès administratius sancionadors',
				'Tribunals autonòmics propis amb jurisdicció plena',
			],
			correcta: 1,
			explicacio:
				'El punt 16 recull excepcions: jurisdicció militar (limitada), tribunals consuetudinaris (art. 125 CE) i jurat en determinats processos.',
		},
		{
			id: 'T16_REL_09',
			tipus: 'relacionades',
			enunciat: 'Quina afirmació és correcta sobre tutela judicial efectiva (art. 24 CE) segons el punt 16?',
			opcions: [
				'Garanteix sempre una resolució favorable',
				'Implica obtenir una resolució motivada, encara que no sigui favorable, i prohibeix la indefensió',
				'Només s’aplica al procés penal',
				'Permet que les sentències siguin secretes per defecte',
			],
			correcta: 1,
			explicacio:
				'La tutela judicial efectiva (art. 24 CE) comporta resolució motivada i prohibició d’indefensió; no assegura el guany.',
		},
		{
			id: 'T16_REL_10',
			tipus: 'relacionades',
			enunciat: 'Diferència clau entre Poder Judicial i Tribunal Constitucional (segons el punt 16):',
			opcions: [
				'Tots dos formen part del Poder Judicial',
				'El Poder Judicial jutja i executa; el TC controla la constitucionalitat i NO forma part del Poder Judicial',
				'El TC governa el Poder Judicial mitjançant el CGPJ',
				'El Poder Judicial només interpreta la Constitució i el TC només aplica lleis ordinàries',
			],
			correcta: 1,
			explicacio:
				'El Poder Judicial (arts. 117–127 CE) jutja i executa; el Tribunal Constitucional (Títol IX CE) controla constitucionalitat i no integra el Poder Judicial.',
		},
	],
};

const optionKeys = ['A', 'B', 'C', 'D', 'E'];

const bloc1Tema1Punt16Ask = punt16Ask.preguntes.map((item, index) => ({
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

export default bloc1Tema1Punt16Ask;
export { punt16Ask };
