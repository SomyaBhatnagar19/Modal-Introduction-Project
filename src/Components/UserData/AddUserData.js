import React, { useState } from "react";

import CardWrapper from "../UI/CardWrapper";

import classes from "./AddUserData.module.css";

import Button from "../UI/Button";

const AddUserData = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  //function to add user data on form submission
  const addUserDataHandler = (e) => {
    e.preventDefault();

    //the below thing will work only when the data is valid like age and no blank string
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      return;
    }
    if(+enteredAge < 1){
      return;
    }
    console.log(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const setUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const setUserAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <CardWrapper className={classes.input}>
      <form onSubmit={addUserDataHandler}>
        <label htmlFor="username">UserName </label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={setUsernameHandler}
        />
        <label htmlFor="age">Age </label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={setUserAgeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </CardWrapper>
  );
};
export default AddUserData;
