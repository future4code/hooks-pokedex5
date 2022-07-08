import React from 'react'

const Pagination = ({pages, setCurrentPage}) => {

    const buttonsPages = Array.from(Array(pages), (_, index) => {
        return <button
          key={index}
          onClick={() => setCurrentPage(index)}
        >
          {index + 1}
        </button>
      })
    
    return(
        <>
        {buttonsPages}
        </>
    )
}

export default Pagination 