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
        for (const item of allItems)
        {
            item.incrementQuantity(-item.quantity, false);
        }

        for (const itemSaveData of save.items)
        {
            const item = allItems.find(item => item.key === itemSaveData.key);

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
        for (const upgrade of allUpgrades)
        {
            upgrade.setIsOwned(false, false);
        }

        for (const upgradeSaveData of save.upgrades)
        {
            const upgrade = allUpgrades.find(upgrade => upgrade.key === upgradeSaveData.key);

            if (upgrade !== undefined)
            {
                upgrade.setIsOwned(upgradeSaveData.isOwned, false);
            }
            else
            {
                console.warn(`Upgrade with key '${upgradeSaveData.key}' not found`);
            }
        }

        this.maxItemIndex = save.maxItemIndex;
        this.maxUpgradeIndex = save.maxUpgradeIndex;
    }

    getSaveData(): InventorySaveData
    {
        const save: InventorySaveData =
        {
            score: this.score,
            maxScore: this.maxScore,
            items: allItems.map(item =>
            {
                return { key: item.key, quantity: item.quantity };
            }),
            upgrades: allUpgrades.map(upgrade =>
            {
                return { key: upgrade.key, isOwned: upgrade.isOwned };
            }),
            maxItemIndex: this.maxItemIndex,
            maxUpgradeIndex: this.maxUpgradeIndex,
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

    maxItemIndex = $state(-1);
    maxUpgradeIndex = $state(-1);

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
    maxItemIndex: number;
    maxUpgradeIndex: number;
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