import React, { Component } from 'react';
import logo from './logo.svg';
import './semantic-ui/dist/semantic.min.css';
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Image,
  Input,
  Radio,
  Segment,
  Dropdown,
} from 'semantic-ui-react'
import './App.css';
import './myBody.css';
import './mySidebar.css';
import Content from './Content';
import datafire from './database';



class App extends React.Component {
  render() {
    return (
      <div>
        <Sidebar></Sidebar>
        <Bodybar></Bodybar>
      </div>
    );
  }
}

class Bodybar extends React.Component {
  render() {
    return (
      <div>
      <Content></Content>
      </div>
  );
  }
}

class Sidebar extends React.Component {
  render() {
    return(
      <div className="sidebar" id="sidebar">
        <span className="star"></span>
        <ul>
        <li><a href="#" className="home"></a></li>
        <li><a href="#" className="boy"></a></li>
        <li><a href="#" className="imgpic"></a></li>
        </ul>
      </div>
    )
  }

}

export default App;
