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
    backgroundSize: "cover",
    backgroundImage:
      "url('https://img5.goodfon.com/original/1920x1080/0/ad/4k-ultra-hd-background-staircase-dark-room-backlight-lightin.jpg')",
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
      <div style={{ backgroundColor: "black" }}>
        <Container style={style} id="studcard">
          <Grid container spacing={0} gap={6} style={{ marginTop: "0px" }}>
            {studentdata?.map((datas, id) => (
              <Card
                sx={{ maxWidth: 250, marginTop: "2cm", borderRadius: "15px" }} key={datas.id}
              >
                <CardMedia
                  sx={{ height: 100 }}
                  image={datas.avatar}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {datas.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Batch: {datas.batch}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Age: {datas.age}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Qualification: {datas.qualification}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Experience: {datas.experience}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained">Edit  </Button>
                  <Button size="small" variant="contained" onClick={()=>deleteStudentData(datas.id)} style={{marginLeft:'1cm', backgroundColor:'red'}}>Delete</Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
        </Container>
      </div>
    </Base>
  );
}

export default StudData;
