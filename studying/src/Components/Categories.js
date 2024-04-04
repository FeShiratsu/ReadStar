import styles from "../Css/categories.module.css"
function Categories({categories,clickFunc}){
    return(
        <div className={styles.categories}>
            <h1>Categories</h1>
            <div className={styles.catList}>
            {
                categories.map((cat,index) => (
                    <p onClick={()=>(clickFunc(cat))} key={index}>{cat}</p>
                ))//Reconstruct in click
            }
            </div>
        </div>
    );
}
export default Categories;