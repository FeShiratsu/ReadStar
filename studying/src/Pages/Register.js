
import Input from '../Components/Input'
import styles from '../Css/login.module.css'
function Register(){
    function tryRegister(){

    }
    return (
        <main className={styles.login}>
            <form className={styles.form}> 
                <h1>A new Customer?</h1>
                <Input className={styles.input} label={"Email:"} placeholder={"Insert your email.."} type={"email"}></Input>
                <br></br>
                <Input className={styles.input} label={"Password:"} placeholder={"Insert your password.."} type={"password"}></Input>
                <br></br><br></br>
                <button>Register</button>
                <a href="/login">Back to Login?</a>
            </form>
        </main>
    )
}
export default Register
