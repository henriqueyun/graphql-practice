import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Game {
        game: String
        platform: String
        status: String
        lastUpdatedAt: String
        rating: Float
        finalObjective: String
    }

    type Query {
        games: [Game]
        getGameById(id: Int): Game
    }
`)

export default schema