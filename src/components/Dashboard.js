import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Row, Col,
} from 'react-bootstrap';
import _ from 'lodash';
import Card from './Card';
import '../styles/Dashboard.scss';

class Dashboard extends Component {
  componentDidMount() {
    const { onGetCrew } = this.props;
    onGetCrew();
  }

  /**
   * Changes a status of a member according to his/her
   * current position to the left of the dashboard.
   * @param member
   * @param status
   */
  sendMemberLeft(member, status) {
    const { onMoveCrew } = this.props;
    if (status === 'interviewing') {
      onMoveCrew(member, 'applied');
    } else {
      onMoveCrew(member, 'interviewing');
    }
  }

  /**
   * Changes a status of a member according to his/her
   * current position to the right of the dashboard.
   * @param member
   * @param status
   */
  sendMemberRight(member, status) {
    const { onMoveCrew } = this.props;
    if (status === 'applied') {
      onMoveCrew(member, 'interviewing');
    } else {
      onMoveCrew(member, 'hired');
    }
  }

  render() {
    const { members, memberStatus } = this.props;
    const memberCards = { applied: [], interviewing: [], hired: [] };

    if (members.length > 0) {
      members.forEach((singleMember, key) => {
        const memberDataProps = {
          name: `${singleMember.name.title} ${singleMember.name.first} ${singleMember.name.last}`,
          city: singleMember.location.city,
          picture: singleMember.picture.medium,
        };

        memberCards[memberStatus[key].status]
          .push(<Card
            key={_.uniqueId()}
            member={key}
            status={memberStatus[key].status}
            onSendLeft={(member, status) => this.sendMemberLeft(member, status)}
            onSendRight={(member, status) => this.sendMemberRight(member, status)}
            {...memberDataProps}
          />);
      });
    }

    return (
      <Grid className="dashboard">
        <Row>
          <Col xs={4}>
            <h3>Applied</h3>
          </Col>
          <Col xs={4}>
            <h3>Interviewing</h3>
          </Col>
          <Col xs={4}>
            <h3>Hired</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            { memberCards.applied}
          </Col>
          <Col xs={4}>
            { memberCards.interviewing}
          </Col>
          <Col xs={4}>
            { memberCards.hired}
          </Col>
        </Row>
      </Grid>
    );
  }
}

Dashboard.propTypes = {
  onGetCrew: PropTypes.func.isRequired,
  members: PropTypes.array.isRequired,
  memberStatus: PropTypes.array.isRequired,
  onMoveCrew: PropTypes.func.isRequired,
};

export default Dashboard;
