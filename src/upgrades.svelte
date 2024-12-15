<script>
  import UpgradeView from "./upgrade-view.svelte";
</script>

<div class="upgrades">
  <h3>Upgrades</h3>
  <div class="upgrade-list">
    <UpgradeView></UpgradeView>
    <UpgradeView></UpgradeView>
    <UpgradeView></UpgradeView>
    <UpgradeView></UpgradeView>
    <UpgradeView></UpgradeView>
    <UpgradeView></UpgradeView>
    <UpgradeView></UpgradeView>
    <UpgradeView></UpgradeView>
    <UpgradeView></UpgradeView>
    <UpgradeView></UpgradeView>
    <UpgradeView></UpgradeView>
    <UpgradeView></UpgradeView>
    <UpgradeView></UpgradeView>
    <UpgradeView></UpgradeView>
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
    justify-content: center;
  }
</style>
