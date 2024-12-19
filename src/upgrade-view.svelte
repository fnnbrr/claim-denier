<script lang="ts">
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
  <img
    src={upgrade.iconPath}
    alt="upgrade icon"
    style="filter: grayscale({isDisabled() ? 1 : 0});"
  />
</button>

<style>
  .upgrade-view {
    aspect-ratio: 1;
  }

  img {
    width: 100%;
  }
</style>
