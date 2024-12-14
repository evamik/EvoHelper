import { PrismaClient } from "@prisma/client";
import { TItem } from "../../types";

export function createItemsService (prismaClient: PrismaClient) {
    const formatItem = (item: any): TItem => { // shameless 'any' plug
        const recipe = item.recipe.map((e: { id: string; }) => e.id);
        return {
            id: item.id,
            name: item.name,
            icon: item.icon,
            legacyItem: !!item.legacyItem,
            description: item.description || '',
            effects: item.effects ? item.effects.split('$') : [],
            restriction: item.restriction?.name || '', // not sure if '' is possible
            rarity: item.rarity,
            source: item.source,
            sourceShort: item.sourceShort,
            recipe,
            partOf: item.partOf.map((e: { id: string; }) => e.id),
            godlyCraft: recipe.indexOf('Twilight') !== -1 // dirtiest hack, but it works.
        }
    }

    const include = {
        recipe: true,
        partOf: true,
        rarity: true,
        restriction: true,   
    }

    return {
        async getUnformattedItemById(id: string) {
            const item = await prismaClient.item.findUnique({
                include,
                where: {
                    id: id
                }
            })

            if (!item) return null;
            
            return item;
        },

        async getItemById(id: string) {
            const item = await prismaClient.item.findUnique({
                include,
                where: {
                    id: id
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
                acc[curr.id] = formatItem(curr);
                return acc;
            }, {})
        }
    }
}