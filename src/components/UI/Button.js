
const LoginSignUpButton = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    );
}
export default LoginSignUpButton;