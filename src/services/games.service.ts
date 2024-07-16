import { GamesType, GamesGroupType, GamesProvidersType } from "../config/games";
import data from '../server/data.json';

export class GameService {
    private games: GamesType[] = [];
    private providers: GamesProvidersType[] = [];
    private groups: GamesGroupType[] = [];
    private provImgSrc = '../assets/providers/';
   
    constructor() {
      this.setGames();
      this.setGroups();
      this.setProviders();
    }

    setGames() {
        this.games = data.games;
    }

    setGroups() {
        this.groups = data.groups;
    }

    setProviders() {
        this.providers = data.providers;
    }

    getProviderImgSrc() {
        return this.provImgSrc;
    }
   
    getGames() {
        return this.games;
    }

    getGroups() {
        return this.groups;
    }
    
    getProviders() {
        return this.providers;
    }
}
   