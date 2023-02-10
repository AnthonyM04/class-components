import { useState, useEffect } from "react";

export default function CountHooks() {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('Welcome');
    useEffect(() => {
        document.title =  `${count} clicks`
    }, [count])
    return(
        <section>
        <h2>{title}</h2>
        <h3> You clicked {count} times.</h3>
        <button onClick={() => setCount(count + 1)}>Click me</button>
    </section>
    )
}