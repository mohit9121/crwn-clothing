import React from "react";
import './custom-button.styles.css'

export const CustomButton = ({children, isGoogleSignIn, ...otherProps}) =>(
    <button className={`${isGoogleSignIn? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)