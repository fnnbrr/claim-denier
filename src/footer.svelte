<script lang="ts">
  import { Preferences } from "$lib/preferences.svelte";
  $inspect(Preferences.instance.isMuted);
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
    min-height: 32px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    padding-left: 12px;
    padding-right: 12px;
  }
  p {
    margin: 0;
    text-align: center;
  }
</style>
