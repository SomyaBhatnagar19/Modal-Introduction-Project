import React from "react";
import AddUserData from "./Components/UserData/AddUserData";
import UsersList from "./Components/UserData/UsersList";
const App = () => {
  return (
    <div>
      <AddUserData />
      <UsersList users={[]}/>
    </div>
  );
};

export default App;
