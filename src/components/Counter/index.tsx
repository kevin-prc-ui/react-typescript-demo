import { Card, CardBody } from "react-bootstrap";
import Button from "../Button";
import { useState } from "react";

interface MegaState{
  counter:number,
  counter2:number
}

function newMegaState():MegaState{
  return{
    counter:0,
    counter2:0
  }
}

export default function Counter() {
    // const [counter,setCounter]=useState<number>(1);
    // const [counter2,setCounter2]=useState<number>(1);
    const [megaState,setMegaState] = useState<MegaState>(newMegaState());
    const [sum, setSum] = useState<number | null>(null); // Nuevo estado para el resultado

    function onClick(){
      // setCounter(counter+1);
      setMegaState({...megaState, counter: megaState.counter+1});
    }function onClickSecond(){
      // setCounter2(counter2+1);
      setMegaState({...megaState, counter2: megaState.counter2+1});
    }
  function onClickEquals(){
    setSum(megaState.counter + megaState.counter2);


  }

  return (
    <>
    <div className="container">
    <Card style={{ width: '18rem' }}>
        <CardBody>
          <div>
          <span className="me-3">{megaState.counter}</span>
            <span className="me-3">+</span>
            <span className="me-3">{megaState.counter2}</span>
            <span className="me-3">=</span>
            <span className="me-3" id="prueba">
              {sum !== null ? sum : "0"} {/* Muestra el resultado */}
            </span>
          </div>
          <div>
            <Button text="Add 1" variant="success" show={true} onClick={onClick}></Button>
            <Button text="Add 1" variant="success" show={true} onClick={onClickSecond}></Button>
            <Button text="Equals" variant="success" show={true} onClick={onClickEquals}></Button>
          </div>
        </CardBody>
      </Card>
    </div>
    </>
  );
}
