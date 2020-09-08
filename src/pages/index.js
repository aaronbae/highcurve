import UnderConstruction from '../components/underconstruction'
import '../styles/index.css'

export default function Home() {
  if(process.env.NODE_ENV === "production") {
    return <UnderConstruction />
  }
  return (
    <div id="home">
      Nothing to show
    </div>
  )
}
