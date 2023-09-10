import { useState } from "react"

export default function Counter(){
    const num = [10,20,10]
    let [count, Setcount] = useState(0)
 const AddHanddle= ()=>{
 num.map(number=> Setcount(count+number))
 }
 const removehandle =()=>{
Setcount (count-1)
 }

    return(
    <div style={{ border: '2px solid blue'}}>
        <h2>
            Counter: {count}
        </h2>
        <button onClick={AddHanddle}>Add Num</button>
        <br />
        <button style={{marginTop:'20px '}} onClick={removehandle}>Remove Num</button>
    </div>
    )
}