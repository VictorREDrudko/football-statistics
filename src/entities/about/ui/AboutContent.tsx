import { useSelector } from 'react-redux'
import s from './AboutContent.module.scss'
import { RootState } from '@/app/store/store'
import { Heading, Icon, Link } from '@/shared'
import { TextElement } from '@/shared/ui/text-element/TextElement'
import iconHistory from '../assets/history-icon.png'

export const AboutContent = () => {
  // Достаем данные из хранилища
  const { title, text, iconsPath } = useSelector((state: RootState) => state.aboutProject)

  const descriptionList = text.map((paragraph, index) => {
    return (
      <li className={s.containerIconAndText} key={index}>
        <Icon src={iconsPath[index]} alt="icon description about" size={60} />
        <TextElement as="p" size="5" weight="regular" color="gray">
          {paragraph}
        </TextElement>
      </li>
    )
  })

  return (
    <div className={s.container}>
      <div className={s.containerContent}>
        <div>
          <Heading color="primary" size="9" weight="bold" className={s.title}>
            {title}
          </Heading>
          <Link to={'/history-football'} variant="text" size="large">
            <Icon src={iconHistory} alt="Icon history football" size={60} />
            <span className="textLink">{'Show about football history ...'}</span>
          </Link>
        </div>
        <ul className={s.containerDescription}>{descriptionList}</ul>
      </div>
    </div>
  )
}
