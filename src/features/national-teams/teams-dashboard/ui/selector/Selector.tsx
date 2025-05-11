import s from './Selector.module.css'
import { NavLink, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { ConfederationCode, namesTeamByConfederation } from '@/entities'

type Props = {
  setConfederation: (confederation: ConfederationCode) => void
}

export const Selector = ({setConfederation}: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSortType = searchParams.get('sort') || 'alphabet';
  const confederationNames = Object.keys(namesTeamByConfederation) as ConfederationCode[]

  // When mounting, set sort=alphabet if there is no parameter
  useEffect(() => {
    if (!searchParams.has('sort')) {
      setSearchParams({ sort: 'alphabet' })
    }
  }, [])

  const confederationLinks = confederationNames.map((confederation, index) => {
    return (
      <li className={s.item} key={index} onClick={() => setConfederation(confederation)}>
        <NavLink 
          to={`/teams/${confederation}?sort=${currentSortType}`}  // Сохраняем параметр сортировки
          className={({isActive}) => isActive ? s.active : s.link}
        >
          {confederation}
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

  const classButtonAlphabet = `${s.btn} ${currentSortType === 'alphabet' ? s.active : ''}`;
  const classButtonRating = `${s.btn} ${currentSortType === 'rating' ? s.active : ''}`;

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