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

  const columns2 = React.useMemo(
    () => [ 
          {
            Header: 'Collaborator',
            accessor: 'collaborator',
          },
          {
            Header: 'Affiliation',
            accessor: 'title',
          },
          {
            Header: 'Duration',
            accessor: 'duration',
          },
        ]
  )

  const data = React.useMemo(() => sponsors.filter(sponsor=>sponsor.project!=="Academic"), [])
  const data2 = React.useMemo(() => sponsors.filter(sponsor=>sponsor.project=="Academic"), [])

  return (
    <>
    <FadeIn>
      <div className="container" style={{textAlign:"left"}}>
      <p>
      Software is omnipresent today in all walks of life. On the other hand, software is quite effort-intensive, increasingly complex and buggy! Our lab focuses on cutting edge research and develops tools in multiple areas of Software Engineering (SE) such as Bug Detection, Code Comprehension, Semantic Code Search, API Deprecation, AI for SE, SE for AI, Energy-Aware Software Engineering, Modernizing legacy code and so on!
      </p>
      <p>
      There are tremendous opportunities to create impact on industry projects by leveraging these advances, and this is where we do consulting and collaborative projects with industry for solid outcomes. Please reach out to me!
      </p>
      <p>
      Our other thrust area is Computing for Society (specifically Educational Technologies and Human-Computer Interaction), where we had decent impact in terms of developing multiple solutions (YTCoder, SurviveCovid-19, Mood of India,...) and we will be happy to collaborate with Corporate Social Responsibility (CSR) of organizations and NGOs.    
      </p>
      </div>
      <div className="container pub-page-main">
        <hr/>
    <h3>Industry Collaborations</h3>
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
    <h3>Academic Collaborations</h3>
    <Styles>
      <Table columns={columns2} data={data2} />
    </Styles>
    </div>
    </FadeIn>

    <Footer/>
    </>
  );
}

export default Collaborators;
