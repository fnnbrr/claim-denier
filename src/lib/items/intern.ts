import type { Item } from "$lib/items/item";
import { Inventory } from "$lib/inventory.svelte";

let intervalID: number;

export const Intern: Item =
{
    name: "Intern",

    onChangeQuantity(quantity: number)
    {
        if (quantity < 1)
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
};