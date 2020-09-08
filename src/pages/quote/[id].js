import { useRouter } from 'next/router'
import TickerTable from '../../components/tickertable'

export default function Quote() {
  const router = useRouter()
  const { id } = router.query
  return (
    <div className="quote-container">
      {id &&
        <TickerTable ticker={id.toUpperCase()}/>
      }
    </div>
  )
}