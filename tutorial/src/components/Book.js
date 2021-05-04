import React from 'react'




const Book = (detail)=>{
    const clickHandler=()=>{
        alert("pressed")
    }
    console.log(detail.img);
    return(
        <div className="book">
            <img src={detail.img} alt=""/>
            
            <h1 onClick={()=>console.log(detail.title)}>{detail.title}</h1>
            <h3 style={{color:"#ffffff" , marginTop:"0.25rem"}}>{detail.author}</h3>
            <button type="button" onClick={clickHandler}>Click</button>
        </div>

    )
}

export default Book
