import { StatManager, type StatType } from "$lib/stats/stat-manager";
import { Upgrade } from "./upgrade.svelte";

/**
 * A generic upgrade that can apply simple stat buffs.
 */
export class BasicUpgrade extends Upgrade
{
    readonly key: string;
    readonly name: string;
    readonly cost: number;
    private readonly statAddBonuses: Map<StatType, number>;
    private readonly statMultBonuses: Map<StatType, number>;

    constructor(key: string, name: string, cost: number, statAddBonuses?: Map<StatType, number>, statMultBonuses?: Map<StatType, number>)
    {
        super();

        this.key = key;
        this.name = name;
        this.cost = cost;

        this.statAddBonuses = statAddBonuses ?? new Map<StatType, number>();
        this.statMultBonuses = statMultBonuses ?? new Map<StatType, number>();
    }

    setIsOwned(isOwned: boolean, modifyScore: boolean): void
    {
        if (isOwned === this._isOwned) return;

        super.setIsOwned(isOwned, modifyScore);

        if (isOwned && modifyScore)
        {
            console.log("bought upgrade");
        }

        const statSign: number = isOwned ? 1 : -1;

        for (const [statType, addBonus] of this.statAddBonuses)
        {
            StatManager.instance.getStat(statType).addBonus += statSign * addBonus;
        }

        for (const [statType, multBonus] of this.statMultBonuses)
        {
            StatManager.instance.getStat(statType).multBonus += statSign * multBonus;
        }
    }
};