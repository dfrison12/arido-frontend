export const getAllUsers = async ( ) => {
    const url = `http://localhost:3001/api/users/`;
    const resp = await fetch( url );
    const { data } = await resp.json();


    const allUsers = data.map( (user) => ({
        id: user.id,
        alias: user.alias,
        createdAt: user.createdAt.substr(0,10),
        actived: user.actived

    }));

    return allUsers 
}
