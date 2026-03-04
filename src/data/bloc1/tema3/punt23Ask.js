// punt23Ask.js
// Bloc I · Tema 3 · Punt 23 — El Banc Europeu d’Inversions (BEI)
// 20 preguntes tipus test (5 trampa, 5 legislació, 10 conceptes) amb explicació de correcta i incorrectes.

export const preguntes = [

/* =====================================================
   PREGUNTES TRAMPA (1–5)
===================================================== */

{
  id: 1,
  tipus: "trampa",
  pregunta: "Quina afirmació descriu millor la naturalesa del Banc Europeu d’Inversions (BEI)?",
  opcions: [
    "És el banc central de la Unió Europea i fixa els tipus d’interès oficials",
    "És una institució financera de la UE que finança inversions a llarg termini sense finalitat lucrativa",
    "És una agència executiva de la Comissió amb funcions pressupostàries",
    "És un tribunal financer encarregat de sancionar irregularitats en la despesa europea"
  ],
  correcta: 1,
  explicacioCorrecta: "El BEI és el banc públic de la UE dedicat al finançament d’inversions a llarg termini, amb personalitat jurídica pròpia i sense finalitat lucrativa.",
  explicacioIncorrecta: {
    0: "Això correspon al BCE; el BEI no fa política monetària ni fixa tipus oficials.",
    2: "El BEI no és una agència executiva de la Comissió ni gestiona el pressupost.",
    3: "No és un òrgan sancionador ni jurisdiccional; el control financer extern correspon al Tribunal de Comptes."
  }
},

{
  id: 2,
  tipus: "trampa",
  pregunta: "Com obté principalment els recursos que després presta o garanteix el BEI?",
  opcions: [
    "Mitjançant impostos europeus recaptats directament",
    "Mitjançant emissions i captació de fons als mercats de capitals",
    "Mitjançant multes imposades als estats membres",
    "Mitjançant transferències automàtiques del pressupost del Parlament Europeu"
  ],
  correcta: 1,
  explicacioCorrecta: "El BEI recorre als mercats de capitals per captar fons i canalitzar-los cap a projectes d’interès europeu.",
  explicacioIncorrecta: {
    0: "La UE no recapta impostos directament per finançar el BEI com a font principal.",
    2: "Les multes no són la base del seu finançament.",
    3: "No depèn d’una transferència automàtica del pressupost del Parlament."
  }
},

{
  id: 3,
  tipus: "trampa",
  pregunta: "Els membres (accionistes) del BEI són:",
  opcions: [
    "La Comissió Europea i el Parlament Europeu",
    "Els estats membres de la Unió Europea",
    "Les regions i municipis a través del Comitè de les Regions",
    "Bancs comercials europeus que hi participen voluntàriament"
  ],
  correcta: 1,
  explicacioCorrecta: "D’acord amb l’art. 308 TFUE, els membres del BEI són exclusivament els estats membres de la UE.",
  explicacioIncorrecta: {
    0: "Les institucions de la UE no són accionistes del BEI.",
    2: "Les regions i municipis no en són accionistes.",
    3: "No és una entitat de participació voluntària de bancs comercials."
  }
},

{
  id: 4,
  tipus: "trampa",
  pregunta: "Quina és una diferència essencial entre el BEI i el BCE?",
  opcions: [
    "El BEI és un òrgan jurisdiccional i el BCE no",
    "El BEI finança inversions a llarg termini; el BCE dirigeix la política monetària de l’euro",
    "El BEI controla la legalitat de les despeses europees; el BCE no",
    "El BEI aprova directament directives; el BCE només emet dictàmens"
  ],
  correcta: 1,
  explicacioCorrecta: "El BEI és el braç inversor (finançament a llarg termini) mentre que el BCE dirigeix la política monetària de la zona euro.",
  explicacioIncorrecta: {
    0: "Cap dels dos és un òrgan jurisdiccional.",
    2: "El control extern de comptes és del Tribunal de Comptes, no del BEI.",
    3: "Ni el BEI ni el BCE aproven directives; això correspon al Parlament i al Consell."
  }
},

{
  id: 5,
  tipus: "trampa",
  pregunta: "Quina afirmació és correcta sobre la finalitat del BEI?",
  opcions: [
    "Persegueix beneficis com a objectiu principal com qualsevol banc comercial",
    "No té finalitat lucrativa i orienta l’activitat a objectius comunitaris",
    "És un organisme de subvencions, no concedeix préstecs",
    "Només finança projectes fora de la UE"
  ],
  correcta: 1,
  explicacioCorrecta: "El BEI actua sota criteris d’objectivitat i no persegueix finalitats lucratives; finança projectes alineats amb objectius de la UE.",
  explicacioIncorrecta: {
    0: "No és un banc comercial orientat al lucre.",
    2: "Opera principalment amb préstecs i garanties (art. 309 TFUE), no només subvencions.",
    3: "Finança sobretot dins la UE, tot i que pot cofinançar projectes estratègics amb dimensió internacional."
  }
},

/* =====================================================
   PREGUNTES LEGISLACIÓ (6–10)
===================================================== */

{
  id: 6,
  tipus: "legislacio",
  pregunta: "Quins articles del TFUE constitueixen el nucli del fonament jurídic del BEI segons el text base?",
  opcions: [
    "Arts. 300–304 TFUE",
    "Arts. 308–309 TFUE",
    "Arts. 285–287 TFUE",
    "Arts. 5–6 TUE"
  ],
  correcta: 1,
  explicacioCorrecta: "El text base assenyala els arts. 308 i 309 TFUE com a fonament jurídic del BEI.",
  explicacioIncorrecta: {
    0: "Aquests articles regulen òrgans consultius (CESE, CdR), no el BEI.",
    2: "Aquests articles regulen el Tribunal de Comptes Europeu.",
    3: "L’art. 5 TUE tracta subsidiarietat; no és el fonament específic del BEI."
  }
},

{
  id: 7,
  tipus: "legislacio",
  pregunta: "Quin article del TFUE reconeix la personalitat jurídica del BEI i que els seus membres són els estats membres?",
  opcions: [
    "Art. 308 TFUE",
    "Art. 309 TFUE",
    "Art. 310 TFUE",
    "Art. 300 TFUE"
  ],
  correcta: 0,
  explicacioCorrecta: "L’art. 308 TFUE estableix la personalitat jurídica del BEI i que els seus membres són exclusivament els estats membres.",
  explicacioIncorrecta: {
    1: "L’art. 309 TFUE concreta la missió i les modalitats de finançament (préstecs i garanties).",
    2: "L’art. 310 TFUE fa referència al pressupost de la UE, no al BEI.",
    3: "L’art. 300 TFUE tracta la base dels òrgans consultius, no del BEI."
  }
},

{
  id: 8,
  tipus: "legislacio",
  pregunta: "Segons el text base, els Estatuts del BEI tenen rang de dret originari perquè:",
  opcions: [
    "Són un reglament del Parlament Europeu publicat al DOUE",
    "Figuren en un protocol annex als Tractats",
    "Són una decisió de la Comissió Europea amb efecte directe",
    "Són part del dret nacional dels estats membres"
  ],
  correcta: 1,
  explicacioCorrecta: "Els Estatuts del BEI consten en un protocol annex als Tractats, i per això tenen el mateix rang que el dret originari.",
  explicacioIncorrecta: {
    0: "No són un reglament del Parlament.",
    2: "No són una decisió de la Comissió.",
    3: "No són dret nacional; formen part del dret originari de la UE."
  }
},

{
  id: 9,
  tipus: "legislacio",
  pregunta: "Quin article del TFUE descriu la missió del BEI i les modalitats de finançament mitjançant préstecs i garanties?",
  opcions: [
    "Art. 309 TFUE",
    "Art. 308 TFUE",
    "Art. 287 TFUE",
    "Art. 301 TFUE"
  ],
  correcta: 0,
  explicacioCorrecta: "L’art. 309 TFUE detalla la missió del BEI i que opera mitjançant préstecs i garanties.",
  explicacioIncorrecta: {
    1: "L’art. 308 TFUE tracta personalitat jurídica i membres (estats membres).",
    2: "L’art. 287 TFUE és del Tribunal de Comptes.",
    3: "L’art. 301 TFUE és sobre el CESE (membres), no el BEI."
  }
},

{
  id: 10,
  tipus: "legislacio",
  pregunta: "Segons el text base, la modificació dels Estatuts del BEI està sotmesa a:",
  opcions: [
    "Procediment legislatiu ordinari (majoria qualificada)",
    "Procediment legislatiu especial: unanimitat al Consell, prèvia consulta al Parlament i a la Comissió",
    "Decisió exclusiva de la Comissió Europea",
    "Aprovació per referèndum en tots els estats membres"
  ],
  correcta: 1,
  explicacioCorrecta: "El text base indica procediment legislatiu especial: decisió per unanimitat al Consell, prèvia consulta al Parlament Europeu i a la Comissió.",
  explicacioIncorrecta: {
    0: "No és procediment ordinari; es requereix unanimitat.",
    2: "La Comissió no pot modificar unilateralment Estatuts de rang originari.",
    3: "No és un procediment de referèndum generalitzat."
  }
},

/* =====================================================
   PREGUNTES CONCEPTES (11–20)
===================================================== */

{
  id: 11,
  tipus: "concepte",
  pregunta: "Quina és la missió fonamental del BEI segons el text base?",
  opcions: [
    "Controlar la legalitat de la despesa pública de la UE",
    "Contribuir al desenvolupament equilibrat i estable del mercat interior en interès de la Unió",
    "Fixar el tipus d’interès de l’euro i la política monetària",
    "Representar la societat civil organitzada en el procés legislatiu"
  ],
  correcta: 1,
  explicacioCorrecta: "El BEI contribueix al desenvolupament equilibrat i estable del mercat interior finançant inversions a llarg termini.",
  explicacioIncorrecta: {
    0: "Això correspon al Tribunal de Comptes Europeu.",
    2: "Això correspon al BCE.",
    3: "Això correspon al CESE."
  }
},

{
  id: 12,
  tipus: "concepte",
  pregunta: "Quins són els tres òrgans principals de direcció del BEI segons el text base?",
  opcions: [
    "Consell Europeu, Consell de la UE i Parlament Europeu",
    "Consell de Governadors, Consell d’Administració i Comitè de Direcció",
    "Comissió, Banc Central Europeu i Tribunal de Comptes",
    "Comitè de les Regions, CESE i Comissió"
  ],
  correcta: 1,
  explicacioCorrecta: "El BEI s’organitza en Consell de Governadors, Consell d’Administració i Comitè de Direcció.",
  explicacioIncorrecta: {
    0: "Aquests són òrgans institucionals generals, no l’estructura del BEI.",
    2: "No són els òrgans de govern del BEI.",
    3: "Aquests són òrgans consultius/altres institucions."
  }
},

{
  id: 13,
  tipus: "concepte",
  pregunta: "Quina funció és pròpia del Consell de Governadors del BEI?",
  opcions: [
    "Gestionar els assumptes corrents del Banc dia a dia",
    "Fixar directrius generals de política de crèdit i aprovar el balanç anual",
    "Emetre dictàmens previs sobre totes les operacions de finançament",
    "Controlar la legalitat i regularitat dels comptes de la UE"
  ],
  correcta: 1,
  explicacioCorrecta: "El Consell de Governadors fixa directrius generals, aprova el balanç anual i decideix augments de capital.",
  explicacioIncorrecta: {
    0: "Això correspon al Comitè de Direcció (gestió ordinària).",
    2: "El dictamen previ correspon a la Comissió Europea segons el text base.",
    3: "Això correspon al Tribunal de Comptes."
  }
},

{
  id: 14,
  tipus: "concepte",
  pregunta: "Quina funció és característica del Consell d’Administració del BEI segons el text base?",
  opcions: [
    "Decidir sobre la concessió de finançament i la contractació d’emprèstits",
    "Representar els interessos de les regions i municipis",
    "Aprovar el pressupost anual de la UE",
    "Dictar sentències en matèria financera europea"
  ],
  correcta: 0,
  explicacioCorrecta: "El Consell d’Administració decideix sobre finançament i emprèstits i fixa tipus d’interès dels préstecs.",
  explicacioIncorrecta: {
    1: "Això correspon al Comitè de les Regions.",
    2: "El pressupost de la UE l’elaboren/aproven institucions pressupostàries, no el BEI.",
    3: "No és un òrgan jurisdiccional."
  }
},

{
  id: 15,
  tipus: "concepte",
  pregunta: "Quina és la tasca principal del Comitè de Direcció del BEI?",
  opcions: [
    "Exercir el control extern dels fons europeus",
    "Gestionar ordinàriament el Banc i executar les decisions del Consell d’Administració",
    "Aprovar increments de capital del BEI",
    "Fixar la política monetària de l’euro"
  ],
  correcta: 1,
  explicacioCorrecta: "El Comitè de Direcció és l’òrgan executiu: gestió ordinària i execució de decisions del Consell d’Administració.",
  explicacioIncorrecta: {
    0: "Això és del Tribunal de Comptes Europeu.",
    2: "Això correspon al Consell de Governadors.",
    3: "Això és del BCE."
  }
},

{
  id: 16,
  tipus: "concepte",
  pregunta: "Quina característica del capital del BEI contribueix a la seva elevada solvència als mercats?",
  opcions: [
    "Tot el capital està desemborsat íntegrament des del primer dia",
    "Existeix capital garantit (no desemborsat) que reforça la solvència",
    "Es finança principalment amb impostos europeus",
    "El BEI només concedeix subvencions, no préstecs"
  ],
  correcta: 1,
  explicacioCorrecta: "Una part del capital no és desemborsada i actua com a capital garantit, reforçant solvència i facilitant qualificació elevada.",
  explicacioIncorrecta: {
    0: "El text base indica que només una part és desemborsada.",
    2: "El finançament principal és via mercats de capitals.",
    3: "El BEI concedeix préstecs i garanties."
  }
},

{
  id: 17,
  tipus: "concepte",
  pregunta: "Quina és una línia d’actuació destacada del BEI segons el text base?",
  opcions: [
    "Finançament d’infraestructures en energia i transport",
    "Control jurisdiccional del principi de subsidiarietat",
    "Emissió de dictàmens obligatoris sobre política social",
    "Autorització de l’emissió de l’euro"
  ],
  correcta: 0,
  explicacioCorrecta: "El BEI prioritza projectes d’infraestructura (energia, transport) i altres àrees estratègiques.",
  explicacioIncorrecta: {
    1: "Això s’associa al CdR i, en darrera instància, al TJUE; no és funció del BEI.",
    2: "Això és del CESE (dictàmens) i altres òrgans consultius, no del BEI.",
    3: "Això correspon al BCE en el marc de l’eurosistema."
  }
},

{
  id: 18,
  tipus: "concepte",
  pregunta: "En política de cohesió, el paper del BEI es descriu com:",
  opcions: [
    "Substitueix els fons estructurals (FEDER, FSE) amb subvencions directes",
    "Complementa els fons estructurals amb préstecs en condicions avantatjoses",
    "Elimina la necessitat de política regional a la UE",
    "Limita el finançament només a les regions més riques"
  ],
  correcta: 1,
  explicacioCorrecta: "El BEI actua com a soci financer: complementa subvencions dels fons estructurals amb préstecs favorables.",
  explicacioIncorrecta: {
    0: "No substitueix els fons estructurals; els complementa.",
    2: "No elimina polítiques; n’és un instrument d’execució financera.",
    3: "Precisament dona suport a regions menys desenvolupades per reduir disparitats."
  }
},

{
  id: 19,
  tipus: "concepte",
  pregunta: "Quina és la relació del BEI amb la Comissió Europea segons el text base?",
  opcions: [
    "La Comissió fixa els tipus d’interès dels préstecs del BEI",
    "La Comissió emet un dictamen previ sobre les operacions de finançament del BEI",
    "La Comissió és accionista majoritària del BEI",
    "La Comissió controla jurisdiccionalment les operacions del BEI"
  ],
  correcta: 1,
  explicacioCorrecta: "El text base indica que la Comissió emet un dictamen previ sobre les operacions de finançament per assegurar coherència amb polítiques de la UE.",
  explicacioIncorrecta: {
    0: "Segons el text base, aquesta funció correspon al Consell d’Administració del BEI.",
    2: "Els accionistes són els estats membres, no la Comissió.",
    3: "La Comissió no exerceix control jurisdiccional."
  }
},

{
  id: 20,
  tipus: "concepte",
  pregunta: "Per què es considera el BEI un instrument estratègic de la UE segons el text base?",
  opcions: [
    "Perquè transforma prioritats polítiques en inversions reals i mobilitza inversió privada",
    "Perquè imposa sancions als estats membres que incompleixen objectius climàtics",
    "Perquè aprova normes europees en matèria d’inversions",
    "Perquè controla la legalitat i regularitat dels comptes de la UE"
  ],
  correcta: 0,
  explicacioCorrecta: "El BEI mobilitza inversió, finança projectes estratègics i converteix prioritats polítiques en realitats econòmiques i físiques.",
  explicacioIncorrecta: {
    1: "No és un òrgan sancionador.",
    2: "No té potestat legislativa.",
    3: "Això correspon al Tribunal de Comptes."
  }
}

];