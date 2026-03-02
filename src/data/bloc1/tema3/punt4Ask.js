// src/data/bloc-1/tema-3/ask/punt4Ask.js
export const punt4Ask = {
  title: "Bloc I · Tema 3 · Punt 4 — Funció de control del Govern pel Parlament",
  questions: [

    /* =========================
       5 PREGUNTES DE LEGISLACIÓ
    ========================== */

    {
      type: "legislacio",
      question: "Quin article de la CE predetermina el model institucional parlamentari de determinades comunitats autònomes (assemblea legislativa, consell de govern i president elegit per l’assemblea)?",
      options: ["Art. 152.1 CE", "Art. 153 CE", "Art. 112 CE", "Art. 66.2 CE"],
      correct: 0,
      explanationCorrect: "L’art. 152.1 CE defineix l’esquema institucional bàsic: assemblea legislativa, consell de govern i president elegit per l’assemblea.",
      explanationIncorrect: [
        "",
        "Incorrecte. L’art. 153 CE regula el control jurisdiccional de l’activitat dels òrgans autonòmics.",
        "Incorrecte. L’art. 112 CE regula la qüestió de confiança (àmbit estatal).",
        "Incorrecte. L’art. 66.2 CE atribueix la potestat legislativa estatal a les Corts Generals."
      ]
    },

    {
      type: "legislacio",
      question: "Quin article de l’EAC estableix explícitament que el Parlament controla i impulsa l’acció política i de govern?",
      options: ["Art. 55.2 EAC", "Art. 74.1 EAC", "Art. 75 EAC", "Art. 67.3 EAC"],
      correct: 0,
      explanationCorrect: "L’art. 55.2 EAC disposa que el Parlament controla i impulsa l’acció política i de govern.",
      explanationIncorrect: [
        "",
        "Incorrecte. L’art. 74.1 EAC tracta la responsabilitat política (solidària) del president i consellers.",
        "Incorrecte. L’art. 75 EAC regula la dissolució anticipada del Parlament.",
        "Incorrecte. L’art. 67.3 EAC regula la dissolució automàtica per investidura fallida."
      ]
    },

    {
      type: "legislacio",
      question: "Segons l’art. 74.1 EAC, el president i els consellers responen políticament davant el Parlament:",
      options: ["De manera individual només", "De manera solidària", "Només davant els tribunals", "Només davant el Rei"],
      correct: 1,
      explanationCorrect: "L’art. 74.1 EAC estableix la responsabilitat política solidària del president i dels consellers davant el Parlament.",
      explanationIncorrect: [
        "Incorrecte. Tot i existir responsabilitat directa de consellers per la seva gestió, l’EAC parla de responsabilitat solidària davant el Parlament.",
        "",
        "Incorrecte. La responsabilitat judicial és diferent de la política i s’exigeix davant tribunals.",
        "Incorrecte. El Rei no és el subjecte davant el qual es respon políticament a Catalunya."
      ]
    },

    {
      type: "legislacio",
      question: "La moció de censura a Catalunya, segons el text base, és constructiva i requereix majoria absoluta. Aquesta idea connecta amb:",
      options: ["Art. 113 CE i art. 43 Llei 13/2008", "Art. 112 CE i art. 44 Llei 13/2008", "Art. 153 CE i art. 75 EAC", "Art. 66.2 CE i art. 55.2 EAC"],
      correct: 0,
      explanationCorrect: "La moció de censura constructiva s’emmarca a l’art. 113 CE i es concreta a la Llei 13/2008 (art. 43).",
      explanationIncorrect: [
        "",
        "Incorrecte. Art. 112 CE i art. 44 Llei 13/2008 s’associen a la qüestió de confiança.",
        "Incorrecte. Art. 153 CE és control jurisdiccional i art. 75 EAC és dissolució.",
        "Incorrecte. Aquests articles no regulen la moció de censura."
      ]
    },

    {
      type: "legislacio",
      question: "Quin article de l’EAC impedeix la dissolució del Parlament mentre hi ha una moció de censura en tràmit?",
      options: ["Art. 75 EAC", "Art. 67.3 EAC", "Art. 55.2 EAC", "Art. 73.2 EAC"],
      correct: 0,
      explanationCorrect: "L’art. 75 EAC regula la dissolució anticipada i fixa el límit: no es pot dissoldre si hi ha una moció de censura en tràmit.",
      explanationIncorrect: [
        "",
        "Incorrecte. L’art. 67.3 EAC tracta la dissolució automàtica per investidura fallida (2 mesos).",
        "Incorrecte. L’art. 55.2 EAC tracta el control i impuls de l’acció política i de govern.",
        "Incorrecte. L’art. 73.2 EAC tracta compareixences, no dissolució."
      ]
    },

    /* =========================
       5 PREGUNTES TRAMPA
    ========================== */

    {
      type: "trampa",
      question: "Una moció conseqüència d’interpel·lació pot comportar el cessament automàtic del Govern.",
      options: ["Sí, perquè expressa pèrdua de confiança", "Sí, si s’aprova per majoria simple", "No, té càrrega política però no fa caure el Govern", "Només si el president ho accepta"],
      correct: 2,
      explanationCorrect: "Les mocions conseqüència d’interpel·lació fixen posició/objectius però no comporten el cessament del Govern.",
      explanationIncorrect: [
        "Incorrecte. La pèrdua de confiança formal s’articula amb moció de censura o qüestió de confiança.",
        "Incorrecte. Encara que s’aprovés, no és un mecanisme de cessament.",
        "",
        "Incorrecte. No depèn d’una acceptació del president per convertir-se en cessament."
      ]
    },

    {
      type: "trampa",
      question: "La qüestió de confiança és un instrument de control que sempre inicia el Parlament.",
      options: ["Sí, perquè és control parlamentari", "Sí, perquè la plantegen els grups parlamentaris", "No, la iniciativa és exclusivament del president", "Només la pot iniciar la Mesa"],
      correct: 2,
      explanationCorrect: "La qüestió de confiança la planteja el president (iniciativa exclusiva), prèvia deliberació del Govern.",
      explanationIncorrect: [
        "Incorrecte. Que sigui un mecanisme de control no implica iniciativa parlamentària.",
        "Incorrecte. Els grups poden impulsar control, però no iniciar la qüestió de confiança.",
        "",
        "Incorrecte. La Mesa ordena tràmits, però no inicia aquest mecanisme."
      ]
    },

    {
      type: "trampa",
      question: "El control jurisdiccional (art. 153 CE) és un instrument de control polític del Parlament.",
      options: ["Sí, perquè controla el Govern", "Sí, perquè sempre comporta dimissió", "No, és control judicial de legalitat i constitucionalitat", "Només si hi ha interpel·lacions"],
      correct: 2,
      explanationCorrect: "L’art. 153 CE es refereix al control judicial de l’activitat autonòmica, diferent del control polític parlamentari.",
      explanationIncorrect: [
        "Incorrecte. Controlar el Govern no implica que sigui parlamentari; aquí és judicial.",
        "Incorrecte. Les decisions judicials no són “cessament polític” per pèrdua de confiança.",
        "",
        "Incorrecte. No depèn d’interpel·lacions."
      ]
    },

    {
      type: "trampa",
      question: "El president pot dissoldre el Parlament en qualsevol moment, fins i tot si hi ha una moció de censura en tràmit.",
      options: ["Sí, perquè és un poder discrecional absolut", "Sí, si hi ha deliberació del Govern", "No, hi ha límit si la moció de censura està en tràmit", "Només si ho demana el Parlament"],
      correct: 2,
      explanationCorrect: "L’art. 75 EAC fixa límits: no es pot dissoldre la cambra amb una moció de censura en tràmit.",
      explanationIncorrect: [
        "Incorrecte. No és un poder absolut; està jurídicament limitat.",
        "Incorrecte. La deliberació del Govern no elimina el límit de la moció en tràmit.",
        "",
        "Incorrecte. La dissolució anticipada és iniciativa del president, no del Parlament."
      ]
    },

    {
      type: "trampa",
      question: "En un sistema parlamentari, el Govern pot mantenir-se encara que perdi la confiança del Parlament, com en un sistema presidencialista.",
      options: ["Sí, perquè la separació de poders és rígida", "Sí, si el Govern té majoria simple", "No, la confiança és permanent i la pèrdua pot implicar dimissió", "Només si ho decideix el TC"],
      correct: 2,
      explanationCorrect: "En el parlamentarisme, el Govern depèn de la confiança parlamentària; si es trenca, pot haver dimissió o cessament mitjançant mecanismes previstos.",
      explanationIncorrect: [
        "Incorrecte. La separació rígida és pròpia del presidencialisme, no del parlamentarisme.",
        "Incorrecte. No és una qüestió de 'majoria simple' arbitrària sinó de confiança i mecanismes formals.",
        "",
        "Incorrecte. El TC no decideix la confiança política."
      ]
    },

    /* =========================
       10 PREGUNTES DE CONTINGUT
    ========================== */

    {
      type: "contingut",
      question: "Quina idea defineix millor el sistema parlamentari en relació amb el control del Govern?",
      options: ["Separació rígida entre executiu i legislatiu", "Col·laboració i relació de confiança permanent", "Executiu independent del Parlament", "Control només judicial del Govern"],
      correct: 1,
      explanationCorrect: "El parlamentarisme es basa en col·laboració i confiança permanent entre Parlament i Govern.",
      explanationIncorrect: [
        "Incorrecte. Això descriu més aviat un sistema presidencialista.",
        "",
        "Incorrecte. En parlamentarisme, el Govern depèn políticament del Parlament.",
        "Incorrecte. Hi ha control polític i també judicial, però el control parlamentari és central."
      ]
    },

    {
      type: "contingut",
      question: "Quina diferència és correcta entre pregunta i interpel·lació?",
      options: [
        "Pregunta = política general; interpel·lació = fets menors",
        "Pregunta = fets concrets; interpel·lació = política general",
        "Pregunta = només escrita; interpel·lació = només en comissió",
        "Pregunta = fa caure el Govern; interpel·lació = no"
      ],
      correct: 1,
      explanationCorrect: "La pregunta tracta fets concrets/gestió; la interpel·lació tracta política general i pot donar lloc a moció.",
      explanationIncorrect: [
        "Incorrecte. Està invertit.",
        "",
        "Incorrecte. Les preguntes poden ser orals o escrites; les interpel·lacions es debaten al Ple segons el text base.",
        "Incorrecte. Cap d’aquests instruments, per si sols, implica cessament del Govern."
      ]
    },

    {
      type: "contingut",
      question: "Les sessions de control periòdiques al Parlament reserven torns de preguntes directes especialment a:",
      options: ["El Síndic de Greuges", "El president de la Generalitat", "La Sindicatura de Comptes", "El Tribunal Superior de Justícia de Catalunya"],
      correct: 1,
      explanationCorrect: "El RPC preveu sessions de control amb preguntes directes al president.",
      explanationIncorrect: [
        "Incorrecte. El Síndic és un òrgan de garantia, no el destinatari principal d’aquestes sessions.",
        "",
        "Incorrecte. La Sindicatura no és Govern.",
        "Incorrecte. El TSJC és òrgan judicial."
      ]
    },

    {
      type: "contingut",
      question: "Quin instrument ordinari pot donar lloc formalment a una moció posterior?",
      options: ["Pregunta escrita", "Interpel·lació", "Compareixença", "Sol·licitud d’informació"],
      correct: 1,
      explanationCorrect: "Tota interpel·lació pot donar lloc a una moció conseqüència d’interpel·lació.",
      explanationIncorrect: [
        "Incorrecte. La pregunta no porta formalment a moció en aquest sentit.",
        "",
        "Incorrecte. La compareixença aporta informació, però no és el mecanisme típic de moció derivada.",
        "Incorrecte. La sol·licitud d’informació és accés a documents, no interpel·lació."
      ]
    },

    {
      type: "contingut",
      question: "Quina és la base estatutària que permet requerir la presència de membres del Govern davant Ple o comissions?",
      options: ["Art. 73.2 EAC", "Art. 74.1 EAC", "Art. 67.3 EAC", "Art. 55.2 EAC"],
      correct: 0,
      explanationCorrect: "L’art. 73.2 EAC empara les compareixences de membres del Govern davant el Parlament.",
      explanationIncorrect: [
        "",
        "Incorrecte. L’art. 74.1 EAC tracta responsabilitat política solidària.",
        "Incorrecte. L’art. 67.3 EAC és dissolució automàtica per investidura fallida.",
        "Incorrecte. L’art. 55.2 EAC defineix la funció general de control i impuls."
      ]
    },

    {
      type: "contingut",
      question: "Per presentar una moció de censura a Catalunya, el text base indica que cal:",
      options: [
        "La signatura d’1/3 dels diputats",
        "La signatura d’almenys 1/5 dels diputats o dos grups parlamentaris",
        "La signatura del president",
        "La signatura de tots els portaveus"
      ],
      correct: 1,
      explanationCorrect: "El text base estableix com a requisit la signatura d’almenys 1/5 dels diputats o dos grups parlamentaris, i la moció és constructiva.",
      explanationIncorrect: [
        "Incorrecte. 1/3 és el llindar per comissions d’investigació (segons el text base).",
        "",
        "Incorrecte. La moció de censura és iniciativa parlamentària, no del president.",
        "Incorrecte. No s’exigeix la signatura de tots els portaveus."
      ]
    },

    {
      type: "contingut",
      question: "Quina característica defineix la moció de censura com a 'constructiva'?",
      options: [
        "Que s’aprova per majoria simple",
        "Que ha d’incloure un candidat alternatiu a la presidència que accepti la candidatura",
        "Que només pot tractar matèries pressupostàries",
        "Que es vota en comissió i no al Ple"
      ],
      correct: 1,
      explanationCorrect: "És constructiva perquè proposa un candidat alternatiu i implica investidura automàtica si prospera.",
      explanationIncorrect: [
        "Incorrecte. Requereix majoria absoluta, no simple.",
        "",
        "Incorrecte. No és limitada a pressupostos.",
        "Incorrecte. Es tramita i vota al Ple."
      ]
    },

    {
      type: "contingut",
      question: "La qüestió de confiança, segons el text base, s’entén atorgada amb:",
      options: ["Majoritat absoluta", "Majoritat simple dels vots emesos", "Majoritat de 2/3", "Unanimitat"],
      correct: 1,
      explanationCorrect: "La qüestió de confiança s’entén atorgada per majoria simple dels vots emesos.",
      explanationIncorrect: [
        "Incorrecte. No exigeix majoria absoluta.",
        "",
        "Incorrecte. 2/3 no és el llindar de confiança.",
        "Incorrecte. No requereix unanimitat."
      ]
    },

    {
      type: "contingut",
      question: "Quina conseqüència té la denegació de confiança per part del Parlament?",
      options: ["El Parlament queda dissolt automàticament", "El president i el Govern han de dimitir", "S’activa automàticament una moció de censura", "El TC anul·la el Govern"],
      correct: 1,
      explanationCorrect: "Si el Parlament denega la confiança, el president i el seu Govern han de dimitir (segons el text base).",
      explanationIncorrect: [
        "Incorrecte. La dissolució automàtica està vinculada a investidura fallida (2 mesos), no a denegació de confiança.",
        "",
        "Incorrecte. La moció de censura és un instrument diferent i d’iniciativa parlamentària.",
        "Incorrecte. El TC no anul·la governs per confiança política."
      ]
    },

    {
      type: "contingut",
      question: "Sobre les comissions d’investigació, quin enunciat és correcte segons el text base?",
      options: [
        "Les seves conclusions són vinculants per als tribunals",
        "S’han de crear obligatòriament si ho demana 1/3 dels diputats o 3 grups parlamentaris",
        "Només poden investigar afers d’àmbit estatal",
        "Només poden ser creades pel Govern"
      ],
      correct: 1,
      explanationCorrect: "El text base indica que el RPC permet que es creïn si ho demana 1/3 dels diputats o 3 grups; les conclusions no són vinculants per als tribunals.",
      explanationIncorrect: [
        "Incorrecte. No són vinculants per als tribunals.",
        "",
        "Incorrecte. Poden investigar afers d’interès de la Generalitat (rellevància pública).",
        "Incorrecte. La iniciativa pot venir del Parlament; no és exclusiva del Govern."
      ]
    }
  ]
};

export default punt4Ask;