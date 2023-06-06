'use client'
import { useState, useEffect } from 'react'
import QRCode  from  "react-qr-code" ;
import {getQr} from '../apiFunctions/apiFunctions'
import {useAuth } from '../context/AuthContext'
import Loading from '../reusables/Loading'

export default function Qr(){ 
    const {autenticado,setAutenticado}=useAuth()
    const [code,setCode]= useState(null)

    useEffect(() => {
        const intervalId = setInterval(() => {
          if (!autenticado) {
            getQr(setCode);
          }
        }, 5000);
    
        return () => {
          clearInterval(intervalId);
        };
    }, [autenticado]);
    useEffect(() => {
        if (code=='Error'){
        }
        if (code=='Ready'){
            setAutenticado(true)
        }
    }, [code]);

    return (
        <div className='qrContainer'>
            {!code?<Loading/>:
            < QRCode 
                id={code}
                size = { 256 } 
                style = { {  height : "auto" ,  maxWidth : "100%" ,  width : "100%"  } }
                value = {code} 
                viewBox = { `0 0 256 256` } 
            />}
        </div>  
    )
}
