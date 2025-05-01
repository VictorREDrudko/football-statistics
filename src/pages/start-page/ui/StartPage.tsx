import { mainBigLogo } from '@/shared/assets'
import s from './StartPage.module.css'

export const StartPage = () => {
  return (
    <div className={s.container}>
      <div className={s.containerContent}>
        <h1 className={s.title}>
          {"football is life"}
        </h1>
        <span className={s.description}>
          {"This project is about football"}
        </span>
        <img className={s.image} src={mainBigLogo} alt="Main logo" />
      </div>
    </div>
  )
}