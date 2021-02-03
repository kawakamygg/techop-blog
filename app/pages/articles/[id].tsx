import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'

import { Article } from '../../interfaces'
import { sampleArticleData } from '../../utils/sample-data'
import Layout from '../../components/Layout'

type Props = {
  article: Article
}

const ArticlePage: React.FC<Props> = ({ article }: Props) => (
  <Layout title={article.title}>
    <h1>{article.title}</h1>
    <p>{article.content}</p>
  </Layout>
)

export default ArticlePage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = sampleArticleData.map((article) => ({
    params: {
      id: article.id
    }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const article = sampleArticleData.find((data) => data.id === id)

    const parsedArticle = {
      ...article,
      createdAt: article ? article.createdAt.toString() : null,
      updatedAt: article ? article.updatedAt.toString() : null
    }

    return {
      props: { article: parsedArticle }
    }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
