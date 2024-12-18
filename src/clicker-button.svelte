<script lang="ts">
  import { Inventory } from "$lib/inventory.svelte";
  import { Spring } from "svelte/motion";
  import clickSfx from "$lib/assets/audio/error_005.ogg";

  const spring: Spring<number> = new Spring(1);
  let audio: HTMLAudioElement;

  function onpointerdown() {
    Inventory.instance.onClick();
    spring.target = spring.current + 0.5;

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

<button
  {onpointerdown}
  {oncontextmenu}
  style="transform: scale({spring.current})"
>
  DENY
  <br />
  CLAIM
  <audio src={clickSfx} volume={0.5} bind:this={audio}></audio>
</button>
