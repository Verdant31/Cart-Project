import styles from './styles.module.css';

export default function CartItem(props) {
  return (
    <div className={styles.Container}>
      <p>ID: <strong>{props.product.id}</strong></p>
      <p>Name: {props.product.name}</p>
      <p>Price: R${props.product.price}</p>
    </div>
  )
}