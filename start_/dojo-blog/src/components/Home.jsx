import { useState } from 'react'

const Home = () => {
    // var name = 'chinthaka';
    // we can use any data types -> useState(dataType)...
    // initail value inside the -> useState(initailValue)...
    // array destructuring...
    const [name, setName] = useState('chinthaka');

    const handelClickEvent = () => {
        // name = 'parami';
        // console.log(name);
        setName('parami');
        // after the setName() run, then trigger the React -> reRender the component...                                
    }

    return (
        <div className="home">
            <h2 className="home-title">HomePage</h2>
            <p className="para0">{ name }</p>
            <button onClick={handelClickEvent} >Click Me</button>
        </div>
    )
}

export default Home