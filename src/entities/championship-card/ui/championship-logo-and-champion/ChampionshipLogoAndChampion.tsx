
import { BackgroundImage } from '@/shared/ui/background-image/BackgroundImage'
import { CountryTeam } from '@/shared/ui/country-team'
import s from './ChampionshipLogoAndChampion.module.scss'


type Props = {
  logoPath: string
  championshipTitle: string
  championCountryName: string
  year: string
  trophyPath: string
}

export const ChampionshipLogoAndChampion = ({
  logoPath,
  championshipTitle,
  championCountryName,
  year,
  trophyPath,
}: Props) => {
  return (
    <div className={s.container}>
      <BackgroundImage
        imagePath={logoPath}
        alt={`Logo ${championshipTitle}`}
        className={s.backgroundImage}
      />
      {championCountryName && (
        <div className={s.containerChampion}>
          <div className={s.containerTrophy}>
            <img
              className={s.image}
              src={trophyPath}
              alt={`Cup ${championshipTitle}`}
            />
          </div>
          <div className={s.containerCountryTeam}>
            {/* <CountryTeam
              countryName={championCountryName}
              year={year}
              classNameSpan={s.countryName}
            /> */}
          </div>
        </div>
      )}
    </div>
  )
}
