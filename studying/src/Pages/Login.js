import Input from '../Components/Input'
import Product from '../Components/Product'

import styles from '../Css/login.module.css'
import iphone from '../Images/product.jpg'
import Tablet from '../Images/tablet.png'
function Login(){
    return(
        <main className={styles.hPage}>
            <div className={styles.content}>
                <form>
                    <Input title="Email" type="email"></Input>
                    <br></br>
                    <Input title="Password" type="password"></Input>
                </form>
            </div>
        </main>
    )
}
export default Login