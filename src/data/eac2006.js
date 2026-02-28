import { normalizeNormativaDataset } from '../templates/normativaTemplate';

const rawEACArticles = {
  '1': {
    queRegula: 'Defineix Catalunya com a nacionalitat i exerceix l’autogovern com a comunitat autònoma.',
    ideaClau: 'Naturalesa institucional de Catalunya dins el marc constitucional.',
    clauExamen: 'Punt clàssic per distingir principi d’autogovern i unitat constitucional.',
  },
  '2': {
    queRegula: 'Estableix que l’autogovern de Catalunya es fonamenta en la Constitució i en l’Estatut.',
    ideaClau: 'Subordinació de l’EAC a la CE i base jurídica de l’autonomia.',
    clauExamen: 'Frequent en preguntes sobre jerarquia normativa CE–EAC.',
  },
  '3': {
    queRegula: 'Regula les relacions institucionals amb l’Estat i el principi de lleialtat institucional.',
    ideaClau: 'Cooperació i respecte competencial entre Generalitat i Estat.',
    clauExamen: 'Ajuda a identificar límits de l’autonomia política.',
  },
  '4': {
    queRegula: 'Recull drets i principis rectors vinculats a ciutadania i poders públics catalans.',
    ideaClau: 'Funció orientadora del títol de drets de l’EAC.',
    clauExamen: 'Important per diferenciar drets estatutaris i drets fonamentals CE.',
  },
  '5': {
    queRegula: 'Defineix els drets històrics i altres elements identitaris en clau estatutària.',
    ideaClau: 'Projecció institucional dels elements històrics dins el marc constitucional.',
    clauExamen: 'Relacionat amb STC 31/2010 i interpretació conforme a la CE.',
  },
  '6': {
    queRegula: 'Regula la llengua pròpia i el règim lingüístic institucional de Catalunya.',
    ideaClau: 'Català com a llengua pròpia i cooficialitat amb el castellà.',
    clauExamen: 'Molt preguntable en règim lingüístic i drets lingüístics.',
  },
  '32': {
    queRegula: 'Reconeix drets i deures lingüístics en àmbits específics.',
    ideaClau: 'Garanties de no-discriminació lingüística.',
    clauExamen: 'Sovint apareix amb art. 6 EAC en preguntes de detall.',
  },
  '35': {
    queRegula: 'Regula drets lingüístics en l’àmbit educatiu i d’ús institucional.',
    ideaClau: 'Connexió entre llengua, educació i funció pública.',
    clauExamen: 'Tema recurrent en test de polítiques lingüístiques.',
  },
  '37': {
    queRegula: 'Principis interpretatius dels drets estatutaris.',
    ideaClau: 'Límit interpretatiu conforme CE i tractats internacionals.',
    clauExamen: 'Útil per diferenciar naturalesa jurídica de cada catàleg de drets.',
  },
  '38': {
    queRegula: 'Eficàcia i garanties dels drets reconeguts per l’EAC.',
    ideaClau: 'L’abast dels drets estatutaris depèn del marc competencial.',
    clauExamen: 'Pregunta típica sobre justiciabilitat de drets estatutaris.',
  },
  '39': {
    queRegula: 'Principis rectors que orienten les polítiques públiques de la Generalitat.',
    ideaClau: 'Guia material de l’acció pública autonòmica.',
    clauExamen: 'Convé distingir de drets directament exigibles.',
  },
  '40': {
    queRegula: 'Principis rectors en polítiques socials i econòmiques.',
    ideaClau: 'Orientació normativa de polítiques públiques.',
    clauExamen: 'Sovint es pregunta per la seva diferència amb drets subjectius.',
  },
  '50': {
    queRegula: 'Previsions en matèria lingüística i cultural dins competències de la Generalitat.',
    ideaClau: 'Promoció institucional de llengua i cultura pròpies.',
    clauExamen: 'Relacionable amb competències en cultura i educació.',
  },
  '56': {
    queRegula: 'Configura el Parlament de Catalunya com a institució representativa.',
    ideaClau: 'Centralitat del Parlament en l’autogovern.',
    clauExamen: 'Essencial per preguntes sobre estructura institucional.',
  },
  '57': {
    queRegula: 'Règim electoral i representació parlamentària bàsica.',
    ideaClau: 'Base de legitimitat democràtica del Parlament.',
    clauExamen: 'Apareix en comparativa amb règim electoral estatal.',
  },
  '58': {
    queRegula: 'Organització i funcionament intern del Parlament.',
    ideaClau: 'Autonomia parlamentària i reglament.',
    clauExamen: 'Frequent en preguntes de procediment parlamentari.',
  },
  '63': {
    queRegula: 'Funcions de control i impuls polític del Parlament.',
    ideaClau: 'Control parlamentari del Govern.',
    clauExamen: 'Preguntable amb moció de censura i qüestió de confiança.',
  },
  '67': {
    queRegula: 'President o presidenta de la Generalitat: elecció i posició institucional.',
    ideaClau: 'Cap institucional de la Generalitat i direcció del Govern.',
    clauExamen: 'Tema nuclear sobre investidura i funcions.',
  },
  '68': {
    queRegula: 'Nomenament i cessament del president/a i règim bàsic.',
    ideaClau: 'Regles institucionals de continuïtat i responsabilitat política.',
    clauExamen: 'Sol aparèixer amb art. 67 en bateria test.',
  },
  '69': {
    queRegula: 'Règim de suplència, incompatibilitats i estatut del president/a.',
    ideaClau: 'Garantia institucional de l’exercici del càrrec.',
    clauExamen: 'Pregunta típica de detall institucional.',
  },
  '70': {
    queRegula: 'Funcions essencials del president/a en relació amb Govern i representació.',
    ideaClau: 'Direcció política i representació ordinària de l’Estat a Catalunya.',
    clauExamen: 'Important per distingir funcions presidencials i governamentals.',
  },
  '71': {
    queRegula: 'Govern de la Generalitat: composició i naturalesa.',
    ideaClau: 'Òrgan col·legiat de direcció política i administrativa.',
    clauExamen: 'Sovint demanat en estructura institucional bàsica.',
  },
  '72': {
    queRegula: 'Competències i atribucions del Govern.',
    ideaClau: 'Exercici executiu i potestat reglamentària autonòmica.',
    clauExamen: 'Relacionable amb art. 97 CE per comparació.',
  },
  '73': {
    queRegula: 'Funcionament intern del Govern i presa de decisions.',
    ideaClau: 'Col·legialitat i responsabilitat política.',
    clauExamen: 'Punt típic de preguntes sobre òrgans executius.',
  },
  '74': {
    queRegula: 'Règim dels consellers i estructura departamental.',
    ideaClau: 'Organització de l’executiu autonòmic.',
    clauExamen: 'Útil per preguntes de detall orgànic.',
  },
  '75': {
    queRegula: 'Administració de la Generalitat i principis de funcionament.',
    ideaClau: 'Projecta principis d’eficàcia i servei públic en clau autonòmica.',
    clauExamen: 'Frequent en connexió amb art. 103 CE.',
  },
  '76': {
    queRegula: 'Consell de Garanties Estatutàries: funció consultiva de control normatiu.',
    ideaClau: 'Control preventiu estatutari de constitucionalitat i estatutarietat.',
    clauExamen: 'Clàssic de preguntes sobre garanties institucionals.',
  },
  '77': {
    queRegula: 'Síndic de Greuges i altres institucions de garantia.',
    ideaClau: 'Mecanismes no jurisdiccionals de tutela de drets.',
    clauExamen: 'Comparativa habitual amb Defensor del Poble.',
  },
  '80': {
    queRegula: 'Sindicatura de Comptes: control extern economicofinancer del sector públic català.',
    ideaClau: 'Fiscalització i rendició de comptes.',
    clauExamen: 'Tema de control institucional i transparència.',
  },
  '81': {
    queRegula: 'Consell de l’Audiovisual i garanties en l’àmbit comunicatiu.',
    ideaClau: 'Supervisió independent en espai audiovisual català.',
    clauExamen: 'Pregunta freqüent sobre institucions pròpies.',
  },
  '97': {
    queRegula: 'Règim del poder judicial a Catalunya en el marc competencial constitucional.',
    ideaClau: 'No hi ha poder judicial autonòmic independent del poder judicial únic.',
    clauExamen: 'Punt molt vinculat a STC 31/2010.',
  },
  '98': {
    queRegula: 'Consell de Justícia de Catalunya i funcions en el marc estatal.',
    ideaClau: 'Òrgan estatutari amb límits constitucionals d’encaix.',
    clauExamen: 'Pregunta clàssica sobre invalidacions/interpretacions STC 31/2010.',
  },
  '99': {
    queRegula: 'Administració de justícia i participació institucional autonòmica.',
    ideaClau: 'Competències autonòmiques de suport en justícia.',
    clauExamen: 'Diferenciar funció jurisdiccional i gestió de mitjans.',
  },
  '100': {
    queRegula: 'Mitjans personals i materials de l’Administració de justícia.',
    ideaClau: 'Àmbit de gestió autonòmica en justícia.',
    clauExamen: 'Frequent en test de delimitació competencial.',
  },
  '110': {
    queRegula: 'Competències exclusives de la Generalitat: règim i efectes.',
    ideaClau: 'Capacitat normativa i executiva en àmbits atribuïts.',
    clauExamen: 'Bàsic per distingir tipus de competència estatutària.',
  },
  '111': {
    queRegula: 'Competències compartides i abast normatiu autonòmic.',
    ideaClau: 'Relació entre bases estatals i desenvolupament autonòmic.',
    clauExamen: 'Pregunta recurrent sobre bases i desenvolupament.',
  },
  '112': {
    queRegula: 'Competències executives i potestat reglamentària d’execució.',
    ideaClau: 'Execució autonòmica de normativa estatal en àmbits corresponents.',
    clauExamen: 'Important en test de tècniques de repartiment competencial.',
  },
  '116': {
    queRegula: 'Competències en agricultura, ramaderia i desenvolupament rural.',
    ideaClau: 'Exemple de competències sectorials de la Generalitat.',
    clauExamen: 'Serveix per practicar tipologia competencial.',
  },
  '117': {
    queRegula: 'Competències en aigua i aprofitaments hidràulics en l’àmbit estatutari.',
    ideaClau: 'Matèria compartida amb alta conflictivitat competencial.',
    clauExamen: 'Pregunta habitual amb connexió a títols estatals.',
  },
  '119': {
    queRegula: 'Competències en pesca i activitats marítimes interiors.',
    ideaClau: 'Exemple de repartiment funcional sectorial.',
    clauExamen: 'Diferenciar competència exclusiva, compartida i executiva.',
  },
  '120': {
    queRegula: 'Competències en comerç i activitats econòmiques afins.',
    ideaClau: 'Espai regulador autonòmic condicionat per bases estatals.',
    clauExamen: 'Bona matèria per preguntes de delimitació.',
  },
  '131': {
    queRegula: 'Educació: marc competencial de la Generalitat.',
    ideaClau: 'Desenvolupament autonòmic dins condicions bàsiques estatals.',
    clauExamen: 'Pregunta molt freqüent en competències sectorials.',
  },
  '132': {
    queRegula: 'Universitats i recerca en l’àmbit competencial català.',
    ideaClau: 'Autonomia universitària i competència autonòmica de desplegament.',
    clauExamen: 'Sovint combinat amb CE art. 149.1.30.',
  },
  '133': {
    queRegula: 'Energia i sectors productius en l’espai estatutari.',
    ideaClau: 'Exemple de competències econòmiques amb bases estatals.',
    clauExamen: 'Tema típic de conflictes competencials.',
  },
  '136': {
    queRegula: 'Mitjans de comunicació i audiovisual en l’àmbit competencial català.',
    ideaClau: 'Règim autonòmic de mitjans dins marc constitucional.',
    clauExamen: 'Relacionable amb institucions estatutàries de control.',
  },
  '140': {
    queRegula: 'Infraestructures i transports en l’àmbit de competències de Catalunya.',
    ideaClau: 'Distribució material entre interès general estatal i interès autonòmic.',
    clauExamen: 'Pregunta clàssica de delimitació.',
  },
  '144': {
    queRegula: 'Medi ambient: competències de protecció i regulació.',
    ideaClau: 'Àmbit compartit especialment rellevant en test.',
    clauExamen: 'Cal diferenciar bases estatals i desenvolupament autonòmic.',
  },
  '145': {
    queRegula: 'Espais naturals i polítiques de conservació.',
    ideaClau: 'Projecció competencial ambiental autonòmica.',
    clauExamen: 'Habitual en preguntes sectorials.',
  },
  '146': {
    queRegula: 'Ordenació territorial i urbanisme en l’autogovern català.',
    ideaClau: 'Competència estructural de gran incidència pràctica.',
    clauExamen: 'Frequent en oposicions per la seva aplicació transversal.',
  },
  '149': {
    queRegula: 'Obres públiques i infraestructures de titularitat autonòmica.',
    ideaClau: 'Articulació entre planificació territorial i competència executiva.',
    clauExamen: 'Pregunta de tècnica competencial.',
  },
  '150': {
    queRegula: 'Ports, aeroports i altres infraestructures: delimitació estatutari-constitucional.',
    ideaClau: 'Diferència entre infraestructures d’interès general i autonòmic.',
    clauExamen: 'Molt útil per test de fronteres competencials.',
  },
  '152': {
    queRegula: 'Règim de l’economia catalana en el marc competencial de la Generalitat.',
    ideaClau: 'Direcció econòmica amb límits de les bases estatals.',
    clauExamen: 'Relació directa amb CE 149.1.13.',
  },
  '153': {
    queRegula: 'Política financera i tributària en l’àmbit estatutari.',
    ideaClau: 'Connexió entre autonomia financera i coordinació estatal.',
    clauExamen: 'Pregunta típica en tema de finançament.',
  },
  '154': {
    queRegula: 'Competències sobre entitats financeres i economia social.',
    ideaClau: 'Espai competencial condicionat per regulació bàsica estatal.',
    clauExamen: 'Sovint surt en preguntes de matèries econòmiques.',
  },
  '162': {
    queRegula: 'Competències en salut pública i sistema sanitari.',
    ideaClau: 'Gestió autonòmica amb bases estatals comunes.',
    clauExamen: 'Pregunta recurrent en competències de benestar.',
  },
  '165': {
    queRegula: 'Competències en seguretat social complementària i serveis associats.',
    ideaClau: 'Límit entre caixa única estatal i gestió autonòmica de serveis.',
    clauExamen: 'Tema clau de delimitació constitucional.',
  },
  '166': {
    queRegula: 'Competències en serveis socials i atenció a les persones.',
    ideaClau: 'Nucli de l’acció social de la Generalitat.',
    clauExamen: 'Molt habitual en test sobre polítiques públiques.',
  },
  '170': {
    queRegula: 'Competències en treball i relacions laborals dins marc constitucional.',
    ideaClau: 'Execució autonòmica en un àmbit amb fort component estatal bàsic.',
    clauExamen: 'Pregunta freqüent per diferenciar normativa i execució.',
  },
  '184': {
    queRegula: 'Relacions institucionals de la Generalitat amb la Unió Europea.',
    ideaClau: 'Participació autonòmica en assumptes europeus segons competències.',
    clauExamen: 'Clàssic en bloc d’acció exterior i UE.',
  },
  '185': {
    queRegula: 'Participació en formació de la posició estatal davant institucions de la UE.',
    ideaClau: 'Canalització de la veu autonòmica en assumptes europeus.',
    clauExamen: 'Pregunta habitual sobre coordinació Estat-Generalitat.',
  },
  '189': {
    queRegula: 'Aplicació i execució del dret de la Unió Europea en competències de la Generalitat.',
    ideaClau: 'Execució autonòmica del dret UE dins àmbit competencial propi.',
    clauExamen: 'Relacionable amb CE 93 i 149.1.3.',
  },
  '191': {
    queRegula: 'Projecció exterior de la Generalitat en matèries de la seva competència.',
    ideaClau: 'Acció exterior autonòmica no equivalent a relacions internacionals estatals.',
    clauExamen: 'Molt preguntable amb STC 31/2010.',
  },
  '193': {
    queRegula: 'Acció exterior de Catalunya i instruments de representació.',
    ideaClau: 'Desplegament exterior en clau competencial.',
    clauExamen: 'Punt típic en pregunta trampa amb CE 149.1.3.',
  },
  '194': {
    queRegula: 'Delegacions i oficines de representació exterior.',
    ideaClau: 'Presència exterior de la Generalitat subordinada al marc estatal.',
    clauExamen: 'Sovint apareix en test de límits institucionals.',
  },
  '195': {
    queRegula: 'Coordinació de l’acció exterior amb l’Estat.',
    ideaClau: 'Evitar invasió de la competència estatal en relacions internacionals.',
    clauExamen: 'Tema recurrent amb jurisprudència constitucional.',
  },
  '199': {
    queRegula: 'Cooperació transfronterera i interregional dins marcs jurídics aplicables.',
    ideaClau: 'Cooperació exterior funcional, no sobirana.',
    clauExamen: 'Pregunta habitual de matís competencial.',
  },
  '200': {
    queRegula: 'Participació en organismes i xarxes internacionals en àmbits competencials propis.',
    ideaClau: 'Internacionalització funcional de l’autogovern.',
    clauExamen: 'Sovint en preguntes sobre projecció europea.',
  },
  '201': {
    queRegula: 'Principis del sistema de finançament de la Generalitat.',
    ideaClau: 'Autonomia financera, suficiència i corresponsabilitat fiscal.',
    clauExamen: 'Molt preguntable en tema de finançament.',
  },
  '202': {
    queRegula: 'Recursos financers de la Generalitat.',
    ideaClau: 'Catàleg de recursos en coherència amb CE i LOFCA.',
    clauExamen: 'Pregunta de memòria freqüent.',
  },
  '204': {
    queRegula: 'Participació en rendiments tributaris i mecanismes de coordinació.',
    ideaClau: 'Connexió entre recursos propis i sistema general.',
    clauExamen: 'Tema clau de test de finançament.',
  },
  '206.5': {
    queRegula: 'Criteris de solidaritat i ordinalitat en el sistema de finançament.',
    ideaClau: 'Principi d’equilibri entre autonomia financera i solidaritat.',
    clauExamen: 'Molt vinculat a interpretació STC 31/2010.',
  },
  '210': {
    queRegula: 'Agència Tributària de Catalunya i competències de gestió tributària.',
    ideaClau: 'Instrument institucional clau de l’autonomia financera.',
    clauExamen: 'Pregunta clàssica sobre òrgans financers estatutaris.',
  },
  '222': {
    queRegula: 'Procediment de reforma estatutària per via ordinària.',
    ideaClau: 'Rigidesa estatutària i participació de diverses institucions.',
    clauExamen: 'Pregunta típica en comparativa amb reforma constitucional.',
  },
  '223': {
    queRegula: 'Procediments especials i ratificació en la reforma de l’EAC.',
    ideaClau: 'Garanties reforçades de legitimitat en canvis estatutaris.',
    clauExamen: 'Frequent en test sobre reforma EAC.',
  },
};

export const EACArticles = normalizeNormativaDataset(rawEACArticles, {
  titleBuilder: (article) => `Article ${article} EAC`,
});
