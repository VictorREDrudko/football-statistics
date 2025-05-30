import s from './TournamentHeader.module.scss'

type Props = {
  titleTournament: string
  logoTournamentPath: string
}

export const TournamentHeader = ({titleTournament, logoTournamentPath} : Props) => {
  const newTitle = titleTournament.replace(/^\d{4}/, "").trim();
  const year = titleTournament.split(" ")[0];

  return(
    <div className={s.container}>
      <h2 className={s.year}>{year}</h2>
      <img className={s.logo} src={logoTournamentPath} alt={`icon ${titleTournament}`} />
      <h1 className={s.title}>{newTitle}</h1>
    </div>
  )
}