export const getUser = async ( ) => {
    const url = `http://localhost:3001/api/users/`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const aUser = data.map( user => ({
        id: user.id,
        alias: user.alias,
        actived: user.actived,

    }));

    return aUser 
}
