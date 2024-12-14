import type { Item } from "./items/item.svelte";
import { Intern } from "./items/intern.svelte";

export const allItems: Item[] =
    [
        new Intern()
    ];

for (const item of allItems)
{
    item.incrementQuantity(0);
}