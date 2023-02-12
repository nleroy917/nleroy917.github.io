import fs from 'fs'
import yaml from 'js-yaml'
import { Layout } from '@/components/layout/layout'
import { fetchContent } from '@/utils/cms'
import { NextPage } from 'next'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { PostCard } from '@/components/blog/post-card'
import Link from 'next/link'

interface BlogPostMetadata {
  title: string
  date: string
  description: string
  content: string
  id: string
}

export interface BlogPostsMetadata {
  posts: BlogPostMetadata[]
}

export const getStaticProps = async () => {
  // read all blog posts from meta file
  const blogPostData = yaml.load(
    fs.readFileSync('./data/cms/blog/posts.yaml', 'utf8')
  ) as BlogPostsMetadata

  // Convert all dates to strings
  const blogPostMetadata = blogPostData.posts.map((post) => ({
    ...post,
    date: post.date.toString(),
  }))

  return {
    props: {
      blogHeadMarkdown: fetchContent('./data/cms/blog-header.md'),
      posts: blogPostMetadata,
    },
  }
}

interface Props {
  blogHeadMarkdown: string
  posts: BlogPostMetadata[]
}

const Blog: NextPage<Props> = ({ blogHeadMarkdown, posts }) => {
  return (
    <Layout title="Blog" description="Nathan LeRoy's Blog">
      <div className="mt-3 mb-5">
        <ReactMarkdown>{blogHeadMarkdown}</ReactMarkdown>
      </div>
      {posts.map((post) => {
        return (
          <PostCard key={post.id}>
            <div className="w-full flex flex-row items-center justify-between">
              <div>
                <Link className="no-underline" href={`/blog/${post.id}`}>
                  <h2 className="font-bold mb-0 text-purple-500 hover:underline">
                    {post.title}
                  </h2>
                </Link>
              </div>
              <div className="text-purple-600">
                {new Date(post.date).toLocaleDateString()}
              </div>
            </div>
            <p>{post.description}</p>
          </PostCard>
        )
      })}
    </Layout>
  )
}

export default Blog
