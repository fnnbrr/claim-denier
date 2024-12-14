import { Item } from "$lib/items/item.svelte";
import { Inventory } from "$lib/inventory.svelte";

let intervalID: number;

export class Intern extends Item
{
    name: string = "Intern";

    incrementQuantity(increment: number)
    {
        super.incrementQuantity(increment);

        if (this.quantity < 1)
        {
            clearInterval(intervalID);
        }
        else
        {
            intervalID = window.setInterval(() =>
            {
                Inventory.instance.onClick();
            }, 1000);
        }
    }

    getCost(): number
    {
        return 10;
    }
};