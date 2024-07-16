import React, { useState, useEffect } from 'react';
import { GamesType, GamesGroupType, GamesProvidersType } from '../../config/games';
import { SelectorsType } from '../../config/selectors';
import { FilterStates, FilterTitles, SortVariants } from '../../config/sort';
import { GameColumns } from '../../config/columns';
import SortSearch from './sortSearch/SortSearch';
import SortSection from './sortSection/SortSection';
import { FilterService } from '../../services/filter.service';
import styles from './sortPanel.module.scss';

type SortProps = {
  games: GamesType[],
  providers: GamesProvidersType[];
  groups: GamesGroupType[];
  gameCount: number;
  onFilterChange: (sorted: GamesType[]) => void;
  onColumnsChanges: (columns: number) => void;
  onReset: () => void;
}
  
const SortPanel: React.FC<SortProps> = ({
  games,
  providers,
  groups, 
  gameCount, 
  onFilterChange,
  onColumnsChanges,
  onReset}) => {
  const [resetState, setReset] = useState('');
  
  let filterService: any;
  useEffect(() => {
    filterService = new FilterService();
    return () => {
      // Clean up the service when leave
      filterService = {};
    };
  });

  const handleFilterGames = (nwGames: GamesType[]) => {
    onFilterChange(nwGames);
  }

  const handleReset = () => {
    setReset(FilterStates.RESET);
    setTimeout(() => { setReset(''); }, 1000);
    onReset();
  }

  const handleTextSearch = (search: string) => {
    let filtered = [];
    if (search.length < 1) {
      handleReset();
    } else {
      filtered = filterService.filterByText(games, search);
      handleFilterGames(filtered);
    }
  }

  const handleProvidersChange = (values: SelectorsType[]) => {
    const filtered = filterService.filterByProviders(games, values);
    handleFilterGames(filtered);
  }

  const handleGroupsChange = (values: SelectorsType[]) => {
    const filtered = filterService.filterByGroups(games, groups, values);
    handleFilterGames(filtered);
  }

  const handleSortChange = (values: SelectorsType[]) => {
    const filtered = filterService.filterByOrder(games, [values]);
    handleFilterGames(filtered);
  }

  const handleColumnsChange = (values: any) => {
    const columns = parseInt(values['value'].toString(), 10);
    onColumnsChanges(columns);
  }

  return (
    <>
      <div className={styles.sortPanel}>
        <div className={styles.searchBar}>
          <SortSearch 
            placeholder={FilterTitles.Search} 
            reset={resetState}
            onTextChange={handleTextSearch} 
          />
        </div>
        <SortSection 
          title={FilterTitles.Providers} 
          items={providers} 
          isMultiple={true}
          reset={resetState}
          onItemChange={(values) => handleProvidersChange(values)}
          />
        <SortSection
          title={FilterTitles.Groups}
          items={groups} 
          isMultiple={true}
          reset={resetState}
          onItemChange={handleGroupsChange}
        />
        <SortSection 
          title={FilterTitles.Sort}
          items={SortVariants} 
          isMultiple={false}
          onItemChange={handleSortChange}
        />
        <SortSection 
          title={FilterTitles.Columns}
          items={GameColumns} 
          isMultiple={false}
          onItemChange={handleColumnsChange}
        />
        <div className={styles.gamesCount}>
          <span>Game count: {gameCount} </span>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
}
  
export default SortPanel;
