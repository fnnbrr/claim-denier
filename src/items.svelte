<script lang="ts">
  import { allItems } from "$lib/items/all-items";
  import ItemView from "./item-view.svelte";

  let buySellQuantity: number = 1;

  let scrollElement: HTMLElement;
  let parentScrollTop: number = 0;

  function onscroll() {
    parentScrollTop = scrollElement.scrollTop;
  }
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
  <div class="item-list" {onscroll} bind:this={scrollElement}>
    {#each allItems as item, index (item.key)}
      <ItemView {item} {index} {buySellQuantity} {parentScrollTop}></ItemView>
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
    gap: 4px;
  }

  .item-list {
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 3px;
  }

  select {
    background-color: whitesmoke;
    border-color: slategray;
    border-width: 2px;
    border-radius: 6px;
  }
</style>
