import { useState } from 'react'
import s from './Match.module.scss'
import { MatchProps } from '../model/types'
import { MatchPartialInfo } from './matchPartialInfo/MatchPartialInfo'
import { MatchAllInfo } from './matchAllInfo/MatchAllInfo'

export type Props = {
  match: MatchProps
}

export const Match = ({match}: Props) => {
  const [mode, setMode] = useState(true);

  const onClickHundler = () => {
    setMode(!mode)
  }

  const matchInfo = mode ? 
    <div className={s.container} onClick={onClickHundler}>
      <MatchPartialInfo match={match}/>
    </div> : 
    <div onClick={onClickHundler}>
      <MatchAllInfo match={match}/>
    </div>

  return <> {matchInfo} </>
}