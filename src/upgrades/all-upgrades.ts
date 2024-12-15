import type { Upgrade } from "./upgrade.svelte";
import { BasicUpgrade } from "./basic-upgrade.svelte";
import { Stats } from "$lib/stats/stat-manager";

export const allUpgrades = new Map<string, Upgrade>(
    [
        ["double-click", new BasicUpgrade("Double Click", 20,
            new Map([[Stats.ScorePerClick, 1]]),
            undefined)
        ],
        ["fast-internet", new BasicUpgrade("Fast Internet", 1,
            undefined,
            new Map([[Stats.ScorePerSecond, 0.05]]))
        ]
    ]);