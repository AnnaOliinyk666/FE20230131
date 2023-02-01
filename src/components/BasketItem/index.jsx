import React from 'react'
import s from './style.module.css'

export default function BasketItem({id,title,price,count,increment,decrement}) {
  return (
    <div>
      <div className={s.card}>
      
        <p>{title}</p>
        <p>{price}</p>
        <p>{count}</p>
        <div>
            <button className={s.green} onClick={()=>increment(id)}>+</button>
            <button className={s.red} onClick={()=>decrement(id)}>-</button>
        </div>
      </div>
    </div>
  )
}
