import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
function Title(props){
    return(
        <Jumbotron>
            <h1 className="display-3" style={{textAlign:"center"}}>{props.title}</h1>
        </Jumbotron>
    )
}

export default Title;
