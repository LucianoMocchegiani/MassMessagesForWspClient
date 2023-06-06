'use client'
import './app.css'
import { Mensaje,Numeros} from "./Others";
import { useState, useEffect } from 'react'
import Qr from './Qrcode'
import {useAuth } from '../context/AuthContext'
import {alertConfirmacion} from '../reusables/Alerts'
import {sendMessage,logout} from '../apiFunctions/apiFunctions'



export default function Home() {
  const {autenticado,setAutenticado}=useAuth()
  const [state, setState] = useState({mensaje:'', numeros:[]})
  useEffect(()=>{
    return ()=>{
      logout()
      setAutenticado(false)}
    
  },[])
  const enviar = ()=>{
    console.log('Enviar')
    if(state.mensaje==''||state.numeros.length==0){
      console.log('* No hay numero y/o mensaje adjunto.')
      return false
    }else{sendMessage({...state})
    return true
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="title-app">Mensajes Masivos</h1> 
      {!autenticado? 
      <>
      <p className="textaa-app">Envia mensajes masivos de whatsapp sin tener los contactos agendados!</p>
      <p className="text-app">Escanea el QR para ingresar con tu whatsapp.</p>
      <Qr/></>:
      <>  
        <Mensaje setState={setState} state={state}/>
        <Numeros setState={setState} state={state}/>
        <button className='enviar'onClick={()=>alertConfirmacion("Enviar mensaje?",null,enviar,'* No hay numero y/o mensaje adjunto.')}>Enviar</button>
      </>}
    </main>   
  )
}
