import React from "react";

import './Header.css'

const Header = ({titulo}) =>{
    return(
        <div className="ur-header">
            <img className="ur-header-logo" src="https://s3-alpha.figma.com/hub/file/1913095808/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png" alt="logo" />
            <h1 className="ur-header-title">{titulo}</h1>
        </div>
    )
}

export default Header