import React from 'react'
import Layout from '../../components/Layout'
import ArticleCard from '../../components/ArticleCard'
import { sampleArticleData } from '../../utils/sample-data'

const ArticlesPage: React.FC = () => (
  <Layout title="Articles">
    <h1>Articles</h1>
    {sampleArticleData.map((article, index) => (
      <div className="mb-2" key={index}>
        <ArticleCard article={article} />
      </div>
    ))}
  </Layout>
)

export default ArticlesPage
