import { confederation } from 'data/data'
import s from './Select.module.css'
import { ConfederationType } from 'data/type-data'
import { NavLink } from 'react-router-dom'

type Props = {
  setConfeder: (el: ConfederationType) => void
  sort: (sort: string) => void
  sorting: string
}

export const Select = ({setConfeder, sort, sorting}: Props) => {
  const mapped = confederation.map((el, index) => {
    return (
      <li className={s.item} key={index} onClick={() => setConfeder(el)}>
        <NavLink to={`/teams/${el}`} className={({isActive}) => isActive ? s.active : s.link}>{el}</NavLink>
      </li>
    )
  })

  const onClickSortAlphabet= () => {
    sort('alphabet')
  }

  const onClickSortRating= () => {
    sort('rating')
  }

  const classButtonAlphabet = `${s.btn} ${sorting === 'alphabet' ? s.active : ''}`
  const classButtonRating = `${s.btn} ${sorting === 'rating' ? s.active : ''}`


  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <span className={s.title}>Select a football confederation:</span>
        {mapped}
      </div>
      <div className={s.container}>
        <span className={s.title}>Sort a football confederation:</span>
        <button className={classButtonAlphabet} onClick={onClickSortAlphabet}>sort alphabetically</button>
        <button className={classButtonRating} onClick={onClickSortRating}>sort by rating</button>
      </div>
    </div>
  )
}