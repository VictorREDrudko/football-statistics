import { confederation, getCurrentCountryAttribut, nameTeams, nationalTeams } from 'data/data'
import s from './NationalTeams.module.css'
import { NationalTeamsCard } from './nationTeamCard/NationTeamCard'
import { ListNationalTeams } from './listNationalTeams/ListNationalTeams'
import { useEffect, useState } from 'react'
import { Select } from './select/Select'
import { ConfederationType, NationalTeam } from 'data/type-data'
import { useNavigate, useParams } from 'react-router-dom'
import { urlWithHyphen, urlWithoutHyphen } from 'common/utils/urlWithHyphen'

export const NationalTeams = () => {
  const [team, setTeam] = useState<string>('')
  const [confeder, setConfeder] = useState<ConfederationType>('uefa');
  const [sorting, setSorting] = useState<string>('alphabet')

  const navigate = useNavigate();

  const { confederationRoute, teamRoute } = useParams<{ confederationRoute: string, teamRoute: string }>();

  useEffect(() => {
    if (confederationRoute && confederation.includes(confederationRoute as ConfederationType)) {
      setConfeder(confederationRoute as ConfederationType);
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
  const arrayTeams: NationalTeam[] = nameTeams[confeder].map(el => {
    return nationalTeams[el]
  })

  const sortTeams = (teams: NationalTeam[]) => {
    if (sorting === 'alphabet') {
      return teams.sort((a, b) => getCurrentCountryAttribut(a.name).localeCompare(getCurrentCountryAttribut(b.name)));
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