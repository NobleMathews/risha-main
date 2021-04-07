import React from 'react'

const OpenTable = props => (
  <table style={{marginLeft:"auto", marginRight:"auto"}}>
    <thead>
      <tr>
        <th>Description</th>
        <th>Skills</th>
        <th>Notes</th>
        <th>Controls</th>
      </tr>
    </thead>
    <tbody>
      {props.open?.length > 0 ? (
        props.open.map(open => (
          <tr key={open.id}>
            <td>{open.desc}</td>
            <td>{open.skill}</td>
            <td>{open.extra}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(open)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteOpen(open.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No open</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default OpenTable