import { useFetchUsers } from "../hooks/useFetchUsers";
import DataTable from "react-data-table-component";

export const UserGrid = () => { 
    const { showUser, isLoading, searcher, search } = useFetchUsers( );
    
    /* configuring columns for users table */
    const columns = [
        {
            name: "ID",
            selector: ( row ) => row.id
        },
        {
            name: "ALIAS",
            selector: ( row ) => row.alias
        },
        {
            name: "ACTIVED",
            selector: ( row ) => { if (row.actived) {return "Activo"} else {return "Inactivo"} }
        },
    ]
    
    return (
        <div className="container ">
            <div className="justify-center ...">
                <h3> LISTADO DE USUARIOS </h3>
                {
                    isLoading && ( <h2>Cargando...</h2> )
                }
            </div>
            <input type="text" onChange={ searcher } placeholder="Find User"/>
            <DataTable
                columns={ columns }
                data= { showUser }
                pagination
            />
            
            

        </ div>
    )
}
