import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isFormValid = isValidUsername(username) && isValidPassword(password);
    setIsValid(isFormValid);

    if (isFormValid) {
      // Send the form data to the server for authentication.
    } else {
      setError("Invalid username or password");
    }
  };

  const isValidUsername = (username) => {
    return username.length > 0;
  };

  const isValidPassword = (password) => {
    return password.length > 0;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        value={username}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={password}
      />
      {error && <p>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
