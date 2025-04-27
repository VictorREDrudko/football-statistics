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
import { StadiumInfo, Stage, WorldCupData } from "./type-worldCupData";

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
import backgroundFWC1974_1 from "./../../assets/backgroundWC/1974-1.png";
import backgroundFWC1974_2 from "./../../assets/backgroundWC/1974-2.png";
import backgroundFWC1974_3 from "./../../assets/backgroundWC/1974-3.png";
import backgroundFWC1978_1 from "./../../assets/backgroundWC/1978-1.png";
import backgroundFWC1978_2 from "./../../assets/backgroundWC/1978-2.png";
import backgroundFWC1978_3 from "./../../assets/backgroundWC/1978-3.png";
import backgroundFWC1982_1 from "./../../assets/backgroundWC/1982-1.png";
import backgroundFWC1982_2 from "./../../assets/backgroundWC/1982-2.png";
import backgroundFWC1982_3 from "./../../assets/backgroundWC/1982-3.png";
import backgroundFWC1986_1 from "./../../assets/backgroundWC/1986-1.png";
import backgroundFWC1986_2 from "./../../assets/backgroundWC/1986-2.png";
import backgroundFWC1986_3 from "./../../assets/backgroundWC/1986-3.png";
import backgroundFWC1990_1 from "./../../assets/backgroundWC/1990-1.png";
import backgroundFWC1990_2 from "./../../assets/backgroundWC/1990-2.png";
import backgroundFWC1994_1 from "./../../assets/backgroundWC/1994-1.png";
import backgroundFWC1994_2 from "./../../assets/backgroundWC/1994-2.png";
import backgroundFWC1998_1 from "./../../assets/backgroundWC/1998-1.png";
import backgroundFWC1998_2 from "./../../assets/backgroundWC/1998-2.png";
import backgroundFWC2002_1 from "./../../assets/backgroundWC/2002-1.png";
import backgroundFWC2002_2 from "./../../assets/backgroundWC/2002-2.png";

import { stadiums } from "./stadiums";
import { v1 } from "uuid";

class Match {
  id: string;
  date: string;
  stage: string;
  teams: string[];
  score: number[][];
  goals: { playersScoredGoal: string[]; timeGoals: string[] }[];
  stadium: StadiumInfo;
  attendance!: string;

