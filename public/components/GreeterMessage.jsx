var React = require('react');
//use camelcase to name react components
var GreeterMessage = React.createClass({
  render:function(){
    var name = this.props.name;
    var message = this.props.message;
    return (
    <div>
      <h1> Hello {name} !</h1>
      <p> {message}</p>
    </div>
  );
  }
});

//like the return statement 
module.exports = GreeterMessage;
