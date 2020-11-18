import React from "react";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
 
  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
    document.getElementById('password').addEventListener('keypress',function(event){
      if(event.key === 'Enter'){
        document.getElementById('button').click()
      }
    })
  };
  onSubmit = () => {
    const {email, password} = this.state;
    
    fetch(process.env.REACT_APP_DBSIG, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password
      }),
    }).then(response=>response.json())
    .then(data=>{
      if(data==="success"){
        this.props.onSubmit(email);
      }else{
        document.getElementById("wrong").textContent = "Wrong password";
        document.getElementById('email-address').value = ''
        document.getElementById('password').value = ''
      }
    })
    
  };

  render() {
    const { Register } = this.props;
    return (
      <div>
        <article className="br3 ba b--black-10 mv4 shadow-5 w-100 w-50-m w-25-l mw6 center">
          <main className="pa4 black-80">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div id="wrong" className="bg-red br3 shadow-2"></div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Username/ID 📧:
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password 🔐:
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b br2 ph3 pv2 input-reset ba b--black bg-transparent dim pointer f6 dib"
                type="submit"
                value="Sign in"
                id='button'
                onClick={this.onSubmit}
              />
            </div>
            <div className="lh-copy mt3">
              <a href="#0" className="f6 link dim black db" onClick={Register}>
                Register
              </a>
            </div>
          </main>
        </article>
      </div>
    );
  }
}
export default Signin;
