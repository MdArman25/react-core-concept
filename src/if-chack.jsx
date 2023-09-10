export default function Person ({Id, name, Ablity}){

    return (
       <li>
       {Id}         {name}    {Ablity? Ablity:'No ablity' }
       </li>
    )
   }
   