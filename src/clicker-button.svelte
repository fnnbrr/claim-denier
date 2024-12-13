<script lang="ts">
  import { Inventory } from "$lib/inventory.svelte";

  function onclick() {
    Inventory.instance.onClick();
  }
</script>

<button {onclick}> DENY </button>
