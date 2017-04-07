import React from 'react';

class Glass extends React.Component {
  static propTypes = {
    glassName: React.PropTypes.string.isRequired,
    
  }

  render() {
    return(
      <div className="glass">
        <img src={`/images/glass-${glasswareId}.jpg`} alt={glassName} />
        <h3>{glassName} Glass</h3>
        <p>ABV: {abv}%</p>
        <h3>More info on {styleName}</h3>
        <p>{styleDesc}</p>
      </div>
    )
  }
}
