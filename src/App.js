import { Route, Switch } from 'react-router-dom';
import './App.css';
import Base from './Base/Base';
import AddStudData from './Components/AddStudData';
import StudData from './Components/StudData';
import Welcome from './Components/Welcome';
import {FetchData} from './Components/StudData';
import { useEffect, useState } from 'react';
import Apifetch from './Components/Apifetch';
function App() {
  //================================================================================================================
//Fetching Data from Mock API 
  const[studentdata, setStudentdata]= useState([])
  // console.log(studentdata);
  useEffect(()=>{

const FetchData = async () =>{
  try{
    const response = await fetch("https://63eaea25bfdd4299673ec988.mockapi.io/studentdata/studentdata",{
      method: 'GET'
    })
    const data = await response.json();
    setStudentdata(data);
    console.log(data);

  } catch (error) {
    console.error("Error Catched");
  }
}
FetchData();
  },[])
 //================================================================================================================ 

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
        <Welcome />

        </Route>
        <Route path = "/studdata">
          <StudData
            studentdata={studentdata} setStudentdata = {setStudentdata}

          />
        </Route>

<Route path ="/addstud">
  <AddStudData
            studentdata={studentdata} setStudentdata = {setStudentdata}
            />
</Route>
<Route path="**">
  <Base>
  <h1 style={{textAlign:'center'}} >You lost your way go back to home <br /> 404 </h1>
  </Base>
</Route>
      </Switch>
    </div>
  );
}

export default App;
