<script lang="ts">
  import { Preferences } from "$lib/preferences.svelte";
</script>

<div class="footer">
  <p>
    made by <a
      href={"https://fnnbrr.com/"}
      target="_blank"
      rel={"noopener noreferrer"}
    >
      fnnbrr
    </a>
  </p>
  <label>
    <input type="checkbox" bind:checked={Preferences.instance.isMuted} />
    mute
  </label>
</div>

<style>
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 32px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    padding-left: 12px;
    padding-right: 12px;
    background-color: whitesmoke;
    border-top: 2px solid grey;
    z-index: 3;
  }
  .footer > * {
    align-self: center;
  }
  p {
    margin: 0;
    text-align: center;
  }
</style>
