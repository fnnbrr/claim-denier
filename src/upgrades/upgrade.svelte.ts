import { Inventory } from "$lib/inventory.svelte";

export abstract class Upgrade
{
    abstract name: string;

    abstract cost: number;

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
}