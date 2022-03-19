export const TiposBasicos = () => 
{
    const  nombre: string  =  'Fernando'; 
    const edad: number = 35;
    const estaActivo: boolean = true;
    const poderes: string[] = ["Velocidad","Volar","Respirar bajo el agua"];
        
  return (
    <>
        <h3>Tipos Básicos</h3>
        {nombre}, {edad}, {(estaActivo) ? "Activo" : "Inactivo"}
        <br/>
        {poderes.join(", ")}
    </>
  )
}
