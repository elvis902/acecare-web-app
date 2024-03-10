import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './home.css' 



const DepartmentCard = (props) =>{
    const {departmentData, iconRes} = props
    const {name}= departmentData
    return(
        <div className="dept-container">
            {/* <img src={require(`../../assets/images/${iconPath}`)} alt="" /> */}

            <FontAwesomeIcon className="fontIcon" icon={iconRes} />
            <p>{name}</p>
        </div>
    )
}

export default DepartmentCard;