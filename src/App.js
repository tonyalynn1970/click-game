import React, { Component } from "react";
import Navbar from "./components/navbar/navbarc";
import Container from "./components/container/container";
import "./App.css";
import Imagecard from "./components/Imagecard/Imagecard";
import Header from "./components/main/Main";
import Images from "./imagepaths.json";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    images: Images,
    clicked: []
  };

  handleClick = id => {
    const clickedArray = this.state.clicked;
    if (clickedArray.indexOf(id) === -1) {
      clickedArray.push(id);
      this.setState({ score: this.state.score + 1, clicked: clickedArray });
      if (this.state.score + 1 > this.state.highScore) {
        this.setState({ highScore: this.state.score + 1 });
      }
      this.shuffle(this.state.images);
    } else {
      this.setState({ score: 0, clickedArray: [], clicked: [] });
    }
  };

  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  componentDidMount() {
    this.setState({ images: this.shuffle(Images) });
  }
  render() {
    return (
      <>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Header />
        <Container>
          {this.state.images.map(image => {
            return (
              <Imagecard
                id={image.id}
                image={image.src}
                key={image.src}
                onClick={() => this.handleClick(image.id)}
              />
            );
          })}
        </Container>
      </>
    );
  }
}
export default App;
