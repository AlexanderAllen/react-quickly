let h1 = React.createElement('h1', null, 'Hello world!')

// Defines a React component class called "HelloWorld".
// By convention, the names of variables containing React components are
// capitalized, because JSX requires it.
// In JSX, React uses uppercase and lowercase to differentiate a custom component
// like <HelloWorld/> from a regular HTML element such as <h1/>
class HelloWorld extends React.Component {

  // Returns an expression.
  // The React class expects to invoke a render() method, always.
  // "render()" must always be implemented.
  //
  // This method must return a single React element, createElement(), which is
  // created from another custom component class or an HTML tag. Both can have
  // nested elements.
  render() {

    // Our createElement implementation returns a <div> with two h1 elements
    // inside.
    // The h1's point to the same h1 React object in line 1.
    return React.createElement('div', null, h1, 'foo')
  }
}

ReactDOM.render(

  // Here we use the HelloWorld class to create an element by passing an object
  // instead of a string as the first argument.
  React.createElement(HelloWorld, null),

  // The second argument is always the same: where are we rendering our virtual
  // DOM.
  document.getElementById('content')
)
