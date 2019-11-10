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
            aria-label="Meeting Options"
          >
            <button
              className="btn btn-sm btn-outline-secondary"
              title="Delete Meeting"
              onClick={e => this.deleteItem(e, item.competitionID)}
            >
              <GoTrashcan />
            </button>
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
            <button
              className="btn btn-sm btn-outline-secondary"
              title="Attendees List"
              onClick={() =>
                navigate(
                  `/attendees/${this.props.userID}/${item.competitionID}`
                )
              }
            >
              <GoListUnordered />
            </button>
          </section>

          <section className="pl-3 text-left align-self-center">
            <div>
            {item.competitionName} - {item.competitionType} - {item.competitionDate}
            </div>
          </section>
        </div>
      );
    });

    return <div>{myMeetings}</div>;
  }
}

export default AdminCompetitionsList;
