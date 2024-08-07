// src/components/Navbar.tsx
import React from "react";
// import './Layout.sass';
import "../../../styles/Sass/Layout.sass";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png";
// import logo from '../assets/vector.svg';
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";

const Layout: React.FC = () => {
  return (
    <div>
      <header id="mainHeader">
        <div className="container">
          <div className="head">
            <div className="flxBx">
              <div className="logoBx">
                <img src={logo} alt="Logo" />
              </div>
              <div className="headSec">
                <div className="topMenu">
                  <ul className="soacialMda">
                    <li>
                      <a href="#!" className="icon">
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.20932 9.49998C2.20932 5.25266 5.57239 1.80952 9.72093 1.80952C13.8695 1.80952 17.2326 5.25266 17.2326 9.49998C17.2326 13.7473 13.8695 17.1904 9.72093 17.1904C8.24317 17.1904 6.86763 16.7545 5.70705 16.0017C5.49106 15.8616 5.2264 15.8242 4.98139 15.899L2.43703 16.6764L3.39502 14.3814C3.50825 14.1102 3.48521 13.7995 3.33328 13.5489C2.62085 12.3735 2.20932 10.9873 2.20932 9.49998ZM9.72093 0C4.59626 0 0.441879 4.25329 0.441879 9.49998C0.441879 11.163 0.860003 12.7284 1.59481 14.0896L0.0711143 17.7396C-0.0635842 18.0624 -0.00387827 18.4357 0.224307 18.6975C0.452493 18.9594 0.808005 19.0626 1.13646 18.9621L5.11269 17.7473C6.471 18.5444 8.04513 19 9.72093 19C14.8456 19 19 14.7467 19 9.49998C19 4.25329 14.8456 0 9.72093 0ZM11.7469 11.4745L10.5855 12.3121C10.0415 11.9949 9.44017 11.5521 8.83694 10.9345C8.20986 10.2925 7.74495 9.62963 7.40215 9.02163L8.14022 8.38025C8.45695 8.10502 8.54364 7.641 8.34851 7.26548L7.40809 5.45596C7.28146 5.21229 7.05312 5.04114 6.78799 4.99114C6.52286 4.94116 6.24995 5.0178 6.04683 5.19928L5.76801 5.44842C5.09751 6.04754 4.70095 7.03207 5.02962 8.02893C5.37036 9.06235 6.09753 10.6888 7.5872 12.214C9.1899 13.8549 10.8179 14.501 11.7699 14.752C12.537 14.9541 13.2629 14.6832 13.7744 14.2565L14.2971 13.8204C14.5207 13.6339 14.6413 13.3474 14.6203 13.0529C14.5992 12.7584 14.439 12.4929 14.1912 12.3417L12.7081 11.437C12.4085 11.2543 12.032 11.269 11.7469 11.4745Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="icon">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20 20H16V13.001C16 11.081 15.153 10.0098 13.634 10.0098C11.981 10.0098 11 11.126 11 13.001V20H7V7H11V8.46191C11 8.46191 12.255 6.25977 15.083 6.25977C17.912 6.25977 20 7.98611 20 11.5581V20ZM2.442 4.9209C1.093 4.9209 0 3.81896 0 2.45996C0 1.10196 1.093 0 2.442 0C3.79 0 4.883 1.10196 4.883 2.45996C4.884 3.81896 3.79 4.9209 2.442 4.9209ZM0 20H5V7H0V20Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="icon fb">
                        <svg
                          width="11"
                          height="21"
                          viewBox="0 0 11 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.16235 21V11.55H10.0314L10.5 7.35H7.16235V5.30435C7.16235 4.22285 7.18998 3.15 8.70124 3.15H10.2319V0.147144C10.2319 0.101994 8.91711 0 7.58696 0C4.80899 0 3.06957 1.74006 3.06957 4.9352V7.35H0V11.55H3.06957V21H7.16235Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="icon">
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.2083 4.14289C15.2083 3.78235 15.5006 3.49009 15.8611 3.49009C16.2216 3.49009 16.5139 3.78235 16.5139 4.14289C16.5139 4.50342 16.2216 4.79569 15.8611 4.79569C15.5006 4.79569 15.2083 4.50342 15.2083 4.14289Z"
                            fill="black"
                            stroke="white"
                            stroke-width="1.3056"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.556 1H6.7224C3.83815 1 1.5 3.23898 1.5 6.00091V13.5023C1.5 16.2642 3.83815 18.5032 6.7224 18.5032H14.556C17.4402 18.5032 19.7784 16.2642 19.7784 13.5023V6.00091C19.7784 3.23898 17.4402 1 14.556 1Z"
                            stroke="white"
                            stroke-width="1.9584"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.6414 13.2818C8.47816 13.2818 6.72461 11.5283 6.72461 9.36504C6.72461 7.20179 8.47816 5.44824 10.6414 5.44824C12.8047 5.44824 14.5582 7.20179 14.5582 9.36504C14.5582 10.4038 14.1455 11.4001 13.411 12.1346C12.6764 12.8691 11.6801 13.2818 10.6414 13.2818Z"
                            stroke="white"
                            stroke-width="1.9584"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15.8666 3.48957C15.5061 3.48957 15.2138 3.78183 15.2138 4.14237C15.2138 4.5029 15.5061 4.79517 15.8666 4.79517C16.2271 4.79517 16.5194 4.5029 16.5194 4.14237C16.5194 3.78183 16.2271 3.48957 15.8666 3.48957Z"
                            stroke="white"
                            stroke-width="1.3056"
                            stroke-linecap="round"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <div className="logWrap">
                    <div className="item">
                      <div className="logBx">
                        <div className="icon">
                          <svg
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 12.5V14.5M4 8.0288C4.47142 8 5.05259 8 5.8 8H12.2C12.9474 8 13.5286 8 14 8.0288M4 8.0288C3.41168 8.0647 2.99429 8.1455 2.63803 8.327C2.07354 8.6146 1.6146 9.0735 1.32698 9.638C1 10.2798 1 11.1198 1 12.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19H12.2C13.8802 19 14.7202 19 15.362 18.673C15.9265 18.3854 16.3854 17.9265 16.673 17.362C17 16.7202 17 15.8802 17 14.2V12.8C17 11.1198 17 10.2798 16.673 9.638C16.3854 9.0735 15.9265 8.6146 15.362 8.327C15.0057 8.1455 14.5883 8.0647 14 8.0288M4 8.0288V6C4 3.23858 6.23858 1 9 1C11.7614 1 14 3.23858 14 6V8.0288"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <a href="#!" className="logLnk">
                          Log in
                        </a>
                      </div>
                    </div>
                    <div className="item">
                      <div className="logBx">
                        <div className="icon">
                          <svg
                            width="17"
                            height="20"
                            viewBox="0 0 17 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4379 16.4435C15.9187 15.507 15.1245 14.855 14.3603 14.3939C13.5955 13.9331 12.8494 13.6588 12.4126 13.495C12.0799 13.3714 11.7286 13.2111 11.4872 13.0412C11.3664 12.9573 11.2749 12.8713 11.2241 12.8013C11.1722 12.7296 11.1619 12.6856 11.1615 12.6506C11.1615 12.3178 11.1615 11.9016 11.1615 11.3446C11.2096 11.223 11.2599 11.1239 11.3167 11.0318C11.4129 10.8738 11.541 10.7141 11.6695 10.4739C11.7762 10.2737 11.8714 10.0216 11.945 9.69162C12.0097 9.66013 12.0742 9.6237 12.1372 9.57969C12.3301 9.44647 12.4934 9.25234 12.6268 8.99848C12.7618 8.74343 12.8783 8.42366 13.0024 7.99055L13.0014 7.99345L13.0024 7.99025C13.0663 7.76555 13.0969 7.56818 13.097 7.38863C13.0992 7.10008 13.009 6.84999 12.8597 6.68118C12.8077 6.62144 12.7514 6.57625 12.6949 6.53719C12.7137 6.31507 12.7476 6.02039 12.7798 5.68056C12.8172 5.28621 12.8508 4.83528 12.8508 4.36833C12.8494 3.62942 12.7707 2.84917 12.4581 2.17586C12.3014 1.84007 12.0816 1.53115 11.7816 1.28718C11.5051 1.06187 11.1598 0.900369 10.7594 0.815278C10.4876 0.606871 10.2244 0.424429 9.8963 0.29761C9.54215 0.16036 9.13337 0.0968176 8.59339 0.0971222C8.42302 0.0971222 8.23867 0.103214 8.03697 0.115473C7.47327 0.118024 7.01172 0.186554 6.56605 0.185374C6.25519 0.185069 5.9484 0.155335 5.59296 0.0541767L5.40252 0L5.2508 0.127085C4.784 0.523493 4.53345 1.1143 4.38017 1.7707C4.22872 2.43003 4.17964 3.17122 4.17919 3.90605C4.17934 4.86502 4.26504 5.81229 4.33791 6.52321C4.28236 6.55934 4.22716 6.60103 4.17481 6.65669C4.01392 6.8252 3.91306 7.08577 3.91584 7.38802C3.91599 7.56727 3.9466 7.7646 4.01041 7.98903L4.01072 7.99021C4.17656 8.56731 4.32653 8.94537 4.52941 9.23216C4.63053 9.37471 4.74802 9.49128 4.87568 9.57961C4.93835 9.62332 5.00246 9.65949 5.06688 9.69093C5.18243 10.1847 5.37701 10.5426 5.54388 10.8017C5.63773 10.9483 5.72065 11.0649 5.77194 11.1521C5.82105 11.2337 5.83563 11.2803 5.83856 11.3016C5.83856 11.8814 5.83856 12.3087 5.83856 12.6506C5.83872 12.6777 5.82806 12.7255 5.77034 12.8022C5.68669 12.9155 5.50421 13.0601 5.28549 13.1825C5.06714 13.307 4.81488 13.4149 4.5941 13.4927C3.99964 13.7031 2.87175 14.1138 1.87315 14.9133C1.37388 15.3135 0.905168 15.8143 0.560501 16.4398C0.215681 17.0647 -0.000759441 17.8144 2.00252e-06 18.6856C2.00252e-06 18.8369 0.00643614 18.9922 0.0196853 19.1511L0.0482394 19.493H16.9518L16.9803 19.1511C16.9936 18.9925 17 18.8377 17 18.6865C17.0007 17.8155 16.7837 17.067 16.4379 16.4435ZM16.2512 18.7468H0.748806C0.748501 18.7267 0.746179 18.7054 0.746179 18.6856C0.74675 17.9362 0.927174 17.3221 1.21412 16.7997C1.64392 16.018 2.32743 15.4409 3.02156 15.0223C3.71512 14.6037 4.40941 14.3487 4.8421 14.1963C5.183 14.0756 5.57895 13.901 5.91619 13.667C6.08481 13.5492 6.24003 13.4166 6.36476 13.2531C6.48792 13.0916 6.58455 12.8867 6.58466 12.6506C6.58466 12.3023 6.58466 11.8671 6.58466 11.2702V11.2509L6.58261 11.2317C6.56235 11.0451 6.48819 10.8979 6.41342 10.7712C6.2987 10.5799 6.16975 10.4135 6.05184 10.1978C5.93439 9.98299 5.82493 9.7236 5.75994 9.35837L5.72218 9.14502L5.51815 9.07215C5.42487 9.03864 5.35813 9.00628 5.30186 8.96722C5.21909 8.90836 5.14245 8.82967 5.0451 8.64863C4.9492 8.46882 4.84385 8.19192 4.72826 7.78557V7.78531C4.67858 7.61215 4.66194 7.481 4.66194 7.38802C4.66487 7.22827 4.70039 7.1907 4.71966 7.16648C4.74033 7.14318 4.77722 7.1254 4.81815 7.11634L5.14257 7.04377L5.10773 6.71323C5.0312 5.98803 4.92529 4.94166 4.92529 3.90602C4.92498 3.20617 4.97467 2.51158 5.10716 1.93826C5.21707 1.45409 5.38946 1.06937 5.604 0.82453C5.94867 0.903187 6.26783 0.931779 6.56601 0.931512C7.09198 0.93037 7.55136 0.859784 8.05718 0.860965H8.06914L8.08182 0.860394C8.27142 0.848743 8.44106 0.843185 8.59335 0.843185C9.07893 0.843451 9.38164 0.898846 9.62736 0.99357C9.87277 1.08829 10.0829 1.23259 10.3671 1.45382L10.4403 1.51063L10.5313 1.52666C10.8646 1.58639 11.1115 1.70506 11.3108 1.86622C11.6076 2.10695 11.8076 2.46228 11.9337 2.903C12.0593 3.34198 12.105 3.85671 12.1046 4.36825C12.1048 4.79908 12.0733 5.2275 12.037 5.61024C12.0007 5.99352 11.9599 6.32783 11.9417 6.589H11.9418C11.9385 6.63537 11.9344 6.67527 11.9297 6.7202L11.8966 7.03818L12.2057 7.1195C12.2452 7.12997 12.2764 7.14691 12.2962 7.17021C12.3147 7.19443 12.3484 7.23638 12.3507 7.38856C12.3507 7.48122 12.3341 7.61212 12.285 7.78436L12.2847 7.78527C12.131 8.32799 11.9933 8.63752 11.8762 8.79871C11.8175 8.88003 11.7671 8.92755 11.7108 8.96718C11.6545 9.00624 11.5878 9.03861 11.4946 9.07211L11.2905 9.14498L11.2528 9.35834C11.2083 9.60984 11.1549 9.79118 11.0984 9.93342C11.0133 10.1462 10.9219 10.2779 10.8042 10.452C10.6876 10.6236 10.5471 10.8373 10.4373 11.1437L10.4152 11.2049V11.2701C10.4152 11.8671 10.4152 12.3022 10.4152 12.6506C10.4148 12.8785 10.5038 13.0828 10.623 13.2435C10.8039 13.4862 11.051 13.6617 11.3182 13.815C11.5859 13.9669 11.8772 14.0914 12.151 14.1939C12.7302 14.4093 13.7744 14.7993 14.6576 15.5053C15.0989 15.8577 15.4974 16.2853 15.785 16.805C16.0723 17.3255 16.2531 17.9376 16.2537 18.6864C16.2538 18.706 16.2515 18.727 16.2512 18.7468Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <a href="#!" className="logLnk">
                          Sign up
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="NavMenu">
                  <Accordion className="menuAcco" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <a href="/" className="menuLink">
                          Home
                        </a>
                      </Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <a href="/" className="menuLink">
                          About
                        </a>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            <span className="open">
                              <svg
                                width="11"
                                height="6"
                                viewBox="0 0 11 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 1L5.5 5L10 1"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="close">
                              <svg
                                width="11"
                                height="6"
                                viewBox="0 0 11 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 5L5.5 1L1 5"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Dropdown 1
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Dropdown 2
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Dropdown 3
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <a href="/" className="menuLink">
                          Gallery
                        </a>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            <span className="open">
                              <svg
                                width="11"
                                height="6"
                                viewBox="0 0 11 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 1L5.5 5L10 1"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="close">
                              <svg
                                width="11"
                                height="6"
                                viewBox="0 0 11 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 5L5.5 1L1 5"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Dropdown 1
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Dropdown 2
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Dropdown 3
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        <a href="/" className="menuLink">
                          Destinations
                        </a>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            <span className="open">
                              <svg
                                width="11"
                                height="6"
                                viewBox="0 0 11 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 1L5.5 5L10 1"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="close">
                              <svg
                                width="11"
                                height="6"
                                viewBox="0 0 11 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 5L5.5 1L1 5"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Dropdown 1
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Dropdown 2
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Dropdown 3
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        <a href="/" className="menuLink">
                          Services
                        </a>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            <span className="open">
                              <svg
                                width="11"
                                height="6"
                                viewBox="0 0 11 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 1L5.5 5L10 1"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="close">
                              <svg
                                width="11"
                                height="6"
                                viewBox="0 0 11 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 5L5.5 1L1 5"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Dropdown 1
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Dropdown 2
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Dropdown 3
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        <a href="/" className="menuLink">
                          Blogs
                        </a>
                      </Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        <a href="/" className="menuLink">
                          Contact
                        </a>
                      </Accordion.Header>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
