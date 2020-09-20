import React, { Component } from "react";
import css from "./Layout.scss";
import { Header } from "./Header.js";
import { Content } from "./Content.js";
export class Layout extends Component {
  render() {
    return (
      <div className={"layout"}>
        <div className={"leftNav"}>
          <Header />
        </div>
        <div className={"content"}>
          <Content />
        </div>
      </div>
    );
  }
}
