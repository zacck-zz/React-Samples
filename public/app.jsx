//import React js
var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');


var firstName = 'Isaac';
var myMessage = 'This is being passed in from the parent component';
ReactDOM.render(
  //passing data to the component
  <Greeter name={firstName} message={myMessage}/>,
  document.getElementById('app')
);
