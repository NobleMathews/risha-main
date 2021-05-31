import React from 'react'
import FadeIn from 'react-fade-in';
import styled from 'styled-components'
import { useTable } from 'react-table'
import {sponsors} from "../data"
import Footer from "../Components/Footer";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid;
      border-right: 1px solid;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Collaborators() {
  const columns = React.useMemo(
    () => [ 
          {
            Header: 'Project',
            accessor: 'project',
          },
          {
            Header: 'Collaborator',
            accessor: 'title',
          },
          {
            Header: 'Duration',
            accessor: 'duration',
          },
        ]
  )

  const data = React.useMemo(() => sponsors.filter(sponsor=>sponsor.project), [])

  return (
    <>
    <FadeIn>
      <div className="container pub-page-main">
        <hr/>
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
    </div>
    </FadeIn>

    <Footer/>
    </>
  );
}

export default Collaborators;
