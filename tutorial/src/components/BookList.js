import React from 'react'
import Book from './Book'
import details from './Books';


function BookList() {
    return (
        <section className="booklist">
        {
            details.map((detail)=>{
                return <Book title={detail.title} author={detail.Author} img={detail.img}/>
            })

        }
            
            
        </section>
    )
}

export default BookList
