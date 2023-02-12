import { fetchContent } from '@/utils/cms'
import yaml from 'js-yaml'
import fs from 'fs'
import { GetStaticProps, NextPage } from 'next'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

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
  return {
    props: {
      markdown: fetchContent(`./data/cms/blog/${params?.id}.md`),
    },
  }
}

interface Props {
  markdown: string
}

const BlogPostPage: NextPage<Props> = (props) => {
  const { markdown } = props
  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

export default BlogPostPage
