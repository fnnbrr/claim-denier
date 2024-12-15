import { allItems } from "./items/all-items";
import { formatScore, FormatStyle } from "./format-score";
import { allUpgrades } from "../upgrades/all-upgrades";
import { StatManager, Stats } from "./stats/stat-manager";

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

    }

    loadFromSaveData(save: InventorySaveData)
    {
        this.score = save.score;
        this.prevMaxScore = save.maxScore;

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

    getSaveData(): InventorySaveData
    {
        const save: InventorySaveData =
        {
            score: this.score,
            maxScore: this.maxScore,
            items: Array.from(allItems, ([key, item]): ItemSaveData =>
                ({ key: key, quantity: item.quantity })),
            upgrades: Array.from(allUpgrades, ([key, upgrade]): UpgradeSaveData =>
                ({ key: key, isOwned: upgrade.isOwned })),
        };

        return save;
    }

    score: number = $state(0);
    scoreStringLong: string = $derived(formatScore(this.score, FormatStyle.long));
    scoreStringShort: string = $derived(formatScore(this.score, FormatStyle.short));

    maxScore: number = $derived.by(() =>
    {
        const value = Math.max(this.prevMaxScore, this.score);
        this.prevMaxScore = value;
        return value;
    });
    private prevMaxScore: number = 0;

    onClick()
    {
        this.score += StatManager.instance.getStat(Stats.ScorePerClick).modify(1);
    }
}

export interface InventorySaveData
{
    score: number;
    maxScore: number;
    items: ItemSaveData[];
    upgrades: UpgradeSaveData[];
}

interface ItemSaveData
{
    key: string;
    quantity: number;
}

interface UpgradeSaveData
{
    key: string;
    isOwned: boolean;
}