<script lang="ts">
  import { Inventory } from "$lib/inventory.svelte";
  import type { Item } from "$lib/items/item.svelte";

  interface Props {
    item: Item;
    buySellQuantity: number;
  }

  let { item, buySellQuantity }: Props = $props();

  function onclick() {
    Inventory.instance.score -= buySellQuantity * item.getCost();
    item.incrementQuantity(buySellQuantity);
  }
</script>

<button {onclick} class="item-view">
  <p>{item.name} x{item.quantity}</p>
  <p>{buySellQuantity * item.getCost()} denials</p>
</button>

<style>
  .item-view {
    width: 100%;
  }
</style>
