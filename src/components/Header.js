import React, { Component } from "react";
import "./Header.scss";

export class Header extends Component {
  render() {
    return (
      <div className={"LeftNav"}>
        {/*  <div className={css["imageWrapper"]}>
          <img className={css["Img"]} alt="Profile Pic" src={headerImage} />
    </div>  */}
        <div className={"jumboBold"} style={{ paddingTop: "15px" }}>
          Harsh Patel
        </div>
        <div className={"contactDetailsRow"}>
          <div>
            <b>Date of Birth:</b>{" "}
          </div>
          <div className={"rightalign"}>
            11<sup>th</sup> April, 1992
          </div>
        </div>
        <div className={"contactDetailsRow"}>
          <div>
            <b>Time of Birth:</b>{" "}
          </div>
          <div className={"rightalign"}>10:15 AM</div>
        </div>
        <div className={"contactDetailsRow"}>
          <div>
            <b>Place of Birth:</b>{" "}
          </div>
          <div className={"rightalign"}>Ahmedabad, India</div>
        </div>
        <div className={"contactDetailsRow"}>
          <div>
            <b>Zodiac:</b>{" "}
          </div>
          <div className={"rightalign"}>Cancer (Indian)/Aries</div>
        </div>
        <div className={"contactDetailsRow"}>
          <div>
            <b>Cast:</b>{" "}
          </div>
          <div className={"rightalign"}>Leuva Patel(Kanam)</div>
        </div>
        <div className={"contactDetailsRow"}>
          <div>
            <b>Height:</b>{" "}
          </div>
          <div className={"rightalign"}>5 ft. 11 in</div>
        </div>
        <div className={"contactDetailsRow"}>
          <div>
            <b>Address India:</b>{" "}
          </div>
          <div className={"rightalign"}>
            6/A, Harihar Society
            <br />
            B/H NavGujarat College
            <br />
            and Hotel Hayaat
            <br />
            Ashram Road
            <br />
            Ahmedabad - 380014
          </div>
        </div>
        <div className={"contactDetailsRow"}>
          <div>
            <b>
              Address <br />
              USA:
            </b>{" "}
          </div>
          <div className={"rightalign"}>
            1921, Franklin Drive
            <br />
            Glenview
            <br />
            IL 60026
            <br />
            (Currently lives in
            <br />
            Downtown)
          </div>
        </div>
        <div className={"contactDetailsRow"}>
          <div>
            <b>Phone:</b>{" "}
          </div>
          <div className={"rightalign"}>
            <a style={{ color: "black" }} href="tel:858-943-1541">
              858-943-1541
            </a>
          </div>
        </div>
        <div className={"contactDetailsRow"}>
          <div>
            <b>Email: </b>
          </div>
          <div className={"rightalign"}>
            <a
              style={{ color: "black" }}
              href="mailto:patelhv11@yahoo.com?Subject=Lets Meetup :)"
              target="_top"
            >
              patelhv11@yahoo.com
            </a>
          </div>
        </div>
        <br />
        {/*<div className={`${css["contactDetailsCol"]} ${css["hidden-print"]}`}>
          <div>
            <a style={{ color: "black" }} href={kundli} target="_top">
              <b>Kundli</b>
            </a>
            <a style={{ color: "black" }} href={pic1} target="_blank">
              <i
                style={{ padding: "0px 20px 0px 20px" }}
                className="fa fa-picture-o"
                aria-hidden="true"
              ></i>
            </a>
            <a style={{ color: "black" }} href={pic2} target="_blank">
              <i className="fa fa-picture-o" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <br />*/}
      </div>
    );
  }
}
