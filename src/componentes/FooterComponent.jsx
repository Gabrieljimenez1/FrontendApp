import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <footer className="footer">
            <span className="text">All Rights Reserved 2023 @RHManager</span>
          </footer>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
