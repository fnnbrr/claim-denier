import { Inventory } from "$lib/inventory.svelte";

export abstract class Item
{
    abstract name: string;

    get quantity(): number
    {
        return this.#quantity;
    };

    #quantity: number = $state(0);

    incrementQuantity(increment: number): void
    {
        if (increment > 0)
        {
            Inventory.instance.score -= increment * this.getCost();
        }
        else
        {
            Inventory.instance.score -= increment * this.getRefundAmount();
        }

        this.#quantity += increment;
    }

    abstract getCost(): number;

    abstract getRefundAmount(): number;
}