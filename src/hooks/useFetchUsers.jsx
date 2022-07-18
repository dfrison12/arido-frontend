import { useEffect, useState } from 'react';
import { getUser } from '../helpers/getUser';

export const useFetchUsers = ( ) => {
 
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getUsers = async() => {
        const users = await getUser( );
        setUserList(users);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getUsers();
    }, []);

    return {
        userList,
        isLoading
    }

}
