var React  = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');


var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'This is being passed in from the parent component'
    };
  },
  //using states
  getInitialState: function (){
    return{
      name: this.props.name,
      message: this.props.message

    };
  },//setting state
  handleNewData: function(updates) {
      //setting the state to change the var in compopnent
      this.setState(updates);
    },
  render:function(){
    //access the passed variable
    //create a form and handle its submission
    var name = this.state.name;
    var message = this.state.message;
      return(
        <div>
          <GreeterMessage name={name} message={message}/>
          <GreeterForm onNewData={this.handleNewData} onNewMessage={this.handleNewMessage}/>
        </div>
      );
  }
});

module.exports = Greeter;
