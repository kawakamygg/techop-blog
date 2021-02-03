import { User, Article } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' }
]

/** Dummy article data. */
export const sampleArticleData: Article[] = [
  {
    id: 'AnxKyXkjHWhJexY',
    title: 'article_01',
    content: 'this is article_01',
    auther: { id: 101, name: 'Alice' },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'BnxKyXkjHWhJexY',
    title: 'article_02',
    content: 'this is article_02',
    auther: { id: 102, name: 'Bob' },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'CnxKyXkjHWhJexY',
    title: 'article_03',
    content: 'this is article_03',
    auther: { id: 103, name: 'Caroline' },
    createdAt: new Date(),
    updatedAt: new Date()
  }
]
