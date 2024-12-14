<script lang="ts">
  import "../app.css";
  import GameView from "../game-view.svelte";
  import Store from "../store.svelte";
</script>

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
