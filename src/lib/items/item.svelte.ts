import { Inventory } from "$lib/inventory.svelte";

export abstract class Item
{
    abstract readonly key: string;
    abstract readonly name: string;

    get quantity(): number
    {
        return this.#quantity;
    };

    #quantity: number = $state(0);

    abstract readonly baseCost: number;
    abstract readonly iconPath: string;

    incrementQuantity(increment: number, modifyScore: boolean): void
    {
        if (modifyScore)
        {
            if (increment > 0)
            {
                Inventory.instance.score -= increment * this.getCost();
            }
            else
            {
                Inventory.instance.score -= increment * this.getRefundAmount();
            }
        }

        this.#quantity += increment;
    }

    abstract getCost(): number;

    abstract getRefundAmount(): number;

    abstract getTooltipText(): string;
}