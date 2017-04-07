import React from 'react';
import slug from 'slugify';
import { Link } from 'react-router-dom';

class Beer extends React.Component {
  static propTypes = {
    details: React.PropTypes.object.isRequired
  }

  render() {
    // Data massaging
    //This grabs the matching properties from the object - ES6 Destructuring
    const { name, labels, id } = this.props.details;
    const image = labels ? labels.medium : 'notfound.jpg';
    return (
      <div className="beer">
        <Link to={`/beer/${id}/${slug(name)}`}>
          <h2>{name}</h2>
          <img src={image} alt={name} />
        </Link>
      </div>
    )
  }
};

export default Beer;
