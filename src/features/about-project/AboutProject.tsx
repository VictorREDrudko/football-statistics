import { aboutProject } from 'data/data'
import s from './AboutProject.module.css'

export const AboutProject = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h1 className={s.title}>{aboutProject.title}</h1>
        <span className={s.description}>{aboutProject.description}</span>
        <img className={s.image} src={aboutProject.image} alt="ball" />
        <div className={s.containerLink}>
          <span className={s.question}>{aboutProject.question}</span>
          <a className={s.link} href={'#'}>click here...</a>
        </div>
      </div>

    </div>
  )
}