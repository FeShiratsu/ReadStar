
import styles from '../Css/seebook.module.css'
import image from '../Images/2 (1).jpg'
import Cart from '../Images/carrinho-de-compras.png'
function SeeBook(){
    return(
        <div className={styles.bookContainer}>
            <div className={styles.imgTile}>
                <img src={image} alt=""/>
            </div>
            <div className={styles.infoTile}>
                <h1 className={styles.bookName}>Diary of banana</h1>
                <div className={styles.rating}>
                    <p>Rating:</p>
                </div>
                <p className={styles.bookInfo}>Info about the book</p>

                <div className={styles.actionBar}>
                    <button>Buy now!</button>
                    <img className={styles.classImg} src={Cart}></img>
                </div>
            </div>
        </div>
    );
}

export default SeeBook