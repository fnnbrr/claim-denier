import { Item } from "$lib/items/item.svelte";
import { Inventory } from "$lib/inventory.svelte";

let intervalID: number;

export class AutoClicker extends Item
{
    name: string = "Auto-Clicker";

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
            }, 100);
        }
    }

    getCost(): number
    {
        return 100;
    }
};