import s from './Parameter.module.scss'

type Props = {
  title: string
}

export const Parameter = ({title} : Props) => {
  return <span className={s.parameter}>{title}</span>
}
