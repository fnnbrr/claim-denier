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
    }

    score: number = $state(0);
}