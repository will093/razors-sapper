<script context="module">
export async function preload(page, { STRAPI_URL }) {
	const res = await this.fetch(`${STRAPI_URL}/products`);

	if (res.status === 200) {
		const data = await res.json();
		return { products: data };
	} else {
		this.error(res.status, await res.text());
	}
}
</script>

<script>
	import Products from '../../components/Products/Products.svelte';
	export let products;
</script>

<svelte:head>
	<title>Products</title>
</svelte:head>


<Products title="our products" {products} />

