import { Item } from "$lib/items/item.svelte";
import { ScoreAccumulator } from "$lib/score-accumulator.svelte";

/**
 * A generic item that adds to the score per second and follows standard pricing rules.
 */
export class BasicItem extends Item
{
    readonly key: string;
    readonly name: string;
    readonly scorePerSecond: number;
    readonly baseCost: number;
    readonly iconPath: string;

    constructor(key: string, name: string, scorePerSecond: number, baseCost: number, iconPath: string)
    {
        super();

        this.key = key;
        this.name = name;
        this.scorePerSecond = scorePerSecond;
        this.baseCost = baseCost;
        this.iconPath = iconPath;
    }

    incrementQuantity(increment: number, modifyScore: boolean): void
    {
        super.incrementQuantity(increment, modifyScore);

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
};