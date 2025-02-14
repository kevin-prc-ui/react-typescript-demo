import { Card, CardBody } from "react-bootstrap";
import CounterController from "./controller";
import Button from "../Button";

const controller = new CounterController();

export default function Counter() {
  controller.useController();
  const state = controller.state;

  return (
    <>
      <div className="container">
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <div>
              <span className="me-3">{state.counter}</span>
              <span className="me-3">{state.counter2}</span>
            </div>
            <div>
              <Button
                text="Add 1"
                variant="success"
                show={true}
                onClick={controller.onClick}
              ></Button>
              <Button
                text="Add 1"
                variant="success"
                show={true}
                onClick={controller.onClickSecond}
              ></Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
