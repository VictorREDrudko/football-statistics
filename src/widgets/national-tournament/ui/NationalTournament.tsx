import { NavLink } from "react-router-dom"
import s from './NationalTournament.module.scss'
import { ConfederationInfo } from "@/entities/national-team/model/types/types"
import { IconNationalCup } from "@/shared/ui/icon-national-cup/IconNationalCup"


type Props = {
  tournamentData: ConfederationInfo
}

export const NationalTournament = ({tournamentData}: Props) => {
  // const classNameWorldCup = tournamentData.name === 'FIFA' ? 'containerWorldCup' : '';
  const classNameWorldCup =  '';
  const order = Number(tournamentData.id[tournamentData.id.length - 1]);

  return (
    <div className={`${s.container} ${s[classNameWorldCup]}`} style={{order: order}}>
      <NavLink to={tournamentData.path}>
        <IconNationalCup  iconCupPath={tournamentData.iconPathCup} 
                          tournamentName={tournamentData.nameTournament}
        />
      </NavLink>
    </div>
  )
}