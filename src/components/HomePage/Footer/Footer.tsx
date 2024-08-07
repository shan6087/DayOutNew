import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../../../styles/Sass/Footer.sass";
import logo from "../assets/logo.png";

const FooterSection: React.FC = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="foot">
          <div className="footer-content">
            <div className="dFlex">
              <div className="lft">
                <div className="linkWrap">
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>QUICK LINKS</Accordion.Header>
                      <Accordion.Body>
                        <div className="footLink">
                          <ul className="menuLnk">
                            <li>
                              <a href="#!" className="lnk">
                                about{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#!" className="lnk">
                                Personal Account
                              </a>
                            </li>
                            <li>
                              <a href="#!" className="lnk">
                                Business
                              </a>
                            </li>
                            <li>
                              <a href="#!" className="lnk">
                                Services
                              </a>
                            </li>
                            <li>
                              <a href="#!" className="lnk">
                                Company
                              </a>
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>INFORMATION</Accordion.Header>
                      <Accordion.Body>
                        <div className="footLink">
                          <ul className="menuLnk">
                            <li>
                              <a href="#!" className="lnk">
                                Terms & Conditions{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#!" className="lnk">
                                Legal
                              </a>
                            </li>
                            <li>
                              <a href="#!" className="lnk">
                                Agreements
                              </a>
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Social Media</Accordion.Header>
                      <Accordion.Body>
                        <div className="footLink">
                          <ul className="menuLnk">
                            <li>
                              <a href="#!" className="lnk">
                                about{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#!" className="lnk">
                                aaa
                              </a>
                            </li>
                            <li>
                              <a href="#!" className="lnk">
                                aaa
                              </a>
                            </li>
                            <li>
                              <a href="#!" className="lnk">
                                aaa
                              </a>
                            </li>
                            <li>
                              <a href="#!" className="lnk">
                                aaa
                              </a>
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Contact US</Accordion.Header>
                      <Accordion.Body>
                        <div className="footLink">
                          <div className="contLnk">
                            '
                            <div className="txtWrap">
                              <div className="txt">Phone :</div>
                              <a href="tel:971 3 640 4998" className="lnk">
                                +971 3 640 4998{" "}
                              </a>
                            </div>
                          </div>
                          <a href="#!" className="lnk">
                            about{" "}
                          </a>
                          <a href="#!" className="lnk">
                            aaa
                          </a>
                          <a href="#!" className="lnk">
                            aaa
                          </a>
                          <a href="#!" className="lnk">
                            aaa
                          </a>
                          <a href="#!" className="lnk">
                            aaa
                          </a>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="ryt">
                <div className="logoBX">
                  <div className="logo">
                    <img src={logo} alt="Logo" />
                  </div>
                  <div className="txt">
                    Office No: 3201, Dummy text Burj Khalifa Blvd, Business Bay
                    P.O Box : 11111, Dubai - UAE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="end">
          <p>
            Copyright © 2023 Dayout Holidays.
            <br />
            Website developed by: Nimisha Joshy
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
