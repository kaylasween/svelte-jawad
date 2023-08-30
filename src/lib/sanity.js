import { createClient } from '@sanity/client'
import groq from 'groq'

export const sanityClient = createClient({
  projectId: 'gd0ti618',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-08-28',
})

export async function getPosts() {
  return await sanityClient.fetch(groq`*[_type == "post"]`)
}

export async function getPost(slug) {
  return await sanityClient.fetch(groq`*[_type == "post" && slug.current == "${slug}"][0]`)
}
