import React from "react";
import SHOP_DATA from "./shopdata";
import { PreviewCollection } from "../../components/previewcollection/previewcollection.component";

class ShopPage extends React.Component {
    constructor(props) {
        super();

        this.state = {
            collection: SHOP_DATA
        }
    }
    render() {
        const {collection} = this.state;
        return (
            <div className="shop-page">
                {
                    collection.map(collection =>(
                        <PreviewCollection key={collection.id} title = {collection.title} items = {collection.items}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage; 