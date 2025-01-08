<script lang="ts">
  import { Inventory } from "$lib/inventory.svelte";
  import "$lib/save-manager.svelte";
  import ScoreTexts from "$lib/score-texts.svelte";
  import "../app.css";
  import Footer from "../footer.svelte";
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

<div class="column">
  <div class="row">
    <GameView></GameView>
    <Store></Store>
  </div>
  <Footer></Footer>
</div>
<ScoreTexts></ScoreTexts>

<style>
  .column {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  .row {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }
</style>
