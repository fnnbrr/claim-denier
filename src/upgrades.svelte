<script lang="ts">
  import UpgradeView from "./upgrade-view.svelte";
  import { allUpgrades } from "./upgrades/all-upgrades";

  let scrollElement: HTMLElement;
  let parentScrollTop: number = 0;

  function onscroll() {
    parentScrollTop = scrollElement.scrollTop;
  }
</script>

<div class="upgrades">
  <h3>Upgrades</h3>
  <div class="upgrade-list" {onscroll} bind:this={scrollElement}>
    {#each allUpgrades as upgrade, index (upgrade.key)}
      <UpgradeView {upgrade} {index} {parentScrollTop}></UpgradeView>
    {/each}
  </div>
</div>

<style>
  .upgrades {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  .upgrade-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 64px);
    gap: 3px;
    padding-top: 8px;
    overflow-y: auto;
    overflow-x: hidden;
    justify-content: center;
  }
</style>
