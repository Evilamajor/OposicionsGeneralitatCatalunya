const punt22Ask = {
	id: 'tema1_punt22',
	tema: 1,
	punt: 22,
	titol: 'Procediment agreujat de reforma constitucional (art. 168 CE)',
	total: 20,
	categories: {
		trampa: 5,
		legislacio: 5,
		relacionades: 10,
	},
	preguntes: [
		{
			id: 'T22_TR_01',
			tipus: 'trampa',
			enunciat:
				'Què succeeix després de la primera aprovació per 2/3 del principi de reforma (art. 168 CE)?',
			opcions: [
				'Es convoca immediatament referèndum',
				'Es dissolen automàticament les Corts Generals',
				'La reforma queda definitivament aprovada',
				'El Senat decideix discrecionalment si continua el procés',
			],
			correcta: 1,
			explicacio:
				'Trampa: el referèndum NO és el pas immediat. Després de l’aprovació inicial per 2/3, la dissolució de les Corts és obligatòria.',
		},
		{
			id: 'T22_TR_02',
			tipus: 'trampa',
			enunciat: 'El referèndum en el procediment de l’art. 168 CE és:',
			opcions: [
				'Facultatiu si el demana 1/10 dels membres d’una Cambra',
				'Obligatori i vinculant',
				'Opcional segons decisió del Govern',
				'Inexistent en reformes constitucionals',
			],
			correcta: 1,
			explicacio:
				'Trampa clàssica amb el 167: al 168 el referèndum és sempre preceptiu (obligatori) i vinculant.',
		},
		{
			id: 'T22_TR_03',
			tipus: 'trampa',
			enunciat: 'Quantes vegades s’ha aplicat l’art. 168 CE des de 1978?',
			opcions: ['Tres vegades', 'Dues vegades', 'Una vegada', 'Cap vegada'],
			correcta: 3,
			explicacio:
				'Segons el temari, mai s’ha utilitzat l’art. 168 CE; les reformes esmentades (1992, 2011 i 2024) van ser per l’art. 167 CE.',
		},
		{
			id: 'T22_TR_04',
			tipus: 'trampa',
			enunciat:
				'Si només es reforma un sol article del Títol Preliminar (arts. 1–9), el procediment aplicable és:',
			opcions: [
				'Art. 167 CE, perquè és una reforma parcial',
				'Art. 168 CE, perquè afecta una part especialment protegida',
				'Art. 166 CE, perquè regula la iniciativa',
				'No es pot reformar cap article del Títol Preliminar',
			],
			correcta: 1,
			explicacio:
				'Trampa: encara que sigui un únic article, si és dins del Títol Preliminar, Secció 1a (15–29), Títol II o reforma total, és obligatori el 168.',
		},
		{
			id: 'T22_TR_05',
			tipus: 'trampa',
			enunciat:
				'En la ratificació per les noves Corts (després d’eleccions) en el procediment del 168, les majories són:',
			opcions: [
				'2/3 a Congrés i 2/3 a Senat',
				'3/5 a ambdues Cambres',
				'Congrés majoria simple i Senat majoria absoluta',
				'Congrés majoria absoluta i Senat majoria simple',
			],
			correcta: 2,
			explicacio:
				'Trampa: el 2/3 torna a aparèixer a l’aprovació final del text. La ratificació prèvia per les noves Corts és: Congrés majoria simple i Senat majoria absoluta.',
		},
		{
			id: 'T22_LEG_01',
			tipus: 'legislacio',
			enunciat:
				'Quin article regula el procediment agreujat de reforma constitucional?',
			opcions: ['Art. 168 CE', 'Art. 167 CE', 'Art. 166 CE', 'Art. 169 CE'],
			correcta: 0,
			explicacio: 'El procediment agreujat és l’art. 168 CE.',
		},
		{
			id: 'T22_LEG_02',
			tipus: 'legislacio',
			enunciat:
				'Quines matèries obliguen a seguir el procediment de l’art. 168 CE (segons el punt 22)?',
			opcions: [
				'Qualsevol reforma parcial de qualsevol article',
				'Només la reforma del Títol III (Corts Generals)',
				'Reforma total; Títol Preliminar (1–9); Secció 1a Cap. II Títol I (15–29); Títol II (Corona)',
				'Només la reforma del Títol VIII (organització territorial)',
			],
			correcta: 2,
			explicacio:
				'El punt 22 fixa quatre supòsits: reforma total; Títol Preliminar; arts. 15–29; Títol II (Corona).',
		},
		{
			id: 'T22_LEG_03',
			tipus: 'legislacio',
			enunciat:
				'Quina majoria exigeix l’art. 168 CE per aprovar inicialment el principi de reforma en cada Cambra?',
			opcions: ['3/5', '2/3', 'Majoritat absoluta', 'Majoritat simple'],
			correcta: 1,
			explicacio:
				'Aprovació inicial del principi de reforma: 2/3 de cada Cambra (Congrés i Senat).',
		},
		{
			id: 'T22_LEG_04',
			tipus: 'legislacio',
			enunciat:
				'Quin article estableix els límits temporals que impedeixen iniciar o continuar la reforma en guerra o estats excepcionals?',
			opcions: ['Art. 169 CE', 'Art. 168 CE', 'Art. 116 CE', 'Art. 167 CE'],
			correcta: 0,
			explicacio:
				'Els límits temporals específics de la reforma constitucional s’indiquen a l’art. 169 CE.',
		},
		{
			id: 'T22_LEG_05',
			tipus: 'legislacio',
			enunciat:
				'En quin article es regula el procediment ordinari de reforma constitucional (per contrast amb el 168)?',
			opcions: ['Art. 167 CE', 'Art. 166 CE', 'Art. 164 CE', 'Art. 161 CE'],
			correcta: 0,
			explicacio: 'El procediment ordinari és l’art. 167 CE.',
		},
		{
			id: 'T22_REL_01',
			tipus: 'relacionades',
			enunciat:
				'Quina és la finalitat principal del procediment agreujat de l’art. 168 CE?',
			opcions: [
				'Facilitar reformes ràpides amb majories simples',
				'Protegir el nucli essencial de la Constitució davant majories conjunturals',
				'Evitar qualsevol intervenció del poble en reformes',
				'Permetre que el Govern reformi la Constitució per decret llei',
			],
			correcta: 1,
			explicacio:
				'És el mecanisme més exigent i garantista: consens reforçat, dissolució i referèndum obligatori per protegir el nucli constitucional.',
		},
		{
			id: 'T22_REL_02',
			tipus: 'relacionades',
			enunciat:
				'Quin és l’ordre correcte de fases del procediment del 168 (simplificat)?',
			opcions: [
				'Referèndum → 2/3 inicial → dissolució → eleccions → 2/3 final',
				'2/3 inicial → dissolució → eleccions → ratificació noves Corts → 2/3 final → referèndum',
				'Majoritat absoluta → comissió mixta → 3/5 → referèndum facultatiu',
				'2/3 inicial → ratificació → referèndum → dissolució',
			],
			correcta: 1,
			explicacio:
				'Seqüència clau: 2/3 inicial, dissolució, eleccions, ratificació noves Corts, 2/3 final, referèndum obligatori.',
		},
		{
			id: 'T22_REL_03',
			tipus: 'relacionades',
			enunciat:
				'Quin és el paper de la dissolució de les Corts en el procediment del 168?',
			opcions: [
				'És opcional i depèn del President del Govern',
				'És obligatòria un cop aprovat el principi de reforma per 2/3',
				'Només s’aplica si la reforma és parcial',
				'Només s’aplica si es convoca referèndum',
			],
			correcta: 1,
			explicacio:
				'Dissolució immediata i obligatòria després de la primera aprovació per 2/3.',
		},
		{
			id: 'T22_REL_04',
			tipus: 'relacionades',
			enunciat:
				'Per què es convoquen eleccions generals en el procediment del 168?',
			opcions: [
				'Perquè el TC ha anul·lat la reforma anterior',
				'Perquè el cos electoral elegeixi noves Corts amb mandat específic per decidir sobre la reforma',
				'Perquè el Senat no pot votar reformes constitucionals',
				'Perquè el referèndum substitueix el Parlament',
			],
			correcta: 1,
			explicacio:
				'La lògica garantista: doble legislatura i intervenció democràtica reforçada.',
		},
		{
			id: 'T22_REL_05',
			tipus: 'relacionades',
			enunciat:
				'Quines majories s’exigeixen a l’aprovació definitiva del text final (art. 168)?',
			opcions: [
				'3/5 a Congrés i Senat',
				'2/3 a Congrés i 2/3 a Senat',
				'Congrés 2/3 i Senat majoria absoluta',
				'Congrés majoria absoluta i Senat 2/3',
			],
			correcta: 1,
			explicacio:
				'A l’aprovació final del nou text: 2/3 de cada Cambra.',
		},
		{
			id: 'T22_REL_06',
			tipus: 'relacionades',
			enunciat:
				'Quina diferència essencial entre art. 167 i 168 és correcta?',
			opcions: [
				'El 168 no exigeix referèndum mai; el 167 sí',
				'El 168 exigeix dissolució i referèndum obligatori; el 167 no dissol i el referèndum és facultatiu',
				'El 167 exigeix 2/3 i el 168 3/5',
				'El 167 només s’aplica a la Corona i el 168 a reformes menors',
			],
			correcta: 1,
			explicacio:
				'Diferència nuclear: dissolució + referèndum obligatori al 168; al 167 no hi ha dissolució i el referèndum és facultatiu (1/10).',
		},
		{
			id: 'T22_REL_07',
			tipus: 'relacionades',
			enunciat:
				'Una minoria superior a 1/3 pot bloquejar la reforma del 168 perquè:',
			opcions: [
				'Cal unanimitat de les Corts',
				'Calen 2/3 a cada Cambra; si més d’1/3 vota en contra, no s’assoleix el llindar',
				'El Senat pot vetar sense votació',
				'El referèndum és només consultiu',
			],
			correcta: 1,
			explicacio:
				'Amb llindar 2/3, una minoria > 1/3 impedeix arribar a 2/3.',
		},
		{
			id: 'T22_REL_08',
			tipus: 'relacionades',
			enunciat:
				'Quines reformes citades al temari NO van utilitzar el 168, sinó el 167?',
			opcions: [
				'1992 (art. 13.2), 2011 (art. 135) i 2024 (art. 49)',
				'Només 1978 (aprovació de la CE) i 1992',
				'Cap: totes les reformes s’han fet pel 168',
				'Només la de 2011 (art. 135)',
			],
			correcta: 0,
			explicacio:
				'El punt 22 indica que el 168 no s’ha utilitzat; les reformes esmentades són del 167.',
		},
		{
			id: 'T22_REL_09',
			tipus: 'relacionades',
			enunciat:
				'Quin és l’efecte del referèndum en el 168 CE?',
			opcions: [
				'És consultiu i no condiciona l’entrada en vigor',
				'És obligatori i vinculant; sense referèndum la reforma no pot entrar en vigor',
				'Només s’exigeix si ho demana 1/10 d’una Cambra',
				'És un tràmit substituïble per un informe del TC',
			],
			correcta: 1,
			explicacio:
				'Referèndum preceptiu i vinculant; és requisit d’eficàcia de la reforma.',
		},
		{
			id: 'T22_REL_10',
			tipus: 'relacionades',
			enunciat:
				'Quina afirmació sobre els límits temporals és correcta (segons el punt 22)?',
			opcions: [
				'La reforma constitucional és possible en qualsevol circumstància',
				'No es pot iniciar ni continuar la reforma en temps de guerra o durant estat d’alarma, excepció o setge',
				'Només es prohibeix durant l’estat d’alarma, però no durant guerra',
				'Els límits temporals només afecten el procediment del 167',
			],
			correcta: 1,
			explicacio:
				'L’art. 169 CE impedeix iniciar o continuar reformes en guerra o durant estats excepcionals (art. 116 CE).',
		},
	],
};

const optionKeys = ['A', 'B', 'C', 'D', 'E'];

const bloc1Tema1Punt22Ask = punt22Ask.preguntes.map((item, index) => ({
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

export default bloc1Tema1Punt22Ask;
export { punt22Ask };
