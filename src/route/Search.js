import React, { Component } from 'react';
import CompetitionsList from '../CompetitionsList';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      competitionName: '',
      competitionType: '',
      competitionDate: '',
      allCompetitions: [],
      displayCompetitions: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetQuery = this.resetQuery.bind(this);
  }

  componentDidMount() {
      this.setState({
        allCompetitions: this.props.competitions,
        displayCompetitions: []
    });
  }
  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    this.setState({ [itemName]: itemValue });

  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ displayCompetitions: this.filter() });
  }

  resetQuery() {
    this.setState({
      competitionName: '',
      competitionType: '',
      competitionDate: '',
      displayCompetitions: [],
    });
  }

  filter() {

    if (!this.props.competitions) return [];

    let items;

    items = this.props.competitions.filter(item => {

      // item.competitionName.toLowerCase().match(this.state.competitionName.toLowerCase()) && true);

      if (! (item.competitionName.toLowerCase().match(this.state.competitionName.toLowerCase()) && true)){
        return false;
      }

      if (this.state.competitionType && this.state.competitionType !== item.competitionType){
        return false;
      }

      if (this.state.competitionDate && this.state.competitionDate !== item.competitionDate){
        return false;
      }

      return true;

    });

    return items;

  }

  render() {

    return (

      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="font-weight-light">Competitions</h1>
            <div className="card bg-light">
              <form
                className="formgroup"
                onSubmit={this.handleSubmit}
              >
                <div className="card-body text-center">
                  <h3 className="font-weight-light mb-3">search</h3>
                  <section className="form-group">
                    <label
                      className="form-control-label sr-only"
                      htmlFor="competitionName"
                    >
                      Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="competitionName"
                      name="competitionName"
                      placeholder="Cerca per nome"
                      value={this.state.competitionName}
                      onChange={this.handleChange}
                    />
                  </section>
                  <section className="form-group">
                    <label
                      className="form-control-label sr-only"
                      htmlFor="competitionType"
                    >
                      Type
                    </label>
                    <select
                      className="form-control"
                      name="competitionType"
                      placeholder="Competition type"
                      aria-describedby="buttonAdd"
                      value={this.state.competitionType}
                      onChange={this.handleChange}
                    >
                      <option value="">giocatori</option>
                      <option value="2vs2">2vs2</option>
                      <option value="3vs3">3vs3</option>
                      <option value="4vs4">4vs4</option>
                    </select>
                  </section>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control"
                      name="competitionDate"
                      placeholder="Competition Date"
                      aria-describedby="buttonAdd"
                      value={this.state.competitionDate}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group text-center mb-0">
                    <button
                      className="btn btn-primary"
                      title="Search"
                      onClick={this.handleSubmit}
                    >
                      Cerca
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-11 col-md-6 text-center">
            <div className="card border-top-0 rounded-0">
              {this.state.displayCompetitions && this.state.displayCompetitions.length ? (
                <div className="card-body py-2">
                  <h4 className="card-title font-weight-light m-0">
                    Results
                  </h4>
                </div>
              ) : null}

              {this.state.displayCompetitions && (
                <div className="list-group list-group-flush">
                  <CompetitionsList
                    competitions={this.state.displayCompetitions}
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

export default Search;
