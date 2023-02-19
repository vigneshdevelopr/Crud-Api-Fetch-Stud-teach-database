import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react'
import Base from '../Base/Base';

const TeachData = ({teacherdata, setTeacherdata}) => {

const style = {
    marginTop:'-1rem',
    backgroundSize: "cover",
    backgroundImage:
      "url('https://www.allisonacademy.com/wp-content/uploads/2021/12/Teacher-in-the-classroom.jpg')",
    // height:"100vh",
    backgroundRepeat: "no-repeat",
  };

//Delete 

const DeleteData = async(teachId)=>{
try{
const response = await fetch(`https://63eaea25bfdd4299673ec988.mockapi.io/studentdata/teacherdata/${teachId}`
,{
    method: "DELETE",
});
const data = await response.json();
console.log(data);

const deleteselect = teacherdata.filter((teacher)=>teacher.id !== teachId)
setTeacherdata(deleteselect);
}catch(error){
console.error(error);
}
}



  return (
    <Base>
      <div style={style} id="studcard">
          <Grid id="addstud-grid"  style={{ margin: "0px" }}>
            {teacherdata?.map((datas, id) => (
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
                  <Button size="small" onClick={()=>DeleteData(datas.id)} variant="contained"  style={{marginLeft:'1cm', backgroundColor:'red'}}>Delete</Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
      </div>
    </Base>
  )
}

export default TeachData