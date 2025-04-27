import ComFour from "./ComFour"

const ComThree = ({ email }) => {
    return (
        <div>
            <h2>ComThree Works - {email}</h2>
            <ComFour/>
        </div>
    )
}

export default ComThree