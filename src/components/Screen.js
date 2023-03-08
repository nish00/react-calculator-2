import "./Screen.css";

const Screen = (props) => {
    const value = props.value;
    return <div className = "screen">{value}</div>
}

export default Screen;