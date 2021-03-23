import React from 'react'
import DOMPurify from 'dompurify'

const NewsTable = props => (
  <table style={{marginLeft:"auto", marginRight:"auto"}}>
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.news?.length > 0 ? (
        props.news.map(news => (
          <tr key={news.id}>
            <td>{news.date}</td>
            {/* <td>{news.desc}</td> */}
            <td><div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(news.desc)}}></div></td>
            <td>
              <button
                onClick={() => {
                  props.editRow(news)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteNews(news.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No news</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default NewsTable