import Layout from '../components/layout'
import '../styles/index.css'

export default function Home() {
  return (
    <Layout>
      <div id="home">
        HOME
        {process.env.NODE_ENV}
      </div> 
    </Layout>
  )
}
