import axios from 'axios'

const setAutenticacionToken = token => {
    
        if(token){
            axios.defaults.headers.commom['Authorization']=token;

        }else{
            delete axios.defaults.headers.common['Authorization']
        }
 
    
}

export {setAutenticacionToken}