import { useSelector } from 'react-redux';
import s from './AboutContent.module.scss'
import { NavLink } from 'react-router-dom'
import { RootState } from '@/app/store/store';

export const AboutContent = () => {
  // Достаем данные из хранилища
  const { title, text, iconsPath } = useSelector((state: RootState) => state.aboutProject);

  const descriptionList = text.map((el, index) => {
    return (
      <li className={s.containerIconAndText} key={index}>
        <img src={iconsPath[index]} alt={'icon'}/>
        <span>{el}</span>
      </li>
    )
  })

  return (
    <div className={s.container}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.containerContent}>
        <ul className={s.containerDescription}>
          {descriptionList}
        </ul>
      </div>
      <NavLink to={'/history-football'} className={s.link}>
        Show more about football history
      </NavLink>
    </div>
  )
}