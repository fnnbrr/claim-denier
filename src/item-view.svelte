<script lang="ts">
  import type { Item } from "$lib/items/item";

  interface Props {
    item: Item;
  }

  let { item }: Props = $props();
</script>

<p>{item.name}</p>
