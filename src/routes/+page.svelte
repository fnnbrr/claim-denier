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

<div class="column-row">
  <GameView></GameView>
  <Store></Store>
</div>
<Footer></Footer>
<ScoreTexts></ScoreTexts>

<style>
  .column-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100svh - 34px);
    width: 100%;
  }

  /* For desktop, show button and store in a row */
  @media (min-width: 700px) {
    .column-row {
      flex-direction: row;
      align-items: start;
    }
  }
</style>
