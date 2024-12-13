import { Item } from "$lib/items/item";
import { Inventory } from "$lib/inventory.svelte";

export class Intern extends Item
{
    readonly name: string = "Intern";

    constructor()
    {
        super();

        setInterval(() =>
        {
            Inventory.instance.onClick();
        }, 1000);
    }
};