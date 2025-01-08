<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import type { ScoreText } from "./score-text.svelte";

  interface Props {
    scoreText: ScoreText;
  }

  let { scoreText }: Props = $props();
  let scoreTextDiv: HTMLDivElement;

  let animationFrameHandle: number;
  let prevTimestamp: number = performance.now();

  let offsetX: number = 0;
  let offsetY: number = 0;

  const velocityX: number = (Math.random() - 0.5) * 0.25;
  let velocityY: number = -Math.random() * 0.25 - 0.25;

  onMount(() => {
    scoreTextDiv.style.left = `${scoreText.spawnPosX - scoreTextDiv.clientWidth / 2}px`;
    scoreTextDiv.style.top = `${scoreText.spawnPosY - scoreTextDiv.clientHeight / 2}px`;

    animationFrameHandle = requestAnimationFrame(animate);
  });

  function animate(timestamp: number) {
    const deltaTime: number = timestamp - prevTimestamp;
    prevTimestamp = timestamp;

    velocityY += deltaTime * 0.002;

    offsetX += deltaTime * velocityX;
    offsetY += deltaTime * velocityY;

    scoreTextDiv.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    animationFrameHandle = requestAnimationFrame(animate);
  }

  onDestroy(() => {
    cancelAnimationFrame(animationFrameHandle);
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
    width: max-content;
  }
</style>
