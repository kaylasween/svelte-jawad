<script>
  /** @type {import ('./types').PageData} */
  export let data
  console.log(data)
</script>

{#await data}
  <p>loading...</p>
{:then data}
  <h1>{data.title}</h1>
  <p>{data.author.name}</p>
  {#each data.body as block}
    <p>{block.children[0].text}</p>
  {/each}
{/await}

<style>
  h1 {
    color: #ff3e00;
  }
</style>
