<script lang="ts">
  import ClickerButton from "./clicker-button.svelte";
  import Counter from "./counter.svelte";
</script>

<div class="column">
  <h1>Health Insurance Claim Denier</h1>

  <Counter></Counter>
  <ClickerButton></ClickerButton>
</div>

<style>
  .column {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
</style>
