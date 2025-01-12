import s from './About.module.css'
import { Info } from './info/Info'
import { History } from './history/History'

export const About = () => {
  return (
    <div className={s.wrapper}>
      <main className={s.container}>
        <Info/>
        <History/>
      </main>
    </div>
  )
}