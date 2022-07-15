import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../CartItem/CartItem';
import styles from './styles.module.css';

export function Cart() {
  const { items } = useContext(CartContext)

  return (  
    <div>
      <h1 className={styles.Title}>Cart products</h1>
      {items.map(product => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  )
}



