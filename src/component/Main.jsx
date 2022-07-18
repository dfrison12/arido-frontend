import { useState } from 'react';
import { AddUser } from './AddUser';
import { UserGrid } from './UserGrid';

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
        {/* <AddUser 
        onNewUser = {(value) => onAddUser(value) }
        currentUsers = {user}
        /> */}

        <UserGrid />     
    </>
  )
}
