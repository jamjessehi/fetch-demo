import React, { useState } from "react";
import request, { paramStringify } from "utils/request";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState(false);

  function submit(e) {
    e.preventDefault();

    if (submitting) return;

    if (password !== confirmPassword) {
      alert("please confirm password!");
      return;
    }

    const url = "/sign";

    const data = {
      username,
      password
    };

    const options = {
      method: "POST",
      body: paramStringify(data)
    };

    setSubmitting(true);

    request(url, options)
      .then(res => {
        history.push("user");
      })
      .catch(() => {
        setSubmitting(false);
      });
  }

  return (
    <form>
      <div style={{ color: "red", fontWeight: "bold" }}>{error}</div>
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
      <input
        placeholder="confirm password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={submit}>{submitting ? "waiting" : "sign in"}</button>
    </form>
  );
};
