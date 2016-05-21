//lets include react
var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function (e)
  {
    e.preventDefault();

    //updating UI elements
    var updates = {};

    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if(name.length > 0){
      this.refs.name.value = '';
      updates.name = name;
    }

    if(message.length > 0){
      this.refs.message.value = '';
      updates.message = message;
    }

    //pass the updates to greeter
    this.props.onNewData(updates);

  },
  render:function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="name" placeholder="Enter Name"/>
          </div>
          <div>
            <textarea ref="message" type="text" placeholder="Enter Message"/>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>

    );
  }

});

//lets return our component
module.exports = GreeterForm;
