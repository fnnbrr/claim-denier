<script lang="ts">
  import { Inventory } from "$lib/inventory.svelte";
  import type { Upgrade } from "./upgrades/upgrade.svelte";

  interface Props {
    upgrade: Upgrade;
    index: number;
  }

  let { upgrade, index }: Props = $props();

  function onclick() {
    upgrade.setIsOwned(true, true);
    Inventory.instance.maxUpgradeIndex = Math.max(
      Inventory.instance.maxUpgradeIndex,
      index
    );
  }

  function isDisabled(): boolean {
    return upgrade.isOwned || upgrade.cost > Inventory.instance.score;
  }

  function isHidden(): boolean {
    // Only show upgrades the player has bought + the next two
    return index > Inventory.instance.maxUpgradeIndex + 2;
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
  <div class="tooltip-positioning">
    <div class="tooltip">
      <b>{upgrade.name}</b>
      <p>{upgrade.isOwned ? "Owned" : "🚫" + upgrade.cost}</p>
      <p>{upgrade.getTooltipText()}</p>
    </div>
  </div>
</button>

<style>
  .upgrade-view {
    aspect-ratio: 1;
    position: relative;
  }

  img {
    width: 100%;
  }

  .tooltip-positioning {
    position: absolute;
    left: -8px;
    top: 50%;
  }

  .tooltip {
    display: none;
    position: fixed;
    z-index: 1;
    background-color: gainsboro;
    transform: translate(-100%, -50%);
    width: max-content;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .upgrade-view:hover .tooltip {
    display: initial;
  }

  .tooltip p {
    margin-block: 4px;
  }
</style>
