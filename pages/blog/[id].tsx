import yaml from 'js-yaml'
import fs from 'fs'
import { GetStaticProps, NextPage } from 'next'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Link from 'next/link'
import { getBlogPostData } from '@/utils/cms'
import { BlogLayout } from '@/components/layout/blog-layout'
// import rehypeHighlight from 'rehype-highlight'
// import rehypeSanitize from 'rehype-sanitize'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'
import { useScroll } from 'framer-motion'
import { ProgressBar } from '../../components/blog/progress'
import { Tweet } from 'react-tweet'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface BlogPostMetadata {
  title: string
  date: string
  description: string
  content: string
  id: string
  seo_image?: string
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
  seo_image?: string
}

const BlogPostPage: NextPage<Props> = (props) => {
  const { markdown, date, title, seo_image, description } = props
  const { scrollYProgress } = useScroll()
  return (
    <>
      <ProgressBar progress={scrollYProgress} />
      <BlogLayout
        title={title}
        image={seo_image || undefined}
        description={description}
      >
        <div className="flex flex-col items-center p-2">
          <div className="w-full max-w-4xl">
            <div className="py-1 mb-3 border-b border-b-gray-200 ">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <Link
                    className="text-purple-600 underline hover:text-purple-800"
                    href="/blog"
                  >
                    back
                  </Link>{' '}
                  {' | '}
                  <Link
                    href="/"
                    className="text-purple-600 underline hover:text-purple-800"
                  >
                    home
                  </Link>
                </div>
                <span className="text-xl font-bold">
                  {new Date(date).toLocaleDateString('en-US')}
                </span>
              </div>
            </div>
            <div className="markdown">
              <ReactMarkdown
                skipHtml={false}
                rehypePlugins={[remarkGfm, rehypeRaw]}
                components={{
                  // image rendering - optimized for nextjs
                  img: ({ alt, src, height, width, className }) => (
                    <Image
                      src={src || ''}
                      alt={alt || ''}
                      width={(width as number) || 1000}
                      height={(height as number) || 1000}
                      sizes="100vw"
                      className={
                        className ||
                        'w-full h-auto mb-3 border-2 border-purple-500 rounded-md'
                      }
                    />
                  ),
                  // tweet rendering
                  div: ({ id, children }) => {
                    // if div has id tweet-<id> then render tweet
                    if (id?.startsWith('user-content-tweet-')) {
                      // remove user-content-tweet- from id
                      id = id.replace('user-content-tweet-', '')
                      return (
                        <div className="flex flex-row justify-center">
                          <Tweet id={id} />
                        </div>
                      )
                    } else {
                      return <div id={id}>{children}</div>
                    }
                  },
                  code({ inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')

                    return !inline && match ? (
                      <SyntaxHighlighter
                        {...props}
                        // eslint-disable-next-line react/no-children-prop
                        children={String(children).replace(/\n$/, '')}
                        style={materialDark}
                        language={match[1]}
                        PreTag="div"
                      />
                    ) : (
                      <code {...props} className={className}>
                        {children}
                      </code>
                    )
                  },
                }}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </BlogLayout>
    </>
  )
}

export default BlogPostPage
