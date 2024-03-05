import React from 'react'

const Modal = (props) => {
    console.log(props)
  return (
    <div className='modal'>

<div className='modal-content'>
<h5>Title Movie</h5>
<br></br>
<h3>{props.data.Title}</h3>
</div>
<button onClick={()=>props.setSelectedMovieshow(false)}>Close</button>


    </div>
  )
}

export default Modal