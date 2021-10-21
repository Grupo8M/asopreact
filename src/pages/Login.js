import React, { useEffect, useState } from 'react'
import {Col,Container,Row,Card, Alert} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import { LoginForm } from '../components/LoginForm'
import  validator  from 'validator'
import {useDispatch, useSelector} from 'react-redux'
import { loginUsuario } from '../conection/autenticacion'
import {isObjectoVacio} from '../conection/helpers/isObjectoVacio'

function Login() {

    const [errores,setErrores]= useState({})
    const dispatch=useDispatch()
    const conectado=useSelector(state=>state.auth.conectado)
    const history=useHistory()

    useEffect(()=>{
        if(conectado){
            history.push('/')
        }
    })

    const login= ({usuario,password}) =>{

        const errores={}
            setErrores(errores)
            if (validator.isEmpty(usuario)){
                errores.usuario='Este campo no puede estar vacio'
            }

            if (validator.isEmpty(password)){
                errores.password='Este campo no puede estar vacio'
            }     

            if(!isObjectoVacio(errores)){
                setErrores(errores);
                return;
            }

            // console.log({usuario,password})
            dispatch(loginUsuario({usuario, password}))
            .then(reponse=>{

            })
            .catch(error=>{
                setErrores({autenticacion:'Datos invalidos'})
            })

    }

    return (
        <Container className='mt-3'>
            <Row>
                <Col sm='12' md={{span:8,offset:2}} lg={{span:6,offset:3}}>
                    <Card body>
                        {errores.autenticacion && <Alert variant='danger'>{errores.autenticacion}</Alert>}
                        <h3>Iniciar sesion</h3>
                        <LoginForm errores={errores} enviarCallback={login}></LoginForm>
                        <div className='mt-3'>
                            <Link to={'/registro'}>¿No tienes cuenta? Regisrate aquí </Link>
                            
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>


    )
}

export {Login}
