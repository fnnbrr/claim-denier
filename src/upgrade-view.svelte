<script lang="ts">
  import { Inventory } from "$lib/inventory.svelte";
  import type { Upgrade } from "./upgrades/upgrade.svelte";

  interface Props {
    upgrade: Upgrade;
  }

  let { upgrade }: Props = $props();

  function onclick() {
    upgrade.buy(true);
  }

  function isDisabled(): boolean {
    return upgrade.isOwned || upgrade.cost > Inventory.instance.score;
  }
</script>

<button {onclick} disabled={isDisabled()} class="upgrade-view">
  <p>{upgrade.name}</p>
  {#if !upgrade.isOwned}
    <p>{upgrade.cost} denials</p>
  {/if}
</button>

<style>
  .upgrade-view {
    aspect-ratio: 1;
  }
</style>
