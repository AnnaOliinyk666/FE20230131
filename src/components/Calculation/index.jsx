import React from 'react'
import s from './style.module.css'

export default function Calculation({basket}) {
    
    const totalSum = basket.reduce((acc,{count,price})=> acc+count*price,0)
    const totalCount = basket.reduce((acc,{count})=> acc + count,0);
  return (
    <div className={s.card}>
        <p>total sum: {totalSum}</p>
        <p>total count: {totalCount}</p>
    </div>
  )
}
