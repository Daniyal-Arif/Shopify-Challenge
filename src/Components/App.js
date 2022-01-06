import React from "react";
import ImageContainer from "./ImageContainer";
import Spinner from "./Spinner";
import axios from "axios";

class App extends React.Component {
  state = { title: "", url: "", date: "" };

  componentDidMount = async () => {
    const response = await axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=jddzFnjDdH07rh93vBszexngeDYpVBzqaNQ57Dnn"
    );
    const { date, url, title } = response.data;
    this.setState({ title, url, date });
  };

  renderContent() {
    if (this.state.title) {
      return (
        <ImageContainer
          title={this.state.title}
          url={this.state.url}
          date={this.state.date}
        />
      );
    }

    return <Spinner />;
  }

  render() {
    return this.renderContent();
  }
}

export default App;
