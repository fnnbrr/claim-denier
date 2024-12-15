import type { Item } from "./item.svelte";
import { BasicItem } from "./basic-item.svelte";

export const allItems = new Map<string, Item>(
    [
        ["intern", new BasicItem("Intern", 1, 10)],
        ["auto-clicker", new BasicItem("Auto-Clicker", 10, 50)],
        ["offshoring", new BasicItem("Offshoring", 25, 100)],
        ["chatbot", new BasicItem("Chatbot", 100, 500)],
    ]);