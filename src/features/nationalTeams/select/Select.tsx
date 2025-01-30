import { confederation } from 'data/data'
import s from './Select.module.css'
import { ConfederationType } from 'data/type-data'
import { useState } from 'react'

export const Select = () => {
  const [confeder, setConfeder] = useState<ConfederationType>('UEFA')

  const mapped = confederation.map((el, index) => {
    return (
      <div className={s.item} key={index} onClick={() => setConfeder(el)}>
        <input type="radio" id={el} name="confederation" value={el} checked={el === confeder}/>
        <label htmlFor={el}>{el}</label>
      </div>
    )
  })


  return (
    <div>
      <fieldset className={s.container}>
        <legend className={s.legend}>Select a football confederation:</legend>
        {mapped}
      </fieldset>
    </div>
  )
}