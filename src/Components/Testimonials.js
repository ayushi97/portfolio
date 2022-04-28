import React, { Component } from 'react';
import { BsArrowDownCircleFill } from "react-icons/bs";
//import "slick-carousel/slick/slick.css"; 
//import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsChevronRight } from "react-icons/bs";


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
               <h3 className = "title_test"><span>Project(s) Summary</span></h3>
            </div>

          

            </div>

            <div className = "Slider_Resume_TEST">
        <Slider {...settings}>
              {testimonials}
        </Slider>


</div>

         </div>
   </section>
    );
  }
}

export default Testimonials;
