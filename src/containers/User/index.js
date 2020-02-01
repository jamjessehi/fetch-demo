import React, { useEffect, useState } from "react";
import request, { paramStringify, urlWithParam } from "utils/request";

export default () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const url = "/user";
    request(url).then(res => {
      setUser(res);
    });
  }, []);

  return <div>I am {user.username}</div>;
};
