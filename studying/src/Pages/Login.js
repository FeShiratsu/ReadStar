
import Input from '../Components/Input'
import styles from '../Css/login.module.css'
function Login(props){
    function tryLogin(){

    }
    return (
        <main className={styles.login}>
            <form className={styles.form}> 
                <h1>Welcome customer</h1>
                <Input className={styles.input} label={"Email:"} placeholder={"Insert your email.."} type={"email"}></Input>
                <br></br>
                <Input className={styles.input} label={"Password:"} placeholder={"Insert your password.."} type={"password"}></Input>
                <br></br><br></br>
                <button>Login</button>
                <a href="">Forgot your password?</a>
                <br></br>
                <a href="/register">New in here?</a>
            </form>
        </main>
    )
}
export default Login
