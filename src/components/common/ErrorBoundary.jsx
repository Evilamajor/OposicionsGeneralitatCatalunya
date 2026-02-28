import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary captured an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bloc-page">
          <div className="bloc-contingut">
            <div className="error">
              <h3>S'ha produït un error inesperat</h3>
              <p>Si us plau, torna-ho a provar o recarrega la pàgina.</p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
