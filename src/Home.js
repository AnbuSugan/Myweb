import React from "react";
import ReactDOM from "react-dom";
import App from "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <body>
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <img
                src="images/photo.jpeg"
                class="rounded mx-auto d-block"
                alt="my-photo"
                width="130px"
                height="150px"
              />
            </div>
            <div class="col-sm-8">
              <div class="Carrier">
                <h2>Carrier Objective</h2>
                <p>
                  To work in professional Environment where i can find myself in
                  decisive opportunities for creating value added career for
                  myself and extend quality service to my organizations
                </p>
              </div>
            </div>
            <div class="head1">
              <div class="col-sm-6">
                <h2 class="Tech">Technical Skills</h2>
                <ul>
                  <li>
                    Front end languages - HTML,CSS,Javascript,ReactJs,AngularJs
                  </li>
                  <li>Back end languages - NodeJs</li>
                  <li>Database - Mysql</li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6">
              <h2>Internship and Certification</h2>
              <ul>
                <li>i done web development intern in SmartanSys</li>
                <li>i done android app development intern in SmartanSys</li>
              </ul>
            </div>
            <div class="col-sm-6">
              <thead>
                <tr>
                  <th>Project Domain</th>
                  <th>Programming Language</th>
                  <th>Project Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Full Stack Web Development</td>
                  <td>Html,Css,Javascript,Bootstrap,Java,Jsp,Servlet</td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default Home;
