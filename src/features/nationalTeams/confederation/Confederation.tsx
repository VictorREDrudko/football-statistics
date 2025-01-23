import s from './Confederation.module.css'

type ConfederationType = {
  icon: string
  name: string
}

export const Confederation = ({icon, name} : ConfederationType) => {
  return (
    <div className={s.wrapper}>
      <span className={s.title}>Confederation:</span>
      <div className={s.container}>
        <img className={s.image} src={icon} alt={`association-icon-${name}`} />
        <span className={s.name}>{name}</span>
      </div>
    </div>
  )
}