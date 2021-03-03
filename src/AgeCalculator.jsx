import React from "react";
import "./scss/ageCalc.scss";
import { Row, Col } from "reactstrap";
import CakeIcon from "@material-ui/icons/Cake";

function AgeCalculator() {
  return (
    <>
      <div className="outerDiv">
        <div className="inner_Age">
          <Row>
            <center></center>
            <Col xs="6">
              <div className="upper_card p-3">
                <span className="age_Word ">
                  Age <br />
                  <span className="age_Number ">
                    10 <span className="age_years ">years</span>{" "}
                  </span>
                </span>{" "}
                <br />
                <br />
                <span className="age_MonthDays ">6 Months | 15 Days</span>
              </div>
            </Col>
            <Col xs="6">
              <center>
                <div
                  className="upepr_card_2"
                  style={{ marginTop: 50, marginLeft: 20 }}
                >
                  Next Birthday <br />
                  <span>
                    <CakeIcon className="ml-4 cakeColor age_Word " />
                  </span>
                  <br />
                  <span className="age_Number_ mr-5">
                    Monday <br />{" "}
                  </span>
                  <span className="age_Number_MD ">5 Months | 13 Days</span>
                </div>
              </center>
            </Col>
          </Row>
          <br /> <br />
          <div>
            <center>
              <span className="summary">Summary</span>
            </center>{" "}
            <br /> <br />
            <div className="summary_details">
              <Row>
                <Col xs="6" sm="4" md="4">
                  <center>
                    <span>Years</span> <br />
                    <span className="Summary_maxFont">10</span>
                  </center>
                </Col>
                <Col xs="6" sm="4" md="4">
                  <center>
                    <span>Months</span> <br />
                    <span className="Summary_maxFont">100</span>
                  </center>
                </Col>
                <Col sm="4" md="4">
                  <center>
                    <span>Weeks</span> <br />
                    <span className="Summary_maxFont">1000</span>
                  </center>
                </Col>
              </Row>{" "}
              <br />
              <Row>
                <Col xs="6" sm="4" md="4">
                  <center>
                    <span>Days</span> <br />
                    <span className="Summary_maxFont_lower">11</span>
                  </center>
                </Col>
                <Col xs="6" sm="4" md="4">
                  <center>
                    <span>Hours</span> <br />
                    <span className="Summary_maxFont_lower">120</span>
                  </center>
                </Col>
                <Col sm="4" md="4">
                  <center>
                    <span>Minutes</span> <br />
                    <span className="Summary_maxFont_lower">1000</span>
                  </center>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgeCalculator;
