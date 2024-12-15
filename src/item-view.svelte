<script lang="ts">
  import { formatScore, FormatStyle } from "$lib/format-score";
  import { Inventory } from "$lib/inventory.svelte";
  import type { Item } from "$lib/items/item.svelte";

  interface Props {
    item: Item;
    buySellQuantity: number;
  }

  let { item, buySellQuantity }: Props = $props();

  function onclick() {
    item.incrementQuantity(buySellQuantity, true);
  }

  let scoreText: string = $derived.by(() => {
    if (buySellQuantity > 0) {
      return formatScore(buySellQuantity * item.getCost(), FormatStyle.short);
    } else {
      return `+${formatScore(Math.abs(buySellQuantity) * item.getRefundAmount(), FormatStyle.short)}`;
    }
  });

  function isDisabled(): boolean {
    if (buySellQuantity > 0) {
      return item.getCost() * buySellQuantity > Inventory.instance.score;
    } else {
      return Math.abs(buySellQuantity) > item.quantity;
    }
  }
</script>

<button {onclick} disabled={isDisabled()} class="item-view">
  <p>{item.name} x{item.quantity}</p>
  <p>{scoreText} denials</p>
</button>

<style>
  .item-view {
    width: 100%;
  }
</style>
