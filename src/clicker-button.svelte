<script lang="ts">
  import { Inventory } from "$lib/inventory.svelte";

  function onclick() {
    Inventory.instance.score += 1;
  }
</script>

<button {onclick}> DENY </button>
