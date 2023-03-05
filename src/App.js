import { Route, Switch } from 'react-router-dom';
import './App.css';
import Base from './Base/Base';
import AddStudData from './Components/AddStudData';
import StudData from './Components/StudData';
import Welcome from './Components/Welcome';
import { useEffect, useState } from 'react';
import AddTeachData from './Components/AddTeachData';
import TeachData from './Components/TeachData';

function App() {
  //================================================================================================================
//Fetching Data from Mock API 
  const[studentdata, setStudentdata]= useState([])
  const[teacherdata, setTeacherdata]= useState([])
  // console.log(studentdata);
//Api
  //student fetch
  useEffect(()=>{

const FetchStudData = async () =>{
  try{
    // const response = await fetch("https://63eaea25bfdd4299673ec988.mockapi.io/studentdata/studentdata",{
    const response = await fetch("http://localhost:9000/all/students",{
      method: 'GET'
    })
    const data = await response.json();
    setStudentdata(data);
    console.log(data);

  } catch (error) {
    console.error("Error Catched");
  }
}
FetchStudData();
  },[])


  //teacher fetch
useEffect(()=>{
  const FetchTeachData = async()=>{
  try{
// const response = await fetch("https://63eaea25bfdd4299673ec988.mockapi.io/studentdata/teacherdata",{
const response = await fetch("https://backend-api-iota.vercel.app/all/students",{

method: "GET",
})
const data = await response.json();
setTeacherdata(data.data);
console.log(data);
  }catch(error){
console.log(error.message);
  }
}
FetchTeachData();
},[])

 //================================================================================================================ 

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/studdata">
          <StudData studentdata={studentdata} setStudentdata={setStudentdata} />
        </Route>

        <Route path="/addstud">
          <AddStudData
            studentdata={studentdata}
            setStudentdata={setStudentdata}
          />
        </Route>
        <Route path="/addteach">
          <AddTeachData
          teacherdata={teacherdata}
          setTeacherdata={setTeacherdata}
          
          />
        </Route>
        <Route path="/teacherdata">
          <TeachData 
           teacherdata={teacherdata}
           setTeacherdata={setTeacherdata}
          />

        </Route>
        <Route path="**">
          <Base>
            <h1 style={{ textAlign: "center" }}>
              You lost your way go back to home <br /> 404{" "}
            </h1>
          </Base>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
