<script lang="ts">
  import { formatScore, FormatStyle } from "$lib/format-score";
  import { Inventory } from "$lib/inventory.svelte";
  import type { Item } from "$lib/items/item.svelte";

  interface Props {
    item: Item;
    index: number;
    buySellQuantity: number;
    parentScrollTop: number;
  }

  let { item, index, buySellQuantity, parentScrollTop }: Props = $props();

  let tooltipPositioningElement: HTMLElement;

  function onclick() {
    item.incrementQuantity(buySellQuantity, true);
    Inventory.instance.maxItemIndex = Math.max(
      Inventory.instance.maxItemIndex,
      index
    );
  }

  let scoreText: string = $derived.by(() => {
    if (buySellQuantity > 0) {
      return formatScore(item.getCost(buySellQuantity), FormatStyle.short);
    } else {
      return `+${formatScore(item.getRefundAmount(buySellQuantity), FormatStyle.short)}`;
    }
  });

  function isDisabled(): boolean {
    if (buySellQuantity > 0) {
      return item.getCost(buySellQuantity) > Inventory.instance.score;
    } else {
      return Math.abs(buySellQuantity) > item.quantity;
    }
  }

  function isHidden(): boolean {
    // Only show items the player has bought + the next two
    return false;
    return index > Inventory.instance.maxItemIndex + 2;
  }

  $effect(() => {
    tooltipPositioningElement.style.top = `${-parentScrollTop}px`;
  });
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
  <b class="right">x{item.quantity}</b>
  <div class="tooltip-positioning" bind:this={tooltipPositioningElement}>
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
    background-color: whitesmoke;
    border-color: slategray;
    border-width: 2px;
    border-radius: 6px;
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
  }

  .tooltip {
    display: none;
    position: fixed;
    z-index: 1;
    transform: translate(calc(-100% - 16px), 10px);
    width: max-content;
    padding-left: 16px;
    padding-right: 16px;
    background-color: aliceblue;
    border-style: solid;
    border-color: black;
    border-width: 2px;
    border-radius: 6px;
  }

  .item-view:hover .tooltip {
    display: initial;
  }
</style>
