//let h1 = React.createElement('h1', null, 'Hello world!')

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

  // The component class example defines render() using ES6 style, in which you
  // omit the colon and the word function. It’s exactly the same as defining an
  // attribute (a.k.a. key or object property) with a value that’s a function:
  // that is, typing render: function().

  render() {
    console.log(Object.isFrozen(this.props));

    return React.createElement(
      'h1',
      this.props,
      'Hello ' + this.props.subject + ' world!!',
    )
  }
}

ReactDOM.render(

  // Here we use the HelloWorld class to create an element by passing an object
  // instead of a string as the first argument.

  // Example of using createElement only once.
  // React.createElement(HelloWorld, null),

  // Example of using HelloWorld class with createElement multiple times.
  React.createElement(
    'div',
    null,
    React.createElement(HelloWorld, {id: 'ember', subject: 'Ember', title: 'Framework A'}),
    React.createElement(HelloWorld, {id: 'backbone', subject: 'Angular', title: 'Framework B'}),
    React.createElement(HelloWorld, {id: 'angular', subject: 'Backbone', title: 'Framework C'})
  ),

  // The second argument is always the same: where are we rendering our virtual
  // DOM.
  document.getElementById('content')
);
