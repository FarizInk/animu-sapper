<script>
  import { onMount } from "svelte";

  let count = 0;
  let myTodo;

  onMount(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const todo = await response.json();
    myTodo = todo;
  });

  function handleClick() {
    count++;
  }
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<button class="button" on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<div>
  {#if myTodo}
    <ul>
      <li>{myTodo.title}</li>
    </ul>
  {:else}
    <p>loading.....</p>
  {/if}
</div>