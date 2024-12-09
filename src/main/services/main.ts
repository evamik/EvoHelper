import { PrismaClient } from '@prisma/client'
import { createClassesService } from './classes'
import { createItemsService } from './items'

const prismaClient = new PrismaClient()


async function main() {
    const classesService = createClassesService(prismaClient)
    const itemService = createItemsService(prismaClient)

    await itemService.getItemById('Aerielis')
}

main()
    .then(() => console.log('Process exited: 0'))
    .catch((e) => console.log('Process exited: 1'))