import { Confederation } from 'data/nationalTeamsData/type-nationalTeams'
import { Select } from './select/Select'
import s from './SubmenuOptions.module.css'
import { IconConfederation } from '../iconConfederation/IconConfederation'
import { NumberTeams } from './numberTeams/NumberTeams'
import { confederationIcon } from 'data/nationalTeamsData/nationalTeams'

type Props = {
  numberTeams: number
  confeder: Confederation
  setConfeder: (confeder: Confederation) => void
}

export const SubmenuOptions = ({numberTeams, confeder, setConfeder} : Props) => {
  const icon = confederationIcon[confeder]

  return (
    <div className={s.container}>
      <NumberTeams numberTeams={numberTeams}/>
      <Select setConfeder={setConfeder} />
      <IconConfederation icon={icon} confeder={confeder}/>
    </div>
  )
}