import React, { Component } from 'react';
import CompetitionsList from '../CompetitionsList';

class Competitions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      competitionName: '',
      competitionType: '',
      competitionDate: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    this.setState({ [itemName]: itemValue });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCompetition({
      'competitionName': this.state.competitionName,
      'competitionType': this.state.competitionType,
      'competitionDate': this.state.competitionDate,
    });
    this.setState({
      'competitionName': '',
      'competitionType': '',
      'competitionDate': '',
    });
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">

          <div className="col-11 col-md-6 text-center">
            <div className="card border-top-0 rounded-0">
              {this.props.competitions && this.props.competitions.length ? (
                <div className="card-body py-2">
                  <h4 className="card-title font-weight-light m-0">
                    Competitions
                  </h4>
                </div>
              ) : null}

              {this.props.competitions && (
                <div className="list-group list-group-flush">
                  <CompetitionsList
                    competitions={this.props.competitions}
                  />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Competitions;
