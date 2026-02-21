const punt24Ask = {
	id: 'tema1_punt24',
	tema: 1,
	punt: 24,
	titol: 'Constitucionalisme multinivell i reptes actuals',
	total: 20,
	categories: {
		trampa: 5,
		legislacio: 5,
		relacionades: 10,
	},
	preguntes: [
		{
			id: 'T24_TR_01',
			tipus: 'trampa',
			enunciat:
				'En el constitucionalisme multinivell, la primacia del dret de la UE implica:',
			opcions: [
				'Que la Constitució deixa de ser la norma suprema',
				'Que el dret europeu s’aplica preferentment en competències cedides',
				'Que els Estatuts estan per sobre de la CE',
				'Que el TJUE controla la constitucionalitat interna espanyola',
			],
			correcta: 1,
			explicacio:
				'Trampa clàssica: primacia no és supremacia. El dret UE preval en l’àmbit de competències cedides, però la CE continua sent la norma suprema.',
		},
		{
			id: 'T24_TR_02',
			tipus: 'trampa',
			enunciat:
				'Les Comunitats Autònomes, en el model multinivell, tenen:',
			opcions: [
				'Sobirania pròpia dins el seu territori',
				'Autonomia política però no sobirania',
				'Cap competència normativa pròpia',
				'Competència per reformar la Constitució unilateralment',
			],
			correcta: 1,
			explicacio:
				'Trampa: autonomia no equival a sobirania. La sobirania resideix en el poble espanyol (art. 1.2 CE).',
		},
		{
			id: 'T24_TR_03',
			tipus: 'trampa',
			enunciat:
				'El constitucionalisme multinivell suposa:',
			opcions: [
				'Una jerarquia rígida en forma de piràmide estricta',
				'La desaparició del Tribunal Constitucional',
				'Un sistema basat en el principi de competència entre nivells',
				'La subordinació automàtica del TC al TJUE',
			],
			correcta: 2,
			explicacio:
				'No és una piràmide rígida, sinó un sistema basat en competència i cooperació entre nivells.',
		},
		{
			id: 'T24_TR_04',
			tipus: 'trampa',
			enunciat:
				'En cas de conflicte entre el TC i el TJUE, el sistema es basa en:',
			opcions: [
				'Subordinació absoluta del TC al TJUE',
				'Subordinació del TJUE al TC',
				'Cooperació i diàleg judicial',
				'Intervenció obligatòria del Govern',
			],
			correcta: 2,
			explicacio:
				'El model multinivell es fonamenta en cooperació i diàleg judicial, no en subordinació jeràrquica.',
		},
		{
			id: 'T24_TR_05',
			tipus: 'trampa',
			enunciat:
				'Segons el model multinivell, els Estatuts d’Autonomia:',
			opcions: [
				'Són superiors a la Constitució en el seu territori',
				'No formen part del bloc de constitucionalitat',
				'Són normes institucionals bàsiques subordinades a la CE',
				'Tenen el mateix rang que la CE',
			],
			correcta: 2,
			explicacio:
				'Trampa: els Estatuts formen part del bloc de constitucionalitat però estan subordinats a la Constitució.',
		},
		{
			id: 'T24_LEG_01',
			tipus: 'legislacio',
			enunciat:
				'Quin article estableix que la Constitució és la norma suprema i vincula tots els poders públics?',
			opcions: ['Art. 9.1 CE', 'Art. 10.2 CE', 'Art. 93 CE', 'Art. 1.2 CE'],
			correcta: 0,
			explicacio:
				'Art. 9.1 CE: ciutadans i poders públics estan subjectes a la Constitució i a la resta de l’ordenament.',
		},
		{
			id: 'T24_LEG_02',
			tipus: 'legislacio',
			enunciat:
				'Quin article obliga a interpretar els drets fonamentals conforme als tractats internacionals?',
			opcions: ['Art. 10.2 CE', 'Art. 1.1 CE', 'Art. 93 CE', 'Art. 18.4 CE'],
			correcta: 0,
			explicacio:
				'Art. 10.2 CE: interpretació conforme als tractats internacionals sobre drets humans.',
		},
		{
			id: 'T24_LEG_03',
			tipus: 'legislacio',
			enunciat:
				'Quin article estableix que la sobirania nacional resideix en el poble espanyol?',
			opcions: ['Art. 1.2 CE', 'Art. 9.1 CE', 'Art. 93 CE', 'Art. 168 CE'],
			correcta: 0,
			explicacio: 'La sobirania resideix en el poble espanyol (art. 1.2 CE).',
		},
		{
			id: 'T24_LEG_04',
			tipus: 'legislacio',
			enunciat:
				'Quin article permet la cessió de l’exercici de competències a la UE?',
			opcions: ['Art. 93 CE', 'Art. 95 CE', 'Art. 167 CE', 'Art. 124 CE'],
			correcta: 0,
			explicacio:
				'L’art. 93 CE és la base de la integració europea i la cessió d’exercici de competències.',
		},
		{
			id: 'T24_LEG_05',
			tipus: 'legislacio',
			enunciat:
				'Quin article obliga a limitar l’ús de la informàtica per protegir l’honor i la intimitat?',
			opcions: ['Art. 18.4 CE', 'Art. 14 CE', 'Art. 24 CE', 'Art. 116 CE'],
			correcta: 0,
			explicacio:
				'Art. 18.4 CE: límits a l’ús de la informàtica per garantir honor i intimitat.',
		},
		{
			id: 'T24_REL_01',
			tipus: 'relacionades',
			enunciat:
				'Quins són els tres nivells principals del constitucionalisme multinivell espanyol?',
			opcions: [
				'Estatal, provincial i municipal',
				'Estatal, europeu i autonòmic',
				'Europeu, internacional i local',
				'Només estatal i europeu',
			],
			correcta: 1,
			explicacio:
				'El model espanyol integra nivell constitucional estatal, europeu i autonòmic.',
		},
		{
			id: 'T24_REL_02',
			tipus: 'relacionades',
			enunciat:
				'Quin mecanisme reforça la coherència entre ordenaments en l’àmbit europeu?',
			opcions: [
				'El recurs d’empara',
				'La qüestió prejudicial davant el TJUE',
				'La dissolució de les Corts',
				'La iniciativa legislativa popular',
			],
			correcta: 1,
			explicacio:
				'El diàleg judicial es vehicula especialment mitjançant la qüestió prejudicial davant el TJUE.',
		},
		{
			id: 'T24_REL_03',
			tipus: 'relacionades',
			enunciat:
				'En l’àmbit dels drets fonamentals, la protecció és:',
			opcions: [
				'Exclusivament estatal',
				'Exclusivament europea',
				'Multinivell (CE, Estatuts, Carta UE, CEDH)',
				'Només judicial interna',
			],
			correcta: 2,
			explicacio:
				'La protecció de drets és multinivell: CE, Estatuts, Carta UE i CEDH.',
		},
		{
			id: 'T24_REL_04',
			tipus: 'relacionades',
			enunciat:
				'Qui respon davant la UE pels incompliments derivats de l’actuació d’una CCAA?',
			opcions: [
				'La pròpia CCAA exclusivament',
				'El TJUE',
				'L’Estat',
				'El Parlament autonòmic',
			],
			correcta: 2,
			explicacio:
				'Segons el sistema, la responsabilitat davant la UE recau en l’Estat.',
		},
		{
			id: 'T24_REL_05',
			tipus: 'relacionades',
			enunciat:
				'El model multinivell substitueix la Constitució de 1978?',
			opcions: [
				'Sí, perquè el dret europeu preval sempre',
				'Sí, perquè els Estatuts tenen el mateix rang',
				'No, la CE continua sent la norma suprema',
				'Només en situacions d’emergència',
			],
			correcta: 2,
			explicacio:
				'El constitucionalisme multinivell no elimina la CE ni la seva supremacia.',
		},
		{
			id: 'T24_REL_06',
			tipus: 'relacionades',
			enunciat:
				'En el model clàssic, la font del poder és:',
			opcions: [
				'Poder compartit multinivell',
				'Sobirania estatal única',
				'Delegació europea absoluta',
				'Competència autonòmica exclusiva',
			],
			correcta: 1,
			explicacio:
				'El model clàssic es basa en sobirania estatal única; el multinivell implica poder compartit.',
		},
		{
			id: 'T24_REL_07',
			tipus: 'relacionades',
			enunciat:
				'L’article 10.2 CE reforça:',
			opcions: [
				'La supremacia absoluta del TJUE',
				'L’obertura internacional i la interpretació conforme dels drets',
				'La subordinació dels Estatuts a la UE',
				'La desaparició del control constitucional',
			],
			correcta: 1,
			explicacio:
				'Art. 10.2 CE reforça l’obertura internacional en interpretació de drets.',
		},
		{
			id: 'T24_REL_08',
			tipus: 'relacionades',
			enunciat:
				'Quin repte actual es vincula a l’art. 18.4 CE en el context multinivell?',
			opcions: [
				'Reforma territorial',
				'Digitalització i protecció de dades',
				'Dissolució de les Corts',
				'Estat de setge permanent',
			],
			correcta: 1,
			explicacio:
				'L’art. 18.4 CE connecta amb la regulació digital i protecció de dades en clau multinivell.',
		},
		{
			id: 'T24_REL_09',
			tipus: 'relacionades',
			enunciat:
				'En el sistema multinivell, cada nivell actua segons:',
			opcions: [
				'Principi de jerarquia estricta',
				'Principi de competència',
				'Principi d’uniformitat absoluta',
				'Principi de supremacia europea total',
			],
			correcta: 1,
			explicacio:
				'No és jerarquia rígida, sinó principi de competència.',
		},
		{
			id: 'T24_REL_10',
			tipus: 'relacionades',
			enunciat:
				'Quina afirmació resumeix millor el constitucionalisme multinivell?',
			opcions: [
				'Substitueix el model constitucional estatal',
				'Integra diversos nivells normatius en cooperació i lleialtat institucional',
				'Elimina el control judicial intern',
				'Concentra tot el poder en la UE',
			],
			correcta: 1,
			explicacio:
				'Sistema en xarxa basat en cooperació, competència i lleialtat institucional.',
		},
	],
};

const optionKeys = ['A', 'B', 'C', 'D', 'E'];

const bloc1Tema1Punt24Ask = punt24Ask.preguntes.map((item, index) => ({
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

export default bloc1Tema1Punt24Ask;
export { punt24Ask };
