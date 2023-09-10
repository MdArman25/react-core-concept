import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './if-chack'
import Singers from './map'
import Counter from './count'
import Users from './Team,'
function App() {
  const persons = ['arman','moaj','sumiya', 'faiza','farya','SIB']
 
 
  return (
    <>

<Users></Users>
{/* {
  persons.map(person=><Singers name={person}></Singers>)
}

<Person Id="01" name='Arman Sarker' Ablity="programmer" ></Person>
<Person Id="" name='MOaj' Ablity="Student" ></Person>
<Person Id="03" name='Sumiya' Ablity="" ></Person>
    */}
      <h1>Vite + React</h1>
<Counter></Counter>

      {/* <Test name="arman" age="16" ></Test>
      <Test name="Moaj" age="14" Class ="Nine"></Test>
      <Test name="Sumiya Islam Barsha (SIB)" age="14" Class ="Nine"></Test>
    
      */}
    </>
  )
}




function Test (probs){
if(probs.name && probs.Class)
{
  return(
    <div style={{margin:'20px',
    border:"2px solid red"}}>
      <h3>name : {probs.name}  </h3>
      <h3>age : {probs.age}</h3>
  <h3>Class : {probs.Class} </h3>
  
    </div>
  
  
  )
}
else{
return(
  <div>
  <h3>no data</h3>
</div>
)
}
}

function Chack (){
return(
  <div>
    <h2>Name:</h2>
  </div>
)
}

export default App
