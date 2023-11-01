import React, { useState } from 'react'

const AddTask = () => {
    const [query,setQuery] = useState("");
    const handleChange = (e)=>{
        setQuery(e.target.value);
    }
  return (
    <div>
      <input placeholder='Add tasks' value={query} onChange={handleChange} />
    </div>
  )
}

export default AddTask
