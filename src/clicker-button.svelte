<script lang="ts">
  import { Inventory } from "$lib/inventory.svelte";
  import { Spring } from "svelte/motion";
  import prohibitedIcon from "$lib/assets/images/fluent-emoji/prohibited_3d.png";
  import clickSfx from "$lib/assets/audio/error_005.ogg";

  const spring: Spring<number> = new Spring(1);
  let audio: HTMLAudioElement;

  function onpointerdown(e: MouseEvent) {
    e.preventDefault();

    Inventory.instance.onClick();
    spring.target = spring.current + 0.25;

    setTimeout(() => {
      spring.target = 1;
    }, 50);

    audio.currentTime = 0;
    audio.play();
  }

  function oncontextmenu(e: MouseEvent) {
    e.preventDefault();
  }
</script>

<img
  src={prohibitedIcon}
  alt="prohibited icon"
  usemap="#prohibitedIconMap"
  style="transform: scale({spring.current})"
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
<audio src={clickSfx} volume={0.5} bind:this={audio}></audio>

<style>
  map {
    cursor: pointer;
  }
</style>
