<script>
  import Nav from "../components/Nav.svelte";
  import "smelte/src/tailwind.css";
  import NavigationDrawer from "smelte/src/components/NavigationDrawer";
  import {
    right,
    elevation,
    persistent,
    showNav,
    showNavMobile,
    breakpoint,
  } from "../stores.js";
  import List from "smelte/src/components/List";
  import ListItem from "smelte/src/components/List/ListItem.svelte";
  const menu = [
    { to: "/components/text-fields", text: "Text fields" },
    { to: "/components/buttons", text: "Buttons" },
    { to: "/components/selection-controls", text: "Selection controls" },
    { to: "/components/lists", text: "Lists" },
  ];

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />
<NavigationDrawer
  bind:showDesktop={$showNav}
  bind:showMobile={$showNavMobile}
  right={$right}
  persistent={$persistent}
  elevation={$elevation}
  breakpoint={breakpoint()}>
  <h6 class="p-6 ml-1 pb-2 text-xs text-gray-900">Components</h6>
  <List items={menu}>
    <span slot="item" let:item class="cursor-pointer">
      {#if item.to === '/typography'}
        <hr />
        <h6 class="p-6 ml-1 py-2 text-xs text-gray-900">Utilities</h6>
      {/if}

      <a href={item.to}>
        <ListItem
          selected={false}
          {...item}
          dense
          navigation />
      </a>
    </span>
  </List>
  <hr />
</NavigationDrawer>

<main>
  <slot />
</main>
