<script lang="ts">
  import { onMount } from "svelte";
  import type { ScoreText } from "./score-text-spawner.svelte";

  interface Props {
    scoreText: ScoreText;
  }

  let { scoreText }: Props = $props();
  let scoreTextDiv: HTMLDivElement;

  onMount(() => {
    scoreTextDiv.style.left = `${scoreText.spawnPosX}px`;
    scoreTextDiv.style.top = `${scoreText.spawnPosY}px`;
  });
</script>

<div bind:this={scoreTextDiv}>
  <b>🚫{scoreText.scoreDelta}</b>
</div>

<style>
  div {
    position: absolute;
    z-index: 999;
    pointer-events: none;
    transform: translate(-50%, -50%);
    width: max-content;
  }
</style>
