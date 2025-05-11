import s from './NationalTeams.module.css'
import { NationalTeamsCard } from './nationTeamCard/NationTeamCard'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
// import { TeamPartiallInfo } from './teamPartiallInfo/TeamPartiallInfo'
import { SubmenuOptions } from './submenuOptions/SubmenuOptions'
import { TeamPartiallInfo } from './teamPartiallInfo/TeamPartiallInfo'
import { urlWithoutHyphen, urlWithHyphen } from '../../common/utils/urlWithHyphen'
import { confederation, teamsByConfederation, nationalTeams, confederationBackground } from '../../data/nationalTeamsData/nationalTeams'
import { Confederation, NationalTeam } from '../../data/nationalTeamsData/type-nationalTeams'
import { sortTeams } from '../../logics/nationalTeamsLogic/sortTeams'
import { NationalTeamSorter } from '../nationalTeamSorter/ui/nationalTeamSorter'

export const NationalTeams = () => {
  const [team, setTeam] = useState<string>('')
  const [confeder, setConfeder] = useState<Confederation>('UEFA');
  const [searchParams, setSearchParams] = useSearchParams(); // Только чтение параметров

  // Навигация
  const navigate = useNavigate();
  const { confederationRoute, teamRoute } = useParams<{ confederationRoute: string, teamRoute: string }>();

  useEffect(() => {
    if (confederationRoute && confederation.includes(confederationRoute as Confederation)) {
      setConfeder(confederationRoute as Confederation);
    } else {
      setConfeder('UEFA');
    }

    if (teamRoute) setTeam(urlWithoutHyphen(teamRoute));

  }, [confederationRoute, teamRoute]);

  const navigateToTeam = (team: string) => {
    const currentSort = searchParams.get('sort') || 'alphabet';
    navigate(`/teams/${confederationRoute}/${urlWithHyphen(team)}?sort=${currentSort}`);
  };

  // Сортировка! Берём `sortType` из URL или устанавливаем 'alphabet' по умолчанию
    const sortType = searchParams.get('sort') || 'alphabet'

  // массив команд определенной конфедерации
  const confederationTeamsData: NationalTeam[] = teamsByConfederation[confeder].map(teamName => {
    return nationalTeams[teamName]
  })

  // Количество команд в конфедерации
  const numberTeams = confederationTeamsData.length

  const sortedTeams = sortTeams([...confederationTeamsData], sortType);

  const closeInfoCard = () => {
    const currentSort = searchParams.get('sort') || 'alphabet';
    setTeam('');
    navigate(`/teams/${confederationRoute}?sort=${currentSort}`);
  };

  // Отрисовка команд
  const renderTeamPartiallInfo = sortedTeams.map(el => {
    return <TeamPartiallInfo data={el}
                              key={el.id} 
                              setTeam={(team: string) => setTeam(team)}
                              navigateToTeam={navigateToTeam}/>
  })

  // вид: либо карточка команды - либо список команд
  const cardOrListView = team ? 
    <NationalTeamsCard data={nationalTeams[team]} closeInfoCard={closeInfoCard}/>
    : 
    <>
      {/* <SubmenuOptions setConfeder={setConfeder} 
                      numberTeams={numberTeams}
                      confeder={confeder}
      /> */}
      <NationalTeamSorter numberTeams={numberTeams}
                      confederation={confeder}
                      setConfederation={setConfeder}/>
      <ul className={s.containerPartialTeamsInfo} style={ {backgroundImage: `url(${confederationBackground[confeder]})`} }>
         {renderTeamPartiallInfo}
      </ul>
    </>

  return (
    <div className={s.container}>
      {cardOrListView}
    </div>
  )
}