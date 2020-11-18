import React from "react";
import "./style.css";
class Register extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        emailRegister :'',
        name :'',
        passwordRegister :'',
     
      }
      
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRegister = this.onRegister.bind(this);
    }

  onNameChange(e){
    this.setState({ name:e.target.value });
  }
  onEmailChange(e){
    this.setState({ emailRegister:e.target.value });
  }
  onPasswordChange(e){
    this.setState({ passwordRegister:e.target.value });
    document.getElementById('pass').addEventListener('keypress',function(event){
      if(event.key === 'Enter'){
        document.getElementById('register').click()
      }
    })
  }
  onRegister(){
    const {emailRegister, passwordRegister,name} = this.state;
    fetch(process.env.REACT_APP_DBREG,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:emailRegister,
        name,password:passwordRegister
      })
  }).then(response=>response.json())
  .then(this.props.register(name))
    
  }
 render(){
    
  const { isNot } = this.props;
  return (
    <div>
       <article className="br3 ba b--black-10 mv4 shadow-5 w-100 w-50-m w-25-l mw6 center">
        <main className="pa4 black-80">
        
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
              <div id='wrong' className="bg-red br3 shadow-2"></div>
              <div className="mt3">
              <div id="wrongEntered" className="bg-red br3 shadow-2"></div>
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Name 🤵🏻:
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                  required
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Username/ID 📧:
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="user"
                  id="user"
                  onChange={this.onEmailChange}
                  required
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
                  id="pass"
                  onChange={this.onPasswordChange}
                  required
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b br2 ph3 pv2 input-reset ba b--black bg-transparent dim pointer f6 dib"
                type="submit"
                value="Register!"
                onClick={this.onRegister}
                id='register'
              />
            </div>
            <div className="lh-copy mt3">
              <a href="#0" className="f6 link dim black db" onClick={isNot}>
                 Log In
              </a>
            </div>
      
        </main>
      </article>
    </div>
  );
 }
};
export default Register;
