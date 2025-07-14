import { Layout } from '@/components/layout/layout'
// import { fetchContent } from '@/utils/cms'
import { InferGetStaticPropsType, NextPage } from 'next'
// import ReactMarkdown from 'react-markdown'

export const getStaticProps = async () => {
  return {
    props: {
      foo: 'bar',
    },
  }
}

const Hire: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  foo,
}) => {
  return (
    <Layout>
      <div>{foo}</div>
    </Layout>
  )
}

export default Hire
