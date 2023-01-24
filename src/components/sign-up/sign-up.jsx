import React from "react";

import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.components";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import './sign-up.styles.css'; 

class SignUp extends React.Component{
    constructor(){
        super(); 
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault(); 
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('pasword doesnt match '); 
            return; 
        }
        try{
            const user = await auth.createUserWithEmailAndPassword(email, password); 
            await createUserProfileDocument(user, {displayName}); 
            this.setState = {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        } catch (error){
            console.error(error); 
        }
    }

    handleChange = async event =>{
        const {name, value} = event.target; 
        this.setState({[name]:value});
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state; 
        return(
            <div className="sign-up">
                <h1 className="title">I Do Not Have An Account</h1>
                <span>Sign Up With Email And Password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp; 