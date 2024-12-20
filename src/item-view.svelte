<script lang="ts">
  import { formatScore, FormatStyle } from "$lib/format-score";
  import { Inventory } from "$lib/inventory.svelte";
  import type { Item } from "$lib/items/item.svelte";

  interface Props {
    item: Item;
    index: number;
    buySellQuantity: number;
  }

  let { item, index, buySellQuantity }: Props = $props();

  function onclick() {
    item.incrementQuantity(buySellQuantity, true);
    Inventory.instance.maxItemIndex = Math.max(
      Inventory.instance.maxItemIndex,
      index
    );
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
    // Only show items the player has bought + the next two
    return index > Inventory.instance.maxItemIndex + 2;
  }
</script>

<button
  {onclick}
  disabled={isDisabled()}
  hidden={isHidden()}
  class={isHidden() ? "" : "item-view"}
>
  <img
    src={item.iconPath}
    alt="item icon"
    class="left"
    style="filter: grayscale({isDisabled() ? 1 : 0});"
  />
  <div class="center">
    <b>{item.name}</b>
    <p>🚫{scoreText}</p>
  </div>
  <p class="right">x{item.quantity}</p>
  <div class="tooltip-positioning">
    <div class="tooltip">
      <p>{item.getTooltipText()}</p>
    </div>
  </div>
</button>

<style>
  .item-view {
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
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

  .tooltip-positioning {
    position: absolute;
    left: -8px;
    align-self: center;
  }

  .tooltip {
    display: none;
    position: fixed;
    z-index: 1;
    background-color: gainsboro;
    transform: translate(-100%, -50%);
    width: max-content;
    padding-left: 16px;
    padding-right: 16px;
  }

  .item-view:hover .tooltip {
    display: initial;
  }
</style>
