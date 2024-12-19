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

  function isHidden(): boolean {
    if (item.baseCost < 20) return false;

    return Inventory.instance.maxScore < 0.3 * item.baseCost;
  }
</script>

<button {onclick} disabled={isDisabled()} hidden={isHidden()} class="item-view">
  <img
    src={item.iconPath}
    alt="item icon"
    class="left"
    style="filter: grayscale({isDisabled() ? 1 : 0});"
  />
  <div class="center">
    <p>{item.name}</p>
    <p>🚫{scoreText}</p>
  </div>
  <p class="right">x{item.quantity}</p>
</button>

<style>
  .item-view {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .left {
    height: 64px;
    margin-right: 15px;
  }

  .center {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: start;
  }

  .center > p {
    margin: 0;
  }

  .right {
    flex: 1;
    text-align: end;
    align-self: center;
  }
</style>
