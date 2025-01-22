<script lang="ts">
  import { Inventory } from "$lib/inventory.svelte";
  import { Spring } from "svelte/motion";
  import prohibitedIcon from "$lib/assets/images/fluent-emoji/prohibited_3d.png";
  import clickSfx from "$lib/assets/audio/error_005.ogg";
  import { ScoreTextSpawner } from "$lib/score-text-spawner.svelte";
  import { Preferences } from "$lib/preferences.svelte";

  const spring: Spring<number> = new Spring(1);
  let audio: HTMLAudioElement;

  $effect(() => {
    audio.muted = Preferences.instance.isMuted;
  });

  function onpointerdown(e: MouseEvent) {
    e.preventDefault();

    const scoreDelta: number = Inventory.instance.onClick();
    spring.target = spring.current + 0.25;

    setTimeout(() => {
      spring.target = 1;
    }, 50);

    audio.currentTime = 0;
    audio.play();

    ScoreTextSpawner.instance.QueueScoreText(scoreDelta, e.clientX, e.clientY);
  }

  function oncontextmenu(e: MouseEvent) {
    e.preventDefault();
  }
</script>

<div class="fill-parent">
  <img
    src={prohibitedIcon}
    alt="prohibited icon"
    usemap="#prohibitedIconMap"
    style="scale: {spring.current}"
  />
  <map
    name="prohibitedIconMap"
    {onpointerdown}
    {oncontextmenu}
    role="button"
    tabindex="0"
  >
    <area shape="circle" coords="127,127,112" alt="circlular click area" />
  </map>
</div>
<audio src={clickSfx} volume={0.5} bind:this={audio}></audio>

<style>
  /* TODO map isn't resized, clicking weird */

  .fill-parent {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* Necessary to allow img to shrink as flex item: https://stackoverflow.com/a/66689926 */
    min-width: 64px;
    min-height: 64px;
  }

  img {
    flex: auto;
    max-width: 384px;
    max-height: 384px;
    transform-origin: center;
    object-fit: contain;

    /* Necessary to allow img to shrink as flex item: https://stackoverflow.com/a/66689926 */
    min-width: 64px;
    min-height: 64px;
  }

  map {
    cursor: pointer;
  }
</style>
