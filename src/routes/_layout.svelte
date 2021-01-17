<script>
  import globalStore from "../stores/globalStore";
  import Navbar from "../components/Navbar/Navbar.svelte";
  import Sidebar from "../components/Navbar/Sidebar.svelte";
  import Cart from "../components/Cart/Cart.svelte";
</script>

<Navbar />
{#if $globalStore.sidebar}
  <Sidebar />
{/if}
{#if $globalStore.cart}
  <Cart />
{/if}

<main>
  <slot />
</main>
