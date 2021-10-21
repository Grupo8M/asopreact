import axios from 'axios';
import React from 'react'
import { Toast } from 'react-bootstrap';
import { ELIMINAR_PARTIDO_ENDPOINT } from '../conection/helpers/endpoints';

function EliminarPartidoButton({partidoId, local,visitante}) {

    const history=useHistpry();

    const crearAlerta=()=>{
        confirmAlert({
            tittle="Eliminar partido",
            message:`desea eliminar partido ${local} vs ${visitante}`,
            buttons:[
                {
                    label:'si',
                    onClick:()=>{EliminarPartidoButton()}
                }
            ]
        })


    }

        const eliminarPartido=async()=>{
            axios.delete(`${ELIMINAR_PARTIDO_ENDPOINT}/${partidoId}`)
            .then(response=>{
                Toast.info('Partido eliminado',{
                    position: toast.POSITION.BOTTOM_CENTER,
                    autoClose: 2000
                });
                history.push(`/partidos/${response.data.partidoId}`);
            })
            .catch(error =>{
                toast.error(error.response.data.message,{
                    position:toast.POSITION.BOTTOM.CENTER,autoclose:2000
                });
            })
        }

    return (

        <Button
            variant ='primary' size='sm'
            onClick={crearAlerta}
        >
            ELIMINAR

        </Button>
    )
}

export {EliminarPartidoButton}
