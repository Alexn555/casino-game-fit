import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { LCRoutes } from '../routes/Routes';
import styles from './headMenu.module.scss';
import logo from '../assets/logo.png';
import usr from '../assets/usr.png';
import { AuthService } from '../services/auth.service';

function HeadMenu() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  let authService: any;
  
  useEffect(() => {
    authService = new AuthService();
    setUser(authService.getUser());
    return () => {
      // Clean up the service when leave
      authService = {};
    };
  });

  const handleLogout = (e: any) => {
    e.preventDefault();
    authService.logout();
    navigate(LCRoutes.Logout);
  }

  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <img src={logo} alt="ComeOn" />
        </div>
        <div className={styles.userSection}>
            <div className={styles.user}>
              {user}
            </div>
            <div className={styles.logout}>
              <img src={usr} alt="user" />
               <button onClick={handleLogout}>Logout</button>
            </div>
        </div> 
    </div>
  );
}

export default HeadMenu;