  constructor(
    date: string,
    stage: string,
    teams: string[],
    score: number[][],
    playersScoredGoal1: string[],
    timeGoals1: string[],
    playersScoredGoal2: string[],
    timeGoals2: string[],
    stadium: any,
    attendance: string
  ) {
    this.id = v1();
    this.date = date;
    this.stage = stage;
    this.teams = teams;
    this.score = score;
    this.goals = [
      { playersScoredGoal: playersScoredGoal1, timeGoals: timeGoals1 },
      { playersScoredGoal: playersScoredGoal2, timeGoals: timeGoals2 },
    ];
    this.stadium = {
      ...stadium,
      attendance: attendance,
    };
  }
}

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
    a: "group A",
    b: "group B",
    c: "group C",
    d: "group D",
    e: "group E",
    f: "group F",
    g: "group G",
    h: "group H",
    finalGroup: {
      group: "group Final round",
      groupFinal: "group Final round: final",
      groupPlace3: "group Final round: third place",
      a: "group A (second round)",
      b: "group B (second round)",
      c: "group C (second round)",
      d: "group D (second round)",
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
      new Match(
        "13.07.1930",
        stage.group[1],
        ["France", "Mexico"],
        [[4, 1], [], []],
        ["L. Laurent", "Langiller", "Maschinot"],
        ["19", "40", "43, 87"],
        ["Carreño"],
        ["80"],
        stadiums.Uruguay.pocitos,
        "4 444"
      ),
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
          ...stadiums.France.velodromeReims,
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
          ...stadiums.France.lescure,
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
          ...stadiums.France.lescure,
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
          ...stadiums.France.lescure,
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
    background: [backgroundFWC1962_2, backgroundFWC1962_1],
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
            timeGoals: ["21", "68", "72", "86"],
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
            timeGoals: ["54"],
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
            playersScoredGoal: [
              "Pak Seung-zin",
              "Li Dong-woon",
              "Yang Seung-kook",
            ],
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
            playersScoredGoal: [
              "Pelé",
              "Gérson",
              "Jairzinho",
              "Carlos Alberto",
            ],
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
    background: [backgroundFWC1974_2, backgroundFWC1974_1, backgroundFWC1974_3],
    hostCountry: ["Germany"],
    finalStage: [
      {
        id: v1(),
        date: "14.06.1974",
        stage: stage.group[1],
        teams: ["Germany", "Chile"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Breitner"],
            timeGoals: ["18"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.olympiaB,
          attendance: "81 100",
        },
      },
      {
        id: v1(),
        date: "14.06.1974",
        stage: stage.group[1],
        teams: ["East Germany", "Australia"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Curran", "Streich"],
            timeGoals: ["58(o.g.)", "72"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.volkspark,
          attendance: "17 000",
        },
      },
      {
        id: v1(),
        date: "18.06.1974",
        stage: stage.group[1],
        teams: ["Germany", "Australia"],
        score: [[3, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Overath", "Cullmann", "Müller"],
            timeGoals: ["12", "34", "53"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.volkspark,
          attendance: "53 000",
        },
      },
      {
        id: v1(),
        date: "18.06.1974",
        stage: stage.group[1],
        teams: ["East Germany", "Chile"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Hoffmann"],
            timeGoals: ["55"],
          },
          {
            playersScoredGoal: ["Ahumada"],
            timeGoals: ["69"],
          },
        ],
        stadium: {
          ...stadiums.Germany.olympiaB,
          attendance: "28 300",
        },
      },
      {
        id: v1(),
        date: "22.06.1974",
        stage: stage.group[1],
        teams: ["Australia", "Chile"],
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
          ...stadiums.Germany.volkspark,
          attendance: "17 400",
        },
      },
      {
        id: v1(),
        date: "22.06.1974",
        stage: stage.group[1],
        teams: ["East Germany", "Germany"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Sparwasser"],
            timeGoals: ["77"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.volkspark,
          attendance: "60 200",
        },
      },
      {
        id: v1(),
        date: "13.06.1974",
        stage: stage.group[2],
        teams: ["Brazil", "Yugoslavia"],
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
          ...stadiums.Germany.wald,
          attendance: "62 000",
        },
      },
      {
        id: v1(),
        date: "14.06.1974",
        stage: stage.group[2],
        teams: ["Scotland", "DR Congo"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Lorimer", "Jordan"],
            timeGoals: ["26", "34"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.westfalen,
          attendance: "25 800",
        },
      },
      {
        id: v1(),
        date: "18.06.1974",
        stage: stage.group[2],
        teams: ["Yugoslavia", "DR Congo"],
        score: [[9, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Lorimer", "Jordan"],
            timeGoals: ["8, 30, 81", "14", "18", "22", "35", "61", "65"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.parkGelsenk,
          attendance: "31 700",
        },
      },
      {
        id: v1(),
        date: "18.06.1974",
        stage: stage.group[2],
        teams: ["Scotland", "Brazil"],
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
          ...stadiums.Germany.wald,
          attendance: "62 000",
        },
      },
      {
        id: v1(),
        date: "22.06.1974",
        stage: stage.group[2],
        teams: ["Scotland", "Yugoslavia"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Jordan"],
            timeGoals: ["88"],
          },
          {
            playersScoredGoal: ["Karasi"],
            timeGoals: ["81"],
          },
        ],
        stadium: {
          ...stadiums.Germany.wald,
          attendance: "56 000",
        },
      },
      {
        id: v1(),
        date: "22.06.1974",
        stage: stage.group[2],
        teams: ["Brazil", "DR Congo"],
        score: [[3, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Jairzinho", "Rivellino", "Valdomiro"],
            timeGoals: ["12", "66", "79"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.parkGelsenk,
          attendance: "36 200",
        },
      },
      {
        id: v1(),
        date: "15.06.1974",
        stage: stage.group[3],
        teams: ["Netherlands", "Uruguay"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Rep"],
            timeGoals: ["7, 86"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.niedersachsen,
          attendance: "55 100",
        },
      },
      {
        id: v1(),
        date: "15.06.1974",
        stage: stage.group[3],
        teams: ["Sweden", "Bulgaria"],
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
          ...stadiums.Germany.rhein,
          attendance: "23 800",
        },
      },
      {
        id: v1(),
        date: "19.06.1974",
        stage: stage.group[3],
        teams: ["Bulgaria", "Uruguay"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Bonev"],
            timeGoals: ["75"],
          },
          {
            playersScoredGoal: ["Pavoni"],
            timeGoals: ["87"],
          },
        ],
        stadium: {
          ...stadiums.Germany.niedersachsen,
          attendance: "13 400",
        },
      },
      {
        id: v1(),
        date: "19.06.1974",
        stage: stage.group[3],
        teams: ["Netherlands", "Sweden"],
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
          ...stadiums.Germany.westfalen,
          attendance: "53 700",
        },
      },
      {
        id: v1(),
        date: "23.06.1974",
        stage: stage.group[3],
        teams: ["Netherlands", "Bulgaria"],
        score: [[4, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Neeskens", "Rep", "de Jong"],
            timeGoals: ["5(p), 44(p)", "71", "88"],
          },
          {
            playersScoredGoal: ["Krol"],
            timeGoals: ["78(o.g.)"],
          },
        ],
        stadium: {
          ...stadiums.Germany.westfalen,
          attendance: "53 300",
        },
      },
      {
        id: v1(),
        date: "23.06.1974",
        stage: stage.group[3],
        teams: ["Sweden", "Uruguay"],
        score: [[3, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Edström", "Sandberg"],
            timeGoals: ["46, 77", "74"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.rhein,
          attendance: "28 300",
        },
      },
      {
        id: v1(),
        date: "15.06.1974",
        stage: stage.group[4],
        teams: ["Italy", "Haiti"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Rivera", "Benetti", "Anastasi"],
            timeGoals: ["52", "66", "79"],
          },
          {
            playersScoredGoal: ["Sanon"],
            timeGoals: ["46"],
          },
        ],
        stadium: {
          ...stadiums.Germany.olympiaM,
          attendance: "53 000",
        },
      },
      {
        id: v1(),
        date: "15.06.1974",
        stage: stage.group[4],
        teams: ["Poland", "Argentina"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Lato", "Szarmach"],
            timeGoals: ["7, 62", "8"],
          },
          {
            playersScoredGoal: ["Heredia", "Babington"],
            timeGoals: ["60", "66"],
          },
        ],
        stadium: {
          ...stadiums.Germany.neckar,
          attendance: "32 700",
        },
      },
      {
        id: v1(),
        date: "19.06.1974",
        stage: stage.group[4],
        teams: ["Argentina", "Italy"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Houseman"],
            timeGoals: ["20"],
          },
          {
            playersScoredGoal: ["Perfumo"],
            timeGoals: ["35(o.g.)"],
          },
        ],
        stadium: {
          ...stadiums.Germany.neckar,
          attendance: "70 100",
        },
      },
      {
        id: v1(),
        date: "19.06.1974",
        stage: stage.group[4],
        teams: ["Poland", "Haiti"],
        score: [[7, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Lato", "Deyna", "Szarmach", "Gorgoń"],
            timeGoals: ["17, 87", "18", "30, 34, 50", "31"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.olympiaM,
          attendance: "25 300",
        },
      },
      {
        id: v1(),
        date: "23.06.1974",
        stage: stage.group[4],
        teams: ["Argentina", "Haiti"],
        score: [[4, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Yazalde", "Houseman", "Ayala"],
            timeGoals: ["15, 68", "18", "55"],
          },
          {
            playersScoredGoal: ["Sanon"],
            timeGoals: ["63"],
          },
        ],
        stadium: {
          ...stadiums.Germany.olympiaM,
          attendance: "25 900",
        },
      },
      {
        id: v1(),
        date: "23.06.1974",
        stage: stage.group[4],
        teams: ["Poland", "Italy"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Szarmach", "Deyna"],
            timeGoals: ["38", "44"],
          },
          {
            playersScoredGoal: ["Capello"],
            timeGoals: ["85"],
          },
        ],
        stadium: {
          ...stadiums.Germany.neckar,
          attendance: "70 100",
        },
      },
      {
        id: v1(),
        date: "26.06.1974",
        stage: stage.group.finalGroup.a,
        teams: ["Netherlands", "Argentina"],
        score: [[4, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Cruyff", "Krol", "Rep"],
            timeGoals: ["11, 90", "25", "73"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.parkGelsenk,
          attendance: "56 548",
        },
      },
      {
        id: v1(),
        date: "26.06.1974",
        stage: stage.group.finalGroup.a,
        teams: ["Brazil", "East Germany"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Rivellino"],
            timeGoals: ["60"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.niedersachsen,
          attendance: "59 863",
        },
      },
      {
        id: v1(),
        date: "30.06.1974",
        stage: stage.group.finalGroup.a,
        teams: ["Brazil", "Argentina"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Rivellino", "Jairzinho"],
            timeGoals: ["32", "49"],
          },
          {
            playersScoredGoal: ["Brindisi"],
            timeGoals: ["35"],
          },
        ],
        stadium: {
          ...stadiums.Germany.niedersachsen,
          attendance: "39 400",
        },
      },
      {
        id: v1(),
        date: "30.06.1974",
        stage: stage.group.finalGroup.a,
        teams: ["Netherlands", "East Germany"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Neeskens", "Rensenbrink"],
            timeGoals: ["7", "59"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.parkGelsenk,
          attendance: "68 348",
        },
      },
      {
        id: v1(),
        date: "03.07.1974",
        stage: stage.group.finalGroup.a,
        teams: ["Argentina", "East Germany"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Houseman"],
            timeGoals: ["20"],
          },
          {
            playersScoredGoal: ["Streich"],
            timeGoals: ["14"],
          },
        ],
        stadium: {
          ...stadiums.Germany.parkGelsenk,
          attendance: "54 254",
        },
      },
      {
        id: v1(),
        date: "03.07.1974",
        stage: stage.group.finalGroup.a,
        teams: ["Netherlands", "Brazil"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Neeskens", "Cruyff"],
            timeGoals: ["50", "65"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.westfalen,
          attendance: "53 700",
        },
      },
      {
        id: v1(),
        date: "26.06.1974",
        stage: stage.group.finalGroup.b,
        teams: ["Germany", "Yugoslavia"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Breitner", "Müller"],
            timeGoals: ["39", "82"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.rhein,
          attendance: "67 385",
        },
      },
      {
        id: v1(),
        date: "26.06.1974",
        stage: stage.group.finalGroup.b,
        teams: ["Poland", "Sweden"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Lato"],
            timeGoals: ["43"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.neckar,
          attendance: "44 955",
        },
      },
      {
        id: v1(),
        date: "30.06.1974",
        stage: stage.group.finalGroup.b,
        teams: ["Poland", "Yugoslavia"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Deyna", "Lato"],
            timeGoals: ["24(p)", "62"],
          },
          {
            playersScoredGoal: ["Karasi"],
            timeGoals: ["43"],
          },
        ],
        stadium: {
          ...stadiums.Germany.neckar,
          attendance: "58 000",
        },
      },
      {
        id: v1(),
        date: "30.06.1974",
        stage: stage.group.finalGroup.b,
        teams: ["Germany", "Sweden"],
        score: [[4, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Overath", "Bonhof", "Grabowski", "Hoeneß"],
            timeGoals: ["51", "52", "76", "89(p)"],
          },
          {
            playersScoredGoal: ["Edström", "Sandberg"],
            timeGoals: ["24", "53"],
          },
        ],
        stadium: {
          ...stadiums.Germany.rhein,
          attendance: "67 800",
        },
      },
      {
        id: v1(),
        date: "03.07.1974",
        stage: stage.group.finalGroup.b,
        teams: ["Germany", "Poland"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Müller"],
            timeGoals: ["76"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.wald,
          attendance: "62 000",
        },
      },
      {
        id: v1(),
        date: "03.07.1974",
        stage: stage.group.finalGroup.b,
        teams: ["Sweden", "Yugoslavia"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Edström", "Torstensson"],
            timeGoals: ["29", "85"],
          },
          {
            playersScoredGoal: ["Šurjak"],
            timeGoals: ["27"],
          },
        ],
        stadium: {
          ...stadiums.Germany.rhein,
          attendance: "41 300",
        },
      },
      {
        id: v1(),
        date: "06.07.1974",
        stage: stage.place3,
        teams: ["Poland", "Brazil"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Lato"],
            timeGoals: ["76"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Germany.olympiaM,
          attendance: "77 100",
        },
      },
      {
        id: v1(),
        date: "07.07.1974",
        stage: stage.final,
        teams: ["Germany", "Netherlands"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Breitner", "Müller"],
            timeGoals: ["25(p)", "43"],
          },
          {
            playersScoredGoal: ["Neeskens"],
            timeGoals: ["2(p)"],
          },
        ],
        stadium: {
          ...stadiums.Germany.olympiaM,
          attendance: "75 200",
        },
      },
    ],
    qualification: [],
  },
  1978: {
    id: "world-cup.11.1978",
    title: "1978 FIFA World Cup",
    date: "1-25 June",
    icon: iconWorldCup1978,
    background: [backgroundFWC1978_2, backgroundFWC1978_1, backgroundFWC1978_3],
    hostCountry: ["Argentina"],
    finalStage: [
      {
        id: v1(),
        date: "02.06.1978",
        stage: stage.group[1],
        teams: ["Italy", "France"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Rossi", "Zaccarelli"],
            timeGoals: ["29", "54"],
          },
          {
            playersScoredGoal: ["Lacombe"],
            timeGoals: ["1"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.worldCup,
          attendance: "38 100",
        },
      },
      {
        id: v1(),
        date: "02.06.1978",
        stage: stage.group[1],
        teams: ["Argentina", "Hungary"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Luque", "Bertoni"],
            timeGoals: ["14", "83"],
          },
          {
            playersScoredGoal: ["Csapó"],
            timeGoals: ["9"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.riverPlate,
          attendance: "71 615",
        },
      },
      {
        id: v1(),
        date: "06.06.1978",
        stage: stage.group[1],
        teams: ["Italy", "Hungary"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Rossi", "Bettega", "Benetti"],
            timeGoals: ["34", "35", "61"],
          },
          {
            playersScoredGoal: ["A.Tóth"],
            timeGoals: ["81(p)"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.worldCup,
          attendance: "26 533",
        },
      },
      {
        id: v1(),
        date: "06.06.1978",
        stage: stage.group[1],
        teams: ["Argentina", "France"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Passarella", "Luque"],
            timeGoals: ["45(p)", "73"],
          },
          {
            playersScoredGoal: ["Platini"],
            timeGoals: ["60"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.riverPlate,
          attendance: "71 666",
        },
      },
      {
        id: v1(),
        date: "10.06.1978",
        stage: stage.group[1],
        teams: ["France", "Hungary"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Lopez", "Berdoll", "Rocheteau"],
            timeGoals: ["23", "38", "42"],
          },
          {
            playersScoredGoal: ["Zombori"],
            timeGoals: ["41"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.worldCup,
          attendance: "23 127",
        },
      },
      {
        id: v1(),
        date: "10.06.1978",
        stage: stage.group[1],
        teams: ["Italy", "Argentina"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Bettega"],
            timeGoals: ["67"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Argentina.riverPlate,
          attendance: "71 712",
        },
      },
      {
        id: v1(),
        date: "01.06.1978",
        stage: stage.group[2],
        teams: ["Germany", "Poland"],
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
          ...stadiums.Argentina.riverPlate,
          attendance: "67 579",
        },
      },
      {
        id: v1(),
        date: "02.06.1978",
        stage: stage.group[2],
        teams: ["Tunisia", "Mexico"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Kaabi", "Ghommidh", "Dhouieb"],
            timeGoals: ["55", "79", "87"],
          },
          {
            playersScoredGoal: ["Vázquez Ayala"],
            timeGoals: ["45(p)"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.rosario,
          attendance: "17 396",
        },
      },
      {
        id: v1(),
        date: "06.06.1978",
        stage: stage.group[2],
        teams: ["Germany", "Mexico"],
        score: [[6, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["D.Müller", "H.Müller", "Rummenigge", "Flohe"],
            timeGoals: ["15", "30", "38, 73", "44, 89"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Argentina.olympic,
          attendance: "35 258",
        },
      },
      {
        id: v1(),
        date: "06.06.1978",
        stage: stage.group[2],
        teams: ["Poland", "Tunisia"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Lato"],
            timeGoals: ["43"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Argentina.rosario,
          attendance: "9 624",
        },
      },
      {
        id: v1(),
        date: "10.06.1978",
        stage: stage.group[2],
        teams: ["Germany", "Tunisia"],
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
          ...stadiums.Argentina.olympic,
          attendance: "30 667",
        },
      },
      {
        id: v1(),
        date: "10.06.1978",
        stage: stage.group[2],
        teams: ["Poland", "Mexico"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Boniek", "Deyna"],
            timeGoals: ["43, 84", "56"],
          },
          {
            playersScoredGoal: ["Rangel"],
            timeGoals: ["52"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.rosario,
          attendance: "22 651",
        },
      },
      {
        id: v1(),
        date: "03.06.1978",
        stage: stage.group[3],
        teams: ["Austria", "Spain"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Schachner", "Krankl"],
            timeGoals: ["10", "76"],
          },
          {
            playersScoredGoal: ["Dani"],
            timeGoals: ["21"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.amalfitani,
          attendance: "40 841",
        },
      },
      {
        id: v1(),
        date: "03.06.1978",
        stage: stage.group[3],
        teams: ["Brazil", "Sweden"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Reinaldo"],
            timeGoals: ["45"],
          },
          {
            playersScoredGoal: ["Sjöberg"],
            timeGoals: ["37"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.worldCup,
          attendance: "32 569",
        },
      },
      {
        id: v1(),
        date: "07.06.1978",
        stage: stage.group[3],
        teams: ["Austria", "Sweden"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Krankl"],
            timeGoals: ["42(p)"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Argentina.amalfitani,
          attendance: "41 424",
        },
      },
      {
        id: v1(),
        date: "07.06.1978",
        stage: stage.group[3],
        teams: ["Brazil", "Spain"],
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
          ...stadiums.Argentina.worldCup,
          attendance: "34 771",
        },
      },
      {
        id: v1(),
        date: "11.06.1978",
        stage: stage.group[3],
        teams: ["Spain", "Sweden"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Asensi"],
            timeGoals: ["75"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Argentina.amalfitani,
          attendance: "42 132",
        },
      },
      {
        id: v1(),
        date: "11.06.1978",
        stage: stage.group[3],
        teams: ["Brazil", "Spain"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Roberto Dinamite"],
            timeGoals: ["40"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Argentina.worldCup,
          attendance: "35 221",
        },
      },
      {
        id: v1(),
        date: "03.06.1978",
        stage: stage.group[4],
        teams: ["Peru", "Scotland"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Cueto", "Cubillas"],
            timeGoals: ["43", "71, 77"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Argentina.olympic,
          attendance: "37 927",
        },
      },
      {
        id: v1(),
        date: "03.06.1978",
        stage: stage.group[4],
        teams: ["Netherlands", "Iran"],
        score: [[3, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Rensenbrink"],
            timeGoals: ["40(p), 62, 78(p)"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Argentina.mendoza,
          attendance: "33 431",
        },
      },
      {
        id: v1(),
        date: "07.06.1978",
        stage: stage.group[4],
        teams: ["Scotland", "Iran"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Eskandarian"],
            timeGoals: ["43(o.g.)"],
          },
          {
            playersScoredGoal: ["Danaeifard"],
            timeGoals: ["60"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.olympic,
          attendance: "7 938",
        },
      },
      {
        id: v1(),
        date: "07.06.1978",
        stage: stage.group[4],
        teams: ["Netherlands", "Peru"],
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
          ...stadiums.Argentina.mendoza,
          attendance: "28 125",
        },
      },
      {
        id: v1(),
        date: "11.06.1978",
        stage: stage.group[4],
        teams: ["Peru", "Iran"],
        score: [[4, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Velásquez", "Cubillas"],
            timeGoals: ["2", "36(p), 39(p), 79"],
          },
          {
            playersScoredGoal: ["Rowshan"],
            timeGoals: ["41"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.olympic,
          attendance: "21 262",
        },
      },
      {
        id: v1(),
        date: "11.06.1978",
        stage: stage.group[4],
        teams: ["Scotland", "Netherlands"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Dalglish", "A.Gemmill"],
            timeGoals: ["45", "46(p), 68"],
          },
          {
            playersScoredGoal: ["Rensenbrink", "Rep"],
            timeGoals: ["34(p)", "71"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.mendoza,
          attendance: "35 130",
        },
      },
      {
        id: v1(),
        date: "14.06.1978",
        stage: stage.group.finalGroup.a,
        teams: ["Netherlands", "Austria"],
        score: [[5, 1], [], []],
        goals: [
          {
            playersScoredGoal: [
              "Brandts",
              "Rensenbrink",
              "Rep",
              "W. van de Kerkhof",
            ],
            timeGoals: ["6", "35(p)", "36, 53", "82"],
          },
          {
            playersScoredGoal: ["Obermayer"],
            timeGoals: ["80"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.olympic,
          attendance: "25 050",
        },
      },
      {
        id: v1(),
        date: "14.06.1978",
        stage: stage.group.finalGroup.a,
        teams: ["Italy", "Germany"],
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
          ...stadiums.Argentina.riverPlate,
          attendance: "67 547",
        },
      },
      {
        id: v1(),
        date: "18.06.1978",
        stage: stage.group.finalGroup.a,
        teams: ["Netherlands", "Germany"],
        score: [[2, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Haan", "R. van de Kerkhof"],
            timeGoals: ["27", "82"],
          },
          {
            playersScoredGoal: ["Abramczik", "D.Müller"],
            timeGoals: ["3", "70"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.olympic,
          attendance: "40 750",
        },
      },
      {
        id: v1(),
        date: "18.06.1978",
        stage: stage.group.finalGroup.a,
        teams: ["Italy", "Germany"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Rossi"],
            timeGoals: ["13"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Argentina.riverPlate,
          attendance: "66 695",
        },
      },
      {
        id: v1(),
        date: "21.06.1978",
        stage: stage.group.finalGroup.a,
        teams: ["Austria", "Germany"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Vogts", "Krankl"],
            timeGoals: ["59(o.g.)", "66, 87"],
          },
          {
            playersScoredGoal: ["Rummenigge", "Hölzenbein"],
            timeGoals: ["19", "68"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.olympic,
          attendance: "38 318",
        },
      },
      {
        id: v1(),
        date: "21.06.1978",
        stage: stage.group.finalGroup.a,
        teams: ["Netherlands", "Italy"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Brandts", "Haan"],
            timeGoals: ["49", "76"],
          },
          {
            playersScoredGoal: ["Brandts"],
            timeGoals: ["19(o.g.)"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.riverPlate,
          attendance: "67 433",
        },
      },
      {
        id: v1(),
        date: "14.06.1978",
        stage: stage.group.finalGroup.b,
        teams: ["Brazil", "Peru"],
        score: [[3, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Dirceu", "Zico"],
            timeGoals: ["15, 27", "72"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Argentina.mendoza,
          attendance: "31 278",
        },
      },
      {
        id: v1(),
        date: "14.06.1978",
        stage: stage.group.finalGroup.b,
        teams: ["Argentina", "Poland"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Kempes"],
            timeGoals: ["16, 71"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Argentina.rosario,
          attendance: "37 091",
        },
      },
      {
        id: v1(),
        date: "18.06.1978",
        stage: stage.group.finalGroup.b,
        teams: ["Poland", "Peru"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Szarmach"],
            timeGoals: ["65"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Argentina.mendoza,
          attendance: "35 288",
        },
      },
      {
        id: v1(),
        date: "18.06.1978",
        stage: stage.group.finalGroup.b,
        teams: ["Argentina", "Brazil"],
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
          ...stadiums.Argentina.rosario,
          attendance: "37 326",
        },
      },
      {
        id: v1(),
        date: "21.06.1978",
        stage: stage.group.finalGroup.b,
        teams: ["Brazil", "Poland"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Nelinho", "Roberto Dinamite"],
            timeGoals: ["13", "58, 63"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Argentina.mendoza,
          attendance: "39 586",
        },
      },
      {
        id: v1(),
        date: "21.06.1978",
        stage: stage.group.finalGroup.b,
        teams: ["Argentina", "Peru"],
        score: [[6, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Kempes", "Tarantini", "Luque", "Houseman"],
            timeGoals: ["21, 49", "43", "50, 72", "67"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Argentina.rosario,
          attendance: "37 315",
        },
      },
      {
        id: v1(),
        date: "24.06.1978",
        stage: stage.place3,
        teams: ["Brazil", "Italy"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Nelinho", "Dirceu"],
            timeGoals: ["64", "71"],
          },
          {
            playersScoredGoal: ["Causio"],
            timeGoals: ["38"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.riverPlate,
          attendance: "69 659",
        },
      },
      {
        id: v1(),
        date: "25.06.1978",
        stage: stage.final,
        teams: ["Argentina", "Netherlands"],
        score: [[1, 1], [2, 0], []],
        goals: [
          {
            playersScoredGoal: ["Kempes", "Bertoni"],
            timeGoals: ["38, 105", "115"],
          },
          {
            playersScoredGoal: ["Nanninga"],
            timeGoals: ["82"],
          },
        ],
        stadium: {
          ...stadiums.Argentina.riverPlate,
          attendance: "71 483",
        },
      },
    ],
    qualification: [],
  },
  1982: {
    id: "world-cup.12.1982",
    title: "1982 FIFA World Cup",
    date: "13 June - 11 July",
    icon: iconWorldCup1982,
    background: [backgroundFWC1982_2, backgroundFWC1982_1, backgroundFWC1982_3],
    hostCountry: ["Spain"],
    finalStage: [
      {
        id: v1(),
        date: "14.06.1982",
        stage: stage.group[1],
        teams: ["Italy", "Poland"],
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
          ...stadiums.Spain.balaidos,
          attendance: "33 040",
        },
      },
      {
        id: v1(),
        date: "15.06.1982",
        stage: stage.group[1],
        teams: ["Peru", "Cameroon"],
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
          ...stadiums.Spain.riazor,
          attendance: "11 000",
        },
      },
      {
        id: v1(),
        date: "18.06.1982",
        stage: stage.group[1],
        teams: ["Italy", "Peru"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Conti"],
            timeGoals: ["18"],
          },
          {
            playersScoredGoal: ["Díaz"],
            timeGoals: ["83"],
          },
        ],
        stadium: {
          ...stadiums.Spain.balaidos,
          attendance: "25 000",
        },
      },
      {
        id: v1(),
        date: "19.06.1982",
        stage: stage.group[1],
        teams: ["Poland", "Cameroon"],
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
          ...stadiums.Spain.riazor,
          attendance: "19 000",
        },
      },
      {
        id: v1(),
        date: "22.06.1982",
        stage: stage.group[1],
        teams: ["Poland", "Peru"],
        score: [[5, 1], [], []],
        goals: [
          {
            playersScoredGoal: [
              "Smolarek",
              "Lato",
              "Boniek",
              "Buncol",
              "Ciołek",
            ],
            timeGoals: ["55", "58", "61", "68", "76"],
          },
          {
            playersScoredGoal: ["La Rosa"],
            timeGoals: ["83"],
          },
        ],
        stadium: {
          ...stadiums.Spain.riazor,
          attendance: "25 000",
        },
      },
      {
        id: v1(),
        date: "23.06.1982",
        stage: stage.group[1],
        teams: ["Italy", "Cameroon"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Graziani"],
            timeGoals: ["60"],
          },
          {
            playersScoredGoal: ["M'Bida"],
            timeGoals: ["61"],
          },
        ],
        stadium: {
          ...stadiums.Spain.balaidos,
          attendance: "20 000",
        },
      },
      {
        id: v1(),
        date: "16.06.1982",
        stage: stage.group[2],
        teams: ["Algeria", "Germany"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Madjer", "Belloumi"],
            timeGoals: ["54", "68"],
          },
          {
            playersScoredGoal: ["Rummenigge"],
            timeGoals: ["67"],
          },
        ],
        stadium: {
          ...stadiums.Spain.molinon,
          attendance: "42 000",
        },
      },
      {
        id: v1(),
        date: "17.06.1982",
        stage: stage.group[2],
        teams: ["Austria", "Chile"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Schachner"],
            timeGoals: ["22"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Spain.tartiere,
          attendance: "22 500",
        },
      },
      {
        id: v1(),
        date: "20.06.1982",
        stage: stage.group[2],
        teams: ["Germany", "Chile"],
        score: [[4, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Rummenigge", "Reinders"],
            timeGoals: ["9, 57, 66", "83"],
          },
          {
            playersScoredGoal: ["Moscoso"],
            timeGoals: ["90"],
          },
        ],
        stadium: {
          ...stadiums.Spain.molinon,
          attendance: "42 000",
        },
      },
      {
        id: v1(),
        date: "21.06.1982",
        stage: stage.group[2],
        teams: ["Austria", "Algeria"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Schachner", "Krankl"],
            timeGoals: ["55", "67"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Spain.tartiere,
          attendance: "22 000",
        },
      },
      {
        id: v1(),
        date: "24.06.1982",
        stage: stage.group[2],
        teams: ["Algeria", "Chile"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Assad", "Bensaoula"],
            timeGoals: ["7, 31", "35"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Spain.tartiere,
          attendance: "16 000",
        },
      },
      {
        id: v1(),
        date: "25.06.1982",
        stage: stage.group[2],
        teams: ["Germany", "Austria"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Hrubesch"],
            timeGoals: ["10"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Spain.molinon,
          attendance: "41 000",
        },
      },
      {
        id: v1(),
        date: "13.06.1982",
        stage: stage.group[3],
        teams: ["Belgium", "Argentina"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Vandenbergh"],
            timeGoals: ["62"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Spain.nouCamp,
          attendance: "95 000",
        },
      },
      {
        id: v1(),
        date: "15.06.1982",
        stage: stage.group[3],
        teams: ["Hungary", "El Salvador"],
        score: [[10, 1], [], []],
        goals: [
          {
            playersScoredGoal: [
              "Nyilasi",
              "Pölöskei",
              "Fazekas",
              "Tóth",
              "L.Kiss",
              "Szentes",
            ],
            timeGoals: ["4, 83", "11", "23, 54", "50", "69, 72, 76", "70"],
          },
          {
            playersScoredGoal: ["Ramírez Zapata"],
            timeGoals: ["64"],
          },
        ],
        stadium: {
          ...stadiums.Spain.nuevo,
          attendance: "23 000",
        },
      },
      {
        id: v1(),
        date: "18.06.1982",
        stage: stage.group[3],
        teams: ["Argentina", "Hungary"],
        score: [[4, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Bertoni", "Maradona", "Ardiles"],
            timeGoals: ["26", "28, 57", "60"],
          },
          {
            playersScoredGoal: ["Pölöskei"],
            timeGoals: ["76"],
          },
        ],
        stadium: {
          ...stadiums.Spain.perez,
          attendance: "32 093",
        },
      },
      {
        id: v1(),
        date: "19.06.1982",
        stage: stage.group[3],
        teams: ["Belgium", "El Salvador"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Coeck"],
            timeGoals: ["19"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Spain.nuevo,
          attendance: "15 000",
        },
      },
      {
        id: v1(),
        date: "22.06.1982",
        stage: stage.group[3],
        teams: ["Belgium", "Hungary"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Czerniatynski"],
            timeGoals: ["76"],
          },
          {
            playersScoredGoal: ["Varga"],
            timeGoals: ["27"],
          },
        ],
        stadium: {
          ...stadiums.Spain.nuevo,
          attendance: "37 000",
        },
      },
      {
        id: v1(),
        date: "23.06.1982",
        stage: stage.group[3],
        teams: ["Argentina", "El Salvador"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Passarella", "Bertoni"],
            timeGoals: ["22(p)", "54"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Spain.perez,
          attendance: "32 500",
        },
      },
      {
        id: v1(),
        date: "16.06.1982",
        stage: stage.group[4],
        teams: ["England", "France"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Robson", "Mariner"],
            timeGoals: ["1, 67", "83"],
          },
          {
            playersScoredGoal: ["Soler"],
            timeGoals: ["24"],
          },
        ],
        stadium: {
          ...stadiums.Spain.mames,
          attendance: "44 172",
        },
      },
      {
        id: v1(),
        date: "17.06.1982",
        stage: stage.group[4],
        teams: ["Czechoslovakia", "Kuwait"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Panenka"],
            timeGoals: ["21(p)"],
          },
          {
            playersScoredGoal: ["Al-Dakhil"],
            timeGoals: ["57"],
          },
        ],
        stadium: {
          ...stadiums.Spain.zorrilla,
          attendance: "25 000",
        },
      },
      {
        id: v1(),
        date: "20.06.1982",
        stage: stage.group[4],
        teams: ["England", "Czechoslovakia"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Francis", "Barmoš"],
            timeGoals: ["62", "66(o.g.)"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Spain.mames,
          attendance: "41 123",
        },
      },
      {
        id: v1(),
        date: "21.06.1982",
        stage: stage.group[4],
        teams: ["France", "Kuwait"],
        score: [[4, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Genghini", "Platini", "Six", "Bossis"],
            timeGoals: ["31", "43", "48", "89"],
          },
          {
            playersScoredGoal: ["Al-Buloushi"],
            timeGoals: ["75"],
          },
        ],
        stadium: {
          ...stadiums.Spain.zorrilla,
          attendance: "30 043",
        },
      },
      {
        id: v1(),
        date: "24.06.1982",
        stage: stage.group[4],
        teams: ["France", "Czechoslovakia"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Six"],
            timeGoals: ["66"],
          },
          {
            playersScoredGoal: ["Panenka"],
            timeGoals: ["84(p)"],
          },
        ],
        stadium: {
          ...stadiums.Spain.zorrilla,
          attendance: "28 000",
        },
      },
      {
        id: v1(),
        date: "25.06.1982",
        stage: stage.group[4],
        teams: ["England", "Kuwait"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Francis"],
            timeGoals: ["27"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Spain.mames,
          attendance: "39 700",
        },
      },
      {
        id: v1(),
        date: "16.06.1982",
        stage: stage.group[5],
        teams: ["Spain", "Honduras"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["López Ufarte"],
            timeGoals: ["65(p)"],
          },
          {
            playersScoredGoal: ["Zelaya"],
            timeGoals: ["8"],
          },
        ],
        stadium: {
          ...stadiums.Spain.casanova,
          attendance: "49 562",
        },
      },
      {
        id: v1(),
        date: "17.06.1982",
        stage: stage.group[5],
        teams: ["Yugoslavia", "North. Ireland"],
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
          ...stadiums.Spain.romareda,
          attendance: "25 000",
        },
      },
      {
        id: v1(),
        date: "20.06.1982",
        stage: stage.group[5],
        teams: ["Spain", "Yugoslavia"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Juanito", "Saura"],
            timeGoals: ["14(p)", "66"],
          },
          {
            playersScoredGoal: ["Gudelj"],
            timeGoals: ["10"],
          },
        ],
        stadium: {
          ...stadiums.Spain.casanova,
          attendance: "48 000",
        },
      },
      {
        id: v1(),
        date: "21.06.1982",
        stage: stage.group[5],
        teams: ["North. Ireland", "Honduras"],
        score: [[1, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Armstrong"],
            timeGoals: ["10"],
          },
          {
            playersScoredGoal: ["Laing"],
            timeGoals: ["60"],
          },
        ],
        stadium: {
          ...stadiums.Spain.romareda,
          attendance: "15 000",
        },
      },
      {
        id: v1(),
        date: "24.06.1982",
        stage: stage.group[5],
        teams: ["Yugoslavia", "Honduras"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Petrović"],
            timeGoals: ["88(p)"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Spain.romareda,
          attendance: "25 000",
        },
      },
      {
        id: v1(),
        date: "25.06.1982",
        stage: stage.group[5],
        teams: ["North. Ireland", "Spain"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Armstrong"],
            timeGoals: ["47"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Spain.casanova,
          attendance: "49 562",
        },
      },
      {
        id: v1(),
        date: "14.06.1982",
        stage: stage.group[6],
        teams: ["Brazil", "Soviet Union"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Sócrates", "Éder"],
            timeGoals: ["75", "88"],
          },
          {
            playersScoredGoal: ["Bal"],
            timeGoals: ["34"],
          },
        ],
        stadium: {
          ...stadiums.Spain.pizjuan,
          attendance: "68 000",
        },
      },
      {
        id: v1(),
        date: "15.06.1982",
        stage: stage.group[6],
        teams: ["Scotland", "New Zealand"],
        score: [[5, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Dalglish", "Wark", "Robertson", "Archibald"],
            timeGoals: ["18", "29, 32", "73", "79"],
          },
          {
            playersScoredGoal: ["Sumner", "Wooddin"],
            timeGoals: ["54", "64"],
          },
        ],
        stadium: {
          ...stadiums.Spain.rosaleda,
          attendance: "36 000",
        },
      },
      {
        id: v1(),
        date: "18.06.1982",
        stage: stage.group[6],
        teams: ["Brazil", "Scotland"],
        score: [[4, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Zico", "Oscar", "Éder", "Falcão"],
            timeGoals: ["33", "48", "63", "87"],
          },
          {
            playersScoredGoal: ["Narey"],
            timeGoals: ["18"],
          },
        ],
        stadium: {
          ...stadiums.Spain.villamarin,
          attendance: "47 379",
        },
      },
      {
        id: v1(),
        date: "19.06.1982",
        stage: stage.group[6],
        teams: ["Soviet Union", "New Zealand"],
        score: [[3, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Gavrilov", "Blokhin", "Baltacha"],
            timeGoals: ["24", "48", "68"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Spain.rosaleda,
          attendance: "19 000",
        },
      },
      {
        id: v1(),
        date: "22.06.1982",
        stage: stage.group[6],
        teams: ["Soviet Union", "Scotland"],
        score: [[2, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Chivadze", "Shengelia"],
            timeGoals: ["59", "84"],
          },
          {
            playersScoredGoal: ["Jordan", "Souness"],
            timeGoals: ["15", "86"],
          },
        ],
        stadium: {
          ...stadiums.Spain.rosaleda,
          attendance: "45 000",
        },
      },
      {
        id: v1(),
        date: "23.06.1982",
        stage: stage.group[6],
        teams: ["Brazil", "New Zealand"],
        score: [[4, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Zico", "Falcão", "Serginho"],
            timeGoals: ["28, 31", "64", "70"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Spain.villamarin,
          attendance: "43 000",
        },
      },
      {
        id: v1(),
        date: "28.06.1982",
        stage: stage.group.finalGroup.a,
        teams: ["Poland", "Belgium"],
        score: [[3, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Boniek"],
            timeGoals: ["4, 26, 53"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Spain.nouCamp,
          attendance: "65 000",
        },
      },
      {
        id: v1(),
        date: "01.07.1982",
        stage: stage.group.finalGroup.a,
        teams: ["Soviet Union", "Belgium"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Oganesian"],
            timeGoals: ["48"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Spain.nouCamp,
          attendance: "45 000",
        },
      },
      {
        id: v1(),
        date: "04.07.1982",
        stage: stage.group.finalGroup.a,
        teams: ["Soviet Union", "Poland"],
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
          ...stadiums.Spain.nouCamp,
          attendance: "65 000",
        },
      },
      {
        id: v1(),
        date: "29.06.1982",
        stage: stage.group.finalGroup.b,
        teams: ["Germany", "England"],
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
          ...stadiums.Spain.bernabeu,
          attendance: "75 000",
        },
      },
      {
        id: v1(),
        date: "02.07.1982",
        stage: stage.group.finalGroup.b,
        teams: ["Germany", "Spain"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Littbarski", "Fischer"],
            timeGoals: ["50", "75"],
          },
          {
            playersScoredGoal: ["Zamora"],
            timeGoals: ["82"],
          },
        ],
        stadium: {
          ...stadiums.Spain.bernabeu,
          attendance: "90 089",
        },
      },
      {
        id: v1(),
        date: "05.07.1982",
        stage: stage.group.finalGroup.b,
        teams: ["Spain", "England"],
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
          ...stadiums.Spain.bernabeu,
          attendance: "75 000",
        },
      },
      {
        id: v1(),
        date: "29.06.1982",
        stage: stage.group.finalGroup.c,
        teams: ["Italy", "Argentina"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Tardelli", "Cabrini"],
            timeGoals: ["57", "67"],
          },
          {
            playersScoredGoal: ["Passarella"],
            timeGoals: ["83"],
          },
        ],
        stadium: {
          ...stadiums.Spain.sarria,
          attendance: "43 000",
        },
      },
      {
        id: v1(),
        date: "02.07.1982",
        stage: stage.group.finalGroup.c,
        teams: ["Brazil", "Argentina"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Zico", "Serginho", "Júnior"],
            timeGoals: ["11", "66", "75"],
          },
          {
            playersScoredGoal: ["Díaz"],
            timeGoals: ["89"],
          },
        ],
        stadium: {
          ...stadiums.Spain.sarria,
          attendance: "44 000",
        },
      },
      {
        id: v1(),
        date: "05.07.1982",
        stage: stage.group.finalGroup.c,
        teams: ["Italy", "Brazil"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Rossi"],
            timeGoals: ["5, 24, 74"],
          },
          {
            playersScoredGoal: ["Sócrates", "Falcão"],
            timeGoals: ["12", "68"],
          },
        ],
        stadium: {
          ...stadiums.Spain.sarria,
          attendance: "44 000",
        },
      },
      {
        id: v1(),
        date: "28.06.1982",
        stage: stage.group.finalGroup.d,
        teams: ["France", "Austria"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Genghini"],
            timeGoals: ["39"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Spain.calderon,
          attendance: "37 000",
        },
      },
      {
        id: v1(),
        date: "01.07.1982",
        stage: stage.group.finalGroup.d,
        teams: ["Austria", "North. Ireland"],
        score: [[2, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Pezzey", "Hintermaier"],
            timeGoals: ["50", "68"],
          },
          {
            playersScoredGoal: ["Hamilton"],
            timeGoals: ["27, 75"],
          },
        ],
        stadium: {
          ...stadiums.Spain.calderon,
          attendance: "20 000",
        },
      },
      {
        id: v1(),
        date: "04.07.1982",
        stage: stage.group.finalGroup.d,
        teams: ["France", "North. Ireland"],
        score: [[4, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Giresse"],
            timeGoals: ["33, 80", "46, 68"],
          },
          {
            playersScoredGoal: ["Armstrong"],
            timeGoals: ["75"],
          },
        ],
        stadium: {
          ...stadiums.Spain.calderon,
          attendance: "37 000",
        },
      },
      {
        id: v1(),
        date: "08.07.1982",
        stage: stage[1_2],
        teams: ["Italy", "Poland"],
        score: [[2, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Rossi"],
            timeGoals: ["22, 73"],
          },
          {
            playersScoredGoal: [],
            timeGoals: [],
          },
        ],
        stadium: {
          ...stadiums.Spain.nouCamp,
          attendance: "50 000",
        },
      },
      {
        id: v1(),
        date: "08.07.1982",
        stage: stage[1_2],
        teams: ["Germany", "France"],
        score: [
          [1, 1],
          [2, 2],
          [5, 4],
        ],
        goals: [
          {
            playersScoredGoal: ["Littbarski", "Rummenigge", "Fischer"],
            timeGoals: ["17", "102", "108"],
          },
          {
            playersScoredGoal: ["Platini", "Trésor", "Giresse"],
            timeGoals: ["26(p)", "92", "98"],
          },
        ],
        stadium: {
          ...stadiums.Spain.pizjuan,
          attendance: "70 000",
        },
      },
      {
        id: v1(),
        date: "10.07.1982",
        stage: stage.place3,
        teams: ["Poland", "France"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Szarmach", "Majewski", "Kupcewicz"],
            timeGoals: ["40", "44", "46"],
          },
          {
            playersScoredGoal: ["Girard", "Couriol"],
            timeGoals: ["13", "72"],
          },
        ],
        stadium: {
          ...stadiums.Spain.perez,
          attendance: "28 000",
        },
      },
      {
        id: v1(),
        date: "11.07.1982",
        stage: stage.final,
        teams: ["Italy", "Germany"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Rossi", "Tardelli", "Altobelli"],
            timeGoals: ["57", "69", "81"],
          },
          {
            playersScoredGoal: ["Breitner"],
            timeGoals: ["83"],
          },
        ],
        stadium: {
          ...stadiums.Spain.bernabeu,
          attendance: "90 000",
        },
      },
    ],
    qualification: [],
  },
  1986: {
    id: "world-cup.13.1986",
    title: "1986 FIFA World Cup",
    date: "31 May - 29 June",
    icon: iconWorldCup1986,
    background: [backgroundFWC1986_1, backgroundFWC1986_2, backgroundFWC1986_3],
    hostCountry: ["Mexico"],
    finalStage: [
      new Match(
        "31.05.1986",
        stage.group.a,
        ["Bulgaria", "Italy"],
        [[1, 1], [], []],
        ["Sirakov"],
        ["85"],
        ["Altobelli"],
        ["44"],
        stadiums.Mexico.azteca,
        "96 000"
      ),
      new Match(
        "02.06.1986",
        stage.group.a,
        ["Argentina", "Korea Republic"],
        [[3, 1], [], []],
        ["Valdano", "Ruggeri"],
        ["6, 46", "18"],
        ["Park Chang-Sun"],
        ["73"],
        stadiums.Mexico.olimpico,
        "60 000"
      ),
      new Match(
        "05.06.1986",
        stage.group.a,
        ["Argentina", "Italy"],
        [[1, 1], [], []],
        ["Maradona"],
        ["34"],
        ["Altobelli"],
        ["6(p)"],
        stadiums.Mexico.cuauhtemoc,
        "32 000"
      ),
      new Match(
        "05.06.1986",
        stage.group.a,
        ["Korea Republic", "Bulgaria"],
        [[1, 1], [], []],
        ["Kim Jong-Boo"],
        ["70"],
        ["Getov"],
        ["11"],
        stadiums.Mexico.olimpico,
        "45 000"
      ),
      new Match(
        "10.06.1986",
        stage.group.a,
        ["Italy", "Korea Republic"],
        [[3, 2], [], []],
        ["Altobelli", "Cho Kwang-Rae"],
        ["17, 73", "82(o.g.)"],
        ["Choi Soon-Ho", "Huh Jung-Moo"],
        ["62", "89"],
        stadiums.Mexico.cuauhtemoc,
        "20 000"
      ),
      new Match(
        "10.06.1986",
        stage.group.a,
        ["Argentina", "Bulgaria"],
        [[2, 0], [], []],
        ["Valdano", "Burruchaga"],
        ["4", "77"],
        [],
        [],
        stadiums.Mexico.olimpico,
        "65 000"
      ),
      new Match(
        "03.06.1986",
        stage.group.b,
        ["Mexico", "Belgium"],
        [[2, 1], [], []],
        ["Quirarte", "Sánchez"],
        ["23", "39"],
        ["Vandenbergh"],
        ["45"],
        stadiums.Mexico.azteca,
        "110 000"
      ),
      new Match(
        "04.06.1986",
        stage.group.b,
        ["Paraguay", "Iraq"],
        [[1, 0], [], []],
        ["Romero"],
        ["35"],
        [],
        [],
        stadiums.Mexico.dosal,
        "24 000"
      ),
      new Match(
        "07.06.1986",
        stage.group.b,
        ["Mexico", "Paraguay"],
        [[1, 1], [], []],
        ["Flores"],
        ["3"],
        ["Romero"],
        ["85"],
        stadiums.Mexico.azteca,
        "114 600"
      ),
      new Match(
        "08.06.1986",
        stage.group.b,
        ["Belgium", "Iraq"],
        [[2, 1], [], []],
        ["Scifo", "Claesen"],
        ["16", "21(p)"],
        ["Radhi"],
        ["59"],
        stadiums.Mexico.dosal,
        "20 000"
      ),
      new Match(
        "11.06.1986",
        stage.group.b,
        ["Paraguay", "Belgium"],
        [[2, 2], [], []],
        ["Cabañas"],
        ["50", "76"],
        ["Vercauteren", "Veyt"],
        ["30", "59"],
        stadiums.Mexico.dosal,
        "16 000"
      ),
      new Match(
        "11.06.1986",
        stage.group.b,
        ["Mexico", "Iraq"],
        [[1, 0], [], []],
        ["Quirarte"],
        ["54"],
        [],
        [],
        stadiums.Mexico.azteca,
        "103 763"
      ),
      new Match(
        "01.06.1986",
        stage.group.c,
        ["France", "Canada"],
        [[1, 0], [], []],
        ["Papin"],
        ["79"],
        [],
        [],
        stadiums.Mexico.nouCamp,
        "36 000"
      ),
      new Match(
        "02.06.1986",
        stage.group.c,
        ["Soviet Union", "Hungary"],
        [[6, 0], [], []],
        ["Yakovenko", "Aleinikov", "Belanov", "Yaremchuk", "Dajka", "Rodionov"],
        ["2", "4", "24(p)", "66", "73(o.g.)", "80"],
        [],
        [],
        stadiums.Mexico.chavez,
        "16 500"
      ),
      new Match(
        "05.06.1986",
        stage.group.c,
        ["France", "Soviet Union"],
        [[1, 1], [], []],
        ["Fernández"],
        ["62"],
        ["Rats"],
        ["53"],
        stadiums.Mexico.nouCamp,
        "36 540"
      ),
      new Match(
        "06.06.1986",
        stage.group.c,
        ["Hungary", "Canada"],
        [[2, 0], [], []],
        ["Esterházy", "Détári"],
        ["2", "75"],
        [],
        [],
        stadiums.Mexico.chavez,
        "13 800"
      ),
      new Match(
        "09.06.1986",
        stage.group.c,
        ["France", "Hungary"],
        [[3, 0], [], []],
        ["Stopyra", "Tigana", "Rocheteau"],
        ["29", "62", "84"],
        [],
        [],
        stadiums.Mexico.nouCamp,
        "31 420"
      ),
      new Match(
        "09.06.1986",
        stage.group.c,
        ["Soviet Union", "Canada"],
        [[2, 0], [], []],
        ["Blokhin", "Zavarov"],
        ["58", "74"],
        [],
        [],
        stadiums.Mexico.chavez,
        "14 200"
      ),
      new Match(
        "01.06.1986",
        stage.group.d,
        ["Brazil", "Spain"],
        [[1, 0], [], []],
        ["Sócrates"],
        ["62"],
        [],
        [],
        stadiums.Mexico.jalisco,
        "35 748"
      ),
      new Match(
        "03.06.1986",
        stage.group.d,
        ["Algeria", "North. Ireland"],
        [[1, 1], [], []],
        ["D.Zidane"],
        ["59"],
        ["Whiteside"],
        ["6"],
        stadiums.Mexico.marzo,
        "22 000"
      ),
      new Match(
        "06.06.1986",
        stage.group.d,
        ["Brazil", "Algeria"],
        [[1, 0], [], []],
        ["Careca"],
        ["66"],
        [],
        [],
        stadiums.Mexico.jalisco,
        "48 000"
      ),
      new Match(
        "07.06.1986",
        stage.group.d,
        ["Spain", "North. Ireland"],
        [[2, 1], [], []],
        ["Butragueño", "Salinas"],
        ["1", "18"],
        ["Clarke"],
        ["46"],
        stadiums.Mexico.marzo,
        "28 000"
      ),
      new Match(
        "12.06.1986",
        stage.group.d,
        ["Brazil", "North. Ireland"],
        [[3, 0], [], []],
        ["Careca", "Josimar"],
        ["15, 87", "42"],
        [],
        [],
        stadiums.Mexico.jalisco,
        "51 000"
      ),
      new Match(
        "12.06.1986",
        stage.group.d,
        ["Spain", "Algeria"],
        [[3, 0], [], []],
        ["Calderé", "Eloy"],
        ["15, 68", "70"],
        [],
        [],
        stadiums.Mexico.tecnologico,
        "23 980"
      ),
      new Match(
        "04.06.1986",
        stage.group.e,
        ["Uruguay", "Germany"],
        [[1, 1], [], []],
        ["Alzamendi"],
        ["4"],
        ["Allofs"],
        ["84"],
        stadiums.Mexico.corregidora,
        "30 500"
      ),
      new Match(
        "04.06.1986",
        stage.group.e,
        ["Denmark", "Scotland"],
        [[1, 0], [], []],
        ["Elkjær"],
        ["57"],
        [],
        [],
        stadiums.Mexico.neza86,
        "18 000"
      ),
      new Match(
        "08.06.1986",
        stage.group.e,
        ["Germany", "Scotland"],
        [[2, 1], [], []],
        ["Völler", "Allofs"],
        ["23", "49"],
        ["Strachan"],
        ["18"],
        stadiums.Mexico.corregidora,
        "30 000"
      ),
      new Match(
        "08.06.1986",
        stage.group.e,
        ["Denmark", "Uruguay"],
        [[6, 1], [], []],
        ["Elkjær", "Lerby", "Laudrup", "J.Olsen"],
        ["11, 76, 80", "41", "52", "88"],
        ["Francescoli"],
        ["45(p)"],
        stadiums.Mexico.neza86,
        "26 500"
      ),
      new Match(
        "13.06.1986",
        stage.group.e,
        ["Denmark", "Germany"],
        [[2, 0], [], []],
        ["J.Olsen", "Eriksen"],
        ["43(p)", "62"],
        [],
        [],
        stadiums.Mexico.corregidora,
        "36 000"
      ),
      new Match(
        "13.06.1986",
        stage.group.e,
        ["Scotland", "Uruguay"],
        [[0, 0], [], []],
        [],
        [],
        [],
        [],
        stadiums.Mexico.neza86,
        "20 000"
      ),
      new Match(
        "02.06.1986",
        stage.group.f,
        ["Morocco", "Poland"],
        [[0, 0], [], []],
        [],
        [],
        [],
        [],
        stadiums.Mexico.universitario,
        "19 900"
      ),
      new Match(
        "03.06.1986",
        stage.group.f,
        ["Portugal", "England"],
        [[1, 0], [], []],
        ["Carlos Manuel"],
        ["75"],
        [],
        [],
        stadiums.Mexico.tecnologico,
        "23 000"
      ),
      new Match(
        "06.06.1986",
        stage.group.f,
        ["Morocco", "England"],
        [[0, 0], [], []],
        [],
        [],
        [],
        [],
        stadiums.Mexico.tecnologico,
        "20 200"
      ),
      new Match(
        "07.06.1986",
        stage.group.f,
        ["Poland", "Portugal"],
        [[1, 0], [], []],
        ["Smolarek"],
        ["68"],
        [],
        [],
        stadiums.Mexico.universitario,
        "19 915"
      ),
      new Match(
        "11.06.1986",
        stage.group.f,
        ["England", "Poland"],
        [[3, 0], [], []],
        ["Lineker"],
        ["8, 14, 36"],
        [],
        [],
        stadiums.Mexico.universitario,
        "22 700"
      ),
      new Match(
        "11.06.1986",
        stage.group.f,
        ["Morocco", "Portugal"],
        [[3, 1], [], []],
        ["Khairi", "A.Merry"],
        ["19, 27", "62"],
        ["Diamantino"],
        ["80"],
        stadiums.Mexico.marzo,
        "28 000"
      ),
      new Match(
        "15.06.1986",
        stage[1_8],
        ["Mexico", "Bulgaria"],
        [[2, 0], [], []],
        ["Negrete", "Servín"],
        ["34", "61"],
        [],
        [],
        stadiums.Mexico.azteca,
        "114 580"
      ),
      new Match(
        "15.06.1986",
        stage[1_8],
        ["Belgium", "Soviet Union"],
        [[2, 2], [2, 1], []],
        ["Scifo", "Ceulemans", "Demol", "Claesen"],
        ["56", "77", "102", "110"],
        ["Belanov"],
        ["27, 70, 111(p)"],
        stadiums.Mexico.nouCamp,
        "32 277"
      ),
      new Match(
        "16.06.1986",
        stage[1_8],
        ["Brazil", "Poland"],
        [[4, 0], [], []],
        ["Sócrates", "Josimar", "Edinho", "Careca"],
        ["30(p)", "55", "79", "83(p)"],
        [],
        [],
        stadiums.Mexico.jalisco,
        "45 000"
      ),
      new Match(
        "16.06.1986",
        stage[1_8],
        ["Argentina", "Uruguay"],
        [[1, 0], [], []],
        ["Pasculli"],
        ["42"],
        [],
        [],
        stadiums.Mexico.cuauhtemoc,
        "26 000"
      ),
      new Match(
        "17.06.1986",
        stage[1_8],
        ["France", "Italy"],
        [[2, 0], [], []],
        ["Platini", "Stopyra"],
        ["15", "57"],
        [],
        [],
        stadiums.Mexico.olimpico,
        "70 000"
      ),
      new Match(
        "17.06.1986",
        stage[1_8],
        ["Germany", "Morocco"],
        [[1, 0], [], []],
        ["Matthäus"],
        ["88"],
        [],
        [],
        stadiums.Mexico.universitario,
        "19 800"
      ),
      new Match(
        "18.06.1986",
        stage[1_8],
        ["England", "Paraguay"],
        [[3, 0], [], []],
        ["Lineker", "Beardsley"],
        ["31, 73", "56"],
        [],
        [],
        stadiums.Mexico.azteca,
        "98 728"
      ),
      new Match(
        "18.06.1986",
        stage[1_8],
        ["Spain", "Denmark"],
        [[5, 1], [], []],
        ["Butragueño", "Goikoetxea"],
        ["43, 56, 80, 88(p)", "68(p)"],
        ["J.Olsen"],
        ["33(p)"],
        stadiums.Mexico.corregidora,
        "38 500"
      ),
      new Match(
        "21.06.1986",
        stage[1_4],
        ["France", "Brazil"],
        [
          [1, 1],
          [0, 0],
          [4, 3],
        ],
        ["Platini"],
        ["40"],
        ["Careca"],
        ["17"],
        stadiums.Mexico.jalisco,
        "65 000"
      ),
      new Match(
        "21.06.1986",
        stage[1_4],
        ["Germany", "Mexico"],
        [
          [0, 0],
          [0, 0],
          [4, 1],
        ],
        [],
        [],
        [],
        [],
        stadiums.Mexico.universitario,
        "41 700"
      ),
      new Match(
        "22.06.1986",
        stage[1_4],
        ["Argentina", "England"],
        [[2, 1], [], []],
        ["Maradona"],
        ["51, 55"],
        ["Lineker"],
        ["81"],
        stadiums.Mexico.azteca,
        "114 580"
      ),
      new Match(
        "22.06.1986",
        stage[1_4],
        ["Belgium", "Spain"],
        [
          [1, 1],
          [0, 0],
          [5, 4],
        ],
        ["Ceulemans"],
        ["35"],
        ["Señor"],
        ["85"],
        stadiums.Mexico.cuauhtemoc,
        "45 000"
      ),
      new Match(
        "25.06.1986",
        stage[1_2],
        ["Germany", "France"],
        [[2, 0], [], []],
        ["Brehme", "Völler"],
        ["9", "89"],
        [],
        [],
        stadiums.Mexico.jalisco,
        "45 000"
      ),
      new Match(
        "25.06.1986",
        stage[1_2],
        ["Argentina", "Belgium"],
        [[2, 0], [], []],
        ["Maradona"],
        ["51, 63"],
        [],
        [],
        stadiums.Mexico.azteca,
        "114 500"
      ),
      new Match(
        "28.06.1986",
        stage.place3,
        ["France", "Belgium"],
        [[2, 2], [2, 0], []],
        ["Ferreri", "Papin", "Genghini", "Amoros"],
        ["27", "43", "104", "111(p)"],
        ["Ceulemans", "Claesen"],
        ["11", "73"],
        stadiums.Mexico.cuauhtemoc,
        "21 000"
      ),
      new Match(
        "29.06.1986",
        stage.final,
        ["Argentina", "Germany"],
        [[3, 2], [], []],
        ["Brown", "Valdano", "Burruchaga"],
        ["23", "55", "83"],
        ["Rummenigge", "Völler"],
        ["74", "80"],
        stadiums.Mexico.azteca,
        "114 600"
      ),
    ],
    qualification: [],
  },
  1990: {
    id: "world-cup.14.1990",
    title: "1990 FIFA World Cup",
    date: "	8June - 8 July",
    icon: iconWorldCup1990,
    background: [backgroundFWC1990_1, backgroundFWC1990_2],
    hostCountry: ["Italy"],
    finalStage: [
      new Match(
        "09.06.1990",
        stage.group.a,
        ["Italy", "Austria"],
        [[1, 0], [], []],
        ["S.Schillaci"],
        ["78"],
        [],
        [],
        stadiums.Italy.olimpico,
        "73 303"
      ),
      new Match(
        "10.06.1990",
        stage.group.a,
        ["Czechoslovakia", "United States"],
        [[5, 1], [], []],
        ["T.Skuhravy", "M.Bílek", "I.Hašek", "M.Luhovy"],
        ["25, 78", "39", "50", "90"],
        ["P.Caligiuri"],
        ["61"],
        stadiums.Italy.comunale,
        "33 266"
      ),
      new Match(
        "14.06.1990",
        stage.group.a,
        ["Italy", "United States"],
        [[1, 0], [], []],
        ["G.Giannini"],
        ["11"],
        [],
        [],
        stadiums.Italy.olimpico,
        "73 423"
      ),
      new Match(
        "15.06.1990",
        stage.group.a,
        ["Czechoslovakia", "Austria"],
        [[1, 0], [], []],
        ["M.Bílek"],
        ["30"],
        [],
        [],
        stadiums.Italy.comunale,
        "38 962"
      ),
      new Match(
        "19.06.1990",
        stage.group.a,
        ["Italy", "Czechoslovakia"],
        [[2, 0], [], []],
        ["S.Schillaci", "R.Baggio"],
        ["10", "78"],
        [],
        [],
        stadiums.Italy.olimpico,
        "73 303"
      ),
      new Match(
        "19.06.1990",
        stage.group.a,
        ["Austria", "United States"],
        [[2, 1], [], []],
        ["A.Ogris", "G.Rodax"],
        ["52", "65"],
        ["B.Murray"],
        ["85"],
        stadiums.Italy.comunale,
        "34 857"
      ),
      new Match(
        "08.06.1990",
        stage.group.b,
        ["Cameroon", "Argentina"],
        [[1, 0], [], []],
        ["F.Omam-Biyik"],
        ["65"],
        [],
        [],
        stadiums.Italy.sanSiro,
        "73 780"
      ),
      new Match(
        "09.06.1990",
        stage.group.b,
        ["Romania", "Soviet Union"],
        [[2, 0], [], []],
        ["M.Lăcătuș"],
        ["41, 54(p)"],
        [],
        [],
        stadiums.Italy.nicola,
        "42 960"
      ),
      new Match(
        "13.06.1990",
        stage.group.b,
        ["Argentina", "Soviet Union"],
        [[2, 0], [], []],
        ["P.Troglio", "J.Burruchaga"],
        ["27", "79"],
        [],
        [],
        stadiums.Italy.paolo,
        "55 759"
      ),
      new Match(
        "14.06.1990",
        stage.group.b,
        ["Cameroon", "Romania"],
        [[2, 1], [], []],
        ["R.Milla"],
        ["76, 86"],
        ["G.Balint"],
        ["88"],
        stadiums.Italy.nicola,
        "38 687"
      ),
      new Match(
        "18.06.1990",
        stage.group.b,
        ["Argentina", "Romania"],
        [[1, 1], [], []],
        ["P.Monzón"],
        ["62"],
        ["G.Balint"],
        ["68"],
        stadiums.Italy.paolo,
        "52 733"
      ),
      new Match(
        "18.06.1990",
        stage.group.b,
        ["Soviet Union", "Cameroon"],
        [[4, 0], [], []],
        ["O.Protasov", "A.Zygmantovich", "O.Zavarov", "I.Dobrovolskiy"],
        ["20", "29", "52", "63"],
        [],
        [],
        stadiums.Italy.nicola,
        "37 307"
      ),
      new Match(
        "10.06.1990",
        stage.group.c,
        ["Brazil", "Sweden"],
        [[2, 1], [], []],
        ["Careca"],
        ["40, 63"],
        ["T.Brolin"],
        ["79"],
        stadiums.Italy.alpi,
        "62 628"
      ),
      new Match(
        "11.06.1990",
        stage.group.c,
        ["Costa Rica", "Scotland"],
        [[1, 0], [], []],
        ["J.Cayasso"],
        ["49"],
        [],
        [],
        stadiums.Italy.ferraris,
        "30 867"
      ),
      new Match(
        "16.06.1990",
        stage.group.c,
        ["Brazil", "Costa Rica"],
        [[1, 0], [], []],
        ["Müller"],
        ["33"],
        [],
        [],
        stadiums.Italy.alpi,
        "58 007"
      ),
      new Match(
        "16.06.1990",
        stage.group.c,
        ["Scotland", "Sweden"],
        [[2, 1], [], []],
        ["S.McCall", "M.Johnston"],
        ["11", "80(p)"],
        ["G.Strömberg"],
        ["86"],
        stadiums.Italy.ferraris,
        "31 823"
      ),
      new Match(
        "20.06.1990",
        stage.group.c,
        ["Brazil", "Scotland"],
        [[1, 0], [], []],
        ["Müller"],
        ["82"],
        [],
        [],
        stadiums.Italy.alpi,
        "62 502"
      ),
      new Match(
        "20.06.1990",
        stage.group.c,
        ["Costa Rica", "Sweden"],
        [[2, 1], [], []],
        ["R.Flores", "H.Medford"],
        ["75", "87"],
        ["J.Ekstrom"],
        ["32"],
        stadiums.Italy.ferraris,
        "20 223"
      ),
      new Match(
        "09.06.1990",
        stage.group.d,
        ["Colombia", "U. A. Emirates"],
        [[2, 0], [], []],
        ["B.Redín", "C.Valderrama"],
        ["50", "85"],
        [],
        [],
        stadiums.Italy.dallAra,
        "30 791"
      ),
      new Match(
        "10.06.1990",
        stage.group.d,
        ["Germany", "Yugoslavia"],
        [[4, 1], [], []],
        ["L.Matthäus", "J.Klinsmann", "R.Völler"],
        ["28, 64", "39", "70"],
        ["D.Jozić"],
        ["55"],
        stadiums.Italy.sanSiro,
        "74 765"
      ),
      new Match(
        "14.06.1990",
        stage.group.d,
        ["Yugoslavia", "Colombia"],
        [[1, 0], [], []],
        ["D.Jozić"],
        ["73"],
        [],
        [],
        stadiums.Italy.dallAra,
        "32 257"
      ),
      new Match(
        "15.06.1990",
        stage.group.d,
        ["Germany", "U. A. Emirates"],
        [[5, 1], [], []],
        ["R.Völler", "J.Klinsmann", "L.Matthäus", "U.Bein"],
        ["35, 75", "36", "47", "59"],
        ["K.Ismaïl"],
        ["46"],
        stadiums.Italy.sanSiro,
        "71 167"
      ),
      new Match(
        "19.06.1990",
        stage.group.d,
        ["Germany", "Colombia"],
        [[1, 1], [], []],
        ["P.Littbarski"],
        ["88"],
        ["F.Rincón"],
        ["90+3"],
        stadiums.Italy.sanSiro,
        "72 510"
      ),
      new Match(
        "19.06.1990",
        stage.group.d,
        ["Yugoslavia", "U. A. Emirates"],
        [[4, 1], [], []],
        ["S.Sušić", "D.Pancev", "R.Prosinečki"],
        ["5", "9, 46", "90"],
        ["A.T.Juma'a"],
        ["22"],
        stadiums.Italy.dallAra,
        "27 833"
      ),
      new Match(
        "12.06.1990",
        stage.group.e,
        ["Belgium", "Korea Republic"],
        [[2, 0], [], []],
        ["M.Degryse", "M.De Wolf"],
        ["53", "64"],
        [],
        [],
        stadiums.Italy.bentegodi,
        "32 486"
      ),
      new Match(
        "13.06.1990",
        stage.group.e,
        ["Uruguay", "Spain"],
        [[0, 0], [], []],
        [],
        [],
        [],
        [],
        stadiums.Italy.friuli,
        "35 713"
      ),
      new Match(
        "17.06.1990",
        stage.group.e,
        ["Belgium", "Uruguay"],
        [[3, 1], [], []],
        ["L.Clijsters", "E.Scifo", "J.Ceulemans"],
        ["15", "22", "47"],
        ["P.J.Bengoechea"],
        ["73"],
        stadiums.Italy.bentegodi,
        "33 759"
      ),
      new Match(
        "17.06.1990",
        stage.group.e,
        ["Spain", "Korea Republic"],
        [[3, 1], [], []],
        ["Michel"],
        ["23, 61, 81"],
        ["Hwang-Bo Kwan"],
        ["43"],
        stadiums.Italy.friuli,
        "32 733"
      ),
      new Match(
        "21.06.1990",
        stage.group.e,
        ["Spain", "Belgium"],
        [[2, 1], [], []],
        ["Michel", "Górriz"],
        ["27(p)", "38"],
        ["P.Vervoort"],
        ["29"],
        stadiums.Italy.bentegodi,
        "35 950"
      ),
      new Match(
        "21.06.1990",
        stage.group.e,
        ["Uruguay", "Korea Republic"],
        [[1, 0], [], []],
        ["D.Fonseca"],
        ["90"],
        [],
        [],
        stadiums.Italy.friuli,
        "29 039"
      ),
      new Match(
        "11.06.1990",
        stage.group.f,
        ["England", "Ireland"],
        [[1, 1], [], []],
        ["G.Lineker"],
        ["9"],
        ["K.Sheedy"],
        ["73"],
        stadiums.Italy.santElia,
        "35 238"
      ),
      new Match(
        "12.06.1990",
        stage.group.f,
        ["Netherlands", "Egypt"],
        [[1, 1], [], []],
        ["W.Kieft"],
        ["58"],
        ["M.Abdelghany"],
        ["83(p)"],
        stadiums.Italy.favorita,
        "33 421"
      ),
      new Match(
        "16.06.1990",
        stage.group.f,
        ["England", "Netherlands"],
        [[0, 0], [], []],
        [],
        [],
        [],
        [],
        stadiums.Italy.santElia,
        "35 267"
      ),
      new Match(
        "17.06.1990",
        stage.group.f,
        ["Ireland", "Egypt"],
        [[0, 0], [], []],
        [],
        [],
        [],
        [],
        stadiums.Italy.favorita,
        "33 288"
      ),
      new Match(
        "21.06.1990",
        stage.group.f,
        ["England", "Egypt"],
        [[1, 0], [], []],
        ["M.Wright"],
        ["58"],
        [],
        [],
        stadiums.Italy.santElia,
        "34 959"
      ),
      new Match(
        "21.06.1990",
        stage.group.f,
        ["Ireland", "Netherlands"],
        [[1, 1], [], []],
        ["N.Quinn"],
        ["71"],
        ["R.Gullit"],
        ["11"],
        stadiums.Italy.favorita,
        "33 288"
      ),
      new Match(
        "23.06.1990",
        stage[1_8],
        ["Cameroon", "Colombia"],
        [[0, 0], [2, 1], []],
        ["R.Milla"],
        ["106, 108"],
        ["B.Redín"],
        ["115"],
        stadiums.Italy.paolo,
        "50 026"
      ),
      new Match(
        "23.06.1990",
        stage[1_8],
        ["Czechoslovakia", "Costa Rica"],
        [[4, 1], [], []],
        ["T.Skuhravy", "L.Kubik"],
        ["12, 63, 82", "76"],
        ["R.González"],
        ["55"],
        stadiums.Italy.nicola,
        "47 673"
      ),
      new Match(
        "24.06.1990",
        stage[1_8],
        ["Argentina", "Brazil"],
        [[1, 0], [], []],
        ["C.Caniggia"],
        ["81"],
        [],
        [],
        stadiums.Italy.alpi,
        "61 381"
      ),
      new Match(
        "24.06.1990",
        stage[1_8],
        ["Germany", "Netherlands"],
        [[2, 1], [], []],
        ["J.Klinsmann", "A.Brehme"],
        ["51", "85"],
        ["R.Koeman"],
        ["89(p)"],
        stadiums.Italy.sanSiro,
        "74 559"
      ),
      new Match(
        "25.06.1990",
        stage[1_8],
        ["Ireland", "Romania"],
        [
          [0, 0],
          [0, 0],
          [5, 4],
        ],
        [],
        [],
        [],
        [],
        stadiums.Italy.ferraris,
        "31 818"
      ),
      new Match(
        "25.06.1990",
        stage[1_8],
        ["Italy", "Uruguay"],
        [[2, 0], [], []],
        ["S.Schillaci", "A.Serena"],
        ["65", "85"],
        [],
        [],
        stadiums.Italy.olimpico,
        "73 303"
      ),
      new Match(
        "26.06.1990",
        stage[1_8],
        ["Yugoslavia", "Spain"],
        [[1, 1], [1, 0], []],
        ["D.Stojković"],
        ["78", "92"],
        ["J.Salinas"],
        ["83"],
        stadiums.Italy.bentegodi,
        "35 500"
      ),
      new Match(
        "26.06.1990",
        stage[1_8],
        ["England", "Belgium"],
        [[0, 0], [1, 0], []],
        ["D.Platt"],
        ["119"],
        [],
        [],
        stadiums.Italy.dallAra,
        "34 520"
      ),
      new Match(
        "30.06.1990",
        stage[1_4],
        ["Argentina", "Yugoslavia"],
        [
          [0, 0],
          [0, 0],
          [3, 2],
        ],
        [],
        [],
        [],
        [],
        stadiums.Italy.comunale,
        "38 971"
      ),
      new Match(
        "30.06.1990",
        stage[1_4],
        ["Italy", "Ireland"],
        [[1, 0], [], []],
        ["S.Schillaci"],
        ["38"],
        [],
        [],
        stadiums.Italy.olimpico,
        "73 303"
      ),
      new Match(
        "01.07.1990",
        stage[1_4],
        ["Germany", "Czechoslovakia"],
        [[1, 0], [], []],
        ["L.Matthäus"],
        ["25(p)"],
        [],
        [],
        stadiums.Italy.sanSiro,
        "73 347"
      ),
      new Match(
        "01.07.1990",
        stage[1_4],
        ["England", "Cameroon"],
        [[2, 2], [1, 0], []],
        ["D.Platt", "G.Lineker"],
        ["25", "83(p), 105(p)"],
        ["E.Kundé", "E.Ekéké"],
        ["61(p)", "65"],
        stadiums.Italy.paolo,
        "55 205"
      ),
      new Match(
        "03.07.1990",
        stage[1_2],
        ["Argentina", "Italy"],
        [
          [1, 1],
          [0, 0],
          [4, 3],
        ],
        ["C.Caniggia"],
        ["67"],
        ["S.Schillaci"],
        ["17"],
        stadiums.Italy.paolo,
        "59 978"
      ),
      new Match(
        "04.07.1990",
        stage[1_2],
        ["Germany", "England"],
        [
          [1, 1],
          [0, 0],
          [4, 3],
        ],
        ["A.Brehme"],
        ["60"],
        ["G.Lineker"],
        ["80"],
        stadiums.Italy.alpi,
        "62 628"
      ),
      new Match(
        "07.07.1990",
        stage.place3,
        ["Italy", "England"],
        [[2, 1], [], []],
        ["R.Baggio", "S.Schillaci"],
        ["71", "86(p)"],
        ["D.Platt"],
        ["81"],
        stadiums.Italy.nicola,
        "51 426"
      ),
      new Match(
        "08.07.1990",
        stage.final,
        ["Germany", "Argentina"],
        [[1, 0], [], []],
        ["A.Brehme"],
        ["85(p)"],
        [],
        [],
        stadiums.Italy.olimpico,
        "73 603"
      ),
    ],
    qualification: [],
  },
  1994: {
    id: "world-cup.15.1994",
    title: "1994 FIFA World Cup",
    date: "June 17 - July 17",
    icon: iconWorldCup1994,
    background: [backgroundFWC1994_1, backgroundFWC1994_2],
    hostCountry: ["United States"],
    finalStage: [
      new Match(
        "18.06.1994",
        stage.group.a,
        ["United States", "Switzerland"],
        [[1, 1], [], []],
        ["E.Wynalda"],
        ["45"],
        ["G.Bregy"],
        ["39"],
        stadiums.USA.pontiac,
        "73 425"
      ),
      new Match(
        "18.06.1994",
        stage.group.a,
        ["Romania", "Colombia"],
        [[3, 1], [], []],
        ["F.Răducioiu", "G.Hagi"],
        ["16, 89", "34"],
        ["A.Valencia"],
        ["43"],
        stadiums.USA.rose,
        "91 856"
      ),
      new Match(
        "22.06.1994",
        stage.group.a,
        ["Switzerland", "Romania"],
        [[4, 1], [], []],
        ["A.Sutter", "S.Chapuisat", "A.Knup"],
        ["16", "52", "66, 72"],
        ["G.Hagi"],
        ["35"],
        stadiums.USA.pontiac,
        "61 428"
      ),
      new Match(
        "22.06.1994",
        stage.group.a,
        ["United States", "Colombia"],
        [[2, 1], [], []],
        ["A.Escobar", "E.Stewart"],
        ["35(o.g.)", "52"],
        ["A.Valencia"],
        ["90"],
        stadiums.USA.rose,
        "93 869"
      ),
      new Match(
        "26.06.1994",
        stage.group.a,
        ["Colombia", "Switzerland"],
        [[2, 0], [], []],
        ["H.Gaviria", "H.Lozano"],
        ["44", "90+1"],
        [],
        [],
        stadiums.USA.stanford,
        "83 401"
      ),
      new Match(
        "26.06.1994",
        stage.group.a,
        ["Romania", "United States"],
        [[1, 0], [], []],
        ["D.Petrescu"],
        ["18"],
        [],
        [],
        stadiums.USA.rose,
        "93 869"
      ),
      new Match(
        "19.06.1994",
        stage.group.b,
        ["Cameroon", "Sweden"],
        [[2, 2], [], []],
        ["J.-D.Embe", "F.Omam-Biyik"],
        ["31", "47"],
        ["R.Ljung", "M.Dahlin"],
        ["8", "75"],
        stadiums.USA.rose,
        "93 194"
      ),
      new Match(
        "20.06.1994",
        stage.group.b,
        ["Brazil", "Russia"],
        [[2, 0], [], []],
        ["Romário", "Raí"],
        ["26", "52(p)"],
        [],
        [],
        stadiums.USA.stanford,
        "81 061"
      ),
      new Match(
        "24.06.1994",
        stage.group.b,
        ["Brazil", "Cameroon"],
        [[3, 0], [], []],
        ["Romário", "Márcio Santos", "Bebeto"],
        ["39", "66", "73"],
        [],
        [],
        stadiums.USA.stanford,
        "83 401"
      ),
      new Match(
        "24.06.1994",
        stage.group.b,
        ["Sweden", "Russia"],
        [[3, 1], [], []],
        ["T.Brolin", "M.Dahlin"],
        ["37(p)", "59, 81"],
        ["O.Salenko"],
        ["4(p)"],
        stadiums.USA.pontiac,
        "71 528"
      ),
      new Match(
        "28.06.1994",
        stage.group.b,
        ["Russia", "Cameroon"],
        [[6, 1], [], []],
        ["O.Salenko", "D.Radchenko"],
        ["15, 41, 44(p), 72, 75", "81"],
        ["R.Milla"],
        ["46"],
        stadiums.USA.stanford,
        "74 914"
      ),
      new Match(
        "28.06.1994",
        stage.group.b,
        ["Brazil", "Sweden"],
        [[1, 1], [], []],
        ["Romário"],
        ["47"],
        ["K.Andersson"],
        ["23"],
        stadiums.USA.pontiac,
        "77 217"
      ),
      new Match(
        "17.06.1994",
        stage.group.c,
        ["Germany", "Bolivia"],
        [[1, 0], [], []],
        ["J.Klinsmann"],
        ["61"],
        [],
        [],
        stadiums.USA.soldier,
        "63 117"
      ),
      new Match(
        "17.06.1994",
        stage.group.c,
        ["Spain", "Korea Republic"],
        [[2, 2], [], []],
        ["J.alinas", "A.Goikoetxea"],
        ["51", "56"],
        ["Hong Myung-bo", "Seo Jung-won"],
        ["85", "90"],
        stadiums.USA.cotton,
        "56 247"
      ),
      new Match(
        "21.06.1994",
        stage.group.c,
        ["Germany", "Spain"],
        [[1, 1], [], []],
        ["J.Klinsmann"],
        ["48"],
        ["A.Goikoetxea"],
        ["14"],
        stadiums.USA.soldier,
        "63 113"
      ),
      new Match(
        "23.06.1994",
        stage.group.c,
        ["Korea Republic", "Bolivia"],
        [[0, 0], [], []],
        [],
        [],
        [],
        [],
        stadiums.USA.foxboro,
        "54 453"
      ),
      new Match(
        "27.06.1994",
        stage.group.c,
        ["Spain", "Bolivia"],
        [[3, 1], [], []],
        ["P.Guardiola", "J.L.Caminero"],
        ["19(p)", "66, 70"],
        ["E.Sanchez"],
        ["67"],
        stadiums.USA.soldier,
        "63 089"
      ),
      new Match(
        "27.06.1994",
        stage.group.c,
        ["Germany", "Korea Republic"],
        [[3, 2], [], []],
        ["J.Klinsmann", "K.-H.Riedle"],
        ["12, 37", "20"],
        ["Hwang Sun-hong", "Hong Myung-bo"],
        ["52", "63"],
        stadiums.USA.cotton,
        "63 998"
      ),
      new Match(
        "21.06.1994",
        stage.group.d,
        ["Argentina", "Greece"],
        [[4, 0], [], []],
        ["G.Batistuta", "D.Maradona"],
        ["2, 44, 90(p)", "60"],
        [],
        [],
        stadiums.USA.foxboro,
        "54 456"
      ),
      new Match(
        "21.06.1994",
        stage.group.d,
        ["Nigeria", "Bulgaria"],
        [[3, 0], [], []],
        ["R.Yekini", "D.Amokachi", "E.Amunike"],
        ["21", "43", "55"],
        [],
        [],
        stadiums.USA.cotton,
        "44 132"
      ),
      new Match(
        "25.06.1994",
        stage.group.d,
        ["Argentina", "Nigeria"],
        [[2, 1], [], []],
        ["C.Caniggia"],
        ["21, 28"],
        ["S.Siasia"],
        ["8"],
        stadiums.USA.foxboro,
        "54 453"
      ),
      new Match(
        "26.06.1994",
        stage.group.d,
        ["Bulgaria", "Greece"],
        [[4, 0], [], []],
        ["H.Stoichkov", "Y.Letchkov", "D.Borimirov"],
        ["5(p), 55", "66", "90"],
        [],
        [],
        stadiums.USA.soldier,
        "63 160"
      ),
      new Match(
        "30.06.1994",
        stage.group.d,
        ["Bulgaria", "Argentina"],
        [[2, 0], [], []],
        ["H.Stoichkov", "N.Sirakov"],
        ["61", "90+3"],
        [],
        [],
        stadiums.USA.cotton,
        "63 998"
      ),
      new Match(
        "30.06.1994",
        stage.group.d,
        ["Nigeria", "Greece"],
        [[2, 0], [], []],
        ["F.George", "D.Amokachi"],
        ["45+2", "90+5"],
        [],
        [],
        stadiums.USA.foxboro,
        "53 001"
      ),
      new Match(
        "18.06.1994",
        stage.group.e,
        ["Ireland", "Italy"],
        [[1, 0], [], []],
        ["R.Houghton"],
        ["12"],
        [],
        [],
        stadiums.USA.giants,
        "75 338"
      ),
      new Match(
        "19.06.1994",
        stage.group.e,
        ["Norway", "Mexico"],
        [[1, 0], [], []],
        ["K.Rekdal"],
        ["85"],
        [],
        [],
        stadiums.USA.kennedy,
        "52 395"
      ),
      new Match(
        "23.06.1994",
        stage.group.e,
        ["Italy", "Norway"],
        [[1, 0], [], []],
        ["D.Baggio"],
        ["69"],
        [],
        [],
        stadiums.USA.giants,
        "74 624"
      ),
      new Match(
        "24.06.1994",
        stage.group.e,
        ["Mexico", "Ireland"],
        [[2, 1], [], []],
        ["Luis Garcia"],
        ["42, 65"],
        ["J.Aldridge"],
        ["84"],
        stadiums.USA.citrus,
        "60 790"
      ),
      new Match(
        "28.06.1994",
        stage.group.e,
        ["Italy", "Mexico"],
        [[1, 1], [], []],
        ["D.Massaro"],
        ["48"],
        ["M.Bernal"],
        ["57"],
        stadiums.USA.kennedy,
        "52 535"
      ),
      new Match(
        "28.06.1994",
        stage.group.e,
        ["Ireland", "Norway"],
        [[0, 0], [], []],
        [],
        [],
        [],
        [],
        stadiums.USA.giants,
        "72 404"
      ),
      new Match(
        "19.06.1994",
        stage.group.f,
        ["Belgium", "Morocco"],
        [[1, 0], [], []],
        ["M.Degryse"],
        ["11"],
        [],
        [],
        stadiums.USA.citrus,
        "61 219"
      ),
      new Match(
        "20.06.1994",
        stage.group.f,
        ["Netherlands", "Saudi Arabia"],
        [[2, 1], [], []],
        ["W.Jonk", "G.Taument"],
        ["50", "86"],
        ["F.Amin"],
        ["18"],
        stadiums.USA.kennedy,
        "50 535"
      ),
      new Match(
        "25.06.1994",
        stage.group.f,
        ["Belgium", "Netherlands"],
        [[1, 0], [], []],
        ["P.Albert"],
        ["65"],
        [],
        [],
        stadiums.USA.citrus,
        "62 387"
      ),
      new Match(
        "25.06.1994",
        stage.group.f,
        ["Saudi Arabia", "Morocco"],
        [[2, 1], [], []],
        ["Sami Al Jaber", "F.Amin"],
        ["7(p)", "45"],
        ["M.Chaouch"],
        ["26"],
        stadiums.USA.giants,
        "76 322"
      ),
      new Match(
        "29.06.1990",
        stage.group.f,
        ["Saudi Arabia", "Belgium"],
        [[1, 0], [], []],
        ["Said Al Owayran"],
        ["5"],
        [],
        [],
        stadiums.USA.kennedy,
        "52 959"
      ),
      new Match(
        "29.06.1994",
        stage.group.f,
        ["Netherlands", "Morocco"],
        [[2, 1], [], []],
        ["D.Bergkamp", "B.Roy"],
        ["43", "77"],
        ["H.Nader"],
        ["47"],
        stadiums.USA.citrus,
        "60 578"
      ),
      new Match(
        "02.07.1994",
        stage[1_8],
        ["Germany", "Belgium"],
        [[3, 2], [], []],
        ["R.Völler", "J.Klinsmann"],
        ["6, 38", "11"],
        ["G.Grün", "P.Albert"],
        ["8", "90"],
        stadiums.USA.soldier,
        "60 246"
      ),
      new Match(
        "02.07.1994",
        stage[1_8],
        ["Spain", "Switzerland"],
        [[3, 0], [], []],
        ["F.Hierro", "Luis Enrique", "Beguiristáin"],
        ["15", "74", "86(p)"],
        [],
        [],
        stadiums.USA.kennedy,
        "53 121"
      ),
      new Match(
        "03.07.1994",
        stage[1_8],
        ["Sweden", "Saudi Arabia"],
        [[3, 1], [], []],
        ["M.Dahlin", "K.Andersson"],
        ["6", "51, 88"],
        ["Fahad Al Ghesheyan"],
        ["85"],
        stadiums.USA.cotton,
        "60 277"
      ),
      new Match(
        "03.07.1994",
        stage[1_8],
        ["Romania", "Argentina"],
        [[3, 2], [], []],
        ["I.Dumitrescu", "G.Hagi"],
        ["11, 18", "58"],
        ["G.Batistuta", "A.Balbo"],
        ["16(p)", "75"],
        stadiums.USA.rose,
        "90 469"
      ),
      new Match(
        "04.07.1994",
        stage[1_8],
        ["Netherlands", "Ireland"],
        [[2, 0], [], []],
        ["D.Bergkamp", "W.Jonk"],
        ["11", "41"],
        [],
        [],
        stadiums.USA.citrus,
        "61 355"
      ),
      new Match(
        "04.07.1994",
        stage[1_8],
        ["Brazil", "United States"],
        [[1, 0], [], []],
        ["Bebeto"],
        ["72"],
        [],
        [],
        stadiums.USA.stanford,
        "84 147"
      ),
      new Match(
        "05.07.1994",
        stage[1_8],
        ["Italy", "Nigeria"],
        [[1, 1], [1, 0], []],
        ["R.Baggio"],
        ["88", "102"],
        ["E.Amunike"],
        ["25"],
        stadiums.USA.foxboro,
        "54 367"
      ),
      new Match(
        "05.07.1994",
        stage[1_8],
        ["Bulgaria", "Mexico"],
        [
          [1, 1],
          [0, 0],
          [3, 1],
        ],
        ["H.Stoichkov"],
        ["6"],
        ["García Aspe"],
        ["18(p)"],
        stadiums.USA.giants,
        "71 030"
      ),
      new Match(
        "09.07.1994",
        stage[1_4],
        ["Italy", "Spain"],
        [[2, 1], [], []],
        ["D.Baggio", "R.Baggio"],
        ["25", "88"],
        ["J.L.Caminero"],
        ["58"],
        stadiums.USA.foxboro,
        "53 400"
      ),
      new Match(
        "09.07.1994",
        stage[1_4],
        ["Brazil", "Netherlands"],
        [[3, 2], [], []],
        ["Romário", "Bebeto", "Branco"],
        ["53", "63", "81"],
        ["D.Bergkamp", "A.Winter"],
        ["64", "76"],
        stadiums.USA.cotton,
        "63 500"
      ),
      new Match(
        "10.07.1994",
        stage[1_4],
        ["Bulgaria", "Germany"],
        [[2, 1], [], []],
        ["H.Stoichkov", "Y.Letchkov"],
        ["75", "78"],
        ["L.Matthäus"],
        ["47(p)"],
        stadiums.USA.giants,
        "72 416"
      ),
      new Match(
        "10.07.1994",
        stage[1_4],
        ["Sweden", "Romania"],
        [
          [1, 1],
          [1, 1],
          [5, 4],
        ],
        ["T.Brolin", "K.Andersson"],
        ["78", "115"],
        ["F.Răducioiu"],
        ["88, 101"],
        stadiums.USA.stanford,
        "83 500"
      ),
      new Match(
        "13.07.1994",
        stage[1_2],
        ["Italy", "Bulgaria"],
        [[2, 1], [], []],
        ["R.Baggio"],
        ["21, 25"],
        ["H.Stoichkov"],
        ["44(p)"],
        stadiums.USA.giants,
        "74 110"
      ),
      new Match(
        "13.07.1994",
        stage[1_2],
        ["Brazil", "Sweden"],
        [[1, 0], [], []],
        ["Romário"],
        ["80"],
        [],
        [],
        stadiums.USA.rose,
        "91 856"
      ),
      new Match(
        "16.07.1994",
        stage.place3,
        ["Sweden", "Bulgaria"],
        [[4, 0], [], []],
        ["T.Brolin", "H.Mild", "H.Larsson", "K.Andersson"],
        ["8", "30", "37", "39"],
        [],
        [],
        stadiums.USA.rose,
        "91 500"
      ),
      new Match(
        "17.07.1994",
        stage.final,
        ["Brazil", "Italy"],
        [
          [0, 0],
          [0, 0],
          [3, 2],
        ],
        [],
        [],
        [],
        [],
        stadiums.USA.rose,
        "94 194"
      ),
    ],
    qualification: [],
  },
  1998: {
    id: "world-cup.16.1998",
    title: "1998 FIFA World Cup",
    date: "10 June - 12 July",
    icon: iconWorldCup1998,
    background: [backgroundFWC1998_1, backgroundFWC1998_2],
    hostCountry: ["France"],
    finalStage: [
      new Match(
        "10.06.1998",
        stage.group.a,
        ["Brazil", "Scotland"],
        [[2, 1], [], []],
        ["César Sampaio", "T.Boyd"],
        ["5", "74(o.g.)"],
        ["J.Collins"],
        ["38(p)"],
        stadiums.France.france,
        "80 000"
      ),
      new Match(
        "10.06.1998",
        stage.group.a,
        ["Morocco", "Norway"],
        [[2, 2], [], []],
        ["M.Hadji", "A.Hadda"],
        ["37", "60"],
        ["Y.Chippo", "D.Eggen"],
        ["45+1(o.g.)", "61"],
        stadiums.France.mosson,
        "29 800"
      ),
      new Match(
        "16.06.1998",
        stage.group.a,
        ["Scotland", "Norway"],
        [[1, 1], [], []],
        ["C.Burley", "A.Hadda"],
        ["66"],
        ["H.Flo"],
        ["46"],
        stadiums.France.lescure,
        "31 800"
      ),
      new Match(
        "16.06.1998",
        stage.group.a,
        ["Brazil", "Morocco"],
        [[3, 0], [], []],
        ["Ronaldo", "Rivaldo", "Bebeto"],
        ["9", "45+2", "50"],
        [],
        [],
        stadiums.France.beaujoire,
        "35 500"
      ),
      new Match(
        "23.06.1998",
        stage.group.a,
        ["Morocco", "Scotland"],
        [[3, 0], [], []],
        ["S.Bassir", "A.Hadda"],
        ["23, 85", "46"],
        [],
        [],
        stadiums.France.geoffroyGuichard,
        "30 600"
      ),
      new Match(
        "23.06.1998",
        stage.group.a,
        ["Norway", "Brazil"],
        [[2, 1], [], []],
        ["T.A.Flo", "K.Rekdal"],
        ["83", "89(p)"],
        ["Bebeto"],
        ["78"],
        stadiums.France.velodrome,
        "57 000"
      ),
      new Match(
        "11.06.1998",
        stage.group.b,
        ["Italy", "Chile"],
        [[2, 2], [], []],
        ["C.Vieri", "R.Baggio"],
        ["10", "84(p)"],
        ["Marcelo Salas"],
        ["45+3, 50"],
        stadiums.France.lescure,
        "31 800"
      ),
      new Match(
        "11.06.1998",
        stage.group.b,
        ["Cameroon", "Austria"],
        [[1, 1], [], []],
        ["P.Njanka"],
        ["77"],
        ["T.Polster"],
        ["90+1"],
        stadiums.France.toulouse,
        "33 500"
      ),
      new Match(
        "17.06.1998",
        stage.group.b,
        ["Chile", "Austria"],
        [[1, 1], [], []],
        ["Marcelo Salas"],
        ["70"],
        ["I.Vastić"],
        ["90+2"],
        stadiums.France.geoffroyGuichard,
        "30 600"
      ),
      new Match(
        "17.06.1998",
        stage.group.b,
        ["Italy", "Cameroon"],
        [[3, 0], [], []],
        ["L.Di Biagio", "C.Vieri"],
        ["7", "75, 89"],
        [],
        [],
        stadiums.France.mosson,
        "29 800"
      ),
      new Match(
        "23.06.1998",
        stage.group.b,
        ["Italy", "Austria"],
        [[2, 1], [], []],
        ["C.Vieri", "R.Baggio"],
        ["48", "90"],
        ["A.Herzog"],
        ["90+2"],
        stadiums.France.france,
        "80 000"
      ),
      new Match(
        "23.06.1998",
        stage.group.b,
        ["Chile", "Cameroon"],
        [[1, 1], [], []],
        ["J.Sierra"],
        ["20"],
        ["H.P.Mboma"],
        ["56"],
        stadiums.France.beaujoire,
        "35 500"
      ),
      new Match(
        "12.06.1998",
        stage.group.c,
        ["Denmark", "Saudi Arabia"],
        [[1, 0], [], []],
        ["M.Rieper"],
        ["69"],
        [],
        [],
        stadiums.France.felixBollaert,
        "38 100"
      ),
      new Match(
        "12.06.1998",
        stage.group.c,
        ["France", "South Africa"],
        [[3, 0], [], []],
        ["C.Dugarry", "P.Issa", "T.Henry"],
        ["36", "77(o.g.)", "90+2"],
        [],
        [],
        stadiums.France.velodrome,
        "55 000"
      ),
      new Match(
        "18.06.1998",
        stage.group.c,
        ["South Africa", "Denmark"],
        [[1, 1], [], []],
        ["B.McCarthy"],
        ["51"],
        ["A.Nielsen"],
        ["12"],
        stadiums.France.toulouse,
        "33 500"
      ),
      new Match(
        "18.06.1998",
        stage.group.c,
        ["France", "Saudi Arabia"],
        [[4, 0], [], []],
        ["T.Henry", "D.Trezeguet", "B.Lizarazu"],
        ["37, 78", "68", "85"],
        [],
        [],
        stadiums.France.france,
        "80 000"
      ),
      new Match(
        "24.06.1998",
        stage.group.c,
        ["France", "Denmark"],
        [[2, 1], [], []],
        ["Y.Djorkaeff", "E.Petit"],
        ["12(p)", "56"],
        ["M.Laudrup"],
        ["42(p)"],
        stadiums.France.gerland,
        "39 100"
      ),
      new Match(
        "24.06.1998",
        stage.group.c,
        ["South Africa", "Saudi Arabia"],
        [[2, 2], [], []],
        ["S.Bartlett"],
        ["18, 90+3(p)"],
        ["Sami Al Jaber", "Youssef Al Tunayan"],
        ["45+2(p)", "74(p)"],
        stadiums.France.lescure,
        "31 800"
      ),
      new Match(
        "12.06.1998",
        stage.group.d,
        ["Paraguay", "Bulgaria"],
        [[0, 0], [], []],
        [],
        [],
        [],
        [],
        stadiums.France.mosson,
        "29 800"
      ),
      new Match(
        "13.06.1998",
        stage.group.d,
        ["Nigeria", "Spain"],
        [[3, 2], [], []],
        ["F.Hierro", "Raúl"],
        ["21", "47"],
        ["M.Adepoju", "A.Zubizarreta", "S.Oliseh"],
        ["24", "73(o.g.)", "78"],
        stadiums.France.beaujoire,
        "35 500"
      ),
      new Match(
        "19.06.1998",
        stage.group.d,
        ["Nigeria", "Bulgaria"],
        [[1, 0], [], []],
        ["V.Ikpeba"],
        ["28"],
        [],
        [],
        stadiums.France.parcDesPrinces,
        "45 500"
      ),
      new Match(
        "19.06.1998",
        stage.group.d,
        ["Spain", "Paraguay"],
        [[0, 0], [], []],
        [],
        [],
        [],
        [],
        stadiums.France.geoffroyGuichard,
        "30 600"
      ),
      new Match(
        "24.06.1998",
        stage.group.d,
        ["Paraguay", "Nigeria"],
        [[3, 1], [], []],
        ["C.Ayala", "M.Benitez", "J.Cardozo"],
        ["1", "58", "86"],
        ["W.Oruma"],
        ["11"],
        stadiums.France.toulouse,
        "33 500"
      ),
      new Match(
        "24.06.1998",
        stage.group.d,
        ["Spain", "Bulgaria"],
        [[6, 1], [], []],
        ["F.Hierro", "Luis Enrique", "F.Morientes", "G.Bachev", "Kiko"],
        ["6(p)", "18", "55, 81", "88(o.g.)", "90+4"],
        ["E.Kostadinov"],
        ["58"],
        stadiums.France.felixBollaert,
        "38 100"
      ),
      new Match(
        "13.06.1998",
        stage.group.e,
        ["Mexico", "Korea Republic"],
        [[3, 1], [], []],
        ["R.Pelaez", "Luis Hernandez"],
        ["50", "75, 84"],
        ["Ha Seok-ju"],
        ["27"],
        stadiums.France.gerland,
        "39 100"
      ),
      new Match(
        "13.06.1998",
        stage.group.e,
        ["Netherlands", "Belgium"],
        [[0, 0], [], []],
        [],
        [],
        [],
        [],
        stadiums.France.france,
        "77 000"
      ),
      new Match(
        "20.06.1998",
        stage.group.e,
        ["Belgium", "Mexico"],
        [[2, 2], [], []],
        ["M.Wilmots"],
        ["42, 47"],
        ["García Aspe", "C.Blanco"],
        ["55(p)", "62"],
        stadiums.France.lescure,
        "31 800"
      ),
      new Match(
        "20.06.1998",
        stage.group.e,
        ["Netherlands", "Korea Republic"],
        [[5, 0], [], []],
        [
          "P.Cocu",
          "M.Overmars",
          "D.Bergkamp",
          "P. van Hooijdonk",
          "R. de Boer",
        ],
        ["37", "41", "71", "80", "83"],
        [],
        [],
        stadiums.France.velodrome,
        "55 000"
      ),
      new Match(
        "25.06.1998",
        stage.group.e,
        ["Netherlands", "Mexico"],
        [[2, 2], [], []],
        ["P.Cocu", "R. de Boer"],
        ["4", "18"],
        ["R.Pelaez", "Luis Hernandez"],
        ["75", "90+4"],
        stadiums.France.geoffroyGuichard,
        "30 600"
      ),
      new Match(
        "25.06.1998",
        stage.group.e,
        ["Belgium", "Korea Republic"],
        [[1, 1], [], []],
        ["L.Nilis"],
        ["7"],
        ["Yoo Sang-chul"],
        ["72"],
        stadiums.France.parcDesPrinces,
        "45 500"
      ),
      new Match(
        "14.06.1998",
        stage.group.f,
        ["Serbia", "Iran"],
        [[1, 0], [], []],
        ["S.Mihajlović"],
        ["73"],
        [],
        [],
        stadiums.France.geoffroyGuichard,
        "30 600"
      ),
      new Match(
        "15.06.1998",
        stage.group.f,
        ["Germany", "United States"],
        [[2, 0], [], []],
        ["A.Möller", "J.Klinsmann"],
        ["9", "65"],
        [],
        [],
        stadiums.France.parcDesPrinces,
        "45 500"
      ),
      new Match(
        "21.06.1998",
        stage.group.f,
        ["Germany", "Serbia"],
        [[2, 2], [], []],
        ["S.Mihajlović", "O.Bierhoff"],
        ["72(o.g.)", "78"],
        ["P.Mijatović", "D.Stojković"],
        ["13", "52"],
        stadiums.France.felixBollaert,
        "38 100"
      ),
      new Match(
        "21.06.1998",
        stage.group.f,
        ["Iran", "United States"],
        [[2, 1], [], []],
        ["H.Estili", "M.Mahdavikia"],
        ["40", "84"],
        ["B.McBride"],
        ["87"],
        stadiums.France.gerland,
        "39 100"
      ),
      new Match(
        "25.06.1998",
        stage.group.f,
        ["Germany", "Iran"],
        [[2, 0], [], []],
        ["O.Bierhoff", "J.Klinsmann"],
        ["50", "57"],
        [],
        [],
        stadiums.France.mosson,
        "29 800"
      ),
      new Match(
        "25.06.1998",
        stage.group.f,
        ["Serbia", "United States"],
        [[1, 0], [], []],
        ["S.Komljenović"],
        ["4"],
        [],
        [],
        stadiums.France.beaujoire,
        "35 500"
      ),
      new Match(
        "15.06.1998",
        stage.group.g,
        ["England", "Tunisia"],
        [[2, 0], [], []],
        ["A.Shearer", "P.Scholes"],
        ["42", "89"],
        [],
        [],
        stadiums.France.velodrome,
        "54 587"
      ),
      new Match(
        "15.06.1998",
        stage.group.g,
        ["Romania", "Colombia"],
        [[1, 0], [], []],
        ["B.Ilie"],
        ["45+1"],
        [],
        [],
        stadiums.France.gerland,
        "39 100"
      ),
      new Match(
        "22.06.1998",
        stage.group.g,
        ["Colombia", "Tunisia"],
        [[1, 0], [], []],
        ["L.Preciado"],
        ["83"],
        [],
        [],
        stadiums.France.mosson,
        "29 800"
      ),
      new Match(
        "22.06.1998",
        stage.group.g,
        ["Romania", "England"],
        [[2, 1], [], []],
        ["V.Moldovan", "D.Petrescu"],
        ["46", "90"],
        ["M.Owen"],
        ["81"],
        stadiums.France.toulouse,
        "33 500"
      ),
      new Match(
        "26.06.1998",
        stage.group.g,
        ["England", "Colombia"],
        [[2, 0], [], []],
        ["D.Anderton", "D.Beckham"],
        ["20", "29"],
        [],
        [],
        stadiums.France.felixBollaert,
        "38 100"
      ),
      new Match(
        "26.06.1998",
        stage.group.g,
        ["Romania", "Tunisia"],
        [[1, 1], [], []],
        ["V.Moldovan"],
        ["20", "29"],
        ["S.Souayah"],
        ["12(p)"],
        stadiums.France.france,
        "77 000"
      ),
      new Match(
        "14.06.1998",
        stage.group.h,
        ["Argentina", "Japan"],
        [[1, 0], [], []],
        ["G.Batistuta"],
        ["28"],
        [],
        [],
        stadiums.France.toulouse,
        "33 500"
      ),
      new Match(
        "14.06.1998",
        stage.group.h,
        ["Croatia", "Jamaica"],
        [[3, 1], [], []],
        ["M.Stanić", "R.Prosinečki", "D.Šuker"],
        ["27", "53", "69"],
        ["R.Earle"],
        ["45"],
        stadiums.France.felixBollaert,
        "38 100"
      ),
      new Match(
        "20.06.1998",
        stage.group.h,
        ["Croatia", "Japan"],
        [[1, 0], [], []],
        ["D.Šuker"],
        ["77"],
        [],
        [],
        stadiums.France.beaujoire,
        "35 500"
      ),
      new Match(
        "21.06.1998",
        stage.group.h,
        ["Argentina", "Jamaica"],
        [[5, 0], [], []],
        ["A.Ortega", "G.Batistuta"],
        ["32, 55", "73, 78, 83(p)"],
        [],
        [],
        stadiums.France.parcDesPrinces,
        "45 500"
      ),
      new Match(
        "26.06.1998",
        stage.group.h,
        ["Argentina", "Croatia"],
        [[1, 0], [], []],
        ["M.Pineda"],
        ["36"],
        [],
        [],
        stadiums.France.lescure,
        "31 800"
      ),
      new Match(
        "26.06.1998",
        stage.group.h,
        ["Jamaica", "Japan"],
        [[2, 1], [], []],
        ["T.Whitmore"],
        ["39, 54"],
        ["M.Nakayama"],
        ["74"],
        stadiums.France.gerland,
        "39 100"
      ),
      new Match(
        "27.06.1998",
        stage[1_8],
        ["Italy", "Norway"],
        [[1, 0], [], []],
        ["C.Vieri"],
        ["18"],
        [],
        [],
        stadiums.France.velodrome,
        "55 000"
      ),
      new Match(
        "27.06.1998",
        stage[1_8],
        ["Brazil", "Chile"],
        [[4, 1], [], []],
        ["Cesar Sampaio", "Ronaldo"],
        ["11, 26", "45+3(p), 72"],
        ["Marcelo Salas"],
        ["70"],
        stadiums.France.parcDesPrinces,
        "45 500"
      ),
      new Match(
        "28.06.1998",
        stage[1_8],
        ["France", "Paraguay"],
        [[0, 0], [1, 0], []],
        ["L.Blanc"],
        ["114"],
        [],
        [],
        stadiums.France.felixBollaert,
        "31 800"
      ),
      new Match(
        "28.06.1998",
        stage[1_8],
        ["Denmark", "Nigeria"],
        [[4, 1], [], []],
        ["P.Møller", "B.Laudrup", "E.Sand", "T.Helveg"],
        ["3", "12", "58", "76"],
        ["T.Babangida"],
        ["77"],
        stadiums.France.france,
        "77 000"
      ),
      new Match(
        "29.06.1998",
        stage[1_8],
        ["Germany", "Mexico"],
        [[2, 1], [], []],
        ["J.Klinsmann", "O.Bierhoff"],
        ["74", "86"],
        ["Luis Hernandez"],
        ["47"],
        stadiums.France.mosson,
        "29 800"
      ),
      new Match(
        "29.06.1998",
        stage[1_8],
        ["Netherlands", "Serbia"],
        [[2, 1], [], []],
        ["D.Bergkamp", "E.Davids"],
        ["38", "90+2"],
        ["S.Komljenović"],
        ["48"],
        stadiums.France.toulouse,
        "33 500"
      ),
      new Match(
        "30.06.1998",
        stage[1_8],
        ["Croatia", "Romania"],
        [[1, 0], [], []],
        ["D.Šuker"],
        ["45+2(p)"],
        [],
        [],
        stadiums.France.lescure,
        "31 800"
      ),
      new Match(
        "30.06.1998",
        stage[1_8],
        ["Argentina", "England"],
        [[2, 2], [0, 0], [4, 3]],
        ["G.Batistuta", "J.Zanetti"],
        ["5(p)", "45+1"],
        ["A.Shearer", "M.Owen"],
        ["9(p)", "16"],
        stadiums.France.geoffroyGuichard,
        "30 600"
      ),
      new Match(
        "03.07.1998",
        stage[1_4],
        ["France", "Italy"],
        [[0, 0], [0, 0], [4, 3]],
        [],
        [],
        [],
        [],
        stadiums.France.france,
        "77 000"
      ),
      new Match(
        "03.07.1998",
        stage[1_4],
        ["Brazil", "Denmark"],
        [[3, 2], [], []],
        ["Bebeto", "Rivaldo"],
        ["10", "25, 59"],
        ["M.Jørgensen", "B.Laudrup"],
        ["2", "50"],
        stadiums.France.beaujoire,
        "35 500"
      ),
      new Match(
        "04.07.1998",
        stage[1_4],
        ["Netherlands", "Argentina"],
        [[2, 1], [], []],
        ["P.Kluivert", "D.Bergkamp"],
        ["12", "90"],
        ["Claudio López"],
        ["17"],
        stadiums.France.velodrome,
        "55 000"
      ),
      new Match(
        "04.07.1998",
        stage[1_4],
        ["Croatia", "Germany"],
        [[3, 0], [], []],
        ["R.Jarni", "G.Vlaović", "D.Šuker"],
        ["45+3", "80", "85"],
        [],
        [],
        stadiums.France.gerland,
        "39 100"
      ),
      new Match(
        "07.07.1998",
        stage[1_2],
        ["Brazil", "Netherlands"],
        [[1, 1], [0, 0], [4, 2]],
        ["Ronaldo"],
        ["46"],
        ["P.Kluivert"],
        ["87"],
        stadiums.France.velodrome,
        "54 000"
      ),
      new Match(
        "08.07.1998",
        stage[1_2],
        ["France", "Croatia"],
        [[2, 1], [], []],
        ["L.Thuram"],
        ["47, 70"],
        ["D.Šuker"],
        ["46"],
        stadiums.France.france,
        "76 000"
      ),
      new Match(
        "11.07.1998",
        stage.place3,
        ["Croatia", "Netherlands"],
        [[2, 1], [], []],
        ["R.Prosinečki", "D.Šuker"],
        ["14", "36"],
        ["B.Zenden"],
        ["22"],
        stadiums.France.parcDesPrinces,
        "45 500"
      ),
      new Match(
        "12.07.1998",
        stage.final,
        ["France", "Brazil"],
        [[3, 0], [], []],
        ["Z.Zidane", "E.Petit"],
        ["27, 45+1", "90+3"],
        [],
        [],
        stadiums.France.france,
        "75 000"
      ),
    ],
    qualification: [],
  },
  2002: {
    id: "world-cup.17.2002",
    title: "2002 FIFA World Cup",
    date: "31 May - 30 June",
    icon: iconWorldCup2002,
    background: [backgroundFWC2002_1, backgroundFWC2002_2],
    hostCountry: ["Korea Republic", "Japan"],
    finalStage: [
      new Match(
        "31.05.2002",
        stage.group.a,
        ["Senegal", "France"],
        [[1, 0], [], []],
        ["Bouba Diop"],
        ["30"],
        [],
        [],
        stadiums.SouthKorea.seoul,
        "62 561"
      ),
      new Match(
        "01.06.2002",
        stage.group.a,
        ["Denmark", "Uruguay"],
        [[2, 1], [], []],
        ["J.D.Tomasson"],
        ["45, 83"],
        ["D.Rodríguez"],
        ["47"],
        stadiums.SouthKorea.ulsan,
        "30 157"
      ),
      new Match(
        "06.06.2002",
        stage.group.a,
        ["Denmark", "Senegal"],
        [[1, 1], [], []],
        ["J.D.Tomasson"],
        ["16(p)"],
        ["S.Diao"],
        ["52"],
        stadiums.SouthKorea.daegu,
        "43 500"
      ),
      new Match(
        "06.06.2002",
        stage.group.a,
        ["France", "Uruguay"],
        [[0, 0], [], []],
        [],
        [],
        [],
        [],
        stadiums.SouthKorea.busan,
        "38 289"
      ),
      new Match(
        "11.06.2002",
        stage.group.a,
        ["Denmark", "France"],
        [[2, 0], [], []],
        ["D.Rommedahl", "J.D.Tomasson"],
        ["22", "67"],
        [],
        [],
        stadiums.SouthKorea.incheon,
        "48 100"
      ),
      new Match(
        "11.06.2002",
        stage.group.a,
        ["Senegal", "Uruguay"],
        [[3, 3], [], []],
        ["K.Fadiga", "Bouba Diop"],
        ["20(p)", "26, 38"],
        ["R.Morales", "D.Forlán", "A.Recoba"],
        ["46", "69", "88(p)"],
        stadiums.SouthKorea.suwon,
        "33 681"
      ),
      new Match(
        "02.06.2002",
        stage.group.b,
        ["Paraguay", "South Africa"],
        [[2, 2], [], []],
        ["R.Santa Cruz", "F.J. Arce Rolón"],
        ["39", "55"],
        ["T.Mokoena", "Q.Fortune"],
        ["63", "90+1(p)"],
        stadiums.SouthKorea.busan,
        "25 186"
      ),
      new Match(
        "02.06.2002",
        stage.group.b,
        ["Spain", "Slovenia"],
        [[3, 1], [], []],
        ["Raul", "J.Carlos Valerón", "F.Hierro"],
        ["44", "74", "87(p)"],
        ["S.Cimirotič"],
        ["82"],
        stadiums.SouthKorea.gwangju,
        "28 598"
      ),
      new Match(
        "07.06.2002",
        stage.group.b,
        ["Spain", "Paraguay"],
        [[3, 1], [], []],
        ["F.Morientes", "F.Hierro"],
        ["53, 69", "83(p)"],
        ["C.Puyol"],
        ["10(o.g.)"],
        stadiums.SouthKorea.jeonju,
        "24 000"
      ),
      new Match(
        "08.06.2002",
        stage.group.b,
        ["South Africa", "Slovenia"],
        [[1, 0], [], []],
        ["S.Nomvethe"],
        ["4"],
        [],
        [],
        stadiums.SouthKorea.daegu,
        "47 226"
      ),
      new Match(
        "12.06.2002",
        stage.group.b,
        ["Spain", "South Africa"],
        [[3, 2], [], []],
        ["Raul", "G.Mendieta"],
        ["4, 56", "45+1"],
        ["B.McCarthy", "L.Radebe"],
        ["31", "53"],
        stadiums.SouthKorea.daejeon,
        "31 024"
      ),
      new Match(
        "12.06.2002",
        stage.group.b,
        ["Paraguay", "Slovenia"],
        [[3, 1], [], []],
        ["N.Cuevas", "J.Campos"],
        ["65, 84", "73"],
        ["M.Ačimovič"],
        ["45+1"],
        stadiums.SouthKorea.jeju,
        "30 176"
      ),
      new Match(
        "03.06.2002",
        stage.group.c,
        ["Brazil", "Turkey"],
        [[2, 1], [], []],
        ["Ronaldo", "Rivaldo"],
        ["50", "87(p)"],
        ["Hasan Şaş"],
        ["45+2"],
        stadiums.SouthKorea.ulsan,
        "33 842"
      ),
      new Match(
        "04.06.2002",
        stage.group.c,
        ["Costa Rica", "China"],
        [[2, 0], [], []],
        ["R.Gomez", "M.Wright"],
        ["61", "65"],
        [],
        [],
        stadiums.SouthKorea.gwangju,
        "27 217"
      ),
      new Match(
        "08.06.2002",
        stage.group.c,
        ["Brazil", "China"],
        [[4, 0], [], []],
        ["Roberto Carlos", "Rivaldo", "Ronaldinho", "Ronaldo"],
        ["15", "32", "45(p)", "55"],
        [],
        [],
        stadiums.SouthKorea.jeju,
        "36 750"
      ),
      new Match(
        "09.06.2002",
        stage.group.c,
        ["Costa Rica", "Turkey"],
        [[1, 1], [], []],
        ["W.Parks"],
        ["86"],
        ["Emre Belözoglu"],
        ["56"],
        stadiums.SouthKorea.incheon,
        "42 299"
      ),
      new Match(
        "13.06.2002",
        stage.group.c,
        ["Brazil", "Costa Rica"],
        [[5, 2], [], []],
        ["Ronaldo", "Edmilson", "Rivaldo", "Júnior"],
        ["10, 13", "38", "62", "64"],
        ["P.Wanchope", "R.Gómez"],
        ["39", "56"],
        stadiums.SouthKorea.suwon,
        "38 524"
      ),
      new Match(
        "13.06.2002",
        stage.group.c,
        ["Turkey", "China"],
        [[3, 0], [], []],
        ["Hasan Şaş", "Bulent Korkmaz", "Ü.Davala"],
        ["6", "9", "62", "85"],
        [],
        [],
        stadiums.SouthKorea.seoul,
        "43 605"
      ),
      new Match(
        "04.06.2002",
        stage.group.d,
        ["Korea Republic", "Poland"],
        [[2, 0], [], []],
        ["Hwang Sun-hong", "Yoo Sang-chul"],
        ["26", "53"],
        [],
        [],
        stadiums.SouthKorea.busan,
        "48 760"
      ),
      new Match(
        "05.06.2002",
        stage.group.d,
        ["United States", "Portugal"],
        [[3, 2], [], []],
        ["J.O'Brien", "J.Costa", "B.McBride"],
        ["4", "29(o.g.)", "36"],
        ["Beto", "J.Agoos"],
        ["39", "71(o.g.)"],
        stadiums.SouthKorea.suwon,
        "37 306"
      ),
      new Match(
        "10.06.2002",
        stage.group.d,
        ["Korea Republic", "United States"],
        [[1, 1], [], []],
        ["Ahn Jung-hwan"],
        ["78"],
        ["C.Mathis"],
        ["24"],
        stadiums.SouthKorea.daegu,
        "60 778"
      ),
      new Match(
        "10.06.2002",
        stage.group.d,
        ["Portugal", "Poland"],
        [[4, 0], [], []],
        ["Pedro Pauleta", "Rui Costa"],
        ["14, 65, 77", "88"],
        [],
        [],
        stadiums.SouthKorea.jeonju,
        "31 000"
      ),
      new Match(
        "14.06.2002",
        stage.group.d,
        ["Korea Republic", "Portugal"],
        [[1, 0], [], []],
        ["Park Ji-sung"],
        ["70"],
        [],
        [],
        stadiums.SouthKorea.incheon,
        "50 239"
      ),
      new Match(
        "14.06.2002",
        stage.group.d,
        ["Poland", "United States"],
        [[3, 1], [], []],
        ["E.Olisadebe", "P.Kryszałowicz", "M.Żewłakow"],
        ["3", "5", "66"],
        ["L.Donovan"],
        ["83"],
        stadiums.SouthKorea.daejeon,
        "26 482"
      ),
      new Match(
        "01.06.2002",
        stage.group.e,
        ["Ireland", "Cameroon"],
        [[1, 1], [], []],
        ["M.Holland"],
        ["52"],
        ["H.M'Boma"],
        ["39"],
        stadiums.Japan.niigata,
        "33 679"
      ),
      new Match(
        "01.06.2002",
        stage.group.e,
        ["Germany", "Saudi Arabia"],
        [[8, 0], [], []],
        ["M.Klose", "M.Ballack", "C.Jancker", "T.Linke", "O.Bierhoff", "B.Schneider"],
        ["20, 25, 70", "40", "45+1", "73", "84", "90+1"],
        [],
        [],
        stadiums.Japan.sapporo,
        "32 218"
      ),
      new Match(
        "05.06.2002",
        stage.group.e,
        ["Germany", "Ireland"],
        [[1, 1], [], []],
        ["M.Klose"],
        ["19"],
        ["Robbie Keane"],
        ["90+2"],
        stadiums.Japan.kashima,
        "35 854"
      ),
      new Match(
        "06.06.2002",
        stage.group.e,
        ["Cameroon", "Saudi Arabia"],
        [[1, 0], [], []],
        ["S.Eto'o"],
        ["66"],
        [],
        [],
        stadiums.Japan.saitama,
        "52 328"
      ),
      new Match(
        "11.06.2002",
        stage.group.e,
        ["Germany", "Cameroon"],
        [[2, 0], [], []],
        ["M.Bode", "M.Klose"],
        ["50", "79"],
        [],
        [],
        stadiums.Japan.shizuoka,
        "47 085"
      ),
      new Match(
        "11.06.2002",
        stage.group.e,
        ["Ireland", "Saudi Arabia"],
        [[3, 0], [], []],
        ["Robbie Keane", "G.Breen", "D.Duff"],
        ["7", "61", "87"],
        [],
        [],
        stadiums.Japan.yokohama,
        "65 320"
      ),
      new Match(
        "02.06.2002",
        stage.group.f,
        ["Argentina", "Nigeria"],
        [[1, 0], [], []],
        ["G.Batistuta"],
        ["63"],
        [],
        [],
        stadiums.Japan.kashima,
        "34 050"
      ),
      new Match(
        "02.06.2002",
        stage.group.f,
        ["England", "Sweden"],
        [[1, 1], [], []],
        ["Sol Campbell"],
        ["63"],
        ["N.Alexandersson"],
        ["59"],
        stadiums.Japan.saitama,
        "52 721"
      ),
      new Match(
        "07.06.2002",
        stage.group.f,
        ["Sweden", "Nigeria"],
        [[2, 1], [], []],
        ["H.Larsson"],
        ["35, 63(p)"],
        ["J.Aghahowa"],
        ["27"],
        stadiums.Japan.kobe,
        "36 194"
      ),
      new Match(
        "07.06.2002",
        stage.group.f,
        ["England", "Argentina"],
        [[1, 0], [], []],
        ["D.Beckham"],
        ["44(p)"],
        [],
        [],
        stadiums.Japan.sapporo,
        "35 927"
      ),
      new Match(
        "12.06.2002",
        stage.group.f,
        ["Sweden", "Argentina"],
        [[1, 1], [], []],
        ["A.Svensson"],
        ["59"],
        ["H.Crespo"],
        ["88"],
        stadiums.Japan.miyagi,
        "45 777"
      ),
      new Match(
        "12.06.2002",
        stage.group.f,
        ["Nigeria", "England"],
        [[0, 0], [], []],
        [],
        [],
        [],
        [],
        stadiums.Japan.nagai,
        "44 864"
      ),
      new Match(
        "03.06.2002",
        stage.group.g,
        ["Mexico", "Croatia"],
        [[1, 0], [], []],
        ["Cuauhtémoc Blanco"],
        ["60(p)"],
        [],
        [],
        stadiums.Japan.niigata,
        "32 239"
      ),
      new Match(
        "03.06.2002",
        stage.group.g,
        ["Italy", "Ecuador"],
        [[2, 0], [], []],
        ["C.Vieri"],
        ["7, 27"],
        [],
        [],
        stadiums.Japan.sapporo,
        "31 081"
      ),
      new Match(
        "08.06.2002",
        stage.group.g,
        ["Croatia", "Italy"],
        [[2, 1], [], []],
        ["I.Olić", "M.Rapaić"],
        ["73", "76"],
        ["C.Vieri"],
        ["55"],
        stadiums.Japan.kashima,
        "36 472"
      ),
      new Match(
        "09.06.2002",
        stage.group.g,
        ["Mexico", "Ecuador"],
        [[2, 1], [], []],
        ["J.Borgetti", "Gerardo Torrado"],
        ["28", "57"],
        ["A.Delgado"],
        ["5"],
        stadiums.Japan.miyagi,
        "45 610"
      ),
      new Match(
        "13.06.2002",
        stage.group.g,
        ["Mexico", "Italy"],
        [[1, 1], [], []],
        ["J.Borgetti"],
        ["34"],
        ["A.Del Piero"],
        ["85"],
        stadiums.Japan.oita,
        "39 291"
      ),
      new Match(
        "13.06.2002",
        stage.group.g,
        ["Ecuador", "Croatia"],
        [[1, 0], [], []],
        ["É.Méndez"],
        ["48"],
        [],
        [],
        stadiums.Japan.yokohama,
        "65 862"
      ),
      new Match(
        "04.06.2002",
        stage.group.h,
        ["Japan", "Belgium"],
        [[2, 2], [], []],
        ["T.Suzuki", "J.Inamoto"],
        ["59", "67"],
        ["M.Wilmots", "P.Van der Heyden"],
        ["57", "75"],
        stadiums.Japan.saitama,
        "55 256"
      ),
      new Match(
        "05.06.2002",
        stage.group.h,
        ["Russia", "Tunisia"],
        [[2, 0], [], []],
        ["Y.Titov", "V.Karpin"],
        ["59", "64(p)"],
        [],
        [],
        stadiums.Japan.kobe,
        "30 957"
      ),
      new Match(
        "09.06.2002",
        stage.group.h,
        ["Japan", "Russia"],
        [[1, 0], [], []],
        ["J.Inamoto"],
        ["51"],
        [],
        [],
        stadiums.Japan.yokohama,
        "66 108"
      ),
      new Match(
        "10.06.2002",
        stage.group.h,
        ["Tunisia", "Belgium"],
        [[1, 1], [], []],
        ["R.Bouzaiene"],
        ["17"],
        ["M.Wilmots"],
        ["13"],
        stadiums.Japan.oita,
        "39 700"
      ),
      new Match(
        "14.06.2002",
        stage.group.h,
        ["Japan", "Tunisia"],
        [[2, 0], [], []],
        ["H.Morishima", "H.Nakata"],
        ["48", "75"],
        [],
        [],
        stadiums.Japan.nagai,
        "45 213"
      ),
      new Match(
        "14.06.2002",
        stage.group.h,
        ["Belgium", "Russia"],
        [[3, 2], [], []],
        ["J.Walem", "W.Sonck", "M.Wilmots"],
        ["7", "78", '82'],
        ["V.Beschastnykh", "D.Sychev"],
        ["52", "88"],
        stadiums.Japan.shizuoka,
        "46 640"
      ),
      new Match(
        "15.06.2002",
        stage[1_8],
        ["Germany", "Paraguay"],
        [[1, 0], [], []],
        ["O.Neuville"],
        ["88"],
        [],
        [],
        stadiums.SouthKorea.jeju,
        "25 176"
      ),
      new Match(
        "15.06.2002",
        stage[1_8],
        ["England", "Denmark"],
        [[3, 0], [], []],
        ["R.Ferdinand", "M.Owen", "E.Heskey"],
        ["5", "22", "44"],
        [],
        [],
        stadiums.Japan.niigata,
        "40 582"
      ),
      new Match(
        "16.06.2002",
        stage[1_8],
        ["Senegal", "Sweden"],
        [[1, 1], [1, 0], []],
        ["H.Camara"],
        ["37", "104"],
        ["H.Larsson"],
        ["11"],
        stadiums.Japan.oita,
        "39 747"
      ),
      new Match(
        "16.06.2002",
        stage[1_8],
        ["Spain", "Ireland"],
        [[1, 1], [0, 0], [3, 2]],
        ["F.Morientes"],
        ["8"],
        ["Robbie Keane"],
        ["90(pen)"],
        stadiums.SouthKorea.suwon,
        "38 926"
      ),
      new Match(
        "17.06.2002",
        stage[1_8],
        ["United States", "Mexico"],
        [[2, 0], [], []],
        ["B.McBride", "L.Donovan"],
        ["8", "65"],
        [],
        [],
        stadiums.SouthKorea.jeonju,
        "36 380"
      ),
      new Match(
        "17.06.2002",
        stage[1_8],
        ["Brazil", "Belgium"],
        [[2, 0], [], []],
        ["Rivaldo", "Ronaldo"],
        ["67", "87"],
        [],
        [],
        stadiums.Japan.kobe,
        "40 440"
      ),
      new Match(
        "18.06.2002",
        stage[1_8],
        ["Turkey", "Japan"],
        [[1, 0], [], []],
        ["Ümit Davala"],
        ["12"],
        [],
        [],
        stadiums.Japan.miyagi,
        "45 666"
      ),
      new Match(
        "18.06.2002",
        stage[1_8],
        ["Korea Republic", "Italy"],
        [[1, 1], [1, 0], []],
        ["Seol Ki-Hyeon", "Ahn Jung-Hwan"],
        ["88", "117"],
        ["C.Vieri"],
        ["18"],
        stadiums.SouthKorea.daejeon,
        "38 588"
      ),
      new Match(
        "21.06.2002",
        stage[1_4],
        ["Brazil", "England"],
        [[2, 1], [], []],
        ["Rivaldo", "Ronaldinho"],
        ["45+2", '50'],
        ["M.Owen"],
        ["23"],
        stadiums.Japan.shizuoka,
        "47 436"
      ),
      new Match(
        "21.06.2002",
        stage[1_4],
        ["Germany", "United States"],
        [[1, 0], [], []],
        ["M.Ballack"],
        ["39"],
        [],
        [],
        stadiums.SouthKorea.ulsan,
        "37 337"
      ),
      new Match(
        "22.06.2002",
        stage[1_4],
        ["Korea Republic", "Spain"],
        [[0, 0], [0, 0], [5, 3]],
        [],
        [],
        [],
        [],
        stadiums.SouthKorea.gwangju,
        "42 114"
      ),
      new Match(
        "22.06.2002",
        stage[1_4],
        ["Turkey", "Senegal"],
        [[0, 0], [1, 0], []],
        ["Ilhan Mansiz"],
        ["94"],
        [],
        [],
        stadiums.Japan.nagai,
        "44 233"
      ),
      new Match(
        "25.06.2002",
        stage[1_2],
        ["Germany", "Korea Republic"],
        [[1, 0], [], []],
        ["M.Ballack"],
        ["75"],
        [],
        [],
        stadiums.SouthKorea.seoul,
        "65 256"
      ),
      new Match(
        "26.06.2002",
        stage[1_2],
        ["Brazil", "Turkey"],
        [[1, 0], [], []],
        ["Ronaldo"],
        ["49"],
        [],
        [],
        stadiums.Japan.saitama,
        "61 058"
      ),
      new Match(
        "29.06.2002",
        stage.place3,
        ["Turkey", "Korea Republic"],
        [[3, 2], [], []],
        ["Hakan Sukur", 'Ilhan Mansiz'],
        ["1", "13, 32"],
        ["Lee Eul-yong", "Song Chong-gug"],
        ["9", "90+3"],
        stadiums.SouthKorea.daegu,
        "63 483"
      ),
      new Match(
        "30.06.2002",
        stage.final,
        ["Brazil", "Germany"],
        [[2, 0], [], []],
        ["Ronaldo"],
        ["67, 79"],
        [],
        [],
        stadiums.Japan.yokohama,
        "69 029"
      ),
    ],
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
