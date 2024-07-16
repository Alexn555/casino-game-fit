import React, { useState, useEffect } from 'react';
import { GamesType } from '../../config/games';
import styles from './games.module.scss';

type GameProps = {
  games: GamesType[];
  columns: number;
}

const Games: React.FC<GameProps> = ({games, columns}) => {
  const [gridCl, setGrid] = useState(styles.games);
  const items = games.map((game) =>
   <div key={game.id}>
    <img src={game.cover} className={styles.game} alt={game.name}/>
   </div>
  );

  const setColumnCl = (clnmNum: number) => {
    switch (clnmNum) {
      case 1: 
        return styles.gamesGridOne;
      case 2:
        return styles.gamesGridTwo;
      case 3:
      default:
        return styles.gamesGridThree;
    }
  }

  useEffect(() => {
    setGrid(setColumnCl(columns));
  }, [columns]);

  return (
    <>
      <div className={`${styles.games} ${gridCl}`}>
        {items}
      </div>
    </>
  );
}

export default Games;