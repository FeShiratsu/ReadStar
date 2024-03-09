import styles from '../Css/header.module.css';
import { Link } from 'react-router-dom';
function Header(){
    return (
        <header className={styles.myHeader}>
            <h1>Basic Marketplace</h1>
            <nav>
                <Link className={styles.link} to='/'>Home</Link>
                <Link className={styles.link} to='/login'>Login</Link>
                <Link className={styles.link} to='/register'>Register</Link>
            </nav>
        </header>
    )
}
export default Header