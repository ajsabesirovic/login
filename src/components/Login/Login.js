import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useRef,
} from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.includes('@')}
  }
  if(action.type === 'VALIDATE_INPUT'){
    return {value: state.value, isValid: state.value.includes('@')}
  }
  return {
    value: '',
    isValid: false
  }
}
const passwordReducer = (state, action) => {
  if (action.type === "USER-INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 2 };
  }
  if (action.type === "TYPE-BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 2 };
  }
  return { value: "", isValid: false };
};

const Login = () => {
  const ctx = useContext(AuthContext);

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();

  const [emailState, dispatchEmail] = useReducer(emailReducer,{
    value: '',
    isValid: null
  })
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  
  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  const [formIsValid, setFormIsValid] = useState(false);
  
  const emailRef = useRef();
  const passwordRef = useRef();

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER-INPUT", val: event.target.value });

  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'VALIDATE_INPUT'})
  };
  const validatePasswordHandler = () => {
    dispatchEmail({type: 'VALIDATE_INPUT'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value,passwordState.value);
      
    } else if (!emailIsValid) {
      emailRef.current.activate();
    } else {
      passwordRef.current.activate();
    }
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          ref={emailRef}
          type="email"
          label="E-mail"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>

        <Input
          id="password"
          ref={passwordRef}
          type="password"
          label="Password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>

        <label>

        </label>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Log in
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
