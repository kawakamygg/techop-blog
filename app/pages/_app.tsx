import React from 'react'
import 'github-markdown-css'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
