import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Game {
        game: String
        platform: String
        status: String
        lastUpdatedAt: String
        Rating: Float
        finalObjective: String
    }

    type Query {
        games: [Game]
    }
`)

export default schema