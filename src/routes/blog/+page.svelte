<script>
  /** @type {import ('./types').PageData} */
  export let data
</script>

<h1>Blog</h1>

{#await data}
  <p>loading...</p>
{:then data}
  <ul>
    {#each data.posts as post}
      <li><a href={`/blog/${post.slug.current}`}>{post.title}</a></li>
    {/each}
  </ul>
{/await}

<style>
  h1 {
    color: #ff3e00;
  }
</style>
