const punt19Ask = {
	id: 'tema1_punt19',
	tema: 1,
	punt: 19,
	titol: 'Recurs d’empara constitucional',
	total: 20,
	categories: {
		trampa: 5,
		legislacio: 5,
		relacionades: 10,
	},
	preguntes: [
		{
			id: 'T19_TR_01',
			tipus: 'trampa',
			enunciat: 'Quin dret NO pot ser objecte de recurs d’empara constitucional?',
			opcions: [
				'Llibertat religiosa (art. 16 CE)',
				'Igualtat i no-discriminació (art. 14 CE)',
				'Habitatge digne (art. 47 CE)',
				'Tutela judicial efectiva (art. 24 CE)',
			],
			correcta: 2,
			explicacio:
				'Trampa típica: l’habitatge (art. 47 CE) és un principi rector (arts. 39–52 CE), no un dret fonamental emparable. L’empara protegeix arts. 14, 15–29 i 30.2 CE.',
		},
		{
			id: 'T19_TR_02',
			tipus: 'trampa',
			enunciat: 'El recurs d’empara constitucional:',
			opcions: [
				'És una tercera instància judicial per revisar fets i proves',
				'Pot interposar-se sense esgotar la via judicial prèvia',
				'És subsidiari respecte als tribunals ordinaris',
				'Suspèn automàticament la resolució impugnada',
			],
			correcta: 2,
			explicacio:
				'L’empara és subsidiari (cal exhaurir via judicial), no és tercera instància i no suspèn automàticament l’acte/decisió impugnada.',
		},
		{
			id: 'T19_TR_03',
			tipus: 'trampa',
			enunciat: 'El requisit d’“especial transcendència constitucional” (des de 2007) implica que:',
			opcions: [
				'Només s’admeten casos amb gran repercussió mediàtica',
				'N’hi ha prou amb acreditar la lesió individual del dret',
				'Cal justificar rellevància per a la interpretació general dels drets fonamentals',
				'Només el Defensor del Poble pot apreciar-lo i al·legar-lo',
			],
			correcta: 2,
			explicacio:
				'Trampa: no és fama/impacte mediàtic. És un plus d’interès objectiu: rellevància per a la doctrina/interpretació general dels drets.',
		},
		{
			id: 'T19_TR_04',
			tipus: 'trampa',
			enunciat: 'Qui pot interposar recurs d’empara (segons el punt 19)?',
			opcions: [
				'Només persones físiques (mai persones jurídiques)',
				'Qualsevol ciutadà encara que no estigui afectat',
				'Persona física o jurídica amb interès legítim, i també Defensor del Poble i Ministeri Fiscal',
				'Només el Ministeri Fiscal',
			],
			correcta: 2,
			explicacio:
				'Poden interposar-lo persones físiques o jurídiques amb interès legítim, el Defensor del Poble i el Ministeri Fiscal.',
		},
		{
			id: 'T19_TR_05',
			tipus: 'trampa',
			enunciat: 'La interposició del recurs d’empara comporta:',
			opcions: [
				'Suspensió automàtica de l’acte o resolució impugnada',
				'Suspensió automàtica només si es tracta d’una resolució judicial',
				'No suspensió automàtica; el TC pot acordar-la de manera excepcional',
				'Anul·lació immediata sense sentència',
			],
			correcta: 2,
			explicacio:
				'Regla: no hi ha suspensió automàtica. La suspensió és excepcional i l’ha d’acordar el TC.',
		},
		{
			id: 'T19_LEG_01',
			tipus: 'legislacio',
			enunciat:
				'Quin article de la CE estableix que es pot acudir al TC en empara per vulneració de drets fonamentals (art. 14 i Secció 1a del Capítol II)?',
			opcions: ['Art. 53.2 CE', 'Art. 161.1.b CE', 'Art. 162.1.a CE', 'Art. 164 CE'],
			correcta: 0,
			explicacio: 'El fonament constitucional bàsic del recurs d’empara és l’art. 53.2 CE.',
		},
		{
			id: 'T19_LEG_02',
			tipus: 'legislacio',
			enunciat: 'Quin article atribueix al TC la competència per conèixer del recurs d’empara?',
			opcions: ['Art. 161.1.b CE', 'Art. 161.1.a CE', 'Art. 163 CE', 'Art. 159 CE'],
			correcta: 0,
			explicacio: 'La competència del TC per a l’empara és a l’art. 161.1.b CE.',
		},
		{
			id: 'T19_LEG_03',
			tipus: 'legislacio',
			enunciat: 'Quin conjunt de preceptes és l’àmbit de drets emparables (segons el punt 19)?',
			opcions: [
				'Arts. 33–38 CE i arts. 39–52 CE',
				'Arts. 14, 15–29 i 30.2 CE',
				'Tota la Constitució',
				'Només l’art. 24 CE',
			],
			correcta: 1,
			explicacio:
				'L’empara protegeix arts. 14, 15–29 i l’objecció de consciència (art. 30.2 CE).',
		},
		{
			id: 'T19_LEG_04',
			tipus: 'legislacio',
			enunciat:
				'Quin article de la LOTC regula l’excepció a la subsidiarietat per a actes parlamentaris sense rang de llei (segons el punt 19)?',
			opcions: ['Art. 42 LOTC', 'Art. 33.2 LOTC', 'Art. 1 LOTC', 'Art. 2 LOTC'],
			correcta: 0,
			explicacio:
				'El punt 19 assenyala com a excepció els actes parlamentaris sense llei (art. 42 LOTC).',
		},
		{
			id: 'T19_LEG_05',
			tipus: 'legislacio',
			enunciat:
				'Quina reforma normativa introdueix el requisit d’“especial transcendència constitucional” en l’empara (segons el punt 19)?',
			opcions: ['LO 6/2007', 'LO 1/1979', 'LO 3/1984', 'LO 2/2012'],
			correcta: 0,
			explicacio:
				'Des de 2007, cal justificar l’especial transcendència constitucional (indicada al temari com LO 6/2007).',
		},
		{
			id: 'T19_REL_01',
			tipus: 'relacionades',
			enunciat: 'Quina és la finalitat del recurs d’empara?',
			opcions: [
				'Control abstracte de les lleis amb rang de llei',
				'Protegir individualment drets fonamentals quan els tribunals ordinaris no han reparat la vulneració',
				'Unificar doctrina del Tribunal Suprem',
				'Revisar la prova i els fets d’un procediment judicial',
			],
			correcta: 1,
			explicacio:
				'L’empara és una via extraordinària orientada a la protecció de drets fonamentals, no un control abstracte ni una revisió de fets/proves.',
		},
		{
			id: 'T19_REL_02',
			tipus: 'relacionades',
			enunciat: 'L’empara és una “garantia jurisdiccional suprema” perquè:',
			opcions: [
				'Substitueix els jutjats i tribunals ordinaris',
				'Actua només després d’haver esgotat la via judicial ordinària (subsidiarietat) i controla vulneracions de drets fonamentals',
				'Permet impugnar qualsevol decisió administrativa sense passar per jutjats',
				'Converteix el TC en tribunal de cassació general',
			],
			correcta: 1,
			explicacio:
				'Clau: subsidiarietat i àmbit limitat a drets fonamentals emparables.',
		},
		{
			id: 'T19_REL_03',
			tipus: 'relacionades',
			enunciat: 'La subsidiarietat en l’empara significa que:',
			opcions: [
				'Es pot anar directament al TC sempre que hi hagi una injustícia',
				'Cal exhaurir prèviament la via judicial ordinària; el TC intervé si no s’ha reparat la lesió',
				'Només s’exigeix en procediments civils',
				'Només s’exigeix si el recurrent és una persona jurídica',
			],
			correcta: 1,
			explicacio:
				'Subsidiari = “última xarxa”: abans cal recórrer als tribunals ordinaris fins esgotar la via procedent.',
		},
		{
			id: 'T19_REL_04',
			tipus: 'relacionades',
			enunciat: 'El requisit d’“invocació formal” exigeix:',
			opcions: [
				'Invocar el dret vulnerat en el procés judicial tan aviat com sigui possible',
				'Invocar-lo només al final, abans del recurs d’empara',
				'Invocar-lo només si el jutge ho demana',
				'Invocar qualsevol article de la Constitució, encara que no sigui emparable',
			],
			correcta: 0,
			explicacio:
				'Cal haver al·legat el dret fonamental vulnerat en el procés judicial al primer moment possible, per donar opció de reparació.',
		},
		{
			id: 'T19_REL_05',
			tipus: 'relacionades',
			enunciat: 'Quins terminis (segons el punt 19) s’associen a l’empara?',
			opcions: [
				'Sempre 3 mesos, sigui quin sigui l’origen',
				'30 dies per resolucions judicials; 20 dies per actes administratius (després via judicial); 3 mesos per actes parlamentaris sense llei',
				'6 mesos per resolucions judicials; 1 any per actes administratius',
				'No hi ha terminis, només prescripció general',
			],
			correcta: 1,
			explicacio:
				'Terminis del temari: 30 dies (resolucions judicials), 20 dies (actes administratius després via judicial) i 3 mesos (actes parlamentaris sense llei).',
		},
		{
			id: 'T19_REL_06',
			tipus: 'relacionades',
			enunciat: 'Què NO fa el TC en un recurs d’empara?',
			opcions: [
				'Comprovar si s’ha vulnerat un dret fonamental',
				'Declarar nul l’acte o resolució impugnada si escau',
				'Revisar els fets i la valoració de la prova com si fos una tercera instància',
				'Restablir el recurrent en el dret vulnerat amb retroacció d’actuacions si cal',
			],
			correcta: 2,
			explicacio:
				'No és tercera instància: el TC no revalora proves ni refà els fets; només analitza la vulneració del dret fonamental.',
		},
		{
			id: 'T19_REL_07',
			tipus: 'relacionades',
			enunciat: 'Quins efectes pot tenir una sentència estimatòria d’empara (segons el punt 19)?',
			opcions: [
				'Nul·litat de l’acte o resolució, reconeixement del dret i restabliment (incloent retroacció d’actuacions)',
				'Anul·lació general de la llei amb efectes erga omnes',
				'Imposició de sancions penals a l’òrgan que va vulnerar el dret',
				'Reforma automàtica de la Constitució',
			],
			correcta: 0,
			explicacio:
				'Efectes: nul·litat, reconeixement del dret i restabliment del recurrent (sovint amb retroacció).',
		},
		{
			id: 'T19_REL_08',
			tipus: 'relacionades',
			enunciat: 'Els efectes de l’empara són principalment:',
			opcions: [
				'Erga omnes (generals) i vinculants per a tothom com una anul·lació de llei',
				'Inter partes (afecten sobretot les parts del procés)',
				'Només declaratius sense efectes jurídics',
				'Polítics i no jurisdiccionals',
			],
			correcta: 1,
			explicacio:
				'A diferència del recurs d’inconstitucionalitat (erga omnes), l’empara té efectes principalment inter partes.',
		},
		{
			id: 'T19_REL_09',
			tipus: 'relacionades',
			enunciat: 'Comparació correcta: empara vs recurs d’inconstitucionalitat.',
			opcions: [
				'Empara: control abstracte de lleis; Inconstitucionalitat: protecció individual',
				'Empara: protecció individual i subsidiària; Inconstitucionalitat: control abstracte no subsidiari',
				'Empara: sempre erga omnes; Inconstitucionalitat: sempre inter partes',
				'Empara: només la poden iniciar òrgans polítics; Inconstitucionalitat: qualsevol ciutadà',
			],
			correcta: 1,
			explicacio:
				'Empara = protecció individual, subsidiària, inter partes. Inconstitucionalitat = control abstracte de lleis, legitimació política, erga omnes.',
		},
		{
			id: 'T19_REL_10',
			tipus: 'relacionades',
			enunciat: 'Què significa “interès legítim” per interposar empara (segons el punt 19)?',
			opcions: [
				'Que el recurrent sigui espanyol i major d’edat',
				'Que la decisió del TC tingui un efecte real en l’esfera jurídica del recurrent',
				'Que el recurrent tingui interès acadèmic o doctrinal',
				'Que el recurrent tingui 50 signatures de suport',
			],
			correcta: 1,
			explicacio:
				'Interès legítim = afectació real: la decisió del TC ha de tenir efecte pràctic en la situació jurídica del recurrent.',
		},
	],
};

const optionKeys = ['A', 'B', 'C', 'D', 'E'];

const bloc1Tema1Punt19Ask = punt19Ask.preguntes.map((item, index) => ({
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

export default bloc1Tema1Punt19Ask;
export { punt19Ask };
