import React from 'react';
import { Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <ul class="nav justify-content-center">
                <Route render={({ history }) => (
                    <li class="nav-item" onClick={() => { history.push('/') }}>
                        <a class="nav-link btn btn-dark p-2 m-2" aria-current="page" >Home</a>
                    </li>
                )
                } />
                <li class="nav-item">
                    <a class="nav-link btn btn-dark p-2 m-2 " aria-current="page" href="#About">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link  btn btn-dark p-2 m-2" aria-current="page" href="#Services">Services</a>
                </li>
                <Route render={({ history }) => (
                    <li class="nav-item" onClick={() => { history.push('/Appointment') }}>
                        <a class="nav-link  btn btn-dark p-2 m-2" aria-current="page" >Doctor's Appointment</a>
                    </li>
                )
                } />
                <Route render={({ history }) => (
                    <li class="nav-item" onClick={() => { history.push('/Pathology') }}>
                        <a class="nav-link  btn btn-dark p-2 m-2 " aria-current="page" >Pathology Test</a>
                    </li>
                )
                } />
                {
                    user.email ? <>
                        <small>{user.displayName || user.email}{" "}</small>
                        <button onClick={logOut}>Log out</button>
                    </> : <Route render={({ history }) => (
                        <li class="nav-item " onClick={() => { history.push('/Login') }}>
                            <a class="nav-link  btn btn-dark p-2 m-2" aria-current="page" >Login</a>
                        </li>
                    )
                    } />
                }
            </ul>
        </div>
    );
};

export default Navigation;