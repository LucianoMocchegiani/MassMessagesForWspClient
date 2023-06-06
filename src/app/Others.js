'use client'
import './app.css'
import { useState, useEffect } from 'react'


export function Numeros({setState, state}){
    const [numerosStr,setNumerosStr]=useState('')
    const [arrayNumeros,setArrayNumeros]=useState([])
    function extraerNumerosDeTelefono(texto) {
        const regex = /\b\d{9,}\b/g; // Expresión regular para buscar números de 10 dígitos o más
        const numerosEncontrados = texto.match(regex);
        return numerosEncontrados || [];
    }
    function formatearNumero(numero) {
        // Eliminar cualquier caracter que no sea un dígito
        let numeroLimpio = numero.replace(/\D/g, '');

        if (numeroLimpio.startsWith('0')) {
            numeroLimpio = numeroLimpio.slice(1);
          }
        if (numeroLimpio.startsWith('549')) {
            numeroLimpio = numeroLimpio.slice(3);
        }
        if (numeroLimpio.startsWith('54')) {
            numeroLimpio = numeroLimpio.slice(2);

        }
        const numeroFormateado = `549${numeroLimpio}@c.us`;
        return numeroFormateado
    }
    useEffect(()=>{
        setArrayNumeros(extraerNumerosDeTelefono(numerosStr).map(e=>formatearNumero(e)))
    },[numerosStr])
    useEffect(()=>{
        setState({...state, numeros:arrayNumeros})
    },[arrayNumeros])

    const handleChangeNumeros = (e)=>{
        let numeros = e.target.value
        setNumerosStr(numeros)
    }
    return (
        <div className='container-s'>
            <label className='label'>Numeros de telefono</label>
            <textarea className='input-numeros'placeholder='Ingrese sus numeros...' value={numerosStr} onChange={handleChangeNumeros}/>
            <p className='text-numeros'>Numeros Ingresados: {arrayNumeros?.length}</p>
        </div>
    )
}
export function Mensaje ({setState, state}){
    const [mensaje, setMensaje]=useState('')
    useEffect(()=>{
        setState({...state,mensaje:mensaje})
      },[mensaje])
    const handleChangeMensaje = (e)=>{
        let mensaje = e.target.value
        setMensaje(mensaje)
    }
    return (
        <div className='container-s'>
            <label className='label'>Mensaje a enviar</label>
            <textarea className='input-mensaje' placeholder='Escriba su mensaje...' value={mensaje} onChange={handleChangeMensaje}/>
        </div>
    )
}
