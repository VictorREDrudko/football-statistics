import { useState } from 'react'
import s from './Match.module.scss'
import { MatchPartialInfo } from './matchPartialInfo/MatchPartialInfo'
import { MatchAllInfo } from './matchAllInfo/MatchAllInfo'
import { MatchInfo } from '@/shared/model'

export type Props = {
  match: MatchInfo
}

export const Match = ({ match }: Props) => {
  const [mode, setMode] = useState(true)

  const onClickHandler = () => {
    setMode(!mode)
  }

  const matchInfo = mode ? (
    <div className={s.container} onClick={onClickHandler}>
      <MatchPartialInfo match={match} />
    </div>
  ) : (
    <div onClick={onClickHandler} className={s.containerAll}>
      <MatchAllInfo match={match} />
    </div>
  )

  return <> {matchInfo} </>
}
