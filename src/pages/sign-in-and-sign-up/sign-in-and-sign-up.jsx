import React from "react";

import './sign-in-and-sign-up-styles.css'

import Signin from "../../components/signin/signin";
import SignUp from "../../components/sign-up/sign-up";

export const SignInAndSignUP = () =>(
    <div className="sign-in-and-sign-up">
        <Signin/>
        <SignUp/>
    </div>
)