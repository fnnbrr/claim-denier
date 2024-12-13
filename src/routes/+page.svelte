<script lang="ts">
  import { Inventory } from "$lib/inventory.svelte";

  function onclick() {
    Inventory.instance.score += 1;
  }
</script>

<h1>Health Insurance Claim Denier</h1>

<button {onclick}>
  deny {Inventory.instance.score}
</button>
