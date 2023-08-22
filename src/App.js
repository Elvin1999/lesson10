import './App.css';
import {createContext,useContext, useEffect, useState} from 'react';
import axios from 'axios';

const ThemeContext=createContext(null);
function App() {
  const [theme,setTheme]=useState('light');
  const [data, setData] = useState(null);

  const url = "https://reqres.in/api/users?page=2";

  function getUsersAxios() {
      axios.get(url)
      .then((data) =>{
        setData(data.data);
        console.log(data);
      } )
      .catch((err) => console.log(err));
  }

  function sendObjectPOSTAxios(){
    
    // const obj={
    //   name:"Elvin",
    //   job:"Programmer"
    // };

    // axios.post("https://reqres.in/api/users",obj)
    // .then(response=>console.log(response.data));


    // const obj={
    //   name:"Elvin",
    //   job:"Programmer"
    // };

    // axios.put("https://reqres.in/api/users/2",obj)
    // .then(response=>console.log(response.data));



    const obj={
      name:"Elvin",
      job:"Programmer"
    };

    axios.delete("https://reqres.in/api/users/2")
    .then(response=>console.log(response));
}

  function getUsers() {
    fetch(url)
      .then((response) => response.json())
      .then((data) =>{
        setData(data);
        console.log(data);
      } )
      .catch((err) => console.log(err));
  }
 

function sendObjectPOST(){
      const requestOptions={
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          name: "Elvin",
          job: "Programmer"
      })
      }

      fetch(url,requestOptions)
      .then(response=>response.json())
      .then(data=>console.log(data))
}


function deleteItem(){
  fetch("https://reqres.in/api/users/2",{method:'DELETE'})
  .then(()=>alert('Deleted Successfully'));
}

  useEffect(() => {
    // getUsers();
    // sendObjectPOST();
    // deleteItem();
    //getUsersAxios();
    sendObjectPOSTAxios();
  }, []);
 
  return (
    <div>
      {data && (
        <ul>
          {data.data.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      )}
    </div>
  )


  //      <ThemeContext.Provider value={theme}>
  //       <Form></Form>
  //       <label>
  //         <input type='checkbox' checked={theme==='dark'}
  //         onChange={(e)=>{
  //           setTheme(e.target.checked ? 'dark' : 'light')
  //         }}
  //         ></input>
  //         Use dark mode
  //       </label>

  //           <ThemeContext.Provider value={'light'}>
  //               <Form></Form>
  //           </ThemeContext.Provider>

  //  </ThemeContext.Provider>
 
}


function Form(){
  return (
      <Panel title="Welcome">
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
      </Panel>
  );
}


function Panel({title,children}){
  const theme=useContext(ThemeContext);
  const className=theme;

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}


function Button({children})
{
  const theme=useContext(ThemeContext);
  return (
<button className={theme}>
  {children}
</button>
  );
}
export default App;
