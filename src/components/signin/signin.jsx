import React from "react";
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.components";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import './signin.css'

class Signin extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            email: '', 
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault(); 
        this.setState({email: '', password: ''}); 
    }

    handleChange = event =>{
        const {value, name} = event.target; 
        this.setState({[name]:value}); 
    }

    render(){
        return(
            <div className="sign-in">
                <h2>Already Have and account </h2>
                <span>Sign In Using Email and Password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput name="email" label="email" type="email" handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput name="password" label="password" type="password" handleChange ={this.handleChange} value={this.state.password} required />
                    <div className="buttons">
                    <CustomButton type="submit" >SIGN IN</CustomButton>
                    <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>
                        {''}
                        SIGN IN WITH GOOGLE{''}
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin; 