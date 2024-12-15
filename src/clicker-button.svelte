<script lang="ts">
  import { Inventory } from "$lib/inventory.svelte";

  function onclick() {
    Inventory.instance.onClick();
  }

  function oncontextmenu(e: MouseEvent) {
    e.preventDefault();
    onclick();
  }
</script>

<button {onclick} {oncontextmenu}>
  DENY
  <br />
  CLAIM
</button>
