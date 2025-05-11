import { ButtonClose } from '../button-close/ButtonClose'
import s from './ModalWindow.module.css'

type Props = {
  children: React.ReactNode;
}

export const ModalWindow = ({children}: Props) => {
  return (
    <div className={s.container}>
      <div className={s.modalContent}>
        {children}
      </div>
    </div>
  )
}