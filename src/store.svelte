<script lang="ts">
  import Items from "./items.svelte";
  import Upgrades from "./upgrades.svelte";
</script>

<div class="store">
  <Items></Items>
  <Upgrades></Upgrades>
</div>

<style>
  .store {
    display: flex;
    flex-direction: row;
    width: max(200px, 33%);
  }
</style>
