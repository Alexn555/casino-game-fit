import { GamesType, GamesGroupType } from "../config/games";
import { SelectorsType } from "../config/selectors";

export class FilterService {

    filterByText(games: GamesType[], searchText: string): GamesType[] {
        return games.filter(game => game.name.toLowerCase().search(searchText.toLowerCase()) !== -1);
    }

    getIdsFromValues(selectors: SelectorsType[]): (string | number)[] {
        const ids = selectors.map((selector) => {
            return selector.value;
        });
        return ids;
    }

    filterByProviders(games: GamesType[], selectors: SelectorsType[]): GamesType[] {
        const ids = this.getIdsFromValues(selectors);
        const filtered: GamesType[] = [];
        games.forEach((game) => {
            ids.forEach((id) => {
                if (id === game.provider) {
                    filtered.push(game);
                }
            });
        });

        return filtered;
    }

    filterByGroups(
        games: GamesType[], 
        groups: GamesGroupType[], 
        selectors: SelectorsType[]): GamesType[] {
        const ids = this.getIdsFromValues(selectors);
        const filtedGroups = [];
        const gameIds: number[] = [];

        groups.forEach((group) => {
            ids.forEach((id) => {
                if (id === group.id) {
                    filtedGroups.push(group);
                    for (const gpGame of group.games) {
                        const isDuplicate = gameIds.indexOf(gpGame) > -1;
                        if (!isDuplicate) {
                            gameIds.push(gpGame);
                        } 
                    }
                }
            });
        });

        const filteredGames: GamesType[] = [];
        games.forEach((game) => {
            gameIds.forEach((gmId) => {
                if (gmId === game.id) {
                    filteredGames.push(game);
                }
            });
        });
        return filteredGames;
    }

    filterByOrder(games: GamesType[], selectors: SelectorsType[]): GamesType[] {
        const value = selectors[0].value;  
 
        switch (value) {
            case 1: // asc
            default:
              return games.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
            case 2: // desc
              return games.sort((a, b) => a.name !== b.name ? a.name < b.name ? 1 : -1 : 0);
            case 3: // newest
              const minYear = 2021;
              const filtered: GamesType[] = [];
              games.forEach((game) => {
                const gmYear = parseInt(game.date.substring(0, 4), 10);
                if (gmYear >= minYear) {
                   filtered.push(game);
                }
              });
              return filtered;
        }
    }
}
   