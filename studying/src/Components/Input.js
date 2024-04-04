import styles from '../Css/input.module.css'
function Input({type,label,placeholder}){
    return (
        <div className={styles.input}>
            <label htmlFor="input">{label}</label>
            <input type={type} name="input" id="" placeholder={placeholder} />
        </div>
    )
}
export default Input