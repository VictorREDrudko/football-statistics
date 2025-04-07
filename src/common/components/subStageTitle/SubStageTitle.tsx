import s from './SubStageTitle.module.css'

type Props = {
  title: string
}

export const SubStageTitle = ({title}: Props) => {
  return <h2 className={s.title}>{title}</h2>
}