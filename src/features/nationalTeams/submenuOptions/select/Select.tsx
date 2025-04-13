import { confederation } from 'data/nationalTeamsData/nationalTeams'
import s from './Select.module.css'
import { NavLink, useSearchParams } from 'react-router-dom'
import { Confederation } from 'data/nationalTeamsData/type-nationalTeams'
import { useEffect } from 'react'

type Props = {
  setConfeder: (confeder: Confederation) => void
  changeSortType: (sortType: string) => void
  sortType: string
}

export const Select = ({setConfeder, changeSortType, sortType}: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // Проверяем, установлен ли параметр sort
    if (!searchParams.has('sort')) {
      setSearchParams({ sort: 'alphabet' }); // Устанавливаем значение по умолчанию
    }
  }, [searchParams, setSearchParams]);
  
  const confederationLinks = confederation.map((confeder, index) => {
    return (
      <li className={s.item} key={index} onClick={() => setConfeder(confeder)}>
        <NavLink to={`/teams/${confeder}`} className={({isActive}) => isActive ? s.active : s.link}>{confeder}</NavLink>
      </li>
    )
  })

  const onClickSortAlphabet= () => {
    setSearchParams({ sort: 'alphabet' })
    changeSortType('alphabet')
  }

  const onClickSortRating= () => {
    setSearchParams({ sort: 'rating' });
    changeSortType('rating')
  }

  const currentSort = searchParams.get('sort');

  const classButtonAlphabet = `${s.btn} ${currentSort === 'alphabet' ? s.active : ''}`;
  const classButtonRating = `${s.btn} ${currentSort === 'rating' ? s.active : ''}`;


  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <span className={s.title}>Select:</span>
        {confederationLinks}
      </div>
      <div className={s.container}>
        <span className={s.title}>Sorting:</span>
        <button className={classButtonAlphabet} onClick={onClickSortAlphabet}>alphabetical</button>
        <button className={classButtonRating} onClick={onClickSortRating}>by rating</button>
      </div>
    </div>
  )
}