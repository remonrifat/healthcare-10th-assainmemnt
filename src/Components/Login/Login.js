import React from 'react';
import useAuth from '../../hooks/useAuth';

import "./Login.css";

const Login = () => {
    const { signinUsingGoogle } = useAuth()
    return (

        <div className="App">
            <div>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className=" m-2   btn btn-secondary form-label">Email address :</label>
                        <input type="email" className=" btn btn-outline-info shadow-lg  m-3 p-1 w-25" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        <label for="exampleInputPassword1" className=" m-2   btn btn-secondary form-label form-label">Password :</label>

                        <input type="password" className=" shadow-lg w-25 btn btn-outline-info  m-3 p-1  w-25" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="shadow-lg btn btn-dark">Submit</button>
                </form>
            </div>
            <br />
            <div>

                <p>Do you Sign up before?</p>
                <button style={{ color: "#FFFFFF" }} className="btn btn-dark p-2" onClick={signinUsingGoogle}>Google Sign In</button>
                <p className="p-4">OR</p>
            </div>
            <a class=" btn btn-dark p-2 m-2 " href="">Register Here</a><br />
            <img src="https://trademartbd.com/wp-content/uploads/2020/09/WordPress-Registration-plugin.png" width="400px" alt="" />

        </div>


    );
};

export default Login;