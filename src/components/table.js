import '../styles/table.css'

export default function Table(params) {
  return (
    <div className="styled-table-container card">
      <table className="styled-table">
        {params.title && 
          <caption>{params.title}</caption>
        }
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
    </div>
  )
}