import { Item } from "$lib/items/item.svelte";
import { ScoreAccumulator } from "$lib/score-accumulator.svelte";

export class AutoClicker extends Item
{
    name: string = "Auto-Clicker";

    incrementQuantity(increment: number)
    {
        super.incrementQuantity(increment);

        ScoreAccumulator.instance.modifyScorePerSecond(10 * increment);
    }

    getCost(): number
    {
        return 100;
    }
};