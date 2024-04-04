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
    const [selectedCat,changeCat] = useState("Aventura")

    function makePage(){
    }
    
    return(
        <main className={styles.container}>
            <h2>Trending now!</h2>
            <div className={styles.list}>
                <Book name = "Banana Diary 1" bookSrc={book3}  price = {1.50}></Book>
                <Book name = "Banana Diary 2" bookSrc={book4}  price = {2.50}></Book>
                <Book name = "Banana Diary 3" bookSrc={book5}  price = {3.50}></Book>
            </div>
            <Categories categories={categ} clickFunc= {changeCat} />
            <br></br><br></br>
            <h4>You selected:</h4>
            <h3>{selectedCat}</h3>
            <div className={styles.list}>
                <Book name = "Credo Assassino 1" bookSrc={book6}  price = {5.50}></Book>
                <Book name = "Credo Assassino 2" bookSrc={book7}  price = {6.50}></Book>
                <Book name = "Credo Assassino 3" bookSrc={book2}  price = {7.50}></Book>
            </div>
        </main>
    );
}

export default Home

