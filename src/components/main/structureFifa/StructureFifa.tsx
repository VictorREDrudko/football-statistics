import s from './StructureFifa.module.css'

type StructureFifaType = {
  structure: string[]
}

export const StructureFifa = ({structure} : StructureFifaType) => {
  const mappedStructure = structure.map(el => {
    return (
      <li>
        <a>{el}</a>
      </li>
    )
  })

  return (
    <div>
      <h2>Structure</h2>
      <span>FIFA - The Fédération Internationale de Football Association (211 national associations)</span>
      <span>continental confederations</span>
      <ul className={s.containerLink}>{mappedStructure}</ul>
      {/* <img src={worldMapImage} alt='map' className={s.image}/> */}
    </div>
  )
}