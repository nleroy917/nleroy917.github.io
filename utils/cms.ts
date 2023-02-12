import { BlogPostsMetadata } from '@/pages/blog'
import fs from 'fs'
import yaml from 'js-yaml'

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
