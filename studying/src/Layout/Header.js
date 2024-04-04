import styles from '../Css/header.module.css';
import { Link } from 'react-router-dom';
import carrinhoCompras from '../Images/carrinho-de-compras.png'
function Header(){
    return (
        <header className={styles.myHeader}>
            <a href="/"><h1>ReadStar</h1></a>
            <nav>
                <img className={styles.cart} src={carrinhoCompras} alt=""/>
                <div className={styles.navItem}><Link className={styles.link} to='/login'>Login</Link></div>
                <div className={styles.navItem}><Link className={styles.link} to='/register'>Register</Link></div>
            </nav>
        </header>
    )
}
export default Header