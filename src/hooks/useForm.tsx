import { useState } from "react";

export const useForm = < FormType extends Object >( formulario: FormType )=> 
{
    
  const [state, setState] = useState( formulario  );

  const onChange = ( value: string, campo: keyof FormType )=> 
  { 
    setState( { ...state, [campo]: value} );
  }

  return { ...state, formulario: state, onChange  }
}
