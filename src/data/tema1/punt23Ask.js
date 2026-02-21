const punt23Ask = {
	id: 'tema1_punt23',
	tema: 1,
	punt: 23,
	titol: 'Integració europea i incidència constitucional',
	total: 20,
	categories: {
		trampa: 5,
		legislacio: 5,
		relacionades: 10,
	},
	preguntes: [
		{
			id: 'T23_TR_01',
			tipus: 'trampa',
			enunciat:
				'Mitjançant quin instrument s’autoritza l’atribució a la UE de l’exercici de competències derivades de la Constitució (art. 93 CE)?',
			opcions: [
				'Llei ordinària',
				'Llei Orgànica',
				'Reial decret llei',
				'No cal cap norma interna si el tractat és europeu',
			],
			correcta: 1,
			explicacio:
				'Trampa: l’art. 93 CE exigeix Llei Orgànica per autoritzar tractats que atribueixin l’exercici de competències a una organització internacional.',
		},
		{
			id: 'T23_TR_02',
			tipus: 'trampa',
			enunciat:
				'Si una llei espanyola posterior és contrària a un reglament de la UE, el jutge nacional ha de:',
			opcions: [
				'Aplicar la llei posterior perquè és més recent',
				'Plantejar qüestió d’inconstitucionalitat al TC abans d’actuar',
				'Inaplicar la norma interna contrària i aplicar el reglament europeu',
				'Esperar la derogació formal de la llei espanyola',
			],
			correcta: 2,
			explicacio:
				'Trampa: per primacia del dret UE, el jutge inaplica la norma interna incompatible; no cal esperar derogació ni acudir al TC.',
		},
		{
			id: 'T23_TR_03',
			tipus: 'trampa',
			enunciat:
				'Sobre la relació entre sobirania (art. 1.2 CE) i integració europea (art. 93 CE), és correcte afirmar que:',
			opcions: [
				'L’art. 93 CE cedeix la sobirania a la UE',
				'Es cedeix la sobirania, però només en matèria econòmica',
				'No es cedeix la sobirania, sinó l’exercici de determinades competències; la sobirania continua residint en el poble espanyol',
				'La sobirania passa al TJUE quan hi ha conflicte normatiu',
			],
			correcta: 2,
			explicacio:
				'Trampa clau: es cedeix l’exercici de competències, no la sobirania (art. 1.2 CE).',
		},
		{
			id: 'T23_TR_04',
			tipus: 'trampa',
			enunciat:
				'Si un tractat internacional és contrari a la Constitució, segons l’art. 95 CE cal:',
			opcions: [
				'Ratificar el tractat i després reformar la Constitució si cal',
				'Aplicar el tractat perquè preval sobre el dret intern',
				'Reforma constitucional prèvia abans de la ratificació',
				'No es pot fer cap control, perquè és matèria exclusiva del Govern',
			],
			correcta: 2,
			explicacio:
				'Trampa: l’art. 95 CE preveu control preventiu; si hi ha contradicció, cal reforma constitucional prèvia.',
		},
		{
			id: 'T23_TR_05',
			tipus: 'trampa',
			enunciat:
				'Quina afirmació és correcta sobre reglaments i directives (dret derivat, art. 288 TFUE)?',
			opcions: [
				'Els reglaments necessiten transposició; les directives no',
				'Les directives són aplicables directament sempre, sense transposició',
				'Els reglaments són directament aplicables; les directives exigeixen transposició (obligació de resultat)',
				'Cap dels dos és obligatori fins que el Parlament espanyol els aprova',
			],
			correcta: 2,
			explicacio:
				'Trampa d’examen: reglament = aplicació directa; directiva = transposició (obligació de resultat).',
		},
		{
			id: 'T23_LEG_01',
			tipus: 'legislacio',
			enunciat:
				'Quin article de la CE és la “clàusula d’habilitació” que permet atribuir a una organització internacional l’exercici de competències?',
			opcions: ['Art. 93 CE', 'Art. 94 CE', 'Art. 95 CE', 'Art. 96 CE'],
			correcta: 0,
			explicacio: 'La base constitucional de la integració europea és l’art. 93 CE.',
		},
		{
			id: 'T23_LEG_02',
			tipus: 'legislacio',
			enunciat:
				'Quin article estableix que la sobirania nacional resideix en el poble espanyol?',
			opcions: ['Art. 1.2 CE', 'Art. 1.1 CE', 'Art. 10.2 CE', 'Art. 93 CE'],
			correcta: 0,
			explicacio: 'La sobirania resideix en el poble espanyol (art. 1.2 CE).',
		},
		{
			id: 'T23_LEG_03',
			tipus: 'legislacio',
			enunciat:
				'Quin article preveu el control preventiu de constitucionalitat dels tractats internacionals?',
			opcions: ['Art. 95 CE', 'Art. 93 CE', 'Art. 96 CE', 'Art. 163 CE'],
			correcta: 0,
			explicacio: 'El control preventiu de tractats s’estableix a l’art. 95 CE.',
		},
		{
			id: 'T23_LEG_04',
			tipus: 'legislacio',
			enunciat:
				'Quin article indica que els tractats internacionals, un cop publicats oficialment, formen part del dret intern?',
			opcions: ['Art. 96 CE', 'Art. 94 CE', 'Art. 93 CE', 'Art. 95 CE'],
			correcta: 0,
			explicacio: 'Art. 96 CE: publicats, els tractats s’integren en el dret intern.',
		},
		{
			id: 'T23_LEG_05',
			tipus: 'legislacio',
			enunciat:
				'Quin article estableix la interpretació conforme als tractats internacionals sobre drets humans?',
			opcions: ['Art. 10.2 CE', 'Art. 1.1 CE', 'Art. 1.2 CE', 'Art. 106.1 CE'],
			correcta: 0,
			explicacio: 'Art. 10.2 CE: interpretació de drets conforme als tractats de drets humans.',
		},
		{
			id: 'T23_REL_01',
			tipus: 'relacionades',
			enunciat:
				'Quina idea expressa millor l’art. 93 CE en relació amb la integració europea?',
			opcions: [
				'Permet modificar la Constitució sense seguir el Títol X',
				'Permet autoritzar, per Llei Orgànica, tractats que atribueixin l’exercici de competències a una organització internacional',
				'Permet que la UE substitueixi el Parlament espanyol',
				'Prohibeix la integració en organitzacions internacionals',
			],
			correcta: 1,
			explicacio:
				'Art. 93 = autorització per LO de tractats d’atribució d’exercici de competències.',
		},
		{
			id: 'T23_REL_02',
			tipus: 'relacionades',
			enunciat:
				'Quina diferència defineix millor “primacia” del dret UE vs “supremacia” de la CE (segons el punt 23)?',
			opcions: [
				'Primacia = jerarquia formal superior de la UE sobre la CE',
				'Supremacia = preferència d’aplicació del dret UE sempre, fins i tot fora de competències cedides',
				'Primacia = preferència d’aplicació en l’àmbit de competències cedides; supremacia = jerarquia superior formal de la Constitució',
				'No hi ha diferència: són sinònims exactes',
			],
			correcta: 2,
			explicacio:
				'Primacia = preferència d’aplicació en l’àmbit cedit; supremacia = superioritat formal de la CE com a norma habilitant.',
		},
		{
			id: 'T23_REL_03',
			tipus: 'relacionades',
			enunciat:
				'Segons la doctrina indicada (Declaració 1/2004 del TC), la primacia del dret UE:',
			opcions: [
				'Elimina la supremacia constitucional',
				'No elimina la supremacia constitucional: la CE és la norma que autoritza la integració',
				'Impedeix qualsevol control del TC',
				'Converteix el TJUE en intèrpret suprem de la CE',
			],
			correcta: 1,
			explicacio:
				'El punt 23 destaca que la primacia no anul·la la supremacia constitucional; la integració s’autoritza per la CE.',
		},
		{
			id: 'T23_REL_04',
			tipus: 'relacionades',
			enunciat:
				'Què implica pràcticament el principi de primacia en cas de conflicte entre dret UE i dret intern?',
			opcions: [
				'El jutge ha d’esperar que el legislador derogui la norma interna',
				'El jutge ha d’inaplicar la norma interna contrària i aplicar el dret UE',
				'El jutge ha de plantejar sempre recurs d’inconstitucionalitat',
				'El jutge ha de demanar autorització al Govern',
			],
			correcta: 1,
			explicacio:
				'Efecte clau: inaplicació judicial immediata de la norma interna incompatible (sense esperar derogació).',
		},
		{
			id: 'T23_REL_05',
			tipus: 'relacionades',
			enunciat:
				'Quina és la conseqüència de l’art. 95 CE si el TC aprecia contradicció entre un tractat i la CE?',
			opcions: [
				'El tractat s’aplica igualment perquè és dret internacional',
				'El tractat es ratifica i després s’intenta una reforma',
				'Cal reforma constitucional prèvia abans de ratificar el tractat',
				'El conflicte es resol per una Comissió Mixta Congrés–Senat',
			],
			correcta: 2,
			explicacio:
				'Control preventiu: contradicció = reforma prèvia de la CE (abans de ratificació).',
		},
		{
			id: 'T23_REL_06',
			tipus: 'relacionades',
			enunciat:
				'Dins del dret derivat, quin tipus d’acte és d’aplicació directa i general sense transposició?',
			opcions: ['Directiva', 'Reglament', 'Decisió', 'Recomanació'],
			correcta: 1,
			explicacio:
				'Reglament: general, directe i obligatori; no requereix transposició.',
		},
		{
			id: 'T23_REL_07',
			tipus: 'relacionades',
			enunciat:
				'Quina afirmació descriu millor una directiva de la UE (segons el punt 23)?',
			opcions: [
				'És directament aplicable sense transposició',
				'Obliga al resultat però requereix transposició per part dels Estats membres',
				'Només obliga els ciutadans i no els Estats',
				'No té força obligatòria en cap cas',
			],
			correcta: 1,
			explicacio:
				'Directiva: obliga al resultat; transposició necessària.',
		},
		{
			id: 'T23_REL_08',
			tipus: 'relacionades',
			enunciat:
				'Sobre el repartiment competencial intern Estat–CCAA en relació amb la UE, el punt 23 destaca que:',
			opcions: [
				'La UE redissenya automàticament les competències Estat–CCAA',
				'No es pot alterar el repartiment competencial intern per la integració, però l’Estat respon davant la UE fins i tot si l’incompliment prové d’una CCAA',
				'Les CCAA responen directament davant la UE i l’Estat no',
				'Les CCAA poden ignorar directives si afecten competències autonòmiques',
			],
			correcta: 1,
			explicacio:
				'Clau: el repartiment intern es manté, però la responsabilitat davant la UE recau en l’Estat.',
		},
		{
			id: 'T23_REL_09',
			tipus: 'relacionades',
			enunciat:
				'Cessió de competències (art. 93 CE) vs reforma constitucional (Títol X): diferència correcta?',
			opcions: [
				'L’art. 93 modifica formalment el text constitucional',
				'La reforma constitucional s’aprova per Llei Orgànica simple',
				'L’art. 93 implica atribució d’exercici de competències per LO; la reforma modifica el text constitucional via art. 167 o 168 CE',
				'Són exactament el mateix procediment',
			],
			correcta: 2,
			explicacio:
				'Art. 93 = cessió d’exercici (via LO); reforma = canvi formal del text (167/168).',
		},
		{
			id: 'T23_REL_10',
			tipus: 'relacionades',
			enunciat:
				'En quin any va adherir-se Espanya a les Comunitats Europees segons el punt 23?',
			opcions: ['1978', '1986', '1992', '2004'],
			correcta: 1,
			explicacio:
				'Segons el punt 23, adhesió l’1 de gener de 1986.',
		},
	],
};

const optionKeys = ['A', 'B', 'C', 'D', 'E'];

const bloc1Tema1Punt23Ask = punt23Ask.preguntes.map((item, index) => ({
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

export default bloc1Tema1Punt23Ask;
export { punt23Ask };
