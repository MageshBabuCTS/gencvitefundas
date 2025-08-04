import React from 'react';

// This is the top-level component that renders the entire application.
export default function NestedComp() {
  const appMessage = "I am the App, passing a message to my children.";

  return (
    // The main container with no styling
    <div>
      <h1>React Nested Components</h1>
      <hr />
      {/* Render the ParentComponent and pass the appMessage as a prop */}
      <ParentComponent messageFromApp={appMessage} />
    </div>
  );
}

// The ParentComponent receives a prop called `messageFromApp`.
// It then renders the ChildComponent and passes the same message to it.
function ParentComponent({ messageFromApp }) {
  const parentMessage = "I am the Parent, and I'm receiving a message.";

  return (
    <div>
      <h2>Parent Component</h2>
      <p>
        **Received from App:** {messageFromApp}
      </p>
      {/* Render the ChildComponent and pass both messages down to it */}
      <ChildComponent 
        messageFromParent={parentMessage}
        messageFromApp={messageFromApp} 
      />
    </div>
  );
}

// The ChildComponent is the deepest nested component in this example.
// It receives two props and displays them.
function ChildComponent({ messageFromParent, messageFromApp }) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>
        **Received from Parent:** {messageFromParent}
      </p>
      <p>
        **Received from App:** {messageFromApp}
      </p>
    </div>
  );
}
