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

    static
    {
        console.log("Initializing Inventory");
        this.#instance = new Inventory();
        globalThis.inventory = this.instance;  // To access from the console

        if (typeof localStorage !== "undefined")
        {
            this.load();

            addEventListener("beforeunload", () => this.save());
        }
    }

    static load()
    {
        const saveString = localStorage.getItem(saveKey);

        if (saveString !== null)
        {
            console.log("Loading save");

            const save: InventorySaveData = JSON.parse(saveString);

            this.instance.score = save.score;
        }
    }

    static save()
    {
        console.log("saving");

        const save: InventorySaveData =
        {
            score: this.instance.score
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
            score: 0
        };

        localStorage.setItem(saveKey, JSON.stringify(save));

        Inventory.load();
    }
}

interface InventorySaveData
{
    score: number;
}