const punt20Ask = {
	id: 'tema1_punt20',
	tema: 1,
	punt: 20,
	titol: 'Defensor del Poble i altres mecanismes de garantia dels drets constitucionals',
	total: 20,
	categories: {
		trampa: 5,
		legislacio: 5,
		relacionades: 10,
	},
	preguntes: [
		{
			id: 'T20_TR_01',
			tipus: 'trampa',
			enunciat: 'Segons l’art. 54 CE, la funció principal del Defensor del Poble és:',
			opcions: [
				'Dictar sentències anul·latòries d’actes administratius',
				'Defensar els drets del Títol I supervisant l’activitat de l’Administració',
				'Resoldre conflictes de competència Estat–CA',
				'Suspendre automàticament reglaments administratius impugnats',
			],
			correcta: 1,
			explicacio:
				'Trampa: el Defensor del Poble NO és òrgan jurisdiccional ni dicta sentències. És alt comissionat de les Corts Generals per defensar els drets del Títol I supervisant l’Administració (art. 54 CE).',
		},
		{
			id: 'T20_TR_02',
			tipus: 'trampa',
			enunciat: 'El Defensor del Poble pot:',
			opcions: [
				'Anul·lar actes administratius i modificar normes',
				'Suspendre actes administratius com a mesura cautelar automàtica',
				'Emetre recomanacions, advertiments i informes, però no anul·lar ni suspendre actes',
				'Imposar sancions disciplinàries als funcionaris investigats',
			],
			correcta: 2,
			explicacio:
				'La seva força és la persuasió (recomanacions, suggeriments, informes). No pot anul·lar actes ni modificar normes.',
		},
		{
			id: 'T20_TR_03',
			tipus: 'trampa',
			enunciat: 'Qui pot interposar recurs d’inconstitucionalitat (segons l’art. 162 CE i el punt 20)?',
			opcions: [
				'El Síndic de Greuges de Catalunya',
				'El Defensor del Poble',
				'Qualsevol ciutadà que hagi esgotat la via judicial',
				'El President del Tribunal Suprem',
			],
			correcta: 1,
			explicacio:
				'Trampa: el ciutadà pot acudir a l’empara en certs casos, però NO pot interposar recurs d’inconstitucionalitat. El Defensor del Poble sí que està legitimat (art. 162 CE).',
		},
		{
			id: 'T20_TR_04',
			tipus: 'trampa',
			enunciat:
				'Sobre la relació Defensor del Poble – Síndic de Greuges a Catalunya, és correcte afirmar que:',
			opcions: [
				'El Síndic supervisa de manera exclusiva l’Administració de la Generalitat',
				'El Defensor del Poble pot supervisar també l’Administració de la Generalitat, de manera concurrent',
				'El Síndic és jeràrquicament superior al Defensor dins de Catalunya',
				'El Defensor només pot actuar a Catalunya si el Síndic ho autoritza',
			],
			correcta: 1,
			explicacio:
				'Després de la STC 31/2010, la supervisió sobre l’Administració catalana és concurrent: el Defensor del Poble també hi pot actuar.',
		},
		{
			id: 'T20_TR_05',
			tipus: 'trampa',
			enunciat: 'El Ministeri Fiscal (art. 124 CE):',
			opcions: [
				'És un òrgan jurisdiccional que dicta sentències',
				'Forma part del Poder Judicial i governa els jutges',
				'Promou l’acció de la justícia i defensa la legalitat, els drets dels ciutadans i l’interès públic, però no jutja',
				'És l’òrgan que anul·la actes administratius il·legals',
			],
			correcta: 2,
			explicacio:
				'Trampa: el Ministeri Fiscal no jutja. Té funcions de promoció de l’acció de la justícia i defensa de legalitat/drets/interès públic (art. 124 CE).',
		},
		{
			id: 'T20_LEG_01',
			tipus: 'legislacio',
			enunciat:
				'Quin article de la Constitució crea el Defensor del Poble com a alt comissionat de les Corts Generals?',
			opcions: ['Art. 54 CE', 'Art. 53.2 CE', 'Art. 106.1 CE', 'Art. 124 CE'],
			correcta: 0,
			explicacio: 'El Defensor del Poble es crea a l’art. 54 CE.',
		},
		{
			id: 'T20_LEG_02',
			tipus: 'legislacio',
			enunciat:
				'Quina llei orgànica desplega el Defensor del Poble (segons el punt 20)?',
			opcions: ['LO 3/1981', 'LO 6/2007', 'LOTC (LO 2/1979)', 'LOFCA (LO 8/1980)'],
			correcta: 0,
			explicacio: 'El desplegament s’atribueix a la Llei Orgànica 3/1981 (LODP).',
		},
		{
			id: 'T20_LEG_03',
			tipus: 'legislacio',
			enunciat:
				'Quin article preveu el procediment preferent i sumari per protegir drets de l’art. 14 i la Secció 1a (arts. 15–29)?',
			opcions: ['Art. 53.2 CE', 'Art. 54 CE', 'Art. 106.2 CE', 'Art. 161.2 CE'],
			correcta: 0,
			explicacio: 'La garantia judicial ordinària preferent i sumària es preveu a l’art. 53.2 CE.',
		},
		{
			id: 'T20_LEG_04',
			tipus: 'legislacio',
			enunciat:
				'Quin article atribueix als tribunals el control de la legalitat de l’actuació administrativa i la seva adequació a la finalitat que la justifica?',
			opcions: ['Art. 106.1 CE', 'Art. 106.2 CE', 'Art. 124 CE', 'Art. 54 CE'],
			correcta: 0,
			explicacio: 'Control judicial de l’Administració: art. 106.1 CE.',
		},
		{
			id: 'T20_LEG_05',
			tipus: 'legislacio',
			enunciat:
				'Quin article reconeix el dret a indemnització pels danys derivats del funcionament dels serveis públics (responsabilitat patrimonial)?',
			opcions: ['Art. 106.2 CE', 'Art. 106.1 CE', 'Art. 124 CE', 'Art. 53.1 CE'],
			correcta: 0,
			explicacio: 'Responsabilitat patrimonial: art. 106.2 CE.',
		},
		{
			id: 'T20_REL_01',
			tipus: 'relacionades',
			enunciat: 'El Defensor del Poble és, sobretot:',
			opcions: [
				'Un tribunal especialitzat en drets fonamentals',
				'Un alt comissionat de les Corts Generals que exerceix control extrajudicial sobre l’Administració',
				'Un òrgan del Poder Judicial amb competència sancionadora',
				'Una autoritat administrativa jeràrquica superior a totes les administracions',
			],
			correcta: 1,
			explicacio:
				'És un mecanisme extrajudicial (ombudsman) de control parlamentari: supervisa l’Administració i dona compte a les Corts.',
		},
		{
			id: 'T20_REL_02',
			tipus: 'relacionades',
			enunciat: 'Què significa que el Defensor del Poble té “independència funcional”?',
			opcions: [
				'Que depèn del Govern però actua amb autonomia tècnica',
				'Que no rep instruccions de cap autoritat',
				'Que pot donar ordres vinculants als jutges',
				'Que pot modificar reglaments sense autorització',
			],
			correcta: 1,
			explicacio:
				'Independència funcional: no rep instruccions de cap autoritat (ni Govern ni Corts en l’exercici de funcions).',
		},
		{
			id: 'T20_REL_03',
			tipus: 'relacionades',
			enunciat: 'Mandat i elecció del Defensor del Poble (segons el punt 20):',
			opcions: [
				'Mandat de 4 anys; elegit per majoria simple del Congrés',
				'Mandat de 5 anys; elegit per 3/5 del Congrés i confirmat per 3/5 del Senat',
				'Mandat de 6 anys; elegit només pel Senat',
				'Mandat de 9 anys; designació pel CGPJ',
			],
			correcta: 1,
			explicacio:
				'Clau d’examen: mandat de 5 anys i majoria qualificada 3/5 a Congrés i Senat.',
		},
		{
			id: 'T20_REL_04',
			tipus: 'relacionades',
			enunciat:
				'Qui pot presentar una queixa davant el Defensor del Poble (segons el punt 20)?',
			opcions: [
				'Només ciutadans espanyols majors d’edat',
				'Només funcionaris públics',
				'Qualsevol persona física o jurídica amb interès legítim, independentment de nacionalitat, residència o edat',
				'Només les persones residents a l’Estat',
			],
			correcta: 2,
			explicacio:
				'El punt 20 destaca l’amplitud: qualsevol persona física o jurídica amb interès legítim, sense requisits de nacionalitat/residència/edat.',
		},
		{
			id: 'T20_REL_05',
			tipus: 'relacionades',
			enunciat: 'En una investigació del Defensor del Poble, l’Administració:',
			opcions: [
				'Pot negar-se lliurement a col·laborar',
				'Només col·labora si ho ordena un jutge',
				'Té el deure legal de col·laborar',
				'Només col·labora si la queixa és col·lectiva',
			],
			correcta: 2,
			explicacio:
				'La supervisió implica poder d’investigació i deure legal de col·laboració per part de l’Administració.',
		},
		{
			id: 'T20_REL_06',
			tipus: 'relacionades',
			enunciat: 'Quins instruments utilitza principalment el Defensor del Poble?',
			opcions: [
				'Sentències i execució forçosa',
				'Recomanacions, advertiments, suggeriments i informes (no vinculants)',
				'Decrets amb força de llei',
				'Suspensió automàtica d’actes administratius',
			],
			correcta: 1,
			explicacio:
				'La seva força és la persuasió: recomanacions i informes, sense potestat anul·latòria o suspensiva.',
		},
		{
			id: 'T20_REL_07',
			tipus: 'relacionades',
			enunciat:
				'Quina afirmació és correcta sobre la legitimació del Defensor del Poble davant el TC?',
			opcions: [
				'No té cap legitimació constitucional davant el TC',
				'Pot interposar recurs d’inconstitucionalitat i recurs d’empara (art. 162 CE, segons el punt 20)',
				'Només pot interposar qüestió d’inconstitucionalitat',
				'Només pot interposar recurs d’empara si és persona afectada',
			],
			correcta: 1,
			explicacio:
				'El punt 20 destaca la legitimació del Defensor del Poble al TC per recurs d’inconstitucionalitat i empara.',
		},
		{
			id: 'T20_REL_08',
			tipus: 'relacionades',
			enunciat: 'Quina és la garantia principal dels drets segons l’art. 53 CE (punt 20)?',
			opcions: [
				'El Defensor del Poble',
				'La jurisdicció ordinària (jutges i tribunals), amb procediment preferent i sumari per a certs drets',
				'Només el Tribunal Constitucional',
				'Només el Ministeri Fiscal',
			],
			correcta: 1,
			explicacio:
				'El sistema és multinivell, però la primera i principal garantia és la jurisdicció ordinària (art. 53.2 CE).',
		},
		{
			id: 'T20_REL_09',
			tipus: 'relacionades',
			enunciat: 'Defensor del Poble vs Tribunal Constitucional: diferència clau (punt 20):',
			opcions: [
				'El Defensor dicta sentències vinculants; el TC fa recomanacions',
				'El Defensor és no jurisdiccional (recomanacions); el TC dicta sentències obligatòries i pot declarar nul·les normes amb rang de llei',
				'Tots dos són òrgans del Poder Judicial',
				'El TC és alt comissionat de les Corts i el Defensor és intèrpret suprem de la CE',
			],
			correcta: 1,
			explicacio:
				'Defensor = recomanacions/informes (no vinculants). TC = resolucions jurisdiccionals obligatòries (control de constitucionalitat i empara).',
		},
		{
			id: 'T20_REL_10',
			tipus: 'relacionades',
			enunciat:
				'Quina afirmació resumeix correctament la supervisió del Síndic de Greuges després de la STC 31/2010 (segons el punt 20)?',
			opcions: [
				'El Síndic té supervisió exclusiva sobre l’Administració catalana',
				'El Síndic no pot supervisar cap administració a Catalunya',
				'La supervisió sobre l’Administració catalana és concurrent: el Síndic actua, però el Defensor del Poble també pot actuar',
				'El Defensor del Poble no pot actuar sobre administració autonòmica ni local',
			],
			correcta: 2,
			explicacio:
				'Clau d’examen: concurrència (no exclusivitat) sobre l’Administració catalana segons doctrina constitucional indicada (STC 31/2010).',
		},
	],
};

const optionKeys = ['A', 'B', 'C', 'D', 'E'];

const bloc1Tema1Punt20Ask = punt20Ask.preguntes.map((item, index) => ({
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

export default bloc1Tema1Punt20Ask;
export { punt20Ask };
