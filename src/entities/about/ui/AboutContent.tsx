import { useSelector } from 'react-redux';
import s from './AboutContent.module.scss'
import { NavLink } from 'react-router-dom'
import { RootState } from '@/app/store/store';
import { Heading, Icon } from '@/shared';

export const AboutContent = () => {
  // Достаем данные из хранилища
  const { title, text, iconsPath } = useSelector((state: RootState) => state.aboutProject);

  const descriptionList = text.map((el, index) => {
    return (
      <li className={s.containerIconAndText} key={index}>
        <Icon
          src={iconsPath[index]}
          alt="User avatar"
          size={60}
        />
        <span className={s.text}>{el}</span>
      </li>
    )
  })

  return (
    <div className={s.container}>
      <div className={s.containerContent}>
        <Heading color='primary' size='9' weight='bold' className={s.title}>{title}</Heading>
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