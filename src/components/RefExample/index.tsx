import { useRef } from "react";
import { Button, Container } from "react-bootstrap";



export default function RefExample() {
    const ref = useRef<HTMLDivElement>(null);

function onClick() {
  console.log(ref);
  if (ref.current) {
    ref.current.innerHTML = 'Hola';
  }
}
  return (
    <Container className="p-3">
      <div ref={ref}>Texto plano de prueba</div>
      <div>
        <Button onClick={onClick}>Cambiar texto</Button>
      </div>
    </Container>
  );
}
