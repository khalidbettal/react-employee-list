
import './App.css';
import { useState } from 'react';
import Update from './components/Update';



function Employee(props){
  return (
<div className="min-w-[350px] max-w-[350px] py-8 px-8 max-w-sm m-2 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={props.image} alt="Woman's Face" />
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
        {props.name}
      </p>
      <p className="text-slate-500 font-medium">
        {props.role}
      </p>
    </div>
    <div >
    <Update id={props.id} name={props.name} role={props.role} updateEmployee={props.updateEmployee}/>
    </div>
  </div>
</div>
  );
  
}


function App() {

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Erin Lindford',
      role: 'Product Engineer',
      image: 'https://gravatar.com/avatar/4b570bca28a60319dd506aaa48c2be7d?s=400&d=robohash&r=x'
    },
    {
      id: 2,
      name: 'jane Cooper',
      role: 'developer',
      image: 'https://gravatar.com/avatar/cdfc299c71ca8cbc8abea35972086f47?s=400&d=robohash&r=x'
    },
    {
      id: 3,
      name: 'cody fisher',
      role: 'designer',
      image: 'https://gravatar.com/avatar/030ff15988074841a47e990da7aea363?s=400&d=robohash&r=x'
    },
    {
      id: 4,
      name: 'maryem bettal',
      role: 'animal lover',
      image: 'https://gravatar.com/avatar/87ffd16399acc2ef56f795402ee7f9e6?s=400&d=robohash&r=x'
    },
    {
      id: 5,
      name: 'kristin watson',
      role: 'react developer',
      image: 'https://gravatar.com/avatar/8c25cc2d6487266a1b2683f2e4856498?s=400&d=robohash&r=x'
    },
    {
      id: 6,
      name: 'alexandra',
      role: 'ios developer',
      image: 'https://gravatar.com/avatar/fab6d8a498a3538278deffcb1fa665ab?s=400&d=robohash&r=x'
    },
    {
      id: 7,
      name: 'isabella',
      role: 'front end developer',
      image: 'https://gravatar.com/avatar/a582601c3c4bbc9ce334b5f2ecacec86?s=400&d=robohash&r=x'
    },
    {
      id: 8,
      name: 'quinn flynn',
      role: 'software engineer',
      image: 'https://gravatar.com/avatar/0adc8466f6d11e7ddaae8ca40e38e24b?s=400&d=robohash&r=x'
    },
    {
      id: 9,
      name: 'olivia jade',
      role: 'ui/ux designer',
      image: 'https://gravatar.com/avatar/b520527cdec0034ad5a32bedb54a3bad?s=400&d=robohash&r=x'
    },

  ]);

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee)=>{
      if(id === employee.id){
        return {...employee, name:newName, role:newRole};
      }
      return employee ;
  
    });
    setEmployees(updatedEmployees)
  
  } 
  return (
    <div className='flex flex-wrap justify-center sm:m-32 '>
      {employees.map((employee) => (
        <Employee 
        key={employee.id}
        id={employee.id}
        name={employee.name} 
        role={employee.role} 
        image={employee.image} 
        updateEmployee={updateEmployee}/>
      ))}
    </div>
  );
}


export default App;
