<script context="module">
  import { top, loading } from "../../stores.js";

  export async function preload({ params, query }) {
    const res = await this.fetch(`https://api.jikan.moe/v3/top/anime/1/${params.type}`);
    const data = await res.json();

		if (res.status === 200) {
      top.set(data['top']);
			return {
        type: params.type
      };
		} else {
			this.error(res.status, data.message);
		}
  }
</script>

<script>
  export let type, data, isLoading;

  top.subscribe(value => {
    data = value;
  });

  loading.subscribe(value => {
    isLoading = value;
  });

  // console.log("Data: " + data);
  // console.log("Loading: " + isLoading);

  setTimeout(() => {
    console.log(data);
  }, 3000);
</script>

<style>
  .title-custom {
    display: -webkit-box;
    max-width: 100%;
    height: 2.5em;
    line-height: 1.3;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

<svelte:head>
  <title>Top {type.charAt(0).toUpperCase() + type.slice(1)}</title>
</svelte:head>

<div class="columns is-multiline">
  {#each data as item}
    <div class="column is-one-third data-item">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src={item.image_url} alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <!-- <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image" />
              </figure>
            </div> -->
            <div class="media-content">
              <p class="title is-4 title-custom">{item.title}</p>
              <p class="subtitle is-6">{item.type.toUpperCase()}</p>
            </div>
          </div>

          <!-- <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
            iaculis mauris.
            <a href="javascript:void(0)">@bulmaio</a>
            .
            <a href="javascript:void(0)">#css</a>
            <a href="javascript:void(0)">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div> -->
        </div>
        <footer class="card-footer">
          <a href="javascript:void(0)" class="card-footer-item">Share</a>
          <a href={item.url} class="card-footer-item">Learn More</a>
        </footer>
      </div>
    </div>
  {:else}
  Loading
  {/each}
</div>
