<script lang="ts">
  import { ScoreTextSpawner } from "./score-text-spawner.svelte";
  import ScoreTextView from "./score-text-view.svelte";
</script>

<div id="score-texts">
  {#each ScoreTextSpawner.instance.scoreTexts as scoreText (scoreText.id)}
    <ScoreTextView {scoreText}></ScoreTextView>
  {/each}
</div>

<style>
  #score-texts {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    border: none;
    position: fixed;
    z-index: -1; /* To be behind everything else for easy debugging */
  }
</style>
