import React, { Component } from 'react';
import { GoTrashcan, GoListUnordered } from 'react-icons/go';
import { FaLink } from 'react-icons/fa';
import { navigate } from '@reach/router';

class AdminCompetitionsList extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem = (e, whichMeeting) => {
    e.preventDefault();
    this.props.removeCompetition(whichMeeting)
  };

  render() {
    const { competitions } = this.props;
    const myMeetings = competitions.map(item => {
      return (
        <div className="list-group-item d-flex" key={item.competitionID}>
          <section
            className="btn-group align-self-center"
            role="group"
            aria-label="Competitions Options"
          >
            <button
              className="btn btn-sm btn-outline-secondary"
              title="Delete Competition"
              onClick={e => this.deleteItem(e, item.competitionID)}
            >
              <GoTrashcan />
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              title="Subscribe"
              onClick={() =>
                navigate(
                  `/competition/${item.competitionID}/subscribe`
                )
              }
            >
              <FaLink />
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              title="Goto competition"
              onClick={() =>
                navigate(
                  `/competition/${item.competitionID}`
                )
              }
            >
              <GoListUnordered />
            </button>
          </section>

          <section className="pl-3 text-left align-self-center">
            <div>
              {item.competitionDate} - {item.competitionType}
            </div>
            <div>
              {item.competitionName}
            </div>
          </section>
        </div>
      );
    });

    return <div>{myMeetings}</div>;
  }
}

export default AdminCompetitionsList;
