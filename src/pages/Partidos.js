import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {PARTIDOS_CREADOS_ENDPOINT} from '../conection/helpers/endpoints'



function Partidos() {

    const [partidos,setPartidos]=useState([]);
    const [cargando,setCargando]=useState(true);

    useEffect(()=> {

        axios.get(PARTIDOS_CREADOS_ENDPOINT)
        .then(response=> {
                
                setPartidos(response.data);
                setCargando(false);
            }).catch(e =>{
                console.error(e);
                setCargando(false);
            })
        
    }, []);



    return (
        <div>
            <div className="mt-3">
                <h1 className='mi-jumbotron'>Asociados</h1>
                
            </div>
            {cargando && 'Cargando..'}
            {!cargando && partidos.length===0 &&
            "No hay partidos disponibles"
            }


        </div>
    )
}

export {Partidos}
