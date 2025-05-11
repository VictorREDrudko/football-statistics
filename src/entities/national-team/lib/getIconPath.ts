import iconGoldMedal from './../assets/icon-medal/gold-medal.png'
import iconSilverMedal from './../assets/icon-medal/silver-medal.png'
import iconBronzeMedal from './../assets/icon-medal/bronze-medal.png'
import iconCounter from './../assets/icon-card/icon-counter.png'

export const getIconPath = (title: string) => {
  return title === 'champion' ? iconGoldMedal : 
  title === 'runner-up' ? iconSilverMedal :
  title === 'third-place' ? iconBronzeMedal : 
  title === 'appearances' ? iconCounter :
  title === 'matches' ? iconCounter : ''
}