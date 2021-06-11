import React from "react";
import { Card, CardDeck } from 'react-bootstrap';
import animals from '../service/dados';

function AnimalsList() {
    return(
        <div>
            <CardDeck>
                {animals.map(animal=>{
                    return(
                        <Card className="mt-2" style={{ width: '18rem'}}>
                            <Card.Img variant="top" src="holder.js/100px180" src={animal.image} />
                            <Card.Body>
                                <Card.Title>{animal.id}: {animal.name}</Card.Title>
                                <Card.Text>{animal.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </CardDeck>
        </div>
    )
}

export default AnimalsList;

