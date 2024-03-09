import styles from '../Css/home.module.css'
import image from '../Images/product.jpg'
function Home(){
    return(
        <main className={styles.hPage}>
            <div className={styles.content}>
                <div className={styles.product}>
                    <img src={image} alt=""/>
                    Product 1
                    <div className={styles.buttons}>
                        <button>Buy</button>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Home