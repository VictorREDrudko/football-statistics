import { NationalTeam } from 'data/nationalTeamsData/type-nationalTeams'
import s from './TeamPartiallInfo.module.css'
import { getCurrentCountryName } from 'logics/nationalTeamsLogic/getCurrentCountryName'
import { Flag } from 'common/components/flag/Flag'
import { useEffect, useState } from 'react'
import { getCurrentYear } from 'utils/getCurrentYear'

type Props = {
  data: NationalTeam
  setTeam: (team: string) => void
  navigateToTeam: (team: string) => void;
}

export const TeamPartiallInfo = ({data, setTeam, navigateToTeam}: Props) => {
  // отображение карточки с учетом ширины экрана
  const [style, setStyle] = useState({ width: '7rem' });

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth <= 768 ? '4rem' : '7rem';
      setStyle({ width: newWidth });
    };

    // Вызываем сразу при монтировании
    handleResize();

    // Добавляем слушатель
    window.addEventListener('resize', handleResize);

    // Удаляем слушатель при размонтировании
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
    
  const showInfoTeam = () => {
    setTeam(getCurrentCountryName(data.names));
    navigateToTeam(getCurrentCountryName(data.names));
  }

  const name = getCurrentCountryName(data.names)
  const currentYear = getCurrentYear();

  const styleNoRealCountryTitle = data.isCountryReal ? `${s.title}` : `${s.titleNoReal}`
  const styleNoRealCountryIcon = data.isCountryReal ? `${s.icon}` : `${s.iconNoReal}`

  return (
    <li className={s.container} onClick={showInfoTeam}>
      <div className={s.containerIcon}>
        <div className={s.containerFlag}>
          <Flag countryName={name} year={currentYear} />
        </div>
        <img className={styleNoRealCountryIcon} src={data.associationIcon} alt={`${data.names} football association icon`} />
      </div>
      <h3 className={styleNoRealCountryTitle}>{name}</h3>
    </li>
  )
}