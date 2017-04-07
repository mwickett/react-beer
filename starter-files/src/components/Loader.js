import React from 'react';

class Loader extends React.Component {

  static propTypes = {
    loaderMessage: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="loader">
        <img src="/images/ball.svg" alt="Loading ball" />
        <h2>{this.props.loaderMessage}</h2>
      </div>
    )
  }
};

export default Loader;
