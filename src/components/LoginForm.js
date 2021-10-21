import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function LoginForm({errores,enviarCallback}) {

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const enviarFormulario=(e)=>{
        e.preventDefault();
        enviarCallback({usuario,password})
    }

    return (
        <Form onSubmit={enviarFormulario}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Ingrese su Usuario" 
                    value={usuario}
                    onChange={e=>setUsuario(e.target.value)}
                    isInvalid={errores.usuario}

                    />

                <Form.Control.Feedback type='invalid'>
                    {errores.usuario}
                </Form.Control.Feedback>   


            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                isInvalid={errores.password}

                />
                <Form.Control.Feedback type='invalid'>
                    {errores.password}

                </Form.Control.Feedback>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Iniciar sesion
            </Button>
        </Form>
    )
}

export {LoginForm}
