import React, { Component } from 'react';
import {
  Grid, Row, Col, Panel, Image,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../styles/Dashboard.scss';
import dummypic from '../assets/images/monalisa.jpg';
import arrowback from '../assets/images/arrowback.svg';
import arrowfwd from '../assets/images/arrowfwd.svg';

const Card = (props) => {
  const { status } = props;
  return (
    <Panel>
      <Panel.Body>
        <Row>
          <Col xs={6}>
            <Image src={dummypic} circle responsive className="member-pic" />
          </Col>
          <Col xs={6}>
            <h4>Fernando Rivas</h4>
          </Col>
        </Row>
        <Row className="arrows-row">
          <Col xs={6}>
            {
            status === 'hired' || status === 'interviewing'
              ? (
                <span className="move move-left"><Image src={arrowback} className="pull-left" /></span>
              )
              : null
            }
          </Col>
          <Col xs={6}>
            {
              status === 'applied' || status === 'interviewing'
                ? (
                  <span className="move move-right"><Image src={arrowfwd} className="pull-right" /></span>
                )
                : null
            }
          </Col>
        </Row>
      </Panel.Body>
    </Panel>
  );
};

Card.propTypes = {
  status: PropTypes.string.isRequired,
};

class Dashboard extends Component {
  componentDidMount() {
    const { onGetCrew } = this.props;
    onGetCrew();
  }

  render() {
    const { members, memberStatus } = this.props;
    const memberCards = { applied: [], interviewing: [], hired: [] };

    if (members.length > 0) {
      members.forEach((singleMember, key) => {
        memberCards[memberStatus[key].status].push(<Card key={key} status={memberStatus[key].status} />);
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
};

export default Dashboard;
