import { getPost } from '$lib/sanity'

export async function load({ params }) {
  const post = await getPost(params.slug)
  return post
}