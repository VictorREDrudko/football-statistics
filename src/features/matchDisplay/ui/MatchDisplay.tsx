import { useState } from 'react'
import { FormattedMatchData, Match, MatchMode } from '@/entities/match'
import { useAppSelector } from '@/shared/hooks'
import { MatchInfo } from '../model'
import { formattedMatchData } from '../lib'

type Props = {
  match: MatchInfo
}

export const MatchDisplay = ({ match }: Props) => {
  const [mode, setMode] = useState<MatchMode>('partial')

  // Get data from the store
  const stadiumData = useAppSelector(
    (state) => state.stadiums.stadiumsData[match.stadiumInfo.country]
  )
  const teamsData = useAppSelector((state) => state['national-teams'].teamsData)

  // Formatted data
  const matchData: FormattedMatchData = formattedMatchData(
    match,
    stadiumData,
    teamsData
  )

  const onClickHandler = () => {
    setMode((prevMode) => (prevMode === 'partial' ? 'full' : 'partial'))
  }

  return (
    <div onClick={onClickHandler}>
      <Match mode={mode} matchData={matchData} />
    </div>
  )
}
