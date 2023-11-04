import React from "react";
import './Portfolio.css'

const PortfolioCards = (props) => {
    return (
        <>
        <div className="card-main">
            <img src= {props.Image}  alt="" />
            <h1 className="project-name">{props.ProjectName}</h1>
            <div className="card-btn">
            <a href={props.url} target="_blank" without rel="noreferrer" >VIEW WEBSITE</a>
            </div>
        </div>
        </>
    )
}

export default PortfolioCards