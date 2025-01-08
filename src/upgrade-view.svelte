<script lang="ts">
  import { Inventory } from "$lib/inventory.svelte";
  import type { Upgrade } from "./upgrades/upgrade.svelte";
  import checkMarkIcon from "$lib/assets/images/checkmark-64.png";
  import { formatScore, FormatStyle } from "$lib/format-score";

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
    class="icon"
    src={upgrade.iconPath}
    alt="upgrade icon"
    style="filter: grayscale({!upgrade.isOwned &&
    upgrade.cost > Inventory.instance.score
      ? 1
      : 0});"
  />
  {#if upgrade.isOwned}
    <img class="own-icon" src={checkMarkIcon} alt="own icon" />
  {/if}
  <div class="tooltip-positioning">
    <div class="tooltip">
      <b>{upgrade.name}</b>
      <p>
        {upgrade.isOwned
          ? "Owned"
          : "🚫" + formatScore(upgrade.cost, FormatStyle.short)}
      </p>
      <p>{upgrade.getTooltipText()}</p>
    </div>
  </div>
</button>

<style>
  .upgrade-view {
    aspect-ratio: 1;
    position: relative;
    background-color: whitesmoke;
    border-color: slategray;
    border-width: 2px;
    border-radius: 6px;
  }

  .icon {
    width: 100%;
  }

  .own-icon {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0px;
    right: 0px;
    transform: translate(45%, -45%);
    z-index: 1;
  }

  .tooltip-positioning {
    position: absolute;
    left: -8px;
    top: 50%;
  }

  .tooltip {
    display: none;
    position: fixed;
    z-index: 2;
    transform: translate(-100%, -50%);
    width: max-content;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: aliceblue;
    border-style: solid;
    border-color: black;
    border-width: 2px;
    border-radius: 6px;
  }

  .upgrade-view:hover .tooltip {
    display: initial;
  }

  .tooltip p {
    margin-block: 4px;
  }
</style>
