<script lang="ts">
  import ClickerButton from "./clicker-button.svelte";
  import Counter from "./counter.svelte";
</script>

<div class="game-view">
  <h1>Health Insurance Claim Denier</h1>

  <Counter></Counter>
  <ClickerButton></ClickerButton>
</div>

<style>
  .game-view {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: start;
  }
</style>
