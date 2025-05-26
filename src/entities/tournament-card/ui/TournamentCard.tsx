import s from './TournamentCard.module.scss'
import { TitleTournamentCard } from "./title-tournament-card/TitleTournamentCard"
import { BackgroundImage, Badge, Container, Flag, getTournamentNumber, getTournamentTitle, getTournamentYear, Link, TournamentInfo } from "@/shared"
import { ConfederationCode, confederationData } from "@/entities"
import { ChampionTournament } from './champion-tournament/ChampionTournament'

type Props = {
  tournament: TournamentInfo
}

export const TournamentCard = ({tournament} : Props) => {
  const tournamentYear = getTournamentYear(tournament.title);
  const tournamentTitle = getTournamentTitle(tournament.title);
  const organization = tournamentTitle.split(' ')[1] as ConfederationCode
  const numberTournament = getTournamentNumber(tournament.id);
  const iconCup = confederationData[organization].iconPathCup

  const hostCountryFlags = tournament.hostCountry.map((countryName, index) => {
    return <Flag  countryName={countryName} 
                  year={tournamentYear} 
                  key={index + 1}/>
  })

  let championCountryName = 'Albania'

  if(tournament.finalStage.length > 0){
    championCountryName = tournament.finalStage[tournament.finalStage.length - 1].teams[0]
  }

  let isDisabledFinalStage
  let isDisabledQualification

  if(tournament.finalStage.length === 0) {
    isDisabledFinalStage = true
  }

  if(tournament.qualification.length === 0) {
    isDisabledQualification = true
  }

  return (
    <div className={s.wrapper}>
      <Container direction='col' align='center' justify='between'>
        <BackgroundImage  imagePath={tournament.icon} 
                          alt={`icon World Cup ${tournamentYear}`}
        />
        <TitleTournamentCard year={tournamentYear} title={tournamentTitle}/>
        <div className={s.containerNumber}>
          <Badge number={numberTournament} variant="secondary" size="small"/>
        </div>
        <div className={s.containerFlags}>
          {hostCountryFlags}
        </div>
        <ChampionTournament countryName={championCountryName} 
                            year={tournamentYear}
                            iconPathCup={iconCup}
                            tournamentTitle={tournamentTitle}
        />
        <div className={s.containerLink}>
          <Link to={`final-stage/${tournamentYear}`} variant="secondary" disabled={isDisabledFinalStage}>
            {'Final stage'}
          </Link>
          <Link to={`qualification/${tournamentYear}`} variant="secondary" disabled={isDisabledQualification}>
            {'Qualification'}
          </Link>
        </div>
      </Container>
    </div>
  )
}