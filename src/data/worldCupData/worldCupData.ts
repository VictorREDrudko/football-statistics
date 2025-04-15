import iconWorldCup1930 from "./../../assets/icon/worldCup/1930.png";
import iconWorldCup1934 from "./../../assets/icon/worldCup/1934.png";
import iconWorldCup1938 from "./../../assets/icon/worldCup/1938.png";
import iconWorldCup1950 from "./../../assets/icon/worldCup/1950.png";
import iconWorldCup1954 from "./../../assets/icon/worldCup/1954.png";
import iconWorldCup1958 from "./../../assets/icon/worldCup/1958.png";
import iconWorldCup1962 from "./../../assets/icon/worldCup/1962.png";
import iconWorldCup1966 from "./../../assets/icon/worldCup/1966.png";
import iconWorldCup1970 from "./../../assets/icon/worldCup/1970.png";
import iconWorldCup1974 from "./../../assets/icon/worldCup/1974.png";
import iconWorldCup1978 from "./../../assets/icon/worldCup/1978.png";
import iconWorldCup1982 from "./../../assets/icon/worldCup/1982.png";
import iconWorldCup1986 from "./../../assets/icon/worldCup/1986.png";
import iconWorldCup1990 from "./../../assets/icon/worldCup/1990.png";
import iconWorldCup1994 from "./../../assets/icon/worldCup/1994.png";
import iconWorldCup1998 from "./../../assets/icon/worldCup/1998.png";
import iconWorldCup2002 from "./../../assets/icon/worldCup/2002.png";
import iconWorldCup2006 from "./../../assets/icon/worldCup/2006.png";
import iconWorldCup2010 from "./../../assets/icon/worldCup/2010.png";
import iconWorldCup2014 from "./../../assets/icon/worldCup/2014.png";
import iconWorldCup2018 from "./../../assets/icon/worldCup/2018.png";
import iconWorldCup2022 from "./../../assets/icon/worldCup/2022.png";
import { Stage, WorldCupData } from "./type-worldCupData";

import backgroundFWC1930_1 from "./../../assets/backgroundWC/1930-1.png";
import backgroundFWC1930_2 from "./../../assets/backgroundWC/1930-2.png";
import backgroundFWC1934_2 from "./../../assets/backgroundWC/1934-2.png";
import backgroundFWC1938_2 from "./../../assets/backgroundWC/1938-2.png";
import backgroundFWC1950_1 from "./../../assets/backgroundWC/1950-1.png";
import backgroundFWC1950_2 from "./../../assets/backgroundWC/1950-2.png";
import backgroundFWC1954_1 from "./../../assets/backgroundWC/1954-1.png";
import backgroundFWC1954_2 from "./../../assets/backgroundWC/1954-2.png";
import backgroundFWC1962_1 from "./../../assets/backgroundWC/1962-1.png";
import backgroundFWC1962_2 from "./../../assets/backgroundWC/1962-2.png";
import backgroundFWC1966_1 from "./../../assets/backgroundWC/1966-1.png";
import backgroundFWC1966_2 from "./../../assets/backgroundWC/1966-2.png";
import backgroundFWC1970_1 from "./../../assets/backgroundWC/1970-1.png";
import backgroundFWC1970_2 from "./../../assets/backgroundWC/1970-2.png";

import { stadiums } from "./stadiums";
import { v1 } from "uuid";

export const worldCupCharacteristic: string[] = [
  "Host country",
  "Dates",
  "Teams (qualification)",
  "Teams (final stage)",
  "Matches played",
  "Goals scored",
  "Attendance",
  "Top scorer(s)",
];

export const stage: Stage = {
  final: "1:final",
  place3: "2:third place play-off",
  1_2: "3:1/2 semi-final",
  1_4: "4:1/4 quarter-finals",
  1_8: "5:1/8 round of 16",
  1_16: "6:1/16 round of 32",
  group: {
    1: "group 1",
    2: "group 2",
    3: "group 3",
    4: "group 4",
    5: "group 5",
    6: "group 6",
    7: "group 7",
    8: "group 8",
    finalGroup: {
      group: "group Final round",
      groupFinal: "group Final round: final",
      groupPlace3: "group Final round: third place",
    },
  },
};

