import { Inventory } from "$lib/inventory.svelte";
import { ScoreAccumulator } from "$lib/score-accumulator.svelte";

export class Item
{
    readonly key: string;
    readonly name: string;
    readonly scorePerSecond: number;
    readonly baseCost: number;
    readonly iconPath: string;

    get quantity(): number
    {
        return this.#quantity;
    };

    #quantity: number = $state(0);

    constructor(key: string, name: string, scorePerSecond: number, baseCost: number, iconPath: string)
    {
        this.key = key;
        this.name = name;
        this.scorePerSecond = scorePerSecond;
        this.baseCost = baseCost;
        this.iconPath = iconPath;
    }

    incrementQuantity(increment: number, modifyScore: boolean): void
    {
        if (modifyScore)
        {
            if (increment > 0)
            {
                Inventory.instance.score -= this.getCost(increment);
            }
            else
            {
                Inventory.instance.score += this.getRefundAmount(increment);
            }
        }

        this.#quantity += increment;

        ScoreAccumulator.instance.modifyScorePerSecond(this.scorePerSecond * increment);
    }

    getCost(buyQuantity: number): number
    {
        const firstCost: number = this.baseCost * (Math.pow(1.15, this.quantity));
        return sumGeometricSeries(firstCost, 1.15, buyQuantity);
    }

    getRefundAmount(sellQuantity: number): number
    {
        sellQuantity = Math.abs(sellQuantity);

        const firstCost: number = this.baseCost * (Math.pow(1.15, this.quantity - sellQuantity));
        return 0.5 * sumGeometricSeries(firstCost, 1.15, sellQuantity);
    }

    getTooltipText(): string
    {
        return `Denies ${this.scorePerSecond} claims per second`;
    }
};

// https://www.cuemath.com/geometric-series-formula/
function sumGeometricSeries(baseTerm: number, commonRatio: number, numTerms: number)
{
    const numerator: number = baseTerm * (Math.pow(commonRatio, numTerms) - 1);
    const denominator: number = commonRatio - 1;

    return numerator / denominator;
}