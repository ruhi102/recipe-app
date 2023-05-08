import React, {useState} from "react";
//props is a component that parent component set send function or value to their children
export const Login = (props) => {
    const [user, setUserName] = useState('');
    const [pass, setPass] = useState('');
    //capture the information when user enters user and password when they press submit
    const handleSubmit = (e) => {
        //pass to handlesubmit is the event 
        //need to declare preventdefault otherwise the page is gonna get reloaded
        e.preventDefault();
        console.log(user);

    }
    return (
        //connect handlesubmit to the form using onSubmit
        // when the button type is submit it will submit the info

        //In this part there would be a link where it will take you to the page to register
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor='username'>username</label>
                <input value ={user} onChange={(e) => setUserName(e.target.value)} type="username" placeholder="username" id="username" name="username"/>
                <label htmlFor='password'>password</label>
                <input value ={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                <button type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't Have an Account? Register</button>
        </div>
        
    )
}



   