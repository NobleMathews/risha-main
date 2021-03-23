import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddNewsForm = props => {
	const initialFormState = { id: null, date: '', desc: '' }
	const [ news, setNews ] = useState(initialFormState)

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
				if (!news.date || !news.desc) return
				props.addNews(news)
				setNews(initialFormState)
			}}
		>
			<h4 style={{textAlign:"center", padding:"10px"}}>Date</h4>
			<input type="date" name="date" value={news.date} onChange={handleInputChange} />
			<h4 style={{textAlign:"center", padding:"10px"}}>Description</h4>
			{/* <input type="text" name="desc" value={news.desc} onChange={handleInputChange} /> */}
			<ReactQuill name="desc" value={news.desc}
                  onChange={handleInputChange} />
			<button>Add new news</button>
		</form>
	)
}

export default AddNewsForm