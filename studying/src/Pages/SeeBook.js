
import styles from '../Css/seebook.module.css'
import image from '../Images/2 (1).jpg'
import Cart from '../Images/carrinho-de-compras.png'
import star from '../Images/star.png'
function SeeBook(){
    return(
        <div className={styles.bookContainer}>
            <div className={styles.imgTile}>
                <img src={image} alt=""  />
            </div>
            <div className={styles.infoTile}>
                <h1 className={styles.bookName}>Diary of banana</h1>
                <div className={styles.rating}>
                    <p>Rating:</p>
                    <img src={star} alt="" className={styles.star} />
                    <img src={star} alt="" className={styles.star} />
                    <img src={star} alt="" className={styles.star} />
                    <img src={star} alt="" className={styles.star} />
                    <img src={star} alt="" className={styles.star} />
                </div>
                <p className={styles.bookInfo}>In the first book of the Diary of a Wimpy Kid series, #1 international bestselling author Jeff Kinney, introduces us to Greg Heffley: an unforgettable, unlikely hero that every family can relate to.
Being a kid can really stink. And no one knows this better than Greg. He finds himself thrust into middle school, where undersized weaklings share the hallways with kids who are taller, meaner, and already shaving.</p>

                <div className={styles.actionBar}>
                    <button>Buy now!</button>
                    <img className={styles.classImg} src={Cart}></img>
                </div>
            </div>
        </div>
    );
}

export default SeeBook