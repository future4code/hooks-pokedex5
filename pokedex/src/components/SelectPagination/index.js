import React from 'react'

const SelectPagination = ({ itensPerPage, setItensPerPage }) => {


    return (
        <>
            <select
                value={itensPerPage}
                onChange={(e) => setItensPerPage(Number(e.target.value))}
            >
                <option value={30}>30</option>
                <option value={40}>40</option>
                <option value={50}>50</option>
            </select>
        </>
    )
}

export default SelectPagination 