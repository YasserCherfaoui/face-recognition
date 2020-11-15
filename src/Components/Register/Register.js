import React from "react";
import "./style.css";
const Register = ({ isNot, register }) => {
  return (
    <div>
       <article className="br3 ba b--black-10 mv4 shadow-5 w-100 w-50-m w-25-l mw6 center">
        <main className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
              <div id='wrong' className="bg-red br3 shadow-2"></div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                 
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  User
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="user"
                  id="user"
                 
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="pass"
                  
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b br2 ph3 pv2 input-reset ba b--black bg-transparent dim pointer f6 dib"
                type="submit"
                value="Sign in"
                onClick={register}
              />
            </div>
            <div className="lh-copy mt3">
              <a href="#0" className="f6 link dim black db" onClick={isNot}>
                 Log In
              </a>
            </div>
          </form>
        </main>
      </article>
    </div>
  );
};
export default Register;
