//search-box component
import React from "react";
import './search-box.style.css';
export const Searchbox = ({placeholder, handleChange}) => {
    return <input className="searchBox"
            type="search" size="30" 
            placeholder = {placeholder}
            onChange = {handleChange}
            />
}