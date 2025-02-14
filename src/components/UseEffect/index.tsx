import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Adder from "./adder";

export default function UseEffect(){
    const [first, setFirst] = useState(1);
    const [second, setSecond] = useState(1);

    function onClick(){
        setFirst(first+1)
        setSecond(second+1)
    }

    return(
        <Container className="p-3">
            <div>Primero: {first} Segundo: {second}</div>
            <Adder first={first} second={second}></Adder>
            <Button onClick={onClick}>Agregar</Button>
        </Container>
    )
}