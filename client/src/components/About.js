import React from 'react'
import clgimg from '../Images/banner2.webp'
import './About.scss';
const About = () => {
  return (
    <>
      {/* <div className='circle'></div>
      <div className='rectangle'></div> */}
      <img className='img_clg' src = {clgimg} alt='collegeImg'/>
      <div className='Project_Description'>
        <p className='AboutUs_text'>About Us</p>
        <p className='AboutUs_para'>
        Our project utilizes machine learning algorithms to predict 
        <br/>engineering college allocations based on the 
        <br/>Maharashtra Common Entrance Test (Mht-CET) percentile obtained 
        <br/>by students. We aim to assist students in making 
        <br/> informed decisions about their college choices by providing
        <br/> accurate predictions based on historical data.</p>
      </div>
      <div className='Methodology'>
        <p className='AboutUs_text2'>What We Did?</p>
        <p className='AboutUs_para2'>
          We have developed a predictive model that analyzes past 
          <br/>years' engineering college allocation data from the official 
          <br/>Mht-CET website. Using machine learning techniques, we correlate 
          <br/>Mht-CET  percentiles with colleges to predict the most likely college 
          <br/>allocations for students based on their percentiles.Our project 
          <br/>relies on data obtained from the official Mht-CET site, which
          <br/> includes historical percentile and college allocation information.
          <br/>We ensure the accuracy and reliability of our predictions by using
          <br/>authenticated data from trusted sources.
        </p>
      </div>
      <div className='Future_Plans'>
        <p className='AboutUs_text3'>Future Plans</p>
        <p className='AboutUs_para3'>
          We are committed to continuously improving our predictive model by
          <br/>incorporating feedback and updating it with the latest data. In the
          <br/>future, we plan to expand our project to include additional features
          <br/>such as personalized recommendations and college comparison tools.
        </p>

      </div>

      <div className='Acknowledgments'>
        <p className='AboutUs_text4'>Acknowledgments</p>
        <p className='AboutUs_para4'> 
          We would like to express our gratitude to the Mht-CET authorities
          <br/>for providing access to the necessary data for our project. 
          <br/>Additionally, we appreciate the support and collaboration of our
          <br/>team members in bringing this project to fruition.
        </p>

      </div>
      <div className='Team_Members'>
        <p className='AboutUs_text5'>Team Members</p>
        <p className='AboutUs_para5'>
          Tejas Dhurgude : tejas.dhurgude@spit.ac.in<br/>
          Chaitya Dobariya : chaitya.dobariya@spit.ac.in<br/>
          Prashil Kadam : prashil.kadam@spit.ac.in<br/>
          Sushant Divekar : sushant.divekar@spit.ac.in<br/> 
        </p>
      </div>
      
      <div>
        
      </div>
      
    </>
  )
}

export default About
