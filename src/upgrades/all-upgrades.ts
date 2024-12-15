import type { Upgrade } from "./upgrade.svelte";
import { BasicUpgrade } from "./basic-upgrade.svelte";

// Note: these enum values are used to serialize/deserialize which upgrades are owned.
// Changing the values (e.g. swapping 0 and 1) will impact any previous save files.
export enum UpgradeKey
{
    DoubleClick = 0,
}

export const allUpgrades = new Map<UpgradeKey, Upgrade>(
    [
        [UpgradeKey.DoubleClick, new BasicUpgrade("Double Click", 20)]
    ]);