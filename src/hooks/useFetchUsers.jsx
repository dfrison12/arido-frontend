import { useEffect, useState } from 'react';
import { getAllUsers } from '../services/getUsers';

export const useFetchUsers = ( ) => {
 
    const [userList, setUserList] = useState([ ]);
    const [isLoading, setIsLoading] = useState( true );
    const [search, setSearch] = useState([ ]);

    const getUsers = async() => {
        const users = await getAllUsers( );
        setUserList(users);
        setIsLoading(false);

        
    }



    //función de búsqueda
     const searcher = (e) => {
        setSearch(e.target.value)
    }

     //Filter Method
     const showUser = userList.filter( user => user.alias.includes(`${search}`));
    
    useEffect( () => {
        getUsers();
        
    }, []);

    return {

        showUser,
        isLoading,
        search,
        searcher
    }

}
