import React from "react"
import './menu-item.css'
// import {withRouter} from 'react-router-dom'; 
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate 
  } from 'react-router-dom';


export const MenuItem = ({title, imageUrl, size}) => (
    <div
    style={
        {backgroundImage: `url(${imageUrl})`, cursor: 'pointer'}
    }
    className={`${size} menu-item`}
    >
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

// export default MenuItem;