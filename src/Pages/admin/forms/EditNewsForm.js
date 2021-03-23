import React, { useState, useEffect } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

const EditNewsForm = props => {
  const [ news, setNews ] = useState(props.currentNews)

  useEffect(
    () => {
      setNews(props.currentNews)
    },
    [ props ]
  )

	const handleInputChange = event => {
		if(event.target){
			const { name, value } = event.target
			setNews({ ...news, [name]: value })
		}
		else{
			setNews({ ...news, ["desc"]: event })
		}
	}

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateNews(news.id, news)
      }}
    >
      <h4 style={{padding:"10px", textAlign:"left"}}>Date</h4>
      <input type="Date" name="date" value={news.date} onChange={handleInputChange} />
      <h4 style={{padding:"10px", textAlign:"left"}}>Description</h4>
      {/* <input type="text" name="desc" value={news.desc} onChange={handleInputChange} /> */}
      <ReactQuill name="desc" value={news.desc}
                  onChange={handleInputChange} />
      <button>Update news</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditNewsForm