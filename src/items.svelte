<script>
  import { allItems } from "$lib/all-items";
  import ItemView from "./item-view.svelte";
</script>

<div class="items">
  <h3>Items</h3>
  {#each allItems as item (item.name)}
    <ItemView {item}></ItemView>
  {/each}
</div>

<style>
  .items {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
</style>
