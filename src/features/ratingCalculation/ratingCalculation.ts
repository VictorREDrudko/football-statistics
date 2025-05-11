import { worldCupData } from "@/data/worldCupData/worldCupData";
import { qualifiedTeams } from "./finalStageWorldCup/qualifiedTeams";
import { nationalTeamsData } from "@/entities";

const baseRatingPoints = {
  worldCup: {
    appearances: 10,
    coefficient: 3,
    firstPlace: 200,
    secondPlace: 80,
    thirdPlace: 50,
  }
}

const qualifiedTeamsFinalStageWorldCup = qualifiedTeams(worldCupData)

export const ratingCalculation = () => {
  Object.keys(nationalTeamsData).forEach((nameCountry) => {
    nationalTeamsData[nameCountry].rating.points = calculationPoints(nameCountry);
  })
}

const calculationPoints = (countryName: string) => {
  const points = finalStageWorldCupPoints(countryName)
  return points
}

const finalStageWorldCupPoints = (countryName: string) => {
  const teamWorldCupQualifiedYears: string[] = []

  let appearancesCount = 0
  let winMatchesCounter = 0;
  let drawMatchesCounter = 0;

  let roundOf16Count = 0
  let quarterFinalStageCount = 0
  let semiFinalStageCount = 0;

  let thirdPlaceCounter = 0;
  let secondPlaceCounter = 0;
  let firstPlaceCounter = 0;

  Object.keys(worldCupData).forEach((year) => {
    if (qualifiedTeamsFinalStageWorldCup[year].includes(countryName)) {
      appearancesCount++;
      teamWorldCupQualifiedYears.push(year)
    }
  })

  const winsAndDrawsMatches = calculateWinsAndDraws(teamWorldCupQualifiedYears, countryName)

  winMatchesCounter = winsAndDrawsMatches.wins
  drawMatchesCounter = winsAndDrawsMatches.draws

  return appearancesCount * baseRatingPoints.worldCup.appearances + (winMatchesCounter * 3 + drawMatchesCounter * 1) * baseRatingPoints.worldCup.coefficient
}

const calculateWinsAndDraws = (qualifiedYears: string[], countryName: string) => {
  let winCount = 0;
  let drawCount = 0;

  qualifiedYears.forEach((year) => {
    worldCupData[year].finalStage.forEach((match) => {
      const [team1, team2] = match.teams;

      // The match ended in regular time
      if( match.score[1].length === 0) {
        const [scoreTeam1, scoreTeam2] = match.score[0]; 

        if (scoreTeam1 > scoreTeam2 && team1 === countryName) {
          winCount++;
        } 
        
        if (scoreTeam2 > scoreTeam1 && team2 === countryName) {
          winCount++;
        }
        
        if (scoreTeam1 === scoreTeam2 && (match.teams.includes(countryName))) {
          drawCount++;
        }
      }

      // The match ended in extra time, without penalties
      if( match.score[1].length > 0 && match.score[2].length === 0) {
        const [scoreTeam1, scoreTeam2] = match.score[0];
        const [scoreTeam1et, scoreTeam2et] = match.score[1];

        if (scoreTeam1 + scoreTeam1et > scoreTeam2 + scoreTeam2et && team1 === countryName) {
          winCount++;
        } 
        
        if (scoreTeam2 + scoreTeam2et > scoreTeam1 + scoreTeam1et && team2 === countryName) {
          winCount++;
        }
        
        if (scoreTeam1 + scoreTeam1et === scoreTeam2 + scoreTeam2et && (match.teams.includes(countryName))) {
          drawCount++;
        }
      }

      // The match ended in extra time with penalties
      if( match.score[1].length > 0 && match.score[2].length === 0) {
        const [scoreTeam1p, scoreTeam2p] = match.score[2];

        if (scoreTeam1p > scoreTeam2p && team1 === countryName) {
          winCount++;
        } 
        
        if (scoreTeam2p > scoreTeam1p && team2 === countryName) {
          winCount++;
        }
      }

    });
  });

  return { wins: winCount, draws: drawCount };
};
