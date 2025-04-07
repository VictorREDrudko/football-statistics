import s from './NationalTeams.module.css'
import { NationalTeamsCard } from './nationTeamCard/NationTeamCard'
import { ListNationalTeams } from './listNationalTeams/ListNationalTeams'
import { useEffect, useState } from 'react'
import { Select } from './select/Select'
import { useNavigate, useParams } from 'react-router-dom'
import { urlWithHyphen, urlWithoutHyphen } from 'common/utils/urlWithHyphen'
import { Confederation, NationalTeam } from 'data/type-nationalTeams'
import { confederation, confederationTeamNames, nationalTeams } from 'data/nationalTeams'
import { getCurrentCountryAttribut } from 'data/data'

export const NationalTeams = () => {
  const [team, setTeam] = useState<string>('')
  const [confeder, setConfeder] = useState<Confederation>('uefa');
  const [sorting, setSorting] = useState<string>('alphabet')

  const navigate = useNavigate();

  const { confederationRoute, teamRoute } = useParams<{ confederationRoute: string, teamRoute: string }>();

  useEffect(() => {
    if (confederationRoute && confederation.includes(confederationRoute as Confederation)) {
      setConfeder(confederationRoute as Confederation);
    } else {
      setConfeder('uefa');
    }
    if (teamRoute) {
      setTeam(urlWithoutHyphen(teamRoute));
    } 
  }, [confederationRoute, teamRoute]);

  const navigateToTeam = (team: string) => {
    navigate(`/teams/${confederationRoute}/${urlWithHyphen(team)}`)
  };

  const closeInfoCard = () => {
    setTeam('');
    navigate(`/teams/${confederationRoute}`);
  };


  // Сортировка
  // Нужно создать массив объектов (команд) 
  const arrayTeams: NationalTeam[] = confederationTeamNames[confeder].map(el => {
    return nationalTeams[el]
  })

  const sortTeams = (teams: NationalTeam[]) => {
    if (sorting === 'alphabet') {
      return teams.sort((a, b) => getCurrentCountryAttribut(a.names).localeCompare(getCurrentCountryAttribut(b.names)));
    } else if (sorting === 'rating') {
      // Добавьте логику сортировки по рейтингу, если есть рейтинг у команд
      return teams.sort((a, b) => b.rating - a.rating);
    }
    return teams;
  };

  const sortedTeams = sortTeams([...arrayTeams]);

  const mapped = sortedTeams.map(el => {
    return <ListNationalTeams data={el}
                              key={el.id} 
                              setTeam={(team: string) => setTeam(team)}
                              navigateToTeam={navigateToTeam}/>
  })

  const sort = (sort: string) => {
    setSorting(sort)
  }

  const rendering = team ? 
    <NationalTeamsCard data={nationalTeams[team]} closeInfoCard={closeInfoCard}/>
    : 
    <>
      <div className={s.containerNumber}>
        <span className={s.number}>{arrayTeams.length}</span>
        <span className={s.title}>Teams</span>
      </div>
      <Select setConfeder={setConfeder} sort={sort} sorting={sorting} />
      <ul className={s.wrapper}> {mapped} </ul>
    </>

  return (
    <div className={s.container}>
      {rendering}
    </div>
  )
}