"use client"
import {createContext , useContext, useState} from 'react';

export const authContext = createContext();
export function useAuth (){
    const context = useContext(authContext)
    return context
} 

export function AuthProvider({children}){
    const [autenticado, setAutenticado] = useState(false)
   
    return (
        <authContext.Provider value={{autenticado,setAutenticado}}>
             {children}
        </authContext.Provider>
    )
}