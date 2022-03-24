import { useForm } from '../hooks/useForm';

export const Formularios = ( )=> 
{
  const { formulario, onChange } = useForm(  {email: 'test@test.com', password: '123456'} ); 

  return (
    <>
        <h3>Formularios</h3>
        <input type="text"
               className="form-control"
               placeholder="Email"
               value={ formulario.email }
                //sacamos el valor del campo a partir del evento
               onChange={ ( ev )=> onChange( ev.target.value  , 'email' )}
        />
        <input type="text"
               className="form-control mt-2 mb-2"
               placeholder="Password"
               value={ formulario.password }
                //sacamos el valor del campo a partir del evento
               onChange={ ( ev )=> onChange( ev.target.value  , 'password' )}
        />
        <code>
            <pre>
                { JSON.stringify( formulario, null, 2 ) }
            </pre>
        </code>
    </>
  )
}
