export type GamesType = {
    id: number;
    name: string;
    provider: number;
    cover: string;
    coverLarge: string;
    date: string;
}

export type GamesGroupType = {
    id: number;
    name: string;
    games: number[];
}

export type GamesProvidersType = {
    id: number;
    name: string;
    logo: string;
}
