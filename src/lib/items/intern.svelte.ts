import { Item } from "$lib/items/item.svelte";
import { ScoreAccumulator } from "$lib/score-accumulator.svelte";

export class Intern extends Item
{
    name: string = "Intern";

    incrementQuantity(increment: number)
    {
        super.incrementQuantity(increment);

        ScoreAccumulator.instance.modifyScorePerSecond(0.1 * increment);
    }

    getCost(): number
    {
        return 10 * (Math.pow(1.15, this.quantity));
    }

    getRefundAmount(): number
    {
        return 0.5 * this.getCost();
    }
};