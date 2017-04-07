import React from 'react';
import Loader from './Loader';
import Header from './Header';

class Single extends React.Component {
  static propTypes = {

  }

  constructor() {
    super();
    this.state = {
      beer: {},
      loading: true
    }
  }

  componentWillMount() {
    this.loadBeer();
  }

  loadBeer = () => {
    this.setState({ loading: true });

    const beerId = this.props.match.params.beerId;

    console.log(beerId);

    fetch(`http://api.react.beer/v2/beer/${beerId}`)
    .then(data => data.json())
    .then((beer) => {
      console.log(beer);
      this.setState({ beer: beer.data, loading: false });
    })
    .catch(err => console.error(err));
  }

  render() {
    if (this.state.loading) {
      return <Loader loaderMessage="Finding your brew" />
    }

    let glassPresent = false;
    const { name, abv, description } = this.state.beer;
    const image = this.state.beer.labels.large
    if (this.state.beer.glass) {
      //const glassName = this.state.beer.glass.name;
      //const glasswareId = this.state.beer.glass.id;
      glassPresent = true;
    }
    console.log(glassPresent);
    const styleName = this.state.beer.style.name;
    const styleDesc = this.state.beer.style.description;
    return (
      <div className="wrapper">
        <Header siteName="Beer me!" />
        <div className="single-beer">
          <h3>{name}</h3>
          <p>{description}</p>
          <img className="label" src={image} alt={name} />
          <div className="glass">
            {glassPresent ? (
              <p>No Glass data</p>
            ) : (
              <p>No glass data</p>
            )}
            <p>ABV: {abv}%</p>
            <h3>More info on {styleName}</h3>
            <p>{styleDesc}</p>
          </div>
        </div>
      </div>
    )
  }
};

export default Single;

//<div>
//  <img src={`/images/glass-${glasswareId}`} alt={glassName} />
//  <h2>{glassName}</h2>
//</div>
