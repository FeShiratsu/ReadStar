import Cart from '../Images/carrinho-de-compras.png'
import styles from '../Css/book.module.css'
import book1 from '../Images/919dh4AX2hL._AC_UF1000,1000_QL80_.jpg'
function Book({price,name}){
    return (
        <div className={styles.bookContainer}>
            <img src={book1} alt=""/>
            <h3>{name}</h3>
            <h3>{price} U$</h3>
            <div className={styles.actionBar}>
                <button>Buy now!</button>
                <img className={styles.classImg} src={Cart}></img>
            </div>
        </div>
    );
}
export default Book