import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../../firebase/Auth.js";
import { projectAuth } from "../../firebase/config.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await
          projectAuth
          .signInWithEmailAndPassword(email.value, password.value);
        history.push(history.location.pathname);
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/admin/publications" />;
  }

  return (
    <div>
        <form className="form-signin mt-5" onSubmit={handleLogin}>
            {/* <img className="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> */}
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input name="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted"> @=[] authorised personnel only :D &gt;</p>
        </form>
    </div>
  );
};

export default withRouter(Login);