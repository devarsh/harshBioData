import React, { Component } from "react";
import "./Layout.scss";
import { Header } from "./Header.js";
import { Content } from "./Content.js";
import P1 from "../app_assets/1.jpg";
import P2 from "../app_assets/2.jpeg";
import P3 from "../app_assets/3.jpeg";
export class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={"layout"}>
          <div className={"leftNav"}>
            <Header />
          </div>
          <div className={"content"}>
            <Content />
          </div>
        </div>
        <div style={{ pageBreakBefore: "always" }}>
          <img className={"profileImg"} src={P2} />
        </div>
        <div style={{ pageBreakBefore: "always" }}>
          <img className={"profileImg"} src={P3} />
        </div>
        <div style={{ pageBreakBefore: "always" }}>
          <img className={"profileImg"} src={P1} />
        </div>
      </React.Fragment>
    );
  }
}
