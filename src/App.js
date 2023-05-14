import React,{useState} from "react";
import AddUserData from "./Components/UserData/AddUserData";
import UsersList from "./Components/UserData/UsersList";
const App = () => {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (username, userage) => {
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {name: username, age: userage, id: Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUserData onAddUser={AddUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
};

export default App;
