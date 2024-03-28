import styles from "../Css/categories.module.css"
function Categories({categories}){
    return(
        <div className={styles.categories}>
            <h1>Categories</h1>
            <div className={styles.catList}>
            {
                categories.map((cat,index) => (
                    <p>{cat}</p>
                ))
            }
            </div>
        </div>
    );
}
export default Categories;