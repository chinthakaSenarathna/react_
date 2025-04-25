import { useEffect } from "react";
import ComThree from "./ComThree";

const ComTwo = () => {
    const initial = () => {
        console.log();
    }

    useEffect(() => {
        initial();
    },[]);

    return (
        <div>
            <h2>Child 1</h2>
            {/* <p>Welcome {name}</p> */}
            <ComThree />
        </div>
    )
}

export default ComTwo;