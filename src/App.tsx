import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
// import { Grammy } from './components/Grammy';
// import { Greet } from './components/Greet';
// import { Heading } from './components/Heading';
// // import { Person } from './components/Person';
// // import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';

// function App() {
//     const personName = {
//       first: "Clark",
//       last: "Kent",
//     }

//     const nameList = [
//       {
//         first: "kantoi",
//         last: "jeje"
//       },
//       {
//         first: "bruce",
//         last: "teeth"
//       },
//       {
//         first: "jamal",
//         last: "kinan"
//       },
//     ]

//     return (
//     <div className="App">
//       <Greet name="Jun" messageCount={20} isLoggedIn={false}/>
//       <Person name={personName} />
//       <PersonList names={nameList}/>

//     </div>
//   );
// }

// function App () {
//   return (
//     <div className='App'>
//       <Status status='error'/>
//       <Heading>Placeholder text</Heading>
//       <Grammy>
//         <Heading>Leonardo Dcaprio</Heading>
//       </Grammy>
//       <Greet name="jun" messageCount={10} isLoggedIn={true}/>
//     </div>
//   )
// }

function App() { 
  return (
    <div className='App'>
      <Button handleClick={(event) => {
        console.log("Button clicked", event)
      }}/>
      <Input value="" handleChange={(e) => console.log(e)} />
    </div>
  )
}

export default App;
