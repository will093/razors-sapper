
<script context="module">
	export function preload() {
		return this.fetch(`index.json`).then(r => r.json()).then(products => {
			return { featuredProducts: products };
		});
	}
</script>

<script>
  import Hero from "../components/Hero.svelte";
  // featured products
	import Featured from "../components/Products/Featured.svelte";
	
	export let featuredProducts;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Hero>
  <a href="/products" class="btn btn-primary btn-hero">shop now</a>
</Hero>
<Featured title="featured products" {featuredProducts}/>
