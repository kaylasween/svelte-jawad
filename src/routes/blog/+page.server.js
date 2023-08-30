import { getPosts } from '$lib/sanity'

export async function load() {
  const posts = await getPosts()
  return { posts }
}