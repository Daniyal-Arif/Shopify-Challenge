import React from "react";

class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likeCount: 7, likeState: "outline" };

    this.likeRef = React.createRef();
  }

  onButtonClick = () => {
    if (this.likeRef.current.classList.contains("outline")) {
      this.setState({ likeCount: this.state.likeCount + 1, likeState: "red" });
    } else {
      this.setState({
        likeCount: this.state.likeCount - 1,
        likeState: "outline",
      });
    }
  };

  render() {
    return (
      <div className="ui card container" style={{ marginTop: "100px" }}>
        <div className="content">
          <div className="right floated meta">{this.props.date}</div>

          {this.props.title}
        </div>
        <div className="image">
          <img src={this.props.url} />
        </div>
        <div className="content">
          <span className="right floated">
            <i
              className={`heart ${this.state.likeState} like icon`}
              ref={this.likeRef}
              onClick={this.onButtonClick}
            ></i>
            {this.state.likeCount} likes
          </span>
          <i className="comment icon"></i>3 comments
        </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
            <i className="heart outline icon"></i>
            <input type="text" placeholder="Add Comment..." />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageContainer;
