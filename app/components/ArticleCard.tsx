import React from 'react'
import Link from 'next/link'
import { Article } from '../interfaces'
import Author from './Author'

type Props = {
  article: Article
}

const ArticleCard: React.FC<Props> = ({ article }: Props) => (
  <div className="border border-gray-400 rounded-md bg-white p-3">
    <div className="mb-2">
      <Author author={article.author} />
    </div>
    <div className="ml-4">
      <div className="mb-1.5">
        <Link href="/articles/[id]" as={`/articles/${article.id}`}>
          <a className="text-gray-700 inline text-xl font-medium no-underline hover:text-purple-700">{article.title}</a>
        </Link>
      </div>
      <div className="mb-1.5">
        <div className="flex flex-auto mr-1">
          {article.tags.map((tag, index) => (
            <a href="#" className="border border-gray-400 rounded-md text-gray-400 inline-block text-xs px-1 py-0.5 mr-1 hover:text-purple-500" key={index}>
              {tag}
            </a>
          ))}
        </div>
      </div>
      <div>
        <time className="text-xs">{article.createdAt.toDateString()}</time>
      </div>
    </div>
  </div>
)

export default ArticleCard
