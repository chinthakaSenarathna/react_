import { createContext, useState } from "react";
import ComTwo from "./ComTwo";

export const userApp = createContext(null);

const ComOne = () => {
    const [username,setUsername] = useState("Geust");
    const [email,setEmail] = useState("abc@gmail.com");

    const setName = (e) => {
        setUsername(e.target.value);
    }

    const setMail = (e) => {
        setEmail(e.target.value);
    }

    const valuesObject = {
        name_ : username,
        email_ : email
    }

    return (
        <userApp.Provider value={valuesObject}>
            <div>
                <h2>Parent</h2>
                <p>Welcome {username === "" ? "Geust" : username}</p>
                <p>Email {email === "" ? "abc@gmail.com" : email}</p>
                <input type="text" placeholder="Enter the username..." onChange={setName} />
                <input type="email" placeholder="Enter the email..." onChange={setMail} />
                <ComTwo />
            </div>
        </userApp.Provider>
    )
}

export default ComOne;