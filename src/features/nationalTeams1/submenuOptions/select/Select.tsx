import s from './Select.module.css'
import { NavLink, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Confederation } from '../../../../data/nationalTeamsData/type-nationalTeams'
import { confederation } from '../../../../data/nationalTeamsData/nationalTeams'

type Props = {
  setConfeder: (confeder: Confederation) => void
}

export const Select = ({setConfeder}: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // При монтировании устанавливаем sort=alphabet, если параметра нет
  useEffect(() => {
    if (!searchParams.has('sort')) {
      setSearchParams({ sort: 'alphabet' })
    }
  }, []) 

  const confederationLinks = confederation.map((confeder, index) => {
    const currentSort = searchParams.get('sort') || 'alphabet';
    return (
      <li className={s.item} key={index} onClick={() => setConfeder(confeder)}>
        <NavLink 
          to={`/teams/${confeder}?sort=${currentSort}`}  // Сохраняем параметр сортировки
          className={({isActive}) => isActive ? s.active : s.link}
        >
          {confeder}
        </NavLink>
      </li>
    )
  })

  const onClickSortAlphabet = () => {
    setSearchParams({ sort: 'alphabet' });
  };

  const onClickSortRating = () => {
    setSearchParams({ sort: 'rating' });
  };

  const currentSort = searchParams.get('sort') || 'alphabet';

  const classButtonAlphabet = `${s.btn} ${currentSort === 'alphabet' ? s.active : ''}`;
  const classButtonRating = `${s.btn} ${currentSort === 'rating' ? s.active : ''}`;


  return (
    <div className={s.wrapper}>
      <ul className={s.container}>
        <span className={s.title}>Select:</span>
        {confederationLinks}
      </ul>
      <div className={s.container}>
        <span className={s.title}>Sorting:</span>
        <button className={classButtonAlphabet} onClick={onClickSortAlphabet}>alphabetical</button>
        <button className={classButtonRating} onClick={onClickSortRating}>by rating</button>
      </div>
    </div>
  )
}