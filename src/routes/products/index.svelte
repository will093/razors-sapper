<script context="module">
	export function preload() {
		return this.fetch(`products.json`).then(r => r.json()).then(products => {
			return { products };
		});
	}
</script>

<script>
	export let products;
</script>

<svelte:head>
	<title>Products</title>
</svelte:head>

<h1>Welcome to products page</h1>

<ul>
	{#each products as product}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel="prefetch" href="products/{product.id}">{product.title}</a></li>
	{/each}
</ul>
