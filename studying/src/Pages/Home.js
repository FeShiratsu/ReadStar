import Book from "../Components/Book";
import styles from "../Css/home.module.css"
function Home(){
    return(
        <main className={styles.container}>
            <h2>Trending now!</h2>
            <div className={styles.list}>
                <Book name = "Banana Diary" price = {1.50}></Book>
                <Book name = "Banana Diary" price = {1.50}></Book>
                <Book name = "Banana Diary" price = {1.50}></Book>
            </div>
        </main>
    );
}

export default Home