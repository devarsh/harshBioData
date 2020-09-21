import React, { Component } from "react";
import "./Content.scss";

export class Content extends Component {
  render() {
    return (
      <div className="timeline">
        <ul>
          <li>
            <div className="header">About Me</div>
            <div className="col" style={{ textAlign: "justify" }}>
              <p>
                Born in Ahmedabad, India. Brought up and living in Chicago since
                2007. Believe in simple living and simple thinking with honesty,
                integrity and family values. Looking for someone who has good
                sense of humor, having similar quality, personality, and family
                values with carrer driven.
              </p>
            </div>
          </li>
          <li>
            <div className={"header"}>Hobbies</div>
            <div className={"col"} style={{ textAlign: "justify" }}>
              Likes to hangout, watching movies, and TV Shows, checking out new
              resturants, as well as cooking food at home and playing outdoor
              games
            </div>
          </li>
          <li>
            <div className={"header"}>Education</div>
            <div className={"col"}>
              <div className={"row"}>
                <div className={"text"}>Bachelor of Science in Finance</div>
              </div>
            </div>
          </li>
          <li>
            <div className={"header"}>Work</div>
            <div className={"col"}>
              <div className={"row"}>
                <div className={"text"}>
                  <a href="#" style={{ color: "black" }}>
                    Prairie (Financial Advisory/Valuation/Investment Banking
                    Firm)
                  </a>{" "}
                </div>
              </div>
              <div className={"row"}>
                <div className={"label"}>
                  <b>Role</b>
                </div>
                <div className={"text"}>Senior Consultant</div>
              </div>
            </div>
          </li>
          <li>
            <div className={"header"}>Family</div>
            <div className={"col"}>
              <div className={"row"}>
                <div className={"label"}>
                  <b>Father</b>
                  <br />
                  Occupation
                  <br />
                  Contact No
                </div>
                <div className={"text"}>
                  Trilok Jitendar Patel
                  <br />
                  Advocate, Gujarat Hight Court
                  <br />
                  <a style={{ color: "black" }} href="tel:+919825277795">
                    +91 98252-77795
                  </a>
                </div>
              </div>
              <div className={"row"}>
                <div className={"label"}>
                  <b>Mother</b>
                  <br />
                  Occupation
                  <br />
                  Contact No
                </div>
                <div className={"text"}>
                  Mona Patel
                  <br />
                  Homemaker
                  <br />
                  <a style={{ color: "black" }} href="tel:+917567625076">
                    +91 75676-25076
                  </a>
                </div>
              </div>
              <div className={"row"}>
                <div className={"label"}>
                  <b>Elder Sister</b>
                  <br />
                  Occupation
                </div>
                <div className={"text"}>
                  Nirali Mahendru
                  <br />
                  IT Engineer at AT&T Seattle-USA
                </div>
              </div>
              <div className={"row"}>
                <div className={"label"}>
                  <b>Brother In Law</b>
                  <br />
                  Occupation
                </div>
                <div className={"text"}>
                  Kshitij Mahendru
                  <br />
                  <br />
                  Software Engineer at Google Seattle-USA
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={"header"}>Paternal Family</div>
            <div className={"col"}>
              <div className={"row"}>
                <div className={"label"}>
                  <b>Grand Father</b>
                  <br />
                  Occupation
                </div>
                <div className={"text"}>
                  Jitendra Manubhai Patel
                  <br />
                  Advocate, Gujarat Hight Court
                </div>
              </div>
              <div className={"row"}>
                <div className={"label"}>
                  <b>Grand Uncle</b>
                  <br />
                  Occupation
                  <br />
                  Contact No
                </div>
                <div className={"text"}>
                  Harendra Manubhai Patel
                  <br />
                  Architect & Builder in Chicago
                  <br />
                  <a style={{ color: "black" }} href="tel:+8475076360">
                    (Cell:) 847-507-6360
                  </a>
                  <br />
                  <a style={{ color: "black" }} href="tel:+847635817">
                    (Tel:) 847-635-817
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
