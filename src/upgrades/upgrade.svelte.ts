import { Inventory } from "$lib/inventory.svelte";

export abstract class Upgrade
{
    abstract name: string;

    abstract cost: number;

    get isOwned(): boolean
    {
        return this.#isOwned;
    };

    #isOwned: boolean = $state(false);

    buy(modifyScore: boolean): void
    {
        if (modifyScore)
        {
            Inventory.instance.score -= this.cost;
        }

        this.#isOwned = true;
    }
}