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
import { WorldCupData } from "./type-worldCupData";

import backgroundFWC1930_1 from "./../../assets/backgroundWC/1930-1.png";
import backgroundFWC1930_2 from "./../../assets/backgroundWC/1930-2.png";
import backgroundFWC1934_2 from "./../../assets/backgroundWC/1934-2.png";

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

export const worldCupData: WorldCupData = {
  1930: {
    id: "1-1930-FWC",
    title: "1930 FIFA World Cup",
    date: "13-30 July",
    icon: iconWorldCup1930,
    background: [backgroundFWC1930_1, backgroundFWC1930_2],
    hostCountry: ["Uruguay"],
    finalStage: [
      {
        id: "1-1930",
        date: "13.07.1930",
        stage: "group 1",
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
          title: "Estadio Pocitos",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "4 444",
        },
      },
      {
        id: "2-1930",
        date: "13.07.1930",
        stage: "group 4",
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
          title: "Estadio Parque Central",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "18 346",
        },
      },
      {
        id: "3-1930",
        date: "14.07.1930",
        stage: "group 2",
        teams: ["Yugoslavia", "Brazil"],
        score: [[2, 1], [], []],
        goals: [
          { playersScoredGoal: ["Tirnanić", "Bek"], timeGoals: ["21", "30"] },
          { playersScoredGoal: ["Preguinho"], timeGoals: ["62"] },
        ],
        stadium: {
          title: "Estadio Parque Central",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "24 059",
        },
      },
      {
        id: "4-1930",
        date: "14.07.1930",
        stage: "group 3",
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
          title: "Estadio Pocitos",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "2 549",
        },
      },
      {
        id: "5-1930",
        date: "15.07.1930",
        stage: "group 1",
        teams: ["Argentina", "France"],
        score: [[1, 0], [], []],
        goals: [
          { playersScoredGoal: ["Monti"], timeGoals: ["81"] },
          { playersScoredGoal: [], timeGoals: [] },
        ],
        stadium: {
          title: "Estadio Parque Central",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "23 409",
        },
      },
      {
        id: "6-1930",
        date: "16.07.1930",
        stage: "group 1",
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
          title: "Estadio Parque Central",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "9 249",
        },
      },
      {
        id: "7-1930",
        date: "17.07.1930",
        stage: "group 2",
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
          title: "Estadio Parque Central",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "18 306",
        },
      },
      {
        id: "8-1930",
        date: "17.07.1930",
        stage: "group 4",
        teams: ["United States", "Paraguay"],
        score: [[3, 0], [], []],
        goals: [
          { playersScoredGoal: ["Patenaude"], timeGoals: ["10, 15, 50"] },
          { playersScoredGoal: [], timeGoals: [] },
        ],
        stadium: {
          title: "Estadio Parque Central",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "18 306",
        },
      },
      {
        id: "9-1930",
        date: "18.07.1930",
        stage: "group 3",
        teams: ["Uruguay", "Peru"],
        score: [[1, 0], [], []],
        goals: [
          { playersScoredGoal: ["Vargas Peña"], timeGoals: ["40"] },
          { playersScoredGoal: [], timeGoals: [] },
        ],
        stadium: {
          title: "Estadio Centenario",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "57 735",
        },
      },
      {
        id: "10-1930",
        date: "19.07.1930",
        stage: "group 1",
        teams: ["Chile", "France"],
        score: [[1, 0], [], []],
        goals: [
          { playersScoredGoal: ["Subiabre"], timeGoals: ["67"] },
          { playersScoredGoal: [], timeGoals: [] },
        ],
        stadium: {
          title: "Estadio Centenario",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "2 000",
        },
      },
      {
        id: "11-1930",
        date: "19.07.1930",
        stage: "group 1",
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
          title: "Estadio Centenario",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "42 100",
        },
      },
      {
        id: "12-1930",
        date: "20.07.1930",
        stage: "group 2",
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
          title: "Estadio Centenario",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "25 466",
        },
      },
      {
        id: "13-1930",
        date: "20.07.1930",
        stage: "group 4",
        teams: ["Paraguay", "Belgium"],
        score: [[1, 0], [], []],
        goals: [
          { playersScoredGoal: ["Vargas Peña"], timeGoals: ["40"] },
          { playersScoredGoal: [], timeGoals: [] },
        ],
        stadium: {
          title: "Estadio Centenario",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "12 000",
        },
      },
      {
        id: "14-1930",
        date: "21.07.1930",
        stage: "group 3",
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
          title: "Estadio Centenario",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "70 022",
        },
      },
      {
        id: "15-1930",
        date: "22.07.1930",
        stage: "group 1",
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
          title: "Estadio Centenario",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "41 459",
        },
      },
      {
        id: "16-1930",
        date: "26.07.1930",
        stage: "2:1/2 semi-final",
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
          title: "Estadio Centenario",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "72 886",
        },
      },
      {
        id: "17-1930",
        date: "27.07.1930",
        stage: "2:1/2 semi-final",
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
          title: "Estadio Centenario",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "79 867",
        },
      },
      {
        id: "18-1930",
        date: "30.07.1930",
        stage: "1:final",
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
          title: "Estadio Centenario",
          city: "Montevideo",
          country: "Uruguay",
          attendance: "68 346",
        },
      },
    ],
    qualification: [],
  },
  1934: {
    id: "2-1934-FWC",
    title: "1934 FIFA World Cup",
    date: "27 May - 10 June",
    icon: iconWorldCup1934,
    background: [backgroundFWC1934_2],
    hostCountry: ["Italy"],
    finalStage: [
      {
        id: "1-1934",
        date: "27.05.1934",
        stage: "5:1/8 round of 16",
        teams: ["Spain", "Brazil"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Iraragorri", "Lángara"],
            timeGoals: ["18(p), 25", "29"],
          },
          { 
            playersScoredGoal: ["Leônidas"], 
            timeGoals: ["55"] 
          },
        ],
        stadium: {
          title: "Stadio Luigi Ferraris",
          city: "Genoa",
          country: "Italy",
          attendance: "21 000",
        },
      },
      {
        id: "2-1934",
        date: "27.05.1934",
        stage: "5:1/8 round of 16",
        teams: ["Hungary", "Egypt"],
        score: [[4, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Teleki", "Toldi", "Vincze"],
            timeGoals: ["11", "31, 61", "53"],
          },
          { 
            playersScoredGoal: ["Fawzi"], 
            timeGoals: ["35, 39"] 
          },
        ],
        stadium: {
          title: "Stadio Giorgio Ascarelli",
          city: "Naples",
          country: "Italy",
          attendance: "9 000",
        },
      },
      {
        id: "3-1934",
        date: "27.05.1934",
        stage: "5:1/8 round of 16",
        teams: ["Switzerland", "Netherlands"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Kielholz", "Abegglen"],
            timeGoals: ["7, 43", "66"],
          },
          { 
            playersScoredGoal: ["Smit", "Vente"], 
            timeGoals: ["29", "69"] 
          },
        ],
        stadium: {
          title: "Stadio San Siro",
          city: "Milan",
          country: "Italy",
          attendance: "33 000",
        },
      },
      {
        id: "4-1934",
        date: "27.05.1934",
        stage: "5:1/8 round of 16",
        teams: ["Italy", "United States"],
        score: [[7, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Schiavio", "Orsi", "Ferrari", "Meazza"],
            timeGoals: ["18, 29, 64", "20, 69", "63", "90"],
          },
          { 
            playersScoredGoal: ["Donelli"], 
            timeGoals: ["57"] 
          },
        ],
        stadium: {
          title: "Stadio Nazionale PNF",
          city: "Rome",
          country: "Italy",
          attendance: "25 000",
        },
      },
      {
        id: "5-1934",
        date: "27.05.1934",
        stage: "5:1/8 round of 16",
        teams: ["Czechoslovakia", "Romania"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Puč", "Nejedlý"],
            timeGoals: ["50", "67"],
          },
          { 
            playersScoredGoal: ["Dobay"], 
            timeGoals: ["11"] 
          },
        ],
        stadium: {
          title: "Stadio Littorio",
          city: "Trieste",
          country: "Italy",
          attendance: "9 000",
        },
      },
      {
        id: "6-1934",
        date: "27.05.1934",
        stage: "5:1/8 round of 16",
        teams: ["Sweden", "Argentina"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Jonasson", "Kroon"],
            timeGoals: ["9", "79"],
          },
          { 
            playersScoredGoal: ["Belis", "Galateo"], 
            timeGoals: ["4", "48"] 
          },
        ],
        stadium: {
          title: "Stadio Littoriale",
          city: "Bologna",
          country: "Italy",
          attendance: "14 000",
        },
      },
      {
        id: "7-1934",
        date: "27.05.1934",
        stage: "5:1/8 round of 16",
        teams: ["Austria", "France"],
        score: [[1, 1], [2, 1], []],
        goals: [
          {
            playersScoredGoal: ["Sindelar", "Schall", "Bican"],
            timeGoals: ["44", "93", "109"],
          },
          { 
            playersScoredGoal: ["Nicolas", "Verriest"], 
            timeGoals: ["18", "116(p)"] 
          },
        ],
        stadium: {
          title: "Stadio Benito Mussolini",
          city: "Turin",
          country: "Italy",
          attendance: "16 000",
        },
      },
      {
        id: "8-1934",
        date: "27.05.1934",
        stage: "5:1/8 round of 16",
        teams: ["Germany", "Belgium"],
        score: [[5, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Kobierski", "Siffling", "Conen"],
            timeGoals: ["25", "49", "66, 70, 87"],
          },
          { 
            playersScoredGoal: ["Voorhoof"], 
            timeGoals: ["29, 43"] 
          },
        ],
        stadium: {
          title: "Stadio Giovanni Berta",
          city: "Florence",
          country: "Italy",
          attendance: "8 000",
        },
      },
      {
        id: "9-1934",
        date: "31.05.1934",
        stage: "4:1/4 quarter-finals",
        teams: ["Austria", "Hungary"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Horvath", "Zischek"],
            timeGoals: ["8", "51"],
          },
          { 
            playersScoredGoal: ["Sárosi"], 
            timeGoals: ["60(p)"] 
          },
        ],
        stadium: {
          title: "Stadio Littoriale",
          city: "Bologna",
          country: "Italy",
          attendance: "23 000",
        },
      },
      {
        id: "10-1934",
        date: "31.05.1934",
        stage: "4:1/4 quarter-finals",
        teams: ["Italy", "Spain"],
        score: [[1, 1], [0, 0], []],
        goals: [
          {
            playersScoredGoal: ["Ferrari"],
            timeGoals: ["44"],
          },
          { 
            playersScoredGoal: ["Regueiro"], 
            timeGoals: ["30"] 
          },
        ],
        stadium: {
          title: "Stadio Giovanni Berta",
          city: "Florence",
          country: "Italy",
          attendance: "35 000",
        },
      },
      {
        id: "11-1934",
        date: "31.05.1934",
        stage: "4:1/4 quarter-finals",
        teams: ["Germany", "Sweden"],
        score: [[2, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Hohmann"],
            timeGoals: ["60, 63"],
          },
          { 
            playersScoredGoal: ["Dunker"], 
            timeGoals: ["82"] 
          },
        ],
        stadium: {
          title: "Stadio San Siro",
          city: "Milan",
          country: "Italy",
          attendance: "3 000",
        },
      },
      {
        id: "12-1934",
        date: "31.05.1934",
        stage: "4:1/4 quarter-finals",
        teams: ["Czechoslovakia", "Switzerland"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Svoboda", "Sobotka", "Nejedlý"],
            timeGoals: ["24", "49", "82"],
          },
          { 
            playersScoredGoal: ["Kielholz", "Jäggi"], 
            timeGoals: ["18", "78"] 
          },
        ],
        stadium: {
          title: "Stadio Benito Mussolini",
          city: "Turin",
          country: "Italy",
          attendance: "12 000",
        },
      },
      {
        id: "13-1934",
        date: "01.06.1934 REPLAY",
        stage: "4:1/4 quarter-finals",
        teams: ["Italy", "Spain"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Meazza"],
            timeGoals: ["11"],
          },
          { 
            playersScoredGoal: [], 
            timeGoals: [] 
          },
        ],
        stadium: {
          title: "Stadio Giovanni Berta",
          city: "Florence",
          country: "Italy",
          attendance: "43 000",
        },
      },
      {
        id: "14-1934",
        date: "03.06.1934",
        stage: "3:1/2 semi-finals",
        teams: ["Italy", "Austria"],
        score: [[1, 0], [], []],
        goals: [
          {
            playersScoredGoal: ["Guaita"],
            timeGoals: ["19"],
          },
          { 
            playersScoredGoal: [], 
            timeGoals: [] 
          },
        ],
        stadium: {
          title: "Stadio San Siro",
          city: "Milan",
          country: "Italy",
          attendance: "35 000",
        },
      },
      {
        id: "15-1934",
        date: "03.06.1934",
        stage: "3:1/2 semi-finals",
        teams: ["Czechoslovakia", "Germany"],
        score: [[3, 1], [], []],
        goals: [
          {
            playersScoredGoal: ["Nejedlý"],
            timeGoals: ["21, 69, 80"],
          },
          { 
            playersScoredGoal: ["Noack"], 
            timeGoals: ["62"] 
          },
        ],
        stadium: {
          title: "Stadio Nazionale PNF",
          city: "Rome",
          country: "Italy",
          attendance: "15 000",
        },
      },
      {
        id: "16-1934",
        date: "07.06.1934",
        stage: "2:third place play-off",
        teams: ["Germany", "Austria"],
        score: [[3, 2], [], []],
        goals: [
          {
            playersScoredGoal: ["Lehner", "Conen"],
            timeGoals: ["1, 42", "27"],
          },
          { 
            playersScoredGoal: ["Horvath", "Sesta"], 
            timeGoals: ["28", "54"] 
          },
        ],
        stadium: {
          title: "Stadio Giorgio Ascarelli",
          city: "Naples",
          country: "Italy",
          attendance: "7 000",
        },
      },
      {
        id: "17-1934",
        date: "07.06.1934",
        stage: "1:final",
        teams: ["Italy", "Czechoslovakia"],
        score: [[1, 1], [1, 0], []],
        goals: [
          {
            playersScoredGoal: ["Orsi", "Schiavio"],
            timeGoals: ["81", "95"],
          },
          { 
            playersScoredGoal: ["Puč"], 
            timeGoals: ["71"] 
          },
        ],
        stadium: {
          title: "Stadio Nazionale PNF",
          city: "Rome",
          country: "Italy",
          attendance: "55 000",
        },
      },
    ],
    qualification: [],
  },
  1938: {
    id: "3-1938-FWC",
    title: "1938 FIFA World Cup",
    date: "4-19 June",
    icon: iconWorldCup1938,
    background: [],
    hostCountry: ["France"],
    finalStage: [],
    qualification: [],
  },
  1950: {
    id: "4-1950-FWC",
    title: "1950 FIFA World Cup",
    date: "	24 June - 16 July",
    icon: iconWorldCup1950,
    background: [],
    hostCountry: ["Brazil"],
    finalStage: [],
    qualification: [],
  },
  1954: {
    id: "5-1954-FWC",
    title: "1954 FIFA World Cup",
    date: "16 June - 4 July",
    icon: iconWorldCup1954,
    background: [],
    hostCountry: ["Switzerland"],
    finalStage: [],
    qualification: [],
  },
  1958: {
    id: "6-1958-FWC",
    title: "1958 FIFA World Cup",
    date: "8-29 June",
    icon: iconWorldCup1958,
    background: [],
    hostCountry: ["Sweden"],
    finalStage: [],
    qualification: [],
  },
  1962: {
    id: "7-1962-FWC",
    title: "1962 FIFA World Cup",
    date: "30 May - 17 June",
    icon: iconWorldCup1962,
    background: [],
    hostCountry: ["Chile"],
    finalStage: [],
    qualification: [],
  },
  1966: {
    id: "8-1966-FWC",
    title: "1966 FIFA World Cup",
    date: "11-30 July",
    icon: iconWorldCup1966,
    background: [],
    hostCountry: ["England"],
    finalStage: [],
    qualification: [],
  },
  1970: {
    id: "9-1970-FWC",
    title: "1970 FIFA World Cup",
    date: "31 May - 21 June",
    icon: iconWorldCup1970,
    background: [],
    hostCountry: ["Mexico"],
    finalStage: [],
    qualification: [],
  },
  1974: {
    id: "10-1974-FWC",
    title: "1974 FIFA World Cup",
    date: "13 June - 7 July",
    icon: iconWorldCup1974,
    background: [],
    hostCountry: ["Germany"],
    finalStage: [],
    qualification: [],
  },
  1978: {
    id: "11-1978-FWC",
    title: "1978 FIFA World Cup",
    date: "1-25 June",
    icon: iconWorldCup1978,
    background: [],
    hostCountry: ["Argentina"],
    finalStage: [],
    qualification: [],
  },
  1982: {
    id: "12-1982-FWC",
    title: "1982 FIFA World Cup",
    date: "13 June - 11 July",
    icon: iconWorldCup1982,
    background: [],
    hostCountry: ["Spain"],
    finalStage: [],
    qualification: [],
  },
  1986: {
    id: "13-1986-FWC",
    title: "1986 FIFA World Cup",
    date: "31 May - 29 June",
    icon: iconWorldCup1986,
    background: [],
    hostCountry: ["Mexico"],
    finalStage: [],
    qualification: [],
  },
  1990: {
    id: "14-1990-FWC",
    title: "1990 FIFA World Cup",
    date: "	8June - 8 July",
    icon: iconWorldCup1990,
    background: [],
    hostCountry: ["Italy"],
    finalStage: [],
    qualification: [],
  },
  1994: {
    id: "15-1994-FWC",
    title: "1994 FIFA World Cup",
    date: "June 17 - July 17",
    icon: iconWorldCup1994,
    background: [],
    hostCountry: ["United States"],
    finalStage: [],
    qualification: [],
  },
  1998: {
    id: "16-1998-FWC",
    title: "1998 FIFA World Cup",
    date: "10 June - 12 July",
    icon: iconWorldCup1998,
    background: [],
    hostCountry: ["France"],
    finalStage: [],
    qualification: [],
  },
  2002: {
    id: "17-2002-FWC",
    title: "2002 FIFA World Cup",
    date: "31 May - 30 June",
    icon: iconWorldCup2002,
    background: [],
    hostCountry: ["Korea Republic", "Japan"],
    finalStage: [],
    qualification: [],
  },
  2006: {
    id: "18-2006-FWC",
    title: "2006 FIFA World Cup",
    date: "9 June - 9 July",
    icon: iconWorldCup2006,
    background: [],
    hostCountry: ["Germany"],
    finalStage: [],
    qualification: [],
  },
  2010: {
    id: "19-2010-FWC",
    title: "2010 FIFA World Cup",
    date: "11 June - 11 July",
    icon: iconWorldCup2010,
    background: [],
    hostCountry: ["South Africa"],
    finalStage: [],
    qualification: [],
  },
  2014: {
    id: "20-2014-FWC",
    title: "2014 FIFA World Cup",
    date: "12 June - 13 July",
    icon: iconWorldCup2014,
    background: [],
    hostCountry: ["Brazil"],
    finalStage: [],
    qualification: [],
  },
  2018: {
    id: "21-2018-FWC",
    title: "2018 FIFA World Cup",
    date: "14 June - 15 July",
    icon: iconWorldCup2018,
    background: [],
    hostCountry: ["Russia"],
    finalStage: [],
    qualification: [],
  },
  2022: {
    id: "22-2022-FWC",
    title: "2022 FIFA World Cup",
    date: "20 November - 18 December",
    icon: iconWorldCup2022,
    background: [],
    hostCountry: ["Qatar"],
    finalStage: [],
    qualification: [],
  },
};
