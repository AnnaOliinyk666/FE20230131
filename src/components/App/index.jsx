import { useState } from "react";
import BasketItem from "../BasketItem";
import Calculation from "../Calculation";
import s from './style.module.css';


function App() {
  const products = [
    {
      id: 1,
      title: 'window',
      price: 15,
      count: 4
    },
    {
      id: 2,
      title: 'door',
      price: 150,
      count: 1
    },
    {
      id: 3,
      title: 'handel',
      price: 20,
      count: 8
    },
    {
      id: 4,
      title: 'molding',
      price: 7,
      count: 5
    },
    {
      id: 5,
      title: 'Stich',
      price: 100,
      count: 3
    }
  ];

  const [basket,setBasket] = useState(products);

  const increment = value => {
    const target = basket.find(({id}) => id === value);
    target.count++;
    setBasket([...basket]);
  }
  const decrement = value => {
    const target = basket.find(({id}) => id === value);
    target.count--;
    if (target.count === 0){
      setBasket(basket.filter(elem => elem!== target));
    }else{
      setBasket([...basket]);
    }
  }

  
  return (
    <div>
      <h1 className={s.bask}>Basket</h1>
      <div>
      {
        basket.map(item => 
          <BasketItem  
          key={item.id} 
          increment={increment} 
          decrement={decrement}
          {...item}/>
        )
      }
      </div>
      <div>
        <Calculation basket={basket}/>
      </div>
      
    </div>
    
  );
}

export default App;
