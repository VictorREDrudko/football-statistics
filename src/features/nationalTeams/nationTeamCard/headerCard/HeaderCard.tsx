import { Flag } from 'common/components/flag/Flag'
import s from './HeaderCard.module.css'
import { useEffect, useState } from 'react'

type TitleCardProps = {
  flag: string
  name: string
  icon: string
  year: string
}

export const HeaderCard = ({flag, name, icon, year}: TitleCardProps) => {
  // отображение флага с учетом ширины экрана
  const [style, setStyle] = useState({width: '80px', borderRadius: '15px'});

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth <= 480 ? '50px' : '80px';
      const newborderRadius = window.innerWidth <= 480 ? '10px' : '15px';
      setStyle({ width: newWidth, borderRadius: newborderRadius });
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

  return (
    <div className={s.container}>
      <div className={s.containerHeader}>
        <Flag year={year} countryName={name} style={style}/>
        <div>
          <h3 className={s.title}>{name}</h3>
          <span className={s.text}>Football Association</span>
        </div>
        <img className={s.icon} src={icon} alt={`${name} football association icon`} />
      </div>
  </div>
  )
}