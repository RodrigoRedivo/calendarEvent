import { useEffect, useState } from 'react';
import {
    useLocation,
    useHistory
  } from "react-router-dom";
import Context from './contex.js';
import { LS, callAPi } from '../../helpers';

const allowed_pages = ['/login', '/cadastro']

function AuthProvider({ children }){

    let location = useLocation();
    let history = useHistory();

    const [ user, setUser ] = useState( LS.get('user') )
    
    function setNewUser(user){
        setUser(user)
        LS.set('user', user)
    }

    function logout(){
        setUser(null)
        LS.remove('user')
    }

    function login({ email, senha }){

        const opts = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        }

        return new Promise((resolve, reject)=>{
            callAPi('http://localhost:8080/login', opts)
                .then((result)=>{
                    resolve(result)
                    setNewUser(result)
                })
                .catch(reject)
        })
        
    }

    useEffect(()=>{
        if(!allowed_pages.includes( location.pathname )){
            if(user === null){
                history.push('/login')
            }
        }
    })


    return(
        <Context.Provider value={{ login, logout, user }}>
            { children }
        </Context.Provider>
    )
}

export default AuthProvider