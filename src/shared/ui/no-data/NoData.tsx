// import { notFound } from '@/shared/assets'
import s from './NoData.module.scss'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared'

type Props = {
  message?: string
  textButton?: string
  children?: React.ReactNode
}

export const NoData = ({
  message = 'No information yet!',
  textButton = 'Go back',
  children,
}: Props) => {
  const navigate = useNavigate()

  return (
    <div className={s.container}>
      <img
        src={'notFound'}
        alt="not found football data image"
        className={s.image}
      />
      <span className={s.text}>{message}</span>
      <Button variant="danger" onClick={() => navigate(-1)}>
        {textButton}
      </Button>
      {children}
    </div>
  )
}
