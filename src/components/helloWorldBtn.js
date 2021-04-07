import React from "react";

class HelloWorldBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { greetings: 0 };
  }

  newGreeting = (greeting) => {
    const { greetings } = this.state;
    const newGreetings = greetings + 1;
    this.setState({
      greetings: newGreetings,
    });
    console.log(greeting);
  };

  render() {
    const { appTitle } = this.props;
    const greeting = `Hello world! Greetings from ${appTitle}`;
    return (
      <button onClick={() => this.newGreeting(greeting)}>
        Hello World, pressed {this.state.greetings} times
      </button>
    );
  }
}

export default HelloWorldBtn;
