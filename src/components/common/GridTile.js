import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image'

const GridTile = ({id,product,  onClick,style}) => {


  return (

      <Col xs={6} md={3} lg={2} 
          style={Object.assign(styles.col, style)} 
          onClick={onClick} 
          >
        <Link style= {styles.link} to={{
            'pathname' : '/Products/' + id+'',
            'state' : {
              'product' : product
            }
            }}>
        <Card style= {styles.card} onClick={onClick} >

              <Image src={"images/"+id+".png"} alt="thumbnail" className="img-thumbnail" />
            
            <Card.Body style={Object.assign(styles.body, style)}>
              <Card.Text style={Object.assign(styles.desc, style)}>{product.attributes.title}</Card.Text>
              <Card.Text style={Object.assign(styles.prize, style)}>{product.attributes.price}</Card.Text>
            </Card.Body>
        </Card>
        </Link>
      </Col>
  );
};

const styles = {
    card:{
      minWidth:"140px"
    },
    link:{
      fontFamily:"Roboto",
      color:"black",
      textDecoration:"none"
    },
    desc : {
      height:"50px",
      overflow: "hidden",
      fontSize:"12px",
    },
    body:{
      paddingLeft:"8px",
      paddingRight:"8px"
    },
    prize:{
      color:"#E01A1A",      
      fontWeight:"bold"
    },
    col:{
      padding:"5px"
    }
}


GridTile.propTypes = {
    product:PropTypes.object.isRequired,
    id : PropTypes.number,
    onClick: PropTypes.func,
    style: PropTypes.object
  };

  export default GridTile;
