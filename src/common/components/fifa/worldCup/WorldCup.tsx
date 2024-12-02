import { MatchInfo, MatchType } from '../../matchInfo/MatchInfo'
import { Match } from '../worldCupFinalStage/match/Match'
import s from './WorldCup.module.css'

const matchesWorldCup1930: MatchType[] = [
  {
    id: '1-1930',
    date: '13.07.1930',
    stage: 'group 1',
    teams: ['France', 'Mexico'],
    score: [[4, 1], [], []],
    forwards: [
      { players: ['L. Laurent', 'Langiller', 'Maschinot'],
        timeGoals: ['19', '40', '43, 87'] }, 
      { players: ['Carreño'],
        timeGoals: ['80'] }, 
    ],
    stadium: 
    {title: 'Estadio Pocitos',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '4 444',
    }
  },
  {
    id: '2-1930',
    date: '13.07.1930',
    stage: 'group 4',
    teams: ['United States', 'Belgium'],
    score: [[3, 0], [], []],
    forwards: [
      { players: ['McGhee', 'Florie', 'Patenaude'],
        timeGoals: ['23', '45', '69'] }, 
      { players: [''],
        timeGoals: [''] }, 
    ],
    stadium: 
    {title: 'Estadio Parque Central',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '18 346',
    }
  },
  {
    id: '3-1930',
    date: '14.07.1930',
    stage: 'group 2',
    teams: ['Yugoslavia', 'Brazil'],
    score: [[2, 1], [], []],
    forwards: [
      { players: ['Tirnanić', 'Bek'],
        timeGoals: ['21', '30'] }, 
      { players: ['Preguinho'],
        timeGoals: ['62'] }, 
    ],
    stadium: 
    {title: 'Estadio Parque Central',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '24 059',
    }
  },
  {
    id: '4-1930',
    date: '14.07.1930',
    stage: 'group 3',
    teams: ['Romania', 'Peru'],
    score: [[3, 1], [], []],
    forwards: [
      { players: ['Deșu', 'Stanciu', 'Kovács'],
        timeGoals: ['1', '79', '89'] }, 
      { players: ['De Souza'],
        timeGoals: ['75'] }, 
    ],
    stadium: 
    {title: 'Estadio Pocitos',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '2 549',
    }
  },
  {
    id: '5-1930',
    date: '15.07.1930',
    stage: 'group 1',
    teams: ['Argentina', 'France'],
    score: [[1, 0], [], []],
    forwards: [
      { players: ['Monti'],
        timeGoals: ['81'] }, 
      { players: [''],
        timeGoals: [''] }, 
    ],
    stadium: 
    {title: 'Estadio Parque Central',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '23 409',
    }
  },
  {
    id: '6-1930',
    date: '16.07.1930',
    stage: 'group 1',
    teams: ['Chile', 'Mexico'],
    score: [[3, 0], [], []],
    forwards: [
      { players: ['Vidal', 'M. Rosas'],
        timeGoals: ['1, 65', '52(o.g.)'] }, 
      { players: [''],
        timeGoals: [''] }, 
    ],
    stadium: 
    {title: 'Estadio Parque Central',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '9 249',
    }
  },
  {
    id: '7-1930',
    date: '17.07.1930',
    stage: 'group 2',
    teams: ['Yugoslavia', 'Bolivia'],
    score: [[4, 0], [], []],
    forwards: [
      { players: ['Bek', 'Marjanović', 'Vujadinović'],
        timeGoals: ['60, 67', '65', '85'] }, 
      { players: [''],
        timeGoals: [''] }, 
    ],
    stadium: 
    {title: 'Estadio Parque Central',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '18 306',
    }
  },
  {
    id: '8-1930',
    date: '17.07.1930',
    stage: 'group 4',
    teams: ['United States', 'Paraguay'],
    score: [[3, 0], [], []],
    forwards: [
      { players: ['Patenaude'],
        timeGoals: ['10, 15, 50'] }, 
      { players: [''],
        timeGoals: [''] }, 
    ],
    stadium: 
    {title: 'Estadio Parque Central',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '18 306',
    }
  },
  {
    id: '9-1930',
    date: '18.07.1930',
    stage: 'group 4',
    teams: ['Uruguay', 'Peru'],
    score: [[1, 0], [], []],
    forwards: [
      { players: ['Vargas Peña'],
        timeGoals: ['40'] }, 
      { players: [''],
        timeGoals: [''] }, 
    ],
    stadium: 
    {title: 'Estadio Centenario',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '12 000',
    }
  },
  {
    id: '10-1930',
    date: '19.07.1930',
    stage: 'group 1',
    teams: ['Chile', 'France'],
    score: [[1, 0], [], []],
    forwards: [
      { players: ['Subiabre'],
        timeGoals: ['67'] }, 
      { players: [''],
        timeGoals: [''] }, 
    ],
    stadium: 
    {title: 'Estadio Centenario',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '2 000',
    }
  },
  {
    id: '11-1930',
    date: '19.07.1930',
    stage: 'group 1',
    teams: ['Argentina', 'Mexico'],
    score: [[6, 3], [], []],
    forwards: [
      { players: ['Stábile', 'Zumelzú', 'Varallo'],
        timeGoals: ['8, 17, 80', '12, 55', '53'] }, 
      { players: ['M. Rosas', 'Gayón'],
        timeGoals: ['42(pen.), 65', '75'] }, 
    ],
    stadium: 
    {title: 'Estadio Centenario',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '42 100',
    }
  },
  {
    id: '12-1930',
    date: '20.07.1930',
    stage: 'group 2',
    teams: ['Brazil', 'Bolivia'],
    score: [[4, 0], [], []],
    forwards: [
      { players: ['Moderato', 'Preguinho'],
        timeGoals: ['37, 73', '57, 83'] }, 
      { players: [''],
        timeGoals: [''] }, 
    ],
    stadium: 
    {title: 'Estadio Centenario',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '25 466',
    }
  },
  {
    id: '13-1930',
    date: '20.07.1930',
    stage: 'group 4',
    teams: ['Paraguay', 'Belgium'],
    score: [[1, 0], [], []],
    forwards: [
      { players: ['Vargas Peña'],
        timeGoals: ['40',] }, 
      { players: [''],
        timeGoals: [''] }, 
    ],
    stadium: 
    {title: 'Estadio Centenario',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '12 000',
    }
  },
  {
    id: '14-1930',
    date: '21.07.1930',
    stage: 'group 3',
    teams: ['Uruguay', 'Romania'],
    score: [[4, 0], [], []],
    forwards: [
      { players: ['Dorado', 'Scarone', 'Anselmo', 'Cea'],
        timeGoals: ['7', '26', '31', '35'] }, 
      { players: [''],
        timeGoals: [''] }, 
    ],
    stadium: 
    {title: 'Estadio Centenario',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '70 022',
    }
  },
  {
    id: '15-1930',
    date: '22.07.1930',
    stage: 'group 1',
    teams: ['Argentina', 'Chile'],
    score: [[3, 1], [], []],
    forwards: [
      { players: ['Stábile', 'M. Evaristo'],
        timeGoals: ['12, 13', '51'] }, 
      { players: ['	Subiabre'],
        timeGoals: ['15'] }, 
    ],
    stadium: 
    {title: 'Estadio Centenario',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '41 459',
    }
  },
  {
    id: '16-1930',
    date: '26.07.1930',
    stage: 'semi-finals',
    teams: ['Argentina', 'United States'],
    score: [[6, 1], [], []],
    forwards: [
      { players: ['Monti', 'Scopelli', 'Stábile', 'Peucelle'],
        timeGoals: ['20', '56', '69, 87', '80, 85'] }, 
      { players: ['Brown'],
        timeGoals: ['89'] }, 
    ],
    stadium: 
    {title: 'Estadio Centenario',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '72 886',
    }
  },
  {
    id: '17-1930',
    date: '27.07.1930',
    stage: 'semi-finals',
    teams: ['Uruguay', 'Yugoslavia'],
    score: [[6, 1], [], []],
    forwards: [
      { players: ['Cea', 'Anselmo', 'Iriarte'],
        timeGoals: ['18, 67, 72', '20, 31', '61'] }, 
      { players: ['Vujadinović'],
        timeGoals: ['4'] }, 
    ],
    stadium: 
    {title: 'Estadio Centenario',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '79 867',
    }
  },
  {
    id: '18-1930',
    date: '30.07.1930',
    stage: 'final',
    teams: ['Uruguay', 'Argentina'],
    score: [[4, 2], [], []],
    forwards: [
      { players: ['Dorado', 'Cea', 'Iriarte', 'Castro'],
        timeGoals: ['12', '57', '68', '89'] }, 
      { players: ['Peucelle', 'Stábile'],
        timeGoals: ['20', '37'] }, 
    ],
    stadium: 
    {title: 'Estadio Centenario',
      city: 'Montevideo',
      country: 'Uruguay',
      attendance: '68 346',
    }
  },
]