export const worldCupData: WorldCupData = {
  1930: {
    id: "world-cup.1.1930",
    title: "1930 FIFA World Cup",
    date: "13-30 July",
    icon: iconWorldCup1930,
    background: [backgroundFWC1930_1, backgroundFWC1930_2],
    hostCountry: ["Uruguay"],
    finalStage: [
      {
        id: v1(),
        date: "13.07.1930",
        stage: stage.group[1],
        teams: ["France", "Mexico"],
        score: [[4, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["L. Laurent", "Langiller", "Maschinot"],
            timeGoals: ["19", "40", "43, 87"],
          },
          { playersScoredGoal: ["Carreño"], timeGoals: ["80"] },
        ],
        stadium: {
          ...stadiums.Uruguay.pocitos,
          attendance: "4 444",
        },
      },
      {
        id: v1(),
        date: "15.07.1930",
        stage: stage.group[1],
        teams: ["Argentina", "France"],
        score: [[1, 0], [], []],
        goals: [
          { playersScoredGoal: ["Monti"], timeGoals: ["81"] },
          { playersScoredGoal: [], timeGoals: [] },
        ],
        stadium: {
          ...stadiums.Uruguay.parqueCentral,
          attendance: "23 409",
        },
      },
      {
        id: v1(),
        date: "16.07.1930",
        stage: stage.group[1],
        teams: ["Chile", "Mexico"],
        score: [[3, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Vidal", "M. Rosas"],
            timeGoals: ["1, 65", "52(o.g.)"],
          },
          { playersScoredGoal: [], timeGoals: [] },
        ],
        stadium: {
          ...stadiums.Uruguay.parqueCentral,
          attendance: "9 249",
        },
      },
      {
        id: v1(),
        date: "19.07.1930",
        stage: stage.group[1],
        teams: ["Chile", "France"],
        score: [[1, 0], [], []],
        goals: [
          { playersScoredGoal: ["Subiabre"], timeGoals: ["67"] },
          { playersScoredGoal: [], timeGoals: [] },
        ],
        stadium: {
          ...stadiums.Uruguay.centenario,
          attendance: "2 000",
        },
      },
      {
        id: v1(),
        date: "19.07.1930",
        stage: stage.group[1],
        teams: ["Argentina", "Mexico"],
        score: [[6, 3], [], []],
        goals: [
          {
            playersScoredGoal: ["Stábile", "Zumelzú", "Varallo"],
            timeGoals: ["8, 17, 80", "12, 55", "53"],
          },
          {
            playersScoredGoal: ["M. Rosas", "Gayón"],
            timeGoals: ["42(p), 65", "75"],
          },
        ],
        stadium: {
          ...stadiums.Uruguay.centenario,
          attendance: "42 100",
        },
      },
      {
        id: v1(),
        date: "22.07.1930",
        stage: stage.group[1],
        teams: ["Argentina", "Chile"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Stábile", "M. Evaristo"],
            timeGoals: ["12, 13", "51"],
          },
          { playersScoredGoal: ["Subiabre"], timeGoals: ["15"] },
        ],
        stadium: {
          ...stadiums.Uruguay.centenario,
          attendance: "41 459",
        },
      },
      {
        id: v1(),
        date: "14.07.1930",
        stage: stage.group[2],
        teams: ["Yugoslavia", "Brazil"],
        score: [[2, 1], [], []],
        goals: [
          { playersScoredGoal: ["Tirnanić", "Bek"], timeGoals: ["21", "30"] },
          { playersScoredGoal: ["Preguinho"], timeGoals: ["62"] },
        ],
        stadium: {
          ...stadiums.Uruguay.parqueCentral,
          attendance: "24 059",
        },
      },
      {
        id: v1(),
        date: "17.07.1930",
        stage: stage.group[2],
        teams: ["Yugoslavia", "Bolivia"],
        score: [[4, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Bek", "Marjanović", "Vujadinović"],
            timeGoals: ["60, 67", "65", "85"],
          },
          { playersScoredGoal: [], timeGoals: [] },
        ],
        stadium: {
          ...stadiums.Uruguay.parqueCentral,
          attendance: "18 306",
        },
      },
      {
        id: v1(),
        date: "20.07.1930",
        stage: stage.group[2],
        teams: ["Brazil", "Bolivia"],
        score: [[4, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Moderato", "Preguinho"],
            timeGoals: ["37, 73", "57, 83"],
          },
          { playersScoredGoal: [], timeGoals: [] },
        ],
        stadium: {
          ...stadiums.Uruguay.centenario,
          attendance: "25 466",
        },
      },
      {
        id: v1(),
        date: "14.07.1930",
        stage: stage.group[3],
        teams: ["Romania", "Peru"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Deșu", "Stanciu", "Kovács"],
            timeGoals: ["1", "79", "89"],
          },
          { playersScoredGoal: ["De Souza"], timeGoals: ["75"] },
        ],
        stadium: {
          ...stadiums.Uruguay.pocitos,
          attendance: "2 549",
        },
      },
      {
        id: v1(),
        date: "18.07.1930",
        stage: stage.group[3],
        teams: ["Uruguay", "Peru"],
        score: [[1, 0], [], []],
        goals: [
          { playersScoredGoal: ["Vargas Peña"], timeGoals: ["40"] },
          { playersScoredGoal: [], timeGoals: [] },
        ],
        stadium: {
          ...stadiums.Uruguay.centenario,
          attendance: "57 735",
        },
      },
      {
        id: v1(),
        date: "21.07.1930",
        stage: stage.group[3],
        teams: ["Uruguay", "Romania"],
        score: [[4, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Dorado", "Scarone", "Anselmo", "Cea"],
            timeGoals: ["7", "26", "31", "35"],
          },
          { playersScoredGoal: [], timeGoals: [] },
        ],
        stadium: {
          ...stadiums.Uruguay.centenario,
          attendance: "70 022",
        },
      },

      {
        id: v1(),
        date: "13.07.1930",
        stage: stage.group[4],
        teams: ["United States", "Belgium"],
        score: [[3, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["McGhee", "Florie", "Patenaude"],
            timeGoals: ["23", "45", "69"],
          },
          { playersScoredGoal: [], timeGoals: [] },
        ],
        stadium: {
          ...stadiums.Uruguay.parqueCentral,
          attendance: "18 346",
        },
      },
      {
        id: v1(),
        date: "17.07.1930",
        stage: stage.group[4],
        teams: ["United States", "Paraguay"],
        score: [[3, 0], [], []],
        goals: [
          { playersScoredGoal: ["Patenaude"], timeGoals: ["10, 15, 50"] },
          { playersScoredGoal: [], timeGoals: [] },
        ],
        stadium: {
          ...stadiums.Uruguay.parqueCentral,
          attendance: "18 306",
        },
      },
      {
        id: v1(),
        date: "20.07.1930",
        stage: stage.group[4],
        teams: ["Paraguay", "Belgium"],
        score: [[1, 0], [], []],
        goals: [
          { playersScoredGoal: ["Vargas Peña"], timeGoals: ["40"] },
          { playersScoredGoal: [], timeGoals: [] },
        ],
        stadium: {
          ...stadiums.Uruguay.centenario,
          attendance: "12 000",
        },
      },
      {
        id: v1(),
        date: "26.07.1930",
        stage: stage[1_2],
        teams: ["Argentina", "United States"],
        score: [[6, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Monti", "Scopelli", "Stábile", "Peucelle"],
            timeGoals: ["20", "56", "69, 87", "80, 85"],
          },
          { playersScoredGoal: ["Brown"], timeGoals: ["89"] },
        ],
        stadium: {
          ...stadiums.Uruguay.centenario,
          attendance: "72 886",
        },
      },
      {
        id: v1(),
        date: "27.07.1930",
        stage: stage[1_2],
        teams: ["Uruguay", "Yugoslavia"],
        score: [[6, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Cea", "Anselmo", "Iriarte"],
            timeGoals: ["18, 67, 72", "20, 31", "61"],
          },
          { playersScoredGoal: ["Vujadinović"], timeGoals: ["4"] },
        ],
        stadium: {
          ...stadiums.Uruguay.centenario,
          attendance: "79 867",
        },
      },
      {
        id: v1(),
        date: "30.07.1930",
        stage: stage.final,
        teams: ["Uruguay", "Argentina"],
        score: [[4, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Dorado", "Cea", "Iriarte", "Castro"],
            timeGoals: ["12", "57", "68", "89"],
          },
          {
            playersScoredGoal: ["Peucelle", "Stábile"],
            timeGoals: ["20", "37"],
          },
        ],
        stadium: {
          ...stadiums.Uruguay.centenario,
          attendance: "68 346",
        },
      },
    ],
    qualification: [],
  },
  1934: {
    id: "world-cup.2.1934",
    title: "1934 FIFA World Cup",
    date: "27 May - 10 June",
    icon: iconWorldCup1934,
    background: [backgroundFWC1934_2],
    hostCountry: ["Italy"],
    finalStage: [
      {
        id: v1(),
        date: "27.05.1934",
        stage: stage[1_8],
        teams: ["Spain", "Brazil"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Iraragorri", "Lángara"],
            timeGoals: ["18(p), 25", "29"],
          },
          {
            playersScoredGoal: ["Leônidas"],
            timeGoals: ["55"],
          },
        ],
        stadium: {
          ...stadiums.Italy.ferraris,
          attendance: "21 000",
        },
      },
      {
        id: v1(),
        date: "27.05.1934",
        stage: stage[1_8],
        teams: ["Hungary", "Egypt"],
        score: [[4, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Teleki", "Toldi", "Vincze"],
            timeGoals: ["11", "31, 61", "53"],
          },
          {
            playersScoredGoal: ["Fawzi"],
            timeGoals: ["35, 39"],
          },
        ],
        stadium: {
          ...stadiums.Italy.ascarelli,
          attendance: "9 000",
        },
      },
      {
        id: v1(),
        date: "27.05.1934",
        stage: stage[1_8],
        teams: ["Switzerland", "Netherlands"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Kielholz", "Abegglen"],
            timeGoals: ["7, 43", "66"],
          },
          {
            playersScoredGoal: ["Smit", "Vente"],
            timeGoals: ["29", "69"],
          },
        ],
        stadium: {
          ...stadiums.Italy.sanSiro,
          attendance: "33 000",
        },
      },
      {
        id: v1(),
        date: "27.05.1934",
        stage: stage[1_8],
        teams: ["Italy", "United States"],
        score: [[7, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Schiavio", "Orsi", "Ferrari", "Meazza"],
            timeGoals: ["18, 29, 64", "20, 69", "63", "90"],
          },
          {
            playersScoredGoal: ["Donelli"],
            timeGoals: ["57"],
          },
        ],
        stadium: {
          ...stadiums.Italy.nazionalePNF,
          attendance: "25 000",
        },
      },
      {
        id: v1(),
        date: "27.05.1934",
        stage: stage[1_8],
        teams: ["Czechoslovakia", "Romania"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Puč", "Nejedlý"],
            timeGoals: ["50", "67"],
          },
          {
            playersScoredGoal: ["Dobay"],
            timeGoals: ["11"],
          },
        ],
        stadium: {
          ...stadiums.Italy.littorio,
          attendance: "9 000",
        },
      },
      {
        id: v1(),
        date: "27.05.1934",
        stage: stage[1_8],
        teams: ["Sweden", "Argentina"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Jonasson", "Kroon"],
            timeGoals: ["9", "79"],
          },
          {
            playersScoredGoal: ["Belis", "Galateo"],
            timeGoals: ["4", "48"],
          },
        ],
        stadium: {
          ...stadiums.Italy.littoriale,
          attendance: "14 000",
        },
      },
      {
        id: v1(),
        date: "27.05.1934",
        stage: stage[1_8],
        teams: ["Austria", "France"],
        score: [[1, 1], [2, 1], []],
        goals: [
          {
            playersScoredGoal: ["Sindelar", "Schall", "Bican"],
            timeGoals: ["44", "93", "109"],
          },
          {
            playersScoredGoal: ["Nicolas", "Verriest"],
            timeGoals: ["18", "116(p)"],
          },
        ],
        stadium: {
          ...stadiums.Italy.mussolini,
          attendance: "16 000",
        },
      },
      {
        id: v1(),
        date: "27.05.1934",
        stage: stage[1_8],
        teams: ["Germany", "Belgium"],
        score: [[5, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Kobierski", "Siffling", "Conen"],
            timeGoals: ["25", "49", "66, 70, 87"],
          },
          {
            playersScoredGoal: ["Voorhoof"],
            timeGoals: ["29, 43"],
          },
        ],
        stadium: {
          ...stadiums.Italy.berta,
          attendance: "8 000",
        },
      },
      {
        id: v1(),
        date: "31.05.1934",
        stage: stage[1_4],
        teams: ["Austria", "Hungary"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Horvath", "Zischek"],
            timeGoals: ["8", "51"],
          },
          {
            playersScoredGoal: ["Sárosi"],
            timeGoals: ["60(p)"],
          },
        ],
        stadium: {
          ...stadiums.Italy.littoriale,
          attendance: "23 000",
        },
      },
      {
        id: v1(),
        date: "31.05.1934",
        stage: stage[1_4],
        teams: ["Italy", "Spain"],
        score: [[1, 1], [0, 0], []],
        goals: [
          {
            playersScoredGoal: ["Ferrari"],
            timeGoals: ["44"],
          },
          {
            playersScoredGoal: ["Regueiro"],
            timeGoals: ["30"],
          },
        ],
        stadium: {
          ...stadiums.Italy.berta,
          attendance: "35 000",
        },
      },
      {
        id: v1(),
        date: "31.05.1934",
        stage: stage[1_4],
        teams: ["Germany", "Sweden"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Hohmann"],
            timeGoals: ["60, 63"],
          },
          {
            playersScoredGoal: ["Dunker"],
            timeGoals: ["82"],
          },
        ],
        stadium: {
          ...stadiums.Italy.sanSiro,
          attendance: "3 000",
        },
      },
      {
        id: v1(),
        date: "31.05.1934",
        stage: stage[1_4],
        teams: ["Czechoslovakia", "Switzerland"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Svoboda", "Sobotka", "Nejedlý"],
            timeGoals: ["24", "49", "82"],
          },
          {
            playersScoredGoal: ["Kielholz", "Jäggi"],
            timeGoals: ["18", "78"],
          },
        ],
        stadium: {
          ...stadiums.Italy.mussolini,
          attendance: "12 000",
        },
      },
      {
        id: v1(),
        date: "01.06.1934 REPLAY",
        stage: stage[1_4],
        teams: ["Italy", "Spain"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Meazza"],
            timeGoals: ["11"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Italy.berta,
          attendance: "43 000",
        },
      },
      {
        id: v1(),
        date: "03.06.1934",
        stage: stage[1_2],
        teams: ["Italy", "Austria"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Guaita"],
            timeGoals: ["19"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Italy.sanSiro,
          attendance: "35 000",
        },
      },
      {
        id: v1(),
        date: "03.06.1934",
        stage: stage[1_2],
        teams: ["Czechoslovakia", "Germany"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Nejedlý"],
            timeGoals: ["21, 69, 80"],
          },
          {
            playersScoredGoal: ["Noack"],
            timeGoals: ["62"],
          },
        ],
        stadium: {
          ...stadiums.Italy.nazionalePNF,
          attendance: "15 000",
        },
      },
      {
        id: v1(),
        date: "07.06.1934",
        stage: stage.place3,
        teams: ["Germany", "Austria"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Lehner", "Conen"],
            timeGoals: ["1, 42", "27"],
          },
          {
            playersScoredGoal: ["Horvath", "Sesta"],
            timeGoals: ["28", "54"],
          },
        ],
        stadium: {
          ...stadiums.Italy.ascarelli,
          attendance: "7 000",
        },
      },
      {
        id: v1(),
        date: "07.06.1934",
        stage: stage.final,
        teams: ["Italy", "Czechoslovakia"],
        score: [[1, 1], [1, 0], []],
        goals: [
          {
            playersScoredGoal: ["Orsi", "Schiavio"],
            timeGoals: ["81", "95"],
          },
          {
            playersScoredGoal: ["Puč"],
            timeGoals: ["71"],
          },
        ],
        stadium: {
          ...stadiums.Italy.nazionalePNF,
          attendance: "55 000",
        },
      },
    ],
    qualification: [],
  },
  1938: {
    id: "world-cup.3.1938",
    title: "1938 FIFA World Cup",
    date: "4-19 June",
    icon: iconWorldCup1938,
    background: [backgroundFWC1938_2],
    hostCountry: ["France"],
    finalStage: [
      {
        id: v1(),
        date: "04.06.1938",
        stage: stage[1_8],
        teams: ["Switzerland", "Germany"],
        score: [[1, 1], [0, 0], []],
        goals: [
          {
            playersScoredGoal: ["Abegglen"],
            timeGoals: ["43"],
          },
          {
            playersScoredGoal: ["Gauchel"],
            timeGoals: ["29"],
          },
        ],
        stadium: {
          ...stadiums.France.parcDesPrinces,
          attendance: "27 152",
        },
      },
      {
        id: v1(),
        date: "05.06.1938",
        stage: stage[1_8],
        teams: ["Hungary", "Indonesia"],
        score: [[6, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Kohut", "Toldi", "G.Sárosi", "Zsengellér"],
            timeGoals: ["13", "15", "28, 89", "35, 76"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.France.velodrome,
          attendance: "9 000",
        },
      },
      {
        id: v1(),
        date: "05.06.1938",
        stage: stage[1_8],
        teams: ["Sweden", ""],
        score: [[], [], []],
        goals: [
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.noMatch.noPlace,
          attendance: "",
        },
      },
      {
        id: v1(),
        date: "05.06.1938",
        stage: stage[1_8],
        teams: ["Cuba", "Romania"],
        score: [[2, 2], [1, 1], []],
        goals: [
          {
            playersScoredGoal: ["Socorro", "Magriñá"],
            timeGoals: ["44, 103", "69"],
          },
          {
            playersScoredGoal: ["Bindea", "Barátky", "Dobay"],
            timeGoals: ["35", "88", "105"],
          },
        ],
        stadium: {
          ...stadiums.France.toec,
          attendance: "7 000",
        },
      },
      {
        id: v1(),
        date: "05.06.1938",
        stage: stage[1_8],
        teams: ["France", "Belgium"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Veinante", "Nicolas"],
            timeGoals: ["1", "16, 69"],
          },
          {
            playersScoredGoal: ["Isemborghs"],
            timeGoals: ["38"],
          },
        ],
        stadium: {
          ...stadiums.France.colombes,
          attendance: "30 454",
        },
      },
      {
        id: v1(),
        date: "05.06.1938",
        stage: stage[1_8],
        teams: ["Italy", "Norway"],
        score: [[1, 1], [1, 0], []],
        goals: [
          {
            playersScoredGoal: ["Ferraris", "Piola"],
            timeGoals: ["2", "94"],
          },
          {
            playersScoredGoal: ["Brustad"],
            timeGoals: ["83"],
          },
        ],
        stadium: {
          ...stadiums.France.velodrome,
          attendance: "19 000",
        },
      },
      {
        id: v1(),
        date: "05.06.1938",
        stage: stage[1_8],
        teams: ["Brazil", "Poland"],
        score: [[4, 4], [2, 1], []],
        goals: [
          {
            playersScoredGoal: ["Leônidas", "Romeu", "Perácio"],
            timeGoals: ["18, 93, 104", "25", "44, 71"],
          },
          {
            playersScoredGoal: ["Scherfke", "Wilimowski"],
            timeGoals: ["23(p)", "53, 59, 89, 118"],
          },
        ],
        stadium: {
          ...stadiums.France.meinau,
          attendance: "13 452",
        },
      },
      {
        id: v1(),
        date: "05.06.1938",
        stage: stage[1_8],
        teams: ["Czechoslovakia", "Netherlands"],
        score: [[0, 0], [3, 0], []],
        goals: [
          {
            playersScoredGoal: ["Košťálek", "Zeman", "Nejedlý"],
            timeGoals: ["93", "111", "118"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.France.municipalHavre,
          attendance: "11 000",
        },
      },
      {
        id: v1(),
        date: "09.06.1938 REPLAY",
        stage: stage[1_8],
        teams: ["Switzerland", "Germany"],
        score: [[4, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Walaschek", "Bickel", "Abegglen"],
            timeGoals: ["42", "64", "75, 78"],
          },
          {
            playersScoredGoal: ["Hahnemann", "Lörtscher"],
            timeGoals: ["8", "22(o.g.)"],
          },
        ],
        stadium: {
          ...stadiums.France.parcDesPrinces,
          attendance: "20 025",
        },
      },
      {
        id: v1(),
        date: "09.06.1938 REPLAY",
        stage: stage[1_8],
        teams: ["Cuba", "Romania"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Socorro", "Fernández"],
            timeGoals: ["51", "57"],
          },
          {
            playersScoredGoal: ["Dobay"],
            timeGoals: ["35"],
          },
        ],
        stadium: {
          ...stadiums.France.toec,
          attendance: "8 000",
        },
      },
      {
        id: v1(),
        date: "12.06.1938",
        stage: stage[1_4],
        teams: ["Hungary", "Switzerland"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["G.Sárosi", "Zsengellér"],
            timeGoals: ["40", "89"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.France.boucquey,
          attendance: "15 000",
        },
      },
      {
        id: v1(),
        date: "12.06.1938",
        stage: stage[1_4],
        teams: ["Sweden", "Cuba"],
        score: [[8, 0], [], []],
        goals: [
          {
            playersScoredGoal: [
              "H.Andersson",
              "Wetterström",
              "Keller",
              "Nyberg",
            ],
            timeGoals: ["9, 81, 89", "22, 37, 44", "80", "84"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.France.fortCarre,
          attendance: "7 000",
        },
      },
      {
        id: v1(),
        date: "12.06.1938",
        stage: stage[1_4],
        teams: ["Italy", "France"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Colaussi", "Piola"],
            timeGoals: ["9", "51, 72"],
          },
          {
            playersScoredGoal: ["Heisserer"],
            timeGoals: ["10"],
          },
        ],
        stadium: {
          ...stadiums.France.colombes,
          attendance: "58 455",
        },
      },
      {
        id: v1(),
        date: "12.06.1938",
        stage: stage[1_4],
        teams: ["Brazil", "Czechoslovakia"],
        score: [[1, 1], [0, 0], []],
        goals: [
          {
            playersScoredGoal: ["Leônidas"],
            timeGoals: ["30"],
          },
          {
            playersScoredGoal: ["Nejedlý"],
            timeGoals: ["65(p)"],
          },
        ],
        stadium: {
          ...stadiums.France.parcLescure,
          attendance: "22 021",
        },
      },
      {
        id: v1(),
        date: "14.06.1938 REPLAY",
        stage: stage[1_4],
        teams: ["Brazil", "Czechoslovakia"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Leônidas", "Roberto"],
            timeGoals: ["57", "62"],
          },
          {
            playersScoredGoal: ["Kopecký"],
            timeGoals: ["25"],
          },
        ],
        stadium: {
          ...stadiums.France.parcLescure,
          attendance: "18 141",
        },
      },
      {
        id: v1(),
        date: "16.06.1938",
        stage: stage[1_2],
        teams: ["Hungary", "Sweden"],
        score: [[5, 1], [], []],
        goals: [
          {
            playersScoredGoal: [
              "Jacobsson",
              "Titkos",
              "Zsengellér",
              "G.Sárosi",
            ],
            timeGoals: ["19(o.g.)", "37", "39, 85", "65"],
          },
          {
            playersScoredGoal: ["Nyberg"],
            timeGoals: ["1"],
          },
        ],
        stadium: {
          ...stadiums.France.parcDesPrinces,
          attendance: "20 000",
        },
      },
      {
        id: v1(),
        date: "16.06.1938",
        stage: stage[1_2],
        teams: ["Italy", "Brazil"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Colaussi", "Meazza"],
            timeGoals: ["51", "60(p)"],
          },
          {
            playersScoredGoal: ["Romeu"],
            timeGoals: ["87"],
          },
        ],
        stadium: {
          ...stadiums.France.velodrome,
          attendance: "33 000",
        },
      },
      {
        id: v1(),
        date: "19.06.1938",
        stage: stage.place3,
        teams: ["Brazil", "Sweden"],
        score: [[4, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Romeu", "Leônidas", "Perácio"],
            timeGoals: ["44", "63, 74", "80"],
          },
          {
            playersScoredGoal: ["Jonasson", "Nyberg"],
            timeGoals: ["28", "38"],
          },
        ],
        stadium: {
          ...stadiums.France.parcLescure,
          attendance: "12 000",
        },
      },
      {
        id: v1(),
        date: "19.06.1938",
        stage: stage.final,
        teams: ["Italy", "Hungary"],
        score: [[4, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Colaussi", "Piola"],
            timeGoals: ["6, 35", "16, 82"],
          },
          {
            playersScoredGoal: ["Titkos", "G.Sárosi"],
            timeGoals: ["8", "70"],
          },
        ],
        stadium: {
          ...stadiums.France.colombes,
          attendance: "45 000",
        },
      },
    ],
    qualification: [],
  },
  1950: {
    id: "world-cup.4.1950",
    title: "1950 FIFA World Cup",
    date: "	24 June - 16 July",
    icon: iconWorldCup1950,
    background: [backgroundFWC1950_1, backgroundFWC1950_2],
    hostCountry: ["Brazil"],
    finalStage: [
      {
        id: v1(),
        date: "24.06.1950",
        stage: stage.group[1],
        teams: ["Brazil", "Mexico"],
        score: [[4, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Ademir", "Jair", "Baltazar"],
            timeGoals: ["30, 79", "65", "71"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Brazil.maracana,
          attendance: "81 649",
        },
      },
      {
        id: v1(),
        date: "25.06.1950",
        stage: stage.group[1],
        teams: ["Yugoslavia", "Switzerland"],
        score: [[3, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Mitić", "Tomašević", "Ognjanov"],
            timeGoals: ["59", "70", "84"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Brazil.independencia,
          attendance: "7 336",
        },
      },
      {
        id: v1(),
        date: "25.06.1950",
        stage: stage.group[2],
        teams: ["England", "Chile"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Mortensen", "Mannion"],
            timeGoals: ["39", "51"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Brazil.maracana,
          attendance: "29 703",
        },
      },
      {
        id: v1(),
        date: "25.06.1950",
        stage: stage.group[2],
        teams: ["Spain", "United States"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Igoa", "Basora", "Zarra"],
            timeGoals: ["81", "83", "89"],
          },
          {
            playersScoredGoal: ["Pariani"],
            timeGoals: ["17"],
          },
        ],
        stadium: {
          ...stadiums.Brazil.britto,
          attendance: "9 511",
        },
      },
      {
        id: v1(),
        date: "25.06.1950",
        stage: stage.group[3],
        teams: ["Sweden", "Italy"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Jeppson", "Andersson"],
            timeGoals: ["25, 68", "33"],
          },
          {
            playersScoredGoal: ["Carapellese", "Muccinelli"],
            timeGoals: ["7", "75"],
          },
        ],
        stadium: {
          ...stadiums.Brazil.britto,
          attendance: "36 502",
        },
      },
      {
        id: v1(),
        date: "28.06.1950",
        stage: stage.group[1],
        teams: ["Brazil", "Switzerland"],
        score: [[2, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Alfredo", "Baltazar"],
            timeGoals: ["3", "32"],
          },
          {
            playersScoredGoal: ["Fatton"],
            timeGoals: ["17, 88"],
          },
        ],
        stadium: {
          ...stadiums.Brazil.pacaembu,
          attendance: "42 032",
        },
      },
      {
        id: v1(),
        date: "28.06.1950",
        stage: stage.group[1],
        teams: ["Yugoslavia", "Mexico"],
        score: [[4, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Bobek", "Ž.Čajkovski", "Tomašević"],
            timeGoals: ["20", "23, 51", "81"],
          },
          {
            playersScoredGoal: ["Ortiz"],
            timeGoals: ["89(p)"],
          },
        ],
        stadium: {
          ...stadiums.Brazil.eucaliptos,
          attendance: "11 078",
        },
      },
      {
        id: v1(),
        date: "29.06.1950",
        stage: stage.group[2],
        teams: ["Spain", "Chile"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Basora", "Zarra"],
            timeGoals: ["17", "30"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Brazil.maracana,
          attendance: "19 790",
        },
      },
      {
        id: v1(),
        date: "29.06.1950",
        stage: stage.group[2],
        teams: ["United States", "England"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Gaetjens"],
            timeGoals: ["38"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Brazil.independencia,
          attendance: "10 151",
        },
      },
      {
        id: v1(),
        date: "29.06.1950",
        stage: stage.group[3],
        teams: ["Sweden", "Paraguay"],
        score: [[2, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Sundqvist", "Palmér"],
            timeGoals: ["17", "26"],
          },
          {
            playersScoredGoal: ["López", "López Fretes"],
            timeGoals: ["35", "74"],
          },
        ],
        stadium: {
          ...stadiums.Brazil.britto,
          attendance: "7 903",
        },
      },
      {
        id: v1(),
        date: "01.07.1950",
        stage: stage.group[1],
        teams: ["Brazil", "Yugoslavia"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Ademir", "Zizinho"],
            timeGoals: ["4", "69"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Brazil.maracana,
          attendance: "142 429",
        },
      },
      {
        id: v1(),
        date: "02.07.1950",
        stage: stage.group[1],
        teams: ["Switzerland", "Mexico"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Bader", "Antenen"],
            timeGoals: ["10", "44"],
          },
          {
            playersScoredGoal: ["Casarín"],
            timeGoals: ["89"],
          },
        ],
        stadium: {
          ...stadiums.Brazil.eucaliptos,
          attendance: "3 580",
        },
      },
      {
        id: v1(),
        date: "02.07.1950",
        stage: stage.group[2],
        teams: ["Spain", "England"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Zarra"],
            timeGoals: ["48"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Brazil.maracana,
          attendance: "74 462",
        },
      },
      {
        id: v1(),
        date: "02.07.1950",
        stage: stage.group[2],
        teams: ["Chile", "United States"],
        score: [[5, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Robledo", "Cremaschi", "Prieto", "Riera"],
            timeGoals: ["16", "32, 60", "54", "82"],
          },
          {
            playersScoredGoal: ["Wallace", "Maca"],
            timeGoals: ["47", "48(p)"],
          },
        ],
        stadium: {
          ...stadiums.Brazil.retiro,
          attendance: "8 501",
        },
      },
      {
        id: v1(),
        date: "02.07.1950",
        stage: stage.group[3],
        teams: ["Italy", "Paraguay"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Carapellese", "Pandolfini"],
            timeGoals: ["12", "62"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Brazil.pacaembu,
          attendance: "25 811",
        },
      },
      {
        id: v1(),
        date: "02.07.1950",
        stage: stage.group[4],
        teams: ["Uruguay", "Bolivia"],
        score: [[8, 0], [], []],
        goals: [
          {
            playersScoredGoal: [
              "Míguez",
              "Vidal",
              "Schiaffino",
              "Pérez",
              "Ghiggia",
            ],
            timeGoals: ["14, 40, 51", "18", "23, 54", "83", "87"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Brazil.independencia,
          attendance: "5 284",
        },
      },
      {
        id: v1(),
        date: "09.07.1950",
        stage: stage.group.finalGroup.group,
        teams: ["Uruguay", "Spain"],
        score: [[2, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Ghiggia", "Varela"],
            timeGoals: ["29", "73"],
          },
          {
            playersScoredGoal: ["Basora"],
            timeGoals: ["37, 39"],
          },
        ],
        stadium: {
          ...stadiums.Brazil.pacaembu,
          attendance: "44 802",
        },
      },
      {
        id: v1(),
        date: "09.07.1950",
        stage: stage.group.finalGroup.group,
        teams: ["Brazil", "Sweden"],
        score: [[7, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Ademir", "Chico", "Maneca"],
            timeGoals: ["17, 36, 52, 58", "39, 88", "85"],
          },
          {
            playersScoredGoal: ["Andersson"],
            timeGoals: ["67(p)"],
          },
        ],
        stadium: {
          ...stadiums.Brazil.maracana,
          attendance: "138 886",
        },
      },
      {
        id: v1(),
        date: "13.07.1950",
        stage: stage.group.finalGroup.group,
        teams: ["Brazil", "Spain"],
        score: [[6, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Ademir", "Jair", "Chico", "Zizinho"],
            timeGoals: ["15, 57", "21", "31, 55", "67"],
          },
          {
            playersScoredGoal: ["Igoa"],
            timeGoals: ["71"],
          },
        ],
        stadium: {
          ...stadiums.Brazil.maracana,
          attendance: "152 772",
        },
      },
      {
        id: v1(),
        date: "13.07.1950",
        stage: stage.group.finalGroup.group,
        teams: ["Uruguay", "Sweden"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Ghiggia", "Míguez"],
            timeGoals: ["39", "77, 85"],
          },
          {
            playersScoredGoal: ["Palmér", "Sundqvist"],
            timeGoals: ["5", "40"],
          },
        ],
        stadium: {
          ...stadiums.Brazil.pacaembu,
          attendance: "7 987",
        },
      },
      {
        id: v1(),
        date: "16.07.1950",
        stage: stage.group.finalGroup.groupPlace3,
        teams: ["Sweden", "Spain"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Sundqvist", "Mellberg", "Palmér"],
            timeGoals: ["15", "33", "80"],
          },
          {
            playersScoredGoal: ["Zarra"],
            timeGoals: ["82"],
          },
        ],
        stadium: {
          ...stadiums.Brazil.pacaembu,
          attendance: "11 227",
        },
      },
      {
        id: v1(),
        date: "16.07.1950",
        stage: stage.group.finalGroup.groupFinal,
        teams: ["Uruguay", "Brazil"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Schiaffino", "Ghiggia"],
            timeGoals: ["66", "79"],
          },
          {
            playersScoredGoal: ["Friaça"],
            timeGoals: ["47"],
          },
        ],
        stadium: {
          ...stadiums.Brazil.maracana,
          attendance: "173 850",
        },
      },
    ],
    qualification: [],
  },
  1954: {
    id: "world-cup.5.1954",
    title: "1954 FIFA World Cup",
    date: "16 June - 4 July",
    icon: iconWorldCup1954,
    background: [backgroundFWC1954_2, backgroundFWC1954_1],
    hostCountry: ["Switzerland"],
    finalStage: [
      {
        id: v1(),
        date: "16.06.1954",
        stage: stage.group[1],
        teams: ["Brazil", "Mexico"],
        score: [[5, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Baltazar", "Didi", "Pinga", "Julinho"],
            timeGoals: ["23", "30", "34, 44", "69"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.charmilles,
          attendance: "13 470",
        },
      },
      {
        id: v1(),
        date: "16.06.1954",
        stage: stage.group[1],
        teams: ["Yugoslavia", "France"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Milutinović"],
            timeGoals: ["15"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.pontaise,
          attendance: "16 000",
        },
      },
      {
        id: v1(),
        date: "16.06.1954",
        stage: stage.group[3],
        teams: ["Uruguay", "Czechoslovakia"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Míguez", "Schiaffino"],
            timeGoals: ["71", "84"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.wankdorf,
          attendance: "20 500",
        },
      },
      {
        id: v1(),
        date: "16.06.1954",
        stage: stage.group[3],
        teams: ["Austria", "Scotland"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Probst"],
            timeGoals: ["33"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.hardturm,
          attendance: "25 000",
        },
      },
      {
        id: v1(),
        date: "17.06.1954",
        stage: stage.group[2],
        teams: ["Germany", "Turkey"],
        score: [[4, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Schäfer", "Klodt", "O.Walter", "Morlock"],
            timeGoals: ["14", "52", "60", "84"],
          },
          {
            playersScoredGoal: ["Mamat"],
            timeGoals: ["2"],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.wankdorf,
          attendance: "28 000",
        },
      },
      {
        id: v1(),
        date: "17.06.1954",
        stage: stage.group[2],
        teams: ["Hungary", "Korea Republic"],
        score: [[9, 0], [], []],
        goals: [
          {
            playersScoredGoal: [
              "Puskás",
              "Lantos",
              "Kocsis",
              "Czibor",
              "Palotás",
            ],
            timeGoals: ["12, 89", "18", "24, 36, 50", "59", "75, 83"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.hardturm,
          attendance: "13 000",
        },
      },
      {
        id: v1(),
        date: "17.06.1954",
        stage: stage.group[4],
        teams: ["Switzerland", "Italy"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Ballaman", "Hügi"],
            timeGoals: ["18", "78"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.pontaise,
          attendance: "40 749",
        },
      },
      {
        id: v1(),
        date: "17.06.1954",
        stage: stage.group[4],
        teams: ["England", "Belgium"],
        score: [[3, 3], [1, 1], []],
        goals: [
          {
            playersScoredGoal: ["Broadis", "Lofthouse"],
            timeGoals: ["26, 63", "36, 91"],
          },
          {
            playersScoredGoal: ["Anoul", "Coppens", "Dickinson"],
            timeGoals: ["5, 71", "67", "94(o.g.)"],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.jakob,
          attendance: "14 000",
        },
      },
      {
        id: v1(),
        date: "19.06.1954",
        stage: stage.group[1],
        teams: ["Brazil", "Yugoslavia"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Didi"],
            timeGoals: ["69"],
          },
          {
            playersScoredGoal: ["Zebec"],
            timeGoals: ["48"],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.pontaise,
          attendance: "24 637",
        },
      },
      {
        id: v1(),
        date: "19.06.1954",
        stage: stage.group[1],
        teams: ["France", "Mexico"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Vincent", "Cárdenas", "Kopa"],
            timeGoals: ["19", "46(o.g.)", "88(p)"],
          },
          {
            playersScoredGoal: ["Lamadrid", "Balcázar"],
            timeGoals: ["54", "85"],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.charmilles,
          attendance: "19 000",
        },
      },
      {
        id: v1(),
        date: "19.06.1954",
        stage: stage.group[3],
        teams: ["Uruguay", "Scotland"],
        score: [[7, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Borges", "Míguez", "Abbadie"],
            timeGoals: ["17, 47, 57", "30, 83", "54, 85"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.jakob,
          attendance: "34 000",
        },
      },
      {
        id: v1(),
        date: "19.06.1954",
        stage: stage.group[3],
        teams: ["Austria", "Czechoslovakia"],
        score: [[5, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Stojaspal", "Probst"],
            timeGoals: ["3, 65", "4, 21, 24"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.hardturm,
          attendance: "26 000",
        },
      },
      {
        id: v1(),
        date: "20.06.1954",
        stage: stage.group[2],
        teams: ["Hungary", "Germany"],
        score: [[8, 3], [], []],
        goals: [
          {
            playersScoredGoal: ["Kocsis", "Puskás", "Hidegkuti", "J.Tóth"],
            timeGoals: ["3, 21, 69, 78", "17", "52, 54", "75"],
          },
          {
            playersScoredGoal: ["Pfaff", "Rahn", "Herrmann"],
            timeGoals: ["25", "77", "84"],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.jakob,
          attendance: "56 000",
        },
      },
      {
        id: v1(),
        date: "20.06.1954",
        stage: stage.group[2],
        teams: ["Turkey", "Korea Republic"],
        score: [[7, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Mamat", "Küçükandonyadis", "Sargun", "Keskin"],
            timeGoals: ["10, 30", "24", "37, 64, 70", "76"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.charmilles,
          attendance: "3 541",
        },
      },
      {
        id: v1(),
        date: "20.06.1954",
        stage: stage.group[4],
        teams: ["Italy", "Belgium"],
        score: [[4, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Pandolfini", "Galli", "Frignani", "Lorenzi"],
            timeGoals: ["41(p)", "48", "58", "78"],
          },
          {
            playersScoredGoal: ["Anoul"],
            timeGoals: ["81"],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.cornaredo,
          attendance: "24 000",
        },
      },
      {
        id: v1(),
        date: "20.06.1954",
        stage: stage.group[4],
        teams: ["England", "Switzerland"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Mullen", "Wilshaw"],
            timeGoals: ["43", "69"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.wankdorf,
          attendance: "43 119",
        },
      },
      {
        id: v1(),
        date: "23.06.1954",
        stage: stage.group[2],
        teams: ["Germany", "Turkey"],
        score: [[7, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["O.Walter", "Schäfer", "Morlock", "F.Walter"],
            timeGoals: ["7", "12, 79", "30, 60, 77", "62"],
          },
          {
            playersScoredGoal: ["Ertan", "Küçükandonyadis"],
            timeGoals: ["21", "82"],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.hardturm,
          attendance: "17 000",
        },
      },
      {
        id: v1(),
        date: "23.06.1954",
        stage: stage.group[4],
        teams: ["Switzerland", "Italy"],
        score: [[4, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Hügi", "Ballaman", "Fatton"],
            timeGoals: ["14, 85", "48", "90"],
          },
          {
            playersScoredGoal: ["Nesti"],
            timeGoals: ["67"],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.jakob,
          attendance: "28 655",
        },
      },
      {
        id: v1(),
        date: "26.06.1954",
        stage: stage[1_4],
        teams: ["Austria", "Switzerland"],
        score: [[7, 5], [], []],
        goals: [
          {
            playersScoredGoal: ["Wagner", "A.Körner", "Ocwirk", "Probst"],
            timeGoals: ["25, 27, 53", "26, 34", "32", "76"],
          },
          {
            playersScoredGoal: ["Ballaman", "Hügi"],
            timeGoals: ["16, 39", "17, 19, 60"],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.pontaise,
          attendance: "30 340",
        },
      },
      {
        id: v1(),
        date: "26.06.1954",
        stage: stage[1_4],
        teams: ["Uruguay", "England"],
        score: [[4, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Borges", "Varela", "Schiaffino", "Ambrois"],
            timeGoals: ["5", "39", "46", "78"],
          },
          {
            playersScoredGoal: ["Lofthouse", "Finney"],
            timeGoals: ["16", "67"],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.jakob,
          attendance: "28 000",
        },
      },
      {
        id: v1(),
        date: "27.06.1954",
        stage: stage[1_4],
        teams: ["Germany", "Yugoslavia"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Horvat", "Rahn"],
            timeGoals: ["9(o.g.)", "85"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.charmilles,
          attendance: "17 000",
        },
      },
      {
        id: v1(),
        date: "27.06.1954",
        stage: stage[1_4],
        teams: ["Hungary", "Brazil"],
        score: [[4, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Hidegkuti", "Kocsis", "Lantos"],
            timeGoals: ["4", "7, 88", "60(p)"],
          },
          {
            playersScoredGoal: ["Djalma Santos", "Julinho"],
            timeGoals: ["18(p)", "65"],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.wankdorf,
          attendance: "40 000",
        },
      },
      {
        id: v1(),
        date: "30.06.1954",
        stage: stage[1_2],
        teams: ["Germany", "Austria"],
        score: [[6, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Schäfer", "Morlock", "F.Walter", "O.Walter"],
            timeGoals: ["31", "47", "54(p), 64(p)", "61, 89"],
          },
          {
            playersScoredGoal: ["Probst"],
            timeGoals: ["51"],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.jakob,
          attendance: "58 000",
        },
      },
      {
        id: v1(),
        date: "30.06.1954",
        stage: stage[1_2],
        teams: ["Hungary", "Uruguay"],
        score: [[2, 2], [2, 0], []],
        goals: [
          {
            playersScoredGoal: ["Czibor", "Hidegkuti", "Kocsis"],
            timeGoals: ["13", "46", "111, 116"],
          },
          {
            playersScoredGoal: ["Hohberg"],
            timeGoals: ["75, 86"],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.pontaise,
          attendance: "45 000",
        },
      },
      {
        id: v1(),
        date: "03.07.1954",
        stage: stage.place3,
        teams: ["Austria", "Uruguay"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Stojaspal", "Cruz", "Ocwirk"],
            timeGoals: ["16(p)", "59(o.g.)", "89"],
          },
          {
            playersScoredGoal: ["Hohberg"],
            timeGoals: ["22"],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.hardturm,
          attendance: "32 000",
        },
      },
      {
        id: v1(),
        date: "03.07.1954",
        stage: stage.final,
        teams: ["Germany", "Hungary"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Morlock", "Rahn"],
            timeGoals: ["10", "18, 84"],
          },
          {
            playersScoredGoal: ["Puskás", "Czibor"],
            timeGoals: ["6", "8"],
          },
        ],
        stadium: {
          ...stadiums.Switzerland.wankdorf,
          attendance: "62 500",
        },
      },
    ],
    qualification: [],
  },
  1958: {
    id: "world-cup.6.1958",
    title: "1958 FIFA World Cup",
    date: "8-29 June",
    icon: iconWorldCup1958,
    background: [],
    hostCountry: ["Sweden"],
    finalStage: [
      {
        id: v1(),
        date: "08.06.1958",
        stage: stage.group[1],
        teams: ["Germany", "Argentina"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Rahn", "Seeler"],
            timeGoals: ["32, 79", "42"],
          },
          {
            playersScoredGoal: ["Corbatta"],
            timeGoals: ["3"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.malmo,
          attendance: "31 156",
        },
      },
      {
        id: v1(),
        date: "08.06.1958",
        stage: stage.group[1],
        teams: ["North. Ireland", "Czechoslovakia"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Cush"],
            timeGoals: ["21"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Sweden.orjansVall,
          attendance: "10 647",
        },
      },
      {
        id: v1(),
        date: "11.06.1958",
        stage: stage.group[1],
        teams: ["Germany", "Czechoslovakia"],
        score: [[2, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Schäfer", "Rahn"],
            timeGoals: ["60", "71"],
          },
          {
            playersScoredGoal: ["Dvořák", "Zikán"],
            timeGoals: ["24(p)", "42"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.olympiastadion,
          attendance: "25 000",
        },
      },
      {
        id: v1(),
        date: "11.06.1958",
        stage: stage.group[1],
        teams: ["Argentina", "North. Ireland"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Corbatta", "Menéndez", "Avio"],
            timeGoals: ["37(p)", "56", "60"],
          },
          {
            playersScoredGoal: ["McParland"],
            timeGoals: ["4"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.orjansVall,
          attendance: "14 174",
        },
      },
      {
        id: v1(),
        date: "15.06.1958",
        stage: stage.group[1],
        teams: ["Germany", "North. Ireland"],
        score: [[2, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Rahn", "Seeler"],
            timeGoals: ["20", "78"],
          },
          {
            playersScoredGoal: ["McParland"],
            timeGoals: ["18, 60"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.malmo,
          attendance: "21 990",
        },
      },
      {
        id: v1(),
        date: "15.06.1958",
        stage: stage.group[1],
        teams: ["Czechoslovakia", "Argentina"],
        score: [[6, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Dvořák", "Zikán", "Feureisl", "Hovorka"],
            timeGoals: ["8", "17, 40", "69", "82, 89"],
          },
          {
            playersScoredGoal: ["Corbatta"],
            timeGoals: ["65(p)"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.olympiastadion,
          attendance: "16 418",
        },
      },
      {
        id: v1(),
        date: "17.06.1958",
        stage: stage.group[1],
        teams: ["North. Ireland", "Czechoslovakia"],
        score: [[1, 1], [1, 0], []],
        goals: [
          {
            playersScoredGoal: ["McParland"],
            timeGoals: ["44", "97"],
          },
          {
            playersScoredGoal: ["Zikán"],
            timeGoals: ["18"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.malmo,
          attendance: "6 196",
        },
      },
      {
        id: v1(),
        date: "08.06.1958",
        stage: stage.group[2],
        teams: ["France", "Paraguay"],
        score: [[7, 3], [], []],
        goals: [
          {
            playersScoredGoal: [
              "Fontaine",
              "Piantoni",
              "Wisnieski",
              "Kopa",
              "Vincent",
            ],
            timeGoals: ["24, 30, 67", "52", "61", "70", "83"],
          },
          {
            playersScoredGoal: ["Amarilla", "Romero"],
            timeGoals: ["20, 44(p)", "50"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.idrottsparken,
          attendance: "16 518",
        },
      },
      {
        id: v1(),
        date: "08.06.1958",
        stage: stage.group[2],
        teams: ["Yugoslavia", "Scotland"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Petaković"],
            timeGoals: ["6"],
          },
          {
            playersScoredGoal: ["Murray"],
            timeGoals: ["49"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.arosvallen,
          attendance: "9 591",
        },
      },
      {
        id: v1(),
        date: "11.06.1958",
        stage: stage.group[2],
        teams: ["Yugoslavia", "France"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Petaković", "Veselinović"],
            timeGoals: ["16", "63, 88"],
          },
          {
            playersScoredGoal: ["Fontaine"],
            timeGoals: ["4, 85"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.arosvallen,
          attendance: "12 217",
        },
      },
      {
        id: v1(),
        date: "11.06.1958",
        stage: stage.group[2],
        teams: ["Paraguay", "Scotland"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Agüero", "Ré", "Parodi"],
            timeGoals: ["4", "45", "73"],
          },
          {
            playersScoredGoal: ["Mudie", "Collins"],
            timeGoals: ["24", "74"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.idrottsparken,
          attendance: "11 665",
        },
      },
      {
        id: v1(),
        date: "15.06.1958",
        stage: stage.group[2],
        teams: ["France", "Scotland"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Kopa", "Fontaine"],
            timeGoals: ["22", "44"],
          },
          {
            playersScoredGoal: ["Baird"],
            timeGoals: ["58"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.eyravallen,
          attendance: "13 554",
        },
      },
      {
        id: v1(),
        date: "15.06.1958",
        stage: stage.group[2],
        teams: ["Paraguay", "Yugoslavia"],
        score: [[3, 3], [], []],
        goals: [
          {
            playersScoredGoal: ["Parodi", "Agüero", "Romero"],
            timeGoals: ["20", "52", "80"],
          },
          {
            playersScoredGoal: ["Ognjanović", "Veselinović", "Rajkov"],
            timeGoals: ["18", "21", "73"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.tunavallen,
          attendance: "13 103",
        },
      },
      {
        id: v1(),
        date: "08.06.1958",
        stage: stage.group[3],
        teams: ["Sweden", "Mexico"],
        score: [[3, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Simonsson", "Liedholm"],
            timeGoals: ["17, 64", "57(p)"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Sweden.rasunda,
          attendance: "34 107",
        },
      },
      {
        id: v1(),
        date: "08.06.1958",
        stage: stage.group[3],
        teams: ["Hungary", "Wales"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Bozsik"],
            timeGoals: ["5"],
          },
          {
            playersScoredGoal: ["J.Charles"],
            timeGoals: ["27"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.eyravallen,
          attendance: "15 343",
        },
      },
      {
        id: v1(),
        date: "11.06.1958",
        stage: stage.group[3],
        teams: ["Mexico", "Wales"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Belmonte"],
            timeGoals: ["89"],
          },
          {
            playersScoredGoal: ["I.Allchurch"],
            timeGoals: ["32"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.rasunda,
          attendance: "15 150",
        },
      },
      {
        id: v1(),
        date: "12.06.1958",
        stage: stage.group[3],
        teams: ["Sweden", "Hungary"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Hamrin"],
            timeGoals: ["34, 55"],
          },
          {
            playersScoredGoal: ["Tichy"],
            timeGoals: ["77"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.rasunda,
          attendance: "38 850",
        },
      },
      {
        id: v1(),
        date: "15.06.1958",
        stage: stage.group[3],
        teams: ["Sweden", "Wales"],
        score: [[0, 0], [], []],
        goals: [
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Sweden.rasunda,
          attendance: "30 287",
        },
      },
      {
        id: v1(),
        date: "15.06.1958",
        stage: stage.group[3],
        teams: ["Hungary", "Mexico"],
        score: [[4, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Tichy", "Sándor", "Bencsics"],
            timeGoals: ["19, 46", "54", "69"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Sweden.jernvallen,
          attendance: "13 300",
        },
      },
      {
        id: v1(),
        date: "17.06.1958",
        stage: stage.group[3],
        teams: ["Wales", "Hungary"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["I.Allchurch", "Medwin"],
            timeGoals: ["55", "76"],
          },
          {
            playersScoredGoal: ["Tichy"],
            timeGoals: ["33"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.rasunda,
          attendance: "2 823",
        },
      },

      {
        id: v1(),
        date: "08.06.1958",
        stage: stage.group[4],
        teams: ["Brazil", "Austria"],
        score: [[3, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Altafini", "Nílton Santos"],
            timeGoals: ["37, 85", "50"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Sweden.rimnersvallen,
          attendance: "17 778",
        },
      },
      {
        id: v1(),
        date: "08.06.1958",
        stage: stage.group[4],
        teams: ["Soviet Union", "England"],
        score: [[2, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Simonyan", "A.Ivanov"],
            timeGoals: ["13", "56"],
          },
          {
            playersScoredGoal: ["Kevan", "Finney"],
            timeGoals: ["66", "85(p)"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.ullevi,
          attendance: "49 348",
        },
      },
      {
        id: v1(),
        date: "11.06.1958",
        stage: stage.group[4],
        teams: ["Brazil", "England"],
        score: [[0, 0], [], []],
        goals: [
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Sweden.ullevi,
          attendance: "40 895",
        },
      },
      {
        id: v1(),
        date: "11.06.1958",
        stage: stage.group[4],
        teams: ["Soviet Union", "Austria"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Ilyin", "V.Ivanov"],
            timeGoals: ["15", "62"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Sweden.ryavallen,
          attendance: "21 239",
        },
      },
      {
        id: v1(),
        date: "15.06.1958",
        stage: stage.group[4],
        teams: ["England", "Austria"],
        score: [[2, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Haynes", "Kevan"],
            timeGoals: ["56", "74"],
          },
          {
            playersScoredGoal: ["Koller", "Körner"],
            timeGoals: ["15", "71"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.ryavallen,
          attendance: "15 872",
        },
      },
      {
        id: v1(),
        date: "15.06.1958",
        stage: stage.group[4],
        teams: ["Brazil", "Soviet Union"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Vavá"],
            timeGoals: ["3, 77"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Sweden.ullevi,
          attendance: "50 928",
        },
      },
      {
        id: v1(),
        date: "17.06.1958",
        stage: stage.group[4],
        teams: ["Soviet Union", "England"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Ilyin"],
            timeGoals: ["69"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Sweden.ullevi,
          attendance: "23 182",
        },
      },

      {
        id: v1(),
        date: "19.06.1958",
        stage: stage[1_4],
        teams: ["Brazil", "Wales"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Pelé"],
            timeGoals: ["66"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Sweden.ullevi,
          attendance: "25 923",
        },
      },
      {
        id: v1(),
        date: "19.06.1958",
        stage: stage[1_4],
        teams: ["France", "North. Ireland"],
        score: [[4, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Wisnieski", "Fontaine", "Piantoni"],
            timeGoals: ["44", "55, 63", "68"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Sweden.idrottsparken,
          attendance: "11 800",
        },
      },
      {
        id: v1(),
        date: "19.06.1958",
        stage: stage[1_4],
        teams: ["Sweden", "Soviet Union"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Hamrin", "Simonsson"],
            timeGoals: ["49", "88"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Sweden.rasunda,
          attendance: "31 900",
        },
      },
      {
        id: v1(),
        date: "19.06.1958",
        stage: stage[1_4],
        teams: ["Germany", "Yugoslavia"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Rahn"],
            timeGoals: ["12"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Sweden.malmo,
          attendance: "20 055",
        },
      },

      {
        id: v1(),
        date: "24.06.1958",
        stage: stage[1_2],
        teams: ["Brazil", "France"],
        score: [[5, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Vavá", "Didi", "Pelé"],
            timeGoals: ["2", "39", "52, 64, 75"],
          },
          {
            playersScoredGoal: ["Fontaine", "Piantoni"],
            timeGoals: ["9", "83"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.rasunda,
          attendance: "27 100",
        },
      },
      {
        id: v1(),
        date: "24.06.1958",
        stage: stage[1_2],
        teams: ["Sweden", "Germany"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Skoglund", "Gren", "Hamrin"],
            timeGoals: ["32", "81", "88"],
          },
          {
            playersScoredGoal: ["Schäfer"],
            timeGoals: ["24"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.ullevi,
          attendance: "49 471",
        },
      },
      {
        id: v1(),
        date: "28.06.1958",
        stage: stage.place3,
        teams: ["France", "Germany"],
        score: [[6, 3], [], []],
        goals: [
          {
            playersScoredGoal: ["Fontaine", "Kopa", "Douis"],
            timeGoals: ["16, 36, 78, 89", "27(p)", "50"],
          },
          {
            playersScoredGoal: ["Cieslarczyk", "Rahn", "Schäfer"],
            timeGoals: ["18", "52", "84"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.ullevi,
          attendance: "32 483",
        },
      },
      {
        id: v1(),
        date: "29.06.1958",
        stage: stage.final,
        teams: ["Brazil", "Sweden"],
        score: [[5, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Vavá", "Pelé", "Zagallo"],
            timeGoals: ["9, 32", "55, 90", "68"],
          },
          {
            playersScoredGoal: ["Liedholm", "Simonsson"],
            timeGoals: ["4", "80"],
          },
        ],
        stadium: {
          ...stadiums.Sweden.rasunda,
          attendance: "49 737",
        },
      },
    ],
    qualification: [],
  },
  1962: {
    id: "world-cup.7.1962",
    title: "1962 FIFA World Cup",
    date: "30 May - 17 June",
    icon: iconWorldCup1962,
    background: [backgroundFWC1962_2, backgroundFWC1962_1, ],
    hostCountry: ["Chile"],
    finalStage: [
      {
        id: v1(),
        date: "30.05.1962",
        stage: stage.group[1],
        teams: ["Uruguay", "Colombia"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Cubilla", "Sasía"],
            timeGoals: ["56", "75"],
          },
          {
            playersScoredGoal: ["Zuluaga"],
            timeGoals: ["19(p)"],
          },
        ],
        stadium: {
          ...stadiums.Chile.dittborn,
          attendance: "7 908",
        },
      },
      {
        id: v1(),
        date: "31.05.1962",
        stage: stage.group[1],
        teams: ["Soviet Union", "Yugoslavia"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Ivanov", "Ponedelnik"],
            timeGoals: ["51", "83"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Chile.dittborn,
          attendance: "9 622",
        },
      },
      {
        id: v1(),
        date: "02.06.1962",
        stage: stage.group[1],
        teams: ["Yugoslavia", "Uruguay"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Skoblar", "Galić", "Jerković"],
            timeGoals: ["25(p)", "29", "49"],
          },
          {
            playersScoredGoal: ["Cabrera"],
            timeGoals: ["19"],
          },
        ],
        stadium: {
          ...stadiums.Chile.dittborn,
          attendance: "8 829",
        },
      },
      {
        id: v1(),
        date: "03.06.1962",
        stage: stage.group[1],
        teams: ["Soviet Union", "Colombia"],
        score: [[4, 4], [], []],
        goals: [
          {
            playersScoredGoal: ["Ivanov", "Chislenko", "Ponedelnik"],
            timeGoals: ["8, 11", "10", "56"],
          },
          {
            playersScoredGoal: ["Aceros", "Coll", "Rada", "Klinger"],
            timeGoals: ["21", "68", "72", "86" ],
          },
        ],
        stadium: {
          ...stadiums.Chile.dittborn,
          attendance: "8 040",
        },
      },
      {
        id: v1(),
        date: "06.06.1962",
        stage: stage.group[1],
        teams: ["Soviet Union", "Uruguay"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Mamykin", "Ivanov"],
            timeGoals: ["38", "89"],
          },
          {
            playersScoredGoal: ["Sasía"],
            timeGoals: ["54" ],
          },
        ],
        stadium: {
          ...stadiums.Chile.dittborn,
          attendance: "9 973",
        },
      },
      {
        id: v1(),
        date: "02.06.1962",
        stage: stage.group[1],
        teams: ["Yugoslavia", "Colombia"],
        score: [[5, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Galić", "Jerković", "Melić"],
            timeGoals: ["20, 61", "25, 87", "82"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Chile.dittborn,
          attendance: "7 167",
        },
      },
      {
        id: v1(),
        date: "30.05.1962",
        stage: stage.group[2],
        teams: ["Chile", "Switzerland"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["L.Sánchez", "Ramírez"],
            timeGoals: ["44, 55", "51"],
          },
          {
            playersScoredGoal: ["Wüthrich"],
            timeGoals: ["6"],
          },
        ],
        stadium: {
          ...stadiums.Chile.nacional,
          attendance: "65 006",
        },
      },
      {
        id: v1(),
        date: "31.05.1962",
        stage: stage.group[2],
        teams: ["Germany", "Italy"],
        score: [[0, 0], [], []],
        goals: [
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Chile.nacional,
          attendance: "65 440",
        },
      },
      {
        id: v1(),
        date: "02.06.1962",
        stage: stage.group[2],
        teams: ["Chile", "Italy"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Ramírez", "Toro"],
            timeGoals: ["73", "87"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Chile.nacional,
          attendance: "66 057",
        },
      },
      {
        id: v1(),
        date: "03.06.1962",
        stage: stage.group[2],
        teams: ["Germany", "Switzerland"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Brülls", "Seeler"],
            timeGoals: ["45", "59"],
          },
          {
            playersScoredGoal: ["Schneiter"],
            timeGoals: ["73"],
          },
        ],
        stadium: {
          ...stadiums.Chile.nacional,
          attendance: "64 922",
        },
      },
      {
        id: v1(),
        date: "06.06.1962",
        stage: stage.group[2],
        teams: ["Germany", "Chile"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Szymaniak", "Seeler"],
            timeGoals: ["21(p)", "82"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Chile.nacional,
          attendance: "67 224",
        },
      },
      {
        id: v1(),
        date: "06.06.1962",
        stage: stage.group[2],
        teams: ["Italy", "Switzerland"],
        score: [[3, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Mora", "Bulgarelli"],
            timeGoals: ["2", "65, 67"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Chile.nacional,
          attendance: "59 828",
        },
      },
      {
        id: v1(),
        date: "30.05.1962",
        stage: stage.group[3],
        teams: ["Brazil", "Mexico"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Zagallo", "Pelé"],
            timeGoals: ["56", "73"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Chile.sausalito,
          attendance: "10 484",
        },
      },
      {
        id: v1(),
        date: "31.05.1962",
        stage: stage.group[3],
        teams: ["Czechoslovakia", "Spain"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Štibrányi"],
            timeGoals: ["80"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Chile.sausalito,
          attendance: "12 700",
        },
      },
      {
        id: v1(),
        date: "02.06.1962",
        stage: stage.group[3],
        teams: ["Brazil", "Czechoslovakia"],
        score: [[0, 0], [], []],
        goals: [
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Chile.sausalito,
          attendance: "14 903",
        },
      },
      {
        id: v1(),
        date: "03.06.1962",
        stage: stage.group[3],
        teams: ["Spain", "Mexico"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Peiró"],
            timeGoals: ["90"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Chile.sausalito,
          attendance: "11 875",
        },
      },
      {
        id: v1(),
        date: "06.06.1962",
        stage: stage.group[3],
        teams: ["Brazil", "Spain"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Amarildo"],
            timeGoals: ["72, 86"],
          },
          {
            playersScoredGoal: ["Adelardo"],
            timeGoals: ["35"],
          },
        ],
        stadium: {
          ...stadiums.Chile.sausalito,
          attendance: "18 715",
        },
      },
      {
        id: v1(),
        date: "07.06.1962",
        stage: stage.group[3],
        teams: ["Mexico", "Czechoslovakia"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Díaz", "Del Águila", "Hernández"],
            timeGoals: ["12", "29", "90(p)"],
          },
          {
            playersScoredGoal: ["Mašek"],
            timeGoals: ["1"],
          },
        ],
        stadium: {
          ...stadiums.Chile.sausalito,
          attendance: "10 648",
        },
      },
      {
        id: v1(),
        date: "30.05.1962",
        stage: stage.group[4],
        teams: ["Argentina", "Bulgaria"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Facundo"],
            timeGoals: ["4"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Chile.teniente,
          attendance: "7 134",
        },
      },
      {
        id: v1(),
        date: "31.05.1962",
        stage: stage.group[4],
        teams: ["Hungary", "England"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Tichy", "Albert"],
            timeGoals: ["17", "71"],
          },
          {
            playersScoredGoal: ["Flowers"],
            timeGoals: ["60(p)"],
          },
        ],
        stadium: {
          ...stadiums.Chile.teniente,
          attendance: "7 938",
        },
      },
      {
        id: v1(),
        date: "02.06.1962",
        stage: stage.group[4],
        teams: ["England", "Argentina"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Flowers", "Charlton", "Greaves"],
            timeGoals: ["17(p)", "42", "67"],
          },
          {
            playersScoredGoal: ["Sanfilippo"],
            timeGoals: ["81"],
          },
        ],
        stadium: {
          ...stadiums.Chile.teniente,
          attendance: "9 794",
        },
      },
      {
        id: v1(),
        date: "03.06.1962",
        stage: stage.group[4],
        teams: ["Hungary", "Bulgaria"],
        score: [[6, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Albert", "Tichy", "Solymosi"],
            timeGoals: ["1, 6, 53", "8, 70", "12"],
          },
          {
            playersScoredGoal: ["Sokolov"],
            timeGoals: ["64"],
          },
        ],
        stadium: {
          ...stadiums.Chile.teniente,
          attendance: "7 442",
        },
      },
      {
        id: v1(),
        date: "06.06.1962",
        stage: stage.group[4],
        teams: ["Hungary", "Argentina"],
        score: [[0, 0], [], []],
        goals: [
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Chile.teniente,
          attendance: "7 945",
        },
      },
      {
        id: v1(),
        date: "07.06.1962",
        stage: stage.group[4],
        teams: ["England", "Bulgaria"],
        score: [[0, 0], [], []],
        goals: [
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Chile.teniente,
          attendance: "5 700",
        },
      },
      {
        id: v1(),
        date: "10.06.1962",
        stage: stage[1_4],
        teams: ["Chile", "Soviet Union"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["L.Sánchez", "Rojas"],
            timeGoals: ["11", "29"],
          },
          {
            playersScoredGoal: ["Chislenko"],
            timeGoals: ["26"],
          },
        ],
        stadium: {
          ...stadiums.Chile.dittborn,
          attendance: "17 268",
        },
      },
      {
        id: v1(),
        date: "10.06.1962",
        stage: stage[1_4],
        teams: ["Czechoslovakia", "Hungary"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Scherer"],
            timeGoals: ["13"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Chile.teniente,
          attendance: "11 690",
        },
      },
      {
        id: v1(),
        date: "10.06.1962",
        stage: stage[1_4],
        teams: ["Brazil", "England"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Garrincha", "Vavá"],
            timeGoals: ["31, 59", "53"],
          },
          {
            playersScoredGoal: ["Hitchens"],
            timeGoals: ["38"],
          },
        ],
        stadium: {
          ...stadiums.Chile.sausalito,
          attendance: "17 736",
        },
      },
      {
        id: v1(),
        date: "10.06.1962",
        stage: stage[1_4],
        teams: ["Yugoslavia", "Germany"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Radaković"],
            timeGoals: ["85"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Chile.nacional,
          attendance: "63 324",
        },
      },
      {
        id: v1(),
        date: "13.06.1962",
        stage: stage[1_2],
        teams: ["Czechoslovakia", "Yugoslavia"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Kadraba", "Scherer"],
            timeGoals: ["48", "80, 84(p)"],
          },
          {
            playersScoredGoal: ["Jerković"],
            timeGoals: ["69"],
          },
        ],
        stadium: {
          ...stadiums.Chile.sausalito,
          attendance: "5 890",
        },
      },
      {
        id: v1(),
        date: "13.06.1962",
        stage: stage[1_2],
        teams: ["Brazil", "Chile"],
        score: [[4, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Garrincha", "Vavá"],
            timeGoals: ["9, 32", "47, 78"],
          },
          {
            playersScoredGoal: ["Toro", "L.Sánchez"],
            timeGoals: ["42", "61(p)"],
          },
        ],
        stadium: {
          ...stadiums.Chile.nacional,
          attendance: "76 594",
        },
      },
      {
        id: v1(),
        date: "16.06.1962",
        stage: stage.place3,
        teams: ["Chile", "Yugoslavia"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Rojas"],
            timeGoals: ["90"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Chile.nacional,
          attendance: "66 697",
        },
      },
      {
        id: v1(),
        date: "17.06.1962",
        stage: stage.final,
        teams: ["Brazil", "Czechoslovakia"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Amarildo", "Zito", "Vavá"],
            timeGoals: ["17", "69", "78"],
          },
          {
            playersScoredGoal: ["Masopust"],
            timeGoals: ["15"],
          },
        ],
        stadium: {
          ...stadiums.Chile.nacional,
          attendance: "68 679",
        },
      },
    ],
    qualification: [],
  },
  1966: {
    id: "world-cup.8.1966",
    title: "1966 FIFA World Cup",
    date: "11-30 July",
    icon: iconWorldCup1966,
    background: [backgroundFWC1966_2, backgroundFWC1966_1],
    hostCountry: ["England"],
    finalStage: [
      {
        id: v1(),
        date: "11.07.1966",
        stage: stage.group[1],
        teams: ["England", "Uruguay"],
        score: [[0, 0], [], []],
        goals: [
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.England.wembley,
          attendance: "87 148",
        },
      },
      {
        id: v1(),
        date: "13.07.1966",
        stage: stage.group[1],
        teams: ["France", "Mexico"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Hausser"],
            timeGoals: ["62"],
          },
          {
            playersScoredGoal: ["Borja"],
            timeGoals: ["48"],
          },
        ],
        stadium: {
          ...stadiums.England.wembley,
          attendance: "69 237",
        },
      },
      {
        id: v1(),
        date: "15.07.1966",
        stage: stage.group[1],
        teams: ["Uruguay", "France"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Rocha", "Cortés"],
            timeGoals: ["26", "31"],
          },
          {
            playersScoredGoal: ["De Bourgoing"],
            timeGoals: ["15(p)"],
          },
        ],
        stadium: {
          ...stadiums.England.city,
          attendance: "45 662",
        },
      },
      {
        id: v1(),
        date: "16.07.1966",
        stage: stage.group[1],
        teams: ["England", "Mexico"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["B.Charlton", "Hunt"],
            timeGoals: ["37", "75"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.England.wembley,
          attendance: "92 570",
        },
      },
      {
        id: v1(),
        date: "19.07.1966",
        stage: stage.group[1],
        teams: ["Uruguay", "Mexico"],
        score: [[0, 0], [], []],
        goals: [
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.England.wembley,
          attendance: "61 112",
        },
      },
      {
        id: v1(),
        date: "20.07.1966",
        stage: stage.group[1],
        teams: ["England", "France"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Hunt"],
            timeGoals: ["38", "75"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.England.wembley,
          attendance: "98 270",
        },
      },
      {
        id: v1(),
        date: "12.07.1966",
        stage: stage.group[2],
        teams: ["Germany", "Switzerland"],
        score: [[5, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Held", "Haller", "Beckenbauer"],
            timeGoals: ["16", "21, 77(p)", "40, 52"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.England.hillsborough,
          attendance: "36 127",
        },
      },
      {
        id: v1(),
        date: "13.07.1966",
        stage: stage.group[2],
        teams: ["Argentina", "Spain"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Artime"],
            timeGoals: ["65, 79"],
          },
          {
            playersScoredGoal: ["Pirri"],
            timeGoals: ["71"],
          },
        ],
        stadium: {
          ...stadiums.England.villa,
          attendance: "42 738",
        },
      },
      {
        id: v1(),
        date: "15.07.1966",
        stage: stage.group[2],
        teams: ["Spain", "Switzerland"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Sanchís", "Amancio"],
            timeGoals: ["57", "75"],
          },
          {
            playersScoredGoal: ["Quentin"],
            timeGoals: ["31"],
          },
        ],
        stadium: {
          ...stadiums.England.hillsborough,
          attendance: "32 028",
        },
      },
      {
        id: v1(),
        date: "16.07.1966",
        stage: stage.group[2],
        teams: ["Argentina", "Germany"],
        score: [[0, 0], [], []],
        goals: [
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.England.villa,
          attendance: "46 587",
        },
      },
      {
        id: v1(),
        date: "19.07.1966",
        stage: stage.group[2],
        teams: ["Argentina", "Switzerland"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Artime", "Onega"],
            timeGoals: ["52", "79"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.England.hillsborough,
          attendance: "32 127",
        },
      },
      {
        id: v1(),
        date: "20.07.1966",
        stage: stage.group[2],
        teams: ["Germany", "Spain"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Emmerich", "Seeler"],
            timeGoals: ["39", "84"],
          },
          {
            playersScoredGoal: ["Fusté"],
            timeGoals: ["23"],
          },
        ],
        stadium: {
          ...stadiums.England.villa,
          attendance: "42 187",
        },
      },
      {
        id: v1(),
        date: "12.07.1966",
        stage: stage.group[3],
        teams: ["Brazil", "Bulgaria"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Pelé", "Garrincha"],
            timeGoals: ["15", "63"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.England.goodison,
          attendance: "47 308",
        },
      },
      {
        id: v1(),
        date: "13.07.1966",
        stage: stage.group[3],
        teams: ["Portugal", "Hungary"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["José Augusto", "Torres"],
            timeGoals: ["2, 67", "90"],
          },
          {
            playersScoredGoal: ["Bene"],
            timeGoals: ["60"],
          },
        ],
        stadium: {
          ...stadiums.England.oldTrafford,
          attendance: "29 886",
        },
      },
      {
        id: v1(),
        date: "15.07.1966",
        stage: stage.group[3],
        teams: ["Hungary", "Brazil"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Bene", "Farkas", "Mészöly"],
            timeGoals: ["2", "64", "73(p)"],
          },
          {
            playersScoredGoal: ["Tostão"],
            timeGoals: ["14"],
          },
        ],
        stadium: {
          ...stadiums.England.goodison,
          attendance: "51 387",
        },
      },
      {
        id: v1(),
        date: "16.07.1966",
        stage: stage.group[3],
        teams: ["Portugal", "Bulgaria"],
        score: [[3, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Vutsov", "Eusébio", "Torres"],
            timeGoals: ["7(o.g.)", "38", "81"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.England.oldTrafford,
          attendance: "25 438",
        },
      },
      {
        id: v1(),
        date: "19.07.1966",
        stage: stage.group[3],
        teams: ["Portugal", "Brazil"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Simões", "Eusébio"],
            timeGoals: ["15", "27, 85"],
          },
          {
            playersScoredGoal: ["Rildo"],
            timeGoals: ["73"],
          },
        ],
        stadium: {
          ...stadiums.England.goodison,
          attendance: "58 479",
        },
      },
      {
        id: v1(),
        date: "20.07.1966",
        stage: stage.group[3],
        teams: ["Hungary", "Bulgaria"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Davidov", "Mészöly", "Bene"],
            timeGoals: ["43(o.g.)", "45", "54"],
          },
          {
            playersScoredGoal: ["Asparuhov"],
            timeGoals: ["15"],
          },
        ],
        stadium: {
          ...stadiums.England.oldTrafford,
          attendance: "24 129",
        },
      },
      {
        id: v1(),
        date: "12.07.1966",
        stage: stage.group[4],
        teams: ["Soviet Union", "DPR Korea"],
        score: [[3, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Malofeyev", "Banishevskiy"],
            timeGoals: ["31, 88", "33"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.England.ayresome,
          attendance: "23 006",
        },
      },
      {
        id: v1(),
        date: "13.07.1966",
        stage: stage.group[4],
        teams: ["Italy", "Chile"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Mazzola", "Barison"],
            timeGoals: ["8", "88"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.England.roker,
          attendance: "27 199",
        },
      },
      {
        id: v1(),
        date: "15.07.1966",
        stage: stage.group[4],
        teams: ["Chile", "DPR Korea"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Marcos"],
            timeGoals: ["26(p)"],
          },
          {
            playersScoredGoal: ["Pak Seung-zin"],
            timeGoals: ["88"],
          },
        ],
        stadium: {
          ...stadiums.England.ayresome,
          attendance: "13 792",
        },
      },
      {
        id: v1(),
        date: "16.07.1966",
        stage: stage.group[4],
        teams: ["Soviet Union", "Italy"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Chislenko"],
            timeGoals: ["57"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.England.roker,
          attendance: "27 793",
        },
      },
      {
        id: v1(),
        date: "19.07.1966",
        stage: stage.group[4],
        teams: ["DPR Korea", "Italy"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Pak Doo-ik"],
            timeGoals: ["42"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.England.ayresome,
          attendance: "17 829",
        },
      },
      {
        id: v1(),
        date: "20.07.1966",
        stage: stage.group[4],
        teams: ["Soviet Union", "Chile"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Porkuyan"],
            timeGoals: ["28, 85"],
          },
          {
            playersScoredGoal: ["Marcos"],
            timeGoals: ["32"],
          },
        ],
        stadium: {
          ...stadiums.England.roker,
          attendance: "16 027",
        },
      },
      {
        id: v1(),
        date: "23.07.1966",
        stage: stage[1_4],
        teams: ["England", "Argentina"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Hurst"],
            timeGoals: ["78"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.England.wembley,
          attendance: "90 584",
        },
      },
      {
        id: v1(),
        date: "23.07.1966",
        stage: stage[1_4],
        teams: ["Germany", "Uruguay"],
        score: [[4, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Haller", "Beckenbauer", "Seeler"],
            timeGoals: ["11, 83", "70", "75"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.England.hillsborough,
          attendance: "40 007",
        },
      },
      {
        id: v1(),
        date: "23.07.1966",
        stage: stage[1_4],
        teams: ["Soviet Union", "Hungary"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Chislenko", "Porkuyan"],
            timeGoals: ["5", "46"],
          },
          {
            playersScoredGoal: ["Bene"],
            timeGoals: ["57"],
          },
        ],
        stadium: {
          ...stadiums.England.roker,
          attendance: "26 844",
        },
      },
      {
        id: v1(),
        date: "23.07.1966",
        stage: stage[1_4],
        teams: ["Portugal", "DPR Korea"],
        score: [[5, 3], [], []],
        goals: [
          {
            playersScoredGoal: ["Eusébio", "José Augusto"],
            timeGoals: ["27, 43(p), 56, 59(p)", "80"],
          },
          {
            playersScoredGoal: ["Pak Seung-zin", "Li Dong-woon", "Yang Seung-kook"],
            timeGoals: ["1", "22", "25"],
          },
        ],
        stadium: {
          ...stadiums.England.goodison,
          attendance: "40 248",
        },
      },
      {
        id: v1(),
        date: "25.07.1966",
        stage: stage[1_2],
        teams: ["Germany", "Soviet Union"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Haller", "Beckenbauer"],
            timeGoals: ["43", "67"],
          },
          {
            playersScoredGoal: ["Porkuyan"],
            timeGoals: ["88"],
          },
        ],
        stadium: {
          ...stadiums.England.goodison,
          attendance: "38 273",
        },
      },
      {
        id: v1(),
        date: "26.07.1966",
        stage: stage[1_2],
        teams: ["England", "Portugal"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["B.Charlton"],
            timeGoals: ["30", "80"],
          },
          {
            playersScoredGoal: ["Eusébio"],
            timeGoals: ["82(p)"],
          },
        ],
        stadium: {
          ...stadiums.England.wembley,
          attendance: "94 493",
        },
      },
      {
        id: v1(),
        date: "28.07.1966",
        stage: stage.place3,
        teams: ["Portugal", "Soviet Union"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Eusébio", "Torres"],
            timeGoals: ["12(p)", "89"],
          },
          {
            playersScoredGoal: ["Malofeyev"],
            timeGoals: ["43"],
          },
        ],
        stadium: {
          ...stadiums.England.wembley,
          attendance: "87 696",
        },
      },
      {
        id: v1(),
        date: "30.07.1966",
        stage: stage.final,
        teams: ["England", "Germany"],
        score: [[2, 2], [2, 0], []],
        goals: [
          {
            playersScoredGoal: ["Hurst", "Peters"],
            timeGoals: ["18, 101, 120", "78"],
          },
          {
            playersScoredGoal: ["Haller", "Weber"],
            timeGoals: ["12", "89"],
          },
        ],
        stadium: {
          ...stadiums.England.wembley,
          attendance: "96 924",
        },
      },
    ],
    qualification: [],
  },
  1970: {
    id: "world-cup.9.1970",
    title: "1970 FIFA World Cup",
    date: "31 May - 21 June",
    icon: iconWorldCup1970,
    background: [backgroundFWC1970_2, backgroundFWC1970_1],
    hostCountry: ["Mexico"],
    finalStage: [
      {
        id: v1(),
        date: "31.05.1970",
        stage: stage.group[1],
        teams: ["Mexico", "Soviet Union"],
        score: [[0, 0], [], []],
        goals: [
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Mexico.azteca,
          attendance: "107 160",
        },
      },
      {
        id: v1(),
        date: "03.06.1970",
        stage: stage.group[1],
        teams: ["Belgium", "El Salvador"],
        score: [[3, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Van Moer", "Lambert"],
            timeGoals: ["12, 54", "79(p)"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Mexico.azteca,
          attendance: "92 205",
        },
      },
      {
        id: v1(),
        date: "06.06.1970",
        stage: stage.group[1],
        teams: ["Soviet Union", "Belgium"],
        score: [[4, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Byshovets", "Asatiani", "Khmelnytskyi"],
            timeGoals: ["14, 63", "57", "76"],
          },
          {
            playersScoredGoal: ["Lambert"],
            timeGoals: ["86"],
          },
        ],
        stadium: {
          ...stadiums.Mexico.azteca,
          attendance: "95 261",
        },
      },
      {
        id: v1(),
        date: "07.06.1970",
        stage: stage.group[1],
        teams: ["Mexico", "El Salvador"],
        score: [[4, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Valdivia", "Fragoso", "Basaguren"],
            timeGoals: ["45, 46", "58", "83"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Mexico.azteca,
          attendance: "103 058",
        },
      },
      {
        id: v1(),
        date: "10.06.1970",
        stage: stage.group[1],
        teams: ["Soviet Union", "El Salvador"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Byshovets"],
            timeGoals: ["51, 74"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Mexico.azteca,
          attendance: "89 979",
        },
      },
      {
        id: v1(),
        date: "11.06.1970",
        stage: stage.group[1],
        teams: ["Mexico", "Belgium"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Peña"],
            timeGoals: ["14(p)"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Mexico.azteca,
          attendance: "108 192",
        },
      },
      {
        id: v1(),
        date: "02.06.1970",
        stage: stage.group[2],
        teams: ["Uruguay", "Israel"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Maneiro", "Mujica"],
            timeGoals: ["23", "50"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Mexico.cuauhtemoc,
          attendance: "20 654",
        },
      },
      {
        id: v1(),
        date: "03.06.1970",
        stage: stage.group[2],
        teams: ["Italy", "Sweden"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Domenghini"],
            timeGoals: ["10"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Mexico.dosal,
          attendance: "13 433",
        },
      },
      {
        id: v1(),
        date: "06.06.1970",
        stage: stage.group[2],
        teams: ["Uruguay", "Italy"],
        score: [[0, 0], [], []],
        goals: [
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Mexico.cuauhtemoc,
          attendance: "29 968",
        },
      },
      {
        id: v1(),
        date: "07.06.1970",
        stage: stage.group[2],
        teams: ["Sweden", "Israel"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Turesson"],
            timeGoals: ["53"],
          },
          {
            playersScoredGoal: ["Spiegler"],
            timeGoals: ["56"],
          },
        ],
        stadium: {
          ...stadiums.Mexico.dosal,
          attendance: "9 624",
        },
      },
      {
        id: v1(),
        date: "10.06.1970",
        stage: stage.group[2],
        teams: ["Sweden", "Uruguay"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Grahn"],
            timeGoals: ["90"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Mexico.cuauhtemoc,
          attendance: "18 163",
        },
      },
      {
        id: v1(),
        date: "11.06.1970",
        stage: stage.group[2],
        teams: ["Italy", "Israel"],
        score: [[0, 0], [], []],
        goals: [
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Mexico.dosal,
          attendance: "9 890",
        },
      },
      {
        id: v1(),
        date: "02.06.1970",
        stage: stage.group[3],
        teams: ["England", "Romania"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Hurst"],
            timeGoals: ["65"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Mexico.jalisco,
          attendance: "50 560",
        },
      },
      {
        id: v1(),
        date: "03.06.1970",
        stage: stage.group[3],
        teams: ["Brazil", "Czechoslovakia"],
        score: [[4, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Rivellino", "Pelé", "Jairzinho"],
            timeGoals: ["24", "59", "61, 83"],
          },
          {
            playersScoredGoal: ["Petráš"],
            timeGoals: ["11"],
          },
        ],
        stadium: {
          ...stadiums.Mexico.jalisco,
          attendance: "52 897",
        },
      },
      {
        id: v1(),
        date: "06.06.1970",
        stage: stage.group[3],
        teams: ["Romania", "Czechoslovakia"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Neagu", "Dumitrache"],
            timeGoals: ["52", "75(p)"],
          },
          {
            playersScoredGoal: ["Petráš"],
            timeGoals: ["5"],
          },
        ],
        stadium: {
          ...stadiums.Mexico.jalisco,
          attendance: "56 818",
        },
      },
      {
        id: v1(),
        date: "07.06.1970",
        stage: stage.group[3],
        teams: ["Brazil", "England"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Jairzinho"],
            timeGoals: ["59"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Mexico.jalisco,
          attendance: "66 843",
        },
      },
      {
        id: v1(),
        date: "10.06.1970",
        stage: stage.group[3],
        teams: ["Brazil", "Romania"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Pelé", "Jairzinho"],
            timeGoals: ["19, 67", "22"],
          },
          {
            playersScoredGoal: ["Dumitrache", "Dembrovschi"],
            timeGoals: ["34", "84"],
          },
        ],
        stadium: {
          ...stadiums.Mexico.jalisco,
          attendance: "50 804",
        },
      },
      {
        id: v1(),
        date: "11.06.1970",
        stage: stage.group[3],
        teams: ["England", "Czechoslovakia"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Clarke"],
            timeGoals: ["50(p)"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Mexico.jalisco,
          attendance: "49 292",
        },
      },
      {
        id: v1(),
        date: "02.06.1970",
        stage: stage.group[4],
        teams: ["Peru", "Bulgaria"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Gallardo", "Chumpitaz", "Cubillas"],
            timeGoals: ["50", "55", "73"],
          },
          {
            playersScoredGoal: ["Dermendzhiev", "Bonev"],
            timeGoals: ["13", "49"],
          },
        ],
        stadium: {
          ...stadiums.Mexico.nouCamp,
          attendance: "13 765",
        },
      },
      {
        id: v1(),
        date: "03.06.1970",
        stage: stage.group[4],
        teams: ["Germany", "Morocco"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Seeler", "Müller"],
            timeGoals: ["56", "80"],
          },
          {
            playersScoredGoal: ["Jarir"],
            timeGoals: ["21"],
          },
        ],
        stadium: {
          ...stadiums.Mexico.nouCamp,
          attendance: "12 942",
        },
      },
      {
        id: v1(),
        date: "06.06.1970",
        stage: stage.group[4],
        teams: ["Peru", "Morocco"],
        score: [[3, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Cubillas", "Challe"],
            timeGoals: ["65, 75", "67"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Mexico.nouCamp,
          attendance: "13 537",
        },
      },
      {
        id: v1(),
        date: "07.06.1970",
        stage: stage.group[4],
        teams: ["Germany", "Bulgaria"],
        score: [[5, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Libuda", "Müller", "Seeler"],
            timeGoals: ["20", "27, 52(p), 88", "67"],
          },
          {
            playersScoredGoal: ["Nikodimov", "Kolev"],
            timeGoals: ["12", "89"],
          },
        ],
        stadium: {
          ...stadiums.Mexico.nouCamp,
          attendance: "17 710",
        },
      },
      {
        id: v1(),
        date: "10.06.1970",
        stage: stage.group[4],
        teams: ["Germany", "Peru"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Müller"],
            timeGoals: ["19, 26, 39"],
          },
          {
            playersScoredGoal: ["Cubillas"],
            timeGoals: ["44"],
          },
        ],
        stadium: {
          ...stadiums.Mexico.nouCamp,
          attendance: "17 875",
        },
      },
      {
        id: v1(),
        date: "11.06.1970",
        stage: stage.group[4],
        teams: ["Bulgaria", "Morocco"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Zhechev"],
            timeGoals: ["40"],
          },
          {
            playersScoredGoal: ["Ghazouani"],
            timeGoals: ["61"],
          },
        ],
        stadium: {
          ...stadiums.Mexico.nouCamp,
          attendance: "12 299",
        },
      },
      {
        id: v1(),
        date: "14.06.1970",
        stage: stage[1_4],
        teams: ["Uruguay", "Soviet Union"],
        score: [[0, 0], [1, 0], []],
        goals: [
          {
            playersScoredGoal: ["Espárrago"],
            timeGoals: ["117"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Mexico.azteca,
          attendance: "26 085",
        },
      },
      {
        id: v1(),
        date: "14.06.1970",
        stage: stage[1_4],
        teams: ["Italy", "Mexico"],
        score: [[4, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Guzmán", "Riva", "Rivera"],
            timeGoals: ["25(o.g.)", "63, 76", "70"],
          },
          {
            playersScoredGoal: ["González"],
            timeGoals: ["13"],
          },
        ],
        stadium: {
          ...stadiums.Mexico.dosal,
          attendance: "26 851",
        },
      },
      {
        id: v1(),
        date: "14.06.1970",
        stage: stage[1_4],
        teams: ["Brazil", "Peru"],
        score: [[4, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Rivellino", "Tostão", "Jairzinho"],
            timeGoals: ["11", "15, 52", "75"],
          },
          {
            playersScoredGoal: ["Gallardo", "Cubillas"],
            timeGoals: ["28", "70"],
          },
        ],
        stadium: {
          ...stadiums.Mexico.jalisco,
          attendance: "54 233",
        },
      },
      {
        id: v1(),
        date: "14.06.1970",
        stage: stage[1_4],
        teams: ["Germany", "England"],
        score: [[2, 2], [1, 0], []],
        goals: [
          {
            playersScoredGoal: ["Beckenbauer", "Seeler", "Müller"],
            timeGoals: ["68", "82", "108"],
          },
          {
            playersScoredGoal: ["Mullery", "Peters"],
            timeGoals: ["31", "49"],
          },
        ],
        stadium: {
          ...stadiums.Mexico.nouCamp,
          attendance: "23 357",
        },
      },
      {
        id: v1(),
        date: "17.06.1970",
        stage: stage[1_2],
        teams: ["Brazil", "Uruguay"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Clodoaldo", "Jairzinho", "Rivellino"],
            timeGoals: ["44", "76", "89"],
          },
          {
            playersScoredGoal: ["Cubilla"],
            timeGoals: ["19"],
          },
        ],
        stadium: {
          ...stadiums.Mexico.jalisco,
          attendance: "51 261",
        },
      },
      {
        id: v1(),
        date: "17.06.1970",
        stage: stage[1_2],
        teams: ["Italy", "Germany"],
        score: [[1, 1], [3, 2], []],
        goals: [
          {
            playersScoredGoal: ["Boninsegna", "Burgnich", "Riva", "Rivera"],
            timeGoals: ["8", "98", "104", "111"],
          },
          {
            playersScoredGoal: ["Schnellinger", "Müller"],
            timeGoals: ["90", "95, 110"],
          },
        ],
        stadium: {
          ...stadiums.Mexico.jalisco,
          attendance: "102 444",
        },
      },
      {
        id: v1(),
        date: "20.06.1970",
        stage: stage.place3,
        teams: ["Germany", "Uruguay"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Overath"],
            timeGoals: ["26"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Mexico.azteca,
          attendance: "104 403",
        },
      },
      {
        id: v1(),
        date: "21.06.1970",
        stage: stage.final,
        teams: ["Brazil", "Italy"],
        score: [[4, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Pelé", "Gérson", "Jairzinho", "Carlos Alberto"],
            timeGoals: ["18", "65", "71", "86"],
          },
          {
            playersScoredGoal: ["Boninsegna"],
            timeGoals: ["37"],
          },
        ],
        stadium: {
          ...stadiums.Mexico.azteca,
          attendance: "107 412",
        },
      },
    ],
    qualification: [],
  },
  1974: {
    id: "world-cup.10.1974",
    title: "1974 FIFA World Cup",
    date: "13 June - 7 July",
    icon: iconWorldCup1974,
    background: [],
    hostCountry: ["Germany"],
    finalStage: [],
    qualification: [],
  },
  1978: {
    id: "world-cup.11.1978",
    title: "1978 FIFA World Cup",
    date: "1-25 June",
    icon: iconWorldCup1978,
    background: [],
    hostCountry: ["Argentina"],
    finalStage: [],
    qualification: [],
  },
  1982: {
    id: "world-cup.12.1982",
    title: "1982 FIFA World Cup",
    date: "13 June - 11 July",
    icon: iconWorldCup1982,
    background: [],
    hostCountry: ["Spain"],
    finalStage: [],
    qualification: [],
  },
  1986: {
    id: "world-cup.13.1986",
    title: "1986 FIFA World Cup",
    date: "31 May - 29 June",
    icon: iconWorldCup1986,
    background: [],
    hostCountry: ["Mexico"],
    finalStage: [],
    qualification: [],
  },
  1990: {
    id: "world-cup.14.1990",
    title: "1990 FIFA World Cup",
    date: "	8June - 8 July",
    icon: iconWorldCup1990,
    background: [],
    hostCountry: ["Italy"],
    finalStage: [],
    qualification: [],
  },
  1994: {
    id: "world-cup.15.1994",
    title: "1994 FIFA World Cup",
    date: "June 17 - July 17",
    icon: iconWorldCup1994,
    background: [],
    hostCountry: ["United States"],
    finalStage: [],
    qualification: [],
  },
  1998: {
    id: "world-cup.16.1998",
    title: "1998 FIFA World Cup",
    date: "10 June - 12 July",
    icon: iconWorldCup1998,
    background: [],
    hostCountry: ["France"],
    finalStage: [],
    qualification: [],
  },
  2002: {
    id: "world-cup.17.2002",
    title: "2002 FIFA World Cup",
    date: "31 May - 30 June",
    icon: iconWorldCup2002,
    background: [],
    hostCountry: ["Korea Republic", "Japan"],
    finalStage: [],
    qualification: [],
  },
  2006: {
    id: "world-cup.18.2006",
    title: "2006 FIFA World Cup",
    date: "9 June - 9 July",
    icon: iconWorldCup2006,
    background: [],
    hostCountry: ["Germany"],
    finalStage: [],
    qualification: [],
  },
  2010: {
    id: "world-cup.19.2010",
    title: "2010 FIFA World Cup",
    date: "11 June - 11 July",
    icon: iconWorldCup2010,
    background: [],
    hostCountry: ["South Africa"],
    finalStage: [],
    qualification: [],
  },
  2014: {
    id: "world-cup.20.2014",
    title: "2014 FIFA World Cup",
    date: "12 June - 13 July",
    icon: iconWorldCup2014,
    background: [],
    hostCountry: ["Brazil"],
    finalStage: [],
    qualification: [],
  },
  2018: {
    id: "world-cup.21.2018",
    title: "2018 FIFA World Cup",
    date: "14 June - 15 July",
    icon: iconWorldCup2018,
    background: [],
    hostCountry: ["Russia"],
    finalStage: [],
    qualification: [],
  },
  2022: {
    id: "world-cup.22.2022",
    title: "2022 FIFA World Cup",
    date: "20 November - 18 December",
    icon: iconWorldCup2022,
    background: [],
    hostCountry: ["Qatar"],
    finalStage: [],
    qualification: [],
  },
};
