import styles from '../Css/home.module.css'
function Home(){
    return(
        <main className={styles.hPage}>
            <div className={styles.content}>
                <div className={styles.product}>Product 1</div>
                <div className={styles.product}>Product 1</div>
                <div className={styles.product}>Product 1</div>
                <div className={styles.product}>Product 1</div>
            </div>
        </main>
    )
}
export default Home