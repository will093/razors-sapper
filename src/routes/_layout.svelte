<script>
  export let segment;
</script>

<nav>
  <a href=".">Home</a>
  <a href="about">About</a>
  <a href="products">Products</a>
</nav>

<main>
  <slot />
</main>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
