<script context="module">
	export function preload() {
		return this.fetch(`products.json`).then(r => r.json()).then(products => {
			return { products };
		});
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

