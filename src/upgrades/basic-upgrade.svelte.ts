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

    setIsOwned(isOwned: boolean, modifyScore: boolean): void
    {
        super.setIsOwned(isOwned, modifyScore);

        if (isOwned && modifyScore)
        {
            console.log("bought upgrade");
        }

        // TODO: modify stats
    }
};