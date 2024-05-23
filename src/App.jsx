import React, { useEffect, useRef, useState } from 'react'
// import useShowOnclick from './useShowOnClick'

const OnclickOutside = () => {
    const [showContent,setShowcontent] = useState(false)
    const content = useRef()

useEffect(()=>{
    document.addEventListener("mousedown",(e)=>{
        setShowcontent(false)
    })
},[])


  return (
    <div>
  {showContent ?  <div ref={content} style={{background:"red",padding:"20px"}}>
<h1>Show me </h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste nihil nemo sapiente error magnam consequatur? Reprehenderit, nostrum. Nobis laboriosam libero porro dolor consequuntur nostrum quasi eius a omnis tenetur.</p>

  </div> : <button onClick={()=> setShowcontent(true)}>
    click to show
    </button>}
    </div>
  )
}

export default OnclickOutside
