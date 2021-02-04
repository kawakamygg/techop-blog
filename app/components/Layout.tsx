import React, { ReactNode } from 'react'
import Head from 'next/head'
import style from './Layout.module.scss'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = '' }: Props) => (
  <div className={style.s}>
    <Head>
      <title>{`${title ? `${title} | ` : ''}Techop`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <div className={style.s_contents}>{children}</div>
    <Footer />
  </div>
)

export default Layout
