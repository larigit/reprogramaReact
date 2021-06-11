import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
function Title(props){
    return(
        <Jumbotron style={{backgroundColor: "#5e6459"}} fluid>
            <h1 className="display-3" style={{textAlign:"center", color:"white"}}>{props.title}</h1>
        </Jumbotron>
    )
}

export default Title;
