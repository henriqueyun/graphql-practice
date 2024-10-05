import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { fakerPT_BR as faker } from '@faker-js/faker'

async function main() {
    const PLATFORMS = ['Playstation 2', 'Steam', 'PSP', 'Super Nintendo', 'Nintendo Entertainment']
    const PLAYING_STATUS = ['To Play', 'Playing', 'Stopped', 'Finished']
    const OBJECTIVES = ['Defeat The Final Boss', 'Complete All Stages', 'Finish The Main Quest']

    for (let i = 0; i < 10; i++) {
        const game = `${faker.hacker.adjective()} ${faker.animal.type()} ${faker.internet.domainWord()}`
        const rating = faker.number.int({min: 1, max: 10})
        const platform = faker.helpers.arrayElement(PLATFORMS)
        const status = faker.helpers.arrayElement(PLAYING_STATUS)
        const finalObjective = faker.helpers.arrayElement(OBJECTIVES)
        await prisma.game.create({
            data: {
                game,
                platform,
                status,
                rating,
                finalObjective
            }
        })
    }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })