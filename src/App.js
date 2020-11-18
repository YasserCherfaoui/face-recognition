import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkFrom from "./Components/ImageLinkFrom/ImageLinkFrom";
import "./App.css";
import Rank from "./Components/Rank/Rank";
import Particles from "react-particles-js";
import React from "react";
import Clarifai from "clarifai";
import FaceRecog from "./Components/FaceRecog/FaceRecog";
import Signin from "./Components/Signin/Signin";
import Register from "./Components/Register/Register";
require('dotenv').config()
const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY,
});
const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      box: {},
      isSignedIn: false,
      isStranger: false,
      name: "",
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.signout = this.signout.bind(this);
    this.register = this.register.bind(this);
    this.isNot = this.isNot.bind(this);
    this.addToDB = this.addToDB.bind(this);
  }
  componentDidMount() {
 
  }
  calculateFaceLocation(data) {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("image");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: face.left_col * width,
      rightCol: width - face.right_col * width,
      topRow: face.top_row * height,
      bottomRow: height - face.bottom_row * height,
    };
  }
  displayFace = (box) => {
    this.setState({ box });
    console.log(box);
  };
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onSubmit = () => {
    this.setState({ imageURL: this.state.input });
    console.log("click");
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) =>
        this.displayFace(this.calculateFaceLocation(response))
      )
      .catch((err) => console.log(err));
  };
  onLogin(email) {
    this.setState({ isSignedIn: true, name: email });
  }
  signout() {
    this.setState({ isSignedIn: false });
  }
  register() {
    this.setState({ isStranger: true });
  }
  addToDB(name) {
  this.setState({ isSignedIn: true,name,isStranger: false});
  }
  isNot() {
    this.setState({ isStranger: false });
  }
  getRank(){
    fetch('http://localhost:3001/rank')
  }
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation signout={this.state.isSignedIn} click={this.signout} />
        <Logo />
        {this.state.isSignedIn === false ? (
          <div>
            {this.state.isStranger ? (
              <Register isNot={this.isNot} register={this.addToDB} />
            ) : (
              <Signin onSubmit={this.onLogin} Register={this.register} />
            )}
          </div>
        ) : (
          <div>
            {" "}
            <Rank user={this.state.name} rank={this.getRank} />
            <ImageLinkFrom
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            <FaceRecog box={this.state.box} imageURL={this.state.imageURL} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
