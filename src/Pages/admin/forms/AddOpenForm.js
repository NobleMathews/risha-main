import React, { useState } from 'react'

const AddOpenForm = props => {
	const initialFormState = {skill: '', desc: '', extra: '' }
	const [ open, setOpen ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setOpen({ ...open, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!open.skill || !open.desc) return
				props.addOpen(open)
				setOpen(initialFormState)
			}}
		>
			<h4 style={{textAlign:"center", padding:"10px"}}>Job Desc</h4>
			<input type="text" name="desc" value={open.desc} onChange={handleInputChange} />
			<h4 style={{textAlign:"center", padding:"10px"}}>Skill required</h4>
			<input type="text" name="skill" value={open.skill} onChange={handleInputChange} />
			<h4 style={{textAlign:"center", padding:"10px"}}>Any other short Note or Duration</h4>
			<input type="text" name="extra" value={open.extra} onChange={handleInputChange} />
			<button type="submit">Add new open</button>
		</form>
	)
}

export default AddOpenForm