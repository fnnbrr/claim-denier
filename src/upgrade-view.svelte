<script lang="ts">
  import { formatScore, FormatStyle } from "$lib/format-score";
  import { Inventory } from "$lib/inventory.svelte";
  import type { Upgrade } from "./upgrades/upgrade.svelte";

  interface Props {
    upgrade: Upgrade;
  }

  let { upgrade }: Props = $props();

  function onclick() {
    upgrade.setIsOwned(true, true);
  }

  function isDisabled(): boolean {
    return upgrade.isOwned || upgrade.cost > Inventory.instance.score;
  }

  function isHidden(): boolean {
    if (upgrade.cost < 20) return false;

    return Inventory.instance.maxScore < 0.3 * upgrade.cost;
  }
</script>

<button
  {onclick}
  disabled={isDisabled()}
  hidden={isHidden()}
  class="upgrade-view"
>
  <p>{upgrade.name}</p>
  <img src={upgrade.iconPath} alt="upgrade icon" />
  {#if !upgrade.isOwned}
    <p>{formatScore(upgrade.cost, FormatStyle.short)} denials</p>
  {/if}
</button>

<style>
  .upgrade-view {
    aspect-ratio: 1;
  }

  img {
    width: 100%;
  }
</style>
