import styles from '../Css/input.module.css'
function Input({title,type}){
    return(
        <div className={styles.input}>
            <label htmlFor={title}>{title}</label>
            <input type={type} name={title}/>
        </div>
    )
}
export default Input