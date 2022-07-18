import { useState } from "react";


export const AddUser = ({ onNewUser }) => {

    const [inputValue, setInputValue] = useState(" ")

    const onInputChange = ( {target} ) => {
        setInputValue( target.value )
    };

    const onSubmit = (event) => {
        event.preventDefault( );
        onNewUser( inputValue.trim() );
        setInputValue ( ' ' )
        
    };  

  return (
    <form onSubmit={ onSubmit }>
    <input 
        type="text"
        placeholder="Nombre de Usuario"
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        value = {inputValue}
        onChange = { onInputChange }
    />
    </form>
  )
}
