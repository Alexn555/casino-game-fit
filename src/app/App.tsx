import { Link } from "react-router-dom";
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.header}>
      <h2>Casino Games</h2>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}

export default App;
