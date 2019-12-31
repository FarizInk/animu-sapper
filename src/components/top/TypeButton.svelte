<script>
  export let data;
</script>

<style>
  .button-container {
    margin-bottom: 30px;
  }
  .is-link {
    margin-left: 10px;
    text-transform: capitalize;
  }
</style>

<div class="button-container">
  <center>
      {#each data as item}
      <a href="{item.url}" class="button is-link is-light">{item.name.toUpperCase()}</a>
      {/each}
  </center>
</div>