export const InfoAboutWorldCup = () => {
  const mappedMatches = matchesWorldCup1930.map(match => {
    return (
      <div key={match.id}>
        <Match teams={match.teams} score={match.score} id={match.id}/>
      </div>
    )
  })

  return (
    <div className={s.wrapper}>
      {/* <GroupStage/> */}
      <MatchInfo/>
      {mappedMatches}
    </div>
  )
}





// type FifaType = {
//   tournamentsWorldCup: number[]
// }


// export const Fifa = ({tournamentsWorldCup}: FifaType) => {
//   const mappedTournaments = tournamentsWorldCup.map((el, index) => {
//     return (
//       <li key={index} className={s.item}>
//         <NavLink to={`/fifa/${el}`}>{el}</NavLink>
//       </li>
//     )
//   })

//   return (
//     <div className={s.wrapper}>
//       <Background image={world_cup}/>
//       <div className={s.wrapperContent}>
//         <h2>International Federation of Association Football</h2>
//         <p> FIFA, is the international self-regulatory governing body of association football, beach soccer, 
//             and futsal. It was founded in 1904. Its membership now comprises 211 national associations. These 
//             national associations must also be members of one of the six regional confederations: CAF (Africa), 
//             AFC (Asia and Australia), UEFA (Europe), CONCACAF (North & Central America and the Caribbean), OFC 
//             (Oceania), and CONMEBOL (South America).
//         </p>
//         <div>
//           <h2 className={s.title}>Tournaments FIFA World Cup</h2>
//           <ul className={s.containerTournaments}>{mappedTournaments}</ul>
//         </div>
//         <div>
//           <h2 className={s.title}>Tournaments FIFA World Cup</h2>
//           <ul className={s.containerTournaments}>{mappedTournaments}</ul>
//         </div>

//       </div>
