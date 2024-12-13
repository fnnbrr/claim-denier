const saveKey: string = "claim-denier-inventory-save";

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
}

interface InventorySaveData
{
    score: number;
}