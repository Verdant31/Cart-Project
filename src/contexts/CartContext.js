import { createContext, useEffect, useState } from "react";
import products from '../data.json';

export const CartContext = createContext([]);

export function CartContextProvider(props) {
  const [ items, setItems ] = useState([])

  useEffect(() => {
    setItems(products)
  }, [])
  return (
    <CartContext.Provider value={{items}}>
      {props.children}
    </CartContext.Provider>
  ) 
}
