import { aboutProject } from 'data/data'
import s from './StartProject.module.css'

export const StartProject = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h1 className={s.title}>{aboutProject.title}</h1>
        <span className={s.description}>{aboutProject.description}</span>
        <img className={s.image} src={aboutProject.image} alt="ball" />
      </div>
    </div>
  )
}