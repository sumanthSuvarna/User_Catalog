import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup'

const GridList = ({name , children, style}) => {

    return (
        <div>
          <Container  fluid={false}>
            <Row noGutters={true}>
              <Col  style={Object.assign(styles.heading, style)}>
                <p >LISTING</p>
              </Col>
            </Row>
            <Row noGutters={true}>
                     {children}
            </Row>
          </Container>
        </div>
    );
};

const styles = {
  heading : {
      fontFamily : "Roboto",
      fontSize: "18px",
      color: "#333333",      
      paddingTop: "3rem"
  }
}

GridList.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
    style: PropTypes.object
  };

  export default GridList;
