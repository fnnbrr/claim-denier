<script lang="ts">
  import { formatScore, FormatStyle } from "$lib/format-score";
  import { Inventory } from "$lib/inventory.svelte";
  import { ScoreAccumulator } from "$lib/score-accumulator.svelte";
</script>

<h3>{Inventory.instance.scoreStringLong} denials</h3>
<p>
  {formatScore(
    ScoreAccumulator.instance.scorePerSecondWithStats,
    FormatStyle.short
  )} per second
</p>

<style>
  p {
    margin: 0;
  }
</style>
