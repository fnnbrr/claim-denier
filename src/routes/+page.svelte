<script lang="ts">
  import "../app.css";
  import GameView from "../game-view.svelte";
  import Items from "../items.svelte";
  import Upgrades from "../upgrades.svelte";
</script>

<div class="row">
  <GameView></GameView>
  <Items></Items>
  <Upgrades></Upgrades>
</div>

<style>
  .row {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
</style>
