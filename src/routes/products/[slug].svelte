<script context="module">
	export async function preload({ params }, { STRAPI_URL }) {
    const res = await this.fetch(`${STRAPI_URL}/products/${params.slug}`);

		if (res.status === 200) {
      const data = await res.json();
			return { product: data };
		} else {
			this.error(res.status, await res.text());
		}
	}
</script>

<script>
  export let product;
  import { addToCart } from '../../stores/cart';
  import Loading from "../../components/Loading.svelte";
  import globalStore from '../../stores/globalStore';
</script>

<svelte:head>
  <title>{!product ? 'single product' : product.title}</title>
</svelte:head>

{#if !product}
  <Loading />
{:else}
  <section class="single-product">
    <!-- back to products -->
    <a href="/products" class="btn btn-primary">back to products</a>
    <!-- single product container -->
    <div class="single-product-container">
      <article class="single-product-image">
        <img src={product.image.url} alt={product.title} />
      </article>
      <article>
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
        <button
          class="btn btn-primary btn-block"
          on:click={() => {
            addToCart(parseInt(product.id), product);
            globalStore.toggleItem('cart', true);
          }}>
          add to cart
        </button>
      </article>
    </div>
  </section>
{/if}
