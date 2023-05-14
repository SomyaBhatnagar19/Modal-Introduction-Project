import React from "react";
import CardWrapper from "../UI/CardWrapper";
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <CardWrapper className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </CardWrapper>
  );
};

export default UsersList;
