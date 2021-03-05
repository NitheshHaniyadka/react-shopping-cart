import React from 'react'




const Form=props=>(
    
    <form onSubmit={props.getFilter}>
        <button>Filter</button>
    </form>
)

export default Form;