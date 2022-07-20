import axios from 'axios'

export const createUser = async ( user ) => {
    const {data} = await axios.post(`http://localhost:3001/api/users`, user);
    const users = data.data
    
    return users
   
}
