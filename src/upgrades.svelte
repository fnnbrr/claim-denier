<script>
  import UpgradeView from "./upgrade-view.svelte";
  import { allUpgrades } from "./upgrades/all-upgrades";
</script>

<div class="upgrades">
  <h3>Upgrades</h3>
  <div class="upgrade-list">
    {#each allUpgrades as [key, upgrade] (key)}
      <UpgradeView {upgrade}></UpgradeView>
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
    overflow-y: auto;
    overflow-x: hidden;
    justify-content: center;
  }
</style>
