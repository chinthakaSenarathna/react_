import { useState, useRef, useEffect } from 'react'

const TextInputWithFocusButton = () => {
    const [text, setText] = useState('hi');
    const inputEl = useRef(null);

    const inputText = () => {
        // focus the DOM node...
        inputEl.current.focus();
        setText('hello');
    }

    useEffect(() => {
        console.log('useEffect ran...')
    },[]);

    return (
        <div>
            <p>{ text }</p>
            <input ref={inputEl} type='text' />
            <button onClick={inputText} >Click</button>
        </div>
    )
}

export default TextInputWithFocusButton