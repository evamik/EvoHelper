import { PrismaClient } from '@prisma/client'
import { createClassesService } from './classes'
import { createItemsService } from './items'

const prismaClient = new PrismaClient()

async function main() {
    const itemService = createItemsService(prismaClient)

    console.log(await itemService.getUnformattedItemById('Aerielis'))
}

main()
    .then(() => console.log('Process exited: 0'))
    .catch((e) => {
        console.log(e)
        console.log('Process exited: 1')
    })