import styles from '../Css/header.module.css';
import { Link } from 'react-router-dom';
function Header(){
    return (
        <header className={styles.myHeader}>
            <h1>Basic Marketplace</h1>
            <nav>
                <div className={styles.navItem}><Link className={styles.link} to='/'>Home</Link></div>
                <div className={styles.navItem}><Link className={styles.link} to='/login'>Login</Link></div>
                <div className={styles.navItem}><Link className={styles.link} to='/register'>Register</Link></div>
            </nav>
        </header>
    )
}
export default Header