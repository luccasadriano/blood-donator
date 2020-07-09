import axios from 'axios'


export default function store (token) {
    
    if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer${token.token}`
    }else{
        delete axios.defaults.headers.common['Authorization']
    }

}


