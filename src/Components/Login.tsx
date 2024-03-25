import React, {useState} from 'react';
import styles from "./Login.module.css";

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div>
            <h2 className={styles.title}>Sign in</h2>
            <form>

                <div className={styles.formGroup}>
                    <input
                        className={styles.input}
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                </div>

                <div className={styles.formGroup}>
                    <input
                        className={styles.input}
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
            </form>
            <br/>
            <h3 className={styles.h3}>FORGOT PASSWORD?</h3>
<br/>
            <label className="cb-div">
                <input type="checkbox"/>
                <label>REMEMBER ME</label>
            </label>

            <div className={styles.buttonGroup}>
                <div className={styles.buttonGroup}>
                    <button className={`${styles.button} ${styles.loginButton}`} type="button">
                        Login
                    </button>
                </div>


                <div className={styles.buttonGroup}>
                    <button className={`${styles.button} ${styles.newAcctButton}`} type="button" >
                        Create New Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;

