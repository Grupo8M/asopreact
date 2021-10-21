
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import {store} from '../../store'
import { cerrarSesion, setUsuarioActual } from '../autenticacion'
import { setAutenticacionToken } from './setAutenticacionToken'

const comprobarToken = () => {
    
    if(localStorage.jwtToken){
        setAutenticacionToken(localStorage.jwtToken)

        const decodificado=jwt_decode(localStorage.jwtToken)

        StorageEvent.dispatch(setUsuarioActual({
            usuario:decodificado,
            conectado:true
        }))

        const tiempoActual=Math.floor(Date.now()/1000)
        if(decodificado.exp < tiempoActual){
            StorageEvent.dispatch(cerrarSesion())
            window.location.href='login'
        } 
    }
}

export {comprobarToken}