import type { Item } from "./items/item.svelte";
import { BasicItem } from "./items/basic-item.svelte";

// Note: these enum values are used to serialize/deserialize owned item quantities.
// Changing the values (e.g. swapping 0 and 1) will impact any previous save files.
export enum ItemKey
{
    Intern = 0,
    AutoClicker = 1,
    Offshoring = 2,
    Chatbot = 3,
}

export const allItems = new Map<ItemKey, Item>(
    [
        [ItemKey.Intern, new BasicItem("Intern", 1, 10)],
        [ItemKey.AutoClicker, new BasicItem("Auto-Clicker", 10, 50)],
        [ItemKey.Offshoring, new BasicItem("Offshoring", 25, 100)],
        [ItemKey.Chatbot, new BasicItem("Chatbot", 100, 500)],
    ]);