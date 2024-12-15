import { Inventory } from "./inventory.svelte";

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

        Inventory.instance.score += deltaTime * (this.#scorePerSecond / 1000);

        requestAnimationFrame((nextTimeStamp) => this.#update(nextTimeStamp));
    }

    modifyScorePerSecond(scorePerSecondDelta: number)
    {
        this.#scorePerSecond += scorePerSecondDelta;
    }
}