import { Header } from 'common/components/header/Header'
import s from './StartPage.module.css'
import { header } from 'data/data'
import { Info } from './info/Info'
import { History } from './history/History'

export const StartPage = () => {
  return (
    <div className={s.wrapper}>
      <Header footballOrganizations={header}/>
      <main className={s.container}>
        <Info/>
        <History/>
      </main>
    </div>
  )
}