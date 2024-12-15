<script lang="ts">
  function onclick() {
    console.log("clicked upgrade");
  }
</script>

<button {onclick} class="upgrade-view"> upgrade </button>

<style>
  .upgrade-view {
    aspect-ratio: 1;
  }
</style>
