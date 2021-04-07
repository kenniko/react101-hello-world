import React from "react";

const HelloWorldBtn = (props) => {
  const { appTitle } = props;
  const greeting = `Hello world! Greetings from ${appTitle}`;
  return <button onClick={() => console.log(greeting)}>Hello World</button>;
};

export default HelloWorldBtn;
