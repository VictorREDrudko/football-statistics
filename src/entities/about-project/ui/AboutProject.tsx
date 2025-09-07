import { useAppSelector } from '@/shared/hooks'
import s from './AboutProject.module.scss'
import { Heading, Icon, Link, TextElement } from '@/shared/ui'

export const AboutProject = () => {
  const { title, text, iconsPath } = useAppSelector(
    (state) => state['about-project']
  )

  const { projectLogo, statisticsIcon, viewIcon, thinkIcon, historyIcon } =
    iconsPath

  const icons = [projectLogo, statisticsIcon, viewIcon, thinkIcon]

  const descriptionItem = text.map((paragraph, index) => {
    return (
      <li className={s.containerIconAndText} key={index}>
        <Icon src={icons[index]} alt="icon description about" size={60} />
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
          <Heading color="gray" size="9" weight="bold" className={s.title}>
            {title}
          </Heading>
          <Link to={'/history-football'} variant="text" size="large">
            <Icon src={historyIcon} alt="Icon history football" size={60} />
            <span className="textLink">
              {'Show about football history ...'}
            </span>
          </Link>
        </div>
        <ul className={s.containerDescription}>{descriptionItem}</ul>
      </div>
    </div>
  )
}
