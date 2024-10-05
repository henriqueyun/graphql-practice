import 'dotenv/config'
import express from 'express'
import schema from './schema'
import { createHandler } from 'graphql-http/lib/use/express'
import { getGames, getGameById } from './gameService'

const app = express()

app.all('/api',
    createHandler({
        schema: schema,
        rootValue: { games: async () => await getGames(), getGameById: async (args: { id: number}) => await getGameById(args.id) }
    })
)

export default app;