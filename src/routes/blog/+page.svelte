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
    color: orange;
  }

  ul {
    display: flex;
    justify-content: space-around;
    padding: 0;
  }

  li {
    border: 1px solid black;
    border-radius: 5px;
    list-style: none;
    padding: 0.5rem;
  }

  li:hover {
    background-color: black;
    color: white;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
</style>
