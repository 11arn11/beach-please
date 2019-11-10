import React, { Component } from 'react';
import { FaLink } from 'react-icons/fa';
import { navigate } from '@reach/router';

class CompetitionsList extends Component {
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
            aria-label="Meeting Options"
          >
            <button
              className="btn btn-sm btn-outline-secondary"
              title="Check In"
              onClick={() =>
                navigate(
                  `/checkin/${this.props.userID}/${item.competitionID}`
                )
              }
            >
              <FaLink />
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

export default CompetitionsList;
