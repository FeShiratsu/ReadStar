import Cart from '../Images/carrinho-de-compras.png'
import styles from '../Css/book.module.css'
function Book({price,name,bookSrc}){
    return (
        <div className={styles.bookContainer}>
            <img src={bookSrc} className={styles.titleImg} alt=""/>
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