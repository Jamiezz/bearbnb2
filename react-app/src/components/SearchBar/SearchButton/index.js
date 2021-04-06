import React, { useState, useEffect } from "react";
// import glass from "magnifying_no_background"
// import search from "search_no_background"
import "./SearchButton.css"
const glass = require("./magnifying_no_background.png")
const search = require("./search_no_background.png")
const pictures = { glass, search }

const SearchButton = () => {
    const [selected, setSelected] = useState(pictures.glass)

    return (
        <>
                <img className="button" src={selected} alt='shirt' onClick={() => setSelected(pictures.search)}/>
        </>
    )
}


export default SearchButton