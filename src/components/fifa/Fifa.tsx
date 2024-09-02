import s from './Fifa.module.css'
import img1930 from './../../image/logo-world-cup/1930.png'

const WorldChampionshipsStatistics = {
  1930: {
    year: '1930',
    country: 'Uruguay',
    teams: 13,
    matches: 18,
    goals: 70,
    goalsPerMatch: 3.89,
  }
}

export const Fifa = () => {
  return (
    <div className={s.wrapper}>

      <div className={s.wrapperCard}>
        <div className={s.wrapperImg}>
          <img src={img1930} alt="logo-FIFA-World-Cup-1930" />
        </div>
        <h3>1930 FIFA World Cup</h3>
        <div className={s.wrapperContent}>
          <div>
            <span className={s.title}>Host country: </span> 
            <span>Uruguay</span>
          </div>
          <div>
            <span className={s.title}>Teams: </span> 
            <span>13</span>
          </div>
          <div>
            <span className={s.title}>Matches played: </span> 
            <span>18</span>
          </div>
          <div>
            <span className={s.title}>Goals scored: </span> 
            <span>70</span>
          </div>
          <div>
            <span className={s.title}>Goals per match: </span> 
            <span>3.89</span>
          </div>
        </div>
      </div>
    </div>
  )
}