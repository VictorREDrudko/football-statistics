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
import backgroundFWC1938_2 from "./../../assets/backgroundWC/1938-2.png";
import backgroundFWC1950_1 from "./../../assets/backgroundWC/1950-1.png";
import backgroundFWC1950_2 from "./../../assets/backgroundWC/1950-2.png";
import backgroundFWC1954_1 from "./../../assets/backgroundWC/1954-1.png";
import backgroundFWC1954_2 from "./../../assets/backgroundWC/1954-2.png";

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
            timeGoals: ["55"],
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
            timeGoals: ["35, 39"],
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
            timeGoals: ["29", "69"],
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
            timeGoals: ["57"],
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
            timeGoals: ["11"],
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
            timeGoals: ["4", "48"],
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
            timeGoals: ["18", "116(p)"],
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
            timeGoals: ["29, 43"],
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
            timeGoals: ["60(p)"],
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
            timeGoals: ["30"],
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
            timeGoals: ["82"],
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
            timeGoals: ["18", "78"],
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
            timeGoals: [],
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
            timeGoals: [],
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
            timeGoals: ["62"],
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
            timeGoals: ["28", "54"],
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
            timeGoals: ["71"],
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
    background: [backgroundFWC1938_2],
    hostCountry: ["France"],
    finalStage: [
      {
        id: "1-1938",
        date: "04.06.1938",
        stage: "5:1/8 round of 16",
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
          title: "Parc des Princes",
          city: "Paris",
          country: "France",
          attendance: "27 152",
        },
      },
      {
        id: "2-1938",
        date: "05.06.1938",
        stage: "5:1/8 round of 16",
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
          title: "Vélodrome Municipal",
          city: "Reims",
          country: "France",
          attendance: "9 000",
        },
      },
      {
        id: "0-1938",
        date: "05.06.1938",
        stage: "5:1/8 round of 16",
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
          title: "",
          city: "",
          country: "",
          attendance: "",
        },
      },
      {
        id: "3-1938",
        date: "05.06.1938",
        stage: "5:1/8 round of 16",
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
          title: "Stade du T.O.E.C.",
          city: "Toulouse",
          country: "France",
          attendance: "7 000",
        },
      },
      {
        id: "4-1938",
        date: "05.06.1938",
        stage: "5:1/8 round of 16",
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
          title: "Stade Olympique de Colombes",
          city: "Paris",
          country: "France",
          attendance: "30 454",
        },
      },
      {
        id: "5-1938",
        date: "05.06.1938",
        stage: "5:1/8 round of 16",
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
          title: "Stade Vélodrome",
          city: "Marseille",
          country: "France",
          attendance: "19 000",
        },
      },
      {
        id: "6-1938",
        date: "05.06.1938",
        stage: "5:1/8 round of 16",
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
          title: "Stade de la Meinau",
          city: "Strasbourg",
          country: "France",
          attendance: "13 452",
        },
      },
      {
        id: "7-1938",
        date: "05.06.1938",
        stage: "5:1/8 round of 16",
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
          title: "Stade municipal",
          city: "Le Havre",
          country: "France",
          attendance: "11 000",
        },
      },
      {
        id: "8-1938",
        date: "09.06.1938 REPLAY",
        stage: "5:1/8 round of 16",
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
          title: "Parc des Princes",
          city: "Paris",
          country: "France",
          attendance: "20 025",
        },
      },
      {
        id: "9-1938",
        date: "09.06.1938 REPLAY",
        stage: "5:1/8 round of 16",
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
          title: "Stade du T.O.E.C.",
          city: "Toulouse",
          country: "France",
          attendance: "8 000",
        },
      },
      {
        id: "10-1938",
        date: "12.06.1938",
        stage: "4:1/4 quarter-finals",
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
          title: "Stade Victor Boucquey",
          city: "Lille",
          country: "France",
          attendance: "15 000",
        },
      },
      {
        id: "11-1938",
        date: "12.06.1938",
        stage: "4:1/4 quarter-finals",
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
          title: "Stade du Fort Carré",
          city: "Antibes",
          country: "France",
          attendance: "7 000",
        },
      },
      {
        id: "12-1938",
        date: "12.06.1938",
        stage: "4:1/4 quarter-finals",
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
          title: "Stade Olympique de Colombes",
          city: "Paris",
          country: "France",
          attendance: "58 455",
        },
      },
      {
        id: "13-1938",
        date: "12.06.1938",
        stage: "4:1/4 quarter-finals",
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
          title: "Parc Lescure",
          city: "Bordeaux",
          country: "France",
          attendance: "22 021",
        },
      },
      {
        id: "14-1938",
        date: "14.06.1938 REPLAY",
        stage: "4:1/4 quarter-finals",
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
          title: "Parc Lescure",
          city: "Bordeaux",
          country: "France",
          attendance: "18 141",
        },
      },
      {
        id: "15-1938",
        date: "16.06.1938",
        stage: "3:1/2 semi-finals",
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
          title: "Parc des Princes",
          city: "Paris",
          country: "France",
          attendance: "20 000",
        },
      },
      {
        id: "16-1938",
        date: "16.06.1938",
        stage: "3:1/2 semi-finals",
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
          title: "Stade Vélodrome",
          city: "Marseille",
          country: "France",
          attendance: "33 000",
        },
      },
      {
        id: "17-1938",
        date: "19.06.1938",
        stage: "2:third place play-off",
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
          title: "Parc Lescure",
          city: "Bordeaux",
          country: "France",
          attendance: "12 000",
        },
      },
      {
        id: "18-1938",
        date: "19.06.1938",
        stage: "1:final",
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
          title: "Stade Olympique de Colombes",
          city: "Paris",
          country: "France",
          attendance: "45 000",
        },
      },
    ],
    qualification: [],
  },
  1950: {
    id: "4-1950-FWC",
    title: "1950 FIFA World Cup",
    date: "	24 June - 16 July",
    icon: iconWorldCup1950,
    background: [backgroundFWC1950_1, backgroundFWC1950_2],
    hostCountry: ["Brazil"],
    finalStage: [
      {
        id: "1-1950",
        date: "24.06.1950",
        stage: "group 1",
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
          title: "Estádio do Maracanã",
          city: "Rio de Janeiro",
          country: "Brazil",
          attendance: "81 649",
        },
      },
      {
        id: "2-1950",
        date: "25.06.1950",
        stage: "group 1",
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
          title: "Estádio Independência",
          city: "Belo Horizonte",
          country: "Brazil",
          attendance: "7 336",
        },
      },
      {
        id: "3-1950",
        date: "25.06.1950",
        stage: "group 2",
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
          title: "Estádio do Maracanã",
          city: "Rio de Janeiro",
          country: "Brazil",
          attendance: "29 703",
        },
      },
      {
        id: "4-1950",
        date: "25.06.1950",
        stage: "group 2",
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
          title: "Estádio Durival de Britto",
          city: "Curitiba",
          country: "Brazil",
          attendance: "9 511",
        },
      },
      {
        id: "5-1950",
        date: "25.06.1950",
        stage: "group 3",
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
          title: "Estádio Durival de Britto",
          city: "Curitiba",
          country: "Brazil",
          attendance: "36 502",
        },
      },
      {
        id: "6-1950",
        date: "28.06.1950",
        stage: "group 1",
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
          title: "Estádio do Pacaembu",
          city: "São Paulo",
          country: "Brazil",
          attendance: "42 032",
        },
      },
      {
        id: "7-1950",
        date: "28.06.1950",
        stage: "group 1",
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
          title: "Estádio dos Eucaliptos",
          city: "Porto Alegre",
          country: "Brazil",
          attendance: "11 078",
        },
      },
      {
        id: "8-1950",
        date: "29.06.1950",
        stage: "group 2",
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
          title: "Estádio do Maracanã",
          city: "Rio de Janeiro",
          country: "Brazil",
          attendance: "19 790",
        },
      },
      {
        id: "9-1950",
        date: "29.06.1950",
        stage: "group 2",
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
          title: "Estádio Independência",
          city: "Belo Horizonte",
          country: "Brazil",
          attendance: "10 151",
        },
      },
      {
        id: "10-1950",
        date: "29.06.1950",
        stage: "group 3",
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
          title: "Estádio Durival Britto",
          city: "Curitiba",
          country: "Brazil",
          attendance: "7 903",
        },
      },
      {
        id: "11-1950",
        date: "01.07.1950",
        stage: "group 1",
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
          title: "Estádio do Maracanã",
          city: "Rio de Janeiro",
          country: "Brazil",
          attendance: "142 429",
        },
      },
      {
        id: "12-1950",
        date: "02.07.1950",
        stage: "group 1",
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
          title: "Estádio dos Eucaliptos",
          city: "Porto Alegre",
          country: "Brazil",
          attendance: "3 580",
        },
      },
      {
        id: "13-1950",
        date: "02.07.1950",
        stage: "group 2",
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
          title: "Estádio do Maracanã",
          city: "Rio de Janeiro",
          country: "Brazil",
          attendance: "74 462",
        },
      },
      {
        id: "14-1950",
        date: "02.07.1950",
        stage: "group 2",
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
          title: "Estádio Ilha do Retiro",
          city: "Recife",
          country: "Brazil",
          attendance: "8 501",
        },
      },
      {
        id: "15-1950",
        date: "02.07.1950",
        stage: "group 3",
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
          title: "Estádio do Pacaembu",
          city: "São Paulo",
          country: "Brazil",
          attendance: "25 811",
        },
      },
      {
        id: "16-1950",
        date: "02.07.1950",
        stage: "group 4",
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
          title: "Estádio Independência",
          city: "Belo Horizonte",
          country: "Brazil",
          attendance: "5 284",
        },
      },
      {
        id: "17-1950",
        date: "09.07.1950",
        stage: "group Final round",
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
          title: "Estádio do Pacaembu",
          city: "São Paulo",
          country: "Brazil",
          attendance: "44 802",
        },
      },
      {
        id: "18-1950",
        date: "09.07.1950",
        stage: "group Final round",
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
          title: "Estádio do Maracanã",
          city: "Rio de Janeiro",
          country: "Brazil",
          attendance: "138 886",
        },
      },
      {
        id: "19-1950",
        date: "13.07.1950",
        stage: "group Final round",
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
          title: "Estádio do Maracanã",
          city: "Rio de Janeiro",
          country: "Brazil",
          attendance: "152 772",
        },
      },
      {
        id: "20-1950",
        date: "13.07.1950",
        stage: "group Final round",
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
          title: "Estádio do Pacaembu",
          city: "São Paulo",
          country: "Brazil",
          attendance: "7 987",
        },
      },
      {
        id: "21-1950",
        date: "16.07.1950",
        stage: "group Final round",
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
          title: "Estádio do Pacaembu",
          city: "São Paulo",
          country: "Brazil",
          attendance: "11 227",
        },
      },
      {
        id: "22-1950",
        date: "16.07.1950",
        stage: "group Final round",
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
          title: "Estádio do Maracanã",
          city: "Rio de Janeiro",
          country: "Brazil",
          attendance: "173 850",
        },
      },
    ],
    qualification: [],
  },
  1954: {
    id: "5-1954-FWC",
    title: "1954 FIFA World Cup",
    date: "16 June - 4 July",
    icon: iconWorldCup1954,
    background: [backgroundFWC1954_2, backgroundFWC1954_1],
    hostCountry: ["Switzerland"],
    finalStage: [
      {
        id: "1-1954",
        date: "16.06.1954",
        stage: "group 1",
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
          title: "Charmilles Stadium",
          city: "Geneva",
          country: "Switzerland",
          attendance: "13 470",
        },
      },
      {
        id: "2-1954",
        date: "16.06.1954",
        stage: "group 1",
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
          title: "Olympique de la Pontaise",
          city: "Lausanne",
          country: "Switzerland",
          attendance: "16 000",
        },
      },
      {
        id: "3-1954",
        date: "16.06.1954",
        stage: "group 3",
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
          title: "Wankdorf Stadium",
          city: "Bern",
          country: "Switzerland",
          attendance: "20 500",
        },
      },
      {
        id: "4-1954",
        date: "16.06.1954",
        stage: "group 3",
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
          title: "Hardturm Stadium",
          city: "Zürich",
          country: "Switzerland",
          attendance: "25 000",
        },
      },
      {
        id: "5-1954",
        date: "17.06.1954",
        stage: "group 2",
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
          title: "Wankdorf Stadium",
          city: "Bern",
          country: "Switzerland",
          attendance: "28 000",
        },
      },
      {
        id: "6-1954",
        date: "17.06.1954",
        stage: "group 2",
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
          title: "Hardturm Stadium",
          city: "Zürich",
          country: "Switzerland",
          attendance: "13 000",
        },
      },
      {
        id: "7-1954",
        date: "17.06.1954",
        stage: "group 4",
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
          title: "Olympique de la Pontaise",
          city: "Lausanne",
          country: "Switzerland",
          attendance: "40 749",
        },
      },
      {
        id: "8-1954",
        date: "17.06.1954",
        stage: "group 4",
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
          title: "St. Jakob Stadium",
          city: "Basel",
          country: "Switzerland",
          attendance: "14 000",
        },
      },
      {
        id: "9-1954",
        date: "19.06.1954",
        stage: "group 1",
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
          title: "Olympique de la Pontaise",
          city: "Lausanne",
          country: "Switzerland",
          attendance: "24 637",
        },
      },
      {
        id: "10-1954",
        date: "19.06.1954",
        stage: "group 1",
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
          title: "Charmilles Stadium",
          city: "Geneva",
          country: "Switzerland",
          attendance: "19 000",
        },
      },
      {
        id: "11-1954",
        date: "19.06.1954",
        stage: "group 3",
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
          title: "St. Jakob Stadium",
          city: "Basel",
          country: "Switzerland",
          attendance: "34 000",
        },
      },
      {
        id: "12-1954",
        date: "19.06.1954",
        stage: "group 3",
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
          title: "Hardturm Stadium",
          city: "Zürich",
          country: "Switzerland",
          attendance: "26 000",
        },
      },
      {
        id: "13-1954",
        date: "20.06.1954",
        stage: "group 2",
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
          title: "St. Jakob Stadium",
          city: "Basel",
          country: "Switzerland",
          attendance: "56 000",
        },
      },
      {
        id: "14-1954",
        date: "20.06.1954",
        stage: "group 2",
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
          title: "Charmilles Stadium",
          city: "Geneva",
          country: "Switzerland",
          attendance: "3 541",
        },
      },
      {
        id: "15-1954",
        date: "20.06.1954",
        stage: "group 4",
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
          title: "Cornaredo Stadium",
          city: "Lugano",
          country: "Switzerland",
          attendance: "24 000",
        },
      },
      {
        id: "16-1954",
        date: "20.06.1954",
        stage: "group 4",
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
          title: "Wankdorf Stadium",
          city: "Bern",
          country: "Switzerland",
          attendance: "43 119",
        },
      },
      {
        id: "17-1954",
        date: "23.06.1954",
        stage: "group 2",
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
          title: "Hardturm Stadium",
          city: "Zürich",
          country: "Switzerland",
          attendance: "17 000",
        },
      },
      {
        id: "18-1954",
        date: "23.06.1954",
        stage: "group 4",
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
          title: "St. Jakob Stadium",
          city: "Basel",
          country: "Switzerland",
          attendance: "28 655",
        },
      },
      {
        id: "19-1954",
        date: "26.06.1954",
        stage: "4:1/4 quarter-finals",
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
          title: "Stade Olympique de la Pontaise",
          city: "Lausanne",
          country: "Switzerland",
          attendance: "30 340",
        },
      },
      {
        id: "20-1954",
        date: "26.06.1954",
        stage: "4:1/4 quarter-finals",
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
          title: "St. Jakob Stadium",
          city: "Basel",
          country: "Switzerland",
          attendance: "28 000",
        },
      },
      {
        id: "21-1954",
        date: "27.06.1954",
        stage: "4:1/4 quarter-finals",
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
          title: "Charmilles Stadium",
          city: "Geneva",
          country: "Switzerland",
          attendance: "17 000",
        },
      },
      {
        id: "22-1954",
        date: "27.06.1954",
        stage: "4:1/4 quarter-finals",
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
          title: "Wankdorf Stadium",
          city: "Bern",
          country: "Switzerland",
          attendance: "40 000",
        },
      },
      {
        id: "23-1954",
        date: "30.06.1954",
        stage: "3:1/2 semi-finals",
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
          title: "St. Jakob Stadium",
          city: "Basel",
          country: "Switzerland",
          attendance: "58 000",
        },
      },
      {
        id: "24-1954",
        date: "30.06.1954",
        stage: "3:1/2 semi-finals",
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
          title: "Stade Olympique de la Pontaise",
          city: "Lausanne",
          country: "Switzerland",
          attendance: "45 000",
        },
      },
      {
        id: "25-1954",
        date: "03.07.1954",
        stage: "2:third place play-off",
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
          title: "Hardturm Stadium",
          city: "Zürich",
          country: "Switzerland",
          attendance: "32 000",
        },
      },
      {
        id: "26-1954",
        date: "03.07.1954",
        stage: "1:final",
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
          title: "Wankdorf Stadium",
          city: "Bern",
          country: "Switzerland",
          attendance: "62 500",
        },
      },
    ],
    qualification: [],
  },
  1958: {
    id: "6-1958-FWC",
    title: "1958 FIFA World Cup",
    date: "8-29 June",
    icon: iconWorldCup1958,
    background: [],
    hostCountry: ["Sweden"],
    finalStage: [
      {
        id: "1-1958",
        date: "08.06.1958",
        stage: "group 1",
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
          title: "Malmö Stadion",
          city: "Malmö",
          country: "Sweden",
          attendance: "31 156",
        },
      },
      {
        id: "1-1958",
        date: "08.06.1958",
        stage: "group 1",
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
          title: "Örjans Vall",
          city: "Halmstad",
          country: "Sweden",
          attendance: "10 647",
        },
      },
      {
        id: "1-1958",
        date: "11.06.1958",
        stage: "group 1",
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
          title: "Olympiastadion",
          city: "Helsingborg",
          country: "Sweden",
          attendance: "25 000",
        },
      },
      {
        id: "1-1958",
        date: "11.06.1958",
        stage: "group 1",
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
          title: "Örjans Vall",
          city: "Halmstad",
          country: "Sweden",
          attendance: "14 174",
        },
      },
      {
        id: "1-1958",
        date: "15.06.1958",
        stage: "group 1",
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
          title: "Malmö Stadion",
          city: "Malmö",
          country: "Sweden",
          attendance: "21 990",
        },
      },
      {
        id: "1-1958",
        date: "15.06.1958",
        stage: "group 1",
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
          title: "Olympiastadion",
          city: "Helsingborg",
          country: "Sweden",
          attendance: "16 418",
        },
      },
      {
        id: "1-1958",
        date: "17.06.1958",
        stage: "group 1",
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
          title: "Malmö Stadion",
          city: "Malmö",
          country: "Sweden",
          attendance: "6 196",
        },
      },

      {
        id: "1-1958",
        date: "08.06.1958",
        stage: "group 2",
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
          title: "Idrottsparken",
          city: "Norrköping",
          country: "Sweden",
          attendance: "16 518",
        },
      },
      {
        id: "1-1958",
        date: "08.06.1958",
        stage: "group 2",
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
          title: "Arosvallen",
          city: "Västerås",
          country: "Sweden",
          attendance: "9 591",
        },
      },
      {
        id: "1-1958",
        date: "11.06.1958",
        stage: "group 2",
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
          title: "Arosvallen",
          city: "Västerås",
          country: "Sweden",
          attendance: "12 217",
        },
      },
      {
        id: "1-1958",
        date: "11.06.1958",
        stage: "group 2",
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
          title: "Idrottsparken",
          city: "Norrköping",
          country: "Sweden",
          attendance: "11 665",
        },
      },
      {
        id: "1-1958",
        date: "15.06.1958",
        stage: "group 2",
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
          title: "Eyravallen",
          city: "Örebro",
          country: "Sweden",
          attendance: "13 554",
        },
      },
      {
        id: "1-1958",
        date: "15.06.1958",
        stage: "group 2",
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
          title: "Tunavallen",
          city: "Eskilstuna",
          country: "Sweden",
          attendance: "13 103",
        },
      },

      {
        id: "1-1958",
        date: "08.06.1958",
        stage: "group 3",
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
          title: "Råsunda Stadium",
          city: "Solna",
          country: "Sweden",
          attendance: "34 107",
        },
      },
      {
        id: "1-1958",
        date: "08.06.1958",
        stage: "group 3",
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
          title: "Jernvallen",
          city: "Sandviken",
          country: "Sweden",
          attendance: "15 343",
        },
      },
      {
        id: "1-1958",
        date: "11.06.1958",
        stage: "group 3",
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
          title: "Råsunda Stadium",
          city: "Solna",
          country: "Sweden",
          attendance: "15 150",
        },
      },
      {
        id: "1-1958",
        date: "12.06.1958",
        stage: "group 3",
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
          title: "Råsunda Stadium",
          city: "Solna",
          country: "Sweden",
          attendance: "38 850",
        },
      },
      {
        id: "1-1958",
        date: "15.06.1958",
        stage: "group 3",
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
          title: "Råsunda Stadium",
          city: "Solna",
          country: "Sweden",
          attendance: "30 287",
        },
      },
      {
        id: "1-1958",
        date: "15.06.1958",
        stage: "group 3",
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
          title: "Jernvallen",
          city: "Sandviken",
          country: "Sweden",
          attendance: "13 300",
        },
      },
      {
        id: "1-1958",
        date: "17.06.1958",
        stage: "group 3",
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
          title: "Råsunda Stadium",
          city: "Solna",
          country: "Sweden",
          attendance: "2 823",
        },
      },

      {
        id: "1-1958",
        date: "08.06.1958",
        stage: "group 4",
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
          title: "Rimnersvallen",
          city: "Uddevalla",
          country: "Sweden",
          attendance: "17 778",
        },
      },
      {
        id: "1-1958",
        date: "08.06.1958",
        stage: "group 4",
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
          title: "Ullevi",
          city: "Gothenburg",
          country: "Sweden",
          attendance: "49 348",
        },
      },
      {
        id: "1-1958",
        date: "11.06.1958",
        stage: "group 4",
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
          title: "Ullevi",
          city: "Gothenburg",
          country: "Sweden",
          attendance: "40 895",
        },
      },
      {
        id: "1-1958",
        date: "11.06.1958",
        stage: "group 4",
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
          title: "Ryavallen",
          city: "Borås",
          country: "Sweden",
          attendance: "21 239",
        },
      },
      {
        id: "1-1958",
        date: "15.06.1958",
        stage: "group 4",
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
          title: "Ryavallen",
          city: "Borås",
          country: "Sweden",
          attendance: "15 872",
        },
      },
      {
        id: "1-1958",
        date: "15.06.1958",
        stage: "group 4",
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
          title: "Ullevi",
          city: "Gothenburg",
          country: "Sweden",
          attendance: "50 928",
        },
      },
      {
        id: "1-1958",
        date: "17.06.1958",
        stage: "group 4",
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
          title: "Ullevi",
          city: "Gothenburg",
          country: "Sweden",
          attendance: "23 182",
        },
      },

      {
        id: "1-1958",
        date: "19.06.1958",
        stage: "4:1/4 quarter-finals",
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
          title: "Ullevi",
          city: "Gothenburg",
          country: "Sweden",
          attendance: "25 923",
        },
      },
      {
        id: "1-1958",
        date: "19.06.1958",
        stage: "4:1/4 quarter-finals",
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
          title: "Idrottsparken",
          city: "Norrköping",
          country: "Sweden",
          attendance: "11 800",
        },
      },
      {
        id: "1-1958",
        date: "19.06.1958",
        stage: "4:1/4 quarter-finals",
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
          title: "Råsunda Stadium",
          city: "Solna",
          country: "Sweden",
          attendance: "31 900",
        },
      },
      {
        id: "1-1958",
        date: "19.06.1958",
        stage: "4:1/4 quarter-finals",
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
          title: "Malmö Stadion",
          city: "Malmö",
          country: "Sweden",
          attendance: "20 055",
        },
      },

      {
        id: "1-1958",
        date: "24.06.1958",
        stage: "3:1/2 semi-finals",
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
          title: "Råsunda Stadium",
          city: "Solna",
          country: "Sweden",
          attendance: "27 100",
        },
      },
      {
        id: "1-1958",
        date: "24.06.1958",
        stage: "3:1/2 semi-finals",
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
          title: "Ullevi",
          city: "Gothenburg",
          country: "Sweden",
          attendance: "49 471",
        },
      },

      {
        id: "1-1958",
        date: "28.06.1958",
        stage: "2:third place play-off",
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
          title: "Ullevi",
          city: "Gothenburg",
          country: "Sweden",
          attendance: "32 483",
        },
      },
      {
        id: "1-1958",
        date: "29.06.1958",
        stage: "1:final",
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
          title: "Råsunda Stadium",
          city: "Solna",
          country: "Sweden",
          attendance: "49 737",
        },
      },
    ],
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
