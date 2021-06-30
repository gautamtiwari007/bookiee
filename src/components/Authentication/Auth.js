import Modal from "../UI/Modal";
import classes from "./Auth.module.css";
import AuthIcon from "./AuthIcon";

const Auth = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <h3 className={classes.content}>
                        Lorem ipsum dolor sit amet, incididunt
                        consectetur adipiscing elit.</h3>
                    <p className={classes.para}>Incididunt ut labore et dolore magna aliqua.</p>
                    <div className={classes.icon}><AuthIcon /></div>
                </div>
                <div className={classes.right}>
                    <h1>bookie</h1>
                    <p>Welcome create a new account!</p>
                </div>
            </div>
        </Modal>
    );
}
export default Auth;