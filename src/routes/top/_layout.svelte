<script>
	import Type from '../../components/top/TypeButton.svelte';
	export let data = [
		{
			name: "upcoming",
			url: "top/upcoming"
		},
		{
			name: "airing",
			url: "top/airing"
		},
		{
			name: "tv",
			url: "top/tv"
		},
		{
			name: "movie",
			url: "top/movie"
		},
		{
			name: "ova",
			url: "top/ova"
		},
		{
			name: "special",
			url: "top/special"
		}
	];
</script>

<Type data={data}/>

<main>
	<slot></slot>
</main>