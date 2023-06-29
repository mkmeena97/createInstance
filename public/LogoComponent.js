import React from "react";
import '../App.css'
import '../styles/mystyle.css'
import ITlogo from "./images/ITlogo.jpg"
class LogoComponent extends React.Component{
    render(){
        return(
                <img src={ITlogo} className="my-logo"></img>
            )
    }
}
export default LogoComponent;