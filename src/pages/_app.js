import Router from "next/router";
import withGA from "next-ga";
import Layout from '../components/layout'
import UnderConstruction from '../components/underconstruction'
import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  if(process.env.NODE_ENV === "production") {
    return <UnderConstruction />
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default withGA("UA-172945895-2", Router)(MyApp);
