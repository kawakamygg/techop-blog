import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = '' }: Props) => (
  <div className="flex flex-col leading-none min-h-screen bg-gray-100">
    <Head>
      <title>{`${title ? `${title} | ` : ''}Techop`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <div className="container flex-max mx-auto max-w-screen-lg">{children}</div>
    <Footer />
  </div>
)

export default Layout
