import s from './ButtonClose.module.css'

type Props = {
  onClose: () => void
  zIndex: number
}

export const ButtonClose = ({onClose, zIndex}: Props) => {
  return (
    <button className={s.button} onClick={onClose} style={{zIndex: zIndex}}>X</button>
  )
}