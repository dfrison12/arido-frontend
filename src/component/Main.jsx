import { useState } from 'react';
import DataTable from './DataTable';

export const Main = () => {
    const [user, setUser] = useState(["Usuario1"]);

    const onAddUser = ( newUser ) => {
        // Validating unique alias
        if (user.includes( newUser)) {
            return;
            //Error Message
        }
        setUser( [newUser, ...user] );
    }
  return (
    <>
        <DataTable />     
    </>
  )
}
