import React, { useState, useEffect } from 'react'

const EditOpenForm = props => {
  const [ open, setOpen ] = useState(props.currentOpen)

  useEffect(
    () => {
      setOpen(props.currentOpen)
    },
    [ props ]
  )

	const handleInputChange = event => {
		if(event.target){
			const { name, value } = event.target
			setOpen({ ...open, [name]: value })
		}
		else{
			setOpen({ ...open, ["desc"]: event })
		}
	}

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateOpen(open.id, open)
      }}
    >
			<h4 style={{textAlign:"center", padding:"10px"}}>Job Desc</h4>
			<input type="text" name="desc" value={open.desc} onChange={handleInputChange} />
			<h4 style={{textAlign:"center", padding:"10px"}}>Skill required</h4>
			<input type="text" name="skill" value={open.skill} onChange={handleInputChange} />
			<h4 style={{textAlign:"center", padding:"10px"}}>Any other short Note or Duration</h4>
			<input type="text" name="extra" value={open.extra} onChange={handleInputChange} />
      <button>Update open</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditOpenForm