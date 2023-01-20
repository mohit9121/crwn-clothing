import React from "react";
// import { CustomButton } from "../custom-button/custom-button.components";

import './form-input.styles.css'; 

export const FormInput = ({handleChange, label, ...otherProps}) =>(
    <div className="group">
        <input className="input" onChange={handleChange} {...otherProps} />
        {
            label ?
            (
                <label className = {`${otherProps.value.lenght ? 'shrink': ''} forn-input-label`} >
                    {label}
                </label>
            )
            : null
        }
    </div>
)