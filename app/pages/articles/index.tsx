import React from 'react'
import Layout from '../../components/Layout'
import ArticleCard from '../../components/ArticleCard'
import { sampleArticleData } from '../../utils/sample-data'

const ArticlesPage: React.FC = () => (
  <Layout title="Articles">
    <h1>Articles</h1>
    {sampleArticleData.map((article, index) => (
      <ArticleCard article={article} key={index} />
    ))}
  </Layout>
)

export default ArticlesPage
