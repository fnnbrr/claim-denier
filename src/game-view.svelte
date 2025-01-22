<script lang="ts">
  import ClickerButton from "./clicker-button.svelte";
  import Counter from "./counter.svelte";
</script>

<div class="game-view">
  <h1 class="title">Health Insurance Claim Denier</h1>

  <Counter></Counter>
  <ClickerButton></ClickerButton>
</div>

<style>
  .game-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 50%;
    width: 100%;
    container-type: inline-size;
  }

  .title {
    text-align: center;
    font-size: min(6.5cqw, 3rem);
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 12px;
    margin-bottom: 4px;
  }

  @media (min-width: 700px) {
    .game-view {
      height: 100%;
    }
  }
</style>
