import styles from '../Css/home.module.css'

import { useState } from 'react';
function Product({name,price,image}){
    const [iD, setiD] = useState("prodName");
    const handleClick = () => {
        setiD("prodName");
        alert("Updated ID, hence the styling");
    };
    return (
        <>
            <div className={styles.product}>
                        <h1 id={iD}>{name}</h1>
                        <img src={image} alt=""/>
                        <h2>{price} R$</h2>
                        <br></br>
                        <div className={styles.buttons}>
                            
                            <button onClick={handleClick}>Buy</button>
                            <button>Add to cart</button>
                        </div>
            </div>
        </>
    )
    
}
export default Product