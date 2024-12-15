import { allItems, ItemKey } from "./items/all-items";
import { formatScore, FormatStyle } from "./format-score";
import { allUpgrades, type UpgradeKey } from "../upgrades/all-upgrades";

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

            // Zero out ownership of all upgrades before restoring them from save
            for (const upgrade of allUpgrades.values())
            {
                upgrade.setIsOwned(false, false);
            }

            for (const upgradeSaveData of save.upgrades)
            {
                const upgrade = allUpgrades.get(upgradeSaveData.key);

                if (upgrade !== undefined)
                {
                    upgrade.setIsOwned(upgradeSaveData.isOwned, false);
                }
                else
                {
                    console.warn(`Upgrade with key '${upgradeSaveData.key}' not found`);
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
                ({ key: key, quantity: item.quantity })),
            upgrades: Array.from(allUpgrades, ([key, upgrade]): UpgradeSaveData =>
                ({ key: key, isOwned: upgrade.isOwned })),
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
            items: [],
            upgrades: [],
        };

        localStorage.setItem(saveKey, JSON.stringify(save));

        this.load();
    }
}

interface InventorySaveData
{
    score: number;
    items: ItemSaveData[];
    upgrades: UpgradeSaveData[];
}

interface ItemSaveData
{
    key: ItemKey;
    quantity: number;
}

interface UpgradeSaveData
{
    key: UpgradeKey;
    isOwned: boolean;
}