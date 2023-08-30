<script>
  let name = 'svelte'
  let count = 0
</script>

<h1>Hello, {name}!</h1>
<p>Count (🧛‍♂️): {count}</p>
<button on:click={() => (count += 1)}>Increment</button>

<style>
  h1 {
    color: #ff3e00;
  }
</style>
