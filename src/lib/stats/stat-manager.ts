import { StatMod } from "./stat-mod";

export const Stats =
    {
        ScorePerClick: 0,
        ScorePerSecond: 1,
    } as const;

type StatType = typeof Stats[keyof typeof Stats];

export class StatManager
{
    static get instance()
    {
        return this.#instance;
    }

    static #instance: StatManager;

    #allStats: Map<StatType, StatMod> = new Map<StatType, StatMod>();

    static {
        console.log("Initializing Stat Manager");
        this.#instance = new StatManager();
    }

    constructor()
    {
        for (const statType of Object.values(Stats))
        {
            this.#allStats.set(statType, new StatMod());
        }
    }

    getStat(statType: StatType): StatMod
    {
        let statMod = this.#allStats.get(statType);

        if (statMod === undefined)
        {
            console.error(`StatType '${statType}' not found in stat map`);
            statMod = new StatMod();
            this.#allStats.set(statType, statMod);
        }

        return statMod;
    }
}