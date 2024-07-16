import { useState, useEffect } from 'react';
import { AuthService } from '../services/auth.service';
import { GameService } from '../services/games.service';
import HeadMenu from '../headMenu/HeadMenu';
import Games from './games/Games';
import SortPanel from './sortPanel/SortPanel';
import styles from './gamesControl.module.scss';
import { GamesType, GamesProvidersType, GamesGroupType } from '../config/games';

const GamesControl: React.FC = () => {
  let authService: any;
  let gameService: any;
  const [isLogged, setLoggedIn] = useState(false);
  const [games, setGames] = useState<GamesType[]>([]);
  const [originalGames, setOriginalGames] = useState<GamesType[]>([]);
  const [providers, setProviders] = useState<GamesProvidersType[]>([]);
  const [groups, setGroups] = useState<GamesGroupType[]>([]);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    authService = new AuthService();
    gameService = new GameService();
    setLoggedIn(authService.hasToken());
    const originGames = gameService.getGames();
    setGames(originGames);
    setOriginalGames(originGames);
    setProviders(gameService.getProviders());
    setGroups(gameService.getGroups());

    return () => {
      // Clean up the service when leave
      authService = {};
      gameService = {};
    };
  }, []);

  const handleFilteredGames = (filtered: GamesType[]) => {
    setGames([]);
    setTimeout(() => { setGames(filtered); }, 100);
  }

  const handleReset = () => {
    setGames(originalGames);
    window.scrollTo(0, 0); 
  }

  const handleColumnsChange = (nwColumns: number) => {
    setColumns(nwColumns);
  }

  return (
    <div>
      {!isLogged ? (
        <div className={styles.games}>
          <h2>Games</h2>
          <p className={styles.error}>Sorry you are not logged in. Please login</p>
        </div>
      ) : (
        <>
          <HeadMenu />
          <div className={styles.gamesWrapper}>
            <Games games={games} columns={columns} />
            <SortPanel
              games={games}
              providers={providers} 
              groups={groups}  
              gameCount={games.length}
              onFilterChange={(filtered: GamesType[]) => { handleFilteredGames(filtered)}}
              onReset={handleReset}
              onColumnsChanges={handleColumnsChange}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default GamesControl;