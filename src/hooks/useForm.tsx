import { useState } from "react";

export const useForm = ( formulario )=> 
{
    
  const [state, setState] = useState(  );

  const onChange = ( value: string, campo: string)=> 
  { 
    setState( { ...formulario, [campo]: value} );
  }

  return { ...formulario, onChange, formulario }
}
