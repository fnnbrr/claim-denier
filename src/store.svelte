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
    width: calc(100% - 16px);
    height: 50%;
    gap: 4px;
  }

  @media (min-width: 700px) {
    .store {
      width: min(500px, 50%);
      height: 100%;
    }
  }
</style>
