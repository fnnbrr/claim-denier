import { Inventory } from "./inventory.svelte";
import { StatManager, Stats } from "./stats/stat-manager";

export class ScoreAccumulator
{
    static get instance()
    {
        return this.#instance;
    }

    static #instance: ScoreAccumulator;

    static
    {
        console.log("Initializing Score Accumulator");
        this.#instance = new ScoreAccumulator();
    }

    constructor()
    {
        this.#prevTimeStamp = performance.now();

        setTimeout(() =>
        {
            this.#update(performance.now());
        }, 0);
    }

    #scorePerSecond: number = 0;
    #prevTimeStamp: DOMHighResTimeStamp;

    #update(timeStamp: DOMHighResTimeStamp)
    {
        const deltaTime: number = timeStamp - this.#prevTimeStamp;
        this.#prevTimeStamp = timeStamp;

        const scorePerSecondWithStats: number = StatManager.instance.getStat(Stats.ScorePerSecond).modify(this.#scorePerSecond);

        Inventory.instance.score += (deltaTime / 1000) * scorePerSecondWithStats;

        requestAnimationFrame((nextTimeStamp) => this.#update(nextTimeStamp));
    }

    modifyScorePerSecond(scorePerSecondDelta: number)
    {
        this.#scorePerSecond += scorePerSecondDelta;
    }
}