import React from 'react';

class Search extends React.Component {

  static contextTypes = {
    // Ask for router to be exposed
    router: React.PropTypes.object
  }

  handleSubmit = (e) => {
    //Stop default
    e.preventDefault();
    // get the value
    const searchTerm = this.q.value;
    console.log(searchTerm);
    this.context.router.history.push(`/search/${searchTerm}`)
  }

  static propTypes = {

  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={(q) => this.q = q} placeholder="Hoppy, Malt, Angry, New..." />
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
};

export default Search;
