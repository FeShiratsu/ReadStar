import Cart from '../Images/carrinho-de-compras.png'
import styles from '../Css/book.module.css'
import { Link, useNavigate } from 'react-router-dom';
function Book({price,name,bookSrc}){
    const navigate = useNavigate();
    const dataToPass = { name: 'John Doe', age: 25 };
    return (
        <div className={styles.bookContainer}>
            <Link to={`/bookShow/`} state={
                {
                    price
                }
            }>
            <img src={bookSrc} className={styles.titleImg} onClick={()=>{
            }}/>
            </Link>
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