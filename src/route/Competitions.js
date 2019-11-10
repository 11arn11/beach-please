import React, { Component } from 'react';
import { FaUndo } from 'react-icons/fa';
import CompetitionsList from '../CompetitionsList';

class Competitions extends Component {
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
        displayCompetitions: this.props.competitions
    });
  }
  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    this.setState({ [itemName]: itemValue });

  }

  handleSubmit(e) {
    e.preventDefault();
  }

  resetQuery() {
    this.setState({
      competitionName: '',
      competitionType: '',
      competitionDate: '',
      displayCompetitions: this.state.allCompetitions,
    });
  }

  render() {

    const dataFilter = item => 
      item.competitionName.toLowerCase().match(this.state.competitionName.toLowerCase()) && true;

    /*
    const filteredCompetitions = this.state.displayCompetitions.filter(dataFilter)
    */

    const filteredCompetitions = this.props.competitions ? this.props.competitions.filter(dataFilter) : [];

    
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">

        <div className="col-md-8 text-center">
            <h1 className="font-weight-light">Competitions</h1>
            <div className="card bg-light">
              <div className="card-body text-center">
                <form
                  className="formgroup"
                  onSubmit={this.handleSubmit}
                >
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
                      placeholder="Name"
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
                      <option value="">vs</option>
                      <option value="2vs2">2vs2</option>
                      <option value="3vs3">3vs3</option>
                      <option value="4vs4">4vs4</option>
                    </select>
                  </section>
                  <div className="input-group input-group-lg">
                    <input
                      type="date"
                      className="form-control"
                      name="competitionDate"
                      placeholder="Competition Date"
                      aria-describedby="buttonAdd"
                      value={this.state.competitionDate}
                      onChange={this.handleChange}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-sm btn-outline-info "
                        title="Reset Search"
                        onClick={() => this.resetQuery()}
                      >
                        <FaUndo />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-11 col-md-6 text-center">
            <div className="card border-top-0 rounded-0">
              {filteredCompetitions && filteredCompetitions.length ? (
                <div className="card-body py-2">
                  <h4 className="card-title font-weight-light m-0">
                    Competitions
                  </h4>
                </div>
              ) : null}

              {filteredCompetitions && (
                <div className="list-group list-group-flush">
                  <CompetitionsList
                    competitions={filteredCompetitions}
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
