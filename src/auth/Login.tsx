import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { LCRoutes } from '../routes/Routes';
import styles from './login.module.scss';
import logo from '../assets/logo.png';
import spinner from '../assets/spinner.png';
import { AuthService } from '../services/auth.service';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(false);
  const [isNotice, openNotice] = useState(false);
  const navigate = useNavigate();
  let authService: any;
  
  useEffect(() => {
    authService = new AuthService();
    return () => {
      // Clean up the service when leave
      authService = {};
    };
  });

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  }

  const handlePwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleNotice = () => {
    openNotice(!isNotice);
  }

  const handleAuth = (e: any) => {
    e.preventDefault();
    const isNotEmpty = user.length > 2 && password.length > 2;
    if (isNotEmpty && authService.isUserCorrect(user, password)) {
      navigate(LCRoutes.Games);
    } else {
      setAuthError(true);
      setTimeout(() => { setAuthError(false); }, 2000);
    }
  }

  return (
    <form className={styles.wrapper} onSubmit={handleAuth}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="ComeOn" />
        </div>
        <div className={styles.floatInput}>
          <label htmlFor="username">Login</label>
          <input
            type="text"
            name="username" 
            placeholder="username" 
            onChange={(e)=>handleUserChange(e)}
          />
        </div>
        <div className={styles.floatInput}>
          <label htmlFor="password">Password</label>
          <input type="password"
            name="password" 
            placeholder="password"
            onChange={(e)=>handlePwdChange(e)}
           />
        </div>
        <div onClick={(e) => { handleNotice(); }} className={styles.noticeBtn}>Help with password</div>
        {isNotice ? ( <div className={styles.notice}>
            User: rebecka, pwd: secret
          </div>) : null
        }
        <button className={styles.submit}>
          <img src={spinner} alt="login" /> Enter
        </button>
        {authError ? (
          <div className={styles.error}>
            <p>Sorry your login details are not correct</p>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </form>
  );
}

export default Login;