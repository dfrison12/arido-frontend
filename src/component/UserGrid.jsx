import { useFetchUsers } from "../hooks/useFetchUsers";

export const UserGrid = () => {

    const { userList, isLoading } = useFetchUsers( );
    
    return (
        <div className="container ">
            <div className="justify-center ...">
                <h3> LISTADO DE USUARIOS </h3>
                {
                    isLoading && ( <h2>Cargando...</h2> )
                }
            </div>
            <div className="m-8 ... ">
                <div className="table">
                    <div className="table-header-group ...">
                        <div className="table-row">
                        <div className="table-cell text-left ...">ID</div>
                        <div className="table-cell text-left ...">Username</div>
                        <div className="table-cell text-left ...">Actived</div>
                        </div>
                    </div>
                    <div className="table-row-group">
                        {       
                            userList.map( ( user, i ) => (
                                <div className="table-row"
                                key={user + i}>
                                    <div className="table-cell ...">{user.id}</div>
                                    <div className="table-cell ...">{user.alias}</div>
                                    <div className="table-cell ...">
                                        {
                                            user.actived && ( <h2>Yes</h2> )
                                        }
                                        {
                                            !user.actived && ( <h2>No</h2> )
                                        }
                                        </div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>

        </ div>
    )
}
