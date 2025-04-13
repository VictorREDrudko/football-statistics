import s from './NationalTeams.module.css'
import { NationalTeamsCard } from './nationTeamCard/NationTeamCard'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { urlWithHyphen, urlWithoutHyphen } from 'common/utils/urlWithHyphen'
import { Confederation, NationalTeam } from 'data/nationalTeamsData/type-nationalTeams'
import { confederation, confederationBackground, nationalTeams, teamsByConfederation } from 'data/nationalTeamsData/nationalTeams'
import { TeamPartiallInfo } from './teamPartiallInfo/TeamPartiallInfo'
import { getCurrentCountryName } from 'logics/nationalTeamsLogic/getCurrentCountryName'
import { SubmenuOptions } from './submenuOptions/SubmenuOptions'
import { sortTeams } from 'logics/nationalTeamsLogic/sortTeams'

export const NationalTeams = () => {
  const [team, setTeam] = useState<string>('')
  const [confeder, setConfeder] = useState<Confederation>('uefa');
  const [sortType, setSortType] = useState<string>('alphabet')

  const navigate = useNavigate();

  const { confederationRoute, teamRoute } = useParams<{ confederationRoute: string, teamRoute: string }>();

  useEffect(() => {
    if (confederationRoute && confederation.includes(confederationRoute as Confederation)) {
      setConfeder(confederationRoute as Confederation);
    } else {
      setConfeder('uefa');
    }

    if (teamRoute) setTeam(urlWithoutHyphen(teamRoute));

  }, [confederationRoute, teamRoute]);

  const navigateToTeam = (team: string) => {
    navigate(`/teams/${confederationRoute}/${urlWithHyphen(team)}`)
  };

  const closeInfoCard = () => {
    setTeam('');
    navigate(`/teams/${confederationRoute}`);
  };

  // Сортировка
  // массив объектов (с информацией о команде) определенной конфедерации
  const confederationTeamsData: NationalTeam[] = teamsByConfederation[confeder].map(teamName => {
    return nationalTeams[teamName]
  })

  // Количество команд
  const numberTeams = confederationTeamsData.length

  const sortedTeams = sortTeams([...confederationTeamsData], sortType);

  const changeSortType = (sortType: string) => {
    setSortType(sortType)
  }

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
      <SubmenuOptions sortType={sortType} 
                      changeSortType={changeSortType} 
                      setConfeder={setConfeder} 
                      numberTeams={numberTeams}
                      confeder={confeder}
      />
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