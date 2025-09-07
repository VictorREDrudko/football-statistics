
import {
  getChampionshipTitleWithoutYear,
  getChampionshipYear,
} from '@/shared/lib'
import { ChampionshipTitle } from './championship-title/ChampionshipTitle'
import { ChampionshipLogoAndChampion } from './championship-logo-and-champion/ChampionshipLogoAndChampion'
import { ChampionshipLinks } from './championship-links/ChampionshipLinks'
import backgroundCard from '../assets/background-card.png'
import s from './ChampionshipCard.module.scss'
import { getTournamentNumber } from '@/shared/lib/helpers/getTournamentNumber'
import { ChampionshipInfo } from '@/shared/model/national-tournaments-store/types'
import { BackgroundImage } from '@/shared/ui/background-image/BackgroundImage'
import { Container } from '@/shared/ui/container/Container'


type Props = {
  championship: ChampionshipInfo
}

export const ChampionshipCard = ({ championship }: Props) => {
  const championshipYear = getChampionshipYear(championship.title)
  const championshipTitleWithoutYear = getChampionshipTitleWithoutYear(
    championship.title
  )
  const championshipNumber = getTournamentNumber(championship.id)
  const championshipTrophy = championship.info.trophyIconPath

  const championCountryName =
    championship.finalStage.length > 0
      ? championship.finalStage[championship.finalStage.length - 1].teams[0]
      : ''

  const isDisabledFinalStage = championship.finalStage.length === 0
  const isDisabledQualification = championship.qualification.length === 0

  return (
    <div className={s.container}>
      <Container direction="col" align="center" justify="between">
        <BackgroundImage
          imagePath={backgroundCard}
          alt={`football background`}
        />
        <ChampionshipTitle
          title={championshipTitleWithoutYear}
          year={championshipYear}
          number={championshipNumber}
          hostCountries={championship.hostCountry}
        />
        <ChampionshipLogoAndChampion
          logoPath={championship.logo.forCard}
          championshipTitle={championship.title}
          championCountryName={championCountryName}
          year={championshipYear}
          trophyPath={championshipTrophy}
        />
        <ChampionshipLinks
          championshipYear={championshipYear}
          isDisabledFinalStage={isDisabledFinalStage}
          isDisabledQualification={isDisabledQualification}
        />
      </Container>
    </div>
  )
}
