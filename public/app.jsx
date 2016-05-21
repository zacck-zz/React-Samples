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
          <input type="text" ref="name" placeholder="Enter Name"/>
          <br/>
          <textarea ref="message" type="text" placeholder="Enter Message"/>
          <br/>
          <button>Submit</button>
        </form>
      </div>

    );
  }

});


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

var firstName = 'Isaac';
var myMessage = 'This is being passed in from the parent component';
ReactDOM.render(
  //passing data to the component
  <Greeter name={firstName} message={myMessage}/>,
  document.getElementById('app')
);
