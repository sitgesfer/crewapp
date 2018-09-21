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
  status: PropTypes.bool.isRequired,
};

class Dashboard extends Component {
  render() {
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
            <Card status="applied" />
            <Card status="applied" />
          </Col>
          <Col xs={4}>
            <Card status="interviewing" />
          </Col>
          <Col xs={4}>
            <Card status="hired" />
          </Col>
        </Row>
      </Grid>
    );
  }
}

Dashboard.propTypes = {};

export default Dashboard;
