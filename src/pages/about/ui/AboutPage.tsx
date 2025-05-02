import s from './AboutPage.module.css'
import { Description } from './description/Description'
import { History } from './history/History'

export const AboutPage = () => {
  return (
    <div className={s.wrapper}>
      <main className={s.container}>
        <Description/>
        <History/>
      </main>
    </div>
  )
}