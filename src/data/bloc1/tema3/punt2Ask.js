// src/data/bloc-1/tema-3/ask/punt2Ask.js
export const punt2Ask = {
  title: "Bloc I · Tema 3 · Punt 2 — Sistema electoral del Parlament de Catalunya",
  questions: [
    /* =========================
       5 PREGUNTES DE LEGISLACIÓ
    ========================== */

    {
      type: "legislacio",
      question:
        "Quin article de la Constitució imposa que l’assemblea legislativa autonòmica sigui elegida per sufragi universal amb representació proporcional?",
      options: ["Art. 23 CE", "Art. 152.1 CE", "Art. 79.3 CE", "Art. 150.2 CE"],
      correct: 1,
      explanationCorrect:
        "L’art. 152.1 CE predetermina l’esquema institucional bàsic i exigeix assemblea legislativa elegida per sufragi universal amb representació proporcional.",
      explanationIncorrect: [
        "Incorrecte. L’art. 23 CE regula el dret de participació política, però no imposa el model institucional i electoral autonòmic.",
        "",
        "Incorrecte. L’art. 79.3 CE regula el caràcter personal i indelegable del vot (regla general).",
        "Incorrecte. L’art. 150.2 CE regula transferències o delegacions de competències, no el sistema electoral."
      ]
    },

    {
      type: "legislacio",
      question:
        "Quin article de la CE reconeix el dret a participar en els afers públics directament o mitjançant representants lliurement elegits?",
      options: ["Art. 23 CE", "Art. 1.2 CE", "Art. 2 CE", "Art. 67.1 CE"],
      correct: 0,
      explanationCorrect:
        "L’art. 23 CE és el precepte clau del dret fonamental de participació política.",
      explanationIncorrect: [
        "",
        "Incorrecte. L’art. 1.2 CE regula la sobirania nacional, no el dret individual de participació.",
        "Incorrecte. L’art. 2 CE regula la unitat de la Nació i autonomia, no el dret de participació.",
        "Incorrecte. L’art. 67.1 CE regula incompatibilitats parlamentàries, no el dret electoral."
      ]
    },

    {
      type: "legislacio",
      question:
        "Segons l’article 56.2 EAC, la llei electoral catalana (si s’aprovés) hauria de ser aprovada amb:",
      options: [
        "Majoritat simple",
        "Majoritat absoluta",
        "Majoritat de 2/3 del Parlament",
        "Majoritat de 3/5 del Parlament"
      ],
      correct: 2,
      explanationCorrect:
        "L’art. 56.2 EAC exigeix una majoria de dues terceres parts dels diputats (2/3) per aprovar el règim electoral.",
      explanationIncorrect: [
        "Incorrecte. La majoria simple no és suficient per a la llei electoral segons l’EAC.",
        "Incorrecte. L’EAC no estableix majoria absoluta, sinó 2/3.",
        "",
        "Incorrecte. No s’exigeix 3/5 sinó 2/3."
      ]
    },

    {
      type: "legislacio",
      question:
        "Quina norma explica la transitorietat del règim electoral i manté la vigència de la DT 4a de l’EAC 1979?",
      options: [
        "Disposició Transitòria Segona de l’EAC 2006",
        "Disposició Addicional Primera de l’EAC 2006",
        "Article 152.1 CE",
        "Article 62.2 EAC"
      ],
      correct: 0,
      explanationCorrect:
        "La DT 2a de l’EAC 2006 manté la vigència del règim transitori anterior (DT 4a de l’EAC 1979) fins a l’aprovació d’una llei electoral pròpia.",
      explanationIncorrect: [
        "",
        "Incorrecte. La disposició addicional no és la que estableix el règim transitori electoral.",
        "Incorrecte. L’art. 152.1 CE fixa el principi de proporcionalitat, però no regula la transitorietat catalana concreta.",
        "Incorrecte. L’art. 62.2 EAC regula majoria absoluta per a lleis de desenvolupament bàsic de l’Estatut, no el règim electoral."
      ]
    },

    {
      type: "legislacio",
      question:
        "Quina és la regla general sobre el vot segons l’art. 79.3 CE?",
      options: [
        "El vot és delegable en qualsevol cas",
        "El vot és personal i indelegable",
        "El vot és obligatori",
        "El vot és sempre per llistes obertes"
      ],
      correct: 1,
      explanationCorrect:
        "L’art. 79.3 CE estableix la regla general: el vot és personal i indelegable.",
      explanationIncorrect: [
        "Incorrecte. La regla general és justament la indelegabilitat.",
        "",
        "Incorrecte. A Espanya el vot no és obligatori.",
        "Incorrecte. L’art. 79.3 CE no regula llistes obertes o tancades."
      ]
    },

    /* =========================
       5 PREGUNTES TRAMPA
    ========================== */

    {
      type: "trampa",
      question:
        "Catalunya disposa actualment d’una llei electoral pròpia aprovada pel Parlament.",
      options: [
        "Sí, i és una llei ordinària.",
        "Sí, i requereix majoria absoluta.",
        "No, és l’única CA sense llei electoral pròpia.",
        "No, però s’aplica la llei electoral del Senat."
      ],
      correct: 2,
      explanationCorrect:
        "Catalunya és l’única comunitat autònoma que no disposa de llei electoral pròpia; s’aplica un règim transitori i la LOREG supletòriament.",
      explanationIncorrect: [
        "Incorrecte. No existeix aquesta llei electoral catalana aprovada.",
        "Incorrecte. No hi ha llei pròpia; i si existís, l’EAC exigeix 2/3, no majoria absoluta.",
        "",
        "Incorrecte. No s’aplica la llei electoral del Senat."
      ]
    },

    {
      type: "trampa",
      question:
        "El llindar del 3% per participar al repartiment d’escons s’aplica:",
      options: [
        "Sobre el total de vots de tota Catalunya",
        "Sobre el total de vots de l’Estat",
        "Sobre els vots vàlids de cada circumscripció",
        "Només sobre els vots a Barcelona"
      ],
      correct: 2,
      explanationCorrect:
        "El 3% és una barrera aplicada per circumscripció (província), sobre els vots vàlids emesos en aquella demarcació.",
      explanationIncorrect: [
        "Incorrecte. No és un llindar global de Catalunya.",
        "Incorrecte. No té res a veure amb els vots totals de l’Estat.",
        "",
        "Incorrecte. S’aplica a totes les circumscripcions, no només Barcelona."
      ]
    },

    {
      type: "trampa",
      question:
        "Dir que el sistema és “proporcional” implica necessàriament que el resultat final sigui perfectament proporcional al conjunt de Catalunya.",
      options: [
        "Sí, perquè s’utilitza D’Hondt",
        "Sí, perquè les províncies garanteixen igualtat de vot",
        "No, perquè circumscripcions i repartiment d’escons poden distorsionar el resultat",
        "No, perquè el Parlament es tria per sistema majoritari"
      ],
      correct: 2,
      explanationCorrect:
        "La proporcionalitat formal (fórmula) pot no traduir-se en proporcionalitat real a nivell global per l’efecte de circumscripcions i magnituds.",
      explanationIncorrect: [
        "Incorrecte. D’Hondt és proporcional, però no garanteix proporcionalitat perfecta a nivell agregat.",
        "Incorrecte. La distribució fixa pot generar desigualtat en el valor del vot.",
        "",
        "Incorrecte. El sistema no és majoritari."
      ]
    },

    {
      type: "trampa",
      question:
        "Barcelona té el 63% de l’electorat i per això rep 85 escons.",
      options: [
        "Correcte, perquè Barcelona concentra la majoria de vots",
        "Incorrecte, perquè Barcelona concentra aproximadament el 76% de l’electorat però té el 63% d’escons",
        "Correcte, perquè la CE obliga a representació igualitària entre províncies",
        "Incorrecte, perquè Barcelona només té 75 escons"
      ],
      correct: 1,
      explanationCorrect:
        "El text base indica la tensió: Barcelona concentra aproximadament el 76% de l’electorat però només el 63% dels escons (85/135).",
      explanationIncorrect: [
        "Incorrecte. La dada d’electorat del 63% no és correcta segons el text base.",
        "",
        "Incorrecte. La CE exigeix proporcionalitat i representació adequada del territori, no igualtat estricta entre províncies.",
        "Incorrecte. Barcelona té 85 escons (distribució vigent)."
      ]
    },

    {
      type: "trampa",
      question:
        "La dissolució automàtica del Parlament es produeix si transcorren dos mesos des de:",
      options: [
        "La celebració de les eleccions",
        "La constitució del Parlament",
        "La primera votació d’investidura sense que s’elegeixi president",
        "La convocatòria ordinària"
      ],
      correct: 2,
      explanationCorrect:
        "La dissolució automàtica s’activa si passen dos mesos des de la primera votació d’investidura sense president elegit.",
      explanationIncorrect: [
        "Incorrecte. No és des de la data d’eleccions.",
        "Incorrecte. No és des de la constitució del Parlament.",
        "",
        "Incorrecte. No depèn del còmput des de la convocatòria ordinària."
      ]
    },

    /* =========================
       10 PREGUNTES DE CONTINGUT
    ========================== */

    {
      type: "contingut",
      question:
        "Quina és la circumscripció electoral actual per a les eleccions al Parlament de Catalunya?",
      options: ["Comarca", "Vegueria", "Província", "Municipi"],
      correct: 2,
      explanationCorrect:
        "Per manca de llei electoral pròpia, la circumscripció és la província (per règim transitori).",
      explanationIncorrect: [
        "Incorrecte. La comarca no és la circumscripció vigent.",
        "Incorrecte. La vegueria no s’aplica com a circumscripció electoral en el sistema actual.",
        "",
        "Incorrecte. El municipi no és circumscripció electoral parlamentària."
      ]
    },

    {
      type: "contingut",
      question:
        "Distribució correcta dels 135 diputats per províncies:",
      options: [
        "Barcelona 85 · Tarragona 18 · Girona 17 · Lleida 15",
        "Barcelona 80 · Tarragona 20 · Girona 20 · Lleida 15",
        "Barcelona 90 · Tarragona 15 · Girona 15 · Lleida 15",
        "Barcelona 85 · Tarragona 17 · Girona 18 · Lleida 15"
      ],
      correct: 0,
      explanationCorrect:
        "La distribució vigent és: Barcelona 85, Tarragona 18, Girona 17 i Lleida 15.",
      explanationIncorrect: [
        "",
        "Incorrecte. No coincideix amb la distribució transitoria vigent.",
        "Incorrecte. No és un repartiment igualitari (15-15-15).",
        "Incorrecte. Tarragona i Girona estan intercanviades."
      ]
    },

    {
      type: "contingut",
      question:
        "Quin element del sistema tendeix a afavorir lleugerament els partits grans?",
      options: [
        "Llistes obertes",
        "Fórmula d’Hondt",
        "Vot obligatori",
        "Circumscripció única catalana"
      ],
      correct: 1,
      explanationCorrect:
        "La fórmula d’Hondt, tot i ser proporcional, tendeix a afavorir lleugerament les candidatures més votades.",
      explanationIncorrect: [
        "Incorrecte. El sistema utilitza llistes tancades i bloquejades, no obertes.",
        "",
        "Incorrecte. No hi ha vot obligatori.",
        "Incorrecte. No existeix circumscripció única catalana en el model vigent."
      ]
    },

    {
      type: "contingut",
      question:
        "Les llistes al Parlament de Catalunya són:",
      options: [
        "Obertes",
        "Tancades i bloquejades",
        "Mixtes (obertes a Barcelona i tancades a la resta)",
        "Preferencials amb reordenació"
      ],
      correct: 1,
      explanationCorrect:
        "L’elector vota una candidatura completa sense poder alterar l’ordre: llistes tancades i bloquejades.",
      explanationIncorrect: [
        "Incorrecte. No són obertes.",
        "",
        "Incorrecte. No hi ha un sistema mixt per províncies.",
        "Incorrecte. No és un sistema preferencial."
      ]
    },

    {
      type: "contingut",
      question:
        "Quina és la funció principal del llindar electoral del 3%?",
      options: [
        "Assegurar que cada província tingui el mateix nombre d’escons",
        "Evitar fragmentació excessiva i candidatures molt minoritàries",
        "Permetre llistes obertes",
        "Fer el sistema majoritari"
      ],
      correct: 1,
      explanationCorrect:
        "La barrera del 3% evita una fragmentació excessiva i exclou candidatures molt minoritàries del repartiment d’escons.",
      explanationIncorrect: [
        "Incorrecte. No fixa escons per província.",
        "",
        "Incorrecte. No té relació amb llistes obertes.",
        "Incorrecte. No converteix el sistema en majoritari."
      ]
    },

    {
      type: "contingut",
      question:
        "Quin element explica que el valor del vot pugui variar entre Barcelona i Lleida?",
      options: [
        "Llistes obertes",
        "Repartiment fix d’escons per província i diferent població",
        "Vot electrònic",
        "Barrera del 3% estatal"
      ],
      correct: 1,
      explanationCorrect:
        "La combinació de circumscripcions provincials i repartiment fix d’escons amb diferent població genera diferències en vots necessaris per escó.",
      explanationIncorrect: [
        "Incorrecte. Les llistes no afecten directament el valor del vot territorial.",
        "",
        "Incorrecte. No depèn del vot electrònic.",
        "Incorrecte. El 3% no és estatal ni explica el valor del vot entre províncies."
      ]
    },

    {
      type: "contingut",
      question:
        "Qui convoca les eleccions al Parlament de Catalunya?",
      options: [
        "El President o Presidenta de la Generalitat",
        "El Parlament mitjançant votació",
        "La Junta Electoral Central",
        "El Tribunal Constitucional"
      ],
      correct: 0,
      explanationCorrect:
        "La convocatòria d’eleccions correspon al President o Presidenta de la Generalitat.",
      explanationIncorrect: [
        "",
        "Incorrecte. El Parlament no convoca eleccions mitjançant votació ordinària.",
        "Incorrecte. Les juntes electorals supervisen el procés, però no convoquen eleccions.",
        "Incorrecte. El TC no convoca eleccions."
      ]
    },

    {
      type: "contingut",
      question:
        "Quina és la durada ordinària de la legislatura del Parlament de Catalunya?",
      options: ["2 anys", "3 anys", "4 anys", "5 anys"],
      correct: 2,
      explanationCorrect:
        "La legislatura dura ordinàriament quatre anys.",
      explanationIncorrect: [
        "Incorrecte.",
        "Incorrecte.",
        "",
        "Incorrecte."
      ]
    },

    {
      type: "contingut",
      question:
        "Quin mecanisme permet impugnar la proclamació de candidats i electes?",
      options: [
        "Recurs de cassació",
        "Recurs contenciós-electoral",
        "Recurs d’empara davant el Parlament",
        "Recurs administratiu ordinari"
      ],
      correct: 1,
      explanationCorrect:
        "La proclamació de candidats i electes es pot impugnar mitjançant recurs contenciós-electoral davant la jurisdicció ordinària.",
      explanationIncorrect: [
        "Incorrecte. La cassació no és el mecanisme electoral típic de proclamació.",
        "",
        "Incorrecte. No existeix un recurs d’empara 'davant el Parlament' en aquest sentit.",
        "Incorrecte. No és un recurs administratiu ordinari."
      ]
    },

    {
      type: "contingut",
      question:
        "Quina afirmació descriu millor la LOREG en el sistema electoral català actual?",
      options: [
        "És inaplicable a Catalunya perquè no és una CA de règim comú",
        "S’aplica supletòriament per la transitorietat estatutària",
        "Només s’aplica a les eleccions municipals",
        "Substitueix l’EAC com a norma institucional bàsica"
      ],
      correct: 1,
      explanationCorrect:
        "La LOREG s’aplica de manera supletòria perquè el règim electoral català es manté en transitorietat fins a una llei pròpia.",
      explanationIncorrect: [
        "Incorrecte. S’aplica supletòriament, no és inaplicable.",
        "",
        "Incorrecte. La LOREG regula diversos processos electorals, i aquí s’aplica per remissió/transitorietat.",
        "Incorrecte. L’EAC continua essent la norma institucional bàsica; la LOREG no la substitueix."
      ]
    }
  ]
};

export default punt2Ask;