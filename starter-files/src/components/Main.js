import React from 'react';
import Header from './Header';
import Results from './Results';
import Search from './Search';

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      numBeers: 10,
      beers: [],
      loading: true
    }
  }

  componentWillMount() {
    // Triggers beer loading
    const params = this.props.match.params || {};
    const searchTerm = params.searchTerm || undefined;
    this.loadBeers(searchTerm);
  }

  //Trigger new search from any URL because new props
  componentWillReceiveProps(nextProps) {
    this.loadBeers(nextProps.match.params.searchTerm);
  }

  // ES6 default properties (searchTerm = 'hops')
  loadBeers = (searchTerm = 'hops') => {
    this.setState({ loading: true });

    // Check for beers in local storage
    // const localStorageBeers = localStorage.getItem('search-${searchTerm}');
    // if (localStorageBeers) {
    //   const localBeers = JSON.parse(localStorageBeers);
    //   this.setState({ beers: localBeers, loading: false });
    //   return; // Stop before fetch
    // }

    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
    .then(data => data.json())
    .then((beers) => {
      console.log(beers);
      //filter for beers with images
      const filteredBeers = beers.data.filter(beer => !!beer.labels);
      this.setState({ beers: filteredBeers, loading: false });
      localStorage.setItem(`search-${searchTerm}`, JSON.stringify(this.state))
    })
    .catch(err => console.error(err));
  }

  // Workaround to bind this to custom function
  incrementBeers = () => {
    // make a new variable of the updated state
    const updatedBeers = this.state.numBeers + 1;
    // Set new variable with setState();
    this.setState({
      numBeers: updatedBeers
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header siteName="Beer Me 🍺" />
        <Search />
        <button onClick={this.incrementBeers}>{this.state.numBeers}</button>
        {/* Can use … spread to blast state around, but not a good idea */}
        {/* <Results {...this.state} /> */ }
        <Results beers={this.state.beers} loading={this.state.loading} />
      </div>
    )
  }
};

export default Main;
