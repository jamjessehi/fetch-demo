import React, { useEffect, useState } from "react";
import request, { paramStringify, urlWithParam } from "utils/request";

export default () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const url = "/user";
    request(url)
      .then(res => {
        setUser(res);
      })
      .catch(e => {
        console.log(e.response);
      });
  }, []);

  return <div>I am {user.username}</div>;
};
