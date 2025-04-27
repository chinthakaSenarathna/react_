import ComThree from "./ComThree"

const ComTwo = ({ username, email }) => {
    return (
        <div>
            <h2>ComTwo Works - {username}</h2>
            <ComThree email={email}/>
        </div>
    )
}

export default ComTwo