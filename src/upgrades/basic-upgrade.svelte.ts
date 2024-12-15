import { Upgrade } from "./upgrade.svelte";

/**
 * A generic upgrade that can apply simple stat buffs.
 */
export class BasicUpgrade extends Upgrade
{
    readonly name: string;
    readonly cost: number;

    constructor(name: string, cost: number)
    {
        super();

        this.name = name;
        this.cost = cost;
    }

    buy(modifyScore: boolean): void
    {
        super.buy(modifyScore);

        console.log("bought upgrade");
        // TODO: modify stats
    }
};