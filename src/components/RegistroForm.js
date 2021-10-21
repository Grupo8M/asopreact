import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function RegistroForm({errores,enviarCallback}) {

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')

    const enviarFormulario=(e)=>{
        e.preventDefault();
        enviarCallback({usuario,password,nombre,correo})
    }


    return (
    <Form onSubmit={enviarFormulario}>

                <Form.Group className="mb-3 mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese su Nombre" 
                        value={nombre}
                        onChange={e=>setNombre(e.target.value)}
                        isInvalid={errores.nombre}
                        />

                    <Form.Control.Feedback type='invalid'>
                        {errores.nombre}
                    </Form.Control.Feedback>   

                </Form.Group>

                <Form.Group className="mb-3" controlId="correo">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Ingrese su correo" 
                        value={correo}
                        onChange={e=>setCorreo(e.target.value)}
                        isInvalid={errores.correo}

                        />

                    <Form.Control.Feedback type='invalid'>
                        {errores.correo}
                    </Form.Control.Feedback>   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese su usuario" 
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
                
                <Button type="submit" variant="primary" className="mt-3">
                    Crear Usuario
                </Button>
            </Form>
    )
}

export {RegistroForm}
