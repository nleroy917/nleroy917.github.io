import yaml from 'js-yaml'
import fs from 'fs'
import { GetStaticProps, NextPage } from 'next'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Link from 'next/link'
import { getBlogPostData } from '@/utils/cms'

interface BlogPostMetadata {
  title: string
  date: string
  description: string
  content: string
  id: string
}

interface BlogPostsMetadata {
  posts: BlogPostMetadata[]
}

export const getStaticPaths = async () => {
  // read all blog posts from meta file
  const blogPostData = yaml.load(
    fs.readFileSync('./data/cms/blog/posts.yaml', 'utf8')
  ) as BlogPostsMetadata

  // Convert all dates to strings
  const blogPostMetadata = blogPostData.posts.map((post) => ({
    ...post,
    date: post.date.toString(),
  }))

  const paths = blogPostMetadata.map((post) => {
    return {
      params: {
        id: post.id,
      },
    }
  })
  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getBlogPostData(params?.id as string)
  // convert date in post to string
  if (post.date) post.date = post.date.toString()

  return {
    props: {
      ...post,
    },
  }
}

interface Props {
  markdown: string
  title: string
  date: string
  description: string
  content: string
  id: string
}

const BlogPostPage: NextPage<Props> = (props) => {
  const { markdown, date } = props
  return (
    <>
      <div className="py-2 flex flex-col items-center">
        <div className="max-w-4xl">
          <div className="border-b border-b-gray-200 mb-3 py-1 ">
            <Link
              className="text-purple-600 hover:text-purple-800 underline"
              href="/blog"
            >
              back
            </Link>{' '}
            {' | '}
            <Link
              href="/"
              className="text-purple-600 hover:text-purple-800 underline"
            >
              home
            </Link>
          </div>
          <div className="markdown">
            <span>{new Date(date).toLocaleDateString('en-US')}</span>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPostPage
