<script lang="ts">
  import type { Item } from "$lib/items/item";

  interface Props {
    item: Item;
    quantity: number;
  }

  let { item, quantity }: Props = $props();
</script>

<p>{item.name} x{quantity}</p>
