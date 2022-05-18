import React, { Component } from "react";

export class Detail extends Component {
  componentDidMount() {
    const { location } = this.props;
    console.log("D");
    console.log(this.props);
  }

  render() {
    return <div>Detail</div>;
  }
}

export default Detail;
