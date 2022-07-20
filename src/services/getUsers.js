import axios from 'axios'

export const getAllUsers = async ( ) => {
    const {data} = await axios.get(`http://localhost:3001/api/users/`);
    const users = data.data

    const allUsers = users.map( (user) => ({
        id: user.id,
        alias: user.alias,
        createdAt: user.createdAt.substr(0,10),
        actived: user.actived

    }));
    
    return allUsers 
}
