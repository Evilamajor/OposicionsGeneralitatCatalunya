const punt21Ask = {
	id: 'tema1_punt21',
	tema: 1,
	punt: 21,
	titol: 'Procediment ordinari de reforma constitucional (art. 167 CE)',
	total: 20,
	categories: {
		trampa: 5,
		legislacio: 5,
		relacionades: 10,
	},
	preguntes: [
		{
			id: 'T21_TR_01',
			tipus: 'trampa',
			enunciat:
				'Quan és obligatori el referèndum en el procediment ordinari de l’art. 167 CE?',
			opcions: [
				'Sempre, perquè qualsevol reforma constitucional exigeix referèndum',
				'Quan ho decideix el President del Govern',
				'Quan ho demana 1/10 dels membres d’una Cambra dins dels 15 dies següents a l’aprovació definitiva',
				'Mai, perquè el referèndum està prohibit en reformes constitucionals',
			],
			correcta: 2,
			explicacio:
				'Trampa: al 167 el referèndum NO és automàtic. Es convoca si el demana 1/10 d’una Cambra dins 15 dies; si es demana correctament, és vinculant.',
		},
		{
			id: 'T21_TR_02',
			tipus: 'trampa',
			enunciat:
				'Si el Senat només aprova la reforma per majoria absoluta, pot prosperar la reforma per l’art. 167 CE?',
			opcions: [
				'No, perquè el Senat sempre ha d’arribar a 3/5',
				'Sí, si el Congrés aprova per 2/3',
				'Sí, però només si hi ha dissolució de les Corts',
				'Només si el Tribunal Constitucional ho autoritza prèviament',
			],
			correcta: 1,
			explicacio:
				'Existeix via alternativa (clàusula antibloqueig): Senat majoria absoluta + Congrés 2/3.',
		},
		{
			id: 'T21_TR_03',
			tipus: 'trampa',
			enunciat:
				'Quin d’aquests supòsits NO pot tramitar-se per l’art. 167 CE?',
			opcions: [
				'Reforma de l’art. 135 CE (principi d’estabilitat pressupostària)',
				'Reforma del Títol Preliminar (arts. 1–9)',
				'Reforma del Títol III (Corts Generals)',
				'Reforma sobre finançament autonòmic (si no afecta matèries protegides)',
			],
			correcta: 1,
			explicacio:
				'Trampa: el Títol Preliminar està reservat al procediment agreujat (art. 168 CE), no al 167.',
		},
		{
			id: 'T21_TR_04',
			tipus: 'trampa',
			enunciat:
				'Existeix iniciativa legislativa popular per reformar la Constitució?',
			opcions: [
				'Sí, com qualsevol llei: amb 500.000 signatures (art. 87.3 CE)',
				'No, perquè l’art. 166 CE exclou l’art. 87.3 CE',
				'Sí, però només per a reformes parcials via art. 167 CE',
				'Sí, si ho avala el Defensor del Poble',
			],
			correcta: 1,
			explicacio:
				'Clau d’examen: NO hi ha iniciativa popular de reforma constitucional; art. 166 remet a 87.1 i 87.2, i exclou 87.3.',
		},
		{
			id: 'T21_TR_05',
			tipus: 'trampa',
			enunciat:
				'En el procediment ordinari de reforma (art. 167 CE), la dissolució de les Corts Generals és:',
			opcions: [
				'Obligatòria sempre després de l’aprovació inicial',
				'Opcional si ho demana 1/10 d’una Cambra',
				'Inexistent: no hi ha dissolució en el 167',
				'Obligatòria només si intervé la Comissió Mixta',
			],
			correcta: 2,
			explicacio:
				'Trampa: la dissolució és pròpia del procediment agreujat (art. 168 CE), no del procediment ordinari (167 CE).',
		},
		{
			id: 'T21_LEG_01',
			tipus: 'legislacio',
			enunciat:
				'Quin article regula el procediment ordinari de reforma constitucional?',
			opcions: ['Art. 167 CE', 'Art. 168 CE', 'Art. 166 CE', 'Art. 169 CE'],
			correcta: 0,
			explicacio: 'El procediment ordinari de reforma és l’art. 167 CE.',
		},
		{
			id: 'T21_LEG_02',
			tipus: 'legislacio',
			enunciat:
				'Quin article regula la iniciativa de reforma constitucional i remet a l’art. 87 CE?',
			opcions: ['Art. 166 CE', 'Art. 167 CE', 'Art. 168 CE', 'Art. 87.3 CE'],
			correcta: 0,
			explicacio:
				'L’art. 166 CE regula la iniciativa de reforma i remet als apartats 1 i 2 de l’art. 87 CE (excloent la iniciativa popular).',
		},
		{
			id: 'T21_LEG_03',
			tipus: 'legislacio',
			enunciat:
				'Quin article regula el procediment agreujat per a reforma total o parts especialment protegides?',
			opcions: ['Art. 168 CE', 'Art. 167 CE', 'Art. 166 CE', 'Art. 164 CE'],
			correcta: 0,
			explicacio: 'El procediment agreujat és l’art. 168 CE.',
		},
		{
			id: 'T21_LEG_04',
			tipus: 'legislacio',
			enunciat:
				'Quin article prohibeix iniciar la reforma constitucional en temps de guerra o durant estats excepcionals?',
			opcions: ['Art. 169 CE', 'Art. 167 CE', 'Art. 166 CE', 'Art. 161.2 CE'],
			correcta: 0,
			explicacio:
				'El punt 21 destaca l’art. 169 CE com a límit temporal (guerra/estats excepcionals).',
		},
		{
			id: 'T21_LEG_05',
			tipus: 'legislacio',
			enunciat:
				'Quina majoria exigeix l’art. 167 CE com a regla general per aprovar la reforma en cada Cambra?',
			opcions: ['3/5', '2/3', 'Majoritat absoluta', 'Majoritat simple'],
			correcta: 0,
			explicacio:
				'Regla general: 3/5 de cada Cambra (Congrés i Senat).',
		},
		{
			id: 'T21_REL_01',
			tipus: 'relacionades',
			enunciat:
				'Per què es diu que la Constitució espanyola és una “constitució rígida”?',
			opcions: [
				'Perquè només es pot interpretar per referèndum',
				'Perquè no es pot modificar mitjançant llei ordinària i exigeix procediments i majories reforçades',
				'Perquè no admet cap reforma en cap cas',
				'Perquè només es pot reformar per decret llei',
			],
			correcta: 1,
			explicacio:
				'Rígida = reforma sotmesa a procediment específic i majories reforçades per garantir estabilitat.',
		},
		{
			id: 'T21_REL_02',
			tipus: 'relacionades',
			enunciat:
				'Quins subjectes poden iniciar la reforma constitucional segons el punt 21 (art. 166 CE + art. 87.1 i 87.2 CE)?',
			opcions: [
				'Només el Tribunal Constitucional i el CGPJ',
				'El Govern, el Congrés, el Senat i les Assemblees de les CCAA',
				'Només el poble mitjançant iniciativa legislativa popular',
				'Només el Rei i el President del Govern conjuntament',
			],
			correcta: 1,
			explicacio:
				'Iniciativa: Govern; Congrés (2 grups o 1/5 diputats); Senat (50 senadors no del mateix grup); Assemblees CCAA. No hi ha ILP.',
		},
		{
			id: 'T21_REL_03',
			tipus: 'relacionades',
			enunciat:
				'Quan s’aplica l’art. 167 CE i no l’art. 168 CE?',
			opcions: [
				'Quan la reforma afecta el Títol Preliminar',
				'Quan la reforma afecta la Secció 1a del Capítol II del Títol I (arts. 15–29)',
				'Quan la reforma és parcial i no afecta matèries reservades al procediment agreujat',
				'Quan la reforma és una revisió total de la Constitució',
			],
			correcta: 2,
			explicacio:
				'El 167 és la via general per reformes parcials ordinàries; el 168 per reforma total o parts protegides (Títol Preliminar, 15–29, Títol II).',
		},
		{
			id: 'T21_REL_04',
			tipus: 'relacionades',
			enunciat:
				'En la via general del 167 CE, quina majoria cal al Congrés (350 diputats) segons el punt 21?',
			opcions: ['Majoritat absoluta (176)', '2/3 (234)', '3/5 (210)', 'Majoritat simple'],
			correcta: 2,
			explicacio:
				'3/5 de 350 = 210 vots, tal com recull el punt 21.',
		},
		{
			id: 'T21_REL_05',
			tipus: 'relacionades',
			enunciat:
				'Què passa si no hi ha acord entre Congrés i Senat en el text de reforma?',
			opcions: [
				'S’arxiva la reforma automàticament',
				'Es crea una Comissió Mixta paritària de diputats i senadors per elaborar un text de consens',
				'Es convoca obligatòriament referèndum',
				'El Govern imposa un text per decret llei',
			],
			correcta: 1,
			explicacio:
				'El 167 preveu una Comissió Mixta paritària per intentar un text de consens que després s’ha de tornar a aprovar.',
		},
		{
			id: 'T21_REL_06',
			tipus: 'relacionades',
			enunciat:
				'La via alternativa (antibloqueig) del 167 CE permet aprovar la reforma si:',
			opcions: [
				'El Senat aprova per majoria simple i el Congrés per majoria absoluta',
				'El Senat aprova per majoria absoluta i el Congrés per 2/3',
				'El Senat aprova per 2/3 i el Congrés per majoria simple',
				'Només si hi ha dissolució de les Corts i eleccions',
			],
			correcta: 1,
			explicacio:
				'Clàusula antibloqueig: Senat majoria absoluta + Congrés 2/3.',
		},
		{
			id: 'T21_REL_07',
			tipus: 'relacionades',
			enunciat:
				'En el procediment ordinari (167 CE), el referèndum és:',
			opcions: [
				'Obligatori sempre',
				'Facultatiu: es convoca si el demana 1/10 d’una Cambra dins 15 dies',
				'Prohibit',
				'Obligatori només si hi ha Comissió Mixta',
			],
			correcta: 1,
			explicacio:
				'Referèndum facultatiu amb sol·licitud de 1/10 dins 15 dies de l’aprovació definitiva.',
		},
		{
			id: 'T21_REL_08',
			tipus: 'relacionades',
			enunciat:
				'Quina diferència clau entre 167 i 168 és correcta?',
			opcions: [
				'Al 167 hi ha dissolució obligatòria de les Corts; al 168 no',
				'Al 167 el referèndum és obligatori; al 168 és facultatiu',
				'Al 167 no hi ha dissolució de les Corts i el referèndum és facultatiu; al 168 hi ha dissolució i referèndum obligatori',
				'Al 167 només intervé el Senat; al 168 només el Congrés',
			],
			correcta: 2,
			explicacio:
				'Diferència nuclear: 168 = dissolució + eleccions + referèndum obligatori; 167 = sense dissolució i referèndum facultatiu.',
		},
		{
			id: 'T21_REL_09',
			tipus: 'relacionades',
			enunciat:
				'Quin termini hi ha per sol·licitar el referèndum en el procediment ordinari (segons el punt 21)?',
			opcions: ['48 hores', '7 dies', '15 dies', '1 mes'],
			correcta: 2,
			explicacio:
				'El punt 21 fixa 15 dies des de l’aprovació definitiva per demanar-lo.',
		},
		{
			id: 'T21_REL_10',
			tipus: 'relacionades',
			enunciat:
				'Quina afirmació és correcta sobre l’ús pràctic del 167 CE (segons el punt 21)?',
			opcions: [
				'Sempre s’ha celebrat referèndum en reformes del 167',
				'Les reformes citades (1992 art. 13.2, 2011 art. 135, 2024 art. 49) es van tramitar sense referèndum',
				'El 167 només s’ha utilitzat una vegada',
				'El 167 només s’aplica a reformes del Títol Preliminar',
			],
			correcta: 1,
			explicacio:
				'Els exemples del punt 21 indiquen reformes tramitades pel 167 sense referèndum.',
		},
	],
};

const optionKeys = ['A', 'B', 'C', 'D', 'E'];

const bloc1Tema1Punt21Ask = punt21Ask.preguntes.map((item, index) => ({
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

export default bloc1Tema1Punt21Ask;
export { punt21Ask };
