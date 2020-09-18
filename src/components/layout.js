import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import '../styles/layout.css'

function Layout({children}){
  const default_title = process.env.NEXT_PUBLIC_TITLE
  const default_site_name = process.env.NEXT_PUBLIC_SITE_NAME
  const default_url = process.env.NEXT_PUBLIC_URL
  const description = process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION
  return (
    <div id="root">
      <Head>
        <title>{default_title}</title>
        <link rel="icon" href="/highcurve.ico" />
        <meta key="charSet" charSet="utf-8" />
        <meta key="title" name="title" content={default_title} />
        <meta key="description" name="description" content={description} />
        <meta key="og:site_name" property="og:site_name" content={default_site_name} />
        <meta key="og:url" property="og:url" content={default_url} />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:title" property="og:title" content={default_title} />
        <meta key="og:description" property="og:description" content={description} />
        {/*<meta key="og:image" property="og:image" content="https://raw.githubusercontent.com/aaronbae/aaronbae.com/master/aaronbae.com.screencapture.png" />*/}
        <meta key="robots" name="robots" content="index, follow" />
        <meta key="referrer" name="referrer" content="origin" />
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main id="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default Layout