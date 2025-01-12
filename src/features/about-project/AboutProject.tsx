import { aboutProject } from 'data/data'
import s from './AboutProject.module.css'
import { Link } from 'react-router-dom'

export const AboutProject = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h1 className={s.title}>{aboutProject.title}</h1>
        <span className={s.description}>{aboutProject.description}</span>
        <img className={s.image} src={aboutProject.image} alt="ball" />
        <div className={s.containerLink}>
          <span className={s.question}>{aboutProject.question}</span>
          <Link className={s.link} to={'/start'}>click here...</Link>
        </div>
      </div>
    </div>
  )
}