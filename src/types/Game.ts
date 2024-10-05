export type Game = {
    game: string;
    platform: string;
    status: PlayingStatus;
    lastUpdatedAt: Date;
    Rating: number;
    finalObjective: string;
}

enum PlayingStatus {
    ToPlay,
    Playing,
    Stopped,
    Finished
}