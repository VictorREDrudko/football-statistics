import { NationalTeam } from '@/entities/nationalTeams/model/NationalTeam'
import { Flag } from '../../../common/components/flag/Flag'
import { getCurrentCountryName } from '../../../logics/nationalTeamsLogic/getCurrentCountryName'
import { getCurrentYear } from '../../../shared/lib/getCurrentYear'
import s from './TeamPartiallInfo.module.css'
import { useEffect, useState } from 'react'


type Props = {
  data: NationalTeam;
  onSelect?: () => void;
  setTeam?: (team: string) => void; // Оставляем для обратной совместимости
}

export const TeamPartiallInfo = ({data, onSelect, setTeam}: Props) => {
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
    
  const handleClick = () => {
    if (onSelect) {
      onSelect();
    } else if (setTeam && data.names[0]?.nameCountry) {
      setTeam(data.names[0].nameCountry);
    }
  };

  const name = getCurrentCountryName(data.names)
  const currentYear = getCurrentYear();

  const styleNoRealCountryTitle = data.isCountryReal ? `${s.title}` : `${s.titleNoReal}`
  const styleNoRealCountryIcon = data.isCountryReal ? `${s.icon}` : `${s.iconNoReal}`

  return (
    <li className={s.container} onClick={handleClick}>
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