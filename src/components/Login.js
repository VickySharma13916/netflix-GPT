import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex flex-col">
        <form method="POST">
          <input type="email" />
          <input type="password" />
          <input type="button" value="submit" />
        </form>
      </div>
    </>
  );
};

export default Login;
