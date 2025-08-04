import React from 'react';

class SimpleClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello from a Class Component!',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>This component is a class that extends React.Component and has a render method.</p>
      </div>
    );
  }
}

export default SimpleClassComponent;
