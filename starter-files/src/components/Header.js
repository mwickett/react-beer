import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  static propTypes = {
    siteName: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <h1>
          <Link to='/'>{this.props.siteName}</Link>
        </h1>
      </div>
    )
  }
};

export default Header;
