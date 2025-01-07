<script lang="ts">
  import type { ScoreText } from "./score-text-spawner.svelte";

  interface Props {
    scoreText: ScoreText;
  }

  let { scoreText }: Props = $props();
</script>

<div>
  <b>+🚫{scoreText.scoreDelta}</b>
</div>
