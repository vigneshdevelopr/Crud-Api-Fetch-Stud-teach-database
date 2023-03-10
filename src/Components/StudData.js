import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";
import { Container, Grid } from "@mui/material";

function StudData({studentdata, setStudentdata}) {
  // const [user, setUser] = useState([]);
  const style = {
    marginTop:'-1rem',
    backgroundSize: "cover",
    backgroundImage:
      "url('https://coolbackgrounds.io/images/backgrounds/white/white-canyon-6c5d2a4c.jpg')",
    // height:"100vh",
    backgroundRepeat: "no-repeat",
  };

 //Delete the Data from the source

 const deleteStudentData = async (studID) =>{
  try {
    const response = await fetch(`https://63eaea25bfdd4299673ec988.mockapi.io/studentdata/studentdata/${studID}`, {
      method :"DELETE", 
    }); 
    const data = await response.json()
   console.log(data);
 const selectedStudents = studentdata.filter((stud)=> stud.id !== studID);
 setStudentdata(selectedStudents); 
  } catch (error) {
    console.log("error occured")
  }
}



  return (
    <Base>
      <div style={style} id="studcard">
          <Grid id="addstud-grid"  style={{ margin: "0px" }}>
            {studentdata?.map((datas, id) => (
              <Card
                sx={{ backgroundColor:'#252525',color:'whitesmoke', maxWidth: 200, minHeight:200,  borderRadius: "15px" }} key={datas.id}
              >
                <CardMedia
                  sx={{ height: 100 }}
                  image={datas.avatar}    
                  title="green iguana"
                />
                <CardContent>
                  <Typography  gutterBottom variant="h5" component="div">
                    {datas.name}
                  </Typography>
                  <Typography variant="body2" color="#fff">
                   <span style={{fontWeight:'bold', color:'yellow'}}> Batch: </span> {datas.batch}
                  </Typography>
                  <Typography variant="body2" color="#fff">
                  <span style={{fontWeight:'bold', color:'yellow'}}> Age:</span> {datas.age}
                  </Typography>
                  <Typography variant="body2" color="#fff">
                  <span style={{fontWeight:'bold', color:'yellow'}}>  Qualification:</span> {datas.qualification}
                  </Typography>
                  <Typography variant="body2" color="#fff">
                  <span style={{fontWeight:'bold', color:'yellow'}}>  Experience:</span> {datas.experience}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained">Edit  </Button>
                  <Button size="small" variant="contained" onClick={()=>deleteStudentData(datas.id)} style={{marginLeft:'1cm', backgroundColor:'red'}}>Delete</Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
      </div>
    </Base>
  );
}

export default StudData;
