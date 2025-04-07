import s from './StageTitle.module.css'

type Props = {
  title: string
}

export const StageTitle = ({title}: Props) => {
  return <h2 className={s.title}>{title}</h2>
}