import type { Upgrade } from "./upgrade.svelte";
import { BasicUpgrade } from "./basic-upgrade.svelte";

export const allUpgrades = new Map<string, Upgrade>(
    [
        ["double-click", new BasicUpgrade("Double Click", 20)],
        ["fast-internet", new BasicUpgrade("Fast Internet", 100)],
    ]);