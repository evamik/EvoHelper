import { PrismaClient } from "@prisma/client";
import { TItem } from "../../types";

export function createItemsService (prismaClient: PrismaClient) {
    const formatItem = (item: any): TItem => { // shameless 'any' plug
        // @ts-ignore
        const recipe = item.recipe?.reduce((acc, curr) => {
            return acc.concat((new Array(curr.quantity)).fill(curr.input.name))
        }, []);
        return {
            integerId: item.id,
            id: item.name,
            name: item.displayName,
            icon: item.icon,
            legacyItem: !!item.legacyItem,
            description: item.description || '',
            effects: item.effects ? item.effects.split('$') : [],
            restriction: item.restriction?.name || '', // not sure if '' is possible
            rarity: item.rarity,
            source: item.source,
            sourceShort: item.sourceShort,
            recipe,
            partOf: item.partOf.map((el: any) => el.output.name),
            godlyCraft: recipe.indexOf('Twilight') !== -1 // dirtiest hack, but it works.
        }
    }

    const include = {
        recipe: {
            include: {
                input: {
                    select: {
                        name: true
                    }
                }
            }
        },
        partOf: {
            include: {
                output: {
                    select: {
                        name: true
                    }
                }
            }
        },
        rarity: true,
        restriction: true,   
    }

    prismaClient.$extends({})

    return {
        async getUnformattedItemByName(name: string) {
            const item = await prismaClient.item.findUnique({
                include,
                where: {
                    name: name
                }
            })

            if (!item) return null;
            
            return item;
        },

        async getItemByName(name: string) {
            const item = await prismaClient.item.findUnique({
                include,
                where: {
                    name: name
                }
            })

            if (!item) return null;

            return formatItem(item);
        },
        
        async getAllItems() {
            // god, I hope this won't be called a lot.
            const itemsList = await prismaClient.item.findMany({ include });
            return itemsList.map(item => formatItem(item))
        },

        async getAllItemsDict() {
            const itemsList = await prismaClient.item.findMany({ include });
        
            return itemsList.reduce((acc: any, curr) => {
                acc[curr.name] = formatItem(curr);
                return acc;
            }, {})
        }
    }
}