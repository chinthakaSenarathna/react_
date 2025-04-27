import { useContext } from "react"
import { UserContext } from "../App";

const ComFour = () => {

    const users = useContext(UserContext);

    return (
        <div>
            <h2>ComFour Works - {users[0].id}</h2>
        </div>
    )
}

export default ComFour