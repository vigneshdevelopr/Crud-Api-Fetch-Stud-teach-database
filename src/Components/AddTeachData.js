import React, { useState } from 'react'
import Base from '../Base/Base'
import { Box, Button, Container, RaisedButton, TextField } from "@mui/material";
import { style } from "@mui/system";
import { useHistory } from 'react-router-dom';

const AddTeachData = ({teacherdata, setTeacherData}) => {
//Functionality 
 const [values, setValues] = useState({
   name:"" ,
   qualification:"",
   experience:"",
   age:"",
});

const {
    name,
    qualification,
    experience,
    age
}=values;
const history= useHistory();

//handle change
const handleChange = (name)=>(event)=>{
    const value = event.target.value
    setValues({...values, [name]:value})
}
//Add the data
const AddData = async (event)=>{
    event.preventDefault();
    try{
const newData = {
    name,
    qualification,
    experience,
    age,
}

const response = await fetch("https://63eaea25bfdd4299673ec988.mockapi.io/studentdata/teacherdata",
{
    method: 'POST', 
    body: JSON.stringify(newData),
    headers:{
        "Content-Type": "application/json"
    },
})
const data = await response.json();
setTeacherData([...teacherdata, data])
setValues({
    ...values,
    name:"" ,
    qualification:"",
    experience:"",
    age:"",
})
history.push("/teacherdata");
    }catch(error){

    }
};

  return (
    <Base>
    {/* <div style={style}> */}
    <div className="addstud" id="style">
        <Box
          className="addstud-sec"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <h3 style={{ color: "#252525", textAlign: "center" }}>
            ADD TEACHER
          </h3>
          <Button
            variant="contained"
            component="label"
            style={{
              backgroundColor: "black",
              fontSize: "1px",
              color: "white",
              width: "max-content",
              display: "block",
              margin: "0 auto",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            Upload Avatar
            <input type="file" hidden></input>
          </Button>

          <TextField 
          onChange={handleChange("name")}
          value = {name}
          name = "name"
          label="Name" InputLabelProps={{ shrink: true }} />
         
          <TextField
          onChange={handleChange("age")}
          value = {age}
          name = "age"

          label="Age" InputLabelProps={{ shrink: true }} />
          <TextField
          onChange={handleChange("qualification")}
          value = {qualification}
          name = "qualification"

            label="Qualification"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
          onChange={handleChange("experience")}
          value = {experience}
          name   = "experience"

          label="Experience" InputLabelProps={{ shrink: true }} />
          <Button
            variant="contained"
            type = "submit"
            style={{
              backgroundColor: "black",
              color: "white",
              width: "max-content",
              display: "block",
              margin: "0 auto",
              marginBottom: "10px",
            }}
            onClick={AddData}
          >
            Add Teacher
          </Button>
        </Box>
      </div>
  </Base>
  )
}

export default AddTeachData