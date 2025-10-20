import { useAppSelector } from '@/shared/hooks'
import { Heading, Icon, Link, TextElement } from '@/shared/ui'

import s from './AboutProject.module.scss'
import { PATH } from '@/shared/constants'

export const AboutProject = () => {
  const theme = useAppSelector((state) => state.theme.mode)
  const language = useAppSelector((state) => state.language.mode)

  const { en, ru, iconsPath } = useAppSelector(
    (state) => state['about-project']
  )

  const title = language === 'en' ? en.title : ru.title
  const linkText = language === 'en' ? en.link : ru.link
  const descriptions = language === 'en' ? en.text : ru.text

  const { projectLogo, statisticsIcon, viewIcon, thinkIcon, historyIcon } =
    iconsPath

  const icons = [projectLogo, statisticsIcon, viewIcon, thinkIcon]

  const content = descriptions.map((text, index) => {
    return (
      <li className={s.containerIconAndText} key={index}>
        <Icon
          src={theme === 'dark' ? icons[index].dark : icons[index].light}
          alt="icon description about"
          size={60}
        />
        <TextElement as="p" size="5" weight="regular" color="gray">
          {text}
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
          <Link to={PATH.history} variant="text" size="large">
            <Icon
              src={theme === 'dark' ? historyIcon.dark : historyIcon.light}
              alt="Icon history football"
              size={60}
            />
            <span>{linkText}</span>
          </Link>
        </div>
        <ul className={s.containerDescription}>{content}</ul>
      </div>
    </div>
  )
}
