import { Inventory } from "$lib/inventory.svelte";
import { ScoreAccumulator } from "$lib/score-accumulator.svelte";

export class Item
{
    readonly key: string;
    readonly name: string;
    readonly scorePerSecond: number;
    readonly baseCost: number;
    readonly iconPath: string;

    get quantity(): number
    {
        return this.#quantity;
    };

    #quantity: number = $state(0);

    constructor(key: string, name: string, scorePerSecond: number, baseCost: number, iconPath: string)
    {
        this.key = key;
        this.name = name;
        this.scorePerSecond = scorePerSecond;
        this.baseCost = baseCost;
        this.iconPath = iconPath;
    }

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

        ScoreAccumulator.instance.modifyScorePerSecond(this.scorePerSecond * increment);
    }

    getCost(): number
    {
        return this.baseCost * (Math.pow(1.15, this.quantity));
    }

    getRefundAmount(): number
    {
        return 0.5 * this.getCost();
    }

    getTooltipText(): string
    {
        return `Denies ${this.scorePerSecond} claims per second`;
    }
};