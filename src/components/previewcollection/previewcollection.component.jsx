import React from "react";
import './preview.styles.css'
import { CollectionItem } from "../collection-item/collection-item";

export const PreviewCollection = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div key={items.id} className="preview">
            {items
            .filter((item, idx) => idx<4)
            .map(({id, ...otherItemProps}) =>(
                // <div key={item.id}>{item.name}</div>
                <CollectionItem key = {id} {...otherItemProps}/>
            ))}
        </div>
    </div>
)