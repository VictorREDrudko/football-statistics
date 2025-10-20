import { useDispatch } from 'react-redux'
import { Switch } from '@radix-ui/themes'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

import { toggleTheme } from '@/app/store'
import { Container } from '@/shared/ui'

import s from './HeaderTheme.module.scss'

type Props = {
  isDark: boolean
}

export const HeaderTheme = ({ isDark }: Props) => {
  const dispatch = useDispatch()
  const toggle = () => dispatch(toggleTheme())

  return (
    <Container align="center" gap="2">
      <SunIcon width="15" height="15" className={s.icon} />
      <Switch
        checked={isDark}
        onCheckedChange={toggle}
        color="gray"
        size="2"
        aria-label="Toggle theme"
      />
      <MoonIcon width="15" height="15" className={s.icon} />
    </Container>
  )
}
