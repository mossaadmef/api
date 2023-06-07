import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import "./UserList.css";

export const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user list:", error);
      });
  }, []);

  return (
    <div className="user-list">
      {userList.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};