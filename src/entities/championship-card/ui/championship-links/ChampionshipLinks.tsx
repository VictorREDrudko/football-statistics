
import { Link } from '@/shared/ui/link/Link'
import s from './ChampionshipLinks.module.scss'

type Props = {
  championshipYear: string
  isDisabledFinalStage: boolean
  isDisabledQualification: boolean
}

export const ChampionshipLinks = ({
  championshipYear,
  isDisabledFinalStage,
  isDisabledQualification,
}: Props) => {
  return (
    <div className={s.container}>
      <Link
        to={`final-stage/${championshipYear}`}
        variant="primary-light"
        disabled={isDisabledFinalStage}>
        {'Final stage'}
      </Link>
      <Link
        to={`qualification/${championshipYear}`}
        variant="primary-light"
        disabled={isDisabledQualification}>
        {'Qualification'}
      </Link>
    </div>
  )
}
