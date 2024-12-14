<script>
  import { allItems } from "$lib/all-items";
  import ItemView from "./item-view.svelte";
</script>

<div class="items">
  <h3>Items</h3>
  <div class="item-list">
    {#each allItems as item (item.name)}
      <ItemView {item}></ItemView>
    {/each}
  </div>
</div>

<style>
  .items {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  .item-list {
    overflow-y: auto;
  }
</style>
