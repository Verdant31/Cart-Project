import { createContext, useEffect, useState } from "react";
import products from '../data.json';

export const CartContext = createContext([]);

export function CartContextProvider() {
  const [ items, setItems ] = useState()

  useEffect(() => {
    setItems(products)
  }, [])
}
