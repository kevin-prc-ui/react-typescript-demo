import { useEffect, useState } from "react";

interface Props{
    first:number;
    second:number;
}

export default function Adder ({first, second}: Props){
    const [value,setValue] = useState<number>(0);

    const size = UseWindowSizes();
    useEffect (() => {
        setValue(first + second);
        return () => {
            console.log("algo")
        };
    }, [first, second]);

    return <div>Valor: {value}, Window Size: {size.width}x{size.height}</div>
}

function UseWindowSizes() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}

