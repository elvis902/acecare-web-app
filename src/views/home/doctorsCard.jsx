import React from 'react';
import doctorImg from "../../assets/images/doctor1.jpg"
import { doctorsInfo } from './contants';
import './home.css'


const DoctorsCard = (props) => {
    const {doctorData} = props
    const {name, department, imagePath} = doctorData
    return(
        <div className="doc-container">
            
               <img className='doc-container-image' src={require(`../../assets/images/${imagePath}`)} alt="" />
              
               <h3>{name}</h3>
               <span>{department}</span>
           

            
        </div>
    )
} 

export default DoctorsCard;