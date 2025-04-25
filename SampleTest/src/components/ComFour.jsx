import { useContext } from "react";
import { userApp } from "./ComOne";

const ComFour = () => {
    const valuesObject = useContext(userApp);

    return (
        <div>
            <h2>Child 3</h2>
            <p>Welcome {valuesObject.name_ === "" ? "Geust" : valuesObject.name_}</p>
            <p>Email {valuesObject.email_ === "" ? "abc@gmail.com" : valuesObject.email_}</p>
        </div>
    )
}

export default ComFour;