<script lang="ts">
  import { Inventory } from "$lib/inventory.svelte";
  import "../app.css";
  import GameView from "../game-view.svelte";
  import Store from "../store.svelte";

  let title: string = $derived.by(() => {
    if (Inventory.instance.score > 0) {
      return `${Inventory.instance.scoreStringShort} Claims Denied`;
    } else {
      return "Claim Denier";
    }
  });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="row">
  <GameView></GameView>
  <Store></Store>
</div>

<style>
  .row {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
</style>
