import { Item } from "$lib/items/item.svelte";
import { ScoreAccumulator } from "$lib/score-accumulator.svelte";

export class AutoClicker extends Item
{
    name: string = "Auto-Clicker";

    incrementQuantity(increment: number)
    {
        super.incrementQuantity(increment);

        ScoreAccumulator.instance.modifyScorePerSecond(1 * increment);
    }

    getCost(): number
    {
        return 100 * (Math.pow(1.15, this.quantity));
    }

    getRefundAmount(): number
    {
        return 0.5 * this.getCost();
    }
};