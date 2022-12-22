import React, { Component } from 'react';
import { BsArrowDownCircleFill } from "react-icons/bs";
//import "slick-carousel/slick/slick.css"; 
//import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsChevronRight } from "react-icons/bs";
/*
This is second version
*/

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}


class Testimonials extends Component {
  render() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows : true,
      className : "slides",
      //centerMode: true
      centerPadding: "100px",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    if(this.props.data){
    var testimonials = this.props.data.Projects.map(function(Projects){
      return <div key={Projects.title}><h3 className = "heading_projects" ><span className="inner_heading">{Projects.title}</span></h3>
        
        <div className="aim"><b><u>Aim:</u></b> {Projects.Aim}</div>
         <ul className="projects">{Projects.description.map((e, index) => {
          return (
              <li  key={index}>{e.point}</li>
              )
              })} 
        </ul>
      </div>
    })
  }
    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

         <div className="twelve columns collapsed">
              <h3 className = "title_test"  ><span>Check out some of my work</span></h3>
          </div>
            </div>

            <div className = "Slider_Resume_TEST">
        {/*<Slider {...settings}>*/}
        <Box 
        sx={{ 
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex' 
          }}>
          <Card 
          /*className = "theme_thumb1"*/
          sx={{
            mt: 7,
            maxWidth: 345,
            backgroundColor: "#000000",
            color: '#fff',
            boxShadow: 3
          }}>
      <CardActionArea>
        <CardMedia 
          /*className= "thumbnail"*/
          component="img"
          height="140"
          image="../images/LinearRegression.png"
          sx={{
            width: '395px',
            height: '225px',
            objectFit: 'cover'
          }}
        />
        <CardContent 
        /*className='Second_thumb'*/
        sx={{
          height: '100px'
        }}>
        <a href= "https://medium.com/@aysharma1997/linear-regression-construct-775d0e257362" target="_blank">
          <Typography gutterBottom variant="h5" component="div">
           The Linear Regression Model
          </Typography>
          <Typography variant="body2" color="text.secondary" 
          /*className='Text_Thumb1'*/
          sx={{
            color: '#fff',
            font: '0.935rem'
          }}
          >
          Linear regression is one of the simplest statistical models, but don't let that fool you. 
          It is a powerful tool because of that simplicity. Learn more about it here!
          </Typography>
        </a>
        </CardContent>
      </CardActionArea>
    </Card>

      

    </Box>
        {/*</Slider>*/}


</div>

         </div>
   </section>
    );
  }
}

export default Testimonials;


