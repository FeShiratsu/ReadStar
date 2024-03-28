import { useState } from "react";
import Book from "../Components/Book";
import Categories from "../Components/Categories";
import styles from "../Css/home.module.css"
import book1 from "../Images/2 (1).jpg";
import book2 from "../Images/2 (2).jpg";
import book3 from "../Images/2 (3).jpg";
import book4 from "../Images/2 (4).jpg";
import book5 from "../Images/2 (5).jpg";
import book6 from "../Images/2 (6).jpg";
import book7 from "../Images/2 (7).jpg";

function Home(){
    const categ = ["Action","Adventure","Drama","Investigation","Kids","Fiction","Horror","Humour","Romance"]
    let selectedCat = "Adventure"

    function ChangeCat(newCat){
        selectedCat = useState(newCat)
    }

    return(
        <main className={styles.container}>
            <h2>Trending now!</h2>
            <div className={styles.list}>
                <Book name = "Banana Diary" bookSrc={book3}  price = {1.50}></Book>
                <Book name = "Banana Diary" bookSrc={book4}  price = {1.50}></Book>
                <Book name = "Banana Diary" bookSrc={book5}  price = {1.50}></Book>
            </div>
            <Categories categories={categ}/>
            <br></br><br></br>
            <h4>You selected:</h4>
            <h3>{selectedCat}</h3>
            <div className={styles.list}>
                <Book name = "Banana Diary" bookSrc={book6}  price = {1.50}></Book>
                <Book name = "Banana Diary" bookSrc={book7}  price = {1.50}></Book>
                <Book name = "Banana Diary" bookSrc={book2}  price = {1.50}></Book>
            </div>
        </main>
    );
}

export default Home

