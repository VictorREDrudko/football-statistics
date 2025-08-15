import s from './HeaderDashboard.module.scss'

type Props = {
  children: React.ReactNode
}

export const HeaderDashboard = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>
}
