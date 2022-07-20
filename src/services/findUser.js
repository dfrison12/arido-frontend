import axios from 'axios'

export const findUser = async ( search ) => {
    const {data} = await axios.get(`http://localhost:3001/api/users/${search}`);
    const users = data.data
    
    return users
   
}
