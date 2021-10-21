import React from 'react'
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { cerrarSesion } from '../conection/autenticacion'
import '../styles/App.css'


function Navegacion() {

    const conectado =useSelector(state=>state.auth.conectado)
    const usuario =useSelector(state=>state.auth.usuario)
    const dispatch =useDispatch()


    return (

    <Navbar  className='color-nav' expand="lg">
        <Container>
            <Navbar.Brand as={NavLink} to={'/'}>Asopalmar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {conectado && 
                        <Nav.Link as={NavLink} to ={'/crearpartido'}>Crear Partido</Nav.Link>
                        }
                        </Nav>
                    
                    <Nav >
                        {!conectado ? (
                            <React.Fragment>
                            
                                <Nav.Link as={NavLink} to ={'/registro'}>Registrar usuario</Nav.Link>
                                <Nav.Link as={NavLink} to ={'/login'}>Iniciar sesion</Nav.Link>
                                
                            </React.Fragment>
                                 ):(
                                <NavDropdown title={usuario.sub} id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to ={'/partidos'}>Mis partidos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={()=>dispatch(cerrarSesion)}>Cerrar sesion</NavDropdown.Item>                        
                                </NavDropdown>
                            )
                            }
                    </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>

    )
}

export {Navegacion}
