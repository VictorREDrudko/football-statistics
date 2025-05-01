import icon2Place from './../../assets/icon/card/medal2.png'
import icon3Place from './../../assets/icon/card/medal3.png'
import iconMatches from './../../assets/icon/card/matches.png'
import { BaseResult } from "./structuringResultChampionships-type";
import { nationalTournaments } from '../../data/data';
import { classNameResult } from '../../data/nationalTeamsData/classNameResult';
import { Confederation } from '../../data/nationalTeamsData/type-nationalTeams';
import { TeamWorldCupAchievements } from '../worldCup/createTeamWorldCupAchievements';

export const structuringResultChampionships = (resultsData: TeamWorldCupAchievements, confeder:Confederation): BaseResult[] => {
  return [
    {
      title: "champion",
      count: resultsData.countFirstPlace,
      years: [resultsData.yearsFirstPlace],
      iconPath: nationalTournaments.worldCup.iconCup,
      typeTotal: classNameResult.circleLarge,
    },
    {
      title: "runner-up",
      count: resultsData.countSecondPlace,
      years: [resultsData.yearsSecondPlace],
      iconPath: icon2Place,
      typeTotal: classNameResult.circleMedium,
    },
    {
      title: "third-place",
      count: resultsData.countThirdPlace,
      years: [resultsData.yearsThirdPlace],
      iconPath: icon3Place,
      typeTotal: classNameResult.circleSmall,
    },
    {
      title: 'appearances',
      count: resultsData.countAppearances,
      years: [resultsData.yearsAppearances],
      iconPath: iconMatches,
      typeTotal: classNameResult.squareLarge,
    }, 
    {
      title: 'matches',
      count: resultsData.countMatches,
      years: [
        ['Won:', String(resultsData.countMatchesWins)],
        ['Drawn:', String(resultsData.countMatchesDrawn)],
        ['Lost:', String(resultsData.countMatchesLost)],
      ],
      iconPath: iconMatches,
      typeTotal: classNameResult.squareSmall,
    }
  ]
}


