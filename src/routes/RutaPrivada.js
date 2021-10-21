import React from 'react'
import { useSelector } from 'react-redux'
import { Router, Redirect } from 'react-router-dom'

function RutaPrivada({component:Componente,...restoPro}) {
    const conectado=useSelector(state=>state.auth.conectado)
    return (
        <Router
            {...restoPro}
            render={
                (propiedades) => conectado===true ? <Componente {...propiedades} />: <Redirect to= '/login'/> 
            }

        />

    )
}

export {RutaPrivada}
