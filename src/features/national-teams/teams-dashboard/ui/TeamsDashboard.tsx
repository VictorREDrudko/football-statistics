import s from './TeamsDashboard.module.css'
import { Selector } from './selector/Selector'
import { ConfederationCode, confederationData, ConfederationInfo } from '@/entities'
import { IconConfederation, NumberInCircle } from '@/shared'

type Props = {
  numberTeams: number
  confederation: ConfederationCode
  setConfederation: (confederation: ConfederationCode) => void
}

export const TeamsDashboard = ({numberTeams, confederation, setConfederation} : Props) => {
  const currentConfederation: ConfederationInfo = confederationData[confederation]

  return (
    <div className={s.container}>
      <NumberInCircle number={numberTeams} description={"Teams"}/>
      <Selector setConfederation={setConfederation} />
      <IconConfederation iconPath={currentConfederation.iconPath} confederation={currentConfederation.name}/>
    </div>
  )
}