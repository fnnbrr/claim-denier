import { Inventory } from "$lib/inventory.svelte";
import { StatManager, type StatType } from "$lib/stats/stat-manager";

export class Upgrade
{
    readonly key: string;
    readonly name: string;
    readonly cost: number;
    readonly iconPath: string;
    readonly #statAddBonuses: Map<StatType, number>;
    readonly #statMultBonuses: Map<StatType, number>;

    get isOwned(): boolean
    {
        return this.#isOwned;
    };

    #isOwned: boolean = $state(false);

    constructor(key: string, name: string, cost: number, iconPath: string, statAddBonuses?: Map<StatType, number>, statMultBonuses?: Map<StatType, number>)
    {
        this.key = key;
        this.name = name;
        this.cost = cost;
        this.iconPath = iconPath;

        this.#statAddBonuses = statAddBonuses ?? new Map<StatType, number>();
        this.#statMultBonuses = statMultBonuses ?? new Map<StatType, number>();
    }

    setIsOwned(isOwned: boolean, modifyScore: boolean): void
    {
        if (isOwned === this.#isOwned) return;

        this.#isOwned = isOwned;

        if (modifyScore)
        {
            Inventory.instance.score -= this.cost;
        }

        const statSign: number = isOwned ? 1 : -1;

        for (const [statType, addBonus] of this.#statAddBonuses)
        {
            StatManager.instance.getStat(statType).addBonus += statSign * addBonus;
        }

        for (const [statType, multBonus] of this.#statMultBonuses)
        {
            StatManager.instance.getStat(statType).multBonus += statSign * multBonus;
        }
    }

    getTooltipText(): string
    {
        let toolTipText: string = "";

        for (const [statType, addBonus] of this.#statAddBonuses)
        {
            toolTipText += `• ${StatManager.instance.getStatName(statType)} + ${addBonus}`;
        }

        for (const [statType, multBonus] of this.#statMultBonuses)
        {
            toolTipText += `• ${StatManager.instance.getStatName(statType)} x ${1 + multBonus}`;
        }

        return toolTipText;
    }
};