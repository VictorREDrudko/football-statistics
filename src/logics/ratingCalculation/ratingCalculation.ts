import { nationalTeams } from "data/nationalTeamsData/nationalTeams"
import { NationalTeam } from "data/nationalTeamsData/type-nationalTeams"
import { worldCupData } from "data/worldCupData/worldCupData"
import { createTeamWorldCupAchievements } from "logics/worldCup/createTeamWorldCupAchievements"

const baseRatingPoints = {
  worldCup: {
    appearances: 10,
    matches: 2,
    win: 9,
    drawn: 3,
    firstPlace: 200,
    secondPlace: 80,
    thirdPlace: 50,
  }
}


export const ratingCalculation = () => {
  const namesCountry = Object.keys(nationalTeams);
  const newTeams: NationalTeam[] = []

  namesCountry.forEach((nameCountry) => {
    nationalTeams[nameCountry].rating.points = calculationPoints(nameCountry);
    newTeams.push(nationalTeams[nameCountry])
  })

  newTeams.sort((a, b) => b.rating.points - a.rating.points);
  
  newTeams.forEach((team, index) => {
    const nameCountry = team.names[0].nameCountry
    nationalTeams[nameCountry].rating.points !== 0 
      ? nationalTeams[nameCountry].rating.place = index + 1
       : nationalTeams[nameCountry].rating.place = 0
  })

}



export const calculationPoints = (countryName: string) => {
  const points = calculationPointsWorldCup(countryName)
  return points
}

const calculationPointsWorldCup = (countryName: string) => {
  const data = createTeamWorldCupAchievements(worldCupData, countryName)

  const pointsAppearances = data.countAppearances * baseRatingPoints.worldCup.appearances;
  const pointsMatches = data.countMatches * baseRatingPoints.worldCup.matches;
  const pointsWin = data.countMatchesWins * baseRatingPoints.worldCup.win;
  const pointsDrawn = data.countMatchesDrawn * baseRatingPoints.worldCup.drawn;
  const pointsThirdPlace = data.countThirdPlace * baseRatingPoints.worldCup.thirdPlace;
  const pointsSecondPlace = data.countSecondPlace * baseRatingPoints.worldCup.secondPlace;
  const pointsFirstPlace = data.countFirstPlace * baseRatingPoints.worldCup.firstPlace;

  return pointsAppearances + pointsMatches + pointsWin + pointsDrawn + pointsThirdPlace + pointsSecondPlace + pointsFirstPlace
}

