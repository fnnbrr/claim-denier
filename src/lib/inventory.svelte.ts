import { allItems, ItemKey } from "./all-items";
import { formatScore, FormatStyle } from "./format-score";

const saveKey: string = "claim-denier-inventory-save";

declare global
{
    // eslint-disable-next-line no-var
    var inventory: Inventory;
}

export class Inventory
{
    static get instance()
    {
        return this.#instance;
    }

    static #instance: Inventory;

    static {
        console.log("Initializing Inventory");
        this.#instance = new Inventory();
        globalThis.inventory = this.instance;  // To access from the console
    }

    constructor()
    {
        if (typeof localStorage !== "undefined")
        {
            setTimeout(() =>
            {
                this.load();

                addEventListener("beforeunload", () => this.save());
            }, 0);
        }
    }

    load()
    {
        const saveString = localStorage.getItem(saveKey);

        if (saveString !== null)
        {
            console.log("Loading save");

            const save: InventorySaveData = JSON.parse(saveString);

            this.score = save.score;

            // Zero out the quantity on all items before restoring them from save
            for (const item of allItems.values())
            {
                item.incrementQuantity(-item.quantity, false);
            }

            for (const itemSaveData of save.items)
            {
                const item = allItems.get(itemSaveData.key);

                if (item !== undefined)
                {
                    item.incrementQuantity(itemSaveData.quantity, false);
                }
                else
                {
                    console.warn(`Item with key '${itemSaveData.key}' not found`);
                }
            }
        }
    }

    save()
    {
        console.log("saving");

        const save: InventorySaveData =
        {
            score: this.score,
            items: Array.from(allItems, ([key, item]): ItemSaveData =>
                ({ key: key, quantity: item.quantity }))
        };

        localStorage.setItem(saveKey, JSON.stringify(save));
    }

    score: number = $state(0);
    scoreStringLong: string = $derived(formatScore(this.score, FormatStyle.long));
    scoreStringShort: string = $derived(formatScore(this.score, FormatStyle.short));

    onClick()
    {
        this.score += 1;
    }

    clearSave()
    {
        const save: InventorySaveData =
        {
            score: 0,
            items: []
        };

        localStorage.setItem(saveKey, JSON.stringify(save));

        this.load();
    }
}

interface InventorySaveData
{
    score: number;
    items: ItemSaveData[];
}

interface ItemSaveData
{
    key: ItemKey;
    quantity: number;
}