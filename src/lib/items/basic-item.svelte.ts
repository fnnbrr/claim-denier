import { Item } from "$lib/items/item.svelte";
import { ScoreAccumulator } from "$lib/score-accumulator.svelte";

/**
 * A generic item that adds to the score per second and follows standard pricing rules.
 */
export class BasicItem extends Item
{
    readonly name: string;
    readonly scorePerSecond: number;
    readonly baseCost: number;
    readonly costIncrease: number;
    readonly refundMultiplier: number;

    constructor(name: string, scorePerSecond: number, baseCost: number, costIncrease: number = 1.15, refundMultiplier: number = 0.5)
    {
        super();

        this.name = name;
        this.scorePerSecond = scorePerSecond;
        this.baseCost = baseCost;
        this.costIncrease = costIncrease;
        this.refundMultiplier = refundMultiplier;
    }

    incrementQuantity(increment: number)
    {
        super.incrementQuantity(increment);

        ScoreAccumulator.instance.modifyScorePerSecond(this.scorePerSecond * increment);
    }

    getCost(): number
    {
        return this.baseCost * (Math.pow(this.costIncrease, this.quantity));
    }

    getRefundAmount(): number
    {
        return this.refundMultiplier * this.getCost();
    }
};