import { useDispatch } from 'react-redux'
import { Select } from '@radix-ui/themes'

import { toggleLanguage } from '@/app/store'
import { useAppSelector } from '@/shared/hooks'
import { Container } from '@/shared/ui'
import { flags } from '@/shared/assets'

import s from './Language.module.scss'

export const Language = () => {
  const dispatch = useDispatch()
  const language = useAppSelector((state) => state.language.mode)

  const isEnglish = language === 'en'

  const flagRu =
    flags.Russia && typeof flags.Russia === 'string' ? flags.Russia : ''

  const flagEng =
    flags.England && typeof flags.England[1] === 'string'
      ? flags.England[1]
      : ''

  const handleLanguageChange = () => {
    dispatch(toggleLanguage())
  }

  return (
    <Select.Root
      defaultValue="en"
      onValueChange={handleLanguageChange}
      size="2">
      <Select.Trigger
        variant="ghost"
        className={s.trigger}
        aria-label="Select language"
      />
      <Select.Content className={s.context}>
        <Select.Group className={s.group}>
          <Select.Label>{isEnglish ? 'Language' : 'Выбор языка'}</Select.Label>
          <Select.Item value="ru" className={s.item}>
            <Container align="center" gap="2">
              <span className={s.text}>{isEnglish ? 'RU' : 'РУС'}</span>
              <img src={flagRu} alt="flag Russia" className={s.flag} />
            </Container>
          </Select.Item>
          <Select.Item value="en" className={s.item}>
            <Container align="center" gap="2">
              <span className={s.text}>{isEnglish ? 'EN' : 'АНГ'}</span>
              <img src={flagEng} alt="flag England" className={s.flag} />
            </Container>
          </Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}
