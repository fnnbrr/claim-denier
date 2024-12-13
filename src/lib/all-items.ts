import type { Item } from "./items/item";
import { Intern } from "./items/intern";

export const allItems: Map<Item, number> = new Map<Item, number>(
    [
        [Intern, 0]
    ]);

for (const [item, quantity] of allItems)
{
    item.onChangeQuantity(quantity);
}