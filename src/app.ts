import express from 'express'
import schema from './schema'
import { createHandler } from 'graphql-http/lib/use/express'

const games = [
    {
        game: 'Pokémon: Fire Red',
        platform: 'Game Boy Advance (MyBoy! Free)',
        rating: 7,
        status: 'Finished',
        lastUpdatedAt: '2024-01-11',
        finalObjective: 'Win the Elite 4'
    }
]

const root = {
    games() {
        return games
    }
}

const app = express()

app.all('/api',
    createHandler({
        schema: schema,
        rootValue: root
    })
)

export default app;