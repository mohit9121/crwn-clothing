import React from "react";
import './homepage.styles.css'
import { MenuItem } from "../../components/menu-item/menu-item";
import Directory  from "../../components/directory/directory.component";

export const Homepage = ({history}) => (
    <div className="homepage">
        <Directory  />
    </div>
)