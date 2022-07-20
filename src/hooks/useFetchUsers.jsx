import { useEffect, useState } from 'react';
import { getAllUsers } from '../services/getUsers';
import { findUser } from '../services/findUser';
import { createUser } from '../services/createUser'

export const useFetchUsers = ( ) => {
 
    const [userList, setUserList] = useState([ ]);
    const [search, setSearch] = useState("");

    const getUsers = async() => {
        const users = await getAllUsers( );
        setUserList(users);   
    }

     const searcher = async (e) => {
        const users = await findUser( e.target.value );
        setUserList(users); 
    }

    const create = async ( user ) => {
        const data = await createUser(user)
        setUserList([...userList, data ])
    };
    
    return {
        userList,
        search,
        searcher,
        getUsers,
        create,
    }
}
