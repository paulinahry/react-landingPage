import React, { useContext, createContext, useState, useEffect } from 'react'
import {
    getAuth,  
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider, 
    FacebookAuthProvider,
    signInWithPopup,
    onAuthStateChanged, 
    signOut  } from "firebase/auth";
import { auth } from'../../firebase'

const AuthContext= createContext()


export function AuthContextProvider( {children}) {

    const [user, setUser] = useState({})


    // with EMAIL AND PASSWORD
    const createUser=(email,password) => {
        return createUserWithEmailAndPassword ( auth, email, password)
    }

    function login (email, password){
        return signInWithEmailAndPassword(auth, email, password)

    }

    //logout
    function logout( ){
        return signOut(auth)
    }



    //use effect to use it only once when component is loading 
    useEffect( ()=> {
        const unsubscribe = onAuthStateChanged(auth, (currUser) => {
            console.log(currUser);
            setUser(currUser)

        }) 
        return () => {
            unsubscribe()
        };
    }, [])


    // GOOGLE signup 
    const googleSingup=()=> {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    };

    //FACEBOOK signup
    const facebookSingup=()=> {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
    };



    const sendData = {
        createUser,
        googleSingup,
        facebookSingup,
        user,
        login,
        logout,
    }

  return (
    <AuthContext.Provider value={sendData} >
        {children}
    </AuthContext.Provider>
  )
}


//acces context for other components
export function UserAuth() {
    return useContext(AuthContext)
}
