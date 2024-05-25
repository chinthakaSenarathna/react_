import React from 'react'

const Home = () => {
    const handelClickEvent = () => {
        console.log('hey');
    }

    const handelClickEventAgain = (name,e) => {
        console.log('hey '+name,e.target);
    }

    return (
        <div className="home">
            <h2 className="home-title">HomePage</h2>
            {/* only set the reference */}
            <button onClick={handelClickEvent} >Click Me</button>                                                                           

            {/* invoke the automatically, without using the onClick Event */}
            {/* <button onClick={handelClickEvent()} >Click Me</button> */}

            {/* How to pass the arguments.... */}
            <button onClick={(e) => {
                handelClickEventAgain('chinthaka',e)
            }}>Click Me</button>
        </div>
    )
}

export default Home