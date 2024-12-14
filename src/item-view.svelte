<script lang="ts">
  import { Inventory } from "$lib/inventory.svelte";
  import type { Item } from "$lib/items/item.svelte";

  interface Props {
    item: Item;
  }

  let { item }: Props = $props();

  function onclick() {
    Inventory.instance.score -= item.getCost();
    item.incrementQuantity(1);
  }
</script>

<button {onclick} class="item-view">
  <p>{item.name} x{item.quantity}</p>
  <p>{item.getCost()} denials</p>
</button>

<style>
  .item-view {
    width: 100%;
  }
</style>
