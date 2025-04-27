import ComTwo from "./ComTwo"

const ComOne = (props) => {
    return (
        <div>
            <h2>ComOne Works - {props.name}</h2>
            <ComTwo username={props.username} email={props.email}/>
        </div>
    )
}

export default ComOne