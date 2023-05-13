import React from "react";
import CardWrapper from "../UI/CardWrapper";

const UsersList = (props) => {
  return (
    <CardWrapper>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </CardWrapper>
  );
};

export default UsersList;
