import React from 'react';
import Beer from './Beer';
import Loader from './Loader';

class Results extends React.Component {
  static propTypes = {
    beers: React.PropTypes.array.isRequired,
    loading: React.PropTypes.bool.isRequired
  }

  render() {
    if (this.props.loading) {
      return <Loader loaderMessage="Pouring a cold one" />
    }

    return (
      <div className="beers">
        {this.props.beers.map(beer => <Beer key={beer.id} details={beer} />)}
      </div>
    )
  }
};

export default Results;
