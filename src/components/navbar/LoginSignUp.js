import { Fragment } from "react";
import Button from "../UI/Button";

const LoginSignUp = (props) => {
    return (
        <Fragment>
            <Button onClick={props.onClick}>Login/SignUp</Button>
        </Fragment>
    )
}

export default LoginSignUp;