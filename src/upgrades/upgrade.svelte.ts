import { Inventory } from "$lib/inventory.svelte";

export abstract class Upgrade
{
    abstract readonly key: string;
    abstract readonly name: string;

    abstract readonly cost: number;

    abstract readonly iconPath: string;

    get isOwned(): boolean
    {
        return this._isOwned;
    };

    protected _isOwned: boolean = $state(false);

    setIsOwned(isOwned: boolean, modifyScore: boolean): void
    {
        if (isOwned === this._isOwned) return;

        if (modifyScore)
        {
            Inventory.instance.score -= this.cost;
        }

        this._isOwned = isOwned;
    }

    abstract getTooltipText(): string;
}