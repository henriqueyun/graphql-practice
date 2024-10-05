export type Game = {
    game: string;
    platform: string;
    status: PlayingStatus;
    lastUpdatedAt: Date;
    Rating: number;
    finalObjective: string;
}

type PlayingStatus = "To Play" | "Playing" | "Stopped" | "Finished"