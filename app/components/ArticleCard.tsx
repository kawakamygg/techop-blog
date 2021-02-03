import React from 'react'
import Link from 'next/link'
import { Article } from '../interfaces'
import style from './ArticleCard.module.scss'
import Auther from './Auther'

type Props = {
  article: Article
}

const ArticleCard: React.FC<Props> = ({ article }: Props) => (
  <div className={style.s}>
    <div className={style.s_top}>
      <Auther auther={article.auther} />
    </div>
    <div className={style.s_body}>
      <div className={style.s_row}>
        <Link href="/articles/[id]" as={`/articles/${article.id}`}>
          <a className={style.s_title}>{article.title}</a>
        </Link>
      </div>
      <div className={style.s_row}>
        <div className={style.s_tags}>
          <a href="#" className={style.s_tag}>AWS</a>
          <a href="#" className={style.s_tag}>Rails</a>
          <a href="#" className={style.s_tag}>Dynamodb</a>
        </div>
      </div>
      <div className={style.s_row}>
        <time className={style.s_posted}>{article.createdAt.toDateString()}</time>
      </div>
    </div>
  </div>
)

export default ArticleCard
