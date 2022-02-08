import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";

export default function Users() {
  const [users, setUsers] = useState([]);
  const tkn = getCookie();

  const loadUsers = async () => {
    try {
      let res = await axios.get(
        "https://serene-fortress-45917.herokuapp.com/user",
        {
          headers: {
            authorization: `Bearer ${tkn.access_token}`,
          },
        }
      );

      setUsers(res.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(tkn);
    console.log('getCookie("access_token")', getCookie("access_token"));
    loadUsers();
  }, []);

  return (
    <div>
      <h1>Users!!!</h1>
      {users.map(u => {
          return <ul>{u.name}</ul>
      })}
    </div>
  );
}
