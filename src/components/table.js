import '../styles/table.css'

export default function Table(params) {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          {params.header.map((item, index)=>
            <th key={index}>{item}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {params.children}
      </tbody>
    </table>
    
  )
}