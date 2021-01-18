
<script context="module">
	export async function preload(page, { STRAPI_URL }) {
		const res = await this.fetch(`${STRAPI_URL}/products`);

		if (res.status === 200) {
			const data = await res.json();
			const featuredProducts = data.filter(p => p.featured)
			return { featuredProducts };
		} else {
			this.error(res.status, await res.text());
		}
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
