import React from 'react'
import Markdown from 'react-markdown'

type Props = {
  content: string
}

const ArticleContent: React.FC<Props> = ({ content }: Props) => (
  <div className="markdown-body">
    <Markdown source={content} />
  </div>
)

export default ArticleContent
