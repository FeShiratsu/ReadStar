import Product from '../Components/Product'

import styles from '../Css/home.module.css'
import iphone from '../Images/product.jpg'
import Tablet from '../Images/tablet.png'
function Home(){
    return(
        <main className={styles.hPage}>
            <div className={styles.content}>
                <Product name="Iphone" price={7.5} image={iphone}></Product>
                <Product name="Tablet" price={700.5} image={Tablet}></Product>
                <Product name="Iphone" price={7.5} image={iphone}></Product>
                <Product name="Tablet" price={700.5} image={Tablet}></Product>
                    
            </div>
        </main>
    )
}
export default Home