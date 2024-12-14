import { Item } from "$lib/items/item.svelte";
import { ScoreAccumulator } from "$lib/score-accumulator.svelte";

export class Intern extends Item
{
    name: string = "Intern";

    incrementQuantity(increment: number)
    {
        super.incrementQuantity(increment);

        ScoreAccumulator.instance.modifyScorePerSecond(1 * increment);
    }

    getCost(): number
    {
        return 10;
    }
};