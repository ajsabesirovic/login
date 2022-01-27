// const emailReducer = (state, action) => {
//   if (action.type === "USER-INPUT") {
//     return { value: action.val, isValid: action.val.includes("@") };
//   }
//   if (action.type === "TYPE-BLUR") {
//     return { value: state.value, isValid: state.value.includes("@") };
//   }
//   return { value: "", isValid: false };
// };



// const [emailState, dispatchEmail] = useReducer(emailReducer, {
//   value: "",
//   isValid: null,
// });
// const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
//   value: "",
//   isValid: null,
// });

// const { isValid: emailIsValid } = emailState;
// const emailChangeHandler = (event) => {
//   dispatchEmail({ type: "USER-INPUTt", val: event.target.value });

// const validateEmailHandler = () => {
//     dispatchEmail({ type: "TYPE-BLUR" });
//   };
// const submitHandler = (event) => {
//     event.preventDefault();
//     props.onLogin(emailState.value, passwordState.value);
//   };
// useEffect(() => {
//     const identifier = setTimeout(() => {
//       console.log("!!!!!!!!!!!!!!!!!");
//       setFormIsValid(emailIsValid && passwordIsValid);
//     }, 6000);

//     return () => {
//       console.log("CLEAN UP!!!!!!!!!!");
//       clearTimeout(identifier);
//     };
//   }, [emailIsValid, passwordIsValid]);
// };

// <div
//   className={`${classes.control} ${
//     emailState.isValid === false ? classes.invalid : ""
//   }`}
// >
//   <label htmlFor="email">E-Mail</label>
//   <input
//     type="email"
//     id="email"
//     value={emailState.value}
//     onChange={emailChangeHandler}
//     onBlur={validateEmailHandler}
//   />
// </div>;
