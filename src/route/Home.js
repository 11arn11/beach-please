import React, { Component } from 'react';
import { Link } from '@reach/router';

class Home extends Component {
  render() {

    //const { user } = this.props;

    const biggerLead = {
      fontSize: 1.4 + 'em',
      fontWeight: 200
    };

    return (
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-md-10 col-lg-8 col-xl-7">
            <div
              className="display-4 text-primary mt-3 mb-2"
              style={{
                fontSize: 2.8 + 'em'
              }}
            >
              Beach Please
            </div>
            <p className="lead" style={biggerLead}>
              Con questa app potrai cercare tornei, campionati, gare o competizioni di Beach Volley.
            </p>

            <Link to="/search" className="btn btn-primary">
              Cerca un torneo
            </Link>

          </div>{' '}
          {/* columns */}
        </div>
      </div>
    );
  }
}

export default Home;
