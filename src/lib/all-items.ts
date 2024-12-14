import type { Item } from "./items/item.svelte";
import { Intern } from "./items/intern.svelte";
import { AutoClicker } from "./items/auto-clicker.svelte";

export const allItems: Item[] =
    [
        new Intern(),
        new AutoClicker()
    ];

for (const item of allItems)
{
    item.incrementQuantity(0);
}