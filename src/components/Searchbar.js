import React from "react"
import {IoSearchOutline} from 'react-icons/io5'
const SearchBar = ()=>{
    return(
        <React.Fragment>
            <div className="relative flex items-center">
                <input className="w-[90%] border p-1 pl-9 mt-[0.65rem] outline-none" placeholder="Type to search" type="text"/>
                <span><IoSearchOutline className="absolute ml-3 left-0 self-center"/></span>
            </div>
        </React.Fragment>
    )
}

export default SearchBar