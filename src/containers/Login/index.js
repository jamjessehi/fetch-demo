import React, { useState } from "react";
import request, { paramStringify } from "utils/request";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [submitting, setSubmitting] = useState(false);

  function submit(e) {
    e.preventDefault();

    if (submitting) return;

    const url = "/login";

    const data = {
      username: username.trim(),
      password: password.trim()
    };

    const options = {
      method: "POST",
      body: paramStringify(data)
    };

    setSubmitting(true);

    request(url, options)
      .then(() => {
        history.push("/user");
      })
      .catch(e => {
        console.log(e.response);
        setSubmitting(false);
      });
  }

  return (
    <form>
      <input
        placeholder="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <br />
      <br />
      <input
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br />
      <br />

      <button onClick={submit}>{submitting ? "waiting" : "login"}</button>
    </form>
  );
};
