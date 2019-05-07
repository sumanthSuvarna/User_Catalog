import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image'

const GridTile = ({id,product,  onClick,style}) => {


  return (

      <Col xs={6} md={3} lg={2} style={Object.assign(styles.col, style)} onClick={onClick} >
        <Card style= {styles.card} onClick={onClick} >
          <Link to={{
            'pathname' : '/Products/' + id+'',
            'state' : {
              'product' : product
            }
            }}>
              <Image src={"images/"+id+".png"} alt="thumbnail" className="img-thumbnail" />
            </Link>
            <Card.Body style={Object.assign(styles.body, style)}>
              <Card.Text style={Object.assign(styles.desc, style)}>{product.attributes.title}</Card.Text>
              <Card.Text style={Object.assign(styles.prize, style)}>{product.attributes.price}</Card.Text>
            </Card.Body>
        </Card>

      </Col>
  );
};

const styles = {
    card:{
      minWidth:"140px"
    },
    desc : {
      height:"50px",
      overflow: "hidden",
      fontSize:"12px",
      fontFamily:"Roboto,medium"
    },
    body:{
      paddingLeft:"8px",
      paddingRight:"8px"
    },
    prize:{
      color:"#E01A1A",
      fontFamily:"Roboto",
      fontWeight:"bold"
    },
    col:{
      padding:"5px"
    }
}


GridTile.propTypes = {
    product:PropTypes.object.isRequired,
    onClick: PropTypes.func,
    style: PropTypes.object
  };

  export default GridTile;
