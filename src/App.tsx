import { Container } from "react-bootstrap";
import Counter from "./components/Counter";
import CounterController from "./components/CounterController/";
import First from "./components/first";
import MyParent from "./components/MyParent";
import NavbarAdmin from "./components/navbar/NavbarAdmin";
import RefExample from "./components/RefExample";
import UseEffect from "./components/UseEffect";

export default function App() {
  return (
    <>
      <Container>
      <NavbarAdmin></NavbarAdmin>
      <MyParent>
        <First />
      </MyParent>
      <Counter />
      <CounterController />
      <CounterController />
      <CounterController />
      <CounterController />
      <CounterController />
      <CounterController />
      <CounterController />
      <CounterController />
      <CounterController />
      <CounterController />
      <CounterController />
      <CounterController />
      <CounterController />
      <CounterController />
      <CounterController />
      <RefExample />
      <UseEffect/>
      </Container>
      
    </>
  );
}
