import React from 'react';

/*In the code you provided, the ErrorBoundary component is a class component that implements the getDerivedStateFromError method, which is a special method in React that is called whenever a child component throws an error. This method updates the component's state to indicate that an error has occurred. */

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Oops, something went wrong!</h1>;
    }

    return this.props.children;
  }
  /* The render method of the ErrorBoundary component checks the hasError state. If an error has occurred, it returns a fallback UI (in this case, an <h1> element with the text "Oops, something went wrong!"). If no error has occurred, it returns the original child components (i.e., the components that were passed as props to the ErrorBoundary component). */
}

export default ErrorBoundary;

/*In React, an Error Boundary is a component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI. */