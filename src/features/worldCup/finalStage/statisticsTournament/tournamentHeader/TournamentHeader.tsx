import s from './TournamentHeader.module.css'

type Props = {
  title: string
  image: string
}

export const TournamentHeader = ({title, image} : Props) => {
  const newTitle = title.replace(/^\d{4}/, "").trim();
  const year = title.split(" ")[0];

  return(
    <div className={s.container}>
      <h2 className={s.year}>{year}</h2>
      <img className={s.image} src={image} alt={`icon ${title}`} />
      <h1 className={s.newTitle}>{newTitle}</h1>
    </div>
  )
}