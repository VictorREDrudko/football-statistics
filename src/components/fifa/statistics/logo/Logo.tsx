import s from './Logo.module.css'

type LogoType = {
  pathImage: string
}

export const Logo = ({pathImage}: LogoType) => {
  return (
    <div className={s.wrapper}>
      <img src={pathImage} alt={`${pathImage}`} />
    </div>
  )
}