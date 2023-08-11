import { BlogPostsMetadata } from '@/pages/blog'
import { Publication } from '@/pages/publications'
import fs from 'fs'
import yaml from 'js-yaml'

export interface SoftwareEntry {
  name: string
  github: string
  description: string
  registry: string
  tags: string[]
}

export interface Software {
  software: SoftwareEntry[]
}

export const getSoftware = (): Software => {
  const software = yaml.load(
    fs.readFileSync('./data/cms/software/software.yaml', 'utf-8')
  ) as Software
  return software
}

export const getPublications = () => {
  const publications = yaml.load(
    fs.readFileSync('./data/cms/publications/pubs.yaml', 'utf-8')
  ) as Publication[]
  return publications
}

export const getBlogPosts = (): BlogPostsMetadata => {
  const posts = yaml.load(
    fs.readFileSync('./data/cms/blog/posts.yaml', 'utf-8')
  ) as BlogPostsMetadata
  return posts
}

export const fetchContent = (path: string) => {
  const markdown = fs.readFileSync(path, 'utf-8')
  return markdown
}

export const getBlogPostData = (id: string) => {
  const { posts } = getBlogPosts()
  const post = posts.find((post) => post.id === id)
  const markdown = fetchContent(`./data/cms/blog/${id}.md`)
  return { ...post, markdown }
}
