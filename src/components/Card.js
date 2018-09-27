import React from 'react';
import PropTypes from 'prop-types';
import {
  Col, Image, Row, Panel,
} from 'react-bootstrap';
import arrowback from '../assets/images/arrowback.svg';
import arrowfwd from '../assets/images/arrowfwd.svg';

/**
 * Card component
 * @param props
 * @returns {*}
 * @constructor
 */
const Card = (props) => {
  const {
    status, member, onSendLeft, onSendRight, name, city, picture,
  } = props;
  return (
    <Panel>
      <Panel.Body>
        <Row>
          <Col xs={4}>
            <Image src={picture} circle responsive className="member-pic" />
          </Col>
          <Col xs={8}>
            <h4>{name}</h4>
            <span className="member-name">{city}</span>
          </Col>
        </Row>
        <Row className="arrows-row">
          <Col xs={6}>
            {
              status === 'hired' || status === 'interviewing'
                ? (
                  <div role="button" tabIndex={0} className="move move-left" onClick={() => onSendLeft(member, status)}>
                    <Image src={arrowback} className="pull-left" />
                  </div>
                )
                : null
            }
          </Col>
          <Col xs={6}>
            {
              status === 'applied' || status === 'interviewing'
                ? (
                  <div role="button" className="move move-right" onClick={() => onSendRight(member, status)}>
                    <Image src={arrowfwd} className="pull-right" />
                  </div>
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
  onSendLeft: PropTypes.func.isRequired,
  onSendRight: PropTypes.func.isRequired,
  member: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Card;
