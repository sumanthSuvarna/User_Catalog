import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const SimilarProducts = ({product,id})=> {

    return (
        <Col >
        <Card xs ={6} sm={6}  style={styles.card}>
            <Card.Body style={{padding:"0px"}}>
                <Image  src={require("../../../../public/images/"+id+".png")}
                      alt="thumbnail"
                      className="img-thumbnail"
                       />
                <div style={styles.title}>{product.title}</div>
                <div style={styles.price}>{product.price} </div>
            </Card.Body>                
        </Card>
        </Col>
    )
}

const styles = {

    card :{
      height : "10rem",
      marginTop:"10px",
      minWidth:"131px",
      marginBottom:"20px"
    } ,
    title : {
      fontFamily : "Open Sans",
      fontSize : "10px",
      padding:"4px",
      color :   "#707070"
    },
    price : {
        fontFamily : "Open Sans,Semibold",
        fontSize : "13px",
        color :   "#E01A1A",
        padding:"4px"
    }
  }

export default SimilarProducts;