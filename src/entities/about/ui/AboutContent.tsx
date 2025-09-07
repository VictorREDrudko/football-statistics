import { useSelector } from 'react-redux'
import s from './AboutContent.module.scss'
import { RootState } from '@/app/store/store'
import { TextElement } from '@/shared/ui/text-element/TextElement'
import iconHistory from '../assets/history-icon.png'
import { Heading } from '@radix-ui/themes'
import { Icon } from '@radix-ui/themes/components/callout'
import { Link } from 'react-router-dom'

export const AboutContent = () => {
  // Достаем данные из хранилища
  // const { title, text, iconsPath } = useSelector((state: RootState) => state.)

  // const descriptionList = text.map((paragraph, index) => {
  //   return (
  //     <li className={s.containerIconAndText} key={index}>
  //       <Icon src={iconsPath[index]} alt="icon description about" size={60} />
  //       <TextElement as="p" size="5" weight="regular" color="gray">
  //         {paragraph}
  //       </TextElement>
  //     </li>
  //   )
  // })

  return (
    <div className={s.container}>
      <div className={s.containerContent}>
        <div>
          <Heading color="blue" size="9" weight="bold" className={s.title}>
            {/* {title} */}
            'vsdhsdgj'
          </Heading>
          {/* <Link to={'/history-football'} variant="text" size="large">
            <Icon src={iconHistory} alt="Icon history football" size={60} />
            <span className="textLink">{'Show about football history ...'}</span>
          </Link> */}
        </div>
        {/* <ul className={s.containerDescription}>{descriptionList}</ul> */}
      </div>
    </div>
  )
}
