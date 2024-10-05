import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getGames() {
    return prisma.game.findMany()
}

export async function getGameById(id: number) {
    return prisma.game.findFirst({
        where: {
            id
        }
    })
}