import React from "react";
import './collection-item.css'

export const CollectionItem = ({id, name, price, imageUrl}) =>(
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className="colllection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
)