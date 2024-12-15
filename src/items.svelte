<script lang="ts">
  import { allItems } from "$lib/items/all-items";
  import ItemView from "./item-view.svelte";

  let buySellQuantity: number = 1;
</script>

<div class="items">
  <h3>Items</h3>
  <select name="buy-sell-quantity" bind:value={buySellQuantity}>
    <option value={1} selected>Buy</option>
    <option value={10}>Buy 10</option>
    <option value={100}>Buy 100</option>
    <option value={-1}>Sell</option>
    <option value={-10}>Sell 10</option>
    <option value={-100}>Sell 100</option>
  </select>
  <div class="item-list">
    {#each allItems as [key, item] (key)}
      <ItemView {item} {buySellQuantity}></ItemView>
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
    width: 100%;
    overflow-y: auto;
  }
</style>
