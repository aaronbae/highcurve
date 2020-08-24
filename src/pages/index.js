import Layout from '../components/layout'
import UnderConstruction from '../components/underconstruction'
import '../styles/index.css'

export default function Home() {
  if(process.env.NODE_ENV === "production") {
    return <UnderConstruction />
  }
  return (
    <Layout>
      <div id="home">
        HOME
      </div> 
    </Layout>
  )
}
