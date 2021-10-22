
import React, { useEffect, useState } from 'react'
import {Col,Container,Row,Card, Alert} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import  validator  from 'validator'

import {useDispatch, useSelector} from 'react-redux'
import {isObjectoVacio} from '../conection/helpers/isObjectoVacio'
import { loginUsuario,registrarUsuario } from '../conection/autenticacion'
import {EliminarPartidoButton} from '../components/EliminarPartidoButton'
import {Registro} from '../pages/Registro'

function Asociados() {

    const [errores,setErrores]= useState({})
    const dispatch=useDispatch()
    const conectado=useSelector(state=>state.auth.conectado)
    const history=useHistory()

    useEffect(()=>{
        if(conectado){
            history.push('/')
        }
});

const register= ({usuario,password,nombre,correo}) =>{

    const errores={};
        setErrores(errores);

        if (validator.isEmpty(nombre)){
            errores.nombre='Este campo no puede estar vacio'
        }

        if (validator.isEmail(correo)){
            errores.nombre='Este campo no puede estar vacio'
        }

        if (validator.isEmpty(usuario)){
            errores.usuario='Este campo no puede estar vacio'
        }

        if(!validator.isLength(password,{min:8,max:30})){
            errores.password='longitud contraseña'
        }

        if(!isObjectoVacio(errores)){
            setErrores(errores);
            return;
        }

        dispatch(registrarUsuario({usuario, password,nombre,correo}))
        .then(reponse=>{
            dispatch(loginUsuario({usuario,password}))

        })
        .catch(error=>{
            setErrores({registro:error.response.date.message})
        })

}

return (
    <Container className='mt-3'>
        <Row>
            <Col sm='12' md={{span:8,offset:2}} lg={{span:6,offset:3}}>
                <Card body>
                    {errores.registro && <Alert variant='danger'>{errores.registro}</Alert>}
                    <h3>Registrar usuario</h3>
                    <EliminarPartidoButton errores={errores} enviarCallback={Registro}></EliminarPartidoButton>
                    <div className='mt-3'>
                        <Link to={'/login'}>¿Ya tienes cuenta? Ingresa aquí </Link>
                        
                    </div>
                </Card>
            </Col>
        </Row>
    </Container>


)
}
export {Asociados